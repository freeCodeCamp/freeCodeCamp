'use strict';

const index = require('../tokenizer/index.cjs');
const create = require('../parser/create.cjs');
const create$2 = require('../generator/create.cjs');
const create$3 = require('../convertor/create.cjs');
const create$1 = require('../walker/create.cjs');
const Lexer = require('../lexer/Lexer.cjs');
const mix = require('./config/mix.cjs');

function createSyntax(config) {
    const parse = create.createParser(config);
    const walk = create$1.createWalker(config);
    const generate = create$2.createGenerator(config);
    const { fromPlainObject, toPlainObject } = create$3.createConvertor(walk);

    const syntax = {
        lexer: null,
        createLexer: config => new Lexer.Lexer(config, syntax, syntax.lexer.structure),

        tokenize: index.tokenize,
        parse,
        generate,

        walk,
        find: walk.find,
        findLast: walk.findLast,
        findAll: walk.findAll,

        fromPlainObject,
        toPlainObject,

        fork(extension) {
            const base = mix({}, config); // copy of config

            return createSyntax(
                typeof extension === 'function'
                    ? extension(base) // TODO: remove Object.assign as second parameter
                    : mix(base, extension)
            );
        }
    };

    syntax.lexer = new Lexer.Lexer({
        generic: config.generic,
        cssWideKeywords: config.cssWideKeywords,
        units: config.units,
        types: config.types,
        atrules: config.atrules,
        properties: config.properties,
        node: config.node
    }, syntax);

    return syntax;
}
const createSyntax$1 = config => createSyntax(mix({}, config));

module.exports = createSyntax$1;
