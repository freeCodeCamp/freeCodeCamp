"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ClassVisitor_classNode, _ClassVisitor_referencer, _ClassVisitor_emitDecoratorMetadata;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassVisitor = void 0;
const types_1 = require("@typescript-eslint/types");
const definition_1 = require("../definition");
const TypeVisitor_1 = require("./TypeVisitor");
const Visitor_1 = require("./Visitor");
class ClassVisitor extends Visitor_1.Visitor {
    constructor(referencer, node, emitDecoratorMetadata) {
        super(referencer);
        _ClassVisitor_classNode.set(this, void 0);
        _ClassVisitor_referencer.set(this, void 0);
        _ClassVisitor_emitDecoratorMetadata.set(this, void 0);
        __classPrivateFieldSet(this, _ClassVisitor_referencer, referencer, "f");
        __classPrivateFieldSet(this, _ClassVisitor_classNode, node, "f");
        __classPrivateFieldSet(this, _ClassVisitor_emitDecoratorMetadata, emitDecoratorMetadata, "f");
    }
    static visit(referencer, node, emitDecoratorMetadata) {
        const classVisitor = new ClassVisitor(referencer, node, emitDecoratorMetadata);
        classVisitor.visitClass(node);
    }
    visit(node) {
        // make sure we only handle the nodes we are designed to handle
        if (node && node.type in this) {
            super.visit(node);
        }
        else {
            __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node);
        }
    }
    ///////////////////
    // Visit helpers //
    ///////////////////
    visitClass(node) {
        var _a, _b;
        if (node.type === types_1.AST_NODE_TYPES.ClassDeclaration && node.id) {
            __classPrivateFieldGet(this, _ClassVisitor_referencer, "f")
                .currentScope()
                .defineIdentifier(node.id, new definition_1.ClassNameDefinition(node.id, node));
        }
        (_a = node.decorators) === null || _a === void 0 ? void 0 : _a.forEach(d => __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(d));
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").scopeManager.nestClassScope(node);
        if (node.id) {
            // define the class name again inside the new scope
            // references to the class should not resolve directly to the parent class
            __classPrivateFieldGet(this, _ClassVisitor_referencer, "f")
                .currentScope()
                .defineIdentifier(node.id, new definition_1.ClassNameDefinition(node.id, node));
        }
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node.superClass);
        // visit the type param declarations
        this.visitType(node.typeParameters);
        // then the usages
        this.visitType(node.superTypeParameters);
        (_b = node.implements) === null || _b === void 0 ? void 0 : _b.forEach(imp => this.visitType(imp));
        this.visit(node.body);
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").close(node);
    }
    visitPropertyDefinition(node) {
        this.visitPropertyBase(node);
        /**
         * class A {
         *   @meta     // <--- check this
         *   foo: Type;
         * }
         */
        this.visitMetadataType(node.typeAnnotation, !!node.decorators);
    }
    visitFunctionParameterTypeAnnotation(node, withDecorators) {
        if ('typeAnnotation' in node) {
            this.visitMetadataType(node.typeAnnotation, withDecorators);
        }
        else if (node.type === types_1.AST_NODE_TYPES.AssignmentPattern) {
            this.visitMetadataType(node.left.typeAnnotation, withDecorators);
        }
        else if (node.type === types_1.AST_NODE_TYPES.TSParameterProperty) {
            this.visitFunctionParameterTypeAnnotation(node.parameter, withDecorators);
        }
    }
    visitMethodFunction(node, methodNode) {
        var _a, _b;
        if (node.id) {
            // FunctionExpression with name creates its special scope;
            // FunctionExpressionNameScope.
            __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").scopeManager.nestFunctionExpressionNameScope(node);
        }
        // Consider this function is in the MethodDefinition.
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").scopeManager.nestFunctionScope(node, true);
        /**
         * class A {
         *   @meta     // <--- check this
         *   foo(a: Type) {}
         *
         *   @meta     // <--- check this
         *   foo(): Type {}
         * }
         */
        let withMethodDecorators = !!methodNode.decorators;
        /**
         * class A {
         *   foo(
         *     @meta    // <--- check this
         *     a: Type
         *   ) {}
         *
         *   set foo(
         *     @meta    // <--- EXCEPT this. TS do nothing for this
         *     a: Type
         *   ) {}
         * }
         */
        withMethodDecorators =
            withMethodDecorators ||
                (methodNode.kind !== 'set' &&
                    node.params.some(param => param.decorators));
        if (!withMethodDecorators && methodNode.kind === 'set') {
            const keyName = getLiteralMethodKeyName(methodNode);
            /**
             * class A {
             *   @meta      // <--- check this
             *   get a() {}
             *   set ['a'](v: Type) {}
             * }
             */
            if (keyName != null &&
                ((_a = __classPrivateFieldGet(this, _ClassVisitor_classNode, "f").body.body.find((node) => node !== methodNode &&
                    node.type === types_1.AST_NODE_TYPES.MethodDefinition &&
                    // Node must both be static or not
                    node.static === methodNode.static &&
                    getLiteralMethodKeyName(node) === keyName)) === null || _a === void 0 ? void 0 : _a.decorators)) {
                withMethodDecorators = true;
            }
        }
        /**
         * @meta      // <--- check this
         * class A {
         *   constructor(a: Type) {}
         * }
         */
        if (!withMethodDecorators &&
            methodNode.kind === 'constructor' &&
            __classPrivateFieldGet(this, _ClassVisitor_classNode, "f").decorators) {
            withMethodDecorators = true;
        }
        // Process parameter declarations.
        for (const param of node.params) {
            this.visitPattern(param, (pattern, info) => {
                __classPrivateFieldGet(this, _ClassVisitor_referencer, "f")
                    .currentScope()
                    .defineIdentifier(pattern, new definition_1.ParameterDefinition(pattern, node, info.rest));
                __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").referencingDefaultValue(pattern, info.assignments, null, true);
            }, { processRightHandNodes: true });
            this.visitFunctionParameterTypeAnnotation(param, withMethodDecorators);
            (_b = param.decorators) === null || _b === void 0 ? void 0 : _b.forEach(d => this.visit(d));
        }
        this.visitMetadataType(node.returnType, withMethodDecorators);
        this.visitType(node.typeParameters);
        // In TypeScript there are a number of function-like constructs which have no body,
        // so check it exists before traversing
        if (node.body) {
            // Skip BlockStatement to prevent creating BlockStatement scope.
            if (node.body.type === types_1.AST_NODE_TYPES.BlockStatement) {
                __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visitChildren(node.body);
            }
            else {
                __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node.body);
            }
        }
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").close(node);
    }
    visitPropertyBase(node) {
        var _a;
        if (node.computed) {
            __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node.key);
        }
        if (node.value) {
            if (node.type === types_1.AST_NODE_TYPES.PropertyDefinition ||
                node.type === types_1.AST_NODE_TYPES.AccessorProperty) {
                __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").scopeManager.nestClassFieldInitializerScope(node.value);
            }
            __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node.value);
            if (node.type === types_1.AST_NODE_TYPES.PropertyDefinition ||
                node.type === types_1.AST_NODE_TYPES.AccessorProperty) {
                __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").close(node.value);
            }
        }
        if ('decorators' in node) {
            (_a = node.decorators) === null || _a === void 0 ? void 0 : _a.forEach(d => __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(d));
        }
    }
    visitMethod(node) {
        var _a;
        if (node.computed) {
            __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node.key);
        }
        if (node.value.type === types_1.AST_NODE_TYPES.FunctionExpression) {
            this.visitMethodFunction(node.value, node);
        }
        else {
            __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node.value);
        }
        if ('decorators' in node) {
            (_a = node.decorators) === null || _a === void 0 ? void 0 : _a.forEach(d => __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(d));
        }
    }
    visitType(node) {
        if (!node) {
            return;
        }
        TypeVisitor_1.TypeVisitor.visit(__classPrivateFieldGet(this, _ClassVisitor_referencer, "f"), node);
    }
    visitMetadataType(node, withDecorators) {
        if (!node) {
            return;
        }
        // emit decorators metadata only work for TSTypeReference in ClassDeclaration
        if (__classPrivateFieldGet(this, _ClassVisitor_classNode, "f").type === types_1.AST_NODE_TYPES.ClassDeclaration &&
            !__classPrivateFieldGet(this, _ClassVisitor_classNode, "f").declare &&
            node.typeAnnotation.type === types_1.AST_NODE_TYPES.TSTypeReference &&
            __classPrivateFieldGet(this, _ClassVisitor_emitDecoratorMetadata, "f")) {
            let entityName;
            if (node.typeAnnotation.typeName.type === types_1.AST_NODE_TYPES.TSQualifiedName) {
                let iter = node.typeAnnotation.typeName;
                while (iter.left.type === types_1.AST_NODE_TYPES.TSQualifiedName) {
                    iter = iter.left;
                }
                entityName = iter.left;
            }
            else {
                entityName = node.typeAnnotation.typeName;
            }
            if (withDecorators) {
                if (entityName.type === types_1.AST_NODE_TYPES.Identifier) {
                    __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").currentScope().referenceDualValueType(entityName);
                }
                if (node.typeAnnotation.typeParameters) {
                    this.visitType(node.typeAnnotation.typeParameters);
                }
                // everything is handled now
                return;
            }
        }
        this.visitType(node);
    }
    /////////////////////
    // Visit selectors //
    /////////////////////
    AccessorProperty(node) {
        this.visitPropertyDefinition(node);
    }
    ClassBody(node) {
        // this is here on purpose so that this visitor explicitly declares visitors
        // for all nodes it cares about (see the instance visit method above)
        this.visitChildren(node);
    }
    PropertyDefinition(node) {
        this.visitPropertyDefinition(node);
    }
    MethodDefinition(node) {
        this.visitMethod(node);
    }
    TSAbstractAccessorProperty(node) {
        this.visitPropertyDefinition(node);
    }
    TSAbstractPropertyDefinition(node) {
        this.visitPropertyDefinition(node);
    }
    TSAbstractMethodDefinition(node) {
        this.visitPropertyBase(node);
    }
    Identifier(node) {
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node);
    }
    PrivateIdentifier() {
        // intentionally skip
    }
    StaticBlock(node) {
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").scopeManager.nestClassStaticBlockScope(node);
        node.body.forEach(b => this.visit(b));
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").close(node);
    }
}
exports.ClassVisitor = ClassVisitor;
_ClassVisitor_classNode = new WeakMap(), _ClassVisitor_referencer = new WeakMap(), _ClassVisitor_emitDecoratorMetadata = new WeakMap();
/**
 * Only if key is one of [identifier, string, number], ts will combine metadata of accessors .
 * class A {
 *   get a() {}
 *   set ['a'](v: Type) {}
 *
 *   get [1]() {}
 *   set [1](v: Type) {}
 *
 *   // Following won't be combined
 *   get [key]() {}
 *   set [key](v: Type) {}
 *
 *   get [true]() {}
 *   set [true](v: Type) {}
 *
 *   get ['a'+'b']() {}
 *   set ['a'+'b']() {}
 * }
 */
function getLiteralMethodKeyName(node) {
    if (node.computed && node.key.type === types_1.AST_NODE_TYPES.Literal) {
        if (typeof node.key.value === 'string' ||
            typeof node.key.value === 'number') {
            return node.key.value;
        }
    }
    else if (!node.computed && node.key.type === types_1.AST_NODE_TYPES.Identifier) {
        return node.key.name;
    }
    return null;
}
//# sourceMappingURL=ClassVisitor.js.map