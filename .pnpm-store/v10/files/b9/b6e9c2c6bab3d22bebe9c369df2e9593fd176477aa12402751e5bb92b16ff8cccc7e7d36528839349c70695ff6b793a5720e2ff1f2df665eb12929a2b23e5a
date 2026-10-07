'use strict';

const index$1 = require('./syntax/index.cjs');
const version = require('./version.cjs');
const create = require('./syntax/create.cjs');
const List = require('./utils/List.cjs');
const Lexer = require('./lexer/Lexer.cjs');
const index = require('./definition-syntax/index.cjs');
const clone = require('./utils/clone.cjs');
const names$1 = require('./utils/names.cjs');
const ident = require('./utils/ident.cjs');
const string = require('./utils/string.cjs');
const url = require('./utils/url.cjs');
const types = require('./tokenizer/types.cjs');
const names = require('./tokenizer/names.cjs');
const TokenStream = require('./tokenizer/TokenStream.cjs');
const OffsetToLocation = require('./tokenizer/OffsetToLocation.cjs');

const {
    tokenize,
    parse,
    generate,
    lexer,
    createLexer,

    walk,
    find,
    findLast,
    findAll,

    toPlainObject,
    fromPlainObject,

    fork
} = index$1;

exports.version = version.version;
exports.createSyntax = create;
exports.List = List.List;
exports.Lexer = Lexer.Lexer;
exports.definitionSyntax = index;
exports.clone = clone.clone;
exports.isCustomProperty = names$1.isCustomProperty;
exports.keyword = names$1.keyword;
exports.property = names$1.property;
exports.vendorPrefix = names$1.vendorPrefix;
exports.ident = ident;
exports.string = string;
exports.url = url;
exports.tokenTypes = types;
exports.tokenNames = names;
exports.TokenStream = TokenStream.TokenStream;
exports.OffsetToLocation = OffsetToLocation.OffsetToLocation;
exports.createLexer = createLexer;
exports.find = find;
exports.findAll = findAll;
exports.findLast = findLast;
exports.fork = fork;
exports.fromPlainObject = fromPlainObject;
exports.generate = generate;
exports.lexer = lexer;
exports.parse = parse;
exports.toPlainObject = toPlainObject;
exports.tokenize = tokenize;
exports.walk = walk;
