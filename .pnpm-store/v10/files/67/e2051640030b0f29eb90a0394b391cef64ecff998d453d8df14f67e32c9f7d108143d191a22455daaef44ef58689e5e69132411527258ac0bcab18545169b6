# htmlparser2

[![NPM version](http://img.shields.io/npm/v/htmlparser2.svg?style=flat)](https://npmjs.org/package/htmlparser2)
[![Downloads](https://img.shields.io/npm/dm/htmlparser2.svg?style=flat)](https://npmjs.org/package/htmlparser2)
[![Build Status](https://img.shields.io/github/workflow/status/fb55/htmlparser2/Node.js%20Test?label=tests&style=flat)](https://github.com/fb55/htmlparser2/actions?query=workflow%3A%22Node.js+Test%22)
[![Coverage](http://img.shields.io/coveralls/fb55/htmlparser2.svg?style=flat)](https://coveralls.io/r/fb55/htmlparser2)

The fast & forgiving HTML/XML parser.

## Installation

    npm install htmlparser2

A live demo of `htmlparser2` is available [here](https://astexplorer.net/#/2AmVrGuGVJ).

## Ecosystem

| Name                                                          | Description                                             |
| ------------------------------------------------------------- | ------------------------------------------------------- |
| [htmlparser2](https://github.com/fb55/htmlparser2)            | Fast & forgiving HTML/XML parser                        |
| [domhandler](https://github.com/fb55/domhandler)              | Handler for htmlparser2 that turns documents into a DOM |
| [domutils](https://github.com/fb55/domutils)                  | Utilities for working with domhandler's DOM             |
| [css-select](https://github.com/fb55/css-select)              | CSS selector engine, compatible with domhandler's DOM   |
| [cheerio](https://github.com/cheeriojs/cheerio)               | The jQuery API for domhandler's DOM                     |
| [dom-serializer](https://github.com/cheeriojs/dom-serializer) | Serializer for domhandler's DOM                         |

## Usage

`htmlparser2` itself provides a callback interface that allows consumption of documents with minimal allocations.
For a more ergonomic experience, read [Getting a DOM](#getting-a-dom) below.

```javascript
const htmlparser2 = require("htmlparser2");
const parser = new htmlparser2.Parser({
    onopentag(name, attributes) {
        /*
         * This fires when a new tag is opened.
         *
         * If you don't need an aggregated `attributes` object,
         * have a look at the `onopentagname` and `onattribute` events.
         */
        if (name === "script" && attributes.type === "text/javascript") {
            console.log("JS! Hooray!");
        }
    },
    ontext(text) {
        /*
         * Fires whenever a section of text was processed.
         *
         * Note that this can fire at any point within text and you might
         * have to stich together multiple pieces.
         */
        console.log("-->", text);
    },
    onclosetag(tagname) {
        /*
         * Fires when a tag is closed.
         *
         * You can rely on this event only firing when you have received an
         * equivalent opening tag before. Closing tags without corresponding
         * opening tags will be ignored.
         */
        if (tagname === "script") {
            console.log("That's it?!");
        }
    },
});
parser.write(
    "Xyz <script type='text/javascript'>const foo = '<<bar>>';</ script>"
);
parser.end();
```

Output (with multiple text events combined):

```
--> Xyz
JS! Hooray!
--> const foo = '<<bar>>';
That's it?!
```

This example only shows three of the possible events.
Read more about the parser, its events and options in the [wiki](https://github.com/fb55/htmlparser2/wiki/Parser-options).

### Usage with streams

While the `Parser` interface closely resembles Node.js streams, it's not a 100% match.
Use the `WritableStream` interface to process a streaming input:

```javascript
const { WritableStream } = require("htmlparser2/lib/WritableStream");
const parserStream = new WritableStream({
    ontext(text) {
        console.log("Streaming:", text);
    },
});

const htmlStream = fs.createReadStream("./my-file.html");
htmlStream.pipe(parserStream).on("finish", () => console.log("done"));
```

## Getting a DOM

The `DomHandler` produces a DOM (document object model) that can be manipulated using the [`DomUtils`](https://github.com/fb55/DomUtils) helper.

```js
const htmlparser2 = require("htmlparser2");

const dom = htmlparser2.parseDocument();
```

The `DomHandler`, while still bundled with this module, was moved to its [own module](https://github.com/fb55/domhandler).
Have a look at that for further information.

## Parsing RSS/RDF/Atom Feeds

```javascript
const feed = htmlparser2.parseFeed(content, options);
```

Note: While the provided feed handler works for most feeds,
you might want to use [danmactough/node-feedparser](https://github.com/danmactough/node-feedparser), which is much better tested and actively maintained.

## Performance

After having some artificial benchmarks for some time, **@AndreasMadsen** published his [`htmlparser-benchmark`](https://github.com/AndreasMadsen/htmlparser-benchmark), which benchmarks HTML parses based on real-world websites.

At the time of writing, the latest versions of all supported parsers show the following performance characteristics on [Travis CI](https://travis-ci.org/AndreasMadsen/htmlparser-benchmark/builds/10805007) (please note that Travis doesn't guarantee equal conditions for all tests):

```
gumbo-parser   : 34.9208 ms/file ± 21.4238
html-parser    : 24.8224 ms/file ± 15.8703
html5          : 419.597 ms/file ± 264.265
htmlparser     : 60.0722 ms/file ± 384.844
htmlparser2-dom: 12.0749 ms/file ± 6.49474
htmlparser2    : 7.49130 ms/file ± 5.74368
hubbub         : 30.4980 ms/file ± 16.4682
libxmljs       : 14.1338 ms/file ± 18.6541
parse5         : 22.0439 ms/file ± 15.3743
sax            : 49.6513 ms/file ± 26.6032
```

## How does this module differ from [node-htmlparser](https://github.com/tautologistics/node-htmlparser)?

This module started as a fork of the `htmlparser` module.
The main difference is that `htmlparser2` is intended to be used only with node (it runs on other platforms using [browserify](https://github.com/substack/node-browserify)).
`htmlparser2` was rewritten multiple times and, while it maintains an API that's compatible with `htmlparser` in most cases, the projects don't share any code anymore.

The parser now provides a callback interface inspired by [sax.js](https://github.com/isaacs/sax-js) (originally targeted at [readabilitySAX](https://github.com/fb55/readabilitysax)).
As a result, old handlers won't work anymore.

The `DefaultHandler` and the `RssHandler` were renamed to clarify their purpose (to `DomHandler` and `FeedHandler`). The old names are still available when requiring `htmlparser2`, your code should work as expected.

## Security contact information

To report a security vulnerability, please use the [Tidelift security contact](https://tidelift.com/security).
Tidelift will coordinate the fix and disclosure.

## `htmlparser2` for enterprise

Available as part of the Tidelift Subscription

The maintainers of `htmlparser2` and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-htmlparser2?utm_source=npm-htmlparser2&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)
