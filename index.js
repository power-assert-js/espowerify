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
    convert = require('convert-source-map'),
    transfer = require('multi-stage-sourcemap').transfer,
    sm = require('source-map'),
    SourceMapGenerator = sm.SourceMapGenerator,
    SourceMapConsumer = sm.SourceMapConsumer;

function mergeSourceMap(incomingSourceMap, outgoingSourceMap) {
    if (typeof outgoingSourceMap === 'string' || outgoingSourceMap instanceof String) {
        outgoingSourceMap = JSON.parse(outgoingSourceMap);
    }
    if (!incomingSourceMap) {
        return outgoingSourceMap;
    }
    return JSON.parse(transfer({fromSourceMap: outgoingSourceMap, toSourceMap: incomingSourceMap}));
}

function handleUpstreamSourceMap (jsCode, options) {
    var inMap;
    if (options.sourceMap) {
        inMap = options.sourceMap;
    } else {
        var commented = convert.fromSource(jsCode);
        if (commented) {
            inMap = commented.toObject();
            options.sourceMap = inMap;
        }
    }
    return inMap;
}

function instrument (jsCode, filepath, options) {
    var jsAst = esprima.parse(jsCode, {tolerant: true, loc: true, source: filepath});
    var modifiedAst = espower(jsAst, options);
    // keep paths absolute by not using `file` and `sourceMapRoot`
    // paths will be resolved by mold-source-map
    return escodegen.generate(modifiedAst, {
        sourceMap: true,
        sourceMapWithCode: true
    });
}

function mergeEspowerOptions (options, filepath) {
    return extend(espower.defaultOptions(), options, {
        destructive: true,
        path: filepath
    });
}

function transform (jsCode, filepath, options) {
    var espowerOptions = mergeEspowerOptions(options, filepath);
    var inMap = handleUpstreamSourceMap(jsCode, espowerOptions);
    var instrumented = instrument(jsCode, filepath, espowerOptions);
    var outMap = convert.fromJSON(instrumented.map.toString());
    if (inMap) {
        var mergedRawMap = mergeSourceMap(inMap, outMap.toObject());
        var reMap = convert.fromObject(mergedRawMap);
        reMap.setProperty('sources', inMap.sources);
        reMap.setProperty('sourcesContent', inMap.sourcesContent);
        return instrumented.code + '\n' + reMap.toComment() + '\n';
    } else {
        outMap.setProperty('sources', [filepath]);
        outMap.setProperty('sourcesContent', [jsCode]);
        return instrumented.code + '\n' + outMap.toComment() + '\n';
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
