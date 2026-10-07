/**
 * This file contains the “gullet” where macros are expanded
 * until only non-macro tokens remain.
 */

import functions from "./functions";
import symbols from "./symbols";
import Lexer from "./Lexer";
import {Token} from "./Token";
import type {Mode} from "./types";
import ParseError from "./ParseError";
import SourceLocation from "./SourceLocation";
import Namespace from "./Namespace";
import macros from "./macros";

import type {MacroContextInterface, MacroDefinition, MacroExpansion, MacroArg}
    from "./defineMacro";
import type Settings from "./Settings";

// List of commands that act like macros but aren't defined as a macro,
// function, or symbol.  Used in `isDefined`.
export const implicitCommands = {
    "^": true,           // Parser.js
    "_": true,           // Parser.js
    "\\limits": true,    // Parser.js
    "\\nolimits": true,  // Parser.js
};

export default class MacroExpander implements MacroContextInterface {
    settings: Settings;
    expansionCount: number;
    lexer!: Lexer;
    macros: Namespace<MacroDefinition>;
    stack: Token[];
    mode: Mode;

    constructor(input: string, settings: Settings, mode: Mode) {
        this.settings = settings;
        this.expansionCount = 0;
        this.feed(input);
        // Make new global namespace
        this.macros = new Namespace(macros, settings.macros);
        this.mode = mode;
        this.stack = []; // contains tokens in REVERSE order
    }

    /**
     * Feed a new input string to the same MacroExpander
     * (with existing macros etc.).
     */
    feed(input: string) {
        this.lexer = new Lexer(input, this.settings);
    }

    /**
     * Switches between "text" and "math" modes.
     */
    switchMode(newMode: Mode) {
        this.mode = newMode;
    }

    /**
     * Start a new group nesting within all namespaces.
     */
    beginGroup() {
        this.macros.beginGroup();
    }

    /**
     * End current group nesting within all namespaces.
     */
    endGroup() {
        this.macros.endGroup();
    }

    /**
     * Ends all currently nested groups (if any), restoring values before the
     * groups began.  Useful in case of an error in the middle of parsing.
     */
    endGroups() {
        this.macros.endGroups();
    }

    /**
     * Returns the topmost token on the stack, without expanding it.
     * Similar in behavior to TeX's `\futurelet`.
     */
    future(): Token {
        if (this.stack.length === 0) {
            this.pushToken(this.lexer.lex());
        }
        return this.stack[this.stack.length - 1];
    }

    /**
     * Remove and return the next unexpanded token.
     */
    popToken(): Token {
        this.future();  // ensure non-empty stack
        return this.stack.pop()!;
    }

    /**
     * Add a given token to the token stack.  In particular, this get be used
     * to put back a token returned from one of the other methods.
     */
    pushToken(token: Token) {
        this.stack.push(token);
    }

    /**
     * Append an array of tokens to the token stack.
     */
    pushTokens(tokens: Token[]) {
        this.stack.push(...tokens);
    }

    /**
     * Find an macro argument without expanding tokens and append the array of
     * tokens to the token stack. Uses Token as a container for the result.
     */
    scanArgument(isOptional: boolean): Token | null | undefined {
        let start;
        let end;
        let tokens;
        if (isOptional) {
            this.consumeSpaces(); // \@ifnextchar gobbles any space following it
            if (this.future().text !== "[") {
                return null;
            }
            start = this.popToken(); // don't include [ in tokens
            ({tokens, end} = this.consumeArg(["]"]));
        } else {
            ({tokens, start, end} = this.consumeArg());
        }

        // indicate the end of an argument
        this.pushToken(new Token("EOF", end.loc));

        this.pushTokens(tokens);
        return new Token("", SourceLocation.range(start, end));
    }

    /**
     * Consume all following space tokens, without expansion.
     */
    consumeSpaces() {
        for (;;) {
            const token = this.future();
            if (token.text === " ") {
                this.stack.pop();
            } else {
                break;
            }
        }
    }

