"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
exports.analyzeClassMemberUsage = analyzeClassMemberUsage;
const scope_manager_1 = require("@typescript-eslint/scope-manager");
const utils_1 = require("@typescript-eslint/utils");
const __1 = require("..");
const extractComputedName_1 = require("./extractComputedName");
const types_1 = require("./types");
class Member {
    /**
     * The node that declares this member
     */
    node;
    /**
     * The resolved, unique key for this member.
     */
    key;
    /**
     * The member name, as given in the source code.
     */
    name;
    /**
     * The node that represents the member name in the source code.
     * Used for reporting errors.
     */
    nameNode;
    /**
     * The number of writes to this member.
     */
    writeCount = 0;
    /**
     * The number of reads from this member.
     */
    readCount = 0;
    constructor(node, key, name, nameNode) {
        this.node = node;
        this.key = key;
        this.name = name;
        this.nameNode = nameNode;
    }
    static create(node) {
        const name = (0, extractComputedName_1.extractNameForMember)(node);
        if (name == null) {
            return null;
        }
        return new Member(node, name.key, name.codeName, name.nameNode);
    }
    isAccessor() {
        if (this.node.type === utils_1.AST_NODE_TYPES.MethodDefinition ||
            this.node.type === utils_1.AST_NODE_TYPES.TSAbstractMethodDefinition) {
            return this.node.kind === 'set' || this.node.kind === 'get';
        }
        return (this.node.type === utils_1.AST_NODE_TYPES.AccessorProperty ||
            this.node.type === utils_1.AST_NODE_TYPES.TSAbstractAccessorProperty);
    }
    isHashPrivate() {
        return ('key' in this.node &&
            this.node.key.type === utils_1.AST_NODE_TYPES.PrivateIdentifier);
    }
    isPrivate() {
        return this.node.accessibility === 'private';
    }
    isStatic() {
        return this.node.static;
    }
    isUsed() {
        return (this.readCount > 0 ||
            // any usage of an accessor is considered a usage as accessor can have side effects
            (this.writeCount > 0 && this.isAccessor()));
    }
}
exports.Member = Member;
function isWriteOnlyUsage(node, parent) {
    if (parent.type !== utils_1.AST_NODE_TYPES.AssignmentExpression &&
        parent.type !== utils_1.AST_NODE_TYPES.ForInStatement &&
        parent.type !== utils_1.AST_NODE_TYPES.ForOfStatement &&
        parent.type !== utils_1.AST_NODE_TYPES.AssignmentPattern) {
        return false;
    }
    // If it's on the right then it's a read not a write
    if (parent.left !== node) {
        return false;
    }
    if (parent.type === utils_1.AST_NODE_TYPES.AssignmentExpression &&
        // For any other operator (such as '+=') we still consider it a read operation
        parent.operator !== '=') {
        // if the read operation is "discarded" in an empty statement, then it is write only.
        return parent.parent.type === utils_1.AST_NODE_TYPES.ExpressionStatement;
    }
    return true;
}
function countReference(identifierParent, member) {
    const identifierGrandparent = (0, __1.nullThrows)(identifierParent.parent, __1.NullThrowsReasons.MissingParent);
    if (isWriteOnlyUsage(identifierParent, identifierGrandparent)) {
        member.writeCount += 1;
        return;
    }
    const identifierGreatGrandparent = identifierGrandparent.parent;
    // A statement which only increments (`this.#x++;`)
    if (identifierGrandparent.type === utils_1.AST_NODE_TYPES.UpdateExpression &&
        identifierGreatGrandparent?.type === utils_1.AST_NODE_TYPES.ExpressionStatement) {
        member.writeCount += 1;
        return;
    }
    /*
     * ({ x: this.#usedInDestructuring } = bar);
     *
     * But should treat the following as a read:
     * ({ [this.#x]: a } = foo);
     */
    if (identifierGrandparent.type === utils_1.AST_NODE_TYPES.Property &&
        identifierGreatGrandparent?.type === utils_1.AST_NODE_TYPES.ObjectPattern &&
        identifierGrandparent.value === identifierParent) {
        member.writeCount += 1;
        return;
    }
    // [...this.#unusedInRestPattern] = bar;
    if (identifierGrandparent.type === utils_1.AST_NODE_TYPES.RestElement) {
        member.writeCount += 1;
        return;
    }
    // [this.#unusedInAssignmentPattern] = bar;
    if (identifierGrandparent.type === utils_1.AST_NODE_TYPES.ArrayPattern) {
        member.writeCount += 1;
        return;
    }
    member.readCount += 1;
}
class ThisScope extends scope_manager_1.Visitor {
    /**
     * True if the context is considered a static context and so `this` refers to
     * the class and not an instance (eg a static method or a static block).
     */
    isStaticThisContext;
    /**
     * The classes directly declared within this class -- for example a class declared within a method.
     * This does not include grandchild classes.
     */
    childScopes = [];
    /**
     * The scope manager instance used to resolve variables to improve discovery of usages.
     */
    scopeManager;
    /**
     * The parent class scope if one exists.
     */
    upper;
    /**
     * The context of the `this` reference in the current scope.
     */
    thisContext;
    constructor(scopeManager, upper, thisContext, isStaticThisContext) {
        super({});
        this.scopeManager = scopeManager;
        this.upper = upper;
        this.isStaticThisContext = isStaticThisContext;
        if (thisContext === 'self') {
            if (!(this instanceof ClassScope)) {
                throw new Error('Cannot use `self` unless it is in a ClassScope');
            }
            this.thisContext = this;
        }
        else if (thisContext === 'none') {
            this.thisContext = null;
        }
        else {
            this.thisContext = thisContext;
        }
    }
    findNearestScope(node) {
        let currentScope;
        let currentNode = node;
        do {
            currentScope = this.scopeManager.acquire(currentNode);
            if (currentNode.parent == null) {
                break;
            }
            currentNode = currentNode.parent;
        } while (currentScope == null);
        return currentScope;
    }
    findVariableInScope(node, name) {
        let currentScope = this.findNearestScope(node);
        let variable = null;
        while (currentScope != null) {
            variable = currentScope.set.get(name) ?? null;
            if (variable != null) {
                break;
            }
            currentScope = currentScope.upper;
        }
        return variable;
    }
    getObjectClass(node) {
        switch (node.object.type) {
            case utils_1.AST_NODE_TYPES.ThisExpression: {
                if (this.thisContext == null) {
                    return null;
                }
                return {
                    thisContext: this.thisContext,
                    type: this.isStaticThisContext ? 'static' : 'instance',
                };
            }
            case utils_1.AST_NODE_TYPES.Identifier: {
                const thisContext = this.findClassScopeWithName(node.object.name);
                if (thisContext != null) {
                    return { thisContext, type: 'static' };
                }
                // the following code does some very rudimentary scope analysis to handle some trivial cases
                const variable = this.findVariableInScope(node, node.object.name);
                if (variable == null || variable.defs.length === 0) {
                    return null;
                }
                const firstDef = variable.defs[0];
                switch (firstDef.node.type) {
                    // detect simple reassignment of `this`
                    // ```
                    // class Foo {
                    //   private prop: number;
                    //   method(thing: Foo) {
                    //     const self = this;
                    //     return self.prop;
                    //   }
                    // }
                    // ```
                    case utils_1.AST_NODE_TYPES.VariableDeclarator: {
                        const value = firstDef.node.init;
                        if (value?.type !== utils_1.AST_NODE_TYPES.ThisExpression) {
                            return null;
                        }
                        if (variable.references.some(ref => ref.isWrite() && ref.init !== true)) {
                            // variable is assigned to multiple times so we can't be sure that it's still the same class
                            return null;
                        }
                        // we have a case like `const self = this` or `let self = this` that is not reassigned
                        // so we can safely assume that it's still the same class!
                        return {
                            thisContext: this.thisContext,
                            type: this.isStaticThisContext ? 'static' : 'instance',
                        };
                    }
                    // Look for variables typed as the current class:
                    // ```
                    // class Foo {
                    //   private prop: number;
                    //   method(thing: Foo) {
                    //     // this references the private instance member but not via `this` so we can't see it
                    //     thing.prop = 1;
                    //   }
                    // }
                    // ```
                    default: {
                        const typeAnnotation = (() => {
                            if ('typeAnnotation' in firstDef.name &&
                                firstDef.name.typeAnnotation != null) {
                                return firstDef.name.typeAnnotation.typeAnnotation;
                            }
                            return null;
                        })();
                        if (typeAnnotation == null) {
                            return null;
                        }
                        // Cases like `method(thing: Foo) { ... }`
                        if (typeAnnotation.type === utils_1.AST_NODE_TYPES.TSTypeReference &&
                            typeAnnotation.typeName.type === utils_1.AST_NODE_TYPES.Identifier) {
                            const typeName = typeAnnotation.typeName.name;
                            const typeScope = this.findClassScopeWithName(typeName);
                            if (typeScope != null) {
                                return { thisContext: typeScope, type: 'instance' };
                            }
                        }
                        // Cases like `method(thing: typeof Foo) { ... }`
                        if (typeAnnotation.type === utils_1.AST_NODE_TYPES.TSTypeQuery &&
                            typeAnnotation.exprName.type === utils_1.AST_NODE_TYPES.Identifier) {
                            const exprName = typeAnnotation.exprName.name;
                            const exprScope = this.findClassScopeWithName(exprName);
                            if (exprScope != null) {
                                return { thisContext: exprScope, type: 'static' };
                            }
                        }
                    }
                }
                return null;
            }
            case utils_1.AST_NODE_TYPES.MemberExpression:
                // TODO - we could probably recurse here to do some more complex analysis and support like `foo.bar.baz` nested references
                return null;
            default:
                return null;
        }
    }
    visitClass(node) {
        const classScope = new ClassScope(node, this, this.scopeManager);
        this.childScopes.push(classScope);
        classScope.visitChildren(node);
    }
    visitIntermediate(node) {
        const intermediateScope = new IntermediateScope(this.scopeManager, this, node);
        this.childScopes.push(intermediateScope);
        intermediateScope.visitChildren(node);
    }
    /**
     * Gets the nearest class scope with the given name.
     */
    findClassScopeWithName(name) {
        let currentScope = this;
        while (currentScope != null) {
            if (currentScope instanceof ClassScope &&
                currentScope.className === name) {
                return currentScope;
            }
            currentScope = currentScope.upper;
        }
        return null;
    }
    /////////////////////
    // Visit selectors //
    /////////////////////
    AssignmentExpression(node) {
        this.visitChildren(node);
        if (node.right.type === utils_1.AST_NODE_TYPES.ThisExpression &&
            node.left.type === utils_1.AST_NODE_TYPES.ObjectPattern) {
            this.handleThisDestructuring(node.left);
        }
    }
    AssignmentPattern(node) {
        this.visitChildren(node);
        if (node.right.type === utils_1.AST_NODE_TYPES.ThisExpression &&
            node.left.type === utils_1.AST_NODE_TYPES.ObjectPattern) {
            this.handleThisDestructuring(node.left);
        }
    }
    ClassDeclaration(node) {
        this.visitClass(node);
    }
    ClassExpression(node) {
        this.visitClass(node);
    }
    FunctionDeclaration(node) {
        this.visitIntermediate(node);
    }
    FunctionExpression(node) {
        this.visitIntermediate(node);
    }
    MemberExpression(node) {
        this.visitChildren(node);
        if (node.property.type === utils_1.AST_NODE_TYPES.PrivateIdentifier) {
            // will be handled by the PrivateIdentifier visitor
            return;
        }
        const propertyName = (0, extractComputedName_1.extractNameForMemberExpression)(node);
        if (propertyName == null) {
            return;
        }
        const objectClassName = this.getObjectClass(node);
        if (objectClassName == null) {
            return;
        }
        if (objectClassName.thisContext == null) {
            return;
        }
        const members = objectClassName.type === 'instance'
            ? objectClassName.thisContext.members.instance
            : objectClassName.thisContext.members.static;
        const member = members.get(propertyName.key);
        if (member == null) {
            return;
        }
        countReference(node, member);
    }
    PrivateIdentifier(node) {
        this.visitChildren(node);
        if ((node.parent.type === utils_1.AST_NODE_TYPES.MethodDefinition ||
            node.parent.type === utils_1.AST_NODE_TYPES.PropertyDefinition) &&
            node.parent.key === node) {
            // ignore the member definition
            return;
        }
        // We can actually be pretty loose with our code here thanks to how private
        // members are designed.
        //
        // 1) classes CANNOT have a static and instance private member with the
        //    same name, so we don't need to match up static access.
        // 2) nested classes CANNOT access a private member of their parent class if
        //    the member has the same name as a private member of the nested class.
        //
        // together this means that we can just look for the member upwards until we
        // find a match and we know that will be the correct match!
        let currentScope = this;
        const key = (0, types_1.privateKey)(node);
        while (currentScope != null) {
            if (currentScope.thisContext != null) {
                const member = currentScope.thisContext.members.instance.get(key) ??
                    currentScope.thisContext.members.static.get(key);
                if (member != null) {
                    countReference(node.parent, member);
                    return;
                }
            }
            currentScope = currentScope.upper;
        }
    }
    StaticBlock(node) {
        this.visitIntermediate(node);
    }
    VariableDeclarator(node) {
        this.visitChildren(node);
        if (node.init?.type === utils_1.AST_NODE_TYPES.ThisExpression &&
            node.id.type === utils_1.AST_NODE_TYPES.ObjectPattern) {
            this.handleThisDestructuring(node.id);
        }
    }
    /**
     * Handles destructuring from `this` in ObjectPattern.
     * Example: const { property } = this;
     */
    handleThisDestructuring(pattern) {
        if (this.thisContext == null) {
            return;
        }
        for (const prop of pattern.properties) {
            if (prop.type !== utils_1.AST_NODE_TYPES.Property) {
                continue;
            }
            if (prop.key.type !== utils_1.AST_NODE_TYPES.Identifier || prop.computed) {
                continue;
            }
            const memberKey = (0, types_1.publicKey)(prop.key.name);
            const members = this.isStaticThisContext
                ? this.thisContext.members.static
                : this.thisContext.members.instance;
            const member = members.get(memberKey);
            if (member == null) {
                continue;
            }
            countReference(prop.key, member);
        }
    }
}
/**
 * Any other scope that is not a class scope
 *
 * When we visit a function declaration/expression the `this` reference is
 * rebound so it no longer refers to the class.
 *
 * This also supports a function's `this` parameter.
 */
