/**
 * espowerify - Browserify transform for power-assert.
 * 
 * https://github.com/power-assert-js/espowerify
 *
 * Copyright (c) 2014-2016 Takuto Wada
 * Licensed under the MIT license.
 *   https://github.com/power-assert-js/espowerify/blob/master/MIT-LICENSE.txt
 */
'use strict';

var through = require('through');
var path = require('path');
var extend = require('xtend');
var espowerSource = require('espower-source');

function endsWith (str, suffix) {
    return str.slice(str.length - suffix.length) === suffix;
}

function isTransformTarget (filepath, options) {
    if (path.extname(filepath) === '.json') {
        return false;
    }
    if (!options || !options._flags || !options._flags.entries) {
        return true;
    }
    return options._flags.entries.some(function (entryPath) {
        return endsWith(filepath, path.normalize(entryPath));
    });
}

/**
 * Apply espower through the browserify transform chain.
 *
 * @param {String} filepath
 * @param {Object} options
 * @return {Stream}
 */
function espowerify(filepath, options) {
	if (!isTransformTarget(filepath, options)) {
        return through();
    }

    var data = '';
    var stream = through(write, end);

    function write(buf) {
        data += buf;
    }

    function end() {
        var espowerOptions = extend({
            sourceRoot: process.cwd()
        }, options);
        stream.queue(espowerSource(data, filepath, espowerOptions));
        stream.queue(null);
    }

    return stream;
}

module.exports = espowerify;
