/*
 * espowerify - Browserify transform for power-assert.
 * 
 * https://github.com/twada/espowerify
 *
 * Copyright (c) 2014 Takuto Wada
 * Licensed under the MIT license.
 *   https://raw.github.com/twada/espowerify/master/MIT-LICENSE.txt
 */
var through = require('through'),
    espower = require('espower'),
    esprima = require('esprima'),
    escodegen = require('escodegen'),
    merge = require('lodash.merge'),
    sourceMap = require('convert-source-map');

/**
 * Apply espower through the browserify transform chain.
 *
 * @param {String} filepath
 * @param {Object} options
 * @return {Stream}
 */
function espowerify(filepath, options) {
    'use strict';

    var data = '',
        stream = through(write, end);

    function write(buf) {
        data += buf;
    }

    function end() {
        var espowerOptions, modifiedAst, generatedOutput, code, map,
            jsCode = data,
            jsAst = esprima.parse(jsCode, {tolerant: true, loc: true, tokens: true, source: filepath});
        espowerOptions = merge(merge(espower.defaultOptions(), options), {
            destructive: true,
            path: filepath,
            source: jsCode
        });
        modifiedAst = espower(jsAst, espowerOptions);
        generatedOutput = escodegen.generate(modifiedAst, {
            sourceMap: true,
            sourceMapWithCode: true
        });
        code = generatedOutput.code; // Generated source code
        map = sourceMap.fromJSON(generatedOutput.map);
        map.sourcemap.sourcesContent = [jsCode];
        stream.queue(code + '\n' + map.toComment() + '\n');
        stream.queue(null);
    }

    return stream;
}

module.exports = espowerify;
