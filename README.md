espowerify
================================

[![Build Status](https://travis-ci.org/twada/espowerify.svg?branch=master)](https://travis-ci.org/twada/espowerify)
[![NPM version](https://badge.fury.io/js/espowerify.svg)](http://badge.fury.io/js/espowerify)
[![Dependency Status](https://gemnasium.com/twada/espowerify.svg)](https://gemnasium.com/twada/espowerify)

Browserify transform for power-assert.


DESCRIPTION
---------------------------------------
`espowerify` is a [browserify](http://browserify.org/) transform for [power-assert](http://github.com/twada/power-assert).

`espowerify` applies [espower](http://github.com/twada/espower) to target sources through browserify transform chain. `espower` manipulates assertion expression (JavaScript Code) represented as [Mozilla JavaScript AST](https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API), to instrument power-assert feature into the code.

Please note that `espowerify` is a beta version product. Pull-requests, issue reports and patches are always welcomed.

See [power-assert](http://github.com/twada/power-assert) project for more documentation.


CHANGELOG
---------------------------------------
See [CHANGELOG](https://github.com/twada/espowerify/blob/master/CHANGELOG.md)


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

gulp.task('build_test, function() {
    var b = browserify({entries: './test/web/*test.js'});
    b.transform('espowerify');
    return b.bundle()
        .pipe(source('all_test.js'))
        .pipe(gulp.dest('./build'));
});
```

Lastly, run your test in your way. For example,

    $ mocha-phantomjs path/to/test.html


SOURCE MAPS
---------------------------------------

espowerify supports source maps. espowerify generates source maps with all original sources inlined then adds the resulting source map base64 encoded to the bottom of the transformed code.

This allows debugging the original code when using the debug flag `-d` with browserify.

    $ browserify -d -t espowerify test/your_test.js > dist/your_test_with_sourcemaps.js

or programmatically,

```javascript
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var mold = require('mold-source-map');

gulp.task('build_test, function() {
    var b = browserify({entries: './test/web/*test.js'});
    b.transform('espowerify');
    return b.bundle()
        .pipe(mold.transformSourcesRelativeTo(__dirname))
        .pipe(source('all_test.js'))
        .pipe(gulp.dest('./build'));
});
```

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
    'assert.notDeepEqual(actual, expected, [message])'
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
Licensed under the [MIT](https://github.com/twada/espowerify/blob/master/MIT-LICENSE.txt) license.
