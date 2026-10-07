(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@vscode/l10n"], factory);
    }
})(function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ParseError = exports.CSSIssueType = void 0;
    const l10n = require("@vscode/l10n");
    class CSSIssueType {
        constructor(id, message) {
            this.id = id;
            this.message = message;
        }
    }
    exports.CSSIssueType = CSSIssueType;
    exports.ParseError = {
        NumberExpected: new CSSIssueType('css-numberexpected', l10n.t("number expected")),
        ConditionExpected: new CSSIssueType('css-conditionexpected', l10n.t("condition expected")),
        RuleOrSelectorExpected: new CSSIssueType('css-ruleorselectorexpected', l10n.t("at-rule or selector expected")),
        DotExpected: new CSSIssueType('css-dotexpected', l10n.t("dot expected")),
        ColonExpected: new CSSIssueType('css-colonexpected', l10n.t("colon expected")),
        SemiColonExpected: new CSSIssueType('css-semicolonexpected', l10n.t("semi-colon expected")),
        TermExpected: new CSSIssueType('css-termexpected', l10n.t("term expected")),
        ExpressionExpected: new CSSIssueType('css-expressionexpected', l10n.t("expression expected")),
        OperatorExpected: new CSSIssueType('css-operatorexpected', l10n.t("operator expected")),
        IdentifierExpected: new CSSIssueType('css-identifierexpected', l10n.t("identifier expected")),
        PercentageExpected: new CSSIssueType('css-percentageexpected', l10n.t("percentage expected")),
        URIOrStringExpected: new CSSIssueType('css-uriorstringexpected', l10n.t("uri or string expected")),
        URIExpected: new CSSIssueType('css-uriexpected', l10n.t("URI expected")),
        VariableNameExpected: new CSSIssueType('css-varnameexpected', l10n.t("variable name expected")),
        VariableValueExpected: new CSSIssueType('css-varvalueexpected', l10n.t("variable value expected")),
        PropertyValueExpected: new CSSIssueType('css-propertyvalueexpected', l10n.t("property value expected")),
        LeftCurlyExpected: new CSSIssueType('css-lcurlyexpected', l10n.t("{ expected")),
        RightCurlyExpected: new CSSIssueType('css-rcurlyexpected', l10n.t("} expected")),
        LeftSquareBracketExpected: new CSSIssueType('css-rbracketexpected', l10n.t("[ expected")),
        RightSquareBracketExpected: new CSSIssueType('css-lbracketexpected', l10n.t("] expected")),
        LeftParenthesisExpected: new CSSIssueType('css-lparentexpected', l10n.t("( expected")),
        RightParenthesisExpected: new CSSIssueType('css-rparentexpected', l10n.t(") expected")),
        CommaExpected: new CSSIssueType('css-commaexpected', l10n.t("comma expected")),
        PageDirectiveOrDeclarationExpected: new CSSIssueType('css-pagedirordeclexpected', l10n.t("page directive or declaraton expected")),
        UnknownAtRule: new CSSIssueType('css-unknownatrule', l10n.t("at-rule unknown")),
        UnknownKeyword: new CSSIssueType('css-unknownkeyword', l10n.t("unknown keyword")),
        SelectorExpected: new CSSIssueType('css-selectorexpected', l10n.t("selector expected")),
        StringLiteralExpected: new CSSIssueType('css-stringliteralexpected', l10n.t("string literal expected")),
        WhitespaceExpected: new CSSIssueType('css-whitespaceexpected', l10n.t("whitespace expected")),
        MediaQueryExpected: new CSSIssueType('css-mediaqueryexpected', l10n.t("media query expected")),
        IdentifierOrWildcardExpected: new CSSIssueType('css-idorwildcardexpected', l10n.t("identifier or wildcard expected")),
        WildcardExpected: new CSSIssueType('css-wildcardexpected', l10n.t("wildcard expected")),
        IdentifierOrVariableExpected: new CSSIssueType('css-idorvarexpected', l10n.t("identifier or variable expected")),
        IfConditionExpected: new CSSIssueType('css-ifconditionexpected', l10n.t("if condition expected")),
    };
});
