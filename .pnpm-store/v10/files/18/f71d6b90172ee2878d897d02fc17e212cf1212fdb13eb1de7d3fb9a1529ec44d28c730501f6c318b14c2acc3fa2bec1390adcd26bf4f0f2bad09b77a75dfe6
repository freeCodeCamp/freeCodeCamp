import { SCSSScanner, VariableName, SmallerEqualsOperator, GreaterEqualsOperator, InterpolationFunction, EqualsOperator, NotEqualsOperator, Ellipsis } from './scssScanner.js';
import { TokenType } from './cssScanner.js';
import { Parser } from './cssParser.js';
import { Import, VariableDeclaration, Variable, Module, ReferenceType, Identifier, Interpolation, NodeType, Node, Declaration, NestedProperties, ExtendsReference, IfStatement, ElseStatement, ForStatement, EachStatement, WhileStatement, FunctionDeclaration, MixinDeclaration, FunctionParameter, MixinContentReference, MixinReference, MixinContentDeclaration, FunctionArgument, ListEntry, Use, ModuleConfiguration, Forward, ForwardVisibility } from './cssNodes.js';
import { SCSSParseError } from './scssErrors.js';
import { ParseError } from './cssErrors.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/// <summary>
/// A parser for scss
/// http://sass-lang.com/documentation/file.SASS_REFERENCE.html
/// </summary>
class SCSSParser extends Parser {
    constructor() {
        super(new SCSSScanner());
    }
    _parseStylesheetStatement(isNested = false) {
        if (this.peek(TokenType.AtKeyword)) {
            return this._parseWarnAndDebug() // @warn, @debug and @error statements
                || this._parseControlStatement() // @if, @while, @for, @each
                || this._parseMixinDeclaration() // @mixin
                || this._parseMixinContent() // @content
                || this._parseMixinReference() // @include
                || this._parseFunctionDeclaration() // @function
                || this._parseForward() // @forward
                || this._parseUse() // @use
                || this._parseRuleset(isNested) // @at-rule
                || super._parseStylesheetAtStatement(isNested);
        }
        return this._parseRuleset(true) || this._parseVariableDeclaration();
    }
    _parseImport() {
        if (!this.peekKeyword('@import')) {
            return null;
        }
        const node = this.create(Import);
        this.consumeToken();
        if (!node.addChild(this._parseURILiteral()) && !node.addChild(this._parseStringLiteral())) {
            return this.finish(node, ParseError.URIOrStringExpected);
        }
        while (this.accept(TokenType.Comma)) {
            if (!node.addChild(this._parseURILiteral()) && !node.addChild(this._parseStringLiteral())) {
                return this.finish(node, ParseError.URIOrStringExpected);
            }
        }
        return this._completeParseImport(node);
    }
    // scss variables: $font-size: 12px;
    _parseVariableDeclaration(panic = []) {
        if (!this.peek(VariableName)) {
            return null;
        }
        const node = this.create(VariableDeclaration);
        if (!node.setVariable(this._parseVariable())) {
            return null;
        }
        if (!this.accept(TokenType.Colon)) {
            return this.finish(node, ParseError.ColonExpected);
        }
        if (this.prevToken) {
            node.colonPosition = this.prevToken.offset;
        }
        if (!node.setValue(this._parseExpr())) {
            return this.finish(node, ParseError.VariableValueExpected, [], panic);
        }
        while (this.peek(TokenType.Exclamation)) {
            if (node.addChild(this._tryParsePrio())) ;
            else {
                this.consumeToken();
                if (!this.peekRegExp(TokenType.Ident, /^(default|global)$/)) {
                    return this.finish(node, ParseError.UnknownKeyword);
                }
                this.consumeToken();
            }
        }
        if (this.peek(TokenType.SemiColon)) {
            node.semicolonPosition = this.token.offset; // not part of the declaration, but useful information for code assist
        }
        return this.finish(node);
    }
    _parseMediaCondition() {
        return this._parseInterpolation() || super._parseMediaCondition();
    }
    _parseMediaFeatureRangeOperator() {
        return this.accept(SmallerEqualsOperator) || this.accept(GreaterEqualsOperator) || super._parseMediaFeatureRangeOperator();
    }
    _parseMediaFeatureName() {
        return this._parseModuleMember()
            || this._parseFunction() // function before ident
            || this._parseIdent()
            || this._parseVariable();
    }
    _parseKeyframeSelector() {
        return this._tryParseKeyframeSelector()
            || this._parseControlStatement(this._parseKeyframeSelector.bind(this))
            || this._parseWarnAndDebug() // @warn, @debug and @error statements
            || this._parseMixinReference() // @include
            || this._parseFunctionDeclaration() // @function
            || this._parseVariableDeclaration()
            || this._parseMixinContent();
    }
    _parseVariable() {
        if (!this.peek(VariableName)) {
            return null;
        }
        const node = this.create(Variable);
        this.consumeToken();
        return node;
    }
    _parseModuleMember() {
        const pos = this.mark();
        const node = this.create(Module);
        if (!node.setIdentifier(this._parseIdent([ReferenceType.Module]))) {
            return null;
        }
        if (this.hasWhitespace()
            || !this.acceptDelim('.')
            || this.hasWhitespace()) {
            this.restoreAtMark(pos);
            return null;
        }
        if (!node.addChild(this._parseVariable() || this._parseFunction())) {
            return this.finish(node, ParseError.IdentifierOrVariableExpected);
        }
        return node;
    }
    _parseIdent(referenceTypes) {
        if (!this.peek(TokenType.Ident) && !this.peek(InterpolationFunction) && !this.peekDelim('-')) {
            return null;
        }
        const node = this.create(Identifier);
        node.referenceTypes = referenceTypes;
        node.isCustomProperty = this.peekRegExp(TokenType.Ident, /^--/);
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
        while (this.accept(TokenType.Ident) || node.addChild(indentInterpolation()) || (hasContent && this.acceptRegexp(/^[\w-]/))) {
            hasContent = true;
            if (this.hasWhitespace()) {
                break;
            }
        }
        return hasContent ? this.finish(node) : null;
    }
    _parseTermExpression() {
        return this._parseModuleMember() ||
            this._parseVariable() ||
            this._parseNestingSelector() ||
            //this._tryParsePrio() ||
            super._parseTermExpression();
    }
    _parseInterpolation() {
        if (this.peek(InterpolationFunction)) {
            const node = this.create(Interpolation);
            this.consumeToken();
            if (!node.addChild(this._parseExpr()) && !this._parseNestingSelector()) {
                if (this.accept(TokenType.CurlyR)) {
                    return this.finish(node);
                }
                return this.finish(node, ParseError.ExpressionExpected);
            }
            if (!this.accept(TokenType.CurlyR)) {
                return this.finish(node, ParseError.RightCurlyExpected);
            }
            return this.finish(node);
        }
        return null;
    }
    _parseOperator() {
        if (this.peek(EqualsOperator) || this.peek(NotEqualsOperator)
            || this.peek(GreaterEqualsOperator) || this.peek(SmallerEqualsOperator)
            || this.peekDelim('>') || this.peekDelim('<')
            || this.peekIdent('and') || this.peekIdent('or')
            || this.peekDelim('%')) {
            const node = this.createNode(NodeType.Operator);
            this.consumeToken();
            return this.finish(node);
        }
        return super._parseOperator();
    }
    _parseUnaryOperator() {
        if (this.peekIdent('not')) {
            const node = this.create(Node);
            this.consumeToken();
            return this.finish(node);
        }
        return super._parseUnaryOperator();
    }
    _parseRuleSetDeclaration() {
        if (this.peek(TokenType.AtKeyword)) {
            return this._parseKeyframe() // nested @keyframe
                || this._parseImport() // nested @import
                || this._parseMedia(true) // nested @media
                || this._parseFontFace() // nested @font-face
                || this._parseWarnAndDebug() // @warn, @debug and @error statements
                || this._parseControlStatement() // @if, @while, @for, @each
                || this._parseFunctionDeclaration() // @function
                || this._parseExtends() // @extends
                || this._parseMixinReference() // @include
                || this._parseMixinContent() // @content
                || this._parseMixinDeclaration() // nested @mixin
                || this._parseRuleset(true) // @at-rule
                || this._parseSupports(true) // @supports
                || this._parseLayer() // @layer
                || this._parsePropertyAtRule() // @property
                || this._parseContainer(true) // nested @container
                || this._parseRuleSetDeclarationAtStatement();
        }
        return this._parseVariableDeclaration() // variable declaration
            || this._tryParseRuleset(true) // nested ruleset
            || this._parseDeclaration(); // try css ruleset declaration as last so in the error case, the ast will contain a declaration
    }
    _parseDeclaration(stopTokens) {
        const custonProperty = this._tryParseCustomPropertyDeclaration(stopTokens);
        if (custonProperty) {
            return custonProperty;
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
        let hasContent = false;
        if (node.setValue(this._parseExpr())) {
            hasContent = true;
            node.addChild(this._parsePrio());
        }
        if (this.peek(TokenType.CurlyL)) {
            node.setNestedProperties(this._parseNestedProperties());
        }
        else {
            if (!hasContent) {
                return this.finish(node, ParseError.PropertyValueExpected);
            }
        }
        if (this.peek(TokenType.SemiColon)) {
            node.semicolonPosition = this.token.offset; // not part of the declaration, but useful information for code assist
        }
        return this.finish(node);
    }
    _parseNestedProperties() {
        const node = this.create(NestedProperties);
        return this._parseBody(node, this._parseDeclaration.bind(this));
    }
    _parseExtends() {
        if (this.peekKeyword('@extend')) {
            const node = this.create(ExtendsReference);
            this.consumeToken();
            if (!node.getSelectors().addChild(this._parseSimpleSelector())) {
                return this.finish(node, ParseError.SelectorExpected);
            }
            while (this.accept(TokenType.Comma)) {
                node.getSelectors().addChild(this._parseSimpleSelector());
            }
            if (this.accept(TokenType.Exclamation)) {
                if (!this.acceptIdent('optional')) {
                    return this.finish(node, ParseError.UnknownKeyword);
                }
            }
            return this.finish(node);
        }
        return null;
    }
    _parseSimpleSelectorBody() {
        return this._parseSelectorPlaceholder() || super._parseSimpleSelectorBody();
    }
    _parseNestingSelector() {
        if (this.peekDelim('&')) {
            const node = this.createNode(NodeType.SelectorCombinator);
            this.consumeToken();
            while (!this.hasWhitespace() && (this.acceptDelim('-') || this.accept(TokenType.Num) || this.accept(TokenType.Dimension) || node.addChild(this._parseIdent()) || this.acceptDelim('&'))) {
                //  support &-foo-1
            }
            return this.finish(node);
        }
        return null;
    }
    _parseSelectorPlaceholder() {
        if (this.peekDelim('%')) {
            const node = this.createNode(NodeType.SelectorPlaceholder);
            this.consumeToken();
            this._parseIdent();
            return this.finish(node);
        }
        else if (this.peekKeyword('@at-root')) {
            const node = this.createNode(NodeType.SelectorPlaceholder);
            this.consumeToken();
            if (this.accept(TokenType.ParenthesisL)) {
                if (!this.acceptIdent('with') && !this.acceptIdent('without')) {
                    return this.finish(node, ParseError.IdentifierExpected);
                }
                if (!this.accept(TokenType.Colon)) {
                    return this.finish(node, ParseError.ColonExpected);
                }
                if (!node.addChild(this._parseIdent())) {
                    return this.finish(node, ParseError.IdentifierExpected);
                }
                if (!this.accept(TokenType.ParenthesisR)) {
                    return this.finish(node, ParseError.RightParenthesisExpected, [TokenType.CurlyR]);
                }
            }
            return this.finish(node);
        }
        return null;
    }
    _parseElementName() {
        const pos = this.mark();
        const node = super._parseElementName();
        if (node && !this.hasWhitespace() && this.peek(TokenType.ParenthesisL)) { // for #49589
            this.restoreAtMark(pos);
            return null;
        }
        return node;
    }
    _tryParsePseudoIdentifier() {
        return this._parseInterpolation() || super._tryParsePseudoIdentifier(); // for #49589
    }
    _parseWarnAndDebug() {
        if (!this.peekKeyword('@debug')
            && !this.peekKeyword('@warn')
            && !this.peekKeyword('@error')) {
            return null;
        }
        const node = this.createNode(NodeType.Debug);
        this.consumeToken(); // @debug, @warn or @error
        node.addChild(this._parseExpr()); // optional
        return this.finish(node);
    }
    _parseControlStatement(parseStatement = this._parseRuleSetDeclaration.bind(this)) {
        if (!this.peek(TokenType.AtKeyword)) {
            return null;
        }
        return this._parseIfStatement(parseStatement) || this._parseForStatement(parseStatement)
            || this._parseEachStatement(parseStatement) || this._parseWhileStatement(parseStatement);
    }
    _parseIfStatement(parseStatement) {
        if (!this.peekKeyword('@if')) {
            return null;
        }
        return this._internalParseIfStatement(parseStatement);
    }
    _internalParseIfStatement(parseStatement) {
        const node = this.create(IfStatement);
        this.consumeToken(); // @if or if
        if (!node.setExpression(this._parseExpr(true))) {
            return this.finish(node, ParseError.ExpressionExpected);
        }
        this._parseBody(node, parseStatement);
        if (this.acceptKeyword('@else')) {
            if (this.peekIdent('if')) {
                node.setElseClause(this._internalParseIfStatement(parseStatement));
            }
            else if (this.peek(TokenType.CurlyL)) {
                const elseNode = this.create(ElseStatement);
                this._parseBody(elseNode, parseStatement);
                node.setElseClause(elseNode);
            }
        }
        return this.finish(node);
    }
    _parseForStatement(parseStatement) {
        if (!this.peekKeyword('@for')) {
            return null;
        }
        const node = this.create(ForStatement);
        this.consumeToken(); // @for
        if (!node.setVariable(this._parseVariable())) {
            return this.finish(node, ParseError.VariableNameExpected, [TokenType.CurlyR]);
        }
        if (!this.acceptIdent('from')) {
            return this.finish(node, SCSSParseError.FromExpected, [TokenType.CurlyR]);
        }
        if (!node.addChild(this._parseBinaryExpr())) {
            return this.finish(node, ParseError.ExpressionExpected, [TokenType.CurlyR]);
        }
        if (!this.acceptIdent('to') && !this.acceptIdent('through')) {
            return this.finish(node, SCSSParseError.ThroughOrToExpected, [TokenType.CurlyR]);
        }
        if (!node.addChild(this._parseBinaryExpr())) {
            return this.finish(node, ParseError.ExpressionExpected, [TokenType.CurlyR]);
        }
        return this._parseBody(node, parseStatement);
    }
    _parseEachStatement(parseStatement) {
        if (!this.peekKeyword('@each')) {
            return null;
        }
        const node = this.create(EachStatement);
        this.consumeToken(); // @each
        const variables = node.getVariables();
        if (!variables.addChild(this._parseVariable())) {
            return this.finish(node, ParseError.VariableNameExpected, [TokenType.CurlyR]);
        }
        while (this.accept(TokenType.Comma)) {
            if (!variables.addChild(this._parseVariable())) {
                return this.finish(node, ParseError.VariableNameExpected, [TokenType.CurlyR]);
            }
        }
        this.finish(variables);
        if (!this.acceptIdent('in')) {
            return this.finish(node, SCSSParseError.InExpected, [TokenType.CurlyR]);
        }
        if (!node.addChild(this._parseExpr())) {
            return this.finish(node, ParseError.ExpressionExpected, [TokenType.CurlyR]);
        }
        return this._parseBody(node, parseStatement);
    }
    _parseWhileStatement(parseStatement) {
        if (!this.peekKeyword('@while')) {
            return null;
        }
        const node = this.create(WhileStatement);
        this.consumeToken(); // @while
        if (!node.addChild(this._parseBinaryExpr())) {
            return this.finish(node, ParseError.ExpressionExpected, [TokenType.CurlyR]);
        }
        return this._parseBody(node, parseStatement);
    }
    _parseFunctionBodyDeclaration() {
        return this._parseVariableDeclaration() || this._parseReturnStatement() || this._parseWarnAndDebug()
            || this._parseControlStatement(this._parseFunctionBodyDeclaration.bind(this));
    }
    _parseFunctionDeclaration() {
        if (!this.peekKeyword('@function')) {
            return null;
        }
        const node = this.create(FunctionDeclaration);
        this.consumeToken(); // @function
        if (!node.setIdentifier(this._parseIdent([ReferenceType.Function]))) {
            return this.finish(node, ParseError.IdentifierExpected, [TokenType.CurlyR]);
        }
        if (!this.accept(TokenType.ParenthesisL)) {
            return this.finish(node, ParseError.LeftParenthesisExpected, [TokenType.CurlyR]);
        }
        if (node.getParameters().addChild(this._parseParameterDeclaration())) {
            while (this.accept(TokenType.Comma)) {
                if (this.peek(TokenType.ParenthesisR)) {
                    break;
                }
                if (!node.getParameters().addChild(this._parseParameterDeclaration())) {
                    return this.finish(node, ParseError.VariableNameExpected);
                }
            }
        }
        if (!this.accept(TokenType.ParenthesisR)) {
            return this.finish(node, ParseError.RightParenthesisExpected, [TokenType.CurlyR]);
        }
        return this._parseBody(node, this._parseFunctionBodyDeclaration.bind(this));
    }
    _parseReturnStatement() {
        if (!this.peekKeyword('@return')) {
            return null;
        }
        const node = this.createNode(NodeType.ReturnStatement);
        this.consumeToken(); // @function
        if (!node.addChild(this._parseExpr())) {
            return this.finish(node, ParseError.ExpressionExpected);
        }
        return this.finish(node);
    }
    _parseMixinDeclaration() {
        if (!this.peekKeyword('@mixin')) {
            return null;
        }
        const node = this.create(MixinDeclaration);
        this.consumeToken();
        if (!node.setIdentifier(this._parseIdent([ReferenceType.Mixin]))) {
            return this.finish(node, ParseError.IdentifierExpected, [TokenType.CurlyR]);
        }
        if (this.accept(TokenType.ParenthesisL)) {
            if (node.getParameters().addChild(this._parseParameterDeclaration())) {
                while (this.accept(TokenType.Comma)) {
                    if (this.peek(TokenType.ParenthesisR)) {
                        break;
                    }
                    if (!node.getParameters().addChild(this._parseParameterDeclaration())) {
                        return this.finish(node, ParseError.VariableNameExpected);
                    }
                }
            }
            if (!this.accept(TokenType.ParenthesisR)) {
                return this.finish(node, ParseError.RightParenthesisExpected, [TokenType.CurlyR]);
            }
        }
        return this._parseBody(node, this._parseRuleSetDeclaration.bind(this));
    }
    _parseParameterDeclaration() {
        const node = this.create(FunctionParameter);
        if (!node.setIdentifier(this._parseVariable())) {
            return null;
        }
        if (this.accept(Ellipsis)) ;
        if (this.accept(TokenType.Colon)) {
            if (!node.setDefaultValue(this._parseExpr(true))) {
                return this.finish(node, ParseError.VariableValueExpected, [], [TokenType.Comma, TokenType.ParenthesisR]);
            }
        }
        return this.finish(node);
    }
    _parseMixinContent() {
        if (!this.peekKeyword('@content')) {
            return null;
        }
        const node = this.create(MixinContentReference);
        this.consumeToken();
        if (this.accept(TokenType.ParenthesisL)) {
            if (node.getArguments().addChild(this._parseFunctionArgument())) {
                while (this.accept(TokenType.Comma)) {
                    if (this.peek(TokenType.ParenthesisR)) {
                        break;
                    }
                    if (!node.getArguments().addChild(this._parseFunctionArgument())) {
                        return this.finish(node, ParseError.ExpressionExpected);
                    }
                }
            }
            if (!this.accept(TokenType.ParenthesisR)) {
                return this.finish(node, ParseError.RightParenthesisExpected);
            }
        }
        return this.finish(node);
    }
    _parseMixinReference() {
        if (!this.peekKeyword('@include')) {
            return null;
        }
        const node = this.create(MixinReference);
        this.consumeToken();
        // Could be module or mixin identifier, set as mixin as default.
        const firstIdent = this._parseIdent([ReferenceType.Mixin]);
        if (!node.setIdentifier(firstIdent)) {
            return this.finish(node, ParseError.IdentifierExpected, [TokenType.CurlyR]);
        }
        // Is a module accessor.
        if (!this.hasWhitespace() && this.acceptDelim('.') && !this.hasWhitespace()) {
            const secondIdent = this._parseIdent([ReferenceType.Mixin]);
            if (!secondIdent) {
                return this.finish(node, ParseError.IdentifierExpected, [TokenType.CurlyR]);
            }
            const moduleToken = this.create(Module);
            // Re-purpose first matched ident as identifier for module token.
            firstIdent.referenceTypes = [ReferenceType.Module];
            moduleToken.setIdentifier(firstIdent);
            // Override identifier with second ident.
            node.setIdentifier(secondIdent);
            node.addChild(moduleToken);
        }
        if (this.accept(TokenType.ParenthesisL)) {
            if (node.getArguments().addChild(this._parseFunctionArgument())) {
                while (this.accept(TokenType.Comma)) {
                    if (this.peek(TokenType.ParenthesisR)) {
                        break;
                    }
                    if (!node.getArguments().addChild(this._parseFunctionArgument())) {
                        return this.finish(node, ParseError.ExpressionExpected);
                    }
                }
            }
            if (!this.accept(TokenType.ParenthesisR)) {
                return this.finish(node, ParseError.RightParenthesisExpected);
            }
        }
        if (this.peekIdent('using') || this.peek(TokenType.CurlyL)) {
            node.setContent(this._parseMixinContentDeclaration());
        }
        return this.finish(node);
    }
    _parseMixinContentDeclaration() {
        const node = this.create(MixinContentDeclaration);
        if (this.acceptIdent('using')) {
            if (!this.accept(TokenType.ParenthesisL)) {
                return this.finish(node, ParseError.LeftParenthesisExpected, [TokenType.CurlyL]);
            }
            if (node.getParameters().addChild(this._parseParameterDeclaration())) {
                while (this.accept(TokenType.Comma)) {
                    if (this.peek(TokenType.ParenthesisR)) {
                        break;
                    }
                    if (!node.getParameters().addChild(this._parseParameterDeclaration())) {
                        return this.finish(node, ParseError.VariableNameExpected);
                    }
                }
            }
            if (!this.accept(TokenType.ParenthesisR)) {
                return this.finish(node, ParseError.RightParenthesisExpected, [TokenType.CurlyL]);
            }
        }
        if (this.peek(TokenType.CurlyL)) {
            this._parseBody(node, this._parseMixinReferenceBodyStatement.bind(this));
        }
        return this.finish(node);
    }
    _parseMixinReferenceBodyStatement() {
        return this._tryParseKeyframeSelector() || this._parseRuleSetDeclaration();
    }
    _parseFunctionArgument() {
        // [variableName ':'] expression | variableName '...'
        const node = this.create(FunctionArgument);
        const pos = this.mark();
        const argument = this._parseVariable();
        if (argument) {
            if (!this.accept(TokenType.Colon)) {
                if (this.accept(Ellipsis)) { // optional
                    node.setValue(argument);
                    return this.finish(node);
                }
                else {
                    this.restoreAtMark(pos);
                }
            }
            else {
                node.setIdentifier(argument);
            }
        }
        if (node.setValue(this._parseExpr(true))) {
            this.accept(Ellipsis); // #43746
            node.addChild(this._parsePrio()); // #9859
            return this.finish(node);
        }
        else if (node.setValue(this._tryParsePrio())) {
            return this.finish(node);
        }
        return null;
    }
    _parseURLArgument() {
        const pos = this.mark();
        const node = super._parseURLArgument();
        if (!node || !this.peek(TokenType.ParenthesisR)) {
            this.restoreAtMark(pos);
            const node = this.create(Node);
            node.addChild(this._parseBinaryExpr());
            return this.finish(node);
        }
        return node;
    }
    _parseOperation() {
        if (!this.peek(TokenType.ParenthesisL)) {
            return null;
        }
        const node = this.create(Node);
        this.consumeToken();
        while (node.addChild(this._parseListElement())) {
            this.accept(TokenType.Comma); // optional
        }
        if (!this.accept(TokenType.ParenthesisR)) {
            return this.finish(node, ParseError.RightParenthesisExpected);
        }
        return this.finish(node);
    }
    _parseListElement() {
        const node = this.create(ListEntry);
        const child = this._parseBinaryExpr();
        if (!child) {
            return null;
        }
        if (this.accept(TokenType.Colon)) {
            node.setKey(child);
            if (!node.setValue(this._parseBinaryExpr())) {
                return this.finish(node, ParseError.ExpressionExpected);
            }
        }
        else {
            node.setValue(child);
        }
        return this.finish(node);
    }
    _parseUse() {
        if (!this.peekKeyword('@use')) {
            return null;
        }
        const node = this.create(Use);
        this.consumeToken(); // @use
        if (!node.addChild(this._parseStringLiteral())) {
            return this.finish(node, ParseError.StringLiteralExpected);
        }
        if (!this.peek(TokenType.SemiColon) && !this.peek(TokenType.EOF)) {
            if (!this.peekRegExp(TokenType.Ident, /as|with/)) {
                return this.finish(node, ParseError.UnknownKeyword);
            }
            if (this.acceptIdent('as') &&
                (!node.setIdentifier(this._parseIdent([ReferenceType.Module])) && !this.acceptDelim('*'))) {
                return this.finish(node, ParseError.IdentifierOrWildcardExpected);
            }
            if (this.acceptIdent('with')) {
                if (!this.accept(TokenType.ParenthesisL)) {
                    return this.finish(node, ParseError.LeftParenthesisExpected, [TokenType.ParenthesisR]);
                }
                // First variable statement, no comma.
                if (!node.getParameters().addChild(this._parseModuleConfigDeclaration())) {
                    return this.finish(node, ParseError.VariableNameExpected);
                }
                while (this.accept(TokenType.Comma)) {
                    if (this.peek(TokenType.ParenthesisR)) {
                        break;
                    }
                    if (!node.getParameters().addChild(this._parseModuleConfigDeclaration())) {
                        return this.finish(node, ParseError.VariableNameExpected);
                    }
                }
                if (!this.accept(TokenType.ParenthesisR)) {
                    return this.finish(node, ParseError.RightParenthesisExpected);
                }
            }
        }
        if (!this.accept(TokenType.SemiColon) && !this.accept(TokenType.EOF)) {
            return this.finish(node, ParseError.SemiColonExpected);
        }
        return this.finish(node);
    }
    _parseModuleConfigDeclaration() {
        const node = this.create(ModuleConfiguration);
        if (!node.setIdentifier(this._parseVariable())) {
            return null;
        }
        if (!this.accept(TokenType.Colon) || !node.setValue(this._parseExpr(true))) {
            return this.finish(node, ParseError.VariableValueExpected, [], [TokenType.Comma, TokenType.ParenthesisR]);
        }
        if (this.accept(TokenType.Exclamation)) {
            if (this.hasWhitespace() || !this.acceptIdent('default')) {
                return this.finish(node, ParseError.UnknownKeyword);
            }
        }
        return this.finish(node);
    }
    _parseForward() {
        if (!this.peekKeyword('@forward')) {
            return null;
        }
        const node = this.create(Forward);
        this.consumeToken();
        if (!node.addChild(this._parseStringLiteral())) {
            return this.finish(node, ParseError.StringLiteralExpected);
        }
        if (this.acceptIdent('as')) {
            const identifier = this._parseIdent([ReferenceType.Forward]);
            if (!node.setIdentifier(identifier)) {
                return this.finish(node, ParseError.IdentifierExpected);
            }
            // Wildcard must be the next character after the identifier string.
            if (this.hasWhitespace() || !this.acceptDelim('*')) {
                return this.finish(node, ParseError.WildcardExpected);
            }
        }
        if (this.acceptIdent('with')) {
            if (!this.accept(TokenType.ParenthesisL)) {
                return this.finish(node, ParseError.LeftParenthesisExpected, [TokenType.ParenthesisR]);
            }
            // First variable statement, no comma.
            if (!node.getParameters().addChild(this._parseModuleConfigDeclaration())) {
                return this.finish(node, ParseError.VariableNameExpected);
            }
            while (this.accept(TokenType.Comma)) {
                if (this.peek(TokenType.ParenthesisR)) {
                    break;
                }
                if (!node.getParameters().addChild(this._parseModuleConfigDeclaration())) {
                    return this.finish(node, ParseError.VariableNameExpected);
                }
            }
            if (!this.accept(TokenType.ParenthesisR)) {
                return this.finish(node, ParseError.RightParenthesisExpected);
            }
        }
        else if (this.peekIdent('hide') || this.peekIdent('show')) {
            if (!node.addChild(this._parseForwardVisibility())) {
                return this.finish(node, ParseError.IdentifierOrVariableExpected);
            }
        }
        if (!this.accept(TokenType.SemiColon) && !this.accept(TokenType.EOF)) {
            return this.finish(node, ParseError.SemiColonExpected);
        }
        return this.finish(node);
    }
    _parseForwardVisibility() {
        const node = this.create(ForwardVisibility);
        // Assume to be "hide" or "show".
        node.setIdentifier(this._parseIdent());
        while (node.addChild(this._parseVariable() || this._parseIdent())) {
            // Consume all variables and idents ahead.
            this.accept(TokenType.Comma);
        }
        // More than just identifier
        return node.getChildren().length > 1 ? node : null;
    }
    _parseSupportsCondition() {
        return this._parseInterpolation() || super._parseSupportsCondition();
    }
}

export { SCSSParser };
