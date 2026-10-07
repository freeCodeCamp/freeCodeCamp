var List = require('../common/List');
var SyntaxError = require('../common/SyntaxError');
var TokenStream = require('../common/TokenStream');
var Lexer = require('../lexer/Lexer');
var definitionSyntax = require('../definition-syntax');
var tokenize = require('../tokenizer');
var createParser = require('../parser/create');
var createGenerator = require('../generator/create');
var createConvertor = require('../convertor/create');
var createWalker = require('../walker/create');
var clone = require('../utils/clone');
var names = require('../utils/names');
var mix = require('./config/mix');

function createSyntax(config) {
    var parse = createParser(config);
    var walk = createWalker(config);
    var generate = createGenerator(config);
    var convert = createConvertor(walk);

    var syntax = {
        List: List,
        SyntaxError: SyntaxError,
        TokenStream: TokenStream,
        Lexer: Lexer,

        vendorPrefix: names.vendorPrefix,
        keyword: names.keyword,
        property: names.property,
        isCustomProperty: names.isCustomProperty,

        definitionSyntax: definitionSyntax,
        lexer: null,
        createLexer: function(config) {
            return new Lexer(config, syntax, syntax.lexer.structure);
        },

        tokenize: tokenize,
        parse: parse,
        walk: walk,
        generate: generate,

        find: walk.find,
        findLast: walk.findLast,
        findAll: walk.findAll,

        clone: clone,
        fromPlainObject: convert.fromPlainObject,
        toPlainObject: convert.toPlainObject,

        createSyntax: function(config) {
            return createSyntax(mix({}, config));
        },
        fork: function(extension) {
            var base = mix({}, config); // copy of config
            return createSyntax(
                typeof extension === 'function'
                    ? extension(base, Object.assign)
                    : mix(base, extension)
            );
        }
    };

    syntax.lexer = new Lexer({
        generic: true,
        types: config.types,
        atrules: config.atrules,
        properties: config.properties,
        node: config.node
    }, syntax);

    return syntax;
};

exports.create = function(config) {
    return createSyntax(mix({}, config));
};