    /**
     * Consume an argument from the token stream, and return the resulting array
     * of tokens and start/end token.
     */
    consumeArg(delims?: string[] | null | undefined): MacroArg {
        // The argument for a delimited parameter is the shortest (possibly
        // empty) sequence of tokens with properly nested {...} groups that is
        // followed ... by this particular list of non-parameter tokens.
        // The argument for an undelimited parameter is the next nonblank
        // token, unless that token is ‘{’, when the argument will be the
        // entire {...} group that follows.
        const tokens: Token[] = [];
        const isDelimited = delims && delims.length > 0;
        if (!isDelimited) {
            // Ignore spaces between arguments.  As the TeXbook says:
            // "After you have said ‘\def\row#1#2{...}’, you are allowed to
            //  put spaces between the arguments (e.g., ‘\row x n’), because
            //  TeX doesn’t use single spaces as undelimited arguments."
            this.consumeSpaces();
        }
        const start = this.future();
        let tok;
        let depth = 0;
        let match = 0;
        do {
            tok = this.popToken();
            tokens.push(tok);
            if (tok.text === "{") {
                ++depth;
            } else if (tok.text === "}") {
                --depth;
                if (depth === -1) {
                    throw new ParseError("Extra }", tok);
                }
            } else if (tok.text === "EOF") {
                throw new ParseError("Unexpected end of input in a macro argument" +
                    ", expected '" + (delims && isDelimited ? delims[match] : "}") +
                    "'", tok);
            }
            if (delims && isDelimited) {
                if ((depth === 0 || (depth === 1 && delims[match] === "{")) &&
                    tok.text === delims[match]) {
                    ++match;
                    if (match === delims.length) {
                        // don't include delims in tokens
                        tokens.splice(-match, match);
                        break;
                    }
                } else {
                    match = 0;
                }
            }
        } while (depth !== 0 || isDelimited);
        // If the argument found ... has the form ‘{<nested tokens>}’,
        // ... the outermost braces enclosing the argument are removed
        if (start.text === "{" && tokens[tokens.length - 1].text === "}") {
            tokens.pop();
            tokens.shift();
        }
        tokens.reverse(); // to fit in with stack order
        return {tokens, start, end: tok};
    }

    /**
     * Consume the specified number of (delimited) arguments from the token
     * stream and return the resulting array of arguments.
     */
    consumeArgs(numArgs: number, delimiters?: string[][]): Token[][] {
        if (delimiters) {
            if (delimiters.length !== numArgs + 1) {
                throw new ParseError(
                    "The length of delimiters doesn't match the number of args!");
            }
            const delims = delimiters[0];
            for (let i = 0; i < delims.length; i++) {
                const tok = this.popToken();
                if (delims[i] !== tok.text) {
                    throw new ParseError(
                        "Use of the macro doesn't match its definition", tok);
                }
            }
        }

        const args: Token[][] = [];
        for (let i = 0; i < numArgs; i++) {
            args.push(this.consumeArg(delimiters && delimiters[i + 1]).tokens);
        }
        return args;
    }

    /**
     * Increment `expansionCount` by the specified amount.
     * Throw an error if it exceeds `maxExpand`.
     */
    countExpansion(amount: number): void {
        this.expansionCount += amount;
        if (this.expansionCount > this.settings.maxExpand) {
            throw new ParseError("Too many expansions: infinite loop or " +
                "need to increase maxExpand setting");
        }
    }

    /**
     * Expand the next token only once if possible.
     *
     * If the token is expanded, the resulting tokens will be pushed onto
     * the stack in reverse order, and the number of such tokens will be
     * returned.  This number might be zero or positive.
     *
     * If not, the return value is `false`, and the next token remains at the
     * top of the stack.
     *
     * In either case, the next token will be on the top of the stack,
     * or the stack will be empty (in case of empty expansion
     * and no other tokens).
     *
     * Used to implement `expandAfterFuture` and `expandNextToken`.
     *
     * If expandableOnly, only expandable tokens are expanded and
     * an undefined control sequence results in an error.
     */
    expandOnce(expandableOnly?: boolean): number | boolean {
        const topToken = this.popToken();
        const name = topToken.text;
        const expansion = !topToken.noexpand ? this._getExpansion(name) : null;
        if (expansion == null || (expandableOnly && expansion.unexpandable)) {
            if (expandableOnly && expansion == null &&
                    name[0] === "\\" && !this.isDefined(name)) {
                throw new ParseError("Undefined control sequence: " + name);
            }
            this.pushToken(topToken);
            return false;
        }
        this.countExpansion(1);
        let tokens = expansion.tokens;
        const args = this.consumeArgs(expansion.numArgs, expansion.delimiters);
        if (expansion.numArgs) {
            // paste arguments in place of the placeholders
            tokens = tokens.slice(); // make a shallow copy
            for (let i = tokens.length - 1; i >= 0; --i) {
                let tok = tokens[i];
                if (tok.text === "#") {
                    if (i === 0) {
                        throw new ParseError(
                            "Incomplete placeholder at end of macro body",
                            tok);
                    }
                    tok = tokens[--i]; // next token on stack
                    if (tok.text === "#") { // ## → #
                        tokens.splice(i + 1, 1); // drop first #
                    } else if (/^[1-9]$/.test(tok.text)) {
                        // replace the placeholder with the indicated argument
                        tokens.splice(i, 2, ...args[+tok.text - 1]);
                    } else {
                        throw new ParseError(
                            "Not a valid argument number",
                            tok);
                    }
                }
            }
        }
        // Concatenate expansion onto top of stack.
        this.pushTokens(tokens);
        return tokens.length;
    }

