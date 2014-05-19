/**
 * espowerify - Browserify transform for power-assert.
 * 
 * https://github.com/twada/espowerify
 *
 * Copyright (c) 2014 Takuto Wada
 * Licensed under the MIT license.
 *   https://github.com/twada/espowerify/blob/master/MIT-LICENSE.txt
 */
var through = require('through'),
    espowerSourceToSource = require('espower-source');

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
        stream.queue(espowerSourceToSource(data, filepath, options));
        stream.queue(null);
    }

    return stream;
}

module.exports = espowerify;
