/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
import { trim } from "../utils/strings";
/// <summary>
/// Nodes for the css 2.1 specification. See for reference:
/// http://www.w3.org/TR/CSS21/grammar.html#grammar
/// </summary>
export var NodeType;
(function (NodeType) {
    NodeType[NodeType["Undefined"] = 0] = "Undefined";
    NodeType[NodeType["Identifier"] = 1] = "Identifier";
    NodeType[NodeType["Stylesheet"] = 2] = "Stylesheet";
    NodeType[NodeType["Ruleset"] = 3] = "Ruleset";
    NodeType[NodeType["Selector"] = 4] = "Selector";
    NodeType[NodeType["SimpleSelector"] = 5] = "SimpleSelector";
    NodeType[NodeType["SelectorInterpolation"] = 6] = "SelectorInterpolation";
    NodeType[NodeType["SelectorCombinator"] = 7] = "SelectorCombinator";
    NodeType[NodeType["SelectorCombinatorParent"] = 8] = "SelectorCombinatorParent";
    NodeType[NodeType["SelectorCombinatorSibling"] = 9] = "SelectorCombinatorSibling";
    NodeType[NodeType["SelectorCombinatorAllSiblings"] = 10] = "SelectorCombinatorAllSiblings";
    NodeType[NodeType["SelectorCombinatorShadowPiercingDescendant"] = 11] = "SelectorCombinatorShadowPiercingDescendant";
    NodeType[NodeType["Page"] = 12] = "Page";
    NodeType[NodeType["PageBoxMarginBox"] = 13] = "PageBoxMarginBox";
    NodeType[NodeType["ClassSelector"] = 14] = "ClassSelector";
    NodeType[NodeType["IdentifierSelector"] = 15] = "IdentifierSelector";
    NodeType[NodeType["ElementNameSelector"] = 16] = "ElementNameSelector";
    NodeType[NodeType["PseudoSelector"] = 17] = "PseudoSelector";
    NodeType[NodeType["AttributeSelector"] = 18] = "AttributeSelector";
    NodeType[NodeType["Declaration"] = 19] = "Declaration";
    NodeType[NodeType["Declarations"] = 20] = "Declarations";
    NodeType[NodeType["Property"] = 21] = "Property";
    NodeType[NodeType["Expression"] = 22] = "Expression";
    NodeType[NodeType["BinaryExpression"] = 23] = "BinaryExpression";
    NodeType[NodeType["Term"] = 24] = "Term";
    NodeType[NodeType["Operator"] = 25] = "Operator";
    NodeType[NodeType["Value"] = 26] = "Value";
    NodeType[NodeType["StringLiteral"] = 27] = "StringLiteral";
    NodeType[NodeType["URILiteral"] = 28] = "URILiteral";
    NodeType[NodeType["EscapedValue"] = 29] = "EscapedValue";
    NodeType[NodeType["Function"] = 30] = "Function";
    NodeType[NodeType["NumericValue"] = 31] = "NumericValue";
    NodeType[NodeType["HexColorValue"] = 32] = "HexColorValue";
    NodeType[NodeType["RatioValue"] = 33] = "RatioValue";
    NodeType[NodeType["MixinDeclaration"] = 34] = "MixinDeclaration";
    NodeType[NodeType["MixinReference"] = 35] = "MixinReference";
    NodeType[NodeType["VariableName"] = 36] = "VariableName";
    NodeType[NodeType["VariableDeclaration"] = 37] = "VariableDeclaration";
    NodeType[NodeType["Prio"] = 38] = "Prio";
    NodeType[NodeType["Interpolation"] = 39] = "Interpolation";
    NodeType[NodeType["NestedProperties"] = 40] = "NestedProperties";
    NodeType[NodeType["ExtendsReference"] = 41] = "ExtendsReference";
    NodeType[NodeType["SelectorPlaceholder"] = 42] = "SelectorPlaceholder";
    NodeType[NodeType["Debug"] = 43] = "Debug";
    NodeType[NodeType["If"] = 44] = "If";
    NodeType[NodeType["Else"] = 45] = "Else";
    NodeType[NodeType["For"] = 46] = "For";
    NodeType[NodeType["Each"] = 47] = "Each";
    NodeType[NodeType["While"] = 48] = "While";
    NodeType[NodeType["MixinContentReference"] = 49] = "MixinContentReference";
    NodeType[NodeType["MixinContentDeclaration"] = 50] = "MixinContentDeclaration";
    NodeType[NodeType["Media"] = 51] = "Media";
    NodeType[NodeType["Scope"] = 52] = "Scope";
    NodeType[NodeType["Keyframe"] = 53] = "Keyframe";
    NodeType[NodeType["FontFace"] = 54] = "FontFace";
    NodeType[NodeType["Import"] = 55] = "Import";
    NodeType[NodeType["Namespace"] = 56] = "Namespace";
    NodeType[NodeType["Invocation"] = 57] = "Invocation";
    NodeType[NodeType["FunctionDeclaration"] = 58] = "FunctionDeclaration";
    NodeType[NodeType["ReturnStatement"] = 59] = "ReturnStatement";
    NodeType[NodeType["MediaQuery"] = 60] = "MediaQuery";
    NodeType[NodeType["MediaCondition"] = 61] = "MediaCondition";
    NodeType[NodeType["MediaFeature"] = 62] = "MediaFeature";
    NodeType[NodeType["FunctionParameter"] = 63] = "FunctionParameter";
    NodeType[NodeType["FunctionArgument"] = 64] = "FunctionArgument";
    NodeType[NodeType["KeyframeSelector"] = 65] = "KeyframeSelector";
    NodeType[NodeType["ViewPort"] = 66] = "ViewPort";
    NodeType[NodeType["Document"] = 67] = "Document";
    NodeType[NodeType["AtApplyRule"] = 68] = "AtApplyRule";
    NodeType[NodeType["CustomPropertyDeclaration"] = 69] = "CustomPropertyDeclaration";
    NodeType[NodeType["CustomPropertySet"] = 70] = "CustomPropertySet";
    NodeType[NodeType["ListEntry"] = 71] = "ListEntry";
    NodeType[NodeType["Supports"] = 72] = "Supports";
    NodeType[NodeType["SupportsCondition"] = 73] = "SupportsCondition";
    NodeType[NodeType["NamespacePrefix"] = 74] = "NamespacePrefix";
    NodeType[NodeType["GridLine"] = 75] = "GridLine";
    NodeType[NodeType["Plugin"] = 76] = "Plugin";
    NodeType[NodeType["UnknownAtRule"] = 77] = "UnknownAtRule";
    NodeType[NodeType["Use"] = 78] = "Use";
    NodeType[NodeType["ModuleConfiguration"] = 79] = "ModuleConfiguration";
    NodeType[NodeType["Forward"] = 80] = "Forward";
    NodeType[NodeType["ForwardVisibility"] = 81] = "ForwardVisibility";
    NodeType[NodeType["Module"] = 82] = "Module";
    NodeType[NodeType["UnicodeRange"] = 83] = "UnicodeRange";
    NodeType[NodeType["Layer"] = 84] = "Layer";
    NodeType[NodeType["LayerNameList"] = 85] = "LayerNameList";
    NodeType[NodeType["LayerName"] = 86] = "LayerName";
    NodeType[NodeType["PropertyAtRule"] = 87] = "PropertyAtRule";
    NodeType[NodeType["Container"] = 88] = "Container";
    NodeType[NodeType["ModuleConfig"] = 89] = "ModuleConfig";
    NodeType[NodeType["SelectorList"] = 90] = "SelectorList";
    NodeType[NodeType["StartingStyleAtRule"] = 91] = "StartingStyleAtRule";
})(NodeType || (NodeType = {}));
export var ReferenceType;
(function (ReferenceType) {
    ReferenceType[ReferenceType["Mixin"] = 0] = "Mixin";
    ReferenceType[ReferenceType["Rule"] = 1] = "Rule";
    ReferenceType[ReferenceType["Variable"] = 2] = "Variable";
    ReferenceType[ReferenceType["Function"] = 3] = "Function";
    ReferenceType[ReferenceType["Keyframe"] = 4] = "Keyframe";
    ReferenceType[ReferenceType["Unknown"] = 5] = "Unknown";
    ReferenceType[ReferenceType["Module"] = 6] = "Module";
    ReferenceType[ReferenceType["Forward"] = 7] = "Forward";
    ReferenceType[ReferenceType["ForwardVisibility"] = 8] = "ForwardVisibility";
    ReferenceType[ReferenceType["Property"] = 9] = "Property";
})(ReferenceType || (ReferenceType = {}));
export function getNodeAtOffset(node, offset) {
    let candidate = null;
    if (!node || offset < node.offset || offset > node.end) {
        return null;
    }
    // Find the shortest node at the position
    node.accept((node) => {
        if (node.offset === -1 && node.length === -1) {
            return true;
        }
        if (node.offset <= offset && node.end >= offset) {
            if (!candidate) {
                candidate = node;
            }
            else if (node.length <= candidate.length) {
                candidate = node;
            }
            return true;
        }
        return false;
    });
    return candidate;
}
export function getNodePath(node, offset) {
    let candidate = getNodeAtOffset(node, offset);
    const path = [];
    while (candidate) {
        path.unshift(candidate);
        candidate = candidate.parent;
    }
    return path;
}
export function getParentDeclaration(node) {
    const decl = node.findParent(NodeType.Declaration);
    const value = decl && decl.getValue();
    if (value && value.encloses(node)) {
        return decl;
    }
    return null;
}
export class Node {
    get end() { return this.offset + this.length; }
    constructor(offset = -1, len = -1, nodeType) {
        this.parent = null;
        this.offset = offset;
        this.length = len;
        if (nodeType) {
            this.nodeType = nodeType;
        }
    }
    set type(type) {
        this.nodeType = type;
    }
    get type() {
        return this.nodeType || NodeType.Undefined;
    }
    getTextProvider() {
        let node = this;
        while (node && !node.textProvider) {
            node = node.parent;
        }
        if (node) {
            return node.textProvider;
        }
        return () => { return 'unknown'; };
    }
    getText() {
        return this.getTextProvider()(this.offset, this.length);
    }
    matches(str) {
        return this.length === str.length && this.getTextProvider()(this.offset, this.length) === str;
    }
    startsWith(str) {
        return this.length >= str.length && this.getTextProvider()(this.offset, str.length) === str;
    }
    endsWith(str) {
        return this.length >= str.length && this.getTextProvider()(this.end - str.length, str.length) === str;
    }
    accept(visitor) {
        if (visitor(this) && this.children) {
            for (const child of this.children) {
                child.accept(visitor);
            }
        }
    }
    acceptVisitor(visitor) {
        this.accept(visitor.visitNode.bind(visitor));
    }
    adoptChild(node, index = -1) {
        if (node.parent && node.parent.children) {
            const idx = node.parent.children.indexOf(node);
            if (idx >= 0) {
                node.parent.children.splice(idx, 1);
            }
        }
        node.parent = this;
        let children = this.children;
        if (!children) {
            children = this.children = [];
        }
        if (index !== -1) {
            children.splice(index, 0, node);
        }
        else {
            children.push(node);
        }
        return node;
    }
    attachTo(parent, index = -1) {
        if (parent) {
            parent.adoptChild(this, index);
        }
        return this;
    }
    collectIssues(results) {
        if (this.issues) {
            results.push.apply(results, this.issues);
        }
    }
    addIssue(issue) {
        if (!this.issues) {
            this.issues = [];
        }
        this.issues.push(issue);
    }
    hasIssue(rule) {
        return Array.isArray(this.issues) && this.issues.some(i => i.getRule() === rule);
    }
    isErroneous(recursive = false) {
        if (this.issues && this.issues.length > 0) {
            return true;
        }
        return recursive && Array.isArray(this.children) && this.children.some(c => c.isErroneous(true));
    }
    setNode(field, node, index = -1) {
        if (node) {
            node.attachTo(this, index);
            this[field] = node;
            return true;
        }
        return false;
    }
    addChild(node) {
        if (node) {
            if (!this.children) {
                this.children = [];
            }
            node.attachTo(this);
            this.updateOffsetAndLength(node);
            return true;
        }
        return false;
    }
    updateOffsetAndLength(node) {
        if (node.offset < this.offset || this.offset === -1) {
            this.offset = node.offset;
        }
        const nodeEnd = node.end;
        if ((nodeEnd > this.end) || this.length === -1) {
            this.length = nodeEnd - this.offset;
        }
    }
    hasChildren() {
        return !!this.children && this.children.length > 0;
    }
    getChildren() {
        return this.children ? this.children.slice(0) : [];
    }
    getChild(index) {
        if (this.children && index < this.children.length) {
            return this.children[index];
        }
        return null;
    }
    addChildren(nodes) {
        for (const node of nodes) {
            this.addChild(node);
        }
    }
    findFirstChildBeforeOffset(offset) {
        if (this.children) {
            let current = null;
            for (let i = this.children.length - 1; i >= 0; i--) {
                // iterate until we find a child that has a start offset smaller than the input offset
                current = this.children[i];
                if (current.offset <= offset) {
                    return current;
                }
            }
        }
        return null;
    }
    findChildAtOffset(offset, goDeep) {
        const current = this.findFirstChildBeforeOffset(offset);
        if (current && current.end >= offset) {
            if (goDeep) {
                return current.findChildAtOffset(offset, true) || current;
            }
            return current;
        }
        return null;
    }
    encloses(candidate) {
        return this.offset <= candidate.offset && this.offset + this.length >= candidate.offset + candidate.length;
    }
    getParent() {
        let result = this.parent;
        while (result instanceof Nodelist) {
            result = result.parent;
        }
        return result;
    }
    findParent(type) {
        let result = this;
        while (result && result.type !== type) {
            result = result.parent;
        }
        return result;
    }
    findAParent(...types) {
        let result = this;
        while (result && !types.some(t => result.type === t)) {
            result = result.parent;
        }
        return result;
    }
    setData(key, value) {
        if (!this.options) {
            this.options = {};
        }
        this.options[key] = value;
    }
    getData(key) {
        if (!this.options || !this.options.hasOwnProperty(key)) {
            return null;
        }
        return this.options[key];
    }
}
export class Nodelist extends Node {
    constructor(parent, index = -1) {
        super(-1, -1);
        this.attachTo(parent, index);
        this.offset = -1;
        this.length = -1;
    }
}
export class UnicodeRange extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.UnicodeRange;
    }
    setRangeStart(rangeStart) {
        return this.setNode('rangeStart', rangeStart);
    }
    getRangeStart() {
        return this.rangeStart;
    }
    setRangeEnd(rangeEnd) {
        return this.setNode('rangeEnd', rangeEnd);
    }
    getRangeEnd() {
        return this.rangeEnd;
    }
}
export class Identifier extends Node {
    constructor(offset, length) {
        super(offset, length);
        this.isCustomProperty = false;
    }
    get type() {
        return NodeType.Identifier;
    }
    containsInterpolation() {
        return this.hasChildren();
    }
}
export class Stylesheet extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.Stylesheet;
    }
}
export class Declarations extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.Declarations;
    }
}
export class BodyDeclaration extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    getDeclarations() {
        return this.declarations;
    }
    setDeclarations(decls) {
        return this.setNode('declarations', decls);
    }
}
export class RuleSet extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.Ruleset;
    }
    getSelectors() {
        if (!this.selectors) {
            this.selectors = new Nodelist(this);
        }
        return this.selectors;
    }
    isNested() {
        return !!this.parent && this.parent.findParent(NodeType.Declarations) !== null;
    }
}
export class Selector extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.Selector;
    }
}
export class SimpleSelector extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.SimpleSelector;
    }
}
export class AtApplyRule extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.AtApplyRule;
    }
    setIdentifier(node) {
        return this.setNode('identifier', node, 0);
    }
    getIdentifier() {
        return this.identifier;
    }
    getName() {
        return this.identifier ? this.identifier.getText() : '';
    }
}
export class AbstractDeclaration extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
}
export class CustomPropertySet extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.CustomPropertySet;
    }
}
export class Declaration extends AbstractDeclaration {
    constructor(offset, length) {
        super(offset, length);
        this.property = null;
    }
    get type() {
        return NodeType.Declaration;
    }
    setProperty(node) {
        return this.setNode('property', node);
    }
    getProperty() {
        return this.property;
    }
    getFullPropertyName() {
        const propertyName = this.property ? this.property.getName() : 'unknown';
        if (this.parent instanceof Declarations && this.parent.getParent() instanceof NestedProperties) {
            const parentDecl = this.parent.getParent().getParent();
            if (parentDecl instanceof Declaration) {
                return parentDecl.getFullPropertyName() + propertyName;
            }
        }
        return propertyName;
    }
    getNonPrefixedPropertyName() {
        const propertyName = this.getFullPropertyName();
        if (propertyName && propertyName.charAt(0) === '-') {
            const vendorPrefixEnd = propertyName.indexOf('-', 1);
            if (vendorPrefixEnd !== -1) {
                return propertyName.substring(vendorPrefixEnd + 1);
            }
        }
        return propertyName;
    }
    setValue(value) {
        return this.setNode('value', value);
    }
    getValue() {
        return this.value;
    }
    setNestedProperties(value) {
        return this.setNode('nestedProperties', value);
    }
    getNestedProperties() {
        return this.nestedProperties;
    }
}
export class CustomPropertyDeclaration extends Declaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.CustomPropertyDeclaration;
    }
    setPropertySet(value) {
        return this.setNode('propertySet', value);
    }
    getPropertySet() {
        return this.propertySet;
    }
}
export class Property extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.Property;
    }
    setIdentifier(value) {
        return this.setNode('identifier', value);
    }
    getIdentifier() {
        return this.identifier;
    }
    getName() {
        return trim(this.getText(), /[_\+]+$/); /* +_: less merge */
    }
    isCustomProperty() {
        return !!this.identifier && this.identifier.isCustomProperty;
    }
}
export class Invocation extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.Invocation;
    }
    getArguments() {
        if (!this.arguments) {
            this.arguments = new Nodelist(this);
        }
        return this.arguments;
    }
}
export class Function extends Invocation {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.Function;
    }
    setIdentifier(node) {
        return this.setNode('identifier', node, 0);
    }
    getIdentifier() {
        return this.identifier;
    }
    getName() {
        return this.identifier ? this.identifier.getText() : '';
    }
}
export class FunctionParameter extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.FunctionParameter;
    }
    setIdentifier(node) {
        return this.setNode('identifier', node, 0);
    }
    getIdentifier() {
        return this.identifier;
    }
    getName() {
        return this.identifier ? this.identifier.getText() : '';
    }
    setDefaultValue(node) {
        return this.setNode('defaultValue', node, 0);
    }
    getDefaultValue() {
        return this.defaultValue;
    }
}
export class FunctionArgument extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.FunctionArgument;
    }
    setIdentifier(node) {
        return this.setNode('identifier', node, 0);
    }
    getIdentifier() {
        return this.identifier;
    }
    getName() {
        return this.identifier ? this.identifier.getText() : '';
    }
    setValue(node) {
        return this.setNode('value', node, 0);
    }
    getValue() {
        return this.value;
    }
}
export class IfStatement extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.If;
    }
    setExpression(node) {
        return this.setNode('expression', node, 0);
    }
    setElseClause(elseClause) {
        return this.setNode('elseClause', elseClause);
    }
}
export class ForStatement extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.For;
    }
    setVariable(node) {
        return this.setNode('variable', node, 0);
    }
}
export class EachStatement extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.Each;
    }
    getVariables() {
        if (!this.variables) {
            this.variables = new Nodelist(this);
        }
        return this.variables;
    }
}
export class WhileStatement extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.While;
    }
}
export class ElseStatement extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.Else;
    }
}
export class FunctionDeclaration extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.FunctionDeclaration;
    }
    setIdentifier(node) {
        return this.setNode('identifier', node, 0);
    }
    getIdentifier() {
        return this.identifier;
    }
    getName() {
        return this.identifier ? this.identifier.getText() : '';
    }
    getParameters() {
        if (!this.parameters) {
            this.parameters = new Nodelist(this);
        }
        return this.parameters;
    }
}
export class ViewPort extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.ViewPort;
    }
}
export class FontFace extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.FontFace;
    }
}
export class NestedProperties extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.NestedProperties;
    }
}
export class Keyframe extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.Keyframe;
    }
    setKeyword(keyword) {
        return this.setNode('keyword', keyword, 0);
    }
    getKeyword() {
        return this.keyword;
    }
    setIdentifier(node) {
        return this.setNode('identifier', node, 0);
    }
    getIdentifier() {
        return this.identifier;
    }
    getName() {
        return this.identifier ? this.identifier.getText() : '';
    }
}
export class KeyframeSelector extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.KeyframeSelector;
    }
}
export class Import extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.Import;
    }
    setMedialist(node) {
        if (node) {
            node.attachTo(this);
            return true;
        }
        return false;
    }
}
export class Use extends Node {
    get type() {
        return NodeType.Use;
    }
    setParameters(value) {
        return this.setNode('parameters', value);
    }
    getParameters() {
        return this.parameters;
    }
    setIdentifier(node) {
        return this.setNode('identifier', node, 0);
    }
    getIdentifier() {
        return this.identifier;
    }
}
export class ModuleConfiguration extends Node {
    get type() {
        return NodeType.ModuleConfiguration;
    }
    setIdentifier(node) {
        return this.setNode('identifier', node, 0);
    }
    getIdentifier() {
        return this.identifier;
    }
    getName() {
        return this.identifier ? this.identifier.getText() : '';
    }
    setValue(node) {
        return this.setNode('value', node, 0);
    }
    getValue() {
        return this.value;
    }
}
export class Forward extends Node {
    get type() {
        return NodeType.Forward;
    }
    setIdentifier(node) {
        return this.setNode('identifier', node, 0);
    }
    getIdentifier() {
        return this.identifier;
    }
    setParameters(value) {
        return this.setNode('parameters', value);
    }
    getParameters() {
        return this.parameters;
    }
}
export class ForwardVisibility extends Node {
    get type() {
        return NodeType.ForwardVisibility;
    }
    setIdentifier(node) {
        return this.setNode('identifier', node, 0);
    }
    getIdentifier() {
        return this.identifier;
    }
}
export class Namespace extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.Namespace;
    }
}
export class Media extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.Media;
    }
}
export class Scope extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.Scope;
    }
}
export class ScopeLimits extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.Scope;
    }
    getScopeStart() {
        return this.scopeStart;
    }
    setScopeStart(right) {
        return this.setNode('scopeStart', right);
    }
    getScopeEnd() {
        return this.scopeEnd;
    }
    setScopeEnd(right) {
        return this.setNode('scopeEnd', right);
    }
    getName() {
        let name = '';
        if (this.scopeStart) {
            name += this.scopeStart.getText();
        }
        if (this.scopeEnd) {
            name += `${this.scopeStart ? ' ' : ''}→ ${this.scopeEnd.getText()}`;
        }
        return name;
    }
}
export class Supports extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.Supports;
    }
}
export class Layer extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.Layer;
    }
    setNames(names) {
        return this.setNode('names', names);
    }
    getNames() {
        return this.names;
    }
}
export class PropertyAtRule extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.PropertyAtRule;
    }
    setName(node) {
        if (node) {
            node.attachTo(this);
            this.name = node;
            return true;
        }
        return false;
    }
    getName() {
        return this.name;
    }
}
export class StartingStyleAtRule extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.StartingStyleAtRule;
    }
}
export class Document extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.Document;
    }
}
export class Container extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.Container;
    }
}
export class Medialist extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
}
export class MediaQuery extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.MediaQuery;
    }
}
export class MediaCondition extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.MediaCondition;
    }
}
export class MediaFeature extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.MediaFeature;
    }
}
export class SupportsCondition extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.SupportsCondition;
    }
}
export class Page extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.Page;
    }
}
export class PageBoxMarginBox extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.PageBoxMarginBox;
    }
}
export class Expression extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.Expression;
    }
}
export class BinaryExpression extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.BinaryExpression;
    }
    setLeft(left) {
        return this.setNode('left', left);
    }
    getLeft() {
        return this.left;
    }
    setRight(right) {
        return this.setNode('right', right);
    }
    getRight() {
        return this.right;
    }
    setOperator(value) {
        return this.setNode('operator', value);
    }
    getOperator() {
        return this.operator;
    }
}
export class Term extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.Term;
    }
    setOperator(value) {
        return this.setNode('operator', value);
    }
    getOperator() {
        return this.operator;
    }
    setExpression(value) {
        return this.setNode('expression', value);
    }
    getExpression() {
        return this.expression;
    }
}
export class AttributeSelector extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.AttributeSelector;
    }
    setNamespacePrefix(value) {
        return this.setNode('namespacePrefix', value);
    }
    getNamespacePrefix() {
        return this.namespacePrefix;
    }
    setIdentifier(value) {
        return this.setNode('identifier', value);
    }
    getIdentifier() {
        return this.identifier;
    }
    setOperator(operator) {
        return this.setNode('operator', operator);
    }
    getOperator() {
        return this.operator;
    }
    setValue(value) {
        return this.setNode('value', value);
    }
    getValue() {
        return this.value;
    }
}
export class Operator extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.Operator;
    }
}
export class HexColorValue extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.HexColorValue;
    }
}
export class RatioValue extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.RatioValue;
    }
}
const _dot = '.'.charCodeAt(0), _0 = '0'.charCodeAt(0), _9 = '9'.charCodeAt(0);
export class NumericValue extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.NumericValue;
    }
    getValue() {
        const raw = this.getText();
        let unitIdx = 0;
        let code;
        for (let i = 0, len = raw.length; i < len; i++) {
            code = raw.charCodeAt(i);
            if (!(_0 <= code && code <= _9 || code === _dot)) {
                break;
            }
            unitIdx += 1;
        }
        return {
            value: raw.substring(0, unitIdx),
            unit: unitIdx < raw.length ? raw.substring(unitIdx) : undefined
        };
    }
}
export class VariableDeclaration extends AbstractDeclaration {
    constructor(offset, length) {
        super(offset, length);
        this.needsSemicolon = true;
    }
    get type() {
        return NodeType.VariableDeclaration;
    }
    setVariable(node) {
        if (node) {
            node.attachTo(this);
            this.variable = node;
            return true;
        }
        return false;
    }
    getVariable() {
        return this.variable;
    }
    getName() {
        return this.variable ? this.variable.getName() : '';
    }
    setValue(node) {
        if (node) {
            node.attachTo(this);
            this.value = node;
            return true;
        }
        return false;
    }
    getValue() {
        return this.value;
    }
}
export class Interpolation extends Node {
    // private _interpolations: void; // workaround for https://github.com/Microsoft/TypeScript/issues/18276
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.Interpolation;
    }
}
export class Variable extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.VariableName;
    }
    getName() {
        return this.getText();
    }
}
export class ExtendsReference extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.ExtendsReference;
    }
    getSelectors() {
        if (!this.selectors) {
            this.selectors = new Nodelist(this);
        }
        return this.selectors;
    }
}
export class MixinContentReference extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.MixinContentReference;
    }
    getArguments() {
        if (!this.arguments) {
            this.arguments = new Nodelist(this);
        }
        return this.arguments;
    }
}
export class MixinContentDeclaration extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.MixinContentDeclaration;
    }
    getParameters() {
        if (!this.parameters) {
            this.parameters = new Nodelist(this);
        }
        return this.parameters;
    }
}
export class MixinReference extends Node {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.MixinReference;
    }
    getNamespaces() {
        if (!this.namespaces) {
            this.namespaces = new Nodelist(this);
        }
        return this.namespaces;
    }
    setIdentifier(node) {
        return this.setNode('identifier', node, 0);
    }
    getIdentifier() {
        return this.identifier;
    }
    getName() {
        return this.identifier ? this.identifier.getText() : '';
    }
    getArguments() {
        if (!this.arguments) {
            this.arguments = new Nodelist(this);
        }
        return this.arguments;
    }
    setContent(node) {
        return this.setNode('content', node);
    }
    getContent() {
        return this.content;
    }
}
export class MixinDeclaration extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.MixinDeclaration;
    }
    setIdentifier(node) {
        return this.setNode('identifier', node, 0);
    }
    getIdentifier() {
        return this.identifier;
    }
    getName() {
        return this.identifier ? this.identifier.getText() : '';
    }
    getParameters() {
        if (!this.parameters) {
            this.parameters = new Nodelist(this);
        }
        return this.parameters;
    }
    setGuard(node) {
        if (node) {
            node.attachTo(this);
            this.guard = node;
        }
        return false;
    }
}
export class UnknownAtRule extends BodyDeclaration {
    constructor(offset, length) {
        super(offset, length);
    }
    get type() {
        return NodeType.UnknownAtRule;
    }
    setAtRuleName(atRuleName) {
        this.atRuleName = atRuleName;
    }
    getAtRuleName() {
        return this.atRuleName;
    }
}
export class ListEntry extends Node {
    get type() {
        return NodeType.ListEntry;
    }
    setKey(node) {
        return this.setNode('key', node, 0);
    }
    setValue(node) {
        return this.setNode('value', node, 1);
    }
}
export class LessGuard extends Node {
    getConditions() {
        if (!this.conditions) {
            this.conditions = new Nodelist(this);
        }
        return this.conditions;
    }
}
export class GuardCondition extends Node {
    setVariable(node) {
        return this.setNode('variable', node);
    }
}
export class Module extends Node {
    get type() {
        return NodeType.Module;
    }
    setIdentifier(node) {
        return this.setNode('identifier', node, 0);
    }
    getIdentifier() {
        return this.identifier;
    }
}
export var Level;
(function (Level) {
    Level[Level["Ignore"] = 1] = "Ignore";
    Level[Level["Warning"] = 2] = "Warning";
    Level[Level["Error"] = 4] = "Error";
})(Level || (Level = {}));
export class Marker {
    constructor(node, rule, level, message, offset = node.offset, length = node.length) {
        this.node = node;
        this.rule = rule;
        this.level = level;
        this.message = message || rule.message;
        this.offset = offset;
        this.length = length;
    }
    getRule() {
        return this.rule;
    }
    getLevel() {
        return this.level;
    }
    getOffset() {
        return this.offset;
    }
    getLength() {
        return this.length;
    }
    getNode() {
        return this.node;
    }
    getMessage() {
        return this.message;
    }
}
/*
export class DefaultVisitor implements IVisitor {

    public visitNode(node:Node):boolean {
        switch (node.type) {
            case NodeType.Stylesheet:
                return this.visitStylesheet(<Stylesheet> node);
            case NodeType.FontFace:
                return this.visitFontFace(<FontFace> node);
            case NodeType.Ruleset:
                return this.visitRuleSet(<RuleSet> node);
            case NodeType.Selector:
                return this.visitSelector(<Selector> node);
            case NodeType.SimpleSelector:
                return this.visitSimpleSelector(<SimpleSelector> node);
            case NodeType.Declaration:
                return this.visitDeclaration(<Declaration> node);
            case NodeType.Function:
                return this.visitFunction(<Function> node);
            case NodeType.FunctionDeclaration:
                return this.visitFunctionDeclaration(<FunctionDeclaration> node);
            case NodeType.FunctionParameter:
                return this.visitFunctionParameter(<FunctionParameter> node);
            case NodeType.FunctionArgument:
                return this.visitFunctionArgument(<FunctionArgument> node);
            case NodeType.Term:
                return this.visitTerm(<Term> node);
            case NodeType.Declaration:
                return this.visitExpression(<Expression> node);
            case NodeType.NumericValue:
                return this.visitNumericValue(<NumericValue> node);
            case NodeType.Page:
                return this.visitPage(<Page> node);
            case NodeType.PageBoxMarginBox:
                return this.visitPageBoxMarginBox(<PageBoxMarginBox> node);
            case NodeType.Property:
                return this.visitProperty(<Property> node);
            case NodeType.NumericValue:
                return this.visitNodelist(<Nodelist> node);
            case NodeType.Import:
                return this.visitImport(<Import> node);
            case NodeType.Namespace:
                return this.visitNamespace(<Namespace> node);
            case NodeType.Keyframe:
                return this.visitKeyframe(<Keyframe> node);
            case NodeType.KeyframeSelector:
                return this.visitKeyframeSelector(<KeyframeSelector> node);
            case NodeType.MixinDeclaration:
                return this.visitMixinDeclaration(<MixinDeclaration> node);
            case NodeType.MixinReference:
                return this.visitMixinReference(<MixinReference> node);
            case NodeType.Variable:
                return this.visitVariable(<Variable> node);
            case NodeType.VariableDeclaration:
                return this.visitVariableDeclaration(<VariableDeclaration> node);
        }
        return this.visitUnknownNode(node);
    }

    public visitFontFace(node:FontFace):boolean {
        return true;
    }

    public visitKeyframe(node:Keyframe):boolean {
        return true;
    }

    public visitKeyframeSelector(node:KeyframeSelector):boolean {
        return true;
    }

    public visitStylesheet(node:Stylesheet):boolean {
        return true;
    }

    public visitProperty(Node:Property):boolean {
        return true;
    }

    public visitRuleSet(node:RuleSet):boolean {
        return true;
    }

    public visitSelector(node:Selector):boolean {
        return true;
    }

    public visitSimpleSelector(node:SimpleSelector):boolean {
        return true;
    }

    public visitDeclaration(node:Declaration):boolean {
        return true;
    }

    public visitFunction(node:Function):boolean {
        return true;
    }

    public visitFunctionDeclaration(node:FunctionDeclaration):boolean {
        return true;
    }

    public visitInvocation(node:Invocation):boolean {
        return true;
    }

    public visitTerm(node:Term):boolean {
        return true;
    }

    public visitImport(node:Import):boolean {
        return true;
    }

    public visitNamespace(node:Namespace):boolean {
        return true;
    }

    public visitExpression(node:Expression):boolean {
        return true;
    }

    public visitNumericValue(node:NumericValue):boolean {
        return true;
    }

    public visitPage(node:Page):boolean {
        return true;
    }

    public visitPageBoxMarginBox(node:PageBoxMarginBox):boolean {
        return true;
    }

    public visitNodelist(node:Nodelist):boolean {
        return true;
    }

    public visitVariableDeclaration(node:VariableDeclaration):boolean {
        return true;
    }

    public visitVariable(node:Variable):boolean {
        return true;
    }

    public visitMixinDeclaration(node:MixinDeclaration):boolean {
        return true;
    }

    public visitMixinReference(node:MixinReference):boolean {
        return true;
    }

    public visitUnknownNode(node:Node):boolean {
        return true;
    }
}
*/
export class ParseErrorCollector {
    static entries(node) {
        const visitor = new ParseErrorCollector();
        node.acceptVisitor(visitor);
        return visitor.entries;
    }
    constructor() {
        this.entries = [];
    }
    visitNode(node) {
        if (node.isErroneous()) {
            node.collectIssues(this.entries);
        }
        return true;
    }
}
