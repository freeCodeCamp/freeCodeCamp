[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]
[![Join the chat at https://gitter.im/eslint/doctrine](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/eslint/doctrine?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Doctrine

Doctrine is a [JSDoc](http://usejsdoc.org) parser that parses documentation comments from JavaScript (you need to pass in the comment, not a whole JavaScript file).

## Installation

You can install Doctrine using [npm](https://npmjs.com):

```
$ npm install doctrine --save-dev
```

Doctrine can also be used in web browsers using [Browserify](http://browserify.org).

## Usage

Require doctrine inside of your JavaScript:

```js
var doctrine = require("doctrine");
```

### parse()

The primary method is `parse()`, which accepts two arguments: the JSDoc comment to parse and an optional options object. The available options are:

* `unwrap` - set to `true` to delete the leading `/**`, any `*` that begins a line, and the trailing `*/` from the source text. Default: `false`.
* `tags` - an array of tags to return. When specified, Doctrine returns only tags in this array. For example, if `tags` is `["param"]`, then only `@param` tags will be returned. Default: `null`.
* `recoverable` - set to `true` to keep parsing even when syntax errors occur. Default: `false`.
* `sloppy` - set to `true` to allow optional parameters to be specified in brackets (`@param {string} [foo]`). Default: `false`.
* `lineNumbers` - set to `true` to add `lineNumber` to each node, specifying the line on which the node is found in the source. Default: `false`.

Here's a simple example:

```js
var ast = doctrine.parse(
    [
        "/**",
        " * This function comment is parsed by doctrine",
        " * @param {{ok:String}} userName",
        "*/"
    ].join('\n'), { unwrap: true });
```

This example returns the following AST:

    {
        "description": "This function comment is parsed by doctrine",
        "tags": [
            {
                "title": "param",
                "description": null,
                "type": {
                    "type": "RecordType",
                    "fields": [
                        {
                            "type": "FieldType",
                            "key": "ok",
                            "value": {
                                "type": "NameExpression",
                                "name": "String"
                            }
                        }
                    ]
                },
                "name": "userName"
            }
        ]
    }

See the [demo page](http://eslint.org/doctrine/demo/) more detail.

## Team

These folks keep the project moving and are resources for help:

* Nicholas C. Zakas ([@nzakas](https://github.com/nzakas)) - project lead
* Yusuke Suzuki ([@constellation](https://github.com/constellation)) - reviewer

## Contributing

Issues and pull requests will be triaged and responded to as quickly as possible. We operate under the [ESLint Contributor Guidelines](http://eslint.org/docs/developer-guide/contributing), so please be sure to read them before contributing. If you're not sure where to dig in, check out the [issues](https://github.com/eslint/doctrine/issues).

## Frequently Asked Questions

### Can I pass a whole JavaScript file to Doctrine?

No. Doctrine can only parse JSDoc comments, so you'll need to pass just the JSDoc comment to Doctrine in order to work.


### License

#### doctrine

Copyright (C) 2012 [Yusuke Suzuki](http://github.com/Constellation)
 (twitter: [@Constellation](http://twitter.com/Constellation)) and other contributors.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.

  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

#### esprima

some of functions is derived from esprima

Copyright (C) 2012, 2011 [Ariya Hidayat](http://ariya.ofilabs.com/about)
 (twitter: [@ariyahidayat](http://twitter.com/ariyahidayat)) and other contributors.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.

  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


#### closure-compiler

some of extensions is derived from closure-compiler

Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/


### Where to ask for help?

Join our [Chatroom](https://gitter.im/eslint/doctrine)

[npm-image]: https://img.shields.io/npm/v/doctrine.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/doctrine
[travis-image]: https://img.shields.io/travis/eslint/doctrine/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/eslint/doctrine
[coveralls-image]: https://img.shields.io/coveralls/eslint/doctrine/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/eslint/doctrine?branch=master
[downloads-image]: http://img.shields.io/npm/dm/doctrine.svg?style=flat-square
[downloads-url]: https://www.npmjs.com/package/doctrine