class IntermediateScope extends ThisScope {
    constructor(scopeManager, upper, node) {
        if (node.type === utils_1.AST_NODE_TYPES.Program) {
            super(scopeManager, upper, 'none', false);
            return;
        }
        if (node.type === utils_1.AST_NODE_TYPES.StaticBlock) {
            if (upper == null || !(upper instanceof ClassScope)) {
                throw new Error('Cannot have a static block without an upper ClassScope');
            }
            super(scopeManager, upper, upper, true);
            return;
        }
        // method definition
        if ((node.parent.type === utils_1.AST_NODE_TYPES.MethodDefinition ||
            node.parent.type === utils_1.AST_NODE_TYPES.PropertyDefinition) &&
            node.parent.value === node) {
            if (upper == null || !(upper instanceof ClassScope)) {
                throw new Error('Cannot have a class method/property without an upper ClassScope');
            }
            super(scopeManager, upper, upper, node.parent.static);
            return;
        }
        // function with a `this` parameter
        if (upper != null &&
            node.params.length > 0 &&
            node.params[0].type === utils_1.AST_NODE_TYPES.Identifier &&
            node.params[0].name === 'this') {
            const thisType = node.params[0].typeAnnotation?.typeAnnotation;
            if (thisType?.type === utils_1.AST_NODE_TYPES.TSTypeReference &&
                thisType.typeName.type === utils_1.AST_NODE_TYPES.Identifier) {
                const thisContext = upper.findClassScopeWithName(thisType.typeName.name);
                if (thisContext != null) {
                    super(scopeManager, upper, thisContext, false);
                    return;
                }
            }
        }
        super(scopeManager, upper, 'none', false);
    }
}
class ClassScope extends ThisScope {
    className;
    /**
     * The class's members, keyed by their name
     */
    members = {
        instance: new Map(),
        static: new Map(),
    };
    /**
     * The node that declares this class.
     */
    theClass;
    constructor(theClass, upper, scopeManager) {
        super(scopeManager, upper, 'self', false);
        this.theClass = theClass;
        this.className = theClass.id?.name ?? null;
        for (const memberNode of theClass.body.body) {
            switch (memberNode.type) {
                case utils_1.AST_NODE_TYPES.MethodDefinition:
                    if (memberNode.kind === 'constructor') {
                        for (const parameter of memberNode.value.params) {
                            if (parameter.type !== utils_1.AST_NODE_TYPES.TSParameterProperty) {
                                continue;
                            }
                            const member = Member.create(parameter);
                            if (member == null) {
                                continue;
                            }
                            this.members.instance.set(member.key, member);
                        }
                        // break instead of falling through because the constructor is not a "member" we track
                        break;
                    }
                // intentional fallthrough
                case utils_1.AST_NODE_TYPES.AccessorProperty:
                case utils_1.AST_NODE_TYPES.PropertyDefinition:
                case utils_1.AST_NODE_TYPES.TSAbstractAccessorProperty:
                case utils_1.AST_NODE_TYPES.TSAbstractMethodDefinition:
                case utils_1.AST_NODE_TYPES.TSAbstractPropertyDefinition: {
                    const member = Member.create(memberNode);
                    if (member == null) {
                        continue;
                    }
                    if (member.isStatic()) {
                        this.members.static.set(member.key, member);
                    }
                    else {
                        this.members.instance.set(member.key, member);
                    }
                    break;
                }
                case utils_1.AST_NODE_TYPES.StaticBlock:
                    // static blocks declare no members
                    continue;
                case utils_1.AST_NODE_TYPES.TSIndexSignature:
                    // index signatures are type signatures only and are fully computed
                    continue;
            }
        }
    }
}
function analyzeClassMemberUsage(program, scopeManager) {
    const rootScope = new IntermediateScope(scopeManager, null, program);
    rootScope.visit(program);
    return traverseScopes(rootScope);
}
function traverseScopes(currentScope, analysisResults = new Map()) {
    if (currentScope instanceof ClassScope) {
        analysisResults.set(currentScope.theClass, currentScope);
    }
    for (const childScope of currentScope.childScopes) {
        traverseScopes(childScope, analysisResults);
    }
    return analysisResults;
}
//# sourceMappingURL=classScopeAnalyzer.js.map