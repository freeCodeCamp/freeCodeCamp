"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassVisitor = void 0;
const types_1 = require("@typescript-eslint/types");
const definition_1 = require("../definition");
const TypeVisitor_1 = require("./TypeVisitor");
const Visitor_1 = require("./Visitor");
class ClassVisitor extends Visitor_1.Visitor {
    #referencer;
    constructor(referencer) {
        super(referencer);
        this.#referencer = referencer;
    }
    static visit(referencer, node) {
        const classVisitor = new ClassVisitor(referencer);
        classVisitor.visitClass(node);
    }
    visit(node) {
        // make sure we only handle the nodes we are designed to handle
        if (node && node.type in this) {
            super.visit(node);
        }
        else {
            this.#referencer.visit(node);
        }
    }
    ///////////////////
    // Visit helpers //
    ///////////////////
    visitClass(node) {
        if (node.type === types_1.AST_NODE_TYPES.ClassDeclaration && node.id) {
            this.#referencer
                .currentScope()
                .defineIdentifier(node.id, new definition_1.ClassNameDefinition(node.id, node));
        }
        node.decorators.forEach(d => this.#referencer.visit(d));
        this.#referencer.scopeManager.nestClassScope(node);
        if (node.id) {
            // define the class name again inside the new scope
            // references to the class should not resolve directly to the parent class
            this.#referencer
                .currentScope()
                .defineIdentifier(node.id, new definition_1.ClassNameDefinition(node.id, node));
        }
        this.#referencer.visit(node.superClass);
        // visit the type param declarations
        this.visitType(node.typeParameters);
        // then the usages
        this.visitType(node.superTypeArguments);
        node.implements.forEach(imp => this.visitType(imp));
        this.visit(node.body);
        this.#referencer.close(node);
    }
    visitFunctionParameterTypeAnnotation(node) {
        switch (node.type) {
            case types_1.AST_NODE_TYPES.AssignmentPattern:
                this.visitType(node.left.typeAnnotation);
                break;
            case types_1.AST_NODE_TYPES.TSParameterProperty:
                this.visitFunctionParameterTypeAnnotation(node.parameter);
                break;
            default:
                this.visitType(node.typeAnnotation);
        }
    }
    visitMethod(node) {
        if (node.computed) {
            this.#referencer.visit(node.key);
        }
        if (node.value.type === types_1.AST_NODE_TYPES.FunctionExpression) {
            this.visitMethodFunction(node.value);
        }
        else {
            this.#referencer.visit(node.value);
        }
        node.decorators.forEach(d => this.#referencer.visit(d));
    }
    visitMethodFunction(node) {
        if (node.id) {
            // FunctionExpression with name creates its special scope;
            // FunctionExpressionNameScope.
            this.#referencer.scopeManager.nestFunctionExpressionNameScope(node);
        }
        node.params.forEach(param => {
            param.decorators.forEach(d => this.visit(d));
        });
        // Consider this function is in the MethodDefinition.
        this.#referencer.scopeManager.nestFunctionScope(node, true);
        // Process parameter declarations.
        for (const param of node.params) {
            this.visitPattern(param, (pattern, info) => {
                this.#referencer
                    .currentScope()
                    .defineIdentifier(pattern, new definition_1.ParameterDefinition(pattern, node, info.rest));
                this.#referencer.referencingDefaultValue(pattern, info.assignments, null, true);
            }, { processRightHandNodes: true });
            this.visitFunctionParameterTypeAnnotation(param);
        }
        this.visitType(node.returnType);
        this.visitType(node.typeParameters);
        this.#referencer.visitChildren(node.body);
        this.#referencer.close(node);
    }
    visitPropertyBase(node) {
        if (node.computed) {
            this.#referencer.visit(node.key);
        }
        if (node.value) {
            if (node.type === types_1.AST_NODE_TYPES.PropertyDefinition ||
                node.type === types_1.AST_NODE_TYPES.AccessorProperty) {
                this.#referencer.scopeManager.nestClassFieldInitializerScope(node.value);
            }
            this.#referencer.visit(node.value);
            if (node.type === types_1.AST_NODE_TYPES.PropertyDefinition ||
                node.type === types_1.AST_NODE_TYPES.AccessorProperty) {
                this.#referencer.close(node.value);
            }
        }
        node.decorators.forEach(d => this.#referencer.visit(d));
    }
    visitPropertyDefinition(node) {
        this.visitPropertyBase(node);
        /**
         * class A {
         *   @meta     // <--- check this
         *   foo: Type;
         * }
         */
        this.visitType(node.typeAnnotation);
    }
    visitType(node) {
        if (!node) {
            return;
        }
        TypeVisitor_1.TypeVisitor.visit(this.#referencer, node);
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
    Identifier(node) {
        this.#referencer.visit(node);
    }
    MethodDefinition(node) {
        this.visitMethod(node);
    }
    PrivateIdentifier() {
        // intentionally skip
    }
    PropertyDefinition(node) {
        this.visitPropertyDefinition(node);
    }
    StaticBlock(node) {
        this.#referencer.scopeManager.nestClassStaticBlockScope(node);
        node.body.forEach(b => this.visit(b));
        this.#referencer.close(node);
    }
    TSAbstractAccessorProperty(node) {
        this.visitPropertyDefinition(node);
    }
    TSAbstractMethodDefinition(node) {
        this.visitPropertyBase(node);
    }
    TSAbstractPropertyDefinition(node) {
        this.visitPropertyDefinition(node);
    }
    TSIndexSignature(node) {
        this.visitType(node);
    }
}
exports.ClassVisitor = ClassVisitor;
