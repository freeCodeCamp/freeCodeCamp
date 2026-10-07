# domhandler [![Build Status](https://travis-ci.com/fb55/domhandler.svg?branch=master)](https://travis-ci.com/fb55/domhandler)

The DOM handler creates a tree containing all nodes of a page.
The tree can be manipulated using the [domutils](https://github.com/fb55/domutils)
or [cheerio](https://github.com/cheeriojs/cheerio) libraries and
rendered using [dom-serializer](https://github.com/cheeriojs/dom-serializer) .

## Usage

```javascript
const handler = new DomHandler([ <func> callback(err, dom), ] [ <obj> options ]);
// const parser = new Parser(handler[, options]);
```

Available options are described below.

## Example

```javascript
const { Parser } = require("htmlparser2");
const { DomHandler } = require("domhandler");
const rawHtml =
    "Xyz <script language= javascript>var foo = '<<bar>>';</script><!--<!-- Waah! -- -->";
const handler = new DomHandler((error, dom) => {
    if (error) {
        // Handle error
    } else {
        // Parsing completed, do something
        console.log(dom);
    }
});
const parser = new Parser(handler);
parser.write(rawHtml);
parser.end();
```

Output:

```javascript
[
    {
        data: "Xyz ",
        type: "text",
    },
    {
        type: "script",
        name: "script",
        attribs: {
            language: "javascript",
        },
        children: [
            {
                data: "var foo = '<bar>';<",
                type: "text",
            },
        ],
    },
    {
        data: "<!-- Waah! -- ",
        type: "comment",
    },
];
```

## Option: `withStartIndices`

Add a `startIndex` property to nodes.
When the parser is used in a non-streaming fashion, `startIndex` is an integer
indicating the position of the start of the node in the document.
The default value is `false`.

## Option: `withEndIndices`

Add an `endIndex` property to nodes.
When the parser is used in a non-streaming fashion, `endIndex` is an integer
indicating the position of the end of the node in the document.
The default value is `false`.

---

License: BSD-2-Clause

## Security contact information

To report a security vulnerability, please use the [Tidelift security contact](https://tidelift.com/security).
Tidelift will coordinate the fix and disclosure.

## `domhandler` for enterprise

Available as part of the Tidelift Subscription

The maintainers of `domhandler` and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-domhandler?utm_source=npm-domhandler&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)
