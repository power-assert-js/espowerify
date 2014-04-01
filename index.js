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
    merge = require('lodash.merge');

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
        var espowerOptions, modifiedAst,
            jsCode = data,
            jsAst = esprima.parse(jsCode, {tolerant: true, loc: true, tokens: true});
        espowerOptions = merge(merge(espower.defaultOptions(), options), {
            destructive: true,
            path: filepath,
            source: jsCode
        });
        modifiedAst = espower(jsAst, espowerOptions);
        stream.queue(escodegen.generate(modifiedAst));
        stream.queue(null);
    }

    return stream;
}

module.exports = espowerify;
