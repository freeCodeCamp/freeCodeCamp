(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@vscode/l10n", "../languageFacts/facts", "../parser/cssNodes", "../utils/arrays", "./lintRules", "./lintUtil"], factory);
    }
})(function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LintVisitor = void 0;
    const l10n = require("@vscode/l10n");
    const languageFacts = require("../languageFacts/facts");
    const nodes = require("../parser/cssNodes");
    const arrays_1 = require("../utils/arrays");
    const lintRules_1 = require("./lintRules");
    const lintUtil_1 = require("./lintUtil");
    class NodesByRootMap {
        constructor() {
            this.data = {};
        }
        add(root, name, node) {
            let entry = this.data[root];
            if (!entry) {
                entry = { nodes: [], names: [] };
                this.data[root] = entry;
            }
            entry.names.push(name);
            if (node) {
                entry.nodes.push(node);
            }
        }
    }
    class LintVisitor {
        static entries(node, document, settings, cssDataManager, entryFilter) {
            const visitor = new LintVisitor(document, settings, cssDataManager);
            node.acceptVisitor(visitor);
            visitor.completeValidations();
            return visitor.getEntries(entryFilter);
        }
        constructor(document, settings, cssDataManager) {
            this.cssDataManager = cssDataManager;
            this.warnings = [];
            this.settings = settings;
            this.documentText = document.getText();
            this.keyframes = new NodesByRootMap();
            this.validProperties = {};
            const properties = settings.getSetting(lintRules_1.Settings.ValidProperties);
            if (Array.isArray(properties)) {
                properties.forEach((p) => {
                    if (typeof p === 'string') {
                        const name = p.trim().toLowerCase();
                        if (name.length) {
                            this.validProperties[name] = true;
                        }
                    }
                });
            }
        }
        isValidPropertyDeclaration(element) {
            const propertyName = element.fullPropertyName;
            return this.validProperties[propertyName];
        }
        fetch(input, s) {
            const elements = [];
            for (const curr of input) {
                if (curr.fullPropertyName === s) {
                    elements.push(curr);
                }
            }
            return elements;
        }
        fetchWithValue(input, s, v) {
            const elements = [];
            for (const inputElement of input) {
                if (inputElement.fullPropertyName === s) {
                    const expression = inputElement.node.getValue();
                    if (expression && this.findValueInExpression(expression, v)) {
                        elements.push(inputElement);
                    }
                }
            }
            return elements;
        }
        findValueInExpression(expression, v) {
            let found = false;
            expression.accept(node => {
                if (node.type === nodes.NodeType.Identifier && node.matches(v)) {
                    found = true;
                }
                return !found;
            });
            return found;
        }
        getEntries(filter = (nodes.Level.Warning | nodes.Level.Error)) {
            return this.warnings.filter(entry => {
                return (entry.getLevel() & filter) !== 0;
            });
        }
        addEntry(node, rule, details) {
            const entry = new nodes.Marker(node, rule, this.settings.getRule(rule), details);
            this.warnings.push(entry);
        }
        getMissingNames(expected, actual) {
            const expectedClone = expected.slice(0); // clone
            for (let i = 0; i < actual.length; i++) {
                const k = expectedClone.indexOf(actual[i]);
                if (k !== -1) {
                    expectedClone[k] = null;
                }
            }
            let result = null;
            for (let i = 0; i < expectedClone.length; i++) {
                const curr = expectedClone[i];
                if (curr) {
                    if (result === null) {
                        result = l10n.t("'{0}'", curr);
                    }
                    else {
                        result = l10n.t("{0}, '{1}'", result, curr);
                    }
                }
            }
            return result;
        }
        visitNode(node) {
            switch (node.type) {
                case nodes.NodeType.UnknownAtRule:
                    return this.visitUnknownAtRule(node);
                case nodes.NodeType.Keyframe:
                    return this.visitKeyframe(node);
                case nodes.NodeType.FontFace:
                    return this.visitFontFace(node);
                case nodes.NodeType.Ruleset:
                    return this.visitRuleSet(node);
                case nodes.NodeType.SimpleSelector:
                    return this.visitSimpleSelector(node);
                case nodes.NodeType.Function:
                    return this.visitFunction(node);
                case nodes.NodeType.NumericValue:
                    return this.visitNumericValue(node);
                case nodes.NodeType.Import:
                    return this.visitImport(node);
                case nodes.NodeType.HexColorValue:
                    return this.visitHexColorValue(node);
                case nodes.NodeType.Prio:
                    return this.visitPrio(node);
                case nodes.NodeType.IdentifierSelector:
                    return this.visitIdentifierSelector(node);
            }
            return true;
        }
        completeValidations() {
            this.validateKeyframes();
        }
        visitUnknownAtRule(node) {
            const atRuleName = node.getChild(0);
            if (!atRuleName) {
                return false;
            }
            const atDirective = this.cssDataManager.getAtDirective(atRuleName.getText());
            if (atDirective) {
                return false;
            }
            this.addEntry(atRuleName, lintRules_1.Rules.UnknownAtRules, `Unknown at rule ${atRuleName.getText()}`);
            return true;
        }
        visitKeyframe(node) {
            const keyword = node.getKeyword();
            if (!keyword) {
                return false;
            }
            const text = keyword.getText();
            this.keyframes.add(node.getName(), text, (text !== '@keyframes') ? keyword : null);
            return true;
        }
        validateKeyframes() {
            // @keyframe and it's vendor specific alternatives
            // @keyframe should be included
            const expected = ['@-webkit-keyframes', '@-moz-keyframes', '@-o-keyframes'];
            for (const name in this.keyframes.data) {
                const actual = this.keyframes.data[name].names;
                const needsStandard = (actual.indexOf('@keyframes') === -1);
                if (!needsStandard && actual.length === 1) {
                    continue; // only the non-vendor specific keyword is used, that's fine, no warning
                }
                const missingVendorSpecific = this.getMissingNames(expected, actual);
                if (missingVendorSpecific || needsStandard) {
                    for (const node of this.keyframes.data[name].nodes) {
                        if (needsStandard) {
                            const message = l10n.t("Always define standard rule '@keyframes' when defining keyframes.");
                            this.addEntry(node, lintRules_1.Rules.IncludeStandardPropertyWhenUsingVendorPrefix, message);
                        }
                        if (missingVendorSpecific) {
                            const message = l10n.t("Always include all vendor specific rules: Missing: {0}", missingVendorSpecific);
                            this.addEntry(node, lintRules_1.Rules.AllVendorPrefixes, message);
                        }
                    }
                }
            }
            return true;
        }
        visitSimpleSelector(node) {
            /////////////////////////////////////////////////////////////
            //	Lint - The universal selector (*) is known to be slow.
            /////////////////////////////////////////////////////////////
            const firstChar = this.documentText.charAt(node.offset);
            if (node.length === 1 && firstChar === '*') {
                this.addEntry(node, lintRules_1.Rules.UniversalSelector);
            }
            return true;
        }
        visitIdentifierSelector(node) {
            /////////////////////////////////////////////////////////////
            //	Lint - Avoid id selectors
            /////////////////////////////////////////////////////////////
            this.addEntry(node, lintRules_1.Rules.AvoidIdSelector);
            return true;
        }
        visitImport(node) {
            /////////////////////////////////////////////////////////////
            //	Lint - Import statements shouldn't be used, because they aren't offering parallel downloads.
            /////////////////////////////////////////////////////////////
            this.addEntry(node, lintRules_1.Rules.ImportStatemement);
            return true;
        }
        visitRuleSet(node) {
            /////////////////////////////////////////////////////////////
            //	Lint - Don't use empty rulesets.
            /////////////////////////////////////////////////////////////
            const declarations = node.getDeclarations();
            if (!declarations) {
                // syntax error
                return false;
            }
            if (!declarations.hasChildren()) {
                this.addEntry(node.getSelectors(), lintRules_1.Rules.EmptyRuleSet);
            }
            const propertyTable = [];
            for (const element of declarations.getChildren()) {
                if (element instanceof nodes.Declaration) {
                    propertyTable.push(new lintUtil_1.Element(element));
                }
            }
            /////////////////////////////////////////////////////////////
            // the rule warns when it finds:
            // width being used with border, border-left, border-right, padding, padding-left, or padding-right
            // height being used with border, border-top, border-bottom, padding, padding-top, or padding-bottom
            // No error when box-sizing property is specified, as it assumes the user knows what he's doing.
            // see https://github.com/CSSLint/csslint/wiki/Beware-of-box-model-size
            /////////////////////////////////////////////////////////////
            const boxModel = (0, lintUtil_1.default)(propertyTable);
            if (boxModel.width) {
                let properties = [];
                if (boxModel.right.value) {
                    properties = (0, arrays_1.union)(properties, boxModel.right.properties);
                }
                if (boxModel.left.value) {
                    properties = (0, arrays_1.union)(properties, boxModel.left.properties);
                }
                if (properties.length !== 0) {
                    for (const item of properties) {
                        this.addEntry(item.node, lintRules_1.Rules.BewareOfBoxModelSize);
                    }
                    this.addEntry(boxModel.width.node, lintRules_1.Rules.BewareOfBoxModelSize);
                }
            }
            if (boxModel.height) {
                let properties = [];
                if (boxModel.top.value) {
                    properties = (0, arrays_1.union)(properties, boxModel.top.properties);
                }
                if (boxModel.bottom.value) {
                    properties = (0, arrays_1.union)(properties, boxModel.bottom.properties);
                }
                if (properties.length !== 0) {
                    for (const item of properties) {
                        this.addEntry(item.node, lintRules_1.Rules.BewareOfBoxModelSize);
                    }
                    this.addEntry(boxModel.height.node, lintRules_1.Rules.BewareOfBoxModelSize);
                }
            }
            /////////////////////////////////////////////////////////////
            //	Properties ignored due to display
            /////////////////////////////////////////////////////////////
            // With 'display: inline-block', 'float' has no effect
            let displayElems = this.fetchWithValue(propertyTable, 'display', 'inline-block');
            if (displayElems.length > 0) {
                const elem = this.fetch(propertyTable, 'float');
                for (let index = 0; index < elem.length; index++) {
                    const node = elem[index].node;
                    const value = node.getValue();
                    if (value && !value.matches('none')) {
                        this.addEntry(node, lintRules_1.Rules.PropertyIgnoredDueToDisplay, l10n.t("inline-block is ignored due to the float. If 'float' has a value other than 'none', the box is floated and 'display' is treated as 'block'"));
                    }
                }
            }
            // With 'display: block', 'vertical-align' has no effect
            displayElems = this.fetchWithValue(propertyTable, 'display', 'block');
            if (displayElems.length > 0) {
                const elem = this.fetch(propertyTable, 'vertical-align');
                for (let index = 0; index < elem.length; index++) {
                    this.addEntry(elem[index].node, lintRules_1.Rules.PropertyIgnoredDueToDisplay, l10n.t("Property is ignored due to the display. With 'display: block', vertical-align should not be used."));
                }
            }
            /////////////////////////////////////////////////////////////
            //	Avoid 'float'
            /////////////////////////////////////////////////////////////
            const elements = this.fetch(propertyTable, 'float');
            for (let index = 0; index < elements.length; index++) {
                const element = elements[index];
                if (!this.isValidPropertyDeclaration(element)) {
                    this.addEntry(element.node, lintRules_1.Rules.AvoidFloat);
                }
            }
            /////////////////////////////////////////////////////////////
            //	Don't use duplicate declarations.
            /////////////////////////////////////////////////////////////
            for (let i = 0; i < propertyTable.length; i++) {
                const element = propertyTable[i];
                if (element.fullPropertyName !== 'background' && !this.validProperties[element.fullPropertyName]) {
                    const value = element.node.getValue();
                    if (value && this.documentText.charAt(value.offset) !== '-') {
                        const elements = this.fetch(propertyTable, element.fullPropertyName);
                        if (elements.length > 1) {
                            for (let k = 0; k < elements.length; k++) {
                                const value = elements[k].node.getValue();
                                if (value && this.documentText.charAt(value.offset) !== '-' && elements[k] !== element) {
                                    this.addEntry(element.node, lintRules_1.Rules.DuplicateDeclarations);
                                }
                            }
                        }
                    }
                }
            }
            /////////////////////////////////////////////////////////////
            //	Unknown propery & When using a vendor-prefixed gradient, make sure to use them all.
            /////////////////////////////////////////////////////////////
            const isExportBlock = node.getSelectors().matches(":export");
            if (!isExportBlock) {
                const propertiesBySuffix = new NodesByRootMap();
                let containsUnknowns = false;
                for (const element of propertyTable) {
                    const decl = element.node;
                    if (this.isCSSDeclaration(decl)) {
                        let name = element.fullPropertyName;
                        const firstChar = name.charAt(0);
                        if (firstChar === '-') {
                            if (name.charAt(1) !== '-') { // avoid css variables
                                if (!this.cssDataManager.isKnownProperty(name) && !this.validProperties[name]) {
                                    this.addEntry(decl.getProperty(), lintRules_1.Rules.UnknownVendorSpecificProperty);
                                }
                                const nonPrefixedName = decl.getNonPrefixedPropertyName();
                                propertiesBySuffix.add(nonPrefixedName, name, decl.getProperty());
                            }
                        }
                        else {
                            const fullName = name;
                            if (firstChar === '*' || firstChar === '_') {
                                this.addEntry(decl.getProperty(), lintRules_1.Rules.IEStarHack);
                                name = name.substr(1);
                            }
                            // _property and *property might be contributed via custom data
                            if (!this.cssDataManager.isKnownProperty(fullName) && !this.cssDataManager.isKnownProperty(name)) {
                                if (!this.validProperties[name]) {
                                    this.addEntry(decl.getProperty(), lintRules_1.Rules.UnknownProperty, l10n.t("Unknown property: '{0}'", decl.getFullPropertyName()));
                                }
                            }
                            propertiesBySuffix.add(name, name, null); // don't pass the node as we don't show errors on the standard
                        }
                    }
                    else {
                        containsUnknowns = true;
                    }
                }
                if (!containsUnknowns) { // don't perform this test if there are
                    for (const suffix in propertiesBySuffix.data) {
                        const entry = propertiesBySuffix.data[suffix];
                        const actual = entry.names;
                        const needsStandard = this.cssDataManager.isStandardProperty(suffix) && (actual.indexOf(suffix) === -1);
                        if (!needsStandard && actual.length === 1) {
                            continue; // only the non-vendor specific rule is used, that's fine, no warning
                        }
                        /**
                         * We should ignore missing standard properties, if there's an explicit contextual reference to a
                         * vendor specific pseudo-element selector with the same vendor (prefix)
                         *
                         * (See https://github.com/microsoft/vscode/issues/164350)
                         */
                        const entriesThatNeedStandard = new Set(needsStandard ? entry.nodes : []);
                        if (needsStandard) {
                            const pseudoElements = this.getContextualVendorSpecificPseudoElements(node);
                            for (const node of entry.nodes) {
                                const propertyName = node.getName();
                                const prefix = propertyName.substring(0, propertyName.length - suffix.length);
                                if (pseudoElements.some(x => x.startsWith(prefix))) {
                                    entriesThatNeedStandard.delete(node);
                                }
                            }
                        }
                        const expected = [];
                        for (let i = 0, len = LintVisitor.prefixes.length; i < len; i++) {
                            const prefix = LintVisitor.prefixes[i];
                            if (this.cssDataManager.isStandardProperty(prefix + suffix)) {
                                expected.push(prefix + suffix);
                            }
                        }
                        const missingVendorSpecific = this.getMissingNames(expected, actual);
                        if (missingVendorSpecific || needsStandard) {
                            for (const node of entry.nodes) {
                                if (needsStandard && entriesThatNeedStandard.has(node)) {
                                    const message = l10n.t("Also define the standard property '{0}' for compatibility", suffix);
                                    this.addEntry(node, lintRules_1.Rules.IncludeStandardPropertyWhenUsingVendorPrefix, message);
                                }
                                if (missingVendorSpecific) {
                                    const message = l10n.t("Always include all vendor specific properties: Missing: {0}", missingVendorSpecific);
                                    this.addEntry(node, lintRules_1.Rules.AllVendorPrefixes, message);
                                }
                            }
                        }
                    }
                }
            }
            return true;
        }
        /**
         * Walks up the syntax tree (starting from given `node`) and captures vendor
         * specific pseudo-element selectors.
         * @returns An array of vendor specific pseudo-elements; or empty if none
         * was found.
         */
        getContextualVendorSpecificPseudoElements(node) {
            function walkDown(s, n) {
                for (const child of n.getChildren()) {
                    if (child.type === nodes.NodeType.PseudoSelector) {
                        const pseudoElement = child.getChildren()[0]?.getText();
                        if (pseudoElement) {
                            s.add(pseudoElement);
                        }
                    }
                    walkDown(s, child);
                }
            }
            function walkUp(s, n) {
                if (n.type === nodes.NodeType.Ruleset) {
                    for (const selector of n.getSelectors().getChildren()) {
                        walkDown(s, selector);
                    }
                }
                return n.parent ? walkUp(s, n.parent) : undefined;
            }
            const result = new Set();
            walkUp(result, node);
            return Array.from(result);
        }
        visitPrio(node) {
            /////////////////////////////////////////////////////////////
            //	Don't use !important
            /////////////////////////////////////////////////////////////
            this.addEntry(node, lintRules_1.Rules.AvoidImportant);
            return true;
        }
        visitNumericValue(node) {
            /////////////////////////////////////////////////////////////
            //	0 has no following unit
            /////////////////////////////////////////////////////////////
            const funcDecl = node.findParent(nodes.NodeType.Function);
            if (funcDecl && funcDecl.getName() === 'calc') {
                return true;
            }
            const decl = node.findParent(nodes.NodeType.Declaration);
            if (decl) {
                const declValue = decl.getValue();
                if (declValue) {
                    const value = node.getValue();
                    if (!value.unit || languageFacts.units.length.indexOf(value.unit.toLowerCase()) === -1) {
                        return true;
                    }
                    if (parseFloat(value.value) === 0.0 && !!value.unit && !this.validProperties[decl.getFullPropertyName()]) {
                        this.addEntry(node, lintRules_1.Rules.ZeroWithUnit);
                    }
                }
            }
            return true;
        }
        visitFontFace(node) {
            const declarations = node.getDeclarations();
            if (!declarations) {
                // syntax error
                return false;
            }
            let definesSrc = false, definesFontFamily = false;
            let containsUnknowns = false;
            for (const node of declarations.getChildren()) {
                if (this.isCSSDeclaration(node)) {
                    const name = node.getProperty().getName().toLowerCase();
                    if (name === 'src') {
                        definesSrc = true;
                    }
                    if (name === 'font-family') {
                        definesFontFamily = true;
                    }
                }
                else {
                    containsUnknowns = true;
                }
            }
            if (!containsUnknowns && (!definesSrc || !definesFontFamily)) {
                this.addEntry(node, lintRules_1.Rules.RequiredPropertiesForFontFace);
            }
            return true;
        }
        isCSSDeclaration(node) {
            if (node instanceof nodes.Declaration) {
                if (!node.getValue()) {
                    return false;
                }
                const property = node.getProperty();
                if (!property) {
                    return false;
                }
                const identifier = property.getIdentifier();
                if (!identifier || identifier.containsInterpolation()) {
                    return false;
                }
                return true;
            }
            return false;
        }
        visitHexColorValue(node) {
            // Rule: #eeff0011 or #eeff00 or #ef01 or #ef0
            const length = node.length;
            if (length !== 9 && length !== 7 && length !== 5 && length !== 4) {
                this.addEntry(node, lintRules_1.Rules.HexColorLength);
            }
            return false;
        }
        visitFunction(node) {
            const fnName = node.getName().toLowerCase();
            let expectedAttrCount = -1;
            let actualAttrCount = 0;
            switch (fnName) {
                case 'rgb(':
                case 'hsl(':
                    expectedAttrCount = 3;
                    break;
                case 'rgba(':
                case 'hsla(':
                    expectedAttrCount = 4;
                    break;
            }
            if (expectedAttrCount !== -1) {
                node.getArguments().accept(n => {
                    if (n instanceof nodes.BinaryExpression) {
                        actualAttrCount += 1;
                        return false;
                    }
                    return true;
                });
                if (actualAttrCount !== expectedAttrCount) {
                    this.addEntry(node, lintRules_1.Rules.ArgsInColorFunction);
                }
            }
            return true;
        }
    }
    exports.LintVisitor = LintVisitor;
    LintVisitor.prefixes = [
        '-ms-', '-moz-', '-o-', '-webkit-', // Quite common
        //		'-xv-', '-atsc-', '-wap-', '-khtml-', 'mso-', 'prince-', '-ah-', '-hp-', '-ro-', '-rim-', '-tc-' // Quite un-common
    ];
});