    /**
     * Expand the next token only once (if possible), and return the resulting
     * top token on the stack (without removing anything from the stack).
     * Similar in behavior to TeX's `\expandafter\futurelet`.
     * Equivalent to expandOnce() followed by future().
     */
    expandAfterFuture(): Token {
        this.expandOnce();
        return this.future();
    }

    /**
     * Recursively expand first token, then return first non-expandable token.
     */
    expandNextToken(): Token {
        for (;;) {
            if (this.expandOnce() === false) {  // fully expanded
                const token = this.stack.pop()!;
                // the token after \noexpand is interpreted as if its meaning
                // were ‘\relax’
                if (token.treatAsRelax) {
                    token.text = "\\relax";
                }
                return token;
            }
        }
    }

    /**
     * Fully expand the given macro name and return the resulting list of
     * tokens, or return `undefined` if no such macro is defined.
     */
    expandMacro(name: string): Token[] | undefined {
        return this.macros.has(name)
            ? this.expandTokens([new Token(name)]) : undefined;
    }

    /**
     * Fully expand the given token stream and return the resulting list of
     * tokens.  Note that the input tokens are in reverse order, but the
     * output tokens are in forward order.
     */
    expandTokens(tokens: Token[]): Token[] {
        const output: Token[] = [];
        const oldStackLength = this.stack.length;
        this.pushTokens(tokens);
        while (this.stack.length > oldStackLength) {
            // Expand only expandable tokens
            if (this.expandOnce(true) === false) {  // fully expanded
                const token = this.stack.pop()!;
                if (token.treatAsRelax) {
                    // the expansion of \noexpand is the token itself
                    token.noexpand = false;
                    token.treatAsRelax = false;
                }
                output.push(token);
            }
        }
        // Count all of these tokens as additional expansions, to prevent
        // exponential blowup from linearly many \edef's.
        this.countExpansion(output.length);
        return output;
    }

    /**
     * Fully expand the given macro name and return the result as a string,
     * or return `undefined` if no such macro is defined.
     */
    expandMacroAsText(name: string): string | undefined {
        const tokens = this.expandMacro(name);
        if (tokens) {
            return tokens.map((token) => token.text).join("");
        } else {
            return tokens;
        }
    }

    /**
     * Returns the expanded macro as a reversed array of tokens and a macro
     * argument count.  Or returns `null` if no such macro.
     */
    _getExpansion(name: string): MacroExpansion | null | undefined {
        const definition = this.macros.get(name);

        if (definition == null) { // mainly checking for undefined here
            return definition;
        }
        // If a single character has an associated catcode other than 13
        // (active character), then don't expand it.
        if (name.length === 1) {
            const catcode = this.lexer.catcodes[name];
            if (catcode != null && catcode !== 13) {
                return;
            }
        }
        const expansion =
            typeof definition === "function" ? definition(this) : definition;
        if (typeof expansion === "string") {
            let numArgs = 0;
            if (expansion.includes("#")) {
                const stripped = expansion.replace(/##/g, "");
                while (stripped.includes("#" + (numArgs + 1))) {
                    ++numArgs;
                }
            }
            const bodyLexer = new Lexer(expansion, this.settings);
            const tokens = [];
            let tok = bodyLexer.lex();
            while (tok.text !== "EOF") {
                tokens.push(tok);
                tok = bodyLexer.lex();
            }
            tokens.reverse(); // to fit in with stack using push and pop
            const expanded = {tokens, numArgs};
            return expanded;
        }

        return expansion;
    }

    /**
     * Determine whether a command is currently "defined" (has some
     * functionality), meaning that it's a macro (in the current group),
     * a function, a symbol, or one of the special commands listed in
     * `implicitCommands`.
     */
    isDefined(name: string): boolean {
        return this.macros.has(name) ||
            functions.hasOwnProperty(name) ||
            symbols.math.hasOwnProperty(name) ||
            symbols.text.hasOwnProperty(name) ||
            implicitCommands.hasOwnProperty(name);
    }

    /**
     * Determine whether a command is expandable.
     */
    isExpandable(name: string): boolean {
        const macro = this.macros.get(name);
        return macro != null ? typeof macro === "string"
                || typeof macro === "function" || !macro.unexpandable
            : functions.hasOwnProperty(name) && !functions[name].primitive;
    }
}
