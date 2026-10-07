import { Scanner, TokenType } from './cssScanner.js';
import { NodeType, Node, Nodelist, Marker, Level, Stylesheet, RuleSet, Declarations, Selector, Declaration, CustomPropertyDeclaration, CustomPropertySet, Property, Import, Namespace, FontFace, ViewPort, Keyframe, ReferenceType, KeyframeSelector, PropertyAtRule, Layer, Supports, SupportsCondition, Media, Medialist, MediaQuery, RatioValue, MediaCondition, MediaFeature, Page, PageBoxMarginBox, Document, Container, UnknownAtRule, SimpleSelector, AttributeSelector, Expression, UnicodeRange, BinaryExpression, Term, NumericValue, Identifier, Function, FunctionArgument, HexColorValue } from './cssNodes.js';
import { ParseError } from './cssErrors.js';
import '../cssLanguageTypes.js';
import '../languageFacts/colors.js';
import { pageBoxDirectives } from '../languageFacts/builtinData.js';
import { isDefined } from '../utils/objects.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/// <summary>
/// A parser for the css core specification. See for reference:
/// https://www.w3.org/TR/CSS21/grammar.html
/// http://www.w3.org/TR/CSS21/syndata.html#tokenization
/// </summary>
class Parser {
    constructor(scnr = new Scanner()) {
        this.keyframeRegex = /^@(\-(webkit|ms|moz|o)\-)?keyframes$/i;
        this.scanner = scnr;
        this.token = { type: TokenType.EOF, offset: -1, len: 0, text: '' };
        this.prevToken = undefined;
    }
    peekIdent(text) {
        return TokenType.Ident === this.token.type && text.length === this.token.text.length && text === this.token.text.toLowerCase();
    }
    peekKeyword(text) {
        return TokenType.AtKeyword === this.token.type && text.length === this.token.text.length && text === this.token.text.toLowerCase();
    }
    peekDelim(text) {
        return TokenType.Delim === this.token.type && text === this.token.text;
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
        if (TokenType.AtKeyword === this.token.type) {
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
        let node = this.createNode(NodeType.Identifier);
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
                if (this.token.type === TokenType.EOF) {
                    return false;
                }
                this.token = this.scanner.scan();
            }
        }
    }
    createNode(nodeType) {
        return new Node(this.token.offset, this.token.len, nodeType);
    }
    create(ctor) {
        return new ctor(this.token.offset, this.token.len);
    }
    finish(node, error, resyncTokens, resyncStopTokens) {
        // parseNumeric misuses error for boolean flagging (however the real error mustn't be a false)
        // + nodelist offsets mustn't be modified, because there is a offset hack in rulesets for smartselection
        if (!(node instanceof Nodelist)) {
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
            node.addIssue(new Marker(node, error, Level.Error, undefined, this.token.offset, this.token.len));
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
        const node = this.create(Stylesheet);
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
                    if (!this.peek(TokenType.EOF) && this._needsSemicolonAfter(statement) && !this.accept(TokenType.SemiColon)) {
                        this.markError(node, ParseError.SemiColonExpected);
                    }
                }
                while (this.accept(TokenType.SemiColon) || this.accept(TokenType.CDO) || this.accept(TokenType.CDC)) {
                    // accept empty statements
                    hasMatch = true;
                    inRecovery = false;
                }
            } while (hasMatch);
            if (this.peek(TokenType.EOF)) {
                break;
            }
            if (!inRecovery) {
                if (this.peek(TokenType.AtKeyword)) {
                    this.markError(node, ParseError.UnknownAtRule);
                }
                else {
                    this.markError(node, ParseError.RuleOrSelectorExpected);
                }
                inRecovery = true;
            }
            this.consumeToken();
        } while (!this.peek(TokenType.EOF));
        return this.finish(node);
    }
    _parseStylesheetStart() {
        return this._parseCharset();
    }
    _parseStylesheetStatement(isNested = false) {
        if (this.peek(TokenType.AtKeyword)) {
            return this._parseStylesheetAtStatement(isNested);
        }
        return this._parseRuleset(isNested);
    }
    _parseStylesheetAtStatement(isNested = false) {
        return this._parseImport()
            || this._parseMedia(isNested)
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
            || this._parseUnknownAtRule();
    }
    _tryParseRuleset(isNested) {
        const mark = this.mark();
        if (this._parseSelector(isNested)) {
            while (this.accept(TokenType.Comma) && this._parseSelector(isNested)) {
                // loop
            }
            if (this.accept(TokenType.CurlyL)) {
                this.restoreAtMark(mark);
                return this._parseRuleset(isNested);
            }
        }
        this.restoreAtMark(mark);
        return null;
    }
    _parseRuleset(isNested = false) {
        const node = this.create(RuleSet);
        const selectors = node.getSelectors();
        if (!selectors.addChild(this._parseSelector(isNested))) {
            return null;
        }
        while (this.accept(TokenType.Comma)) {
            if (!selectors.addChild(this._parseSelector(isNested))) {
                return this.finish(node, ParseError.SelectorExpected);
            }
        }
        return this._parseBody(node, this._parseRuleSetDeclaration.bind(this));
    }
    _parseRuleSetDeclarationAtStatement() {
        return this._parseMedia(true)
            || this._parseSupports(true)
            || this._parseLayer(true)
            || this._parseContainer(true)
            || this._parseUnknownAtRule();
    }
    _parseRuleSetDeclaration() {
        // https://www.w3.org/TR/css-syntax-3/#consume-a-list-of-declarations
        if (this.peek(TokenType.AtKeyword)) {
            return this._parseRuleSetDeclarationAtStatement();
        }
        if (!this.peek(TokenType.Ident)) {
            return this._parseRuleset(true);
        }
        return this._tryParseRuleset(true) || this._parseDeclaration();
    }
    _needsSemicolonAfter(node) {
        switch (node.type) {
            case NodeType.Keyframe:
            case NodeType.ViewPort:
            case NodeType.Media:
            case NodeType.Ruleset:
            case NodeType.Namespace:
            case NodeType.If:
            case NodeType.For:
            case NodeType.Each:
            case NodeType.While:
            case NodeType.MixinDeclaration:
            case NodeType.FunctionDeclaration:
            case NodeType.MixinContentDeclaration:
                return false;
            case NodeType.ExtendsReference:
            case NodeType.MixinContentReference:
            case NodeType.ReturnStatement:
            case NodeType.MediaQuery:
            case NodeType.Debug:
            case NodeType.Import:
            case NodeType.AtApplyRule:
            case NodeType.CustomPropertyDeclaration:
                return true;
            case NodeType.VariableDeclaration:
                return node.needsSemicolon;
            case NodeType.MixinReference:
                return !node.getContent();
            case NodeType.Declaration:
                return !node.getNestedProperties();
        }
        return false;
    }
    _parseDeclarations(parseDeclaration) {
        const node = this.create(Declarations);
        if (!this.accept(TokenType.CurlyL)) {
            return null;
        }
        let decl = parseDeclaration();
        while (node.addChild(decl)) {
            if (this.peek(TokenType.CurlyR)) {
                break;
            }
            if (this._needsSemicolonAfter(decl) && !this.accept(TokenType.SemiColon)) {
                return this.finish(node, ParseError.SemiColonExpected, [TokenType.SemiColon, TokenType.CurlyR]);
            }
            // We accepted semicolon token. Link it to declaration.
            if (decl && this.prevToken && this.prevToken.type === TokenType.SemiColon) {
                decl.semicolonPosition = this.prevToken.offset;
            }
            while (this.accept(TokenType.SemiColon)) {
                // accept empty statements
            }
            decl = parseDeclaration();
        }
        if (!this.accept(TokenType.CurlyR)) {
            return this.finish(node, ParseError.RightCurlyExpected, [TokenType.CurlyR, TokenType.SemiColon]);
        }
        return this.finish(node);
    }
    _parseBody(node, parseDeclaration) {
        if (!node.setDeclarations(this._parseDeclarations(parseDeclaration))) {
            return this.finish(node, ParseError.LeftCurlyExpected, [TokenType.CurlyR, TokenType.SemiColon]);
        }
        return this.finish(node);
    }
    _parseSelector(isNested) {
        const node = this.create(Selector);
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
    _parseDeclaration(stopTokens) {
        const customProperty = this._tryParseCustomPropertyDeclaration(stopTokens);
        if (customProperty) {
            return customProperty;
        }
        const node = this.create(Declaration);
        if (!node.setProperty(this._parseProperty())) {
            return null;
        }
        if (!this.accept(TokenType.Colon)) {
            return this.finish(node, ParseError.ColonExpected, [TokenType.Colon], stopTokens || [TokenType.SemiColon]);
        }
        if (this.prevToken) {
            node.colonPosition = this.prevToken.offset;
        }
        if (!node.setValue(this._parseExpr())) {
            return this.finish(node, ParseError.PropertyValueExpected);
        }
        node.addChild(this._parsePrio());
        if (this.peek(TokenType.SemiColon)) {
            node.semicolonPosition = this.token.offset; // not part of the declaration, but useful information for code assist
        }
        return this.finish(node);
    }
    _tryParseCustomPropertyDeclaration(stopTokens) {
        if (!this.peekRegExp(TokenType.Ident, /^--/)) {
            return null;
        }
        const node = this.create(CustomPropertyDeclaration);
        if (!node.setProperty(this._parseProperty())) {
            return null;
        }
        if (!this.accept(TokenType.Colon)) {
            return this.finish(node, ParseError.ColonExpected, [TokenType.Colon]);
        }
        if (this.prevToken) {
            node.colonPosition = this.prevToken.offset;
        }
        const mark = this.mark();
        if (this.peek(TokenType.CurlyL)) {
            // try to parse it as nested declaration
            const propertySet = this.create(CustomPropertySet);
            const declarations = this._parseDeclarations(this._parseRuleSetDeclaration.bind(this));
            if (propertySet.setDeclarations(declarations) && !declarations.isErroneous(true)) {
                propertySet.addChild(this._parsePrio());
                if (this.peek(TokenType.SemiColon)) {
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
            if (this.peekOne(...(stopTokens || []), TokenType.SemiColon, TokenType.EOF)) {
                node.setValue(expression);
                if (this.peek(TokenType.SemiColon)) {
                    node.semicolonPosition = this.token.offset; // not part of the declaration, but useful information for code assist
                }
                return this.finish(node);
            }
        }
        this.restoreAtMark(mark);
        node.addChild(this._parseCustomPropertyValue(stopTokens));
        node.addChild(this._parsePrio());
        if (isDefined(node.colonPosition) && this.token.offset === node.colonPosition + 1) {
            return this.finish(node, ParseError.PropertyValueExpected);
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
    _parseCustomPropertyValue(stopTokens = [TokenType.CurlyR]) {
        const node = this.create(Node);
        const isTopLevel = () => curlyDepth === 0 && parensDepth === 0 && bracketsDepth === 0;
        const onStopToken = () => stopTokens.indexOf(this.token.type) !== -1;
        let curlyDepth = 0;
        let parensDepth = 0;
        let bracketsDepth = 0;
        done: while (true) {
            switch (this.token.type) {
                case TokenType.SemiColon:
                    // A semicolon only ends things if we're not inside a delimitor.
                    if (isTopLevel()) {
                        break done;
                    }
                    break;
                case TokenType.Exclamation:
                    // An exclamation ends the value if we're not inside delims.
                    if (isTopLevel()) {
                        break done;
                    }
                    break;
                case TokenType.CurlyL:
                    curlyDepth++;
                    break;
                case TokenType.CurlyR:
                    curlyDepth--;
                    if (curlyDepth < 0) {
                        // The property value has been terminated without a semicolon, and
                        // this is the last declaration in the ruleset.
                        if (onStopToken() && parensDepth === 0 && bracketsDepth === 0) {
                            break done;
                        }
                        return this.finish(node, ParseError.LeftCurlyExpected);
                    }
                    break;
                case TokenType.ParenthesisL:
                    parensDepth++;
                    break;
                case TokenType.ParenthesisR:
                    parensDepth--;
                    if (parensDepth < 0) {
                        if (onStopToken() && bracketsDepth === 0 && curlyDepth === 0) {
                            break done;
                        }
                        return this.finish(node, ParseError.LeftParenthesisExpected);
                    }
                    break;
                case TokenType.BracketL:
                    bracketsDepth++;
                    break;
                case TokenType.BracketR:
                    bracketsDepth--;
                    if (bracketsDepth < 0) {
                        return this.finish(node, ParseError.LeftSquareBracketExpected);
                    }
                    break;
                case TokenType.BadString: // fall through
                    break done;
                case TokenType.EOF:
                    // We shouldn't have reached the end of input, something is
                    // unterminated.
                    let error = ParseError.RightCurlyExpected;
                    if (bracketsDepth > 0) {
                        error = ParseError.RightSquareBracketExpected;
                    }
                    else if (parensDepth > 0) {
                        error = ParseError.RightParenthesisExpected;
                    }
                    return this.finish(node, error);
            }
            this.consumeToken();
        }
        return this.finish(node);
    }
    _tryToParseDeclaration(stopTokens) {
        const mark = this.mark();
        if (this._parseProperty() && this.accept(TokenType.Colon)) {
            // looks like a declaration, go ahead
            this.restoreAtMark(mark);
            return this._parseDeclaration(stopTokens);
        }
        this.restoreAtMark(mark);
        return null;
    }
    _parseProperty() {
        const node = this.create(Property);
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
        if (!this.peek(TokenType.Charset)) {
            return null;
        }
        const node = this.create(Node);
        this.consumeToken(); // charset
        if (!this.accept(TokenType.String)) {
            return this.finish(node, ParseError.IdentifierExpected);
        }
        if (!this.accept(TokenType.SemiColon)) {
            return this.finish(node, ParseError.SemiColonExpected);
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
        const node = this.create(Import);
        this.consumeToken(); // @import
        if (!node.addChild(this._parseURILiteral()) && !node.addChild(this._parseStringLiteral())) {
            return this.finish(node, ParseError.URIOrStringExpected);
        }
        return this._completeParseImport(node);
    }
    _completeParseImport(node) {
        if (this.acceptIdent('layer')) {
            if (this.accept(TokenType.ParenthesisL)) {
                if (!node.addChild(this._parseLayerName())) {
                    return this.finish(node, ParseError.IdentifierExpected, [TokenType.SemiColon]);
                }
                if (!this.accept(TokenType.ParenthesisR)) {
                    return this.finish(node, ParseError.RightParenthesisExpected, [TokenType.ParenthesisR], []);
                }
            }
        }
        if (this.acceptIdent('supports')) {
            if (this.accept(TokenType.ParenthesisL)) {
                node.addChild(this._tryToParseDeclaration() || this._parseSupportsCondition());
                if (!this.accept(TokenType.ParenthesisR)) {
                    return this.finish(node, ParseError.RightParenthesisExpected, [TokenType.ParenthesisR], []);
                }
            }
        }
        if (!this.peek(TokenType.SemiColon) && !this.peek(TokenType.EOF)) {
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
        const node = this.create(Namespace);
        this.consumeToken(); // @namespace
        if (!node.addChild(this._parseURILiteral())) { // url literal also starts with ident
            node.addChild(this._parseIdent()); // optional prefix
            if (!node.addChild(this._parseURILiteral()) && !node.addChild(this._parseStringLiteral())) {
                return this.finish(node, ParseError.URIExpected, [TokenType.SemiColon]);
            }
        }
        if (!this.accept(TokenType.SemiColon)) {
            return this.finish(node, ParseError.SemiColonExpected);
        }
        return this.finish(node);
    }
    _parseFontFace() {
        if (!this.peekKeyword('@font-face')) {
            return null;
        }
        const node = this.create(FontFace);
        this.consumeToken(); // @font-face
        return this._parseBody(node, this._parseRuleSetDeclaration.bind(this));
    }
    _parseViewPort() {
        if (!this.peekKeyword('@-ms-viewport') &&
            !this.peekKeyword('@-o-viewport') &&
            !this.peekKeyword('@viewport')) {
            return null;
        }
        const node = this.create(ViewPort);
        this.consumeToken(); // @-ms-viewport
        return this._parseBody(node, this._parseRuleSetDeclaration.bind(this));
    }
    _parseKeyframe() {
        if (!this.peekRegExp(TokenType.AtKeyword, this.keyframeRegex)) {
            return null;
        }
        const node = this.create(Keyframe);
        const atNode = this.create(Node);
        this.consumeToken(); // atkeyword
        node.setKeyword(this.finish(atNode));
        if (atNode.matches('@-ms-keyframes')) { // -ms-keyframes never existed
            this.markError(atNode, ParseError.UnknownKeyword);
        }
        if (!node.setIdentifier(this._parseKeyframeIdent())) {
            return this.finish(node, ParseError.IdentifierExpected, [TokenType.CurlyR]);
        }
        return this._parseBody(node, this._parseKeyframeSelector.bind(this));
    }
    _parseKeyframeIdent() {
        return this._parseIdent([ReferenceType.Keyframe]);
    }
    _parseKeyframeSelector() {
        const node = this.create(KeyframeSelector);
        let hasContent = false;
        if (node.addChild(this._parseIdent())) {
            hasContent = true;
        }
        if (this.accept(TokenType.Percentage)) {
            hasContent = true;
        }
        if (!hasContent) {
            return null;
        }
        while (this.accept(TokenType.Comma)) {
            hasContent = false;
            if (node.addChild(this._parseIdent())) {
                hasContent = true;
            }
            if (this.accept(TokenType.Percentage)) {
                hasContent = true;
            }
            if (!hasContent) {
                return this.finish(node, ParseError.PercentageExpected);
            }
        }
        return this._parseBody(node, this._parseRuleSetDeclaration.bind(this));
    }
    _tryParseKeyframeSelector() {
        const node = this.create(KeyframeSelector);
        const pos = this.mark();
        let hasContent = false;
        if (node.addChild(this._parseIdent())) {
            hasContent = true;
        }
        if (this.accept(TokenType.Percentage)) {
            hasContent = true;
        }
        if (!hasContent) {
            return null;
        }
        while (this.accept(TokenType.Comma)) {
            hasContent = false;
            if (node.addChild(this._parseIdent())) {
                hasContent = true;
            }
            if (this.accept(TokenType.Percentage)) {
                hasContent = true;
            }
            if (!hasContent) {
                this.restoreAtMark(pos);
                return null;
            }
        }
        if (!this.peek(TokenType.CurlyL)) {
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
        const node = this.create(PropertyAtRule);
        this.consumeToken(); // @layer
        if (!this.peekRegExp(TokenType.Ident, /^--/) || !node.setName(this._parseIdent([ReferenceType.Property]))) {
            return this.finish(node, ParseError.IdentifierExpected);
        }
        return this._parseBody(node, this._parseDeclaration.bind(this));
    }
    _parseLayer(isNested = false) {
        // @layer layer-name {rules}
        // @layer layer-name;
        // @layer layer-name, layer-name, layer-name;
        // @layer {rules}
        if (!this.peekKeyword('@layer')) {
            return null;
        }
        const node = this.create(Layer);
        this.consumeToken(); // @layer
        const names = this._parseLayerNameList();
        if (names) {
            node.setNames(names);
        }
        if ((!names || names.getChildren().length === 1) && this.peek(TokenType.CurlyL)) {
            return this._parseBody(node, this._parseLayerDeclaration.bind(this, isNested));
        }
        if (!this.accept(TokenType.SemiColon)) {
            return this.finish(node, ParseError.SemiColonExpected);
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
        const node = this.createNode(NodeType.LayerNameList);
        if (!node.addChild(this._parseLayerName())) {
            return null;
        }
        while (this.accept(TokenType.Comma)) {
            if (!node.addChild(this._parseLayerName())) {
                return this.finish(node, ParseError.IdentifierExpected);
            }
        }
        return this.finish(node);
    }
    _parseLayerName() {
        // <layer-name> = <ident> [ '.' <ident> ]*
        const node = this.createNode(NodeType.LayerName);
        if (!node.addChild(this._parseIdent())) {
            return null;
        }
        while (!this.hasWhitespace() && this.acceptDelim('.')) {
            if (this.hasWhitespace() || !node.addChild(this._parseIdent())) {
                return this.finish(node, ParseError.IdentifierExpected);
            }
        }
        return this.finish(node);
    }
    _parseSupports(isNested = false) {
        // SUPPORTS_SYM S* supports_condition '{' S* ruleset* '}' S*
        if (!this.peekKeyword('@supports')) {
            return null;
        }
        const node = this.create(Supports);
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
        const node = this.create(SupportsCondition);
        if (this.acceptIdent('not')) {
            node.addChild(this._parseSupportsConditionInParens());
        }
        else {
            node.addChild(this._parseSupportsConditionInParens());
            if (this.peekRegExp(TokenType.Ident, /^(and|or)$/i)) {
                const text = this.token.text.toLowerCase();
                while (this.acceptIdent(text)) {
                    node.addChild(this._parseSupportsConditionInParens());
                }
            }
        }
        return this.finish(node);
    }
    _parseSupportsConditionInParens() {
        const node = this.create(SupportsCondition);
        if (this.accept(TokenType.ParenthesisL)) {
            if (this.prevToken) {
                node.lParent = this.prevToken.offset;
            }
            if (!node.addChild(this._tryToParseDeclaration([TokenType.ParenthesisR]))) {
                if (!this._parseSupportsCondition()) {
                    return this.finish(node, ParseError.ConditionExpected);
                }
            }
            if (!this.accept(TokenType.ParenthesisR)) {
                return this.finish(node, ParseError.RightParenthesisExpected, [TokenType.ParenthesisR], []);
            }
            if (this.prevToken) {
                node.rParent = this.prevToken.offset;
            }
            return this.finish(node);
        }
        else if (this.peek(TokenType.Ident)) {
            const pos = this.mark();
            this.consumeToken();
            if (!this.hasWhitespace() && this.accept(TokenType.ParenthesisL)) {
                let openParentCount = 1;
                while (this.token.type !== TokenType.EOF && openParentCount !== 0) {
                    if (this.token.type === TokenType.ParenthesisL) {
                        openParentCount++;
                    }
                    else if (this.token.type === TokenType.ParenthesisR) {
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
        return this.finish(node, ParseError.LeftParenthesisExpected, [], [TokenType.ParenthesisL]);
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
        const node = this.create(Media);
        this.consumeToken(); // @media
        if (!node.addChild(this._parseMediaQueryList())) {
            return this.finish(node, ParseError.MediaQueryExpected);
        }
        return this._parseBody(node, this._parseMediaDeclaration.bind(this, isNested));
    }
    _parseMediaQueryList() {
        const node = this.create(Medialist);
        if (!node.addChild(this._parseMediaQuery())) {
            return this.finish(node, ParseError.MediaQueryExpected);
        }
        while (this.accept(TokenType.Comma)) {
            if (!node.addChild(this._parseMediaQuery())) {
                return this.finish(node, ParseError.MediaQueryExpected);
            }
        }
        return this.finish(node);
    }
    _parseMediaQuery() {
        // <media-query> = <media-condition> | [ not | only ]? <media-type> [ and <media-condition-without-or> ]?
        const node = this.create(MediaQuery);
        const pos = this.mark();
        this.acceptIdent('not');
        if (!this.peek(TokenType.ParenthesisL)) {
            if (this.acceptIdent('only')) ;
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
        const node = this.create(RatioValue);
        if (!this._parseNumeric()) {
            return null;
        }
        if (!this.acceptDelim('/')) {
            this.restoreAtMark(pos);
            return null;
        }
        if (!this._parseNumeric()) {
            return this.finish(node, ParseError.NumberExpected);
        }
        return this.finish(node);
    }
    _parseMediaCondition() {
        // <media-condition> = <media-not> | <media-and> | <media-or> | <media-in-parens>
        // <media-not> = not <media-in-parens>
        // <media-and> = <media-in-parens> [ and <media-in-parens> ]+
        // <media-or> = <media-in-parens> [ or <media-in-parens> ]+
        // <media-in-parens> = ( <media-condition> ) | <media-feature> | <general-enclosed>
        const node = this.create(MediaCondition);
        this.acceptIdent('not');
        let parseExpression = true;
        while (parseExpression) {
            if (!this.accept(TokenType.ParenthesisL)) {
                return this.finish(node, ParseError.LeftParenthesisExpected, [], [TokenType.CurlyL]);
            }
            if (this.peek(TokenType.ParenthesisL) || this.peekIdent('not')) {
                // <media-condition>
                node.addChild(this._parseMediaCondition());
            }
            else {
                node.addChild(this._parseMediaFeature());
            }
            // not yet implemented: general enclosed
            if (!this.accept(TokenType.ParenthesisR)) {
                return this.finish(node, ParseError.RightParenthesisExpected, [], [TokenType.CurlyL]);
            }
            parseExpression = this.acceptIdent('and') || this.acceptIdent('or');
        }
        return this.finish(node);
    }
    _parseMediaFeature() {
        const resyncStopToken = [TokenType.ParenthesisR];
        const node = this.create(MediaFeature);
        // <media-feature> = ( [ <mf-plain> | <mf-boolean> | <mf-range> ] )
        // <mf-plain> = <mf-name> : <mf-value>
        // <mf-boolean> = <mf-name>
        // <mf-range> = <mf-name> [ '<' | '>' ]? '='? <mf-value> | <mf-value> [ '<' | '>' ]? '='? <mf-name> | <mf-value> '<' '='? <mf-name> '<' '='? <mf-value> | <mf-value> '>' '='? <mf-name> '>' '='? <mf-value>
        if (node.addChild(this._parseMediaFeatureName())) {
            if (this.accept(TokenType.Colon)) {
                if (!node.addChild(this._parseMediaFeatureValue())) {
                    return this.finish(node, ParseError.TermExpected, [], resyncStopToken);
                }
            }
            else if (this._parseMediaFeatureRangeOperator()) {
                if (!node.addChild(this._parseMediaFeatureValue())) {
                    return this.finish(node, ParseError.TermExpected, [], resyncStopToken);
                }
                if (this._parseMediaFeatureRangeOperator()) {
                    if (!node.addChild(this._parseMediaFeatureValue())) {
                        return this.finish(node, ParseError.TermExpected, [], resyncStopToken);
                    }
                }
            }
            else ;
        }
        else if (node.addChild(this._parseMediaFeatureValue())) {
            if (!this._parseMediaFeatureRangeOperator()) {
                return this.finish(node, ParseError.OperatorExpected, [], resyncStopToken);
            }
            if (!node.addChild(this._parseMediaFeatureName())) {
                return this.finish(node, ParseError.IdentifierExpected, [], resyncStopToken);
            }
            if (this._parseMediaFeatureRangeOperator()) {
                if (!node.addChild(this._parseMediaFeatureValue())) {
                    return this.finish(node, ParseError.TermExpected, [], resyncStopToken);
                }
            }
        }
        else {
            return this.finish(node, ParseError.IdentifierExpected, [], resyncStopToken);
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
    _parseMedium() {
        const node = this.create(Node);
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
        const node = this.create(Page);
        this.consumeToken();
        if (node.addChild(this._parsePageSelector())) {
            while (this.accept(TokenType.Comma)) {
                if (!node.addChild(this._parsePageSelector())) {
                    return this.finish(node, ParseError.IdentifierExpected);
                }
            }
        }
        return this._parseBody(node, this._parsePageDeclaration.bind(this));
    }
    _parsePageMarginBox() {
        // page_margin_box :  margin_sym S* '{' S* declaration? [ ';' S* declaration? ]* '}' S*
        if (!this.peek(TokenType.AtKeyword)) {
            return null;
        }
        const node = this.create(PageBoxMarginBox);
        if (!this.acceptOneKeyword(pageBoxDirectives)) {
            this.markError(node, ParseError.UnknownAtRule, [], [TokenType.CurlyL]);
        }
        return this._parseBody(node, this._parseRuleSetDeclaration.bind(this));
    }
    _parsePageSelector() {
        // page_selector : pseudo_page+ | IDENT pseudo_page*
        // pseudo_page :  ':' [ "left" | "right" | "first" | "blank" ];
        if (!this.peek(TokenType.Ident) && !this.peek(TokenType.Colon)) {
            return null;
        }
        const node = this.create(Node);
        node.addChild(this._parseIdent()); // optional ident
        if (this.accept(TokenType.Colon)) {
            if (!node.addChild(this._parseIdent())) { // optional ident
                return this.finish(node, ParseError.IdentifierExpected);
            }
        }
        return this.finish(node);
    }
    _parseDocument() {
        // -moz-document is experimental but has been pushed to css4
        if (!this.peekKeyword('@-moz-document')) {
            return null;
        }
        const node = this.create(Document);
        this.consumeToken(); // @-moz-document
        this.resync([], [TokenType.CurlyL]); // ignore all the rules
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
        const node = this.create(Container);
        this.consumeToken(); // @container
        node.addChild(this._parseIdent()); // optional container name
        node.addChild(this._parseContainerQuery());
        return this._parseBody(node, this._parseContainerDeclaration.bind(this, isNested));
    }
    _parseContainerQuery() {
        // <container-query>     = not <query-in-parens>
        //                         | <query-in-parens> [ [ and <query-in-parens> ]* | [ or <query-in-parens> ]* ]
        const node = this.create(Node);
        if (this.acceptIdent('not')) {
            node.addChild(this._parseContainerQueryInParens());
        }
        else {
            node.addChild(this._parseContainerQueryInParens());
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
    _parseContainerQueryInParens() {
        // <query-in-parens>     = ( <container-query> )
        // 					  | ( <size-feature> )
        // 					  | style( <style-query> )
        // 					  | <general-enclosed>
        const node = this.create(Node);
        if (this.accept(TokenType.ParenthesisL)) {
            if (this.peekIdent('not') || this.peek(TokenType.ParenthesisL)) {
                node.addChild(this._parseContainerQuery());
            }
            else {
                node.addChild(this._parseMediaFeature());
            }
            if (!this.accept(TokenType.ParenthesisR)) {
                return this.finish(node, ParseError.RightParenthesisExpected, [], [TokenType.CurlyL]);
            }
        }
        else if (this.acceptIdent('style')) {
            if (this.hasWhitespace() || !this.accept(TokenType.ParenthesisL)) {
                return this.finish(node, ParseError.LeftParenthesisExpected, [], [TokenType.CurlyL]);
            }
            node.addChild(this._parseStyleQuery());
            if (!this.accept(TokenType.ParenthesisR)) {
                return this.finish(node, ParseError.RightParenthesisExpected, [], [TokenType.CurlyL]);
            }
        }
        else {
            return this.finish(node, ParseError.LeftParenthesisExpected, [], [TokenType.CurlyL]);
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
        const node = this.create(Node);
        if (this.acceptIdent('not')) {
            node.addChild(this._parseStyleInParens());
        }
        else if (this.peek(TokenType.ParenthesisL)) {
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
            node.addChild(this._parseDeclaration([TokenType.ParenthesisR]));
        }
        return this.finish(node);
    }
    _parseStyleInParens() {
        const node = this.create(Node);
        if (this.accept(TokenType.ParenthesisL)) {
            node.addChild(this._parseStyleQuery());
            if (!this.accept(TokenType.ParenthesisR)) {
                return this.finish(node, ParseError.RightParenthesisExpected, [], [TokenType.CurlyL]);
            }
        }
        else {
            return this.finish(node, ParseError.LeftParenthesisExpected, [], [TokenType.CurlyL]);
        }
        return this.finish(node);
    }
    // https://www.w3.org/TR/css-syntax-3/#consume-an-at-rule
    _parseUnknownAtRule() {
        if (!this.peek(TokenType.AtKeyword)) {
            return null;
        }
        const node = this.create(UnknownAtRule);
        node.addChild(this._parseUnknownAtRuleName());
        const isTopLevel = () => curlyDepth === 0 && parensDepth === 0 && bracketsDepth === 0;
        let curlyLCount = 0;
        let curlyDepth = 0;
        let parensDepth = 0;
        let bracketsDepth = 0;
        done: while (true) {
            switch (this.token.type) {
                case TokenType.SemiColon:
                    if (isTopLevel()) {
                        break done;
                    }
                    break;
                case TokenType.EOF:
                    if (curlyDepth > 0) {
                        return this.finish(node, ParseError.RightCurlyExpected);
                    }
                    else if (bracketsDepth > 0) {
                        return this.finish(node, ParseError.RightSquareBracketExpected);
                    }
                    else if (parensDepth > 0) {
                        return this.finish(node, ParseError.RightParenthesisExpected);
                    }
                    else {
                        return this.finish(node);
                    }
                case TokenType.CurlyL:
                    curlyLCount++;
                    curlyDepth++;
                    break;
                case TokenType.CurlyR:
                    curlyDepth--;
                    // End of at-rule, consume CurlyR and return node
                    if (curlyLCount > 0 && curlyDepth === 0) {
                        this.consumeToken();
                        if (bracketsDepth > 0) {
                            return this.finish(node, ParseError.RightSquareBracketExpected);
                        }
                        else if (parensDepth > 0) {
                            return this.finish(node, ParseError.RightParenthesisExpected);
                        }
                        break done;
                    }
                    if (curlyDepth < 0) {
                        // The property value has been terminated without a semicolon, and
                        // this is the last declaration in the ruleset.
                        if (parensDepth === 0 && bracketsDepth === 0) {
                            break done;
                        }
                        return this.finish(node, ParseError.LeftCurlyExpected);
                    }
                    break;
                case TokenType.ParenthesisL:
                    parensDepth++;
                    break;
                case TokenType.ParenthesisR:
                    parensDepth--;
                    if (parensDepth < 0) {
                        return this.finish(node, ParseError.LeftParenthesisExpected);
                    }
                    break;
                case TokenType.BracketL:
                    bracketsDepth++;
                    break;
                case TokenType.BracketR:
                    bracketsDepth--;
                    if (bracketsDepth < 0) {
                        return this.finish(node, ParseError.LeftSquareBracketExpected);
                    }
                    break;
            }
            this.consumeToken();
        }
        return node;
    }
    _parseUnknownAtRuleName() {
        const node = this.create(Node);
        if (this.accept(TokenType.AtKeyword)) {
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
            this.peek(TokenType.Dashmatch) ||
            this.peek(TokenType.Includes) ||
            this.peek(TokenType.SubstringOperator) ||
            this.peek(TokenType.PrefixOperator) ||
            this.peek(TokenType.SuffixOperator) ||
            this.peekDelim('=')) { // doesn't stick to the standard here
            const node = this.createNode(NodeType.Operator);
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
        const node = this.create(Node);
        this.consumeToken();
        return this.finish(node);
    }
    _parseCombinator() {
        if (this.peekDelim('>')) {
            const node = this.create(Node);
            this.consumeToken();
            const mark = this.mark();
            if (!this.hasWhitespace() && this.acceptDelim('>')) {
                if (!this.hasWhitespace() && this.acceptDelim('>')) {
                    node.type = NodeType.SelectorCombinatorShadowPiercingDescendant;
                    return this.finish(node);
                }
                this.restoreAtMark(mark);
            }
            node.type = NodeType.SelectorCombinatorParent;
            return this.finish(node);
        }
        else if (this.peekDelim('+')) {
            const node = this.create(Node);
            this.consumeToken();
            node.type = NodeType.SelectorCombinatorSibling;
            return this.finish(node);
        }
        else if (this.peekDelim('~')) {
            const node = this.create(Node);
            this.consumeToken();
            node.type = NodeType.SelectorCombinatorAllSiblings;
            return this.finish(node);
        }
        else if (this.peekDelim('/')) {
            const node = this.create(Node);
            this.consumeToken();
            const mark = this.mark();
            if (!this.hasWhitespace() && this.acceptIdent('deep') && !this.hasWhitespace() && this.acceptDelim('/')) {
                node.type = NodeType.SelectorCombinatorShadowPiercingDescendant;
                return this.finish(node);
            }
            this.restoreAtMark(mark);
        }
        return null;
    }
    _parseSimpleSelector() {
        // simple_selector
        //  : element_name [ HASH | class | attrib | pseudo ]* | [ HASH | class | attrib | pseudo ]+ ;
        const node = this.create(SimpleSelector);
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
            const node = this.createNode(NodeType.SelectorCombinator);
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
        if (!this.peek(TokenType.Hash) && !this.peekDelim('#')) {
            return null;
        }
        const node = this.createNode(NodeType.IdentifierSelector);
        if (this.acceptDelim('#')) {
            if (this.hasWhitespace() || !node.addChild(this._parseSelectorIdent())) {
                return this.finish(node, ParseError.IdentifierExpected);
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
        const node = this.createNode(NodeType.ClassSelector);
        this.consumeToken(); // '.'
        if (this.hasWhitespace() || !node.addChild(this._parseSelectorIdent())) {
            return this.finish(node, ParseError.IdentifierExpected);
        }
        return this.finish(node);
    }
    _parseElementName() {
        // element_name: (ns? '|')? IDENT | '*';
        const pos = this.mark();
        const node = this.createNode(NodeType.ElementNameSelector);
        node.addChild(this._parseNamespacePrefix());
        if (!node.addChild(this._parseSelectorIdent()) && !this.acceptDelim('*')) {
            this.restoreAtMark(pos);
            return null;
        }
        return this.finish(node);
    }
    _parseNamespacePrefix() {
        const pos = this.mark();
        const node = this.createNode(NodeType.NamespacePrefix);
        if (!node.addChild(this._parseIdent()) && !this.acceptDelim('*')) ;
        if (!this.acceptDelim('|')) {
            this.restoreAtMark(pos);
            return null;
        }
        return this.finish(node);
    }
    _parseAttrib() {
        // attrib : '[' S* IDENT S* [ [ '=' | INCLUDES | DASHMATCH ] S*   [ IDENT | STRING ] S* ]? ']'
        if (!this.peek(TokenType.BracketL)) {
            return null;
        }
        const node = this.create(AttributeSelector);
        this.consumeToken(); // BracketL
        // Optional attrib namespace
        node.setNamespacePrefix(this._parseNamespacePrefix());
        if (!node.setIdentifier(this._parseIdent())) {
            return this.finish(node, ParseError.IdentifierExpected);
        }
        if (node.setOperator(this._parseOperator())) {
            node.setValue(this._parseBinaryExpr());
            this.acceptIdent('i'); // case insensitive matching
            this.acceptIdent('s'); // case sensitive matching
        }
        if (!this.accept(TokenType.BracketR)) {
            return this.finish(node, ParseError.RightSquareBracketExpected);
        }
        return this.finish(node);
    }
    _parsePseudo() {
        // pseudo: ':' [ IDENT | FUNCTION S* [IDENT S*]? ')' ]
        const node = this._tryParsePseudoIdentifier();
        if (node) {
            if (!this.hasWhitespace() && this.accept(TokenType.ParenthesisL)) {
                const tryAsSelector = () => {
                    const selectors = this.create(Node);
                    if (!selectors.addChild(this._parseSelector(true))) {
                        return null;
                    }
                    while (this.accept(TokenType.Comma) && selectors.addChild(this._parseSelector(true))) {
                        // loop
                    }
                    if (this.peek(TokenType.ParenthesisR)) {
                        return this.finish(selectors);
                    }
                    return null;
                };
                let hasSelector = node.addChild(this.try(tryAsSelector));
                if (!hasSelector) {
                    if (node.addChild(this._parseBinaryExpr()) &&
                        this.acceptIdent('of') &&
                        !node.addChild(this.try(tryAsSelector))) {
                        return this.finish(node, ParseError.SelectorExpected);
                    }
                }
                if (!this.accept(TokenType.ParenthesisR)) {
                    return this.finish(node, ParseError.RightParenthesisExpected);
                }
            }
            return this.finish(node);
        }
        return null;
    }
    _tryParsePseudoIdentifier() {
        if (!this.peek(TokenType.Colon)) {
            return null;
        }
        const pos = this.mark();
        const node = this.createNode(NodeType.PseudoSelector);
        this.consumeToken(); // Colon
        if (this.hasWhitespace()) {
            this.restoreAtMark(pos);
            return null;
        }
        // optional, support ::
        this.accept(TokenType.Colon);
        if (this.hasWhitespace() || !node.addChild(this._parseIdent())) {
            return this.finish(node, ParseError.IdentifierExpected);
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
        if (!this.peek(TokenType.Exclamation)) {
            return null;
        }
        const node = this.createNode(NodeType.Prio);
        if (this.accept(TokenType.Exclamation) && this.acceptIdent('important')) {
            return this.finish(node);
        }
        return null;
    }
    _parseExpr(stopOnComma = false) {
        const node = this.create(Expression);
        if (!node.addChild(this._parseBinaryExpr())) {
            return null;
        }
        while (true) {
            if (this.peek(TokenType.Comma)) { // optional
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
        const node = this.create(UnicodeRange);
        if (!this.acceptUnicodeRange()) {
            return null;
        }
        return this.finish(node);
    }
    _parseNamedLine() {
        // https://www.w3.org/TR/css-grid-1/#named-lines
        if (!this.peek(TokenType.BracketL)) {
            return null;
        }
        const node = this.createNode(NodeType.GridLine);
        this.consumeToken();
        while (node.addChild(this._parseIdent())) {
            // repeat
        }
        if (!this.accept(TokenType.BracketR)) {
            return this.finish(node, ParseError.RightSquareBracketExpected);
        }
        return this.finish(node);
    }
    _parseBinaryExpr(preparsedLeft, preparsedOper) {
        let node = this.create(BinaryExpression);
        if (!node.setLeft((preparsedLeft || this._parseTerm()))) {
            return null;
        }
        if (!node.setOperator(preparsedOper || this._parseOperator())) {
            return this.finish(node);
        }
        if (!node.setRight(this._parseTerm())) {
            return this.finish(node, ParseError.TermExpected);
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
        let node = this.create(Term);
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
        if (!this.peek(TokenType.ParenthesisL)) {
            return null;
        }
        const node = this.create(Node);
        this.consumeToken(); // ParenthesisL
        node.addChild(this._parseExpr());
        if (!this.accept(TokenType.ParenthesisR)) {
            return this.finish(node, ParseError.RightParenthesisExpected);
        }
        return this.finish(node);
    }
    _parseNumeric() {
        if (this.peek(TokenType.Num) ||
            this.peek(TokenType.Percentage) ||
            this.peek(TokenType.Resolution) ||
            this.peek(TokenType.Length) ||
            this.peek(TokenType.EMS) ||
            this.peek(TokenType.EXS) ||
            this.peek(TokenType.Angle) ||
            this.peek(TokenType.Time) ||
            this.peek(TokenType.Dimension) ||
            this.peek(TokenType.ContainerQueryLength) ||
            this.peek(TokenType.Freq)) {
            const node = this.create(NumericValue);
            this.consumeToken();
            return this.finish(node);
        }
        return null;
    }
    _parseStringLiteral() {
        if (!this.peek(TokenType.String) && !this.peek(TokenType.BadString)) {
            return null;
        }
        const node = this.createNode(NodeType.StringLiteral);
        this.consumeToken();
        return this.finish(node);
    }
    _parseURILiteral() {
        if (!this.peekRegExp(TokenType.Ident, /^url(-prefix)?$/i)) {
            return null;
        }
        const pos = this.mark();
        const node = this.createNode(NodeType.URILiteral);
        this.accept(TokenType.Ident);
        if (this.hasWhitespace() || !this.peek(TokenType.ParenthesisL)) {
            this.restoreAtMark(pos);
            return null;
        }
        this.scanner.inURL = true;
        this.consumeToken(); // consume ()
        node.addChild(this._parseURLArgument()); // argument is optional
        this.scanner.inURL = false;
        if (!this.accept(TokenType.ParenthesisR)) {
            return this.finish(node, ParseError.RightParenthesisExpected);
        }
        return this.finish(node);
    }
    _parseURLArgument() {
        const node = this.create(Node);
        if (!this.accept(TokenType.String) && !this.accept(TokenType.BadString) && !this.acceptUnquotedString()) {
            return null;
        }
        return this.finish(node);
    }
    _parseIdent(referenceTypes) {
        if (!this.peek(TokenType.Ident)) {
            return null;
        }
        const node = this.create(Identifier);
        if (referenceTypes) {
            node.referenceTypes = referenceTypes;
        }
        node.isCustomProperty = this.peekRegExp(TokenType.Ident, /^--/);
        this.consumeToken();
        return this.finish(node);
    }
    _parseFunction() {
        const pos = this.mark();
        const node = this.create(Function);
        if (!node.setIdentifier(this._parseFunctionIdentifier())) {
            return null;
        }
        if (this.hasWhitespace() || !this.accept(TokenType.ParenthesisL)) {
            this.restoreAtMark(pos);
            return null;
        }
        if (node.getArguments().addChild(this._parseFunctionArgument())) {
            while (this.accept(TokenType.Comma)) {
                if (this.peek(TokenType.ParenthesisR)) {
                    break;
                }
                if (!node.getArguments().addChild(this._parseFunctionArgument())) {
                    this.markError(node, ParseError.ExpressionExpected);
                }
            }
        }
        if (!this.accept(TokenType.ParenthesisR)) {
            return this.finish(node, ParseError.RightParenthesisExpected);
        }
        return this.finish(node);
    }
    _parseFunctionIdentifier() {
        if (!this.peek(TokenType.Ident)) {
            return null;
        }
        const node = this.create(Identifier);
        node.referenceTypes = [ReferenceType.Function];
        if (this.acceptIdent('progid')) {
            // support for IE7 specific filters: 'progid:DXImageTransform.Microsoft.MotionBlur(strength=13, direction=310)'
            if (this.accept(TokenType.Colon)) {
                while (this.accept(TokenType.Ident) && this.acceptDelim('.')) {
                    // loop
                }
            }
            return this.finish(node);
        }
        this.consumeToken();
        return this.finish(node);
    }
    _parseFunctionArgument() {
        const node = this.create(FunctionArgument);
        if (node.setValue(this._parseExpr(true))) {
            return this.finish(node);
        }
        return null;
    }
    _parseHexColor() {
        if (this.peekRegExp(TokenType.Hash, /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{4}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/g)) {
            const node = this.create(HexColorValue);
            this.consumeToken();
            return this.finish(node);
        }
        else {
            return null;
        }
    }
}

export { Parser };
