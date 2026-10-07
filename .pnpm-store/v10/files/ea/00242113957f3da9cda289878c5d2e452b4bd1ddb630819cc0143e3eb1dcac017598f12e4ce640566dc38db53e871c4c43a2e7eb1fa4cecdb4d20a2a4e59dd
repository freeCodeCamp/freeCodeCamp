var OffsetToLocation = require('../common/OffsetToLocation');
var SyntaxError = require('../common/SyntaxError');
var TokenStream = require('../common/TokenStream');
var List = require('../common/List');
var tokenize = require('../tokenizer');
var constants = require('../tokenizer/const');
var { findWhiteSpaceStart, cmpStr } = require('../tokenizer/utils');
var sequence = require('./sequence');
var noop = function() {};

var TYPE = constants.TYPE;
var NAME = constants.NAME;
var WHITESPACE = TYPE.WhiteSpace;
var COMMENT = TYPE.Comment;
var IDENT = TYPE.Ident;
var FUNCTION = TYPE.Function;
var URL = TYPE.Url;
var HASH = TYPE.Hash;
var PERCENTAGE = TYPE.Percentage;
var NUMBER = TYPE.Number;
var NUMBERSIGN = 0x0023; // U+0023 NUMBER SIGN (#)
var NULL = 0;

function createParseContext(name) {
    return function() {
        return this[name]();
    };
}

function processConfig(config) {
    var parserConfig = {
        context: {},
        scope: {},
        atrule: {},
        pseudo: {}
    };

    if (config.parseContext) {
        for (var name in config.parseContext) {
            switch (typeof config.parseContext[name]) {
                case 'function':
                    parserConfig.context[name] = config.parseContext[name];
                    break;

                case 'string':
                    parserConfig.context[name] = createParseContext(config.parseContext[name]);
                    break;
            }
        }
    }

    if (config.scope) {
        for (var name in config.scope) {
            parserConfig.scope[name] = config.scope[name];
        }
    }

    if (config.atrule) {
        for (var name in config.atrule) {
            var atrule = config.atrule[name];

            if (atrule.parse) {
                parserConfig.atrule[name] = atrule.parse;
            }
        }
    }

    if (config.pseudo) {
        for (var name in config.pseudo) {
            var pseudo = config.pseudo[name];

            if (pseudo.parse) {
                parserConfig.pseudo[name] = pseudo.parse;
            }
        }
    }

    if (config.node) {
        for (var name in config.node) {
            parserConfig[name] = config.node[name].parse;
        }
    }

    return parserConfig;
}

