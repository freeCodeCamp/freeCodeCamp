(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jtpp = {}));
})(this, (function (exports) { 'use strict';

    function tokenToString(token) {
        if (token.text !== undefined && token.text !== '') {
            return `'${token.type}' with value '${token.text}'`;
        }
        else {
            return `'${token.type}'`;
        }
    }
    class NoParsletFoundError extends Error {
        constructor(token) {
            super(`No parslet found for token: ${tokenToString(token)}`);
            this.token = token;
            Object.setPrototypeOf(this, NoParsletFoundError.prototype);
        }
        getToken() {
            return this.token;
        }
    }
    class EarlyEndOfParseError extends Error {
        constructor(token) {
            super(`The parsing ended early. The next token was: ${tokenToString(token)}`);
            this.token = token;
            Object.setPrototypeOf(this, EarlyEndOfParseError.prototype);
        }
        getToken() {
            return this.token;
        }
    }
    class UnexpectedTypeError extends Error {
        constructor(result, message) {
            let error = `Unexpected type: '${result.type}'.`;
            if (message !== undefined) {
                error += ` Message: ${message}`;
            }
            super(error);
            Object.setPrototypeOf(this, UnexpectedTypeError.prototype);
        }
    }
    // export class UnexpectedTokenError extends Error {
    //   private expected: Token
    //   private found: Token
    //
    //   constructor (expected: Token, found: Token) {
    //     super(`The parsing ended early. The next token was: ${tokenToString(token)}`)
    //
    //     this.token = token
    //
    //     Object.setPrototypeOf(this, EarlyEndOfParseError.prototype)
    //   }
    //
    //   getToken() {
    //     return this.token
    //   }
    // }

    function makePunctuationRule(type) {
        return text => {
            if (text.startsWith(type)) {
                return { type, text: type };
            }
            else {
                return null;
            }
        };
    }
    function getQuoted(text) {
        let position = 0;
        let char;
        const mark = text[0];
        let escaped = false;
        if (mark !== '\'' && mark !== '"') {
            return null;
        }
        while (position < text.length) {
            position++;
            char = text[position];
            if (!escaped && char === mark) {
                position++;
                break;
            }
            escaped = !escaped && char === '\\';
        }
        if (char !== mark) {
            throw new Error('Unterminated String');
        }
        return text.slice(0, position);
    }
    const identifierStartRegex = /[$_\p{ID_Start}]|\\u\p{Hex_Digit}{4}|\\u\{0*(?:\p{Hex_Digit}{1,5}|10\p{Hex_Digit}{4})\}/u;
    // A hyphen is not technically allowed, but to keep it liberal for now,
    //  adding it here
    const identifierContinueRegex = /[$\-\p{ID_Continue}\u200C\u200D]|\\u\p{Hex_Digit}{4}|\\u\{0*(?:\p{Hex_Digit}{1,5}|10\p{Hex_Digit}{4})\}/u;
    function getIdentifier(text) {
        let char = text[0];
        if (!identifierStartRegex.test(char)) {
            return null;
        }
        let position = 1;
        do {
            char = text[position];
            if (!identifierContinueRegex.test(char)) {
                break;
            }
            position++;
        } while (position < text.length);
        return text.slice(0, position);
    }
    // we are a bit more liberal than TypeScript here and allow `NaN`, `Infinity` and `-Infinity`
    const numberRegex = /^(NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity))/;
    function getNumber(text) {
        var _a, _b;
        return (_b = (_a = numberRegex.exec(text)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null;
    }
    const identifierRule = text => {
        const value = getIdentifier(text);
        if (value == null) {
            return null;
        }
        return {
            type: 'Identifier',
            text: value
        };
    };
    function makeKeyWordRule(type) {
        return text => {
            if (!text.startsWith(type)) {
                return null;
            }
            const prepends = text[type.length];
            if (prepends !== undefined && identifierContinueRegex.test(prepends)) {
                return null;
            }
            return {
                type,
                text: type
            };
        };
    }
    const stringValueRule = text => {
        const value = getQuoted(text);
        if (value == null) {
            return null;
        }
        return {
            type: 'StringValue',
            text: value
        };
    };
    const eofRule = text => {
        if (text.length > 0) {
            return null;
        }
        return {
            type: 'EOF',
            text: ''
        };
    };
    const numberRule = text => {
        const value = getNumber(text);
        if (value === null) {
            return null;
        }
        return {
            type: 'Number',
            text: value
        };
    };
    const rules = [
        eofRule,
        makePunctuationRule('=>'),
        makePunctuationRule('('),
        makePunctuationRule(')'),
        makePunctuationRule('{'),
        makePunctuationRule('}'),
        makePunctuationRule('['),
        makePunctuationRule(']'),
        makePunctuationRule('|'),
        makePunctuationRule('&'),
        makePunctuationRule('<'),
        makePunctuationRule('>'),
        makePunctuationRule(','),
        makePunctuationRule(';'),
        makePunctuationRule('*'),
        makePunctuationRule('?'),
        makePunctuationRule('!'),
        makePunctuationRule('='),
        makePunctuationRule(':'),
        makePunctuationRule('...'),
        makePunctuationRule('.'),
        makePunctuationRule('#'),
        makePunctuationRule('~'),
        makePunctuationRule('/'),
        makePunctuationRule('@'),
        makeKeyWordRule('undefined'),
        makeKeyWordRule('null'),
        makeKeyWordRule('function'),
        makeKeyWordRule('this'),
        makeKeyWordRule('new'),
        makeKeyWordRule('module'),
        makeKeyWordRule('event'),
        makeKeyWordRule('external'),
        makeKeyWordRule('typeof'),
        makeKeyWordRule('keyof'),
        makeKeyWordRule('readonly'),
        makeKeyWordRule('import'),
        makeKeyWordRule('is'),
        makeKeyWordRule('in'),
        numberRule,
        identifierRule,
        stringValueRule
    ];
    const breakingWhitespaceRegex = /^\s*\n\s*/;
    class Lexer {
        static create(text) {
            const current = this.read(text);
            text = current.text;
            const next = this.read(text);
            text = next.text;
            return new Lexer(text, undefined, current.token, next.token);
        }
        constructor(text, previous, current, next) {
            this.text = '';
            this.text = text;
            this.previous = previous;
            this.current = current;
            this.next = next;
        }
        static read(text, startOfLine = false) {
            startOfLine = startOfLine || breakingWhitespaceRegex.test(text);
            text = text.trim();
            for (const rule of rules) {
                const partial = rule(text);
                if (partial !== null) {
                    const token = Object.assign(Object.assign({}, partial), { startOfLine });
                    text = text.slice(token.text.length);
                    return { text, token };
                }
            }
            throw new Error('Unexpected Token ' + text);
        }
        advance() {
            const next = Lexer.read(this.text);
            return new Lexer(next.text, this.current, this.next, next.token);
        }
    }

    /**
     * Throws an error if the provided result is not a {@link RootResult}
     */
    function assertRootResult(result) {
        if (result === undefined) {
            throw new Error('Unexpected undefined');
        }
        if (result.type === 'JsdocTypeKeyValue' || result.type === 'JsdocTypeParameterList' ||
            result.type === 'JsdocTypeProperty' || result.type === 'JsdocTypeReadonlyProperty' ||
            result.type === 'JsdocTypeObjectField' || result.type === 'JsdocTypeJsdocObjectField' ||
            result.type === 'JsdocTypeIndexSignature' || result.type === 'JsdocTypeMappedType') {
            throw new UnexpectedTypeError(result);
        }
        return result;
    }
    function assertPlainKeyValueOrRootResult(result) {
        if (result.type === 'JsdocTypeKeyValue') {
            return assertPlainKeyValueResult(result);
        }
        return assertRootResult(result);
    }
    function assertPlainKeyValueOrNameResult(result) {
        if (result.type === 'JsdocTypeName') {
            return result;
        }
        return assertPlainKeyValueResult(result);
    }
    function assertPlainKeyValueResult(result) {
        if (result.type !== 'JsdocTypeKeyValue') {
            throw new UnexpectedTypeError(result);
        }
        return result;
    }
    function assertNumberOrVariadicNameResult(result) {
        var _a;
        if (result.type === 'JsdocTypeVariadic') {
            if (((_a = result.element) === null || _a === void 0 ? void 0 : _a.type) === 'JsdocTypeName') {
                return result;
            }
            throw new UnexpectedTypeError(result);
        }
        if (result.type !== 'JsdocTypeNumber' && result.type !== 'JsdocTypeName') {
            throw new UnexpectedTypeError(result);
        }
        return result;
    }
    function isSquaredProperty(result) {
        return result.type === 'JsdocTypeIndexSignature' || result.type === 'JsdocTypeMappedType';
    }

    // higher precedence = higher importance
    var Precedence;
    (function (Precedence) {
        Precedence[Precedence["ALL"] = 0] = "ALL";
        Precedence[Precedence["PARAMETER_LIST"] = 1] = "PARAMETER_LIST";
        Precedence[Precedence["OBJECT"] = 2] = "OBJECT";
        Precedence[Precedence["KEY_VALUE"] = 3] = "KEY_VALUE";
        Precedence[Precedence["UNION"] = 4] = "UNION";
        Precedence[Precedence["INTERSECTION"] = 5] = "INTERSECTION";
        Precedence[Precedence["PREFIX"] = 6] = "PREFIX";
        Precedence[Precedence["INFIX"] = 7] = "INFIX";
        Precedence[Precedence["TUPLE"] = 8] = "TUPLE";
        Precedence[Precedence["SYMBOL"] = 9] = "SYMBOL";
        Precedence[Precedence["OPTIONAL"] = 10] = "OPTIONAL";
        Precedence[Precedence["NULLABLE"] = 11] = "NULLABLE";
        Precedence[Precedence["KEY_OF_TYPE_OF"] = 12] = "KEY_OF_TYPE_OF";
        Precedence[Precedence["FUNCTION"] = 13] = "FUNCTION";
        Precedence[Precedence["ARROW"] = 14] = "ARROW";
        Precedence[Precedence["ARRAY_BRACKETS"] = 15] = "ARRAY_BRACKETS";
        Precedence[Precedence["GENERIC"] = 16] = "GENERIC";
        Precedence[Precedence["NAME_PATH"] = 17] = "NAME_PATH";
        Precedence[Precedence["PARENTHESIS"] = 18] = "PARENTHESIS";
        Precedence[Precedence["SPECIAL_TYPES"] = 19] = "SPECIAL_TYPES";
    })(Precedence || (Precedence = {}));

    class Parser {
        constructor(grammar, textOrLexer, baseParser) {
            this.grammar = grammar;
            if (typeof textOrLexer === 'string') {
                this._lexer = Lexer.create(textOrLexer);
            }
            else {
                this._lexer = textOrLexer;
            }
            this.baseParser = baseParser;
        }
        get lexer() {
            return this._lexer;
        }
        /**
         * Parses a given string and throws an error if the parse ended before the end of the string.
         */
        parse() {
            const result = this.parseType(Precedence.ALL);
            if (this.lexer.current.type !== 'EOF') {
                throw new EarlyEndOfParseError(this.lexer.current);
            }
            return result;
        }
        /**
         * Parses with the current lexer and asserts that the result is a {@link RootResult}.
         */
        parseType(precedence) {
            return assertRootResult(this.parseIntermediateType(precedence));
        }
        /**
         * The main parsing function. First it tries to parse the current state in the prefix step, and then it continues
         * to parse the state in the infix step.
         */
        parseIntermediateType(precedence) {
            const result = this.tryParslets(null, precedence);
            if (result === null) {
                throw new NoParsletFoundError(this.lexer.current);
            }
            return this.parseInfixIntermediateType(result, precedence);
        }
        /**
         * In the infix parsing step the parser continues to parse the current state with all parslets until none returns
         * a result.
         */
        parseInfixIntermediateType(left, precedence) {
            let result = this.tryParslets(left, precedence);
            while (result !== null) {
                left = result;
                result = this.tryParslets(left, precedence);
            }
            return left;
        }
        /**
         * Tries to parse the current state with all parslets in the grammar and returns the first non null result.
         */
        tryParslets(left, precedence) {
            for (const parslet of this.grammar) {
                const result = parslet(this, precedence, left);
                if (result !== null) {
                    return result;
                }
            }
            return null;
        }
        /**
         * If the given type equals the current type of the {@link Lexer} advance the lexer. Return true if the lexer was
         * advanced.
         */
        consume(types) {
            if (!Array.isArray(types)) {
                types = [types];
            }
            if (types.includes(this.lexer.current.type)) {
                this._lexer = this.lexer.advance();
                return true;
            }
            else {
                return false;
            }
        }
        acceptLexerState(parser) {
            this._lexer = parser.lexer;
        }
    }

    function isQuestionMarkUnknownType(next) {
        return next === 'EOF' || next === '|' || next === ',' || next === ')' || next === '>';
    }

    const nullableParslet = (parser, precedence, left) => {
        const type = parser.lexer.current.type;
        const next = parser.lexer.next.type;
        const accept = ((left == null) && type === '?' && !isQuestionMarkUnknownType(next)) ||
            ((left != null) && type === '?');
        if (!accept) {
            return null;
        }
        parser.consume('?');
        if (left == null) {
            return {
                type: 'JsdocTypeNullable',
                element: parser.parseType(Precedence.NULLABLE),
                meta: {
                    position: 'prefix'
                }
            };
        }
        else {
            return {
                type: 'JsdocTypeNullable',
                element: assertRootResult(left),
                meta: {
                    position: 'suffix'
                }
            };
        }
    };

    function composeParslet(options) {
        const parslet = (parser, curPrecedence, left) => {
            const type = parser.lexer.current.type;
            const next = parser.lexer.next.type;
            if (left === null) {
                if ('parsePrefix' in options) {
                    if (options.accept(type, next)) {
                        return options.parsePrefix(parser);
                    }
                }
            }
            else {
                if ('parseInfix' in options) {
                    if (options.precedence > curPrecedence && options.accept(type, next)) {
                        return options.parseInfix(parser, left);
                    }
                }
            }
            return null;
        };
        // for debugging
        Object.defineProperty(parslet, 'name', {
            value: options.name
        });
        return parslet;
    }

    const optionalParslet = composeParslet({
        name: 'optionalParslet',
        accept: type => type === '=',
        precedence: Precedence.OPTIONAL,
        parsePrefix: parser => {
            parser.consume('=');
            return {
                type: 'JsdocTypeOptional',
                element: parser.parseType(Precedence.OPTIONAL),
                meta: {
                    position: 'prefix'
                }
            };
        },
        parseInfix: (parser, left) => {
            parser.consume('=');
            return {
                type: 'JsdocTypeOptional',
                element: assertRootResult(left),
                meta: {
                    position: 'suffix'
                }
            };
        }
    });

    const numberParslet = composeParslet({
        name: 'numberParslet',
        accept: type => type === 'Number',
        parsePrefix: parser => {
            const value = parseFloat(parser.lexer.current.text);
            parser.consume('Number');
            return {
                type: 'JsdocTypeNumber',
                value
            };
        }
    });

    const parenthesisParslet = composeParslet({
        name: 'parenthesisParslet',
        accept: type => type === '(',
        parsePrefix: parser => {
            parser.consume('(');
            if (parser.consume(')')) {
                return {
                    type: 'JsdocTypeParameterList',
                    elements: []
                };
            }
            const result = parser.parseIntermediateType(Precedence.ALL);
            if (!parser.consume(')')) {
                throw new Error('Unterminated parenthesis');
            }
            if (result.type === 'JsdocTypeParameterList') {
                return result;
            }
            else if (result.type === 'JsdocTypeKeyValue') {
                return {
                    type: 'JsdocTypeParameterList',
                    elements: [result]
                };
            }
            return {
                type: 'JsdocTypeParenthesis',
                element: assertRootResult(result)
            };
        }
    });

    const specialTypesParslet = composeParslet({
        name: 'specialTypesParslet',
        accept: (type, next) => (type === '?' && isQuestionMarkUnknownType(next)) ||
            type === 'null' || type === 'undefined' || type === '*',
        parsePrefix: parser => {
            if (parser.consume('null')) {
                return {
                    type: 'JsdocTypeNull'
                };
            }
            if (parser.consume('undefined')) {
                return {
                    type: 'JsdocTypeUndefined'
                };
            }
            if (parser.consume('*')) {
                return {
                    type: 'JsdocTypeAny'
                };
            }
            if (parser.consume('?')) {
                return {
                    type: 'JsdocTypeUnknown'
                };
            }
            throw new Error('Unacceptable token: ' + parser.lexer.current.text);
        }
    });

    const notNullableParslet = composeParslet({
        name: 'notNullableParslet',
        accept: type => type === '!',
        precedence: Precedence.NULLABLE,
        parsePrefix: parser => {
            parser.consume('!');
            return {
                type: 'JsdocTypeNotNullable',
                element: parser.parseType(Precedence.NULLABLE),
                meta: {
                    position: 'prefix'
                }
            };
        },
        parseInfix: (parser, left) => {
            parser.consume('!');
            return {
                type: 'JsdocTypeNotNullable',
                element: assertRootResult(left),
                meta: {
                    position: 'suffix'
                }
            };
        }
    });

    function createParameterListParslet({ allowTrailingComma }) {
        return composeParslet({
            name: 'parameterListParslet',
            accept: type => type === ',',
            precedence: Precedence.PARAMETER_LIST,
            parseInfix: (parser, left) => {
                const elements = [
                    assertPlainKeyValueOrRootResult(left)
                ];
                parser.consume(',');
                do {
                    try {
                        const next = parser.parseIntermediateType(Precedence.PARAMETER_LIST);
                        elements.push(assertPlainKeyValueOrRootResult(next));
                    }
                    catch (e) {
                        if (allowTrailingComma && e instanceof NoParsletFoundError) {
                            break;
                        }
                        else {
                            throw e;
                        }
                    }
                } while (parser.consume(','));
                if (elements.length > 0 && elements.slice(0, -1).some(e => e.type === 'JsdocTypeVariadic')) {
                    throw new Error('Only the last parameter may be a rest parameter');
                }
                return {
                    type: 'JsdocTypeParameterList',
                    elements
                };
            }
        });
    }

    const genericParslet = composeParslet({
        name: 'genericParslet',
        accept: (type, next) => type === '<' || (type === '.' && next === '<'),
        precedence: Precedence.GENERIC,
        parseInfix: (parser, left) => {
            const dot = parser.consume('.');
            parser.consume('<');
            const objects = [];
            do {
                objects.push(parser.parseType(Precedence.PARAMETER_LIST));
            } while (parser.consume(','));
            if (!parser.consume('>')) {
                throw new Error('Unterminated generic parameter list');
            }
            return {
                type: 'JsdocTypeGeneric',
                left: assertRootResult(left),
                elements: objects,
                meta: {
                    brackets: 'angle',
                    dot
                }
            };
        }
    });

    const unionParslet = composeParslet({
        name: 'unionParslet',
        accept: type => type === '|',
        precedence: Precedence.UNION,
        parseInfix: (parser, left) => {
            parser.consume('|');
            const elements = [];
            do {
                elements.push(parser.parseType(Precedence.UNION));
            } while (parser.consume('|'));
            return {
                type: 'JsdocTypeUnion',
                elements: [assertRootResult(left), ...elements]
            };
        }
    });

    const baseGrammar = [
        nullableParslet,
        optionalParslet,
        numberParslet,
        parenthesisParslet,
        specialTypesParslet,
        notNullableParslet,
        createParameterListParslet({
            allowTrailingComma: true
        }),
        genericParslet,
        unionParslet,
        optionalParslet
    ];

    function createNamePathParslet({ allowSquareBracketsOnAnyType, allowJsdocNamePaths, pathGrammar }) {
        return function namePathParslet(parser, precedence, left) {
            if ((left == null) || precedence >= Precedence.NAME_PATH) {
                return null;
            }
            const type = parser.lexer.current.type;
            const next = parser.lexer.next.type;
            const accept = (type === '.' && next !== '<') ||
                (type === '[' && (allowSquareBracketsOnAnyType || left.type === 'JsdocTypeName')) ||
                (allowJsdocNamePaths && (type === '~' || type === '#'));
            if (!accept) {
                return null;
            }
            let pathType;
            let brackets = false;
            if (parser.consume('.')) {
                pathType = 'property';
            }
            else if (parser.consume('[')) {
                pathType = 'property-brackets';
                brackets = true;
            }
            else if (parser.consume('~')) {
                pathType = 'inner';
            }
            else {
                parser.consume('#');
                pathType = 'instance';
            }
            const pathParser = pathGrammar !== null
                ? new Parser(pathGrammar, parser.lexer, parser)
                : parser;
            const parsed = pathParser.parseIntermediateType(Precedence.NAME_PATH);
            parser.acceptLexerState(pathParser);
            let right;
            switch (parsed.type) {
                case 'JsdocTypeName':
                    right = {
                        type: 'JsdocTypeProperty',
                        value: parsed.value,
                        meta: {
                            quote: undefined
                        }
                    };
                    break;
                case 'JsdocTypeNumber':
                    right = {
                        type: 'JsdocTypeProperty',
                        value: parsed.value.toString(10),
                        meta: {
                            quote: undefined
                        }
                    };
                    break;
                case 'JsdocTypeStringValue':
                    right = {
                        type: 'JsdocTypeProperty',
                        value: parsed.value,
                        meta: {
                            quote: parsed.meta.quote
                        }
                    };
                    break;
                case 'JsdocTypeSpecialNamePath':
                    if (parsed.specialType === 'event') {
                        right = parsed;
                    }
                    else {
                        throw new UnexpectedTypeError(parsed, 'Type \'JsdocTypeSpecialNamePath\' is only allowed with specialType \'event\'');
                    }
                    break;
                default:
                    throw new UnexpectedTypeError(parsed, 'Expecting \'JsdocTypeName\', \'JsdocTypeNumber\', \'JsdocStringValue\' or \'JsdocTypeSpecialNamePath\'');
            }
            if (brackets && !parser.consume(']')) {
                const token = parser.lexer.current;
                throw new Error(`Unterminated square brackets. Next token is '${token.type}' ` +
                    `with text '${token.text}'`);
            }
            return {
                type: 'JsdocTypeNamePath',
                left: assertRootResult(left),
                right,
                pathType
            };
        };
    }

    function createNameParslet({ allowedAdditionalTokens }) {
        return composeParslet({
            name: 'nameParslet',
            accept: type => type === 'Identifier' || type === 'this' || type === 'new' || allowedAdditionalTokens.includes(type),
            parsePrefix: parser => {
                const { type, text } = parser.lexer.current;
                parser.consume(type);
                return {
                    type: 'JsdocTypeName',
                    value: text
                };
            }
        });
    }

    const stringValueParslet = composeParslet({
        name: 'stringValueParslet',
        accept: type => type === 'StringValue',
        parsePrefix: parser => {
            const text = parser.lexer.current.text;
            parser.consume('StringValue');
            return {
                type: 'JsdocTypeStringValue',
                value: text.slice(1, -1),
                meta: {
                    quote: text[0] === '\'' ? 'single' : 'double'
                }
            };
        }
    });

    function createSpecialNamePathParslet({ pathGrammar, allowedTypes }) {
        return composeParslet({
            name: 'specialNamePathParslet',
            accept: type => allowedTypes.includes(type),
            parsePrefix: parser => {
                const type = parser.lexer.current.type;
                parser.consume(type);
                if (!parser.consume(':')) {
                    return {
                        type: 'JsdocTypeName',
                        value: type
                    };
                }
                let result;
                let token = parser.lexer.current;
                if (parser.consume('StringValue')) {
                    result = {
                        type: 'JsdocTypeSpecialNamePath',
                        value: token.text.slice(1, -1),
                        specialType: type,
                        meta: {
                            quote: token.text[0] === '\'' ? 'single' : 'double'
                        }
                    };
                }
                else {
                    let value = '';
                    const allowed = ['Identifier', '@', '/'];
                    while (allowed.some(type => parser.consume(type))) {
                        value += token.text;
                        token = parser.lexer.current;
                    }
                    result = {
                        type: 'JsdocTypeSpecialNamePath',
                        value,
                        specialType: type,
                        meta: {
                            quote: undefined
                        }
                    };
                }
                const moduleParser = new Parser(pathGrammar, parser.lexer, parser);
                const moduleResult = moduleParser.parseInfixIntermediateType(result, Precedence.ALL);
                parser.acceptLexerState(moduleParser);
                return assertRootResult(moduleResult);
            }
        });
    }

    const basePathGrammar = [
        createNameParslet({
            allowedAdditionalTokens: ['external', 'module']
        }),
        stringValueParslet,
        numberParslet,
        createNamePathParslet({
            allowSquareBracketsOnAnyType: false,
            allowJsdocNamePaths: true,
            pathGrammar: null
        })
    ];
    const pathGrammar = [
        ...basePathGrammar,
        createSpecialNamePathParslet({
            allowedTypes: ['event'],
            pathGrammar: basePathGrammar
        })
    ];

    function getParameters(value) {
        let parameters;
        if (value.type === 'JsdocTypeParameterList') {
            parameters = value.elements;
        }
        else if (value.type === 'JsdocTypeParenthesis') {
            parameters = [value.element];
        }
        else {
            throw new UnexpectedTypeError(value);
        }
        return parameters.map(p => assertPlainKeyValueOrRootResult(p));
    }
    function getUnnamedParameters(value) {
        const parameters = getParameters(value);
        if (parameters.some(p => p.type === 'JsdocTypeKeyValue')) {
            throw new Error('No parameter should be named');
        }
        return parameters;
    }
    function createFunctionParslet({ allowNamedParameters, allowNoReturnType, allowWithoutParenthesis, allowNewAsFunctionKeyword }) {
        return composeParslet({
            name: 'functionParslet',
            accept: (type, next) => type === 'function' || (allowNewAsFunctionKeyword && type === 'new' && next === '('),
            parsePrefix: parser => {
                const newKeyword = parser.consume('new');
                parser.consume('function');
                const hasParenthesis = parser.lexer.current.type === '(';
                if (!hasParenthesis) {
                    if (!allowWithoutParenthesis) {
                        throw new Error('function is missing parameter list');
                    }
                    return {
                        type: 'JsdocTypeName',
                        value: 'function'
                    };
                }
                let result = {
                    type: 'JsdocTypeFunction',
                    parameters: [],
                    arrow: false,
                    constructor: newKeyword,
                    parenthesis: hasParenthesis
                };
                const value = parser.parseIntermediateType(Precedence.FUNCTION);
                if (allowNamedParameters === undefined) {
                    result.parameters = getUnnamedParameters(value);
                }
                else if (newKeyword && value.type === 'JsdocTypeFunction' && value.arrow) {
                    result = value;
                    result.constructor = true;
                    return result;
                }
                else {
                    result.parameters = getParameters(value);
                    for (const p of result.parameters) {
                        if (p.type === 'JsdocTypeKeyValue' && (!allowNamedParameters.includes(p.key))) {
                            throw new Error(`only allowed named parameters are ${allowNamedParameters.join(', ')} but got ${p.type}`);
                        }
                    }
                }
                if (parser.consume(':')) {
                    result.returnType = parser.parseType(Precedence.PREFIX);
                }
                else {
                    if (!allowNoReturnType) {
                        throw new Error('function is missing return type');
                    }
                }
                return result;
            }
        });
    }

    function createVariadicParslet({ allowPostfix, allowEnclosingBrackets }) {
        return composeParslet({
            name: 'variadicParslet',
            accept: type => type === '...',
            precedence: Precedence.PREFIX,
            parsePrefix: parser => {
                parser.consume('...');
                const brackets = allowEnclosingBrackets && parser.consume('[');
                try {
                    const element = parser.parseType(Precedence.PREFIX);
                    if (brackets && !parser.consume(']')) {
                        throw new Error('Unterminated variadic type. Missing \']\'');
                    }
                    return {
                        type: 'JsdocTypeVariadic',
                        element: assertRootResult(element),
                        meta: {
                            position: 'prefix',
                            squareBrackets: brackets
                        }
                    };
                }
                catch (e) {
                    if (e instanceof NoParsletFoundError) {
                        if (brackets) {
                            throw new Error('Empty square brackets for variadic are not allowed.');
                        }
                        return {
                            type: 'JsdocTypeVariadic',
                            meta: {
                                position: undefined,
                                squareBrackets: false
                            }
                        };
                    }
                    else {
                        throw e;
                    }
                }
            },
            parseInfix: allowPostfix
                ? (parser, left) => {
                    parser.consume('...');
                    return {
                        type: 'JsdocTypeVariadic',
                        element: assertRootResult(left),
                        meta: {
                            position: 'suffix',
                            squareBrackets: false
                        }
                    };
                }
                : undefined
        });
    }

    const symbolParslet = composeParslet({
        name: 'symbolParslet',
        accept: type => type === '(',
        precedence: Precedence.SYMBOL,
        parseInfix: (parser, left) => {
            if (left.type !== 'JsdocTypeName') {
                throw new Error('Symbol expects a name on the left side. (Reacting on \'(\')');
            }
            parser.consume('(');
            const result = {
                type: 'JsdocTypeSymbol',
                value: left.value
            };
            if (!parser.consume(')')) {
                const next = parser.parseIntermediateType(Precedence.SYMBOL);
                result.element = assertNumberOrVariadicNameResult(next);
                if (!parser.consume(')')) {
                    throw new Error('Symbol does not end after value');
                }
            }
            return result;
        }
    });

    const arrayBracketsParslet = composeParslet({
        name: 'arrayBracketsParslet',
        precedence: Precedence.ARRAY_BRACKETS,
        accept: (type, next) => type === '[' && next === ']',
        parseInfix: (parser, left) => {
            parser.consume('[');
            parser.consume(']');
            return {
                type: 'JsdocTypeGeneric',
                left: {
                    type: 'JsdocTypeName',
                    value: 'Array'
                },
                elements: [
                    assertRootResult(left)
                ],
                meta: {
                    brackets: 'square',
                    dot: false
                }
            };
        }
    });

    function createObjectParslet({ objectFieldGrammar, allowKeyTypes }) {
        return composeParslet({
            name: 'objectParslet',
            accept: type => type === '{',
            parsePrefix: parser => {
                parser.consume('{');
                const result = {
                    type: 'JsdocTypeObject',
                    meta: {
                        separator: 'comma'
                    },
                    elements: []
                };
                if (!parser.consume('}')) {
                    let separator;
                    const fieldParser = new Parser(objectFieldGrammar, parser.lexer, parser);
                    while (true) {
                        fieldParser.acceptLexerState(parser);
                        let field = fieldParser.parseIntermediateType(Precedence.OBJECT);
                        parser.acceptLexerState(fieldParser);
                        if (field === undefined && allowKeyTypes) {
                            field = parser.parseIntermediateType(Precedence.OBJECT);
                        }
                        let optional = false;
                        if (field.type === 'JsdocTypeNullable') {
                            optional = true;
                            field = field.element;
                        }
                        if (field.type === 'JsdocTypeNumber' || field.type === 'JsdocTypeName' || field.type === 'JsdocTypeStringValue') {
                            let quote;
                            if (field.type === 'JsdocTypeStringValue') {
                                quote = field.meta.quote;
                            }
                            result.elements.push({
                                type: 'JsdocTypeObjectField',
                                key: field.value.toString(),
                                right: undefined,
                                optional,
                                readonly: false,
                                meta: {
                                    quote
                                }
                            });
                        }
                        else if (field.type === 'JsdocTypeObjectField' || field.type === 'JsdocTypeJsdocObjectField') {
                            result.elements.push(field);
                        }
                        else {
                            throw new UnexpectedTypeError(field);
                        }
                        if (parser.lexer.current.startOfLine) {
                            separator = 'linebreak';
                        }
                        else if (parser.consume(',')) {
                            separator = 'comma';
                        }
                        else if (parser.consume(';')) {
                            separator = 'semicolon';
                        }
                        else {
                            break;
                        }
                        const type = parser.lexer.current.type;
                        if (type === '}') {
                            break;
                        }
                    }
                    result.meta.separator = separator !== null && separator !== void 0 ? separator : 'comma'; // TODO: use undefined here
                    if (!parser.consume('}')) {
                        throw new Error('Unterminated record type. Missing \'}\'');
                    }
                }
                return result;
            }
        });
    }

    function createObjectFieldParslet({ allowSquaredProperties, allowKeyTypes, allowReadonly, allowOptional }) {
        return composeParslet({
            name: 'objectFieldParslet',
            precedence: Precedence.KEY_VALUE,
            accept: type => type === ':',
            parseInfix: (parser, left) => {
                var _a;
                let optional = false;
                let readonlyProperty = false;
                if (allowOptional && left.type === 'JsdocTypeNullable') {
                    optional = true;
                    left = left.element;
                }
                if (allowReadonly && left.type === 'JsdocTypeReadonlyProperty') {
                    readonlyProperty = true;
                    left = left.element;
                }
                // object parslet uses a special grammar and for the value we want to switch back to the parent
                const parentParser = (_a = parser.baseParser) !== null && _a !== void 0 ? _a : parser;
                parentParser.acceptLexerState(parser);
                if (left.type === 'JsdocTypeNumber' || left.type === 'JsdocTypeName' || left.type === 'JsdocTypeStringValue' ||
                    isSquaredProperty(left)) {
                    if (isSquaredProperty(left) && !allowSquaredProperties) {
                        throw new UnexpectedTypeError(left);
                    }
                    parentParser.consume(':');
                    let quote;
                    if (left.type === 'JsdocTypeStringValue') {
                        quote = left.meta.quote;
                    }
                    const right = parentParser.parseType(Precedence.KEY_VALUE);
                    parser.acceptLexerState(parentParser);
                    return {
                        type: 'JsdocTypeObjectField',
                        key: isSquaredProperty(left) ? left : left.value.toString(),
                        right,
                        optional,
                        readonly: readonlyProperty,
                        meta: {
                            quote
                        }
                    };
                }
                else {
                    if (!allowKeyTypes) {
                        throw new UnexpectedTypeError(left);
                    }
                    parentParser.consume(':');
                    const right = parentParser.parseType(Precedence.KEY_VALUE);
                    parser.acceptLexerState(parentParser);
                    return {
                        type: 'JsdocTypeJsdocObjectField',
                        left: assertRootResult(left),
                        right
                    };
                }
            }
        });
    }

    function createKeyValueParslet({ allowOptional, allowVariadic }) {
        return composeParslet({
            name: 'keyValueParslet',
            precedence: Precedence.KEY_VALUE,
            accept: type => type === ':',
            parseInfix: (parser, left) => {
                let optional = false;
                let variadic = false;
                if (allowOptional && left.type === 'JsdocTypeNullable') {
                    optional = true;
                    left = left.element;
                }
                if (allowVariadic && left.type === 'JsdocTypeVariadic' && left.element !== undefined) {
                    variadic = true;
                    left = left.element;
                }
                if (left.type !== 'JsdocTypeName') {
                    throw new UnexpectedTypeError(left);
                }
                parser.consume(':');
                const right = parser.parseType(Precedence.KEY_VALUE);
                return {
                    type: 'JsdocTypeKeyValue',
                    key: left.value,
                    right,
                    optional,
                    variadic
                };
            }
        });
    }

    const jsdocBaseGrammar = [
        ...baseGrammar,
        createFunctionParslet({
            allowWithoutParenthesis: true,
            allowNamedParameters: ['this', 'new'],
            allowNoReturnType: true,
            allowNewAsFunctionKeyword: false
        }),
        stringValueParslet,
        createSpecialNamePathParslet({
            allowedTypes: ['module', 'external', 'event'],
            pathGrammar
        }),
        createVariadicParslet({
            allowEnclosingBrackets: true,
            allowPostfix: true
        }),
        createNameParslet({
            allowedAdditionalTokens: ['keyof']
        }),
        symbolParslet,
        arrayBracketsParslet,
        createNamePathParslet({
            allowSquareBracketsOnAnyType: false,
            allowJsdocNamePaths: true,
            pathGrammar
        })
    ];
    const jsdocGrammar = [
        ...jsdocBaseGrammar,
        createObjectParslet({
            // jsdoc syntax allows full types as keys, so we need to pull in the full grammar here
            // we leave out the object type deliberately
            objectFieldGrammar: [
                createNameParslet({
                    allowedAdditionalTokens: ['module', 'in']
                }),
                createObjectFieldParslet({
                    allowSquaredProperties: false,
                    allowKeyTypes: true,
                    allowOptional: false,
                    allowReadonly: false
                }),
                ...jsdocBaseGrammar
            ],
            allowKeyTypes: true
        }),
        createKeyValueParslet({
            allowOptional: true,
            allowVariadic: true
        })
    ];

    const typeOfParslet = composeParslet({
        name: 'typeOfParslet',
        accept: type => type === 'typeof',
        parsePrefix: parser => {
            parser.consume('typeof');
            return {
                type: 'JsdocTypeTypeof',
                element: assertRootResult(parser.parseType(Precedence.KEY_OF_TYPE_OF))
            };
        }
    });

    const objectFieldGrammar$1 = [
        createNameParslet({
            allowedAdditionalTokens: ['module', 'keyof', 'event', 'external', 'in']
        }),
        nullableParslet,
        optionalParslet,
        stringValueParslet,
        numberParslet,
        createObjectFieldParslet({
            allowSquaredProperties: false,
            allowKeyTypes: false,
            allowOptional: false,
            allowReadonly: false
        })
    ];
    const closureGrammar = [
        ...baseGrammar,
        createObjectParslet({
            allowKeyTypes: false,
            objectFieldGrammar: objectFieldGrammar$1
        }),
        createNameParslet({
            allowedAdditionalTokens: ['event', 'external', 'in']
        }),
        typeOfParslet,
        createFunctionParslet({
            allowWithoutParenthesis: false,
            allowNamedParameters: ['this', 'new'],
            allowNoReturnType: true,
            allowNewAsFunctionKeyword: false
        }),
        createVariadicParslet({
            allowEnclosingBrackets: false,
            allowPostfix: false
        }),
        // additional name parslet is needed for some special cases
        createNameParslet({
            allowedAdditionalTokens: ['keyof']
        }),
        createSpecialNamePathParslet({
            allowedTypes: ['module'],
            pathGrammar
        }),
        createNamePathParslet({
            allowSquareBracketsOnAnyType: false,
            allowJsdocNamePaths: true,
            pathGrammar
        }),
        createKeyValueParslet({
            allowOptional: false,
            allowVariadic: false
        }),
        symbolParslet
    ];

    function createTupleParslet({ allowQuestionMark }) {
        return composeParslet({
            name: 'tupleParslet',
            accept: type => type === '[',
            parsePrefix: parser => {
                parser.consume('[');
                const result = {
                    type: 'JsdocTypeTuple',
                    elements: []
                };
                if (parser.consume(']')) {
                    return result;
                }
                const typeList = parser.parseIntermediateType(Precedence.ALL);
                if (typeList.type === 'JsdocTypeParameterList') {
                    if (typeList.elements[0].type === 'JsdocTypeKeyValue') {
                        result.elements = typeList.elements.map(assertPlainKeyValueResult);
                    }
                    else {
                        result.elements = typeList.elements.map(assertRootResult);
                    }
                }
                else {
                    if (typeList.type === 'JsdocTypeKeyValue') {
                        result.elements = [assertPlainKeyValueResult(typeList)];
                    }
                    else {
                        result.elements = [assertRootResult(typeList)];
                    }
                }
                if (!parser.consume(']')) {
                    throw new Error('Unterminated \'[\'');
                }
                if (!allowQuestionMark && result.elements.some((e) => e.type === 'JsdocTypeUnknown')) {
                    throw new Error('Question mark in tuple not allowed');
                }
                return result;
            }
        });
    }

    const keyOfParslet = composeParslet({
        name: 'keyOfParslet',
        accept: type => type === 'keyof',
        parsePrefix: parser => {
            parser.consume('keyof');
            return {
                type: 'JsdocTypeKeyof',
                element: assertRootResult(parser.parseType(Precedence.KEY_OF_TYPE_OF))
            };
        }
    });

    const importParslet = composeParslet({
        name: 'importParslet',
        accept: type => type === 'import',
        parsePrefix: parser => {
            parser.consume('import');
            if (!parser.consume('(')) {
                throw new Error('Missing parenthesis after import keyword');
            }
            const path = parser.parseType(Precedence.PREFIX);
            if (path.type !== 'JsdocTypeStringValue') {
                throw new Error('Only string values are allowed as paths for imports');
            }
            if (!parser.consume(')')) {
                throw new Error('Missing closing parenthesis after import keyword');
            }
            return {
                type: 'JsdocTypeImport',
                element: path
            };
        }
    });

    const readonlyPropertyParslet = composeParslet({
        name: 'readonlyPropertyParslet',
        accept: type => type === 'readonly',
        parsePrefix: parser => {
            parser.consume('readonly');
            return {
                type: 'JsdocTypeReadonlyProperty',
                element: parser.parseType(Precedence.KEY_VALUE)
            };
        }
    });

    const arrowFunctionParslet = composeParslet({
        name: 'arrowFunctionParslet',
        precedence: Precedence.ARROW,
        accept: type => type === '=>',
        parseInfix: (parser, left) => {
            parser.consume('=>');
            return {
                type: 'JsdocTypeFunction',
                parameters: getParameters(left).map(assertPlainKeyValueOrNameResult),
                arrow: true,
                constructor: false,
                parenthesis: true,
                returnType: parser.parseType(Precedence.OBJECT)
            };
        }
    });

    const intersectionParslet = composeParslet({
        name: 'intersectionParslet',
        accept: type => type === '&',
        precedence: Precedence.INTERSECTION,
        parseInfix: (parser, left) => {
            parser.consume('&');
            const elements = [];
            do {
                elements.push(parser.parseType(Precedence.INTERSECTION));
            } while (parser.consume('&'));
            return {
                type: 'JsdocTypeIntersection',
                elements: [assertRootResult(left), ...elements]
            };
        }
    });

    const predicateParslet = composeParslet({
        name: 'predicateParslet',
        precedence: Precedence.INFIX,
        accept: type => type === 'is',
        parseInfix: (parser, left) => {
            if (left.type !== 'JsdocTypeName') {
                throw new UnexpectedTypeError(left, 'A typescript predicate always has to have a name on the left side.');
            }
            parser.consume('is');
            return {
                type: 'JsdocTypePredicate',
                left,
                right: assertRootResult(parser.parseIntermediateType(Precedence.INFIX))
            };
        }
    });

    const objectSquaredPropertyParslet = composeParslet({
        name: 'objectSquareBracketPropertyParslet',
        accept: type => type === '[',
        parsePrefix: parser => {
            if (parser.baseParser === undefined) {
                throw new Error('Only allowed inside object grammar');
            }
            parser.consume('[');
            const key = parser.lexer.current.text;
            parser.consume('Identifier');
            let result;
            if (parser.consume(':')) {
                const parentParser = parser.baseParser;
                parentParser.acceptLexerState(parser);
                result = {
                    type: 'JsdocTypeIndexSignature',
                    key,
                    right: parentParser.parseType(Precedence.ARRAY_BRACKETS)
                };
                parser.acceptLexerState(parentParser);
            }
            else if (parser.consume('in')) {
                const parentParser = parser.baseParser;
                parentParser.acceptLexerState(parser);
                result = {
                    type: 'JsdocTypeMappedType',
                    key,
                    right: parentParser.parseType(Precedence.ARRAY_BRACKETS)
                };
                parser.acceptLexerState(parentParser);
            }
            else {
                throw new Error('Missing \':\' or \'in\' inside square bracketed property.');
            }
            if (!parser.consume(']')) {
                throw new Error('Unterminated square brackets');
            }
            return result;
        }
    });

    const objectFieldGrammar = [
        readonlyPropertyParslet,
        createNameParslet({
            allowedAdditionalTokens: ['module', 'event', 'keyof', 'event', 'external', 'in']
        }),
        nullableParslet,
        optionalParslet,
        stringValueParslet,
        numberParslet,
        createObjectFieldParslet({
            allowSquaredProperties: true,
            allowKeyTypes: false,
            allowOptional: true,
            allowReadonly: true
        }),
        objectSquaredPropertyParslet
    ];
    const typescriptGrammar = [
        ...baseGrammar,
        createObjectParslet({
            allowKeyTypes: false,
            objectFieldGrammar
        }),
        typeOfParslet,
        keyOfParslet,
        importParslet,
        stringValueParslet,
        createFunctionParslet({
            allowWithoutParenthesis: true,
            allowNoReturnType: false,
            allowNamedParameters: ['this', 'new', 'args'],
            allowNewAsFunctionKeyword: true
        }),
        createTupleParslet({
            allowQuestionMark: false
        }),
        createVariadicParslet({
            allowEnclosingBrackets: false,
            allowPostfix: false
        }),
        createNameParslet({
            allowedAdditionalTokens: ['event', 'external', 'in']
        }),
        createSpecialNamePathParslet({
            allowedTypes: ['module'],
            pathGrammar
        }),
        arrayBracketsParslet,
        arrowFunctionParslet,
        createNamePathParslet({
            allowSquareBracketsOnAnyType: true,
            allowJsdocNamePaths: false,
            pathGrammar
        }),
        intersectionParslet,
        predicateParslet,
        createKeyValueParslet({
            allowVariadic: true,
            allowOptional: true
        })
    ];

    /**
     * This function parses the given expression in the given mode and produces a {@link RootResult}.
     * @param expression
     * @param mode
     */
    function parse(expression, mode) {
        switch (mode) {
            case 'closure':
                return (new Parser(closureGrammar, expression)).parse();
            case 'jsdoc':
                return (new Parser(jsdocGrammar, expression)).parse();
            case 'typescript':
                return (new Parser(typescriptGrammar, expression)).parse();
        }
    }
    /**
     * This function tries to parse the given expression in multiple modes and returns the first successful
     * {@link RootResult}. By default it tries `'typescript'`, `'closure'` and `'jsdoc'` in this order. If
     * no mode was successful it throws the error that was produced by the last parsing attempt.
     * @param expression
     * @param modes
     */
    function tryParse(expression, modes = ['typescript', 'closure', 'jsdoc']) {
        let error;
        for (const mode of modes) {
            try {
                return parse(expression, mode);
            }
            catch (e) {
                error = e;
            }
        }
        throw error;
    }

    function transform(rules, parseResult) {
        const rule = rules[parseResult.type];
        if (rule === undefined) {
            throw new Error(`In this set of transform rules exists no rule for type ${parseResult.type}.`);
        }
        return rule(parseResult, aParseResult => transform(rules, aParseResult));
    }
    function notAvailableTransform(parseResult) {
        throw new Error('This transform is not available. Are you trying the correct parsing mode?');
    }
    function extractSpecialParams(source) {
        const result = {
            params: []
        };
        for (const param of source.parameters) {
            if (param.type === 'JsdocTypeKeyValue') {
                if (param.key === 'this') {
                    result.this = param.right;
                }
                else if (param.key === 'new') {
                    result.new = param.right;
                }
                else {
                    result.params.push(param);
                }
            }
            else {
                result.params.push(param);
            }
        }
        return result;
    }

    function applyPosition(position, target, value) {
        return position === 'prefix' ? value + target : target + value;
    }
    function quote(value, quote) {
        switch (quote) {
            case 'double':
                return `"${value}"`;
            case 'single':
                return `'${value}'`;
            case undefined:
                return value;
        }
    }
    function stringifyRules() {
        return {
            JsdocTypeParenthesis: (result, transform) => `(${result.element !== undefined ? transform(result.element) : ''})`,
            JsdocTypeKeyof: (result, transform) => `keyof ${transform(result.element)}`,
            JsdocTypeFunction: (result, transform) => {
                if (!result.arrow) {
                    let stringified = result.constructor ? 'new' : 'function';
                    if (!result.parenthesis) {
                        return stringified;
                    }
                    stringified += `(${result.parameters.map(transform).join(', ')})`;
                    if (result.returnType !== undefined) {
                        stringified += `: ${transform(result.returnType)}`;
                    }
                    return stringified;
                }
                else {
                    if (result.returnType === undefined) {
                        throw new Error('Arrow function needs a return type.');
                    }
                    let stringified = `(${result.parameters.map(transform).join(', ')}) => ${transform(result.returnType)}`;
                    if (result.constructor) {
                        stringified = 'new ' + stringified;
                    }
                    return stringified;
                }
            },
            JsdocTypeName: result => result.value,
            JsdocTypeTuple: (result, transform) => `[${result.elements.map(transform).join(', ')}]`,
            JsdocTypeVariadic: (result, transform) => result.meta.position === undefined
                ? '...'
                : applyPosition(result.meta.position, transform(result.element), '...'),
            JsdocTypeNamePath: (result, transform) => {
                const left = transform(result.left);
                const right = transform(result.right);
                switch (result.pathType) {
                    case 'inner':
                        return `${left}~${right}`;
                    case 'instance':
                        return `${left}#${right}`;
                    case 'property':
                        return `${left}.${right}`;
                    case 'property-brackets':
                        return `${left}[${right}]`;
                }
            },
            JsdocTypeStringValue: result => quote(result.value, result.meta.quote),
            JsdocTypeAny: () => '*',
            JsdocTypeGeneric: (result, transform) => {
                if (result.meta.brackets === 'square') {
                    const element = result.elements[0];
                    const transformed = transform(element);
                    if (element.type === 'JsdocTypeUnion' || element.type === 'JsdocTypeIntersection') {
                        return `(${transformed})[]`;
                    }
                    else {
                        return `${transformed}[]`;
                    }
                }
                else {
                    return `${transform(result.left)}${result.meta.dot ? '.' : ''}<${result.elements.map(transform).join(', ')}>`;
                }
            },
            JsdocTypeImport: (result, transform) => `import(${transform(result.element)})`,
            JsdocTypeObjectField: (result, transform) => {
                let text = '';
                if (result.readonly) {
                    text += 'readonly ';
                }
                if (typeof result.key === 'string') {
                    text += quote(result.key, result.meta.quote);
                }
                else {
                    text += transform(result.key);
                }
                if (result.optional) {
                    text += '?';
                }
                if (result.right === undefined) {
                    return text;
                }
                else {
                    return text + `: ${transform(result.right)}`;
                }
            },
            JsdocTypeJsdocObjectField: (result, transform) => {
                return `${transform(result.left)}: ${transform(result.right)}`;
            },
            JsdocTypeKeyValue: (result, transform) => {
                let text = result.key;
                if (result.optional) {
                    text += '?';
                }
                if (result.variadic) {
                    text = '...' + text;
                }
                if (result.right === undefined) {
                    return text;
                }
                else {
                    return text + `: ${transform(result.right)}`;
                }
            },
            JsdocTypeSpecialNamePath: result => `${result.specialType}:${quote(result.value, result.meta.quote)}`,
            JsdocTypeNotNullable: (result, transform) => applyPosition(result.meta.position, transform(result.element), '!'),
            JsdocTypeNull: () => 'null',
            JsdocTypeNullable: (result, transform) => applyPosition(result.meta.position, transform(result.element), '?'),
            JsdocTypeNumber: result => result.value.toString(),
            JsdocTypeObject: (result, transform) => `{${result.elements.map(transform).join((result.meta.separator === 'comma' ? ',' : ';') + ' ')}}`,
            JsdocTypeOptional: (result, transform) => applyPosition(result.meta.position, transform(result.element), '='),
            JsdocTypeSymbol: (result, transform) => `${result.value}(${result.element !== undefined ? transform(result.element) : ''})`,
            JsdocTypeTypeof: (result, transform) => `typeof ${transform(result.element)}`,
            JsdocTypeUndefined: () => 'undefined',
            JsdocTypeUnion: (result, transform) => result.elements.map(transform).join(' | '),
            JsdocTypeUnknown: () => '?',
            JsdocTypeIntersection: (result, transform) => result.elements.map(transform).join(' & '),
            JsdocTypeProperty: result => quote(result.value, result.meta.quote),
            JsdocTypePredicate: (result, transform) => `${transform(result.left)} is ${transform(result.right)}`,
            JsdocTypeIndexSignature: (result, transform) => `[${result.key}: ${transform(result.right)}]`,
            JsdocTypeMappedType: (result, transform) => `[${result.key} in ${transform(result.right)}]`
        };
    }
    const storedStringifyRules = stringifyRules();
    function stringify(result) {
        return transform(storedStringifyRules, result);
    }

    const reservedWords = [
        'null',
        'true',
        'false',
        'break',
        'case',
        'catch',
        'class',
        'const',
        'continue',
        'debugger',
        'default',
        'delete',
        'do',
        'else',
        'export',
        'extends',
        'finally',
        'for',
        'function',
        'if',
        'import',
        'in',
        'instanceof',
        'new',
        'return',
        'super',
        'switch',
        'this',
        'throw',
        'try',
        'typeof',
        'var',
        'void',
        'while',
        'with',
        'yield'
    ];
    function makeName(value) {
        const result = {
            type: 'NameExpression',
            name: value
        };
        if (reservedWords.includes(value)) {
            result.reservedWord = true;
        }
        return result;
    }
    const catharsisTransformRules = {
        JsdocTypeOptional: (result, transform) => {
            const transformed = transform(result.element);
            transformed.optional = true;
            return transformed;
        },
        JsdocTypeNullable: (result, transform) => {
            const transformed = transform(result.element);
            transformed.nullable = true;
            return transformed;
        },
        JsdocTypeNotNullable: (result, transform) => {
            const transformed = transform(result.element);
            transformed.nullable = false;
            return transformed;
        },
        JsdocTypeVariadic: (result, transform) => {
            if (result.element === undefined) {
                throw new Error('dots without value are not allowed in catharsis mode');
            }
            const transformed = transform(result.element);
            transformed.repeatable = true;
            return transformed;
        },
        JsdocTypeAny: () => ({
            type: 'AllLiteral'
        }),
        JsdocTypeNull: () => ({
            type: 'NullLiteral'
        }),
        JsdocTypeStringValue: result => makeName(quote(result.value, result.meta.quote)),
        JsdocTypeUndefined: () => ({
            type: 'UndefinedLiteral'
        }),
        JsdocTypeUnknown: () => ({
            type: 'UnknownLiteral'
        }),
        JsdocTypeFunction: (result, transform) => {
            const params = extractSpecialParams(result);
            const transformed = {
                type: 'FunctionType',
                params: params.params.map(transform)
            };
            if (params.this !== undefined) {
                transformed.this = transform(params.this);
            }
            if (params.new !== undefined) {
                transformed.new = transform(params.new);
            }
            if (result.returnType !== undefined) {
                transformed.result = transform(result.returnType);
            }
            return transformed;
        },
        JsdocTypeGeneric: (result, transform) => ({
            type: 'TypeApplication',
            applications: result.elements.map(o => transform(o)),
            expression: transform(result.left)
        }),
        JsdocTypeSpecialNamePath: result => makeName(result.specialType + ':' + quote(result.value, result.meta.quote)),
        JsdocTypeName: result => {
            if (result.value !== 'function') {
                return makeName(result.value);
            }
            else {
                return {
                    type: 'FunctionType',
                    params: []
                };
            }
        },
        JsdocTypeNumber: result => makeName(result.value.toString()),
        JsdocTypeObject: (result, transform) => {
            const transformed = {
                type: 'RecordType',
                fields: []
            };
            for (const field of result.elements) {
                if (field.type !== 'JsdocTypeObjectField' && field.type !== 'JsdocTypeJsdocObjectField') {
                    transformed.fields.push({
                        type: 'FieldType',
                        key: transform(field),
                        value: undefined
                    });
                }
                else {
                    transformed.fields.push(transform(field));
                }
            }
            return transformed;
        },
        JsdocTypeObjectField: (result, transform) => {
            if (typeof result.key !== 'string') {
                throw new Error('Index signatures and mapped types are not supported');
            }
            return {
                type: 'FieldType',
                key: makeName(quote(result.key, result.meta.quote)),
                value: result.right === undefined ? undefined : transform(result.right)
            };
        },
        JsdocTypeJsdocObjectField: (result, transform) => ({
            type: 'FieldType',
            key: transform(result.left),
            value: transform(result.right)
        }),
        JsdocTypeUnion: (result, transform) => ({
            type: 'TypeUnion',
            elements: result.elements.map(e => transform(e))
        }),
        JsdocTypeKeyValue: (result, transform) => {
            return {
                type: 'FieldType',
                key: makeName(result.key),
                value: result.right === undefined ? undefined : transform(result.right)
            };
        },
        JsdocTypeNamePath: (result, transform) => {
            const leftResult = transform(result.left);
            let rightValue;
            if (result.right.type === 'JsdocTypeSpecialNamePath') {
                rightValue = transform(result.right).name;
            }
            else {
                rightValue = quote(result.right.value, result.right.meta.quote);
            }
            const joiner = result.pathType === 'inner' ? '~' : result.pathType === 'instance' ? '#' : '.';
            return makeName(`${leftResult.name}${joiner}${rightValue}`);
        },
        JsdocTypeSymbol: result => {
            let value = '';
            let element = result.element;
            let trailingDots = false;
            if ((element === null || element === void 0 ? void 0 : element.type) === 'JsdocTypeVariadic') {
                if (element.meta.position === 'prefix') {
                    value = '...';
                }
                else {
                    trailingDots = true;
                }
                element = element.element;
            }
            if ((element === null || element === void 0 ? void 0 : element.type) === 'JsdocTypeName') {
                value += element.value;
            }
            else if ((element === null || element === void 0 ? void 0 : element.type) === 'JsdocTypeNumber') {
                value += element.value.toString();
            }
            if (trailingDots) {
                value += '...';
            }
            return makeName(`${result.value}(${value})`);
        },
        JsdocTypeParenthesis: (result, transform) => transform(assertRootResult(result.element)),
        JsdocTypeMappedType: notAvailableTransform,
        JsdocTypeIndexSignature: notAvailableTransform,
        JsdocTypeImport: notAvailableTransform,
        JsdocTypeKeyof: notAvailableTransform,
        JsdocTypeTuple: notAvailableTransform,
        JsdocTypeTypeof: notAvailableTransform,
        JsdocTypeIntersection: notAvailableTransform,
        JsdocTypeProperty: notAvailableTransform,
        JsdocTypePredicate: notAvailableTransform
    };
    function catharsisTransform(result) {
        return transform(catharsisTransformRules, result);
    }

    function getQuoteStyle(quote) {
        switch (quote) {
            case undefined:
                return 'none';
            case 'single':
                return 'single';
            case 'double':
                return 'double';
        }
    }
    function getMemberType(type) {
        switch (type) {
            case 'inner':
                return 'INNER_MEMBER';
            case 'instance':
                return 'INSTANCE_MEMBER';
            case 'property':
                return 'MEMBER';
            case 'property-brackets':
                return 'MEMBER';
        }
    }
    function nestResults(type, results) {
        if (results.length === 2) {
            return {
                type,
                left: results[0],
                right: results[1]
            };
        }
        else {
            return {
                type,
                left: results[0],
                right: nestResults(type, results.slice(1))
            };
        }
    }
    const jtpRules = {
        JsdocTypeOptional: (result, transform) => ({
            type: 'OPTIONAL',
            value: transform(result.element),
            meta: {
                syntax: result.meta.position === 'prefix' ? 'PREFIX_EQUAL_SIGN' : 'SUFFIX_EQUALS_SIGN'
            }
        }),
        JsdocTypeNullable: (result, transform) => ({
            type: 'NULLABLE',
            value: transform(result.element),
            meta: {
                syntax: result.meta.position === 'prefix' ? 'PREFIX_QUESTION_MARK' : 'SUFFIX_QUESTION_MARK'
            }
        }),
        JsdocTypeNotNullable: (result, transform) => ({
            type: 'NOT_NULLABLE',
            value: transform(result.element),
            meta: {
                syntax: result.meta.position === 'prefix' ? 'PREFIX_BANG' : 'SUFFIX_BANG'
            }
        }),
        JsdocTypeVariadic: (result, transform) => {
            const transformed = {
                type: 'VARIADIC',
                meta: {
                    syntax: result.meta.position === 'prefix'
                        ? 'PREFIX_DOTS'
                        : result.meta.position === 'suffix' ? 'SUFFIX_DOTS' : 'ONLY_DOTS'
                }
            };
            if (result.element !== undefined) {
                transformed.value = transform(result.element);
            }
            return transformed;
        },
        JsdocTypeName: result => ({
            type: 'NAME',
            name: result.value
        }),
        JsdocTypeTypeof: (result, transform) => ({
            type: 'TYPE_QUERY',
            name: transform(result.element)
        }),
        JsdocTypeTuple: (result, transform) => ({
            type: 'TUPLE',
            entries: result.elements.map(transform)
        }),
        JsdocTypeKeyof: (result, transform) => ({
            type: 'KEY_QUERY',
            value: transform(result.element)
        }),
        JsdocTypeImport: result => ({
            type: 'IMPORT',
            path: {
                type: 'STRING_VALUE',
                quoteStyle: getQuoteStyle(result.element.meta.quote),
                string: result.element.value
            }
        }),
        JsdocTypeUndefined: () => ({
            type: 'NAME',
            name: 'undefined'
        }),
        JsdocTypeAny: () => ({
            type: 'ANY'
        }),
        JsdocTypeFunction: (result, transform) => {
            const specialParams = extractSpecialParams(result);
            const transformed = {
                type: result.arrow ? 'ARROW' : 'FUNCTION',
                params: specialParams.params.map(param => {
                    if (param.type === 'JsdocTypeKeyValue') {
                        if (param.right === undefined) {
                            throw new Error('Function parameter without \':\' is not expected to be \'KEY_VALUE\'');
                        }
                        return {
                            type: 'NAMED_PARAMETER',
                            name: param.key,
                            typeName: transform(param.right)
                        };
                    }
                    else {
                        return transform(param);
                    }
                }),
                new: null,
                returns: null
            };
            if (specialParams.this !== undefined) {
                transformed.this = transform(specialParams.this);
            }
            else if (!result.arrow) {
                transformed.this = null;
            }
            if (specialParams.new !== undefined) {
                transformed.new = transform(specialParams.new);
            }
            if (result.returnType !== undefined) {
                transformed.returns = transform(result.returnType);
            }
            return transformed;
        },
        JsdocTypeGeneric: (result, transform) => {
            const transformed = {
                type: 'GENERIC',
                subject: transform(result.left),
                objects: result.elements.map(transform),
                meta: {
                    syntax: result.meta.brackets === 'square' ? 'SQUARE_BRACKET' : result.meta.dot ? 'ANGLE_BRACKET_WITH_DOT' : 'ANGLE_BRACKET'
                }
            };
            if (result.meta.brackets === 'square' && result.elements[0].type === 'JsdocTypeFunction' && !result.elements[0].parenthesis) {
                transformed.objects[0] = {
                    type: 'NAME',
                    name: 'function'
                };
            }
            return transformed;
        },
        JsdocTypeObjectField: (result, transform) => {
            if (typeof result.key !== 'string') {
                throw new Error('Index signatures and mapped types are not supported');
            }
            if (result.right === undefined) {
                return {
                    type: 'RECORD_ENTRY',
                    key: result.key,
                    quoteStyle: getQuoteStyle(result.meta.quote),
                    value: null,
                    readonly: false
                };
            }
            let right = transform(result.right);
            if (result.optional) {
                right = {
                    type: 'OPTIONAL',
                    value: right,
                    meta: {
                        syntax: 'SUFFIX_KEY_QUESTION_MARK'
                    }
                };
            }
            return {
                type: 'RECORD_ENTRY',
                key: result.key.toString(),
                quoteStyle: getQuoteStyle(result.meta.quote),
                value: right,
                readonly: false
            };
        },
        JsdocTypeJsdocObjectField: () => {
            throw new Error('Keys may not be typed in jsdoctypeparser.');
        },
        JsdocTypeKeyValue: (result, transform) => {
            if (result.right === undefined) {
                return {
                    type: 'RECORD_ENTRY',
                    key: result.key,
                    quoteStyle: 'none',
                    value: null,
                    readonly: false
                };
            }
            let right = transform(result.right);
            if (result.optional) {
                right = {
                    type: 'OPTIONAL',
                    value: right,
                    meta: {
                        syntax: 'SUFFIX_KEY_QUESTION_MARK'
                    }
                };
            }
            return {
                type: 'RECORD_ENTRY',
                key: result.key,
                quoteStyle: 'none',
                value: right,
                readonly: false
            };
        },
        JsdocTypeObject: (result, transform) => {
            const entries = [];
            for (const field of result.elements) {
                if (field.type === 'JsdocTypeObjectField' || field.type === 'JsdocTypeJsdocObjectField') {
                    entries.push(transform(field));
                }
            }
            return {
                type: 'RECORD',
                entries
            };
        },
        JsdocTypeSpecialNamePath: result => {
            if (result.specialType !== 'module') {
                throw new Error(`jsdoctypeparser does not support type ${result.specialType} at this point.`);
            }
            return {
                type: 'MODULE',
                value: {
                    type: 'FILE_PATH',
                    quoteStyle: getQuoteStyle(result.meta.quote),
                    path: result.value
                }
            };
        },
        JsdocTypeNamePath: (result, transform) => {
            let hasEventPrefix = false;
            let name;
            let quoteStyle;
            if (result.right.type === 'JsdocTypeSpecialNamePath' && result.right.specialType === 'event') {
                hasEventPrefix = true;
                name = result.right.value;
                quoteStyle = getQuoteStyle(result.right.meta.quote);
            }
            else {
                name = result.right.value;
                quoteStyle = getQuoteStyle(result.right.meta.quote);
            }
            const transformed = {
                type: getMemberType(result.pathType),
                owner: transform(result.left),
                name,
                quoteStyle,
                hasEventPrefix
            };
            if (transformed.owner.type === 'MODULE') {
                const tModule = transformed.owner;
                transformed.owner = transformed.owner.value;
                tModule.value = transformed;
                return tModule;
            }
            else {
                return transformed;
            }
        },
        JsdocTypeUnion: (result, transform) => nestResults('UNION', result.elements.map(transform)),
        JsdocTypeParenthesis: (result, transform) => ({
            type: 'PARENTHESIS',
            value: transform(assertRootResult(result.element))
        }),
        JsdocTypeNull: () => ({
            type: 'NAME',
            name: 'null'
        }),
        JsdocTypeUnknown: () => ({
            type: 'UNKNOWN'
        }),
        JsdocTypeStringValue: result => ({
            type: 'STRING_VALUE',
            quoteStyle: getQuoteStyle(result.meta.quote),
            string: result.value
        }),
        JsdocTypeIntersection: (result, transform) => nestResults('INTERSECTION', result.elements.map(transform)),
        JsdocTypeNumber: result => ({
            type: 'NUMBER_VALUE',
            number: result.value.toString()
        }),
        JsdocTypeSymbol: notAvailableTransform,
        JsdocTypeProperty: notAvailableTransform,
        JsdocTypePredicate: notAvailableTransform,
        JsdocTypeMappedType: notAvailableTransform,
        JsdocTypeIndexSignature: notAvailableTransform
    };
    function jtpTransform(result) {
        return transform(jtpRules, result);
    }

    function identityTransformRules() {
        return {
            JsdocTypeIntersection: (result, transform) => ({
                type: 'JsdocTypeIntersection',
                elements: result.elements.map(transform)
            }),
            JsdocTypeGeneric: (result, transform) => ({
                type: 'JsdocTypeGeneric',
                left: transform(result.left),
                elements: result.elements.map(transform),
                meta: {
                    dot: result.meta.dot,
                    brackets: result.meta.brackets
                }
            }),
            JsdocTypeNullable: result => result,
            JsdocTypeUnion: (result, transform) => ({
                type: 'JsdocTypeUnion',
                elements: result.elements.map(transform)
            }),
            JsdocTypeUnknown: result => result,
            JsdocTypeUndefined: result => result,
            JsdocTypeTypeof: (result, transform) => ({
                type: 'JsdocTypeTypeof',
                element: transform(result.element)
            }),
            JsdocTypeSymbol: (result, transform) => {
                const transformed = {
                    type: 'JsdocTypeSymbol',
                    value: result.value
                };
                if (result.element !== undefined) {
                    transformed.element = transform(result.element);
                }
                return transformed;
            },
            JsdocTypeOptional: (result, transform) => ({
                type: 'JsdocTypeOptional',
                element: transform(result.element),
                meta: {
                    position: result.meta.position
                }
            }),
            JsdocTypeObject: (result, transform) => ({
                type: 'JsdocTypeObject',
                meta: {
                    separator: 'comma'
                },
                elements: result.elements.map(transform)
            }),
            JsdocTypeNumber: result => result,
            JsdocTypeNull: result => result,
            JsdocTypeNotNullable: (result, transform) => ({
                type: 'JsdocTypeNotNullable',
                element: transform(result.element),
                meta: {
                    position: result.meta.position
                }
            }),
            JsdocTypeSpecialNamePath: result => result,
            JsdocTypeObjectField: (result, transform) => ({
                type: 'JsdocTypeObjectField',
                key: result.key,
                right: result.right === undefined ? undefined : transform(result.right),
                optional: result.optional,
                readonly: result.readonly,
                meta: result.meta
            }),
            JsdocTypeJsdocObjectField: (result, transform) => ({
                type: 'JsdocTypeJsdocObjectField',
                left: transform(result.left),
                right: transform(result.right)
            }),
            JsdocTypeKeyValue: (result, transform) => {
                return {
                    type: 'JsdocTypeKeyValue',
                    key: result.key,
                    right: result.right === undefined ? undefined : transform(result.right),
                    optional: result.optional,
                    variadic: result.variadic
                };
            },
            JsdocTypeImport: (result, transform) => ({
                type: 'JsdocTypeImport',
                element: transform(result.element)
            }),
            JsdocTypeAny: result => result,
            JsdocTypeStringValue: result => result,
            JsdocTypeNamePath: result => result,
            JsdocTypeVariadic: (result, transform) => {
                const transformed = {
                    type: 'JsdocTypeVariadic',
                    meta: {
                        position: result.meta.position,
                        squareBrackets: result.meta.squareBrackets
                    }
                };
                if (result.element !== undefined) {
                    transformed.element = transform(result.element);
                }
                return transformed;
            },
            JsdocTypeTuple: (result, transform) => ({
                type: 'JsdocTypeTuple',
                elements: result.elements.map(transform)
            }),
            JsdocTypeName: result => result,
            JsdocTypeFunction: (result, transform) => {
                const transformed = {
                    type: 'JsdocTypeFunction',
                    arrow: result.arrow,
                    parameters: result.parameters.map(transform),
                    constructor: result.constructor,
                    parenthesis: result.parenthesis
                };
                if (result.returnType !== undefined) {
                    transformed.returnType = transform(result.returnType);
                }
                return transformed;
            },
            JsdocTypeKeyof: (result, transform) => ({
                type: 'JsdocTypeKeyof',
                element: transform(result.element)
            }),
            JsdocTypeParenthesis: (result, transform) => ({
                type: 'JsdocTypeParenthesis',
                element: transform(result.element)
            }),
            JsdocTypeProperty: result => result,
            JsdocTypePredicate: (result, transform) => ({
                type: 'JsdocTypePredicate',
                left: transform(result.left),
                right: transform(result.right)
            }),
            JsdocTypeIndexSignature: (result, transform) => ({
                type: 'JsdocTypeIndexSignature',
                key: result.key,
                right: transform(result.right)
            }),
            JsdocTypeMappedType: (result, transform) => ({
                type: 'JsdocTypeMappedType',
                key: result.key,
                right: transform(result.right)
            })
        };
    }

    const visitorKeys = {
        JsdocTypeAny: [],
        JsdocTypeFunction: ['parameters', 'returnType'],
        JsdocTypeGeneric: ['left', 'elements'],
        JsdocTypeImport: [],
        JsdocTypeIndexSignature: ['right'],
        JsdocTypeIntersection: ['elements'],
        JsdocTypeKeyof: ['element'],
        JsdocTypeKeyValue: ['right'],
        JsdocTypeMappedType: ['right'],
        JsdocTypeName: [],
        JsdocTypeNamePath: ['left', 'right'],
        JsdocTypeNotNullable: ['element'],
        JsdocTypeNull: [],
        JsdocTypeNullable: ['element'],
        JsdocTypeNumber: [],
        JsdocTypeObject: ['elements'],
        JsdocTypeObjectField: ['right'],
        JsdocTypeJsdocObjectField: ['left', 'right'],
        JsdocTypeOptional: ['element'],
        JsdocTypeParenthesis: ['element'],
        JsdocTypeSpecialNamePath: [],
        JsdocTypeStringValue: [],
        JsdocTypeSymbol: ['element'],
        JsdocTypeTuple: ['elements'],
        JsdocTypeTypeof: ['element'],
        JsdocTypeUndefined: [],
        JsdocTypeUnion: ['elements'],
        JsdocTypeUnknown: [],
        JsdocTypeVariadic: ['element'],
        JsdocTypeProperty: [],
        JsdocTypePredicate: ['left', 'right']
    };

    function _traverse(node, parentNode, property, onEnter, onLeave) {
        onEnter === null || onEnter === void 0 ? void 0 : onEnter(node, parentNode, property);
        const keysToVisit = visitorKeys[node.type];
        for (const key of keysToVisit) {
            const value = node[key];
            if (value !== undefined) {
                if (Array.isArray(value)) {
                    for (const element of value) {
                        _traverse(element, node, key, onEnter, onLeave);
                    }
                }
                else {
                    _traverse(value, node, key, onEnter, onLeave);
                }
            }
        }
        onLeave === null || onLeave === void 0 ? void 0 : onLeave(node, parentNode, property);
    }
    /**
     * A function to traverse an AST. It traverses it depth first.
     * @param node the node to start traversing at.
     * @param onEnter node visitor function that will be called on entering the node. This corresponds to preorder traversing.
     * @param onLeave node visitor function that will be called on leaving the node. This corresponds to postorder traversing.
     */
    function traverse(node, onEnter, onLeave) {
        _traverse(node, undefined, undefined, onEnter, onLeave);
    }

    exports.catharsisTransform = catharsisTransform;
    exports.identityTransformRules = identityTransformRules;
    exports.jtpTransform = jtpTransform;
    exports.parse = parse;
    exports.stringify = stringify;
    exports.stringifyRules = stringifyRules;
    exports.transform = transform;
    exports.traverse = traverse;
    exports.tryParse = tryParse;
    exports.visitorKeys = visitorKeys;

}));
