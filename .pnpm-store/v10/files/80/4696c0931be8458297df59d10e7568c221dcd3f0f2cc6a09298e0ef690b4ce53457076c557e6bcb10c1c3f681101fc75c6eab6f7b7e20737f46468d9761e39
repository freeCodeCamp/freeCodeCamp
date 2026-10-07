(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./lessScanner", "./cssScanner", "./cssParser", "./cssNodes", "./cssErrors"], factory);
    }
})(function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LESSParser = void 0;
    const lessScanner = require("./lessScanner");
    const cssScanner_1 = require("./cssScanner");
    const cssParser = require("./cssParser");
    const nodes = require("./cssNodes");
    const cssErrors_1 = require("./cssErrors");
    /// <summary>
    /// A parser for LESS
    /// http://lesscss.org/
    /// </summary>
    class LESSParser extends cssParser.Parser {
        constructor() {
            super(new lessScanner.LESSScanner());
        }
        _parseStylesheetStatement(isNested = false) {
            if (this.peek(cssScanner_1.TokenType.AtKeyword)) {
                return this._parseVariableDeclaration()
                    || this._parsePlugin()
                    || super._parseStylesheetAtStatement(isNested);
            }
            return this._tryParseMixinDeclaration()
                || this._tryParseMixinReference()
                || this._parseFunction()
                || this._parseRuleset(true);
        }
        _parseImport() {
            if (!this.peekKeyword('@import') && !this.peekKeyword('@import-once') /* deprecated in less 1.4.1 */) {
                return null;
            }
            const node = this.create(nodes.Import);
            this.consumeToken();
            // less 1.4.1: @import (css) "lib"
            if (this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                if (!this.accept(cssScanner_1.TokenType.Ident)) {
                    return this.finish(node, cssErrors_1.ParseError.IdentifierExpected, [cssScanner_1.TokenType.SemiColon]);
                }
                do {
                    if (!this.accept(cssScanner_1.TokenType.Comma)) {
                        break;
                    }
                } while (this.accept(cssScanner_1.TokenType.Ident));
                if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                    return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected, [cssScanner_1.TokenType.SemiColon]);
                }
            }
            if (!node.addChild(this._parseURILiteral()) && !node.addChild(this._parseStringLiteral())) {
                return this.finish(node, cssErrors_1.ParseError.URIOrStringExpected, [cssScanner_1.TokenType.SemiColon]);
            }
            if (!this.peek(cssScanner_1.TokenType.SemiColon) && !this.peek(cssScanner_1.TokenType.EOF)) {
                node.setMedialist(this._parseMediaQueryList());
            }
            return this._completeParseImport(node);
        }
        _parsePlugin() {
            if (!this.peekKeyword('@plugin')) {
                return null;
            }
            const node = this.createNode(nodes.NodeType.Plugin);
            this.consumeToken(); // @import
            if (!node.addChild(this._parseStringLiteral())) {
                return this.finish(node, cssErrors_1.ParseError.StringLiteralExpected);
            }
            if (!this.accept(cssScanner_1.TokenType.SemiColon)) {
                return this.finish(node, cssErrors_1.ParseError.SemiColonExpected);
            }
            return this.finish(node);
        }
        _parseMediaQuery() {
            const node = super._parseMediaQuery();
            if (!node) {
                const node = this.create(nodes.MediaQuery);
                if (node.addChild(this._parseVariable())) {
                    return this.finish(node);
                }
                return null;
            }
            return node;
        }
        _parseMediaDeclaration(isNested = false) {
            return this._tryParseRuleset(isNested)
                || this._tryToParseDeclaration()
                || this._tryParseMixinDeclaration()
                || this._tryParseMixinReference()
                || this._parseDetachedRuleSetMixin()
                || this._parseStylesheetStatement(isNested);
        }
        _parseMediaFeatureName() {
            return this._parseIdent() || this._parseVariable();
        }
        _parseVariableDeclaration(panic = []) {
            const node = this.create(nodes.VariableDeclaration);
            const mark = this.mark();
            if (!node.setVariable(this._parseVariable(true))) {
                return null;
            }
            if (this.accept(cssScanner_1.TokenType.Colon)) {
                if (this.prevToken) {
                    node.colonPosition = this.prevToken.offset;
                }
                if (node.setValue(this._parseDetachedRuleSet())) {
                    node.needsSemicolon = false;
                }
                else if (!node.setValue(this._parseExpr())) {
                    return this.finish(node, cssErrors_1.ParseError.VariableValueExpected, [], panic);
                }
                node.addChild(this._parsePrio());
            }
            else {
                this.restoreAtMark(mark);
                return null; // at keyword, but no ':', not a variable declaration but some at keyword
            }
            if (this.peek(cssScanner_1.TokenType.SemiColon)) {
                node.semicolonPosition = this.token.offset; // not part of the declaration, but useful information for code assist
            }
            return this.finish(node);
        }
        _parseDetachedRuleSet() {
            let mark = this.mark();
            // "Anonymous mixin" used in each() and possibly a generic type in the future
            if (this.peekDelim('#') || this.peekDelim('.')) {
                this.consumeToken();
                if (!this.hasWhitespace() && this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                    let node = this.create(nodes.MixinDeclaration);
                    if (node.getParameters().addChild(this._parseMixinParameter())) {
                        while (this.accept(cssScanner_1.TokenType.Comma) || this.accept(cssScanner_1.TokenType.SemiColon)) {
                            if (this.peek(cssScanner_1.TokenType.ParenthesisR)) {
                                break;
                            }
                            if (!node.getParameters().addChild(this._parseMixinParameter())) {
                                this.markError(node, cssErrors_1.ParseError.IdentifierExpected, [], [cssScanner_1.TokenType.ParenthesisR]);
                            }
                        }
                    }
                    if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                        this.restoreAtMark(mark);
                        return null;
                    }
                }
                else {
                    this.restoreAtMark(mark);
                    return null;
                }
            }
            if (!this.peek(cssScanner_1.TokenType.CurlyL)) {
                return null;
            }
            const content = this.create(nodes.BodyDeclaration);
            this._parseBody(content, this._parseDetachedRuleSetBody.bind(this));
            return this.finish(content);
        }
        _parseDetachedRuleSetBody() {
            return this._tryParseKeyframeSelector() || this._parseRuleSetDeclaration();
        }
        _addLookupChildren(node) {
            if (!node.addChild(this._parseLookupValue())) {
                return false;
            }
            let expectsValue = false;
            while (true) {
                if (this.peek(cssScanner_1.TokenType.BracketL)) {
                    expectsValue = true;
                }
                if (!node.addChild(this._parseLookupValue())) {
                    break;
                }
                expectsValue = false;
            }
            return !expectsValue;
        }
        _parseLookupValue() {
            const node = this.create(nodes.Node);
            const mark = this.mark();
            if (!this.accept(cssScanner_1.TokenType.BracketL)) {
                this.restoreAtMark(mark);
                return null;
            }
            if (((node.addChild(this._parseVariable(false, true)) ||
                node.addChild(this._parsePropertyIdentifier())) &&
                this.accept(cssScanner_1.TokenType.BracketR)) || this.accept(cssScanner_1.TokenType.BracketR)) {
                return node;
            }
            this.restoreAtMark(mark);
            return null;
        }
        _parseVariable(declaration = false, insideLookup = false) {
            const isPropertyReference = !declaration && this.peekDelim('$');
            if (!this.peekDelim('@') && !isPropertyReference && !this.peek(cssScanner_1.TokenType.AtKeyword)) {
                return null;
            }
            const node = this.create(nodes.Variable);
            const mark = this.mark();
            while (this.acceptDelim('@') || (!declaration && this.acceptDelim('$'))) {
                if (this.hasWhitespace()) {
                    this.restoreAtMark(mark);
                    return null;
                }
            }
            if (!this.accept(cssScanner_1.TokenType.AtKeyword) && !this.accept(cssScanner_1.TokenType.Ident)) {
                this.restoreAtMark(mark);
                return null;
            }
            if (!insideLookup && this.peek(cssScanner_1.TokenType.BracketL)) {
                if (!this._addLookupChildren(node)) {
                    this.restoreAtMark(mark);
                    return null;
                }
            }
            return node;
        }
        _parseTermExpression() {
            return this._parseVariable() ||
                this._parseEscaped() ||
                super._parseTermExpression() || // preference for colors before mixin references
                this._tryParseMixinReference(false);
        }
        _parseEscaped() {
            if (this.peek(cssScanner_1.TokenType.EscapedJavaScript) ||
                this.peek(cssScanner_1.TokenType.BadEscapedJavaScript)) {
                const node = this.createNode(nodes.NodeType.EscapedValue);
                this.consumeToken();
                return this.finish(node);
            }
            if (this.peekDelim('~')) {
                const node = this.createNode(nodes.NodeType.EscapedValue);
                this.consumeToken();
                if (this.accept(cssScanner_1.TokenType.String) || this.accept(cssScanner_1.TokenType.EscapedJavaScript)) {
                    return this.finish(node);
                }
                else {
                    return this.finish(node, cssErrors_1.ParseError.TermExpected);
                }
            }
            return null;
        }
        _parseOperator() {
            const node = this._parseGuardOperator();
            if (node) {
                return node;
            }
            else {
                return super._parseOperator();
            }
        }
        _parseGuardOperator() {
            if (this.peekDelim('>')) {
                const node = this.createNode(nodes.NodeType.Operator);
                this.consumeToken();
                this.acceptDelim('=');
                return node;
            }
            else if (this.peekDelim('=')) {
                const node = this.createNode(nodes.NodeType.Operator);
                this.consumeToken();
                this.acceptDelim('<');
                return node;
            }
            else if (this.peekDelim('<')) {
                const node = this.createNode(nodes.NodeType.Operator);
                this.consumeToken();
                this.acceptDelim('=');
                return node;
            }
            return null;
        }
        _parseRuleSetDeclaration() {
            if (this.peek(cssScanner_1.TokenType.AtKeyword)) {
                return this._parseKeyframe()
                    || this._parseMedia(true)
                    || this._parseImport()
                    || this._parseSupports(true) // @supports
                    || this._parseLayer() // @layer
                    || this._parsePropertyAtRule() // @property
                    || this._parseContainer(true) // @container
                    || this._parseDetachedRuleSetMixin() // less detached ruleset mixin
                    || this._parseVariableDeclaration() // Variable declarations
                    || this._parseRuleSetDeclarationAtStatement();
            }
            return this._tryParseMixinDeclaration()
                || this._tryParseRuleset(true) // nested ruleset
                || this._tryParseMixinReference() // less mixin reference
                || this._parseFunction()
                || this._parseExtend() // less extend declaration
                || this._parseDeclaration(); // try css ruleset declaration as the last option
        }
        _parseKeyframeIdent() {
            return this._parseIdent([nodes.ReferenceType.Keyframe]) || this._parseVariable();
        }
        _parseKeyframeSelector() {
            return this._parseDetachedRuleSetMixin() // less detached ruleset mixin
                || super._parseKeyframeSelector();
        }
        // public _parseSimpleSelectorBody(): nodes.Node | null {
        // 	return this._parseNestingSelector() || super._parseSimpleSelectorBody();
        // }
        _parseSelector(isNested) {
            // CSS Guards
            const node = this.create(nodes.Selector);
            let hasContent = false;
            if (isNested) {
                // nested selectors can start with a combinator
                hasContent = node.addChild(this._parseCombinator());
            }
            while (node.addChild(this._parseSimpleSelector())) {
                hasContent = true;
                const mark = this.mark();
                if (node.addChild(this._parseGuard()) && this.peek(cssScanner_1.TokenType.CurlyL)) {
                    break;
                }
                this.restoreAtMark(mark);
                node.addChild(this._parseCombinator()); // optional
            }
            return hasContent ? this.finish(node) : null;
        }
        _parseNestingSelector() {
            if (this.peekDelim('&')) {
                const node = this.createNode(nodes.NodeType.SelectorCombinator);
                this.consumeToken();
                while (!this.hasWhitespace() && (this.acceptDelim('-') || this.accept(cssScanner_1.TokenType.Num) || this.accept(cssScanner_1.TokenType.Dimension) || node.addChild(this._parseIdent()) || this.acceptDelim('&'))) {
                    //  support &-foo
                }
                return this.finish(node);
            }
            return null;
        }
        _parseSelectorIdent() {
            if (!this.peekInterpolatedIdent()) {
                return null;
            }
            const node = this.createNode(nodes.NodeType.SelectorInterpolation);
            const hasContent = this._acceptInterpolatedIdent(node);
            return hasContent ? this.finish(node) : null;
        }
        _parsePropertyIdentifier(inLookup = false) {
            const propertyRegex = /^[\w-]+/;
            if (!this.peekInterpolatedIdent() && !this.peekRegExp(this.token.type, propertyRegex)) {
                return null;
            }
            const mark = this.mark();
            const node = this.create(nodes.Identifier);
            node.isCustomProperty = this.acceptDelim('-') && this.acceptDelim('-');
            let childAdded = false;
            if (!inLookup) {
                if (node.isCustomProperty) {
                    childAdded = this._acceptInterpolatedIdent(node);
                }
                else {
                    childAdded = this._acceptInterpolatedIdent(node, propertyRegex);
                }
            }
            else {
                if (node.isCustomProperty) {
                    childAdded = node.addChild(this._parseIdent());
                }
                else {
                    childAdded = node.addChild(this._parseRegexp(propertyRegex));
                }
            }
            if (!childAdded) {
                this.restoreAtMark(mark);
                return null;
            }
            if (!inLookup && !this.hasWhitespace()) {
                this.acceptDelim('+');
                if (!this.hasWhitespace()) {
                    this.acceptIdent('_');
                }
            }
            return this.finish(node);
        }
        peekInterpolatedIdent() {
            return this.peek(cssScanner_1.TokenType.Ident) ||
                this.peekDelim('@') ||
                this.peekDelim('$') ||
                this.peekDelim('-');
        }
        _acceptInterpolatedIdent(node, identRegex) {
            let hasContent = false;
            const indentInterpolation = () => {
                const pos = this.mark();
                if (this.acceptDelim('-')) {
                    if (!this.hasWhitespace()) {
                        this.acceptDelim('-');
                    }
                    if (this.hasWhitespace()) {
                        this.restoreAtMark(pos);
                        return null;
                    }
                }
                return this._parseInterpolation();
            };
            const accept = identRegex ?
                () => this.acceptRegexp(identRegex) :
                () => this.accept(cssScanner_1.TokenType.Ident);
            while (accept() ||
                node.addChild(this._parseInterpolation() ||
                    this.try(indentInterpolation))) {
                hasContent = true;
                if (this.hasWhitespace()) {
                    break;
                }
            }
            return hasContent;
        }
        _parseInterpolation() {
            // @{name} Variable or
            // ${name} Property
            const mark = this.mark();
            if (this.peekDelim('@') || this.peekDelim('$')) {
                const node = this.createNode(nodes.NodeType.Interpolation);
                this.consumeToken();
                if (this.hasWhitespace() || !this.accept(cssScanner_1.TokenType.CurlyL)) {
                    this.restoreAtMark(mark);
                    return null;
                }
                if (!node.addChild(this._parseIdent())) {
                    return this.finish(node, cssErrors_1.ParseError.IdentifierExpected);
                }
                if (!this.accept(cssScanner_1.TokenType.CurlyR)) {
                    return this.finish(node, cssErrors_1.ParseError.RightCurlyExpected);
                }
                return this.finish(node);
            }
            return null;
        }
        _tryParseMixinDeclaration() {
            const mark = this.mark();
            const node = this.create(nodes.MixinDeclaration);
            if (!node.setIdentifier(this._parseMixinDeclarationIdentifier()) || !this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                this.restoreAtMark(mark);
                return null;
            }
            if (node.getParameters().addChild(this._parseMixinParameter())) {
                while (this.accept(cssScanner_1.TokenType.Comma) || this.accept(cssScanner_1.TokenType.SemiColon)) {
                    if (this.peek(cssScanner_1.TokenType.ParenthesisR)) {
                        break;
                    }
                    if (!node.getParameters().addChild(this._parseMixinParameter())) {
                        this.markError(node, cssErrors_1.ParseError.IdentifierExpected, [], [cssScanner_1.TokenType.ParenthesisR]);
                    }
                }
            }
            if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                this.restoreAtMark(mark);
                return null;
            }
            node.setGuard(this._parseGuard());
            if (!this.peek(cssScanner_1.TokenType.CurlyL)) {
                this.restoreAtMark(mark);
                return null;
            }
            return this._parseBody(node, this._parseMixInBodyDeclaration.bind(this));
        }
        _parseMixInBodyDeclaration() {
            return this._parseFontFace() || this._parseRuleSetDeclaration();
        }
        _parseMixinDeclarationIdentifier() {
            let identifier;
            if (this.peekDelim('#') || this.peekDelim('.')) {
                identifier = this.create(nodes.Identifier);
                this.consumeToken(); // # or .
                if (this.hasWhitespace() || !identifier.addChild(this._parseIdent())) {
                    return null;
                }
            }
            else if (this.peek(cssScanner_1.TokenType.Hash)) {
                identifier = this.create(nodes.Identifier);
                this.consumeToken(); // TokenType.Hash
            }
            else {
                return null;
            }
            identifier.referenceTypes = [nodes.ReferenceType.Mixin];
            return this.finish(identifier);
        }
        _parsePseudo() {
            if (!this.peek(cssScanner_1.TokenType.Colon)) {
                return null;
            }
            const mark = this.mark();
            const node = this.create(nodes.ExtendsReference);
            this.consumeToken(); // :
            if (this.acceptIdent('extend')) {
                return this._completeExtends(node);
            }
            this.restoreAtMark(mark);
            return super._parsePseudo();
        }
        _parseExtend() {
            if (!this.peekDelim('&')) {
                return null;
            }
            const mark = this.mark();
            const node = this.create(nodes.ExtendsReference);
            this.consumeToken(); // &
            if (this.hasWhitespace() || !this.accept(cssScanner_1.TokenType.Colon) || !this.acceptIdent('extend')) {
                this.restoreAtMark(mark);
                return null;
            }
            return this._completeExtends(node);
        }
        _completeExtends(node) {
            if (!this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                return this.finish(node, cssErrors_1.ParseError.LeftParenthesisExpected);
            }
            const selectors = node.getSelectors();
            if (!selectors.addChild(this._parseSelector(true))) {
                return this.finish(node, cssErrors_1.ParseError.SelectorExpected);
            }
            while (this.accept(cssScanner_1.TokenType.Comma)) {
                if (!selectors.addChild(this._parseSelector(true))) {
                    return this.finish(node, cssErrors_1.ParseError.SelectorExpected);
                }
            }
            if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected);
            }
            return this.finish(node);
        }
        _parseDetachedRuleSetMixin() {
            if (!this.peek(cssScanner_1.TokenType.AtKeyword)) {
                return null;
            }
            const mark = this.mark();
            const node = this.create(nodes.MixinReference);
            if (node.addChild(this._parseVariable(true)) && (this.hasWhitespace() || !this.accept(cssScanner_1.TokenType.ParenthesisL))) {
                this.restoreAtMark(mark);
                return null;
            }
            if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected);
            }
            return this.finish(node);
        }
        _tryParseMixinReference(atRoot = true) {
            const mark = this.mark();
            const node = this.create(nodes.MixinReference);
            let identifier = this._parseMixinDeclarationIdentifier();
            while (identifier) {
                this.acceptDelim('>');
                const nextId = this._parseMixinDeclarationIdentifier();
                if (nextId) {
                    node.getNamespaces().addChild(identifier);
                    identifier = nextId;
                }
                else {
                    break;
                }
            }
            if (!node.setIdentifier(identifier)) {
                this.restoreAtMark(mark);
                return null;
            }
            let hasArguments = false;
            if (this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                hasArguments = true;
                if (node.getArguments().addChild(this._parseMixinArgument())) {
                    while (this.accept(cssScanner_1.TokenType.Comma) || this.accept(cssScanner_1.TokenType.SemiColon)) {
                        if (this.peek(cssScanner_1.TokenType.ParenthesisR)) {
                            break;
                        }
                        if (!node.getArguments().addChild(this._parseMixinArgument())) {
                            return this.finish(node, cssErrors_1.ParseError.ExpressionExpected);
                        }
                    }
                }
                if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                    return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected);
                }
                identifier.referenceTypes = [nodes.ReferenceType.Mixin];
            }
            else {
                identifier.referenceTypes = [nodes.ReferenceType.Mixin, nodes.ReferenceType.Rule];
            }
            if (this.peek(cssScanner_1.TokenType.BracketL)) {
                if (!atRoot) {
                    this._addLookupChildren(node);
                }
            }
            else {
                node.addChild(this._parsePrio());
            }
            if (!hasArguments && !this.peek(cssScanner_1.TokenType.SemiColon) && !this.peek(cssScanner_1.TokenType.CurlyR) && !this.peek(cssScanner_1.TokenType.EOF)) {
                this.restoreAtMark(mark);
                return null;
            }
            return this.finish(node);
        }
        _parseMixinArgument() {
            // [variableName ':'] expression | variableName '...'
            const node = this.create(nodes.FunctionArgument);
            const pos = this.mark();
            const argument = this._parseVariable();
            if (argument) {
                if (!this.accept(cssScanner_1.TokenType.Colon)) {
                    this.restoreAtMark(pos);
                }
                else {
                    node.setIdentifier(argument);
                }
            }
            if (node.setValue(this._parseDetachedRuleSet() || this._parseExpr(true))) {
                return this.finish(node);
            }
            this.restoreAtMark(pos);
            return null;
        }
        _parseMixinParameter() {
            const node = this.create(nodes.FunctionParameter);
            // special rest variable: @rest...
            if (this.peekKeyword('@rest')) {
                const restNode = this.create(nodes.Node);
                this.consumeToken();
                if (!this.accept(lessScanner.Ellipsis)) {
                    return this.finish(node, cssErrors_1.ParseError.DotExpected, [], [cssScanner_1.TokenType.Comma, cssScanner_1.TokenType.ParenthesisR]);
                }
                node.setIdentifier(this.finish(restNode));
                return this.finish(node);
            }
            // special const args: ...
            if (this.peek(lessScanner.Ellipsis)) {
                const varargsNode = this.create(nodes.Node);
                this.consumeToken();
                node.setIdentifier(this.finish(varargsNode));
                return this.finish(node);
            }
            let hasContent = false;
            // default variable declaration: @param: 12 or @name
            if (node.setIdentifier(this._parseVariable())) {
                this.accept(cssScanner_1.TokenType.Colon);
                hasContent = true;
            }
            if (!node.setDefaultValue(this._parseDetachedRuleSet() || this._parseExpr(true)) && !hasContent) {
                return null;
            }
            return this.finish(node);
        }
        _parseGuard() {
            if (!this.peekIdent('when')) {
                return null;
            }
            const node = this.create(nodes.LessGuard);
            this.consumeToken(); // when
            if (!node.getConditions().addChild(this._parseGuardCondition())) {
                return this.finish(node, cssErrors_1.ParseError.ConditionExpected);
            }
            while (this.acceptIdent('and') || this.accept(cssScanner_1.TokenType.Comma)) {
                if (!node.getConditions().addChild(this._parseGuardCondition())) {
                    return this.finish(node, cssErrors_1.ParseError.ConditionExpected);
                }
            }
            return this.finish(node);
        }
        _parseGuardCondition() {
            const node = this.create(nodes.GuardCondition);
            node.isNegated = this.acceptIdent('not');
            if (!this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                if (node.isNegated) {
                    return this.finish(node, cssErrors_1.ParseError.LeftParenthesisExpected);
                }
                return null;
            }
            if (!node.addChild(this._parseExpr())) {
                // empty (?)
            }
            if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected);
            }
            return this.finish(node);
        }
        _parseFunction() {
            const pos = this.mark();
            const node = this.create(nodes.Function);
            if (!node.setIdentifier(this._parseFunctionIdentifier())) {
                return null;
            }
            if (this.hasWhitespace() || !this.accept(cssScanner_1.TokenType.ParenthesisL)) {
                this.restoreAtMark(pos);
                return null;
            }
            if (node.getArguments().addChild(this._parseMixinArgument())) {
                while (this.accept(cssScanner_1.TokenType.Comma) || this.accept(cssScanner_1.TokenType.SemiColon)) {
                    if (this.peek(cssScanner_1.TokenType.ParenthesisR)) {
                        break;
                    }
                    if (!node.getArguments().addChild(this._parseMixinArgument())) {
                        return this.finish(node, cssErrors_1.ParseError.ExpressionExpected);
                    }
                }
            }
            if (!this.accept(cssScanner_1.TokenType.ParenthesisR)) {
                return this.finish(node, cssErrors_1.ParseError.RightParenthesisExpected);
            }
            return this.finish(node);
        }
        _parseFunctionIdentifier() {
            if (this.peekDelim('%')) {
                const node = this.create(nodes.Identifier);
                node.referenceTypes = [nodes.ReferenceType.Function];
                this.consumeToken();
                return this.finish(node);
            }
            return super._parseFunctionIdentifier();
        }
        _parseURLArgument() {
            const pos = this.mark();
            const node = super._parseURLArgument();
            if (!node || !this.peek(cssScanner_1.TokenType.ParenthesisR)) {
                this.restoreAtMark(pos);
                const node = this.create(nodes.Node);
                node.addChild(this._parseBinaryExpr());
                return this.finish(node);
            }
            return node;
        }
    }
    exports.LESSParser = LESSParser;
});
