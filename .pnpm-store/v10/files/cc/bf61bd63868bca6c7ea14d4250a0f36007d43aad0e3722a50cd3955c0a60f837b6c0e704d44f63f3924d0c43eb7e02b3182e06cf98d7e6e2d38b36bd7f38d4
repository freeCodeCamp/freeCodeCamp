(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./cssScanner", "./cssNodes", "./cssErrors", "../languageFacts/facts", "../utils/objects"], factory);
    }
})(function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Parser = void 0;
    const cssScanner_1 = require("./cssScanner");
    const nodes = require("./cssNodes");
    const cssErrors_1 = require("./cssErrors");
    const languageFacts = require("../languageFacts/facts");
    const objects_1 = require("../utils/objects");
    /// <summary>
    /// A parser for the css core specification. See for reference:
    /// https://www.w3.org/TR/CSS21/grammar.html
    /// http://www.w3.org/TR/CSS21/syndata.html#tokenization
    /// </summary>
    class Parser {
        constructor(scnr = new cssScanner_1.Scanner()) {
            this.keyframeRegex = /^@(\-(webkit|ms|moz|o)\-)?keyframes$/i;
            this.scanner = scnr;
            this.token = { type: cssScanner_1.TokenType.EOF, offset: -1, len: 0, text: '' };
            this.prevToken = undefined;
        }
        peekIdent(text) {
            return cssScanner_1.TokenType.Ident === this.token.type && text.length === this.token.text.length && text === this.token.text.toLowerCase();
        }
        peekKeyword(text) {
            return cssScanner_1.TokenType.AtKeyword === this.token.type && text.length === this.token.text.length && text === this.token.text.toLowerCase();
        }
        peekDelim(text) {
            return cssScanner_1.TokenType.Delim === this.token.type && text === this.token.text;
        }
        peek(type) {
            return type === this.token.type;
        }
        peekOne(...types) {
            return types.indexOf(this.token.type) !== -1;
        }
        peekRegExp(type, regEx) {
            if (type !== this.token.type) {
                return false;
            }
            return regEx.test(this.token.text);
        }
        hasWhitespace() {
            return !!this.prevToken && (this.prevToken.offset + this.prevToken.len !== this.token.offset);
        }
        consumeToken() {
            this.prevToken = this.token;
            this.token = this.scanner.scan();
        }
        acceptUnicodeRange() {
            const token = this.scanner.tryScanUnicode();
            if (token) {
                this.prevToken = token;
                this.token = this.scanner.scan();
                return true;
            }
            return false;
        }
        mark() {
            return {
                prev: this.prevToken,
                curr: this.token,
                pos: this.scanner.pos()
            };
        }
        restoreAtMark(mark) {
            this.prevToken = mark.prev;
            this.token = mark.curr;
            this.scanner.goBackTo(mark.pos);
        }
        try(func) {
            const pos = this.mark();
            const node = func();
            if (!node) {
                this.restoreAtMark(pos);
                return null;
            }
            return node;
        }
        acceptOneKeyword(keywords) {
            if (cssScanner_1.TokenType.AtKeyword === this.token.type) {
                for (const keyword of keywords) {
                    if (keyword.length === this.token.text.length && keyword === this.token.text.toLowerCase()) {
                        this.consumeToken();
                        return true;
                    }
                }
            }
            return false;
        }
        accept(type) {
            if (type === this.token.type) {
                this.consumeToken();
                return true;
            }
            return false;
        }
        acceptIdent(text) {
            if (this.peekIdent(text)) {
                this.consumeToken();
                return true;
            }
            return false;
        }
        acceptKeyword(text) {
            if (this.peekKeyword(text)) {
                this.consumeToken();
                return true;
            }
            return false;
        }
        acceptDelim(text) {
            if (this.peekDelim(text)) {
                this.consumeToken();
                return true;
            }
            return false;
        }
        acceptRegexp(regEx) {
            if (regEx.test(this.token.text)) {
                this.consumeToken();
                return true;
            }
            return false;
        }
        _parseRegexp(regEx) {
            let node = this.createNode(nodes.NodeType.Identifier);
            do { } while (this.acceptRegexp(regEx));
            return this.finish(node);
        }
        acceptUnquotedString() {
            const pos = this.scanner.pos();
            this.scanner.goBackTo(this.token.offset);
            const unquoted = this.scanner.scanUnquotedString();
            if (unquoted) {
                this.token = unquoted;
                this.consumeToken();
                return true;
            }
            this.scanner.goBackTo(pos);
            return false;
        }
        resync(resyncTokens, resyncStopTokens) {
            while (true) {
                if (resyncTokens && resyncTokens.indexOf(this.token.type) !== -1) {
                    this.consumeToken();
                    return true;
                }
                else if (resyncStopTokens && resyncStopTokens.indexOf(this.token.type) !== -1) {
                    return true;
                }
                else {
                    if (this.token.type === cssScanner_1.TokenType.EOF) {
                        return false;
                    }
                    this.token = this.scanner.scan();
                }
            }
        }
        createNode(nodeType) {
            return new nodes.Node(this.token.offset, this.token.len, nodeType);
        }
        create(ctor) {
            return new ctor(this.token.offset, this.token.len);
        }
        finish(node, error, resyncTokens, resyncStopTokens) {
            // parseNumeric misuses error for boolean flagging (however the real error mustn't be a false)
            // + nodelist offsets mustn't be modified, because there is a offset hack in rulesets for smartselection
            if (!(node instanceof nodes.Nodelist)) {
                if (error) {
                    this.markError(node, error, resyncTokens, resyncStopTokens);
                }
                // set the node end position
                if (this.prevToken) {
                    // length with more elements belonging together
                    const prevEnd = this.prevToken.offset + this.prevToken.len;
                    node.length = prevEnd > node.offset ? prevEnd - node.offset : 0; // offset is taken from current token, end from previous: Use 0 for empty nodes
                }
            }
            return node;
        }
        markError(node, error, resyncTokens, resyncStopTokens) {
            if (this.token !== this.lastErrorToken) { // do not report twice on the same token
                node.addIssue(new nodes.Marker(node, error, nodes.Level.Error, undefined, this.token.offset, this.token.len));
                this.lastErrorToken = this.token;
            }
            if (resyncTokens || resyncStopTokens) {
                this.resync(resyncTokens, resyncStopTokens);
            }
        }
        parseStylesheet(textDocument) {
            const versionId = textDocument.version;
            const text = textDocument.getText();
            const textProvider = (offset, length) => {
                if (textDocument.version !== versionId) {
                    throw new Error('Underlying model has changed, AST is no longer valid');
                }
                return text.substr(offset, length);
            };
            return this.internalParse(text, this._parseStylesheet, textProvider);
        }
        internalParse(input, parseFunc, textProvider) {
            this.scanner.setSource(input);
            this.token = this.scanner.scan();
            const node = parseFunc.bind(this)();
            if (node) {
                if (textProvider) {
                    node.textProvider = textProvider;
                }
                else {
                    node.textProvider = (offset, length) => { return input.substr(offset, length); };
                }
            }
            return node;
        }
        _parseStylesheet() {
            const node = this.create(nodes.Stylesheet);
            while (node.addChild(this._parseStylesheetStart())) {
                // Parse statements only valid at the beginning of stylesheets.
            }
            let inRecovery = false;
            do {
                let hasMatch = false;
                do {
                    hasMatch = false;
                    const statement = this._parseStylesheetStatement();
                    if (statement) {
                        node.addChild(statement);
                        hasMatch = true;
                        inRecovery = false;
                        if (!this.peek(cssScanner_1.TokenType.EOF) && this._needsSemicolonAfter(statement) && !this.accept(cssScanner_1.TokenType.SemiColon)) {
                            this.markError(node, cssErrors_1.ParseError.SemiColonExpected);
                        }
                    }
                    while (this.accept(cssScanner_1.TokenType.SemiColon) || this.accept(cssScanner_1.TokenType.CDO) || this.accept(cssScanner_1.TokenType.CDC)) {
                        // accept empty statements
                        hasMatch = true;
                        inRecovery = false;
                    }
                } while (hasMatch);
                if (this.peek(cssScanner_1.TokenType.EOF)) {
                    break;
                }
                if (!inRecovery) {
                    if (this.peek(cssScanner_1.TokenType.AtKeyword)) {
                        this.markError(node, cssErrors_1.ParseError.UnknownAtRule);
                    }
                    else {
                        this.markError(node, cssErrors_1.ParseError.RuleOrSelectorExpected);
                    }
                    inRecovery = true;
                }
                this.consumeToken();
            } while (!this.peek(cssScanner_1.TokenType.EOF));
            return this.finish(node);
        }
        _parseStylesheetStart() {
            return this._parseCharset();
        }
        _parseStylesheetStatement(isNested = false) {
            if (this.peek(cssScanner_1.TokenType.AtKeyword)) {
                return this._parseStylesheetAtStatement(isNested);
            }
            return this._parseRuleset(isNested);
        }
        _parseStylesheetAtStatement(isNested = false) {
            return this._parseImport()
                || this._parseMedia(isNested)
                || this._parseScope()
                || this._parsePage()
                || this._parseFontFace()
                || this._parseKeyframe()
                || this._parseSupports(isNested)
                || this._parseLayer(isNested)
                || this._parsePropertyAtRule()
                || this._parseViewPort()
                || this._parseNamespace()
                || this._parseDocument()
                || this._parseContainer(isNested)
                || this._parseStartingStyleAtRule(isNested)
                || this._parseUnknownAtRule();
        }
        _tryParseRuleset(isNested) {
            const mark = this.mark();
            if (this._parseSelector(isNested)) {
                while (this.accept(cssScanner_1.TokenType.Comma) && this._parseSelector(isNested)) {
                    // loop
                }
                if (this.accept(cssScanner_1.TokenType.CurlyL)) {
                    this.restoreAtMark(mark);
                    return this._parseRuleset(isNested);
                }
            }
            this.restoreAtMark(mark);
            return null;
        }
        _parseRuleset(isNested = false) {
            const node = this.create(nodes.RuleSet);
            const selectors = node.getSelectors();
            if (!selectors.addChild(this._parseSelector(isNested))) {
                return null;
            }
            while (this.accept(cssScanner_1.TokenType.Comma)) {
                if (!selectors.addChild(this._parseSelector(isNested))) {
                    return this.finish(node, cssErrors_1.ParseError.SelectorExpected);
                }
            }
            return this._parseBody(node, this._parseRuleSetDeclaration.bind(this));
        }
        _parseRuleSetDeclarationAtStatement() {
            return this._parseMedia(true)
                || this._parseScope()
                || this._parseSupports(true)
                || this._parseLayer(true)
                || this._parseContainer(true)
                || this._parseStartingStyleAtRule(true)
                || this._parseUnknownAtRule();
        }
        _parseRuleSetDeclaration() {
            // https://www.w3.org/TR/css-syntax-3/#consume-a-list-of-declarations
            if (this.peek(cssScanner_1.TokenType.AtKeyword)) {
                return this._parseRuleSetDeclarationAtStatement();
            }
            if (!this.peek(cssScanner_1.TokenType.Ident)) {
                return this._parseRuleset(true);
            }
            return this._tryParseRuleset(true) || this._parseDeclaration();
        }
        _needsSemicolonAfter(node) {
            switch (node.type) {
                case nodes.NodeType.Keyframe:
                case nodes.NodeType.ViewPort:
                case nodes.NodeType.Media:
                case nodes.NodeType.Ruleset:
                case nodes.NodeType.Namespace:
                case nodes.NodeType.If:
                case nodes.NodeType.For:
                case nodes.NodeType.Each:
                case nodes.NodeType.While:
                case nodes.NodeType.MixinDeclaration:
                case nodes.NodeType.FunctionDeclaration:
                case nodes.NodeType.MixinContentDeclaration:
                case nodes.NodeType.Scope:
                    return false;
                case nodes.NodeType.ExtendsReference:
                case nodes.NodeType.MixinContentReference:
                case nodes.NodeType.ReturnStatement:
                case nodes.NodeType.MediaQuery:
                case nodes.NodeType.Debug:
                case nodes.NodeType.Import:
                case nodes.NodeType.AtApplyRule:
                case nodes.NodeType.CustomPropertyDeclaration:
                    return true;
                case nodes.NodeType.VariableDeclaration:
                    return node.needsSemicolon;
                case nodes.NodeType.MixinReference:
                    return !node.getContent();
                case nodes.NodeType.Declaration:
                    return !node.getNestedProperties();
            }
            return false;
        }
        _parseDeclarations(parseDeclaration) {
            const node = this.create(nodes.Declarations);
            if (!this.accept(cssScanner_1.TokenType.CurlyL)) {
                return null;
            }
            let decl = parseDeclaration();
            while (node.addChild(decl)) {
                if (this.peek(cssScanner_1.TokenType.CurlyR)) {
                    break;
                }
                if (this._needsSemicolonAfter(decl) && !this.accept(cssScanner_1.TokenType.SemiColon)) {
                    return this.finish(node, cssErrors_1.ParseError.SemiColonExpected, [cssScanner_1.TokenType.SemiColon, cssScanner_1.TokenType.CurlyR]);
                }
                // We accepted semicolon token. Link it to declaration.
                if (decl && this.prevToken && this.prevToken.type === cssScanner_1.TokenType.SemiColon) {
                    decl.semicolonPosition = this.prevToken.offset;
                }
                while (this.accept(cssScanner_1.TokenType.SemiColon)) {
                    // accept empty statements
                }
                decl = parseDeclaration();
            }
            if (!this.accept(cssScanner_1.TokenType.CurlyR)) {
                return this.finish(node, cssErrors_1.ParseError.RightCurlyExpected, [cssScanner_1.TokenType.CurlyR, cssScanner_1.TokenType.SemiColon]);
            }
            return this.finish(node);
        }
        _parseBody(node, parseDeclaration) {
            if (!node.setDeclarations(this._parseDeclarations(parseDeclaration))) {
                return this.finish(node, cssErrors_1.ParseError.LeftCurlyExpected, [cssScanner_1.TokenType.CurlyR, cssScanner_1.TokenType.SemiColon]);
            }
            return this.finish(node);
        }
        _parseSelector(isNested) {
            const node = this.create(nodes.Selector);
            let hasContent = false;
            if (isNested) {
                // nested selectors can start with a combinator
                hasContent = node.addChild(this._parseCombinator());
            }
            while (node.addChild(this._parseSimpleSelector())) {
                hasContent = true;
                node.addChild(this._parseCombinator()); // optional
            }
            return hasContent ? this.finish(node) : null;
        }
        _parseDeclaration(stopTokens, standaloneCustomPropertyValid = false) {
            const customProperty = this._tryParseCustomPropertyDeclaration(stopTokens, standaloneCustomPropertyValid);
            if (customProperty) {
                return customProperty;
            }
            const node = this.create(nodes.Declaration);
            if (!node.setProperty(this._parseProperty())) {
                return null;
            }
            if (!this.accept(cssScanner_1.TokenType.Colon)) {
                return this.finish(node, cssErrors_1.ParseError.ColonExpected, [cssScanner_1.TokenType.Colon], stopTokens || [cssScanner_1.TokenType.SemiColon]);
            }
            if (this.prevToken) {
                node.colonPosition = this.prevToken.offset;
            }
            if (!node.setValue(this._parseExpr())) {
                return this.finish(node, cssErrors_1.ParseError.PropertyValueExpected);
            }
            node.addChild(this._parsePrio());
            if (this.peek(cssScanner_1.TokenType.SemiColon)) {
                node.semicolonPosition = this.token.offset; // not part of the declaration, but useful information for code assist
            }
            return this.finish(node);
        }
        _tryParseCustomPropertyDeclaration(stopTokens, standaloneCustomPropertyValid = false) {
            if (!this.peekRegExp(cssScanner_1.TokenType.Ident, /^--/)) {
                return null;
            }
            const node = this.create(nodes.CustomPropertyDeclaration);
            if (!node.setProperty(this._parseProperty())) {
                return null;
            }
            if (!this.accept(cssScanner_1.TokenType.Colon)) {
                if (standaloneCustomPropertyValid) {
                    return this.finish(node);
                }
                return this.finish(node, cssErrors_1.ParseError.ColonExpected, [cssScanner_1.TokenType.Colon]);
            }
            if (this.prevToken) {
                node.colonPosition = this.prevToken.offset;
            }
            const mark = this.mark();
            if (this.peek(cssScanner_1.TokenType.CurlyL)) {
                // try to parse it as nested declaration
                const propertySet = this.create(nodes.CustomPropertySet);
                const declarations = this._parseDeclarations(this._parseRuleSetDeclaration.bind(this));
                if (propertySet.setDeclarations(declarations) && !declarations.isErroneous(true)) {
                    propertySet.addChild(this._parsePrio());
                    if (this.peek(cssScanner_1.TokenType.SemiColon)) {
                        this.finish(propertySet);
                        node.setPropertySet(propertySet);
                        node.semicolonPosition = this.token.offset; // not part of the declaration, but useful information for code assist
                        return this.finish(node);
                    }
                }
                this.restoreAtMark(mark);
            }
            // try to parse as expression
            const expression = this._parseExpr();
            if (expression && !expression.isErroneous(true)) {
                this._parsePrio();
                if (this.peekOne(...(stopTokens || []), cssScanner_1.TokenType.SemiColon, cssScanner_1.TokenType.EOF)) {
                    node.setValue(expression);
                    if (this.peek(cssScanner_1.TokenType.SemiColon)) {
                        node.semicolonPosition = this.token.offset; // not part of the declaration, but useful information for code assist
                    }
                    return this.finish(node);
                }
            }
            this.restoreAtMark(mark);
            node.addChild(this._parseCustomPropertyValue(stopTokens));
            node.addChild(this._parsePrio());
            if ((0, objects_1.isDefined)(node.colonPosition) && this.token.offset === node.colonPosition + 1) {
                return this.finish(node, cssErrors_1.ParseError.PropertyValueExpected);
            }
            return this.finish(node);
        }
        /**
         * Parse custom property values.
         *
         * Based on https://www.w3.org/TR/css-variables/#syntax
         *
         * This code is somewhat unusual, as the allowed syntax is incredibly broad,
         * parsing almost any sequence of tokens, save for a small set of exceptions.
         * Unbalanced delimitors, invalid tokens, and declaration
         * terminators like semicolons and !important directives (when not inside
         * of delimitors).
         */
        _parseCustomPropertyValue(stopTokens = [cssScanner_1.TokenType.CurlyR]) {
            const node = this.create(nodes.Node);
            const isTopLevel = () => curlyDepth === 0 && parensDepth === 0 && bracketsDepth === 0;
            const onStopToken = () => stopTokens.indexOf(this.token.type) !== -1;
            let curlyDepth = 0;
            let parensDepth = 0;
            let bracketsDepth = 0;
            done: while (true) {
                switch (this.token.type) {
                    case cssScanner_1.TokenType.SemiColon:
                        // A semicolon only ends things if we're not inside a delimitor.
                        if (isTopLevel()) {
                            break done;
                        }
                        break;
                    case cssScanner_1.TokenType.Exclamation:
                        // An exclamation ends the value if we're not inside delims.
                        if (isTopLevel()) {
                            break done;
                        }
                        break;
                    case cssScanner_1.TokenType.CurlyL:
                        curlyDepth++;
                        break;
                    case cssScanner_1.TokenType.CurlyR:
                        curlyDepth--;
                        if (curlyDepth < 0) {
                            // The property value has been terminated without a semicolon, and
                            // this is the last declaration in the ruleset.
                            if (onStopToken() && parensDepth === 0 && bracketsDepth === 0) {
                                break done;
                            }
                            return this.finish(node, cssErrors_1.ParseError.LeftCurlyExpected);
                        }
                        break;
                    case cssScanner_1.TokenType.ParenthesisL:
                        parensDepth++;
                        break;
                    case cssScanner_1.TokenType.ParenthesisR:
                        parensDepth--;
                        if (parensDepth < 0) {
                            if (onStopToken() && bracketsDepth === 0 && curlyDepth === 0) {
                                break done;
                            }
                            return this.finish(node, cssErrors_1.ParseError.LeftParenthesisExpected);
                        }
                        break;
                    case cssScanner_1.TokenType.BracketL:
                        bracketsDepth++;
                        break;
                    case cssScanner_1.TokenType.BracketR:
                        bracketsDepth--;
                        if (bracketsDepth < 0) {
                            return this.finish(node, cssErrors_1.ParseError.LeftSquareBracketExpected);
                        }
                        break;
                    case cssScanner_1.TokenType.BadString: // fall through
                        break done;
                    case cssScanner_1.TokenType.EOF:
                        // We shouldn't have reached the end of input, something is
                        // unterminated.
                        let error = cssErrors_1.ParseError.RightCurlyExpected;
                        if (bracketsDepth > 0) {
                            error = cssErrors_1.ParseError.RightSquareBracketExpected;
                        }
                        else if (parensDepth > 0) {
                            error = cssErrors_1.ParseError.RightParenthesisExpected;
                        }
                        return this.finish(node, error);
                }
                this.consumeToken();
            }
            return this.finish(node);
        }
        _tryToParseDeclaration(stopTokens) {
            const mark = this.mark();
            if (this._parseProperty() && this.accept(cssScanner_1.TokenType.Colon)) {
                // looks like a declaration, go ahead
                this.restoreAtMark(mark);
                return this._parseDeclaration(stopTokens);
            }
            this.restoreAtMark(mark);
            return null;
        }
        _parseProperty() {
            const node = this.create(nodes.Property);
            const mark = this.mark();
            if (this.acceptDelim('*') || this.acceptDelim('_')) {
                // support for  IE 5.x, 6 and 7 star hack: see http://en.wikipedia.org/wiki/CSS_filter#Star_hack
                if (this.hasWhitespace()) {
                    this.restoreAtMark(mark);
                    return null;
                }
            }
            if (node.setIdentifier(this._parsePropertyIdentifier())) {
                return this.finish(node);
            }
            return null;
        }
        _parsePropertyIdentifier() {
            return this._parseIdent();
        }
        _parseCharset() {
            if (!this.peek(cssScanner_1.TokenType.Charset)) {
                return null;
            }
            const node = this.create(nodes.Node);
            this.consumeToken(); // charset
            if (!this.accept(cssScanner_1.TokenType.String)) {
                return this.finish(node, cssErrors_1.ParseError.IdentifierExpected);
            }
            if (!this.accept(cssScanner_1.TokenType.SemiColon)) {
                return this.finish(node, cssErrors_1.ParseError.SemiColonExpected);
            }
            return this.finish(node);
        }
        _parseImport() {
            // @import [ <url> | <string> ]
            //     [ layer | layer(<layer-name>) ]?
            //     <import-condition> ;
            // <import-conditions> = [ supports( [ <supports-condition> | <declaration> ] ) ]?
            //                      <media-query-list>?
            if (!this.peekKeyword('@import')) {
                return null;
            }
            const node = this.create(nodes.Import);
            this.consumeToken(); // @import
            if (!node.addChild(this._parseURILiteral()) && !node.addChild(this._parseStringLiteral())) {
                return this.finish(node, cssErrors_1.ParseError.URIOrStringExpected);
            }
            return this._completeParseImport(node);
        }
        _completeParseImport(node) {
            if (this.acceptIdent('layer')) {
                if (this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                    if (!node.addChild(this._parseLayerName())) {
                        return this.finish(node, cssErrors_1.ParseError.IdentifierExpected, [cssScanner_1.TokenType.SemiColon]);
                    }
                    if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                        return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected, [cssScanner_1.TokenType.ParenthesisR], []);
                    }
                }
            }
            if (this.acceptIdent('supports')) {
                if (this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                    node.addChild(this._tryToParseDeclaration() || this._parseSupportsCondition());
                    if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                        return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected, [cssScanner_1.TokenType.ParenthesisR], []);
                    }
                }
            }
            if (!this.peek(cssScanner_1.TokenType.SemiColon) && !this.peek(cssScanner_1.TokenType.EOF)) {
                node.setMedialist(this._parseMediaQueryList());
            }
            return this.finish(node);
        }
        _parseNamespace() {
            // http://www.w3.org/TR/css3-namespace/
            // namespace  : NAMESPACE_SYM S* [IDENT S*]? [STRING|URI] S* ';' S*
            if (!this.peekKeyword('@namespace')) {
                return null;
            }
            const node = this.create(nodes.Namespace);
            this.consumeToken(); // @namespace
            if (!node.addChild(this._parseURILiteral())) { // url literal also starts with ident
                node.addChild(this._parseIdent()); // optional prefix
                if (!node.addChild(this._parseURILiteral()) && !node.addChild(this._parseStringLiteral())) {
                    return this.finish(node, cssErrors_1.ParseError.URIExpected, [cssScanner_1.TokenType.SemiColon]);
                }
            }
            if (!this.accept(cssScanner_1.TokenType.SemiColon)) {
                return this.finish(node, cssErrors_1.ParseError.SemiColonExpected);
            }
            return this.finish(node);
        }
        _parseFontFace() {
            if (!this.peekKeyword('@font-face')) {
                return null;
            }
            const node = this.create(nodes.FontFace);
            this.consumeToken(); // @font-face
            return this._parseBody(node, this._parseRuleSetDeclaration.bind(this));
        }
        _parseViewPort() {
            if (!this.peekKeyword('@-ms-viewport') &&
                !this.peekKeyword('@-o-viewport') &&
                !this.peekKeyword('@viewport')) {
                return null;
            }
            const node = this.create(nodes.ViewPort);
            this.consumeToken(); // @-ms-viewport
            return this._parseBody(node, this._parseRuleSetDeclaration.bind(this));
        }
        _parseKeyframe() {
            if (!this.peekRegExp(cssScanner_1.TokenType.AtKeyword, this.keyframeRegex)) {
                return null;
            }
            const node = this.create(nodes.Keyframe);
            const atNode = this.create(nodes.Node);
            this.consumeToken(); // atkeyword
            node.setKeyword(this.finish(atNode));
            if (atNode.matches('@-ms-keyframes')) { // -ms-keyframes never existed
                this.markError(atNode, cssErrors_1.ParseError.UnknownKeyword);
            }
            if (!node.setIdentifier(this._parseKeyframeIdent())) {
                return this.finish(node, cssErrors_1.ParseError.IdentifierExpected, [cssScanner_1.TokenType.CurlyR]);
            }
            return this._parseBody(node, this._parseKeyframeSelector.bind(this));
        }
        _parseKeyframeIdent() {
            return this._parseIdent([nodes.ReferenceType.Keyframe]);
        }
        _parseKeyframeSelector() {
            const node = this.create(nodes.KeyframeSelector);
            let hasContent = false;
            if (node.addChild(this._parseIdent())) {
                hasContent = true;
            }
            if (this.accept(cssScanner_1.TokenType.Percentage)) {
                hasContent = true;
            }
            if (!hasContent) {
                return null;
            }
            while (this.accept(cssScanner_1.TokenType.Comma)) {
                hasContent = false;
                if (node.addChild(this._parseIdent())) {
                    hasContent = true;
                }
                if (this.accept(cssScanner_1.TokenType.Percentage)) {
                    hasContent = true;
                }
                if (!hasContent) {
                    return this.finish(node, cssErrors_1.ParseError.PercentageExpected);
                }
            }
            return this._parseBody(node, this._parseRuleSetDeclaration.bind(this));
        }
        _tryParseKeyframeSelector() {
            const node = this.create(nodes.KeyframeSelector);
            const pos = this.mark();
            let hasContent = false;
            if (node.addChild(this._parseIdent())) {
                hasContent = true;
            }
            if (this.accept(cssScanner_1.TokenType.Percentage)) {
                hasContent = true;
            }
            if (!hasContent) {
                return null;
            }
            while (this.accept(cssScanner_1.TokenType.Comma)) {
                hasContent = false;
                if (node.addChild(this._parseIdent())) {
                    hasContent = true;
                }
                if (this.accept(cssScanner_1.TokenType.Percentage)) {
                    hasContent = true;
                }
                if (!hasContent) {
                    this.restoreAtMark(pos);
                    return null;
                }
            }
            if (!this.peek(cssScanner_1.TokenType.CurlyL)) {
                this.restoreAtMark(pos);
                return null;
            }
            return this._parseBody(node, this._parseRuleSetDeclaration.bind(this));
        }
        _parsePropertyAtRule() {
            // @property <custom-property-name> {
            // 	<declaration-list>
            //  }
            if (!this.peekKeyword('@property')) {
                return null;
            }
            const node = this.create(nodes.PropertyAtRule);
            this.consumeToken(); // @layer
            if (!this.peekRegExp(cssScanner_1.TokenType.Ident, /^--/) || !node.setName(this._parseIdent([nodes.ReferenceType.Property]))) {
                return this.finish(node, cssErrors_1.ParseError.IdentifierExpected);
            }
            return this._parseBody(node, this._parseDeclaration.bind(this));
        }
        _parseStartingStyleAtRule(isNested = false) {
            if (!this.peekKeyword("@starting-style")) {
                return null;
            }
            const node = this.create(nodes.StartingStyleAtRule);
            this.consumeToken(); // @starting-style
            return this._parseBody(node, this._parseStartingStyleDeclaration.bind(this, isNested));
        }
        // this method is the same as ._parseContainerDeclaration()
        // which is the same as ._parseMediaDeclaration(),
        // _parseSupportsDeclaration, and ._parseLayerDeclaration()
        _parseStartingStyleDeclaration(isNested = false) {
            if (isNested) {
                // if nested, the body can contain rulesets, but also declarations
                return this._tryParseRuleset(true)
                    || this._tryToParseDeclaration()
                    || this._parseStylesheetStatement(true);
            }
            return this._parseStylesheetStatement(false);
        }
        _parseLayer(isNested = false) {
            // @layer layer-name {rules}
            // @layer layer-name;
            // @layer layer-name, layer-name, layer-name;
            // @layer {rules}
            if (!this.peekKeyword('@layer')) {
                return null;
            }
            const node = this.create(nodes.Layer);
            this.consumeToken(); // @layer
            const names = this._parseLayerNameList();
            if (names) {
                node.setNames(names);
            }
            if ((!names || names.getChildren().length === 1) && this.peek(cssScanner_1.TokenType.CurlyL)) {
                return this._parseBody(node, this._parseLayerDeclaration.bind(this, isNested));
            }
            if (!this.accept(cssScanner_1.TokenType.SemiColon)) {
                return this.finish(node, cssErrors_1.ParseError.SemiColonExpected);
            }
            return this.finish(node);
        }
        _parseLayerDeclaration(isNested = false) {
            if (isNested) {
                // if nested, the body can contain rulesets, but also declarations
                return this._tryParseRuleset(true)
                    || this._tryToParseDeclaration()
                    || this._parseStylesheetStatement(true);
            }
            return this._parseStylesheetStatement(false);
        }
        _parseLayerNameList() {
            const node = this.createNode(nodes.NodeType.LayerNameList);
            if (!node.addChild(this._parseLayerName())) {
                return null;
            }
            while (this.accept(cssScanner_1.TokenType.Comma)) {
                if (!node.addChild(this._parseLayerName())) {
                    return this.finish(node, cssErrors_1.ParseError.IdentifierExpected);
                }
            }
            return this.finish(node);
        }
        _parseLayerName() {
            // <layer-name> = <ident> [ '.' <ident> ]*
            const node = this.createNode(nodes.NodeType.LayerName);
            if (!node.addChild(this._parseIdent())) {
                return null;
            }
            while (!this.hasWhitespace() && this.acceptDelim('.')) {
                if (this.hasWhitespace() || !node.addChild(this._parseIdent())) {
                    return this.finish(node, cssErrors_1.ParseError.IdentifierExpected);
                }
            }
            return this.finish(node);
        }
        _parseSupports(isNested = false) {
            // SUPPORTS_SYM S* supports_condition '{' S* ruleset* '}' S*
            if (!this.peekKeyword('@supports')) {
                return null;
            }
            const node = this.create(nodes.Supports);
            this.consumeToken(); // @supports
            node.addChild(this._parseSupportsCondition());
            return this._parseBody(node, this._parseSupportsDeclaration.bind(this, isNested));
        }
        _parseSupportsDeclaration(isNested = false) {
            if (isNested) {
                // if nested, the body can contain rulesets, but also declarations
                return this._tryParseRuleset(true)
                    || this._tryToParseDeclaration()
                    || this._parseStylesheetStatement(true);
            }
            return this._parseStylesheetStatement(false);
        }
        _parseSupportsCondition() {
            // supports_condition : supports_negation | supports_conjunction | supports_disjunction | supports_condition_in_parens ;
            // supports_condition_in_parens: ( '(' S* supports_condition S* ')' ) | supports_declaration_condition | general_enclosed ;
            // supports_negation: NOT S+ supports_condition_in_parens ;
            // supports_conjunction: supports_condition_in_parens ( S+ AND S+ supports_condition_in_parens )+;
            // supports_disjunction: supports_condition_in_parens ( S+ OR S+ supports_condition_in_parens )+;
            // supports_declaration_condition: '(' S* declaration ')';
            // general_enclosed: ( FUNCTION | '(' ) ( any | unused )* ')' ;
            const node = this.create(nodes.SupportsCondition);
            if (this.acceptIdent('not')) {
                node.addChild(this._parseSupportsConditionInParens());
            }
            else {
                node.addChild(this._parseSupportsConditionInParens());
                if (this.peekRegExp(cssScanner_1.TokenType.Ident, /^(and|or)$/i)) {
                    const text = this.token.text.toLowerCase();
                    while (this.acceptIdent(text)) {
                        node.addChild(this._parseSupportsConditionInParens());
                    }
                }
            }
            return this.finish(node);
        }
        _parseSupportsConditionInParens() {
            const node = this.create(nodes.SupportsCondition);
            if (this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                if (this.prevToken) {
                    node.lParent = this.prevToken.offset;
                }
                if (!node.addChild(this._tryToParseDeclaration([cssScanner_1.TokenType.ParenthesisR]))) {
                    if (!this._parseSupportsCondition()) {
                        return this.finish(node, cssErrors_1.ParseError.ConditionExpected);
                    }
                }
                if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                    return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected, [cssScanner_1.TokenType.ParenthesisR], []);
                }
                if (this.prevToken) {
                    node.rParent = this.prevToken.offset;
                }
                return this.finish(node);
            }
            else if (this.peek(cssScanner_1.TokenType.Ident)) {
                const pos = this.mark();
                this.consumeToken();
                if (!this.hasWhitespace() && this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                    let openParentCount = 1;
                    while (this.token.type !== cssScanner_1.TokenType.EOF && openParentCount !== 0) {
                        if (this.token.type === cssScanner_1.TokenType.ParenthesisL) {
                            openParentCount++;
                        }
                        else if (this.token.type === cssScanner_1.TokenType.ParenthesisR) {
                            openParentCount--;
                        }
                        this.consumeToken();
                    }
                    return this.finish(node);
                }
                else {
                    this.restoreAtMark(pos);
                }
            }
            return this.finish(node, cssErrors_1.ParseError.LeftParenthesisExpected, [], [cssScanner_1.TokenType.ParenthesisL]);
        }
        _parseMediaDeclaration(isNested = false) {
            if (isNested) {
                // if nested, the body can contain rulesets, but also declarations
                return this._tryParseRuleset(true)
                    || this._tryToParseDeclaration()
                    || this._parseStylesheetStatement(true);
            }
            return this._parseStylesheetStatement(false);
        }
        _parseMedia(isNested = false) {
            // MEDIA_SYM S* media_query_list '{' S* ruleset* '}' S*
            // media_query_list : S* [media_query [ ',' S* media_query ]* ]?
            if (!this.peekKeyword('@media')) {
                return null;
            }
            const node = this.create(nodes.Media);
            this.consumeToken(); // @media
            if (!node.addChild(this._parseMediaQueryList())) {
                return this.finish(node, cssErrors_1.ParseError.MediaQueryExpected);
            }
            return this._parseBody(node, this._parseMediaDeclaration.bind(this, isNested));
        }
        _parseMediaQueryList() {
            const node = this.create(nodes.Medialist);
            if (!node.addChild(this._parseMediaQuery())) {
                return this.finish(node, cssErrors_1.ParseError.MediaQueryExpected);
            }
            while (this.accept(cssScanner_1.TokenType.Comma)) {
                if (!node.addChild(this._parseMediaQuery())) {
                    return this.finish(node, cssErrors_1.ParseError.MediaQueryExpected);
                }
            }
            return this.finish(node);
        }
        _parseMediaQuery() {
            // <media-query> = <media-condition> | [ not | only ]? <media-type> [ and <media-condition-without-or> ]?
            const node = this.create(nodes.MediaQuery);
            const pos = this.mark();
            this.acceptIdent('not');
            if (!this.peek(cssScanner_1.TokenType.ParenthesisL)) {
                if (this.acceptIdent('only')) {
                    // optional
                }
                if (!node.addChild(this._parseIdent())) {
                    return null;
                }
                if (this.acceptIdent('and')) {
                    node.addChild(this._parseMediaCondition());
                }
            }
            else {
                this.restoreAtMark(pos); // 'not' is part of the MediaCondition
                node.addChild(this._parseMediaCondition());
            }
            return this.finish(node);
        }
        _parseRatio() {
            const pos = this.mark();
            const node = this.create(nodes.RatioValue);
            if (!this._parseNumeric()) {
                return null;
            }
            if (!this.acceptDelim('/')) {
                this.restoreAtMark(pos);
                return null;
            }
            if (!this._parseNumeric()) {
                return this.finish(node, cssErrors_1.ParseError.NumberExpected);
            }
            return this.finish(node);
        }
        _parseBooleanExpression(parseTest) {
            // <boolean-expr[ <test> ]> = not <boolean-expr-group> | <boolean-expr-group>
            //                                     [ [ and <boolean-expr-group> ]*
            //                                     | [ or <boolean-expr-group> ]* ]
            const node = this.create(nodes.Node);
            if (this.acceptIdent('not')) {
                if (!node.addChild(this._parseBooleanExpressionGroup(parseTest))) {
                    return null;
                }
            }
            else {
                if (!node.addChild(this._parseBooleanExpressionGroup(parseTest))) {
                    return null;
                }
                if (this.peekIdent('and')) {
                    while (this.acceptIdent('and')) {
                        if (!node.addChild(this._parseBooleanExpressionGroup(parseTest))) {
                            return null;
                        }
                    }
                }
                else if (this.peekIdent('or')) {
                    while (this.acceptIdent('or')) {
                        if (!node.addChild(this._parseBooleanExpressionGroup(parseTest))) {
                            return null;
                        }
                    }
                }
            }
            return this.finish(node);
        }
        _parseBooleanExpressionGroup(parseTest) {
            // <boolean-expr-group> = <test> | ( <boolean-expr[ <test> ]> ) | <general-enclosed>
            const node = this.create(nodes.Node);
            const pos = this.mark();
            if (this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                if (node.addChild(this._parseBooleanExpression(parseTest))) {
                    if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                        return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected, [], [cssScanner_1.TokenType.CurlyL]);
                    }
                    return this.finish(node);
                }
                this.restoreAtMark(pos);
            }
            if (!node.addChild(parseTest())) {
                return null;
            }
            ;
            return this.finish(node);
        }
        _parseMediaCondition() {
            // <media-condition> = <media-not> | <media-and> | <media-or> | <media-in-parens>
            // <media-not> = not <media-in-parens>
            // <media-and> = <media-in-parens> [ and <media-in-parens> ]+
            // <media-or> = <media-in-parens> [ or <media-in-parens> ]+
            // <media-in-parens> = ( <media-condition> ) | <media-feature> | <general-enclosed>
            const node = this.create(nodes.MediaCondition);
            this.acceptIdent('not');
            let parseExpression = true;
            while (parseExpression) {
                if (!this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                    return this.finish(node, cssErrors_1.ParseError.LeftParenthesisExpected, [], [cssScanner_1.TokenType.CurlyL]);
                }
                if (this.peek(cssScanner_1.TokenType.ParenthesisL) || this.peekIdent('not')) {
                    // <media-condition>
                    node.addChild(this._parseMediaCondition());
                }
                else {
                    node.addChild(this._parseMediaFeature());
                }
                // not yet implemented: general enclosed
                if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                    return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected, [], [cssScanner_1.TokenType.CurlyL]);
                }
                parseExpression = this.acceptIdent('and') || this.acceptIdent('or');
            }
            return this.finish(node);
        }
        _parseMediaFeature() {
            const resyncStopToken = [cssScanner_1.TokenType.ParenthesisR];
            const node = this.create(nodes.MediaFeature);
            // <media-feature> = ( [ <mf-plain> | <mf-boolean> | <mf-range> ] )
            // <mf-plain> = <mf-name> : <mf-value>
            // <mf-boolean> = <mf-name>
            // <mf-range> = <mf-name> [ '<' | '>' ]? '='? <mf-value> | <mf-value> [ '<' | '>' ]? '='? <mf-name> | <mf-value> '<' '='? <mf-name> '<' '='? <mf-value> | <mf-value> '>' '='? <mf-name> '>' '='? <mf-value>
            if (node.addChild(this._parseMediaFeatureName())) {
                if (this.accept(cssScanner_1.TokenType.Colon)) {
                    if (!node.addChild(this._parseMediaFeatureValue())) {
                        return this.finish(node, cssErrors_1.ParseError.TermExpected, [], resyncStopToken);
                    }
                }
                else if (this._parseMediaFeatureRangeOperator()) {
                    if (!node.addChild(this._parseMediaFeatureValue())) {
                        return this.finish(node, cssErrors_1.ParseError.TermExpected, [], resyncStopToken);
                    }
                    if (this._parseMediaFeatureRangeOperator()) {
                        if (!node.addChild(this._parseMediaFeatureValue())) {
                            return this.finish(node, cssErrors_1.ParseError.TermExpected, [], resyncStopToken);
                        }
                    }
                }
                else {
                    // <mf-boolean> = <mf-name>
                }
            }
            else if (node.addChild(this._parseMediaFeatureValue())) {
                if (!this._parseMediaFeatureRangeOperator()) {
                    return this.finish(node, cssErrors_1.ParseError.OperatorExpected, [], resyncStopToken);
                }
                if (!node.addChild(this._parseMediaFeatureName())) {
                    return this.finish(node, cssErrors_1.ParseError.IdentifierExpected, [], resyncStopToken);
                }
                if (this._parseMediaFeatureRangeOperator()) {
                    if (!node.addChild(this._parseMediaFeatureValue())) {
                        return this.finish(node, cssErrors_1.ParseError.TermExpected, [], resyncStopToken);
                    }
                }
            }
            else {
                return this.finish(node, cssErrors_1.ParseError.IdentifierExpected, [], resyncStopToken);
            }
            return this.finish(node);
        }
        _parseMediaFeatureRangeOperator() {
            if (this.acceptDelim('<') || this.acceptDelim('>')) {
                if (!this.hasWhitespace()) {
                    this.acceptDelim('=');
                }
                return true;
            }
            else if (this.acceptDelim('=')) {
                return true;
            }
            return false;
        }
        _parseMediaFeatureName() {
            return this._parseIdent();
        }
        _parseMediaFeatureValue() {
            return this._parseRatio() || this._parseTermExpression();
        }
        _parseScope() {
            // @scope [<scope-limits>]? { <block-contents> }
            if (!this.peekKeyword('@scope')) {
                return null;
            }
            const node = this.create(nodes.Scope);
            // @scope
            this.consumeToken();
            node.addChild(this._parseScopeLimits());
            return this._parseBody(node, this._parseScopeDeclaration.bind(this));
        }
        _parseScopeDeclaration() {
            // Treat as nested as regular declarations are implicity wrapped with :where(:scope)
            // https://github.com/w3c/csswg-drafts/issues/10389
            // pseudo-selectors implicitly target :scope
            // https://drafts.csswg.org/css-cascade-6/#scoped-rules
            const isNested = true;
            return this._tryParseRuleset(isNested)
                || this._tryToParseDeclaration()
                || this._parseStylesheetStatement(isNested);
        }
        _parseScopeLimits() {
            // [(<scope-start>)]? [to (<scope-end>)]?
            const node = this.create(nodes.ScopeLimits);
            // [(<scope-start>)]?
            if (this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                // scope-start selector can start with a combinator as it defaults to :scope
                // Treat as nested
                if (!node.setScopeStart(this._parseScopeSelectorList())) {
                    return this.finish(node, cssErrors_1.ParseError.SelectorExpected, [], [cssScanner_1.TokenType.ParenthesisR]);
                }
                if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                    return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected, [], [cssScanner_1.TokenType.CurlyL]);
                }
            }
            // [to (<scope-end>)]?
            if (this.acceptIdent('to')) {
                if (!this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                    return this.finish(node, cssErrors_1.ParseError.LeftParenthesisExpected, [], [cssScanner_1.TokenType.CurlyL]);
                }
                // 'to' selector can start with a combinator as it defaults to :scope
                // Treat as nested
                if (!node.setScopeEnd(this._parseScopeSelectorList())) {
                    return this.finish(node, cssErrors_1.ParseError.SelectorExpected, [], [cssScanner_1.TokenType.ParenthesisR]);
                }
                if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                    return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected, [], [cssScanner_1.TokenType.CurlyL]);
                }
            }
            return this.finish(node);
        }
        _parseScopeSelectorList() {
            const selectors = this.createNode(nodes.NodeType.SelectorList);
            if (!selectors.addChild(this._parseSelector(true))) {
                return null;
            }
            while (this.accept(cssScanner_1.TokenType.Comma) && selectors.addChild(this._parseSelector(true))) {
                // loop
            }
            return this.finish(selectors);
        }
        _parseMedium() {
            const node = this.create(nodes.Node);
            if (node.addChild(this._parseIdent())) {
                return this.finish(node);
            }
            else {
                return null;
            }
        }
        _parsePageDeclaration() {
            return this._parsePageMarginBox() || this._parseRuleSetDeclaration();
        }
        _parsePage() {
            // http://www.w3.org/TR/css3-page/
            // page_rule : PAGE_SYM S* page_selector_list '{' S* page_body '}' S*
            // page_body :  /* Can be empty */ declaration? [ ';' S* page_body ]? | page_margin_box page_body
            if (!this.peekKeyword('@page')) {
                return null;
            }
            const node = this.create(nodes.Page);
            this.consumeToken();
            if (node.addChild(this._parsePageSelector())) {
                while (this.accept(cssScanner_1.TokenType.Comma)) {
                    if (!node.addChild(this._parsePageSelector())) {
                        return this.finish(node, cssErrors_1.ParseError.IdentifierExpected);
                    }
                }
            }
            return this._parseBody(node, this._parsePageDeclaration.bind(this));
        }
        _parsePageMarginBox() {
            // page_margin_box :  margin_sym S* '{' S* declaration? [ ';' S* declaration? ]* '}' S*
            if (!this.peek(cssScanner_1.TokenType.AtKeyword)) {
                return null;
            }
            const node = this.create(nodes.PageBoxMarginBox);
            if (!this.acceptOneKeyword(languageFacts.pageBoxDirectives)) {
                this.markError(node, cssErrors_1.ParseError.UnknownAtRule, [], [cssScanner_1.TokenType.CurlyL]);
            }
            return this._parseBody(node, this._parseRuleSetDeclaration.bind(this));
        }
        _parsePageSelector() {
            // page_selector : pseudo_page+ | IDENT pseudo_page*
            // pseudo_page :  ':' [ "left" | "right" | "first" | "blank" ];
            if (!this.peek(cssScanner_1.TokenType.Ident) && !this.peek(cssScanner_1.TokenType.Colon)) {
                return null;
            }
            const node = this.create(nodes.Node);
            node.addChild(this._parseIdent()); // optional ident
            if (this.accept(cssScanner_1.TokenType.Colon)) {
                if (!node.addChild(this._parseIdent())) { // optional ident
                    return this.finish(node, cssErrors_1.ParseError.IdentifierExpected);
                }
            }
            return this.finish(node);
        }
        _parseDocument() {
            // -moz-document is experimental but has been pushed to css4
            if (!this.peekKeyword('@-moz-document')) {
                return null;
            }
            const node = this.create(nodes.Document);
            this.consumeToken(); // @-moz-document
            this.resync([], [cssScanner_1.TokenType.CurlyL]); // ignore all the rules
            return this._parseBody(node, this._parseStylesheetStatement.bind(this));
        }
        _parseContainerDeclaration(isNested = false) {
            if (isNested) {
                // if nested, the body can contain rulesets, but also declarations
                return this._tryParseRuleset(true) || this._tryToParseDeclaration() || this._parseStylesheetStatement(true);
            }
            return this._parseStylesheetStatement(false);
        }
        _parseContainer(isNested = false) {
            if (!this.peekKeyword('@container')) {
                return null;
            }
            const node = this.create(nodes.Container);
            this.consumeToken(); // @container
            node.addChild(this._parseIdent()); // optional container name
            if (node.addChild(this._parseContainerQuery())) {
                while (this.accept(cssScanner_1.TokenType.Comma)) {
                    if (this.peek(cssScanner_1.TokenType.CurlyL)) {
                        break;
                    }
                    node.addChild(this._parseIdent()); // optional container name
                    node.addChild(this._parseContainerQuery());
                }
            }
            return this._parseBody(node, this._parseContainerDeclaration.bind(this, isNested));
        }
        _parseContainerQuery() {
            // <container-query>     = not <query-in-parens>
            //                         | <query-in-parens> [ [ and <query-in-parens> ]* | [ or <query-in-parens> ]* ]
            const node = this.create(nodes.Node);
            if (this.acceptIdent('not')) {
                node.addChild(this._parseContainerQueryInParens());
            }
            else {
                node.addChild(this._parseContainerQueryInParens(true));
                if (this.peekIdent('and')) {
                    while (this.acceptIdent('and')) {
                        node.addChild(this._parseContainerQueryInParens());
                    }
                }
                else if (this.peekIdent('or')) {
                    while (this.acceptIdent('or')) {
                        node.addChild(this._parseContainerQueryInParens());
                    }
                }
            }
            return this.finish(node);
        }
        _parseContainerQueryInParens(optional = false) {
            // <query-in-parens>     = ( <container-query> )
            // 					  | ( <size-feature> )
            // 					  | style( <style-query> )
            // 					  | <general-enclosed>
            const node = this.create(nodes.Node);
            if (this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                if (this.peekIdent('not') || this.peek(cssScanner_1.TokenType.ParenthesisL)) {
                    node.addChild(this._parseContainerQuery());
                }
                else {
                    node.addChild(this._parseMediaFeature());
                }
                if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                    return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected, [], [cssScanner_1.TokenType.CurlyL]);
                }
            }
            else if (this.acceptIdent('style')) {
                if (this.hasWhitespace() || !this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                    return this.finish(node, cssErrors_1.ParseError.LeftParenthesisExpected, [], [cssScanner_1.TokenType.CurlyL]);
                }
                node.addChild(this._parseStyleQuery());
                if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                    return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected, [], [cssScanner_1.TokenType.CurlyL]);
                }
            }
            else {
                if (optional) {
                    return null;
                }
                return this.finish(node, cssErrors_1.ParseError.LeftParenthesisExpected, [], [cssScanner_1.TokenType.CurlyL]);
            }
            return this.finish(node);
        }
        _parseStyleQuery() {
            // <style-query>         = not <style-in-parens>
            // 					  | <style-in-parens> [ [ and <style-in-parens> ]* | [ or <style-in-parens> ]* ]
            // 					  | <style-feature>
            // <style-in-parens>     = ( <style-query> )
            // 					  | ( <style-feature> )
            // 					  | <general-enclosed>
            const node = this.create(nodes.Node);
            if (this.acceptIdent('not')) {
                node.addChild(this._parseStyleInParens());
            }
            else if (this.peek(cssScanner_1.TokenType.ParenthesisL)) {
                node.addChild(this._parseStyleInParens());
                if (this.peekIdent('and')) {
                    while (this.acceptIdent('and')) {
                        node.addChild(this._parseStyleInParens());
                    }
                }
                else if (this.peekIdent('or')) {
                    while (this.acceptIdent('or')) {
                        node.addChild(this._parseStyleInParens());
                    }
                }
            }
            else {
                node.addChild(this._parseDeclaration([cssScanner_1.TokenType.ParenthesisR], true));
            }
            return this.finish(node);
        }
        _parseStyleInParens() {
            const node = this.create(nodes.Node);
            if (this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                node.addChild(this._parseStyleQuery());
                if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                    return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected, [], [cssScanner_1.TokenType.CurlyL]);
                }
            }
            else {
                return this.finish(node, cssErrors_1.ParseError.LeftParenthesisExpected, [], [cssScanner_1.TokenType.CurlyL]);
            }
            return this.finish(node);
        }
        // https://www.w3.org/TR/css-syntax-3/#consume-an-at-rule
        _parseUnknownAtRule() {
            if (!this.peek(cssScanner_1.TokenType.AtKeyword)) {
                return null;
            }
            const node = this.create(nodes.UnknownAtRule);
            node.addChild(this._parseUnknownAtRuleName());
            const isTopLevel = () => curlyDepth === 0 && parensDepth === 0 && bracketsDepth === 0;
            let curlyLCount = 0;
            let curlyDepth = 0;
            let parensDepth = 0;
            let bracketsDepth = 0;
            done: while (true) {
                switch (this.token.type) {
                    case cssScanner_1.TokenType.SemiColon:
                        if (isTopLevel()) {
                            break done;
                        }
                        break;
                    case cssScanner_1.TokenType.EOF:
                        if (curlyDepth > 0) {
                            return this.finish(node, cssErrors_1.ParseError.RightCurlyExpected);
                        }
                        else if (bracketsDepth > 0) {
                            return this.finish(node, cssErrors_1.ParseError.RightSquareBracketExpected);
                        }
                        else if (parensDepth > 0) {
                            return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected);
                        }
                        else {
                            return this.finish(node);
                        }
                    case cssScanner_1.TokenType.CurlyL:
                        curlyLCount++;
                        curlyDepth++;
                        break;
                    case cssScanner_1.TokenType.CurlyR:
                        curlyDepth--;
                        // End of at-rule, consume CurlyR and return node
                        if (curlyLCount > 0 && curlyDepth === 0) {
                            this.consumeToken();
                            if (bracketsDepth > 0) {
                                return this.finish(node, cssErrors_1.ParseError.RightSquareBracketExpected);
                            }
                            else if (parensDepth > 0) {
                                return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected);
                            }
                            break done;
                        }
                        if (curlyDepth < 0) {
                            // The property value has been terminated without a semicolon, and
                            // this is the last declaration in the ruleset.
                            if (parensDepth === 0 && bracketsDepth === 0) {
                                break done;
                            }
                            return this.finish(node, cssErrors_1.ParseError.LeftCurlyExpected);
                        }
                        break;
                    case cssScanner_1.TokenType.ParenthesisL:
                        parensDepth++;
                        break;
                    case cssScanner_1.TokenType.ParenthesisR:
                        parensDepth--;
                        if (parensDepth < 0) {
                            return this.finish(node, cssErrors_1.ParseError.LeftParenthesisExpected);
                        }
                        break;
                    case cssScanner_1.TokenType.BracketL:
                        bracketsDepth++;
                        break;
                    case cssScanner_1.TokenType.BracketR:
                        bracketsDepth--;
                        if (bracketsDepth < 0) {
                            return this.finish(node, cssErrors_1.ParseError.LeftSquareBracketExpected);
                        }
                        break;
                }
                this.consumeToken();
            }
            return node;
        }
        _parseUnknownAtRuleName() {
            const node = this.create(nodes.Node);
            if (this.accept(cssScanner_1.TokenType.AtKeyword)) {
                return this.finish(node);
            }
            return node;
        }
        _parseOperator() {
            // these are operators for binary expressions
            if (this.peekDelim('/') ||
                this.peekDelim('*') ||
                this.peekDelim('+') ||
                this.peekDelim('-') ||
                this.peek(cssScanner_1.TokenType.Dashmatch) ||
                this.peek(cssScanner_1.TokenType.Includes) ||
                this.peek(cssScanner_1.TokenType.SubstringOperator) ||
                this.peek(cssScanner_1.TokenType.PrefixOperator) ||
                this.peek(cssScanner_1.TokenType.SuffixOperator) ||
                this.peekDelim('=')) { // doesn't stick to the standard here
                const node = this.createNode(nodes.NodeType.Operator);
                this.consumeToken();
                return this.finish(node);
            }
            else {
                return null;
            }
        }
        _parseUnaryOperator() {
            if (!this.peekDelim('+') && !this.peekDelim('-')) {
                return null;
            }
            const node = this.create(nodes.Node);
            this.consumeToken();
            return this.finish(node);
        }
        _parseCombinator() {
            if (this.peekDelim('>')) {
                const node = this.create(nodes.Node);
                this.consumeToken();
                const mark = this.mark();
                if (!this.hasWhitespace() && this.acceptDelim('>')) {
                    if (!this.hasWhitespace() && this.acceptDelim('>')) {
                        node.type = nodes.NodeType.SelectorCombinatorShadowPiercingDescendant;
                        return this.finish(node);
                    }
                    this.restoreAtMark(mark);
                }
                node.type = nodes.NodeType.SelectorCombinatorParent;
                return this.finish(node);
            }
            else if (this.peekDelim('+')) {
                const node = this.create(nodes.Node);
                this.consumeToken();
                node.type = nodes.NodeType.SelectorCombinatorSibling;
                return this.finish(node);
            }
            else if (this.peekDelim('~')) {
                const node = this.create(nodes.Node);
                this.consumeToken();
                node.type = nodes.NodeType.SelectorCombinatorAllSiblings;
                return this.finish(node);
            }
            else if (this.peekDelim('/')) {
                const node = this.create(nodes.Node);
                this.consumeToken();
                const mark = this.mark();
                if (!this.hasWhitespace() && this.acceptIdent('deep') && !this.hasWhitespace() && this.acceptDelim('/')) {
                    node.type = nodes.NodeType.SelectorCombinatorShadowPiercingDescendant;
                    return this.finish(node);
                }
                this.restoreAtMark(mark);
            }
            return null;
        }
        _parseSimpleSelector() {
            // simple_selector
            //  : element_name [ HASH | class | attrib | pseudo ]* | [ HASH | class | attrib | pseudo ]+ ;
            const node = this.create(nodes.SimpleSelector);
            let c = 0;
            if (node.addChild(this._parseElementName() || this._parseNestingSelector())) {
                c++;
            }
            while ((c === 0 || !this.hasWhitespace()) && node.addChild(this._parseSimpleSelectorBody())) {
                c++;
            }
            return c > 0 ? this.finish(node) : null;
        }
        _parseNestingSelector() {
            if (this.peekDelim('&')) {
                const node = this.createNode(nodes.NodeType.SelectorCombinator);
                this.consumeToken();
                return this.finish(node);
            }
            return null;
        }
        _parseSimpleSelectorBody() {
            return this._parsePseudo() || this._parseHash() || this._parseClass() || this._parseAttrib();
        }
        _parseSelectorIdent() {
            return this._parseIdent();
        }
        _parseHash() {
            if (!this.peek(cssScanner_1.TokenType.Hash) && !this.peekDelim('#')) {
                return null;
            }
            const node = this.createNode(nodes.NodeType.IdentifierSelector);
            if (this.acceptDelim('#')) {
                if (this.hasWhitespace() || !node.addChild(this._parseSelectorIdent())) {
                    return this.finish(node, cssErrors_1.ParseError.IdentifierExpected);
                }
            }
            else {
                this.consumeToken(); // TokenType.Hash
            }
            return this.finish(node);
        }
        _parseClass() {
            // class: '.' IDENT ;
            if (!this.peekDelim('.')) {
                return null;
            }
            const node = this.createNode(nodes.NodeType.ClassSelector);
            this.consumeToken(); // '.'
            if (this.hasWhitespace() || !node.addChild(this._parseSelectorIdent())) {
                return this.finish(node, cssErrors_1.ParseError.IdentifierExpected);
            }
            return this.finish(node);
        }
        _parseElementName() {
            // element_name: (ns? '|')? IDENT | '*';
            const pos = this.mark();
            const node = this.createNode(nodes.NodeType.ElementNameSelector);
            node.addChild(this._parseNamespacePrefix());
            if (!node.addChild(this._parseSelectorIdent()) && !this.acceptDelim('*')) {
                this.restoreAtMark(pos);
                return null;
            }
            return this.finish(node);
        }
        _parseNamespacePrefix() {
            const pos = this.mark();
            const node = this.createNode(nodes.NodeType.NamespacePrefix);
            if (!node.addChild(this._parseIdent()) && !this.acceptDelim('*')) {
                // ns is optional
            }
            if (!this.acceptDelim('|')) {
                this.restoreAtMark(pos);
                return null;
            }
            return this.finish(node);
        }
        _parseAttrib() {
            // attrib : '[' S* IDENT S* [ [ '=' | INCLUDES | DASHMATCH ] S*   [ IDENT | STRING ] S* ]? ']'
            if (!this.peek(cssScanner_1.TokenType.BracketL)) {
                return null;
            }
            const node = this.create(nodes.AttributeSelector);
            this.consumeToken(); // BracketL
            // Optional attrib namespace
            node.setNamespacePrefix(this._parseNamespacePrefix());
            if (!node.setIdentifier(this._parseIdent())) {
                return this.finish(node, cssErrors_1.ParseError.IdentifierExpected);
            }
            if (node.setOperator(this._parseOperator())) {
                node.setValue(this._parseBinaryExpr());
                this.acceptIdent('i'); // case insensitive matching
                this.acceptIdent('s'); // case sensitive matching
            }
            if (!this.accept(cssScanner_1.TokenType.BracketR)) {
                return this.finish(node, cssErrors_1.ParseError.RightSquareBracketExpected);
            }
            return this.finish(node);
        }
        _parsePseudo() {
            // pseudo: ':' [ IDENT | FUNCTION S* [IDENT S*]? ')' ]
            const node = this._tryParsePseudoIdentifier();
            if (node) {
                if (!this.hasWhitespace() && this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                    const tryAsSelector = () => {
                        const selectors = this.createNode(nodes.NodeType.SelectorList);
                        if (!selectors.addChild(this._parseSelector(true))) {
                            return null;
                        }
                        while (this.accept(cssScanner_1.TokenType.Comma) && selectors.addChild(this._parseSelector(true))) {
                            // loop
                        }
                        if (this.peek(cssScanner_1.TokenType.ParenthesisR)) {
                            return this.finish(selectors);
                        }
                        return null;
                    };
                    let hasSelector = node.addChild(this.try(tryAsSelector));
                    if (!hasSelector) {
                        // accept the <an+b> syntax (not a proper expression) https://drafts.csswg.org/css-syntax/#anb
                        while (!this.peekIdent('of') && (node.addChild(this._parseTerm()) || node.addChild(this._parseOperator()))) {
                            // loop
                        }
                        if (this.acceptIdent('of') &&
                            !node.addChild(this.try(tryAsSelector))) {
                            return this.finish(node, cssErrors_1.ParseError.SelectorExpected);
                        }
                    }
                    if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                        return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected);
                    }
                }
                return this.finish(node);
            }
            return null;
        }
        _tryParsePseudoIdentifier() {
            if (!this.peek(cssScanner_1.TokenType.Colon)) {
                return null;
            }
            const pos = this.mark();
            const node = this.createNode(nodes.NodeType.PseudoSelector);
            this.consumeToken(); // Colon
            if (this.hasWhitespace()) {
                this.restoreAtMark(pos);
                return null;
            }
            // optional, support ::
            this.accept(cssScanner_1.TokenType.Colon);
            if (this.hasWhitespace() || !node.addChild(this._parseIdent())) {
                return this.finish(node, cssErrors_1.ParseError.IdentifierExpected);
            }
            return this.finish(node);
        }
        _tryParsePrio() {
            const mark = this.mark();
            const prio = this._parsePrio();
            if (prio) {
                return prio;
            }
            this.restoreAtMark(mark);
            return null;
        }
        _parsePrio() {
            if (!this.peek(cssScanner_1.TokenType.Exclamation)) {
                return null;
            }
            const node = this.createNode(nodes.NodeType.Prio);
            if (this.accept(cssScanner_1.TokenType.Exclamation) && this.acceptIdent('important')) {
                return this.finish(node);
            }
            return null;
        }
        _parseExpr(stopOnComma = false) {
            const node = this.create(nodes.Expression);
            if (!node.addChild(this._parseBinaryExpr())) {
                return null;
            }
            while (true) {
                if (this.peek(cssScanner_1.TokenType.Comma)) { // optional
                    if (stopOnComma) {
                        return this.finish(node);
                    }
                    this.consumeToken();
                }
                if (!node.addChild(this._parseBinaryExpr())) {
                    break;
                }
            }
            return this.finish(node);
        }
        _parseUnicodeRange() {
            if (!this.peekIdent('u')) {
                return null;
            }
            const node = this.create(nodes.UnicodeRange);
            if (!this.acceptUnicodeRange()) {
                return null;
            }
            return this.finish(node);
        }
        _parseNamedLine() {
            // https://www.w3.org/TR/css-grid-1/#named-lines
            if (!this.peek(cssScanner_1.TokenType.BracketL)) {
                return null;
            }
            const node = this.createNode(nodes.NodeType.GridLine);
            this.consumeToken();
            while (node.addChild(this._parseIdent())) {
                // repeat
            }
            if (!this.accept(cssScanner_1.TokenType.BracketR)) {
                return this.finish(node, cssErrors_1.ParseError.RightSquareBracketExpected);
            }
            return this.finish(node);
        }
        _parseBinaryExpr(preparsedLeft, preparsedOper) {
            let node = this.create(nodes.BinaryExpression);
            if (!node.setLeft((preparsedLeft || this._parseTerm()))) {
                return null;
            }
            if (!node.setOperator(preparsedOper || this._parseOperator())) {
                return this.finish(node);
            }
            if (!node.setRight(this._parseTerm())) {
                return this.finish(node, cssErrors_1.ParseError.TermExpected);
            }
            // things needed for multiple binary expressions
            node = this.finish(node);
            const operator = this._parseOperator();
            if (operator) {
                node = this._parseBinaryExpr(node, operator);
            }
            return this.finish(node);
        }
        _parseTerm() {
            let node = this.create(nodes.Term);
            node.setOperator(this._parseUnaryOperator()); // optional
            if (node.setExpression(this._parseTermExpression())) {
                return this.finish(node);
            }
            return null;
        }
        _parseTermExpression() {
            return this._parseURILiteral() || // url before function
                this._parseUnicodeRange() ||
                this._parseFunction() || // function before ident
                this._parseIdent() ||
                this._parseStringLiteral() ||
                this._parseNumeric() ||
                this._parseHexColor() ||
                this._parseOperation() ||
                this._parseNamedLine();
        }
        _parseOperation() {
            if (!this.peek(cssScanner_1.TokenType.ParenthesisL)) {
                return null;
            }
            const node = this.create(nodes.Node);
            this.consumeToken(); // ParenthesisL
            node.addChild(this._parseExpr());
            if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected);
            }
            return this.finish(node);
        }
        _parseNumeric() {
            if (this.peek(cssScanner_1.TokenType.Num) ||
                this.peek(cssScanner_1.TokenType.Percentage) ||
                this.peek(cssScanner_1.TokenType.Resolution) ||
                this.peek(cssScanner_1.TokenType.Length) ||
                this.peek(cssScanner_1.TokenType.EMS) ||
                this.peek(cssScanner_1.TokenType.EXS) ||
                this.peek(cssScanner_1.TokenType.Angle) ||
                this.peek(cssScanner_1.TokenType.Time) ||
                this.peek(cssScanner_1.TokenType.Dimension) ||
                this.peek(cssScanner_1.TokenType.ContainerQueryLength) ||
                this.peek(cssScanner_1.TokenType.Freq)) {
                const node = this.create(nodes.NumericValue);
                this.consumeToken();
                return this.finish(node);
            }
            return null;
        }
        _parseStringLiteral() {
            if (!this.peek(cssScanner_1.TokenType.String) && !this.peek(cssScanner_1.TokenType.BadString)) {
                return null;
            }
            const node = this.createNode(nodes.NodeType.StringLiteral);
            this.consumeToken();
            return this.finish(node);
        }
        _parseURILiteral() {
            if (!this.peekRegExp(cssScanner_1.TokenType.Ident, /^url(-prefix)?$/i)) {
                return null;
            }
            const pos = this.mark();
            const node = this.createNode(nodes.NodeType.URILiteral);
            this.accept(cssScanner_1.TokenType.Ident);
            if (this.hasWhitespace() || !this.peek(cssScanner_1.TokenType.ParenthesisL)) {
                this.restoreAtMark(pos);
                return null;
            }
            this.scanner.inURL = true;
            this.consumeToken(); // consume ()
            node.addChild(this._parseURLArgument()); // argument is optional
            this.scanner.inURL = false;
            if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected);
            }
            return this.finish(node);
        }
        _parseURLArgument() {
            const node = this.create(nodes.Node);
            if (!this.accept(cssScanner_1.TokenType.String) && !this.accept(cssScanner_1.TokenType.BadString) && !this.acceptUnquotedString()) {
                return null;
            }
            return this.finish(node);
        }
        _parseIdent(referenceTypes) {
            if (!this.peek(cssScanner_1.TokenType.Ident)) {
                return null;
            }
            const node = this.create(nodes.Identifier);
            if (referenceTypes) {
                node.referenceTypes = referenceTypes;
            }
            node.isCustomProperty = this.peekRegExp(cssScanner_1.TokenType.Ident, /^--/);
            this.consumeToken();
            return this.finish(node);
        }
        _parseFunction() {
            const pos = this.mark();
            const node = this.create(nodes.Function);
            let parseArgument = this._parseFunctionArgument.bind(this);
            let separator = cssScanner_1.TokenType.Comma;
            if (this.peekIdent("if")) {
                parseArgument = this._parseIfBranch.bind(this);
                separator = cssScanner_1.TokenType.SemiColon;
            }
            if (!node.setIdentifier(this._parseFunctionIdentifier())) {
                return null;
            }
            if (this.hasWhitespace() || !this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                this.restoreAtMark(pos);
                return null;
            }
            if (node.getArguments().addChild(parseArgument())) {
                while (this.accept(separator)) {
                    if (this.peek(cssScanner_1.TokenType.ParenthesisR)) {
                        break;
                    }
                    if (!node.getArguments().addChild(parseArgument())) {
                        this.markError(node, cssErrors_1.ParseError.ExpressionExpected);
                    }
                }
            }
            if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected);
            }
            return this.finish(node);
        }
        _parseFunctionIdentifier() {
            if (!this.peek(cssScanner_1.TokenType.Ident)) {
                return null;
            }
            const node = this.create(nodes.Identifier);
            node.referenceTypes = [nodes.ReferenceType.Function];
            if (this.acceptIdent('progid')) {
                // support for IE7 specific filters: 'progid:DXImageTransform.Microsoft.MotionBlur(strength=13, direction=310)'
                if (this.accept(cssScanner_1.TokenType.Colon)) {
                    while (this.accept(cssScanner_1.TokenType.Ident) && this.acceptDelim('.')) {
                        // loop
                    }
                }
                return this.finish(node);
            }
            this.consumeToken();
            return this.finish(node);
        }
        _parseFunctionArgument() {
            const node = this.create(nodes.FunctionArgument);
            if (node.setValue(this._parseExpr(true))) {
                return this.finish(node);
            }
            return null;
        }
        _parseIfBranch() {
            // <if-branch> = <if-condition> : <declaration-value>?
            const node = this.create(nodes.Node);
            if (!node.addChild(this._parseIfCondition())) {
                return this.finish(node, cssErrors_1.ParseError.IfConditionExpected, [], [cssScanner_1.TokenType.SemiColon]);
            }
            if (!this.accept(cssScanner_1.TokenType.Colon)) {
                return this.finish(node, cssErrors_1.ParseError.ColonExpected, [], [cssScanner_1.TokenType.SemiColon]);
            }
            node.addChild(this._parseExpr());
            return this.finish(node);
        }
        _parseIfCondition() {
            // <if-condition> = <boolean-expr[ <if-test> ]> | else
            const node = this.create(nodes.Node);
            if (this.peekIdent("else")) {
                node.addChild(this._parseIdent());
                return this.finish(node);
            }
            return this._parseBooleanExpression(this._parseIfTest.bind(this));
        }
        _parseIfTest() {
            // <if-test> =
            // 	supports( [ <ident> : <declaration-value> ] | <supports-condition> ) |
            // 	media( <media-feature> | <media-condition> ) |
            // 	style( <style-query> )
            const node = this.create(nodes.Node);
            if (this.acceptIdent('supports')) {
                if (this.hasWhitespace() || !this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                    return this.finish(node, cssErrors_1.ParseError.LeftParenthesisExpected, [], [cssScanner_1.TokenType.Colon]);
                }
                node.addChild(this._tryToParseDeclaration() || this._parseSupportsCondition());
                if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                    return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected, [], [cssScanner_1.TokenType.Colon]);
                }
                return this.finish(node);
            }
            if (this.acceptIdent('media')) {
                if (this.hasWhitespace() || !this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                    return this.finish(node, cssErrors_1.ParseError.LeftParenthesisExpected, [], [cssScanner_1.TokenType.Colon]);
                }
                const pos = this.mark();
                const condition = this._parseMediaCondition();
                if (condition && !condition.isErroneous()) {
                    node.addChild(condition);
                }
                else {
                    this.restoreAtMark(pos);
                    node.addChild(this._parseMediaFeature());
                }
                if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                    return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected, [], [cssScanner_1.TokenType.Colon]);
                }
                return this.finish(node);
            }
            if (this.acceptIdent('style')) {
                if (this.hasWhitespace() || !this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                    return this.finish(node, cssErrors_1.ParseError.LeftParenthesisExpected, [], [cssScanner_1.TokenType.Colon]);
                }
                node.addChild(this._parseStyleQuery());
                if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                    return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected, [], [cssScanner_1.TokenType.Colon]);
                }
                return this.finish(node);
            }
            return null;
        }
        _parseHexColor() {
            if (this.peekRegExp(cssScanner_1.TokenType.Hash, /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{4}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/g)) {
                const node = this.create(nodes.HexColorValue);
                this.consumeToken();
                return this.finish(node);
            }
            else {
                return null;
            }
        }
    }
    exports.Parser = Parser;
});
