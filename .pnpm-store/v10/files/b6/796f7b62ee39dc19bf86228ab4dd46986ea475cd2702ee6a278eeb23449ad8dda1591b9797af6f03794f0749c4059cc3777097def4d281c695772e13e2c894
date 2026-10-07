import { tokenize } from '../tokenizer/index.js';
import { createParser } from '../parser/create.js';
import { createGenerator } from '../generator/create.js';
import { createConvertor } from '../convertor/create.js';
import { createWalker } from '../walker/create.js';
import { Lexer } from '../lexer/Lexer.js';
import mix from './config/mix.js';

function createSyntax(config) {
    const parse = createParser(config);
    const walk = createWalker(config);
    const generate = createGenerator(config);
    const { fromPlainObject, toPlainObject } = createConvertor(walk);

    const syntax = {
        lexer: null,
        createLexer: config => new Lexer(config, syntax, syntax.lexer.structure),

        tokenize,
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

    syntax.lexer = new Lexer({
        generic: config.generic,
        cssWideKeywords: config.cssWideKeywords,
        units: config.units,
        types: config.types,
        atrules: config.atrules,
        properties: config.properties,
        node: config.node
    }, syntax);

    return syntax;
};

export default config => createSyntax(mix({}, config));
