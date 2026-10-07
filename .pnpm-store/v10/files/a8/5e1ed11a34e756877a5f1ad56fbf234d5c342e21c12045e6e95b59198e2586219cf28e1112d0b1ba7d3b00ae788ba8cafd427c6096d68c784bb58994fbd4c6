import { FunctionParameter, BodyDeclaration, FunctionArgument, Function, ReferenceType, Identifier, getParentDeclaration, Variable, NodeType, Selector } from './cssNodes.js';
import { findFirst } from '../utils/arrays.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class Scope {
    constructor(offset, length) {
        this.offset = offset;
        this.length = length;
        this.symbols = [];
        this.parent = null;
        this.children = [];
    }
    addChild(scope) {
        this.children.push(scope);
        scope.setParent(this);
    }
    setParent(scope) {
        this.parent = scope;
    }
    findScope(offset, length = 0) {
        if (this.offset <= offset && this.offset + this.length > offset + length || this.offset === offset && this.length === length) {
            return this.findInScope(offset, length);
        }
        return null;
    }
    findInScope(offset, length = 0) {
        // find the first scope child that has an offset larger than offset + length
        const end = offset + length;
        const idx = findFirst(this.children, s => s.offset > end);
        if (idx === 0) {
            // all scopes have offsets larger than our end
            return this;
        }
        const res = this.children[idx - 1];
        if (res.offset <= offset && res.offset + res.length >= offset + length) {
            return res.findInScope(offset, length);
        }
        return this;
    }
    addSymbol(symbol) {
        this.symbols.push(symbol);
    }
    getSymbol(name, type) {
        for (let index = 0; index < this.symbols.length; index++) {
            const symbol = this.symbols[index];
            if (symbol.name === name && symbol.type === type) {
                return symbol;
            }
        }
        return null;
    }
    getSymbols() {
        return this.symbols;
    }
}
class GlobalScope extends Scope {
    constructor() {
        super(0, Number.MAX_VALUE);
    }
}
class Symbol {
    constructor(name, value, node, type) {
        this.name = name;
        this.value = value;
        this.node = node;
        this.type = type;
    }
}
class ScopeBuilder {
    constructor(scope) {
        this.scope = scope;
    }
    addSymbol(node, name, value, type) {
        if (node.offset !== -1) {
            const current = this.scope.findScope(node.offset, node.length);
            if (current) {
                current.addSymbol(new Symbol(name, value, node, type));
            }
        }
    }
    addScope(node) {
        if (node.offset !== -1) {
            const current = this.scope.findScope(node.offset, node.length);
            if (current && (current.offset !== node.offset || current.length !== node.length)) { // scope already known?
                const newScope = new Scope(node.offset, node.length);
                current.addChild(newScope);
                return newScope;
            }
            return current;
        }
        return null;
    }
    addSymbolToChildScope(scopeNode, node, name, value, type) {
        if (scopeNode && scopeNode.offset !== -1) {
            const current = this.addScope(scopeNode); // create the scope or gets the existing one
            if (current) {
                current.addSymbol(new Symbol(name, value, node, type));
            }
        }
    }
    visitNode(node) {
        switch (node.type) {
            case NodeType.Keyframe:
                this.addSymbol(node, node.getName(), void 0, ReferenceType.Keyframe);
                return true;
            case NodeType.CustomPropertyDeclaration:
                return this.visitCustomPropertyDeclarationNode(node);
            case NodeType.VariableDeclaration:
                return this.visitVariableDeclarationNode(node);
            case NodeType.Ruleset:
                return this.visitRuleSet(node);
            case NodeType.MixinDeclaration:
                this.addSymbol(node, node.getName(), void 0, ReferenceType.Mixin);
                return true;
            case NodeType.FunctionDeclaration:
                this.addSymbol(node, node.getName(), void 0, ReferenceType.Function);
                return true;
            case NodeType.FunctionParameter: {
                return this.visitFunctionParameterNode(node);
            }
            case NodeType.Declarations:
                this.addScope(node);
                return true;
            case NodeType.For:
                const forNode = node;
                const scopeNode = forNode.getDeclarations();
                if (scopeNode && forNode.variable) {
                    this.addSymbolToChildScope(scopeNode, forNode.variable, forNode.variable.getName(), void 0, ReferenceType.Variable);
                }
                return true;
            case NodeType.Each: {
                const eachNode = node;
                const scopeNode = eachNode.getDeclarations();
                if (scopeNode) {
                    const variables = eachNode.getVariables().getChildren();
                    for (const variable of variables) {
                        this.addSymbolToChildScope(scopeNode, variable, variable.getName(), void 0, ReferenceType.Variable);
                    }
                }
                return true;
            }
        }
        return true;
    }
    visitRuleSet(node) {
        const current = this.scope.findScope(node.offset, node.length);
        if (current) {
            for (const child of node.getSelectors().getChildren()) {
                if (child instanceof Selector) {
                    if (child.getChildren().length === 1) { // only selectors with a single element can be extended
                        current.addSymbol(new Symbol(child.getChild(0).getText(), void 0, child, ReferenceType.Rule));
                    }
                }
            }
        }
        return true;
    }
    visitVariableDeclarationNode(node) {
        const value = node.getValue() ? node.getValue().getText() : void 0;
        this.addSymbol(node, node.getName(), value, ReferenceType.Variable);
        return true;
    }
    visitFunctionParameterNode(node) {
        // parameters are part of the body scope
        const scopeNode = node.getParent().getDeclarations();
        if (scopeNode) {
            const valueNode = node.getDefaultValue();
            const value = valueNode ? valueNode.getText() : void 0;
            this.addSymbolToChildScope(scopeNode, node, node.getName(), value, ReferenceType.Variable);
        }
        return true;
    }
    visitCustomPropertyDeclarationNode(node) {
        const value = node.getValue() ? node.getValue().getText() : '';
        this.addCSSVariable(node.getProperty(), node.getProperty().getName(), value, ReferenceType.Variable);
        return true;
    }
    addCSSVariable(node, name, value, type) {
        if (node.offset !== -1) {
            this.scope.addSymbol(new Symbol(name, value, node, type));
        }
    }
}
class Symbols {
    constructor(node) {
        this.global = new GlobalScope();
        node.acceptVisitor(new ScopeBuilder(this.global));
    }
    findSymbolsAtOffset(offset, referenceType) {
        let scope = this.global.findScope(offset, 0);
        const result = [];
        const names = {};
        while (scope) {
            const symbols = scope.getSymbols();
            for (let i = 0; i < symbols.length; i++) {
                const symbol = symbols[i];
                if (symbol.type === referenceType && !names[symbol.name]) {
                    result.push(symbol);
                    names[symbol.name] = true;
                }
            }
            scope = scope.parent;
        }
        return result;
    }
    internalFindSymbol(node, referenceTypes) {
        let scopeNode = node;
        if (node.parent instanceof FunctionParameter && node.parent.getParent() instanceof BodyDeclaration) {
            scopeNode = node.parent.getParent().getDeclarations();
        }
        if (node.parent instanceof FunctionArgument && node.parent.getParent() instanceof Function) {
            const funcId = node.parent.getParent().getIdentifier();
            if (funcId) {
                const functionSymbol = this.internalFindSymbol(funcId, [ReferenceType.Function]);
                if (functionSymbol) {
                    scopeNode = functionSymbol.node.getDeclarations();
                }
            }
        }
        if (!scopeNode) {
            return null;
        }
        const name = node.getText();
        let scope = this.global.findScope(scopeNode.offset, scopeNode.length);
        while (scope) {
            for (let index = 0; index < referenceTypes.length; index++) {
                const type = referenceTypes[index];
                const symbol = scope.getSymbol(name, type);
                if (symbol) {
                    return symbol;
                }
            }
            scope = scope.parent;
        }
        return null;
    }
    evaluateReferenceTypes(node) {
        if (node instanceof Identifier) {
            const referenceTypes = node.referenceTypes;
            if (referenceTypes) {
                return referenceTypes;
            }
            else {
                if (node.isCustomProperty) {
                    return [ReferenceType.Variable];
                }
                // are a reference to a keyframe?
                const decl = getParentDeclaration(node);
                if (decl) {
                    const propertyName = decl.getNonPrefixedPropertyName();
                    if ((propertyName === 'animation' || propertyName === 'animation-name')
                        && decl.getValue() && decl.getValue().offset === node.offset) {
                        return [ReferenceType.Keyframe];
                    }
                }
            }
        }
        else if (node instanceof Variable) {
            return [ReferenceType.Variable];
        }
        const selector = node.findAParent(NodeType.Selector, NodeType.ExtendsReference);
        if (selector) {
            return [ReferenceType.Rule];
        }
        return null;
    }
    findSymbolFromNode(node) {
        if (!node) {
            return null;
        }
        while (node.type === NodeType.Interpolation) {
            node = node.getParent();
        }
        const referenceTypes = this.evaluateReferenceTypes(node);
        if (referenceTypes) {
            return this.internalFindSymbol(node, referenceTypes);
        }
        return null;
    }
    matchesSymbol(node, symbol) {
        if (!node) {
            return false;
        }
        while (node.type === NodeType.Interpolation) {
            node = node.getParent();
        }
        if (!node.matches(symbol.name)) {
            return false;
        }
        const referenceTypes = this.evaluateReferenceTypes(node);
        if (!referenceTypes || referenceTypes.indexOf(symbol.type) === -1) {
            return false;
        }
        const nodeSymbol = this.internalFindSymbol(node, referenceTypes);
        return nodeSymbol === symbol;
    }
    findSymbol(name, type, offset) {
        let scope = this.global.findScope(offset);
        while (scope) {
            const symbol = scope.getSymbol(name, type);
            if (symbol) {
                return symbol;
            }
            scope = scope.parent;
        }
        return null;
    }
}

export { GlobalScope, Scope, ScopeBuilder, Symbol, Symbols };
