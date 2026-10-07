import { List } from '../utils/List.js';
import { SyntaxError } from './SyntaxError.js';
import {
    tokenize,
    OffsetToLocation,
    TokenStream,
    tokenNames,

    consumeNumber,
    findWhiteSpaceStart,
    cmpChar,
    cmpStr,

    WhiteSpace,
    Comment,
    Ident,
    Function as FunctionToken,
    Url,
    Hash,
    Percentage,
    Number as NumberToken
} from '../tokenizer/index.js';
import { readSequence } from './sequence.js';

const NOOP = () => {};
const EXCLAMATIONMARK = 0x0021;  // U+0021 EXCLAMATION MARK (!)
const NUMBERSIGN = 0x0023;       // U+0023 NUMBER SIGN (#)
const SEMICOLON = 0x003B;        // U+003B SEMICOLON (;)
const LEFTCURLYBRACKET = 0x007B; // U+007B LEFT CURLY BRACKET ({)
const NULL = 0;

const arrayMethods = {
    createList() {
        return [];
    },
    createSingleNodeList(node) {
        return [node];
    },
    getFirstListNode(list) {
        return list && list[0] || null;
    },
    getLastListNode(list) {
        return list && list.length > 0 ? list[list.length - 1] : null;
    }
};

const listMethods = {
    createList() {
        return new List();
    },
    createSingleNodeList(node) {
        return new List().appendData(node);
    },
    getFirstListNode(list) {
        return list && list.first;
    },
    getLastListNode(list) {
        return list && list.last;
    }
};

function createParseContext(name) {
    return function() {
        return this[name]();
    };
}

function fetchParseValues(dict) {
    const result = Object.create(null);

    for (const name of Object.keys(dict)) {
        const item = dict[name];
        const fn = item.parse || item;

        if (fn) {
            result[name] = fn;
        }
    }

    return result;
}

function processConfig(config) {
    const parseConfig = {
        context: Object.create(null),
        features: Object.assign(Object.create(null), config.features),
        scope: Object.assign(Object.create(null), config.scope),
        atrule: fetchParseValues(config.atrule),
        pseudo: fetchParseValues(config.pseudo),
        node: fetchParseValues(config.node)
    };

    for (const [name, context] of Object.entries(config.parseContext)) {
        switch (typeof context) {
            case 'function':
                parseConfig.context[name] = context;
                break;

            case 'string':
                parseConfig.context[name] = createParseContext(context);
                break;
        }
    }

    return {
        config: parseConfig,
        ...parseConfig,
        ...parseConfig.node
    };
}

