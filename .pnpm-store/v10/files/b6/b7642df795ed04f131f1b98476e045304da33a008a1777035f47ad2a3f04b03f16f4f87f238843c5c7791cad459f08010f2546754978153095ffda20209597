/*
 * @fileoverview Type expression parser.
 * @author Yusuke Suzuki <utatane.tea@gmail.com>
 * @author Dan Tao <daniel.tao@gmail.com>
 * @author Andrew Eisenberg <andrew@eisenberg.as>
 */

// "typed", the Type Expression Parser for doctrine.

(function () {
    'use strict';

    var Syntax,
        Token,
        source,
        length,
        index,
        previous,
        token,
        value,
        esutils,
        utility,
        rangeOffset,
        addRange;

    esutils = require('esutils');
    utility = require('./utility');

    Syntax = {
        NullableLiteral: 'NullableLiteral',
        AllLiteral: 'AllLiteral',
        NullLiteral: 'NullLiteral',
        UndefinedLiteral: 'UndefinedLiteral',
        VoidLiteral: 'VoidLiteral',
        UnionType: 'UnionType',
        ArrayType: 'ArrayType',
        RecordType: 'RecordType',
        FieldType: 'FieldType',
        FunctionType: 'FunctionType',
        ParameterType: 'ParameterType',
        RestType: 'RestType',
        NonNullableType: 'NonNullableType',
        OptionalType: 'OptionalType',
        NullableType: 'NullableType',
        NameExpression: 'NameExpression',
        TypeApplication: 'TypeApplication',
        StringLiteralType: 'StringLiteralType',
        NumericLiteralType: 'NumericLiteralType',
        BooleanLiteralType: 'BooleanLiteralType'
    };

    Token = {
        ILLEGAL: 0,    // ILLEGAL
        DOT_LT: 1,     // .<
        REST: 2,       // ...
        LT: 3,         // <
        GT: 4,         // >
        LPAREN: 5,     // (
        RPAREN: 6,     // )
        LBRACE: 7,     // {
        RBRACE: 8,     // }
        LBRACK: 9,    // [
        RBRACK: 10,    // ]
        COMMA: 11,     // ,
        COLON: 12,     // :
        STAR: 13,      // *
        PIPE: 14,      // |
        QUESTION: 15,  // ?
        BANG: 16,      // !
        EQUAL: 17,     // =
        NAME: 18,      // name token
        STRING: 19,    // string
        NUMBER: 20,    // number
        EOF: 21
    };

    function isTypeName(ch) {
        return '><(){}[],:*|?!='.indexOf(String.fromCharCode(ch)) === -1 && !esutils.code.isWhiteSpace(ch) && !esutils.code.isLineTerminator(ch);
    }

    function Context(previous, index, token, value) {
        this._previous = previous;
        this._index = index;
        this._token = token;
        this._value = value;
    }

    Context.prototype.restore = function () {
        previous = this._previous;
        index = this._index;
        token = this._token;
        value = this._value;
    };

    Context.save = function () {
        return new Context(previous, index, token, value);
    };

    function maybeAddRange(node, range) {
        if (addRange) {
            node.range = [range[0] + rangeOffset, range[1] + rangeOffset];
        }
        return node;
    }

    function advance() {
        var ch = source.charAt(index);
        index += 1;
        return ch;
    }

    function scanHexEscape(prefix) {
        var i, len, ch, code = 0;

        len = (prefix === 'u') ? 4 : 2;
        for (i = 0; i < len; ++i) {
            if (index < length && esutils.code.isHexDigit(source.charCodeAt(index))) {
                ch = advance();
                code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
            } else {
                return '';
            }
        }
        return String.fromCharCode(code);
    }

    function scanString() {
        var str = '', quote, ch, code, unescaped, restore; //TODO review removal octal = false
        quote = source.charAt(index);
        ++index;

        while (index < length) {
            ch = advance();

            if (ch === quote) {
                quote = '';
                break;
            } else if (ch === '\\') {
                ch = advance();
                if (!esutils.code.isLineTerminator(ch.charCodeAt(0))) {
                    switch (ch) {
                    case 'n':
                        str += '\n';
                        break;
                    case 'r':
                        str += '\r';
                        break;
                    case 't':
                        str += '\t';
                        break;
                    case 'u':
                    case 'x':
                        restore = index;
                        unescaped = scanHexEscape(ch);
                        if (unescaped) {
                            str += unescaped;
                        } else {
                            index = restore;
                            str += ch;
                        }
                        break;
                    case 'b':
                        str += '\b';
                        break;
                    case 'f':
                        str += '\f';
                        break;
                    case 'v':
                        str += '\v';
                        break;

                    default:
                        if (esutils.code.isOctalDigit(ch.charCodeAt(0))) {
                            code = '01234567'.indexOf(ch);

                            // \0 is not octal escape sequence
                            // Deprecating unused code. TODO review removal
                            //if (code !== 0) {
                            //    octal = true;
                            //}

                            if (index < length && esutils.code.isOctalDigit(source.charCodeAt(index))) {
                                //TODO Review Removal octal = true;
                                code = code * 8 + '01234567'.indexOf(advance());

                                // 3 digits are only allowed when string starts
                                // with 0, 1, 2, 3
                                if ('0123'.indexOf(ch) >= 0 &&
                                        index < length &&
                                        esutils.code.isOctalDigit(source.charCodeAt(index))) {
                                    code = code * 8 + '01234567'.indexOf(advance());
                                }
                            }
                            str += String.fromCharCode(code);
                        } else {
                            str += ch;
                        }
                        break;
                    }
                } else {
                    if (ch ===  '\r' && source.charCodeAt(index) === 0x0A  /* '\n' */) {
                        ++index;
                    }
                }
            } else if (esutils.code.isLineTerminator(ch.charCodeAt(0))) {
                break;
            } else {
                str += ch;
            }
        }

        if (quote !== '') {
            utility.throwError('unexpected quote');
        }

        value = str;
        return Token.STRING;
    }

    function scanNumber() {
        var number, ch;

        number = '';
        ch = source.charCodeAt(index);

        if (ch !== 0x2E  /* '.' */) {
            number = advance();
            ch = source.charCodeAt(index);

            if (number === '0') {
                if (ch === 0x78  /* 'x' */ || ch === 0x58  /* 'X' */) {
                    number += advance();
                    while (index < length) {
                        ch = source.charCodeAt(index);
                        if (!esutils.code.isHexDigit(ch)) {
                            break;
                        }
                        number += advance();
                    }

                    if (number.length <= 2) {
                        // only 0x
                        utility.throwError('unexpected token');
                    }

                    if (index < length) {
                        ch = source.charCodeAt(index);
                        if (esutils.code.isIdentifierStartES5(ch)) {
                            utility.throwError('unexpected token');
                        }
                    }
                    value = parseInt(number, 16);
                    return Token.NUMBER;
                }

                if (esutils.code.isOctalDigit(ch)) {
                    number += advance();
                    while (index < length) {
                        ch = source.charCodeAt(index);
                        if (!esutils.code.isOctalDigit(ch)) {
                            break;
                        }
                        number += advance();
                    }

                    if (index < length) {
                        ch = source.charCodeAt(index);
                        if (esutils.code.isIdentifierStartES5(ch) || esutils.code.isDecimalDigit(ch)) {
                            utility.throwError('unexpected token');
                        }
                    }
                    value = parseInt(number, 8);
                    return Token.NUMBER;
                }

                if (esutils.code.isDecimalDigit(ch)) {
                    utility.throwError('unexpected token');
                }
            }

            while (index < length) {
                ch = source.charCodeAt(index);
                if (!esutils.code.isDecimalDigit(ch)) {
                    break;
                }
                number += advance();
            }
        }

        if (ch === 0x2E  /* '.' */) {
            number += advance();
            while (index < length) {
                ch = source.charCodeAt(index);
                if (!esutils.code.isDecimalDigit(ch)) {
                    break;
                }
                number += advance();
            }
        }

        if (ch === 0x65  /* 'e' */ || ch === 0x45  /* 'E' */) {
            number += advance();

            ch = source.charCodeAt(index);
            if (ch === 0x2B  /* '+' */ || ch === 0x2D  /* '-' */) {
                number += advance();
            }

            ch = source.charCodeAt(index);
            if (esutils.code.isDecimalDigit(ch)) {
                number += advance();
                while (index < length) {
                    ch = source.charCodeAt(index);
                    if (!esutils.code.isDecimalDigit(ch)) {
                        break;
                    }
                    number += advance();
                }
            } else {
                utility.throwError('unexpected token');
            }
        }

        if (index < length) {
            ch = source.charCodeAt(index);
            if (esutils.code.isIdentifierStartES5(ch)) {
                utility.throwError('unexpected token');
            }
        }

        value = parseFloat(number);
        return Token.NUMBER;
    }


    function scanTypeName() {
        var ch, ch2;

        value = advance();
        while (index < length && isTypeName(source.charCodeAt(index))) {
            ch = source.charCodeAt(index);
            if (ch === 0x2E  /* '.' */) {
                if ((index + 1) >= length) {
                    return Token.ILLEGAL;
                }
                ch2 = source.charCodeAt(index + 1);
                if (ch2 === 0x3C  /* '<' */) {
                    break;
                }
            }
            value += advance();
        }
        return Token.NAME;
    }

    function next() {
        var ch;

        previous = index;

        while (index < length && esutils.code.isWhiteSpace(source.charCodeAt(index))) {
            advance();
        }
        if (index >= length) {
            token = Token.EOF;
            return token;
        }

        ch = source.charCodeAt(index);
        switch (ch) {
        case 0x27:  /* ''' */
        case 0x22:  /* '"' */
            token = scanString();
            return token;

        case 0x3A:  /* ':' */
            advance();
            token = Token.COLON;
            return token;

        case 0x2C:  /* ',' */
            advance();
            token = Token.COMMA;
            return token;

        case 0x28:  /* '(' */
            advance();
            token = Token.LPAREN;
            return token;

        case 0x29:  /* ')' */
            advance();
            token = Token.RPAREN;
            return token;

        case 0x5B:  /* '[' */
            advance();
            token = Token.LBRACK;
            return token;

        case 0x5D:  /* ']' */
            advance();
            token = Token.RBRACK;
            return token;

        case 0x7B:  /* '{' */
            advance();
            token = Token.LBRACE;
            return token;

        case 0x7D:  /* '}' */
            advance();
            token = Token.RBRACE;
            return token;

        case 0x2E:  /* '.' */
            if (index + 1 < length) {
                ch = source.charCodeAt(index + 1);
                if (ch === 0x3C  /* '<' */) {
                    advance();  // '.'
                    advance();  // '<'
                    token = Token.DOT_LT;
                    return token;
                }

                if (ch === 0x2E  /* '.' */ && index + 2 < length && source.charCodeAt(index + 2) === 0x2E  /* '.' */) {
                    advance();  // '.'
                    advance();  // '.'
                    advance();  // '.'
                    token = Token.REST;
                    return token;
                }

                if (esutils.code.isDecimalDigit(ch)) {
                    token = scanNumber();
                    return token;
                }
            }
            token = Token.ILLEGAL;
            return token;

        case 0x3C:  /* '<' */
            advance();
            token = Token.LT;
            return token;

        case 0x3E:  /* '>' */
            advance();
            token = Token.GT;
            return token;

        case 0x2A:  /* '*' */
            advance();
            token = Token.STAR;
            return token;

        case 0x7C:  /* '|' */
            advance();
            token = Token.PIPE;
            return token;

        case 0x3F:  /* '?' */
            advance();
            token = Token.QUESTION;
            return token;

        case 0x21:  /* '!' */
            advance();
            token = Token.BANG;
            return token;

        case 0x3D:  /* '=' */
            advance();
            token = Token.EQUAL;
            return token;

        case 0x2D: /* '-' */
            token = scanNumber();
            return token;

        default:
            if (esutils.code.isDecimalDigit(ch)) {
                token = scanNumber();
                return token;
            }

            // type string permits following case,
            //
            // namespace.module.MyClass
            //
            // this reduced 1 token TK_NAME
            utility.assert(isTypeName(ch));
            token = scanTypeName();
            return token;
        }
    }

    function consume(target, text) {
        utility.assert(token === target, text || 'consumed token not matched');
        next();
    }

    function expect(target, message) {
        if (token !== target) {
            utility.throwError(message || 'unexpected token');
        }
        next();
    }

    // UnionType := '(' TypeUnionList ')'
    //
    // TypeUnionList :=
    //     <<empty>>
    //   | NonemptyTypeUnionList
    //
    // NonemptyTypeUnionList :=
    //     TypeExpression
    //   | TypeExpression '|' NonemptyTypeUnionList
    function parseUnionType() {
        var elements, startIndex = index - 1;
        consume(Token.LPAREN, 'UnionType should start with (');
        elements = [];
        if (token !== Token.RPAREN) {
            while (true) {
                elements.push(parseTypeExpression());
                if (token === Token.RPAREN) {
                    break;
                }
                expect(Token.PIPE);
            }
        }
        consume(Token.RPAREN, 'UnionType should end with )');
        return maybeAddRange({
            type: Syntax.UnionType,
            elements: elements
        }, [startIndex, previous]);
    }

    // ArrayType := '[' ElementTypeList ']'
    //
    // ElementTypeList :=
    //     <<empty>>
    //  | TypeExpression
    //  | '...' TypeExpression
    //  | TypeExpression ',' ElementTypeList
    function parseArrayType() {
        var elements, startIndex = index - 1, restStartIndex;
        consume(Token.LBRACK, 'ArrayType should start with [');
        elements = [];
        while (token !== Token.RBRACK) {
            if (token === Token.REST) {
                restStartIndex = index - 3;
                consume(Token.REST);
                elements.push(maybeAddRange({
                    type: Syntax.RestType,
                    expression: parseTypeExpression()
                }, [restStartIndex, previous]));
                break;
            } else {
                elements.push(parseTypeExpression());
            }
            if (token !== Token.RBRACK) {
                expect(Token.COMMA);
            }
        }
        expect(Token.RBRACK);
        return maybeAddRange({
            type: Syntax.ArrayType,
            elements: elements
        }, [startIndex, previous]);
    }

    function parseFieldName() {
        var v = value;
        if (token === Token.NAME || token === Token.STRING) {
            next();
            return v;
        }

        if (token === Token.NUMBER) {
            consume(Token.NUMBER);
            return String(v);
        }

        utility.throwError('unexpected token');
    }

    // FieldType :=
    //     FieldName
    //   | FieldName ':' TypeExpression
    //
    // FieldName :=
    //     NameExpression
    //   | StringLiteral
    //   | NumberLiteral
    //   | ReservedIdentifier
    function parseFieldType() {
        var key, rangeStart = previous;

        key = parseFieldName();
        if (token === Token.COLON) {
            consume(Token.COLON);
            return maybeAddRange({
                type: Syntax.FieldType,
                key: key,
                value: parseTypeExpression()
            }, [rangeStart, previous]);
        }
        return maybeAddRange({
            type: Syntax.FieldType,
            key: key,
            value: null
        }, [rangeStart, previous]);
    }

    // RecordType := '{' FieldTypeList '}'
    //
    // FieldTypeList :=
    //     <<empty>>
    //   | FieldType
    //   | FieldType ',' FieldTypeList
    function parseRecordType() {
        var fields, rangeStart = index - 1, rangeEnd;

        consume(Token.LBRACE, 'RecordType should start with {');
        fields = [];
        if (token === Token.COMMA) {
            consume(Token.COMMA);
        } else {
            while (token !== Token.RBRACE) {
                fields.push(parseFieldType());
                if (token !== Token.RBRACE) {
                    expect(Token.COMMA);
                }
            }
        }
        rangeEnd = index;
        expect(Token.RBRACE);
        return maybeAddRange({
            type: Syntax.RecordType,
            fields: fields
        }, [rangeStart, rangeEnd]);
    }

    // NameExpression :=
    //    Identifier
    //  | TagIdentifier ':' Identifier
    //
    // Tag identifier is one of "module", "external" or "event"
    // Identifier is the same as Token.NAME, including any dots, something like
    // namespace.module.MyClass
    function parseNameExpression() {
        var name = value, rangeStart = index - name.length;
        expect(Token.NAME);

        if (token === Token.COLON && (
                name === 'module' ||
                name === 'external' ||
                name === 'event')) {
            consume(Token.COLON);
            name += ':' + value;
            expect(Token.NAME);
        }

        return maybeAddRange({
            type: Syntax.NameExpression,
            name: name
        }, [rangeStart, previous]);
    }

    // TypeExpressionList :=
    //     TopLevelTypeExpression
    //   | TopLevelTypeExpression ',' TypeExpressionList
    function parseTypeExpressionList() {
        var elements = [];

        elements.push(parseTop());
        while (token === Token.COMMA) {
            consume(Token.COMMA);
            elements.push(parseTop());
        }
        return elements;
    }

    // TypeName :=
    //     NameExpression
    //   | NameExpression TypeApplication
    //
    // TypeApplication :=
    //     '.<' TypeExpressionList '>'
    //   | '<' TypeExpressionList '>'   // this is extension of doctrine
    function parseTypeName() {
        var expr, applications, startIndex = index - value.length;

        expr = parseNameExpression();
        if (token === Token.DOT_LT || token === Token.LT) {
            next();
            applications = parseTypeExpressionList();
            expect(Token.GT);
            return maybeAddRange({
                type: Syntax.TypeApplication,
                expression: expr,
                applications: applications
            }, [startIndex, previous]);
        }
        return expr;
    }

    // ResultType :=
    //     <<empty>>
    //   | ':' void
    //   | ':' TypeExpression
    //
    // BNF is above
    // but, we remove <<empty>> pattern, so token is always TypeToken::COLON
    function parseResultType() {
        consume(Token.COLON, 'ResultType should start with :');
        if (token === Token.NAME && value === 'void') {
            consume(Token.NAME);
            return {
                type: Syntax.VoidLiteral
            };
        }
        return parseTypeExpression();
    }

    // ParametersType :=
    //     RestParameterType
    //   | NonRestParametersType
    //   | NonRestParametersType ',' RestParameterType
    //
    // RestParameterType :=
    //     '...'
    //     '...' Identifier
    //
    // NonRestParametersType :=
    //     ParameterType ',' NonRestParametersType
    //   | ParameterType
    //   | OptionalParametersType
    //
    // OptionalParametersType :=
    //     OptionalParameterType
    //   | OptionalParameterType, OptionalParametersType
    //
    // OptionalParameterType := ParameterType=
    //
    // ParameterType := TypeExpression | Identifier ':' TypeExpression
    //
    // Identifier is "new" or "this"
    function parseParametersType() {
        var params = [], optionalSequence = false, expr, rest = false, startIndex, restStartIndex = index - 3, nameStartIndex;

        while (token !== Token.RPAREN) {
            if (token === Token.REST) {
                // RestParameterType
                consume(Token.REST);
                rest = true;
            }

            startIndex = previous;

            expr = parseTypeExpression();
            if (expr.type === Syntax.NameExpression && token === Token.COLON) {
                nameStartIndex = previous - expr.name.length;
                // Identifier ':' TypeExpression
                consume(Token.COLON);
                expr = maybeAddRange({
                    type: Syntax.ParameterType,
                    name: expr.name,
                    expression: parseTypeExpression()
                }, [nameStartIndex, previous]);
            }
            if (token === Token.EQUAL) {
                consume(Token.EQUAL);
                expr = maybeAddRange({
                    type: Syntax.OptionalType,
                    expression: expr
                }, [startIndex, previous]);
                optionalSequence = true;
            } else {
                if (optionalSequence) {
                    utility.throwError('unexpected token');
                }
            }
            if (rest) {
                expr = maybeAddRange({
                    type: Syntax.RestType,
                    expression: expr
                }, [restStartIndex, previous]);
            }
            params.push(expr);
            if (token !== Token.RPAREN) {
                expect(Token.COMMA);
            }
        }
        return params;
    }

    // FunctionType := 'function' FunctionSignatureType
    //
    // FunctionSignatureType :=
    //   | TypeParameters '(' ')' ResultType
    //   | TypeParameters '(' ParametersType ')' ResultType
    //   | TypeParameters '(' 'this' ':' TypeName ')' ResultType
    //   | TypeParameters '(' 'this' ':' TypeName ',' ParametersType ')' ResultType
    function parseFunctionType() {
        var isNew, thisBinding, params, result, fnType, startIndex = index - value.length;
        utility.assert(token === Token.NAME && value === 'function', 'FunctionType should start with \'function\'');
        consume(Token.NAME);

        // Google Closure Compiler is not implementing TypeParameters.
        // So we do not. if we don't get '(', we see it as error.
        expect(Token.LPAREN);

        isNew = false;
        params = [];
        thisBinding = null;
        if (token !== Token.RPAREN) {
            // ParametersType or 'this'
            if (token === Token.NAME &&
                    (value === 'this' || value === 'new')) {
                // 'this' or 'new'
                // 'new' is Closure Compiler extension
                isNew = value === 'new';
                consume(Token.NAME);
                expect(Token.COLON);
                thisBinding = parseTypeName();
                if (token === Token.COMMA) {
                    consume(Token.COMMA);
                    params = parseParametersType();
                }
            } else {
                params = parseParametersType();
            }
        }

        expect(Token.RPAREN);

        result = null;
        if (token === Token.COLON) {
            result = parseResultType();
        }

        fnType = maybeAddRange({
            type: Syntax.FunctionType,
            params: params,
            result: result
        }, [startIndex, previous]);
        if (thisBinding) {
            // avoid adding null 'new' and 'this' properties
            fnType['this'] = thisBinding;
            if (isNew) {
                fnType['new'] = true;
            }
        }
        return fnType;
    }

    // BasicTypeExpression :=
    //     '*'
    //   | 'null'
    //   | 'undefined'
    //   | TypeName
    //   | FunctionType
    //   | UnionType
    //   | RecordType
    //   | ArrayType
    function parseBasicTypeExpression() {
        var context, startIndex;
        switch (token) {
        case Token.STAR:
            consume(Token.STAR);
            return maybeAddRange({
                type: Syntax.AllLiteral
            }, [previous - 1, previous]);

        case Token.LPAREN:
            return parseUnionType();

        case Token.LBRACK:
            return parseArrayType();

        case Token.LBRACE:
            return parseRecordType();

        case Token.NAME:
            startIndex = index - value.length;

            if (value === 'null') {
                consume(Token.NAME);
                return maybeAddRange({
                    type: Syntax.NullLiteral
                }, [startIndex, previous]);
            }

            if (value === 'undefined') {
                consume(Token.NAME);
                return maybeAddRange({
                    type: Syntax.UndefinedLiteral
                }, [startIndex, previous]);
            }

            if (value === 'true' || value === 'false') {
                consume(Token.NAME);
                return maybeAddRange({
                    type: Syntax.BooleanLiteralType,
                    value: value === 'true'
                }, [startIndex, previous]);
            }

            context = Context.save();
            if (value === 'function') {
                try {
                    return parseFunctionType();
                } catch (e) {
                    context.restore();
                }
            }

            return parseTypeName();

        case Token.STRING:
            next();
            return maybeAddRange({
                type: Syntax.StringLiteralType,
                value: value
            }, [previous - value.length - 2, previous]);

        case Token.NUMBER:
            next();
            return maybeAddRange({
                type: Syntax.NumericLiteralType,
                value: value
            }, [previous - String(value).length, previous]);

        default:
            utility.throwError('unexpected token');
        }
    }

    // TypeExpression :=
    //     BasicTypeExpression
    //   | '?' BasicTypeExpression
    //   | '!' BasicTypeExpression
    //   | BasicTypeExpression '?'
    //   | BasicTypeExpression '!'
    //   | '?'
    //   | BasicTypeExpression '[]'
    function parseTypeExpression() {
        var expr, rangeStart;

        if (token === Token.QUESTION) {
            rangeStart = index - 1;
            consume(Token.QUESTION);
            if (token === Token.COMMA || token === Token.EQUAL || token === Token.RBRACE ||
                    token === Token.RPAREN || token === Token.PIPE || token === Token.EOF ||
                    token === Token.RBRACK || token === Token.GT) {
                return maybeAddRange({
                    type: Syntax.NullableLiteral
                }, [rangeStart, previous]);
            }
            return maybeAddRange({
                type: Syntax.NullableType,
                expression: parseBasicTypeExpression(),
                prefix: true
            }, [rangeStart, previous]);
        } else if (token === Token.BANG) {
            rangeStart = index - 1;
            consume(Token.BANG);
            return maybeAddRange({
                type: Syntax.NonNullableType,
                expression: parseBasicTypeExpression(),
                prefix: true
            }, [rangeStart, previous]);
        } else {
            rangeStart = previous;
        }

        expr = parseBasicTypeExpression();
        if (token === Token.BANG) {
            consume(Token.BANG);
            return maybeAddRange({
                type: Syntax.NonNullableType,
                expression: expr,
                prefix: false
            }, [rangeStart, previous]);
        }

        if (token === Token.QUESTION) {
            consume(Token.QUESTION);
            return maybeAddRange({
                type: Syntax.NullableType,
                expression: expr,
                prefix: false
            }, [rangeStart, previous]);
        }

        if (token === Token.LBRACK) {
            consume(Token.LBRACK);
            expect(Token.RBRACK, 'expected an array-style type declaration (' + value + '[])');
            return maybeAddRange({
                type: Syntax.TypeApplication,
                expression: maybeAddRange({
                    type: Syntax.NameExpression,
                    name: 'Array'
                }, [rangeStart, previous]),
                applications: [expr]
            }, [rangeStart, previous]);
        }

        return expr;
    }

    // TopLevelTypeExpression :=
    //      TypeExpression
    //    | TypeUnionList
    //
    // This rule is Google Closure Compiler extension, not ES4
    // like,
    //   { number | string }
    // If strict to ES4, we should write it as
    //   { (number|string) }
    function parseTop() {
        var expr, elements;

        expr = parseTypeExpression();
        if (token !== Token.PIPE) {
            return expr;
        }

        elements = [expr];
        consume(Token.PIPE);
        while (true) {
            elements.push(parseTypeExpression());
            if (token !== Token.PIPE) {
                break;
            }
            consume(Token.PIPE);
        }

        return maybeAddRange({
            type: Syntax.UnionType,
            elements: elements
        }, [0, index]);
    }

    function parseTopParamType() {
        var expr;

        if (token === Token.REST) {
            consume(Token.REST);
            return maybeAddRange({
                type: Syntax.RestType,
                expression: parseTop()
            }, [0, index]);
        }

        expr = parseTop();
        if (token === Token.EQUAL) {
            consume(Token.EQUAL);
            return maybeAddRange({
                type: Syntax.OptionalType,
                expression: expr
            }, [0, index]);
        }

        return expr;
    }

    function parseType(src, opt) {
        var expr;

        source = src;
        length = source.length;
        index = 0;
        previous = 0;
        addRange = opt && opt.range;
        rangeOffset = opt && opt.startIndex || 0;

        next();
        expr = parseTop();

        if (opt && opt.midstream) {
            return {
                expression: expr,
                index: previous
            };
        }

        if (token !== Token.EOF) {
            utility.throwError('not reach to EOF');
        }

        return expr;
    }

    function parseParamType(src, opt) {
        var expr;

        source = src;
        length = source.length;
        index = 0;
        previous = 0;
        addRange = opt && opt.range;
        rangeOffset = opt && opt.startIndex || 0;

        next();
        expr = parseTopParamType();

        if (opt && opt.midstream) {
            return {
                expression: expr,
                index: previous
            };
        }

        if (token !== Token.EOF) {
            utility.throwError('not reach to EOF');
        }

        return expr;
    }

    function stringifyImpl(node, compact, topLevel) {
        var result, i, iz;

        switch (node.type) {
        case Syntax.NullableLiteral:
            result = '?';
            break;

        case Syntax.AllLiteral:
            result = '*';
            break;

        case Syntax.NullLiteral:
            result = 'null';
            break;

        case Syntax.UndefinedLiteral:
            result = 'undefined';
            break;

        case Syntax.VoidLiteral:
            result = 'void';
            break;

        case Syntax.UnionType:
            if (!topLevel) {
                result = '(';
            } else {
                result = '';
            }

            for (i = 0, iz = node.elements.length; i < iz; ++i) {
                result += stringifyImpl(node.elements[i], compact);
                if ((i + 1) !== iz) {
                    result += compact ? '|' : ' | ';
                }
            }

            if (!topLevel) {
                result += ')';
            }
            break;

        case Syntax.ArrayType:
            result = '[';
            for (i = 0, iz = node.elements.length; i < iz; ++i) {
                result += stringifyImpl(node.elements[i], compact);
                if ((i + 1) !== iz) {
                    result += compact ? ',' : ', ';
                }
            }
            result += ']';
            break;

        case Syntax.RecordType:
            result = '{';
            for (i = 0, iz = node.fields.length; i < iz; ++i) {
                result += stringifyImpl(node.fields[i], compact);
                if ((i + 1) !== iz) {
                    result += compact ? ',' : ', ';
                }
            }
            result += '}';
            break;

        case Syntax.FieldType:
            if (node.value) {
                result = node.key + (compact ? ':' : ': ') + stringifyImpl(node.value, compact);
            } else {
                result = node.key;
            }
            break;

        case Syntax.FunctionType:
            result = compact ? 'function(' : 'function (';

            if (node['this']) {
                if (node['new']) {
                    result += (compact ? 'new:' : 'new: ');
                } else {
                    result += (compact ? 'this:' : 'this: ');
                }

                result += stringifyImpl(node['this'], compact);

                if (node.params.length !== 0) {
                    result += compact ? ',' : ', ';
                }
            }

            for (i = 0, iz = node.params.length; i < iz; ++i) {
                result += stringifyImpl(node.params[i], compact);
                if ((i + 1) !== iz) {
                    result += compact ? ',' : ', ';
                }
            }

            result += ')';

            if (node.result) {
                result += (compact ? ':' : ': ') + stringifyImpl(node.result, compact);
            }
            break;

        case Syntax.ParameterType:
            result = node.name + (compact ? ':' : ': ') + stringifyImpl(node.expression, compact);
            break;

        case Syntax.RestType:
            result = '...';
            if (node.expression) {
                result += stringifyImpl(node.expression, compact);
            }
            break;

        case Syntax.NonNullableType:
            if (node.prefix) {
                result = '!' + stringifyImpl(node.expression, compact);
            } else {
                result = stringifyImpl(node.expression, compact) + '!';
            }
            break;

        case Syntax.OptionalType:
            result = stringifyImpl(node.expression, compact) + '=';
            break;

        case Syntax.NullableType:
            if (node.prefix) {
                result = '?' + stringifyImpl(node.expression, compact);
            } else {
                result = stringifyImpl(node.expression, compact) + '?';
            }
            break;

        case Syntax.NameExpression:
            result = node.name;
            break;

        case Syntax.TypeApplication:
            result = stringifyImpl(node.expression, compact) + '.<';
            for (i = 0, iz = node.applications.length; i < iz; ++i) {
                result += stringifyImpl(node.applications[i], compact);
                if ((i + 1) !== iz) {
                    result += compact ? ',' : ', ';
                }
            }
            result += '>';
            break;

        case Syntax.StringLiteralType:
            result = '"' + node.value + '"';
            break;

        case Syntax.NumericLiteralType:
            result = String(node.value);
            break;

        case Syntax.BooleanLiteralType:
            result = String(node.value);
            break;

        default:
            utility.throwError('Unknown type ' + node.type);
        }

        return result;
    }

    function stringify(node, options) {
        if (options == null) {
            options = {};
        }
        return stringifyImpl(node, options.compact, options.topLevel);
    }

    exports.parseType = parseType;
    exports.parseParamType = parseParamType;
    exports.stringify = stringify;
    exports.Syntax = Syntax;
}());
/* vim: set sw=4 ts=4 et tw=80 : */
