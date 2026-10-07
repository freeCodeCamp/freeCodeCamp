"use strict";

/* eslint-disable no-param-reassign*/
const TokenTranslator = require("./token-translator");
const { normalizeOptions } = require("./options");

const STATE = Symbol("espree's internal state");
const ESPRIMA_FINISH_NODE = Symbol("espree's esprimaFinishNode");


/**
 * Converts an Acorn comment to a Esprima comment.
 * @param {boolean} block True if it's a block comment, false if not.
 * @param {string} text The text of the comment.
 * @param {int} start The index at which the comment starts.
 * @param {int} end The index at which the comment ends.
 * @param {Location} startLoc The location at which the comment starts.
 * @param {Location} endLoc The location at which the comment ends.
 * @returns {Object} The comment object.
 * @private
 */
function convertAcornCommentToEsprimaComment(block, text, start, end, startLoc, endLoc) {
    const comment = {
        type: block ? "Block" : "Line",
        value: text
    };

    if (typeof start === "number") {
        comment.start = start;
        comment.end = end;
        comment.range = [start, end];
    }

    if (typeof startLoc === "object") {
        comment.loc = {
            start: startLoc,
            end: endLoc
        };
    }

    return comment;
}

module.exports = () => Parser => {
    const tokTypes = Object.assign({}, Parser.acorn.tokTypes);

    if (Parser.acornJsx) {
        Object.assign(tokTypes, Parser.acornJsx.tokTypes);
    }

    return class Espree extends Parser {
        constructor(opts, code) {
            if (typeof opts !== "object" || opts === null) {
                opts = {};
            }
            if (typeof code !== "string" && !(code instanceof String)) {
                code = String(code);
            }

            const options = normalizeOptions(opts);
            const ecmaFeatures = options.ecmaFeatures || {};
            const tokenTranslator =
                options.tokens === true
                    ? new TokenTranslator(tokTypes, code)
                    : null;

            // Initialize acorn parser.
            super({

                // TODO: use {...options} when spread is supported(Node.js >= 8.3.0).
                ecmaVersion: options.ecmaVersion,
                sourceType: options.sourceType,
                ranges: options.ranges,
                locations: options.locations,

                // Truthy value is true for backward compatibility.
                allowReturnOutsideFunction: Boolean(ecmaFeatures.globalReturn),

                // Collect tokens
                onToken: token => {
                    if (tokenTranslator) {

                        // Use `tokens`, `ecmaVersion`, and `jsxAttrValueToken` in the state.
                        tokenTranslator.onToken(token, this[STATE]);
                    }
                    if (token.type !== tokTypes.eof) {
                        this[STATE].lastToken = token;
                    }
                },

                // Collect comments
                onComment: (block, text, start, end, startLoc, endLoc) => {
                    if (this[STATE].comments) {
                        const comment = convertAcornCommentToEsprimaComment(block, text, start, end, startLoc, endLoc);

                        this[STATE].comments.push(comment);
                    }
                }
            }, code);

            // Initialize internal state.
            this[STATE] = {
                tokens: tokenTranslator ? [] : null,
                comments: options.comment === true ? [] : null,
                impliedStrict: ecmaFeatures.impliedStrict === true && this.options.ecmaVersion >= 5,
                ecmaVersion: this.options.ecmaVersion,
                jsxAttrValueToken: false,
                lastToken: null
            };
        }

        tokenize() {
            do {
                this.next();
            } while (this.type !== tokTypes.eof);

            // Consume the final eof token
            this.next();

            const extra = this[STATE];
            const tokens = extra.tokens;

            if (extra.comments) {
                tokens.comments = extra.comments;
            }

            return tokens;
        }

        finishNode(...args) {
            const result = super.finishNode(...args);

            return this[ESPRIMA_FINISH_NODE](result);
        }

        finishNodeAt(...args) {
            const result = super.finishNodeAt(...args);

            return this[ESPRIMA_FINISH_NODE](result);
        }

        parse() {
            const extra = this[STATE];
            const program = super.parse();

            program.sourceType = this.options.sourceType;

            if (extra.comments) {
                program.comments = extra.comments;
            }
            if (extra.tokens) {
                program.tokens = extra.tokens;
            }

            /*
             * Adjust opening and closing position of program to match Esprima.
             * Acorn always starts programs at range 0 whereas Esprima starts at the
             * first AST node's start (the only real difference is when there's leading
             * whitespace or leading comments). Acorn also counts trailing whitespace
             * as part of the program whereas Esprima only counts up to the last token.
             */
            if (program.range) {
                program.range[0] = program.body.length ? program.body[0].range[0] : program.range[0];
                program.range[1] = extra.lastToken ? extra.lastToken.range[1] : program.range[1];
            }
            if (program.loc) {
                program.loc.start = program.body.length ? program.body[0].loc.start : program.loc.start;
                program.loc.end = extra.lastToken ? extra.lastToken.loc.end : program.loc.end;
            }

            return program;
        }

        parseTopLevel(node) {
            if (this[STATE].impliedStrict) {
                this.strict = true;
            }
            return super.parseTopLevel(node);
        }

        /**
         * Overwrites the default raise method to throw Esprima-style errors.
         * @param {int} pos The position of the error.
         * @param {string} message The error message.
         * @throws {SyntaxError} A syntax error.
         * @returns {void}
         */
        raise(pos, message) {
            const loc = Parser.acorn.getLineInfo(this.input, pos);
            const err = new SyntaxError(message);

            err.index = pos;
            err.lineNumber = loc.line;
            err.column = loc.column + 1; // acorn uses 0-based columns
            throw err;
        }

        /**
         * Overwrites the default raise method to throw Esprima-style errors.
         * @param {int} pos The position of the error.
         * @param {string} message The error message.
         * @throws {SyntaxError} A syntax error.
         * @returns {void}
         */
        raiseRecoverable(pos, message) {
            this.raise(pos, message);
        }

        /**
         * Overwrites the default unexpected method to throw Esprima-style errors.
         * @param {int} pos The position of the error.
         * @throws {SyntaxError} A syntax error.
         * @returns {void}
         */
        unexpected(pos) {
            let message = "Unexpected token";

            if (pos !== null && pos !== void 0) {
                this.pos = pos;

                if (this.options.locations) {
                    while (this.pos < this.lineStart) {
                        this.lineStart = this.input.lastIndexOf("\n", this.lineStart - 2) + 1;
                        --this.curLine;
                    }
                }

                this.nextToken();
            }

            if (this.end > this.start) {
                message += ` ${this.input.slice(this.start, this.end)}`;
            }

            this.raise(this.start, message);
        }

        /*
        * Esprima-FB represents JSX strings as tokens called "JSXText", but Acorn-JSX
        * uses regular tt.string without any distinction between this and regular JS
        * strings. As such, we intercept an attempt to read a JSX string and set a flag
        * on extra so that when tokens are converted, the next token will be switched
        * to JSXText via onToken.
        */
        jsx_readString(quote) { // eslint-disable-line camelcase
            const result = super.jsx_readString(quote);

            if (this.type === tokTypes.string) {
                this[STATE].jsxAttrValueToken = true;
            }
            return result;
        }

        /**
         * Performs last-minute Esprima-specific compatibility checks and fixes.
         * @param {ASTNode} result The node to check.
         * @returns {ASTNode} The finished node.
         */
        [ESPRIMA_FINISH_NODE](result) {

            // Acorn doesn't count the opening and closing backticks as part of templates
            // so we have to adjust ranges/locations appropriately.
            if (result.type === "TemplateElement") {

                // additional adjustment needed if ${ is the last token
                const terminalDollarBraceL = this.input.slice(result.end, result.end + 2) === "${";

                if (result.range) {
                    result.range[0]--;
                    result.range[1] += (terminalDollarBraceL ? 2 : 1);
                }

                if (result.loc) {
                    result.loc.start.column--;
                    result.loc.end.column += (terminalDollarBraceL ? 2 : 1);
                }
            }

            if (result.type.indexOf("Function") > -1 && !result.generator) {
                result.generator = false;
            }

            return result;
        }
    };
};