export function createParser(config) {
    let source = '';
    let filename = '<unknown>';
    let needPositions = false;
    let onParseError = NOOP;
    let onParseErrorThrow = false;

    const locationMap = new OffsetToLocation();
    const parser = Object.assign(new TokenStream(), processConfig(config || {}), {
        parseAtrulePrelude: true,
        parseRulePrelude: true,
        parseValue: true,
        parseCustomProperty: false,

        readSequence,

        consumeUntilBalanceEnd: () => 0,
        consumeUntilLeftCurlyBracket(code) {
            return code === LEFTCURLYBRACKET ? 1 : 0;
        },
        consumeUntilLeftCurlyBracketOrSemicolon(code) {
            return code === LEFTCURLYBRACKET || code === SEMICOLON ? 1 : 0;
        },
        consumeUntilExclamationMarkOrSemicolon(code) {
            return code === EXCLAMATIONMARK || code === SEMICOLON ? 1 : 0;
        },
        consumeUntilSemicolonIncluded(code) {
            return code === SEMICOLON ? 2 : 0;
        },

        createList: NOOP,
        createSingleNodeList: NOOP,
        getFirstListNode: NOOP,
        getLastListNode: NOOP,

        parseWithFallback(consumer, fallback) {
            const startIndex = this.tokenIndex;

            try {
                return consumer.call(this);
            } catch (e) {
                if (onParseErrorThrow) {
                    throw e;
                }

                this.skip(startIndex - this.tokenIndex);
                const fallbackNode = fallback.call(this);

                onParseErrorThrow = true;
                onParseError(e, fallbackNode);
                onParseErrorThrow = false;

                return fallbackNode;
            }
        },

        lookupNonWSType(offset) {
            let type;

            do {
                type = this.lookupType(offset++);
                if (type !== WhiteSpace && type !== Comment) {
                    return type;
                }
            } while (type !== NULL);

            return NULL;
        },

        charCodeAt(offset) {
            return offset >= 0 && offset < source.length ? source.charCodeAt(offset) : 0;
        },
        substring(offsetStart, offsetEnd) {
            return source.substring(offsetStart, offsetEnd);
        },
        substrToCursor(start) {
            return this.source.substring(start, this.tokenStart);
        },

        cmpChar(offset, charCode) {
            return cmpChar(source, offset, charCode);
        },
        cmpStr(offsetStart, offsetEnd, str) {
            return cmpStr(source, offsetStart, offsetEnd, str);
        },

        consume(tokenType) {
            const start = this.tokenStart;

            this.eat(tokenType);

            return this.substrToCursor(start);
        },
        consumeFunctionName() {
            const name = source.substring(this.tokenStart, this.tokenEnd - 1);

            this.eat(FunctionToken);

            return name;
        },
        consumeNumber(type) {
            const number = source.substring(this.tokenStart, consumeNumber(source, this.tokenStart));

            this.eat(type);

            return number;
        },

        eat(tokenType) {
            if (this.tokenType !== tokenType) {
                const tokenName = tokenNames[tokenType].slice(0, -6).replace(/-/g, ' ').replace(/^./, m => m.toUpperCase());
                let message = `${/[[\](){}]/.test(tokenName) ? `"${tokenName}"` : tokenName} is expected`;
                let offset = this.tokenStart;

                // tweak message and offset
                switch (tokenType) {
                    case Ident:
                        // when identifier is expected but there is a function or url
                        if (this.tokenType === FunctionToken || this.tokenType === Url) {
                            offset = this.tokenEnd - 1;
                            message = 'Identifier is expected but function found';
                        } else {
                            message = 'Identifier is expected';
                        }
                        break;

                    case Hash:
                        if (this.isDelim(NUMBERSIGN)) {
                            this.next();
                            offset++;
                            message = 'Name is expected';
                        }
                        break;

                    case Percentage:
                        if (this.tokenType === NumberToken) {
                            offset = this.tokenEnd;
                            message = 'Percent sign is expected';
                        }
                        break;
                }

                this.error(message, offset);
            }

            this.next();
        },
        eatIdent(name) {
            if (this.tokenType !== Ident || this.lookupValue(0, name) === false) {
                this.error(`Identifier "${name}" is expected`);
            }

            this.next();
        },
        eatDelim(code) {
            if (!this.isDelim(code)) {
                this.error(`Delim "${String.fromCharCode(code)}" is expected`);
            }

            this.next();
        },

        getLocation(start, end) {
            if (needPositions) {
                return locationMap.getLocationRange(
                    start,
                    end,
                    filename
                );
            }

            return null;
        },
        getLocationFromList(list) {
            if (needPositions) {
                const head = this.getFirstListNode(list);
                const tail = this.getLastListNode(list);
                return locationMap.getLocationRange(
                    head !== null ? head.loc.start.offset - locationMap.startOffset : this.tokenStart,
                    tail !== null ? tail.loc.end.offset - locationMap.startOffset : this.tokenStart,
                    filename
                );
            }

            return null;
        },

        error(message, offset) {
            const location = typeof offset !== 'undefined' && offset < source.length
                ? locationMap.getLocation(offset)
                : this.eof
                    ? locationMap.getLocation(findWhiteSpaceStart(source, source.length - 1))
                    : locationMap.getLocation(this.tokenStart);

            throw new SyntaxError(
                message || 'Unexpected input',
                source,
                location.offset,
                location.line,
                location.column,
                locationMap.startLine,
                locationMap.startColumn
            );
        }
    });
    const createTokenIterateAPI = () => ({
        filename,
        source,
        tokenCount: parser.tokenCount,

        getTokenType: (index) =>
            parser.getTokenType(index),
        getTokenTypeName: (index) =>
            tokenNames[parser.getTokenType(index)],
        getTokenStart: (index) =>
            parser.getTokenStart(index),
        getTokenEnd: (index) =>
            parser.getTokenEnd(index),
        getTokenValue: (index) =>
            parser.source.substring(parser.getTokenStart(index), parser.getTokenEnd(index)),

        substring: (start, end) =>
            parser.source.substring(start, end),

        balance: parser.balance.subarray(0, parser.tokenCount + 1),
        isBlockOpenerTokenType: parser.isBlockOpenerTokenType,
        isBlockCloserTokenType: parser.isBlockCloserTokenType,
        getBlockTokenPairIndex: (index) =>
            parser.getBlockTokenPairIndex(index),

        getLocation: (offset) =>
            locationMap.getLocation(offset, filename),
        getRangeLocation: (start, end) =>
            locationMap.getLocationRange(start, end, filename)
    });

    const parse = function(source_, options) {
        source = source_;
        options = options || {};

        parser.setSource(source, tokenize);
        locationMap.setSource(
            source,
            options.offset,
            options.line,
            options.column
        );

        filename = options.filename || '<unknown>';
        needPositions = Boolean(options.positions);
        onParseError = typeof options.onParseError === 'function' ? options.onParseError : NOOP;
        onParseErrorThrow = false;

        parser.parseAtrulePrelude = 'parseAtrulePrelude' in options ? Boolean(options.parseAtrulePrelude) : true;
        parser.parseRulePrelude = 'parseRulePrelude' in options ? Boolean(options.parseRulePrelude) : true;
        parser.parseValue = 'parseValue' in options ? Boolean(options.parseValue) : true;
        parser.parseCustomProperty = 'parseCustomProperty' in options ? Boolean(options.parseCustomProperty) : false;

        const { context = 'default', list = true, onComment, onToken } = options;

        if (context in parser.context === false) {
            throw new Error('Unknown context `' + context + '`');
        }

        Object.assign(parser, list ? listMethods : arrayMethods);

        if (Array.isArray(onToken)) {
            parser.forEachToken((type, start, end) => {
                onToken.push({ type, start, end });
            });
        } else if (typeof onToken === 'function') {
            parser.forEachToken(onToken.bind(createTokenIterateAPI()));
        }

        if (typeof onComment === 'function') {
            parser.forEachToken((type, start, end) => {
                if (type === Comment) {
                    const loc = parser.getLocation(start, end);
                    const value = cmpStr(source, end - 2, end, '*/')
                        ? source.slice(start + 2, end - 2)
                        : source.slice(start + 2, end);

                    onComment(value, loc);
                }
            });
        }

        const ast = parser.context[context].call(parser, options);

        if (!parser.eof) {
            parser.error();
        }

        return ast;
    };

    return Object.assign(parse, {
        SyntaxError,
        config: parser.config
    });
};
