/**
 * espowerify - Browserify transform for power-assert.
 * 
 * https://github.com/twada/espowerify
 *
 * Copyright (c) 2014 Takuto Wada
 * Licensed under the MIT license.
 *   https://github.com/twada/espowerify/blob/master/MIT-LICENSE.txt
 */
'use strict';

var through = require('through'),
    espower = require('espower'),
    esprima = require('esprima'),
    escodegen = require('escodegen'),
    extend = require('xtend'),
    path = require('path'),
    convert = require('convert-source-map'),
    sm = require('source-map'),
    SourceMapGenerator = sm.SourceMapGenerator,
    SourceMapConsumer = sm.SourceMapConsumer;


// borrowed from vinyl-sourcemaps-apply
function mergeSourceMap(incomingSourceMap, outgoingSourceMap) {
    if (typeof outgoingSourceMap === 'string' || outgoingSourceMap instanceof String) {
        outgoingSourceMap = JSON.parse(outgoingSourceMap);
    }
    if (!incomingSourceMap) {
        return outgoingSourceMap;
    }
    var generator = SourceMapGenerator.fromSourceMap(new SourceMapConsumer(outgoingSourceMap));
    generator.applySourceMap(new SourceMapConsumer(incomingSourceMap));
    return JSON.parse(generator.toString());
}


function transform (jsCode, filepath, options) {
    var inMap;

    var jsAst = esprima.parse(jsCode, {tolerant: true, loc: true, source: filepath});

    var espowerOptions = extend(espower.defaultOptions(), options, {
        destructive: true,
        path: filepath
    });

    if (espowerOptions.sourceMap) {
        inMap = espowerOptions.sourceMap;
    } else {
        var commented = convert.fromSource(jsCode);
        if (commented) {
            inMap = commented.toObject();
            espowerOptions.sourceMap = inMap;
        }
    }

    var modifiedAst = espower(jsAst, espowerOptions);

    // keep paths absolute by not using `file` and `sourceMapRoot`
    // paths will be resolved by mold-source-map
    var escodegenOutput = escodegen.generate(modifiedAst, {
        sourceMap: true,
        sourceMapWithCode: true
    });
    var modifiedCode = escodegenOutput.code;
    var outMap = convert.fromJSON(escodegenOutput.map.toString());

    if (inMap) {
        var mergedRawMap = mergeSourceMap(inMap, outMap.toObject());
        return modifiedCode + '\n' + convert.fromObject(mergedRawMap).toComment() + '\n';
    } else {
        outMap.setProperty('sources', [filepath]);
        outMap.setProperty('sourcesContent', [jsCode]);
        return modifiedCode + '\n' + outMap.toComment() + '\n';
    }
}


/**
 * Apply espower through the browserify transform chain.
 *
 * @param {String} filepath
 * @param {Object} options
 * @return {Stream}
 */
function espowerify(filepath, options) {

    var data = '',
        stream = through(write, end);

    function write(buf) {
        data += buf;
    }

    function end() {
        stream.queue(transform(data, filepath, options));
        stream.queue(null);
    }

    return stream;
}

module.exports = espowerify;
