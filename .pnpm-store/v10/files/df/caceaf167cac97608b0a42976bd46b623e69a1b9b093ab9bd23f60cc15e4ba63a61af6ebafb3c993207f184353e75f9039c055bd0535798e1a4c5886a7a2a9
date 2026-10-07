CSS Media Query
===============

[![Build Status](https://travis-ci.org/ericf/css-mediaquery.png?branch=master)](https://travis-ci.org/ericf/css-mediaquery)
[![Dependency Status](https://gemnasium.com/ericf/css-mediaquery.png)](https://gemnasium.com/ericf/css-mediaquery)
[![npm Version](https://badge.fury.io/js/css-mediaquery.png)](https://npmjs.org/package/css-mediaquery)

Parses and determines if a given CSS Media Query matches a set of values via
JavaScript.

Installation
------------

Install via npm:

```shell
$ npm install css-mediaquery
```

Usage
-----

This package has two exports: `parse()`, and `match()` which can parse CSS Media
Queries and determine if a media query matches a given set of values.

### Matching

The `match()` method lets you compare a media query expression with a JavaScript
object and determine if a media query matches a given set of values.

```javascript
var mediaQuery = require('css-mediaquery');

var isMatch = mediaQuery.match('screen and (min-width: 40em)', {
    type : 'screen',
    width: '1024px'
});

console.log(isMatch); // => true
```

The values specified to check a media query string against should be thought of
as if they are the current state of a device/browser. A `type` value _must_ be
specified, and it can _not_ be `"all"`.

### Parsing

Existing CSS Parsers don't do a great job at parsing the details of media
queries. That's where `css-mediaquery` shines. You can parse a media query
expression and get an AST back by using the `parse()` method.

```javascript
var mediaQuery = require('css-mediaquery'),
    ast        = mediaQuery.parse('screen and (min-width: 48em)');
```

The `ast` variable will have the following payload:

```javascript
[
    {
        inverse: false,
        type   : 'screen',

        expressions: [
            {
                modifier: 'min',
                feature : 'width',
                value   : '48em'
            }
        ]
    }
]
```

This package was written with care to following the W3C Recommendations for
[CSS3 Media Queries][w3c-mq] and [CSS3 Values and Units][w3c-vu]. It supports
all of the [Media Features][w3c-mq-features] and will properly convert values to
a common unit before comparing them.


[w3c-mq]: http://www.w3.org/TR/css3-mediaqueries/
[w3c-mq-features]: http://www.w3.org/TR/css3-mediaqueries/#media1
[w3c-vu]: http://www.w3.org/TR/css3-values/


License
-------

This software is free to use under the Yahoo! Inc. BSD license.
See the [LICENSE file][] for license text and copyright information.


[LICENSE file]: https://github.com/ericf/css-mediaquery/blob/master/LICENSE
