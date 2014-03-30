espowerify
================================

[![Build Status](https://travis-ci.org/twada/espowerify.png?branch=master)](https://travis-ci.org/twada/espowerify)
[![NPM version](https://badge.fury.io/js/espowerify.png)](http://badge.fury.io/js/espowerify)
[![Dependency Status](https://gemnasium.com/twada/espowerify.png)](https://gemnasium.com/twada/espowerify)

Power Assert transformer for browserify.


DESCRIPTION
---------------------------------------
`espowerify` is a Power Assert transformer for browserify.

`espowerify` applies [espower](http://github.com/twada/espower) to target sources through browserify transform chain. `espower` manipulates assertion expression (JavaScript Code) represented as [Mozilla JavaScript AST](https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API), to instrument power-assert feature into the code.

Please note that `espowerify` is an alpha version product. Pull-requests, issue reports and patches are always welcomed. See [power-assert](http://github.com/twada/power-assert) project for more documentation.


AUTHOR
---------------------------------------
* [Takuto Wada](http://github.com/twada)


LICENSE
---------------------------------------
Licensed under the [MIT](https://raw.github.com/twada/espowerify/master/MIT-LICENSE.txt) license.
