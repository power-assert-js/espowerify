espowerify
================================

[![Build Status][travis-image]][travis-url]
[![NPM package][npm-image]][npm-url]
[![Dependency Status][depstat-image]][depstat-url]
[![License][license-image]][license-url]

Browserify transform for power-assert.


DESCRIPTION
---------------------------------------
`espowerify` is a [browserify](http://browserify.org/) transform for [power-assert](http://github.com/power-assert-js/power-assert).

`espowerify` applies [espower](http://github.com/power-assert-js/espower) to target sources through browserify transform chain. `espower` manipulates assertion expression (JavaScript Code) represented as AST defined in [The ESTree Spec](https://github.com/estree/estree) (formerly known as [Mozilla SpiderMonkey Parser API](https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API)), to instrument power-assert feature into the code.

Pull-requests, issue reports and patches are always welcomed.

See [power-assert](http://github.com/power-assert-js/power-assert) project for more documentation.


FAQ
---------------------------------------

#### espowerify does not work with babelify!!

espowerify does not work with [babelify](https://github.com/babel/babelify) due to the change of transpiled code since babel 5.0. Please use [babel-plugin-espower with babelify](https://github.com/power-assert-js/babel-plugin-espower#with-babelify).


CHANGELOG
---------------------------------------
See [CHANGELOG](https://github.com/power-assert-js/espowerify/blob/master/CHANGELOG.md)


HOW TO USE
---------------------------------------
First, install `power-assert` and `espowerify` via npm.

    $ npm install --save-dev power-assert espowerify

Second, require `power-assert` in your test.

    --- a/test/your_test.js
    +++ b/test/your_test.js
    @@ -1,4 +1,4 @@
    -var assert = require('assert');
    +var assert = require('power-assert');

Third, apply `espowerify` through browserify transform.

by command-line,

    $ browserify -t espowerify test/your_test.js > dist/your_test.js

or programmatically,

```javascript
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var glob = require('glob');

gulp.task('build_test', function() {
    var files = glob.sync('./test/*_test.js');
    var b = browserify({entries: files, debug: true});
    b.transform('espowerify');
    return b.bundle()
        .pipe(source('all_test.js'))
        .pipe(gulp.dest('./build'));
});
```
(Note that files are transformed if matches to `entries`)

Lastly, run your test in your way. For example,

    $ mocha-phantomjs path/to/test.html


SOURCE MAPS
---------------------------------------

espowerify supports source maps. espowerify generates source maps with all original sources inlined then adds the resulting source map base64 encoded to the bottom of the transformed code.

This allows debugging the original code when using the debug flag `-d` with browserify.

    $ browserify -d -t espowerify test/your_test.js > dist/your_test_with_sourcemaps.js

or programmatically (see `debug: true` option),

```javascript
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var glob = require('glob');
var mold = require('mold-source-map');

gulp.task('build_test', function() {
    var files = glob.sync('./test/*_test.js');
    var b = browserify({entries: files, debug: true});
    b.transform('espowerify');
    return b.bundle()
        .pipe(mold.transformSourcesRelativeTo(__dirname))
        .pipe(source('all_test.js'))
        .pipe(gulp.dest('./build'));
});
```
(note: `mold-source-map` module adjusts absolute paths in resulting sourcemaps to relative path. This is required if you are debugging with Firefox)

If the debug flag is not set, these source maps will be removed by browserify and thus will not be contained inside your bundle.


API
---------------------------------------

### espowerify(filepath, options)
Apply espower through the browserify transform chain.

#### options.patterns

| type                | default value       |
|:--------------------|:--------------------|
| `Array` of `string` | objects shown below |

```javascript
[
    'assert(value, [message])',
    'assert.ok(value, [message])',
    'assert.equal(actual, expected, [message])',
    'assert.notEqual(actual, expected, [message])',
    'assert.strictEqual(actual, expected, [message])',
    'assert.notStrictEqual(actual, expected, [message])',
    'assert.deepEqual(actual, expected, [message])',
    'assert.notDeepEqual(actual, expected, [message])',
    'assert.deepStrictEqual(actual, expected, [message])',
    'assert.notDeepStrictEqual(actual, expected, [message])'
]
```

Target patterns for power assert feature instrumentation.
(This option could be passed by programmatical way only)

If callee name (for example, `assert.equal`) matches exactly and number of arguments is satisfied, then the assertion will be modified.
Detection is done by [escallmatch](http://github.com/twada/escallmatch). Any arguments enclosed in bracket (for example, `[message]`) means optional parameters. Without bracket means mandatory parameters.


AUTHOR
---------------------------------------
* [Takuto Wada](http://github.com/twada)


CONTRIBUTORS
---------------------------------------
* [azu](https://github.com/azu)


LICENSE
---------------------------------------
Licensed under the [MIT](https://github.com/power-assert-js/espowerify/blob/master/MIT-LICENSE.txt) license.


[npm-url]: https://npmjs.org/package/espowerify
[npm-image]: https://badge.fury.io/js/espowerify.svg

[travis-url]: http://travis-ci.org/power-assert-js/espowerify
[travis-image]: https://secure.travis-ci.org/power-assert-js/espowerify.svg?branch=master

[depstat-url]: https://gemnasium.com/power-assert-js/espowerify
[depstat-image]: https://gemnasium.com/power-assert-js/espowerify.svg

[license-url]: https://github.com/power-assert-js/espowerify/blob/master/MIT-LICENSE.txt
[license-image]: http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat
