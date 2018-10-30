'use strict';

var Parser = require('./parser'),
    Serializer = require('./serializer');


// Shorthands
exports.parse = function parse(html, options) {
    var parser = new Parser(options);

    return parser.parse(html);
};

exports.parseFragment = function parseFragment(fragmentContext, html, options) {
    if (typeof fragmentContext === 'string') {
        options = html;
        html = fragmentContext;
        fragmentContext = null;
    }

    var parser = new Parser(options);

    return parser.parseFragment(html, fragmentContext);
};

exports.serialize = function (node, options) {
    var serializer = new Serializer(node, options);

    return serializer.serialize();
};


// Tree adapters
exports.treeAdapters = {
    default: require('./tree_adapters/default'),
    htmlparser2: require('./tree_adapters/htmlparser2')
};


// Streaming
// NOTE: streaming API is lazy loadable to enable bundling for platforms
// that are different from Node.js.
// See https://github.com/inikulin/parse5/issues/235.
var streamingAPI = {
    ParserStream: './parser/parser_stream',
    PlainTextConversionStream: './parser/plain_text_conversion_stream',
    SerializerStream: './serializer/serializer_stream',
    SAXParser: './sax'
};

Object.keys(streamingAPI).forEach(function (cls) {
    Object.defineProperty(exports, cls, {
        get: function () {
            try {
                return require(streamingAPI[cls]);
            }

            catch (e) {
                throw new Error(
                    cls + ' is supported only for Node.js.' +
                    'See https://github.com/inikulin/parse5/issues/235 for the details.'
                );
            }
        }
    });
});