module.exports = function createParser(config) {
    var parser = {
        scanner: new TokenStream(),
        locationMap: new OffsetToLocation(),

        filename: '<unknown>',
        needPositions: false,
        onParseError: noop,
        onParseErrorThrow: false,
        parseAtrulePrelude: true,
        parseRulePrelude: true,
        parseValue: true,
        parseCustomProperty: false,

        readSequence: sequence,

        createList: function() {
            return new List();
        },
        createSingleNodeList: function(node) {
            return new List().appendData(node);
        },
        getFirstListNode: function(list) {
            return list && list.first();
        },
        getLastListNode: function(list) {
            return list.last();
        },

        parseWithFallback: function(consumer, fallback) {
            var startToken = this.scanner.tokenIndex;

            try {
                return consumer.call(this);
            } catch (e) {
                if (this.onParseErrorThrow) {
                    throw e;
                }

                var fallbackNode = fallback.call(this, startToken);

                this.onParseErrorThrow = true;
                this.onParseError(e, fallbackNode);
                this.onParseErrorThrow = false;

                return fallbackNode;
            }
        },

        lookupNonWSType: function(offset) {
            do {
                var type = this.scanner.lookupType(offset++);
                if (type !== WHITESPACE) {
                    return type;
                }
            } while (type !== NULL);

            return NULL;
        },

        eat: function(tokenType) {
            if (this.scanner.tokenType !== tokenType) {
                var offset = this.scanner.tokenStart;
                var message = NAME[tokenType] + ' is expected';

                // tweak message and offset
                switch (tokenType) {
                    case IDENT:
                        // when identifier is expected but there is a function or url
                        if (this.scanner.tokenType === FUNCTION || this.scanner.tokenType === URL) {
                            offset = this.scanner.tokenEnd - 1;
                            message = 'Identifier is expected but function found';
                        } else {
                            message = 'Identifier is expected';
                        }
                        break;

                    case HASH:
                        if (this.scanner.isDelim(NUMBERSIGN)) {
                            this.scanner.next();
                            offset++;
                            message = 'Name is expected';
                        }
                        break;

                    case PERCENTAGE:
                        if (this.scanner.tokenType === NUMBER) {
                            offset = this.scanner.tokenEnd;
                            message = 'Percent sign is expected';
                        }
                        break;

                    default:
                        // when test type is part of another token show error for current position + 1
                        // e.g. eat(HYPHENMINUS) will fail on "-foo", but pointing on "-" is odd
                        if (this.scanner.source.charCodeAt(this.scanner.tokenStart) === tokenType) {
                            offset = offset + 1;
                        }
                }

                this.error(message, offset);
            }

            this.scanner.next();
        },

        consume: function(tokenType) {
            var value = this.scanner.getTokenValue();

            this.eat(tokenType);

            return value;
        },
        consumeFunctionName: function() {
            var name = this.scanner.source.substring(this.scanner.tokenStart, this.scanner.tokenEnd - 1);

            this.eat(FUNCTION);

            return name;
        },

        getLocation: function(start, end) {
            if (this.needPositions) {
                return this.locationMap.getLocationRange(
                    start,
                    end,
                    this.filename
                );
            }

            return null;
        },
        getLocationFromList: function(list) {
            if (this.needPositions) {
                var head = this.getFirstListNode(list);
                var tail = this.getLastListNode(list);
                return this.locationMap.getLocationRange(
                    head !== null ? head.loc.start.offset - this.locationMap.startOffset : this.scanner.tokenStart,
                    tail !== null ? tail.loc.end.offset - this.locationMap.startOffset : this.scanner.tokenStart,
                    this.filename
                );
            }

            return null;
        },

        error: function(message, offset) {
            var location = typeof offset !== 'undefined' && offset < this.scanner.source.length
                ? this.locationMap.getLocation(offset)
                : this.scanner.eof
                    ? this.locationMap.getLocation(findWhiteSpaceStart(this.scanner.source, this.scanner.source.length - 1))
                    : this.locationMap.getLocation(this.scanner.tokenStart);

            throw new SyntaxError(
                message || 'Unexpected input',
                this.scanner.source,
                location.offset,
                location.line,
                location.column
            );
        }
    };

    config = processConfig(config || {});
    for (var key in config) {
        parser[key] = config[key];
    }

    return function(source, options) {
        options = options || {};

        var context = options.context || 'default';
        var onComment = options.onComment;
        var ast;

        tokenize(source, parser.scanner);
        parser.locationMap.setSource(
            source,
            options.offset,
            options.line,
            options.column
        );

        parser.filename = options.filename || '<unknown>';
        parser.needPositions = Boolean(options.positions);
        parser.onParseError = typeof options.onParseError === 'function' ? options.onParseError : noop;
        parser.onParseErrorThrow = false;
        parser.parseAtrulePrelude = 'parseAtrulePrelude' in options ? Boolean(options.parseAtrulePrelude) : true;
        parser.parseRulePrelude = 'parseRulePrelude' in options ? Boolean(options.parseRulePrelude) : true;
        parser.parseValue = 'parseValue' in options ? Boolean(options.parseValue) : true;
        parser.parseCustomProperty = 'parseCustomProperty' in options ? Boolean(options.parseCustomProperty) : false;

        if (!parser.context.hasOwnProperty(context)) {
            throw new Error('Unknown context `' + context + '`');
        }

        if (typeof onComment === 'function') {
            parser.scanner.forEachToken((type, start, end) => {
                if (type === COMMENT) {
                    const loc = parser.getLocation(start, end);
                    const value = cmpStr(source, end - 2, end, '*/')
                        ? source.slice(start + 2, end - 2)
                        : source.slice(start + 2, end);

                    onComment(value, loc);
                }
            });
        }

        ast = parser.context[context].call(parser, options);

        if (!parser.scanner.eof) {
            parser.error();
        }

        return ast;
    };
};
