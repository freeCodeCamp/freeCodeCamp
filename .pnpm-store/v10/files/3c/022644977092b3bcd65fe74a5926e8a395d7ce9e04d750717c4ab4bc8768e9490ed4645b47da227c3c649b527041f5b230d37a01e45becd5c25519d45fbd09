"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitorKeys = void 0;
const eslintVisitorKeys = __importStar(require("eslint-visitor-keys"));
/*
 ********************************** IMPORTANT NOTE ********************************
 *                                                                                *
 * The key arrays should be sorted in the order in which you would want to visit  *
 * the child keys.                                                                *
 *                                                                                *
 *                        DO NOT SORT THEM ALPHABETICALLY!                        *
 *                                                                                *
 * They should be sorted in the order that they appear in the source code.        *
 * For example:                                                                   *
 *                                                                                *
 * class Foo extends Bar { prop: 1 }                                              *
 * ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ClassDeclaration                             *
 *       ^^^ id      ^^^ superClass                                               *
 *                       ^^^^^^^^^^^ body                                         *
 *                                                                                *
 * It would be incorrect to provide the visitor keys ['body', 'id', 'superClass'] *
 * because the body comes AFTER everything else in the source code.               *
 * Instead the correct ordering would be ['id', 'superClass', 'body'].            *
 *                                                                                *
 **********************************************************************************
 */
const SharedVisitorKeys = (() => {
    const FunctionType = ['typeParameters', 'params', 'returnType'];
    const AnonymousFunction = [...FunctionType, 'body'];
    const AbstractPropertyDefinition = [
        'decorators',
        'key',
        'typeAnnotation',
    ];
    return {
        AbstractPropertyDefinition: ['decorators', 'key', 'typeAnnotation'],
        AnonymousFunction,
        AsExpression: ['expression', 'typeAnnotation'],
        ClassDeclaration: [
            'decorators',
            'id',
            'typeParameters',
            'superClass',
            'superTypeArguments',
            'implements',
            'body',
        ],
        Function: ['id', ...AnonymousFunction],
        FunctionType,
        PropertyDefinition: [...AbstractPropertyDefinition, 'value'],
    };
})();
const additionalKeys = {
    AccessorProperty: SharedVisitorKeys.PropertyDefinition,
    ArrayPattern: ['decorators', 'elements', 'typeAnnotation'],
    ArrowFunctionExpression: SharedVisitorKeys.AnonymousFunction,
    AssignmentPattern: ['decorators', 'left', 'right', 'typeAnnotation'],
    CallExpression: ['callee', 'typeArguments', 'arguments'],
    ClassDeclaration: SharedVisitorKeys.ClassDeclaration,
    ClassExpression: SharedVisitorKeys.ClassDeclaration,
    Decorator: ['expression'],
    ExportAllDeclaration: ['exported', 'source', 'attributes'],
    ExportNamedDeclaration: ['declaration', 'specifiers', 'source', 'attributes'],
    FunctionDeclaration: SharedVisitorKeys.Function,
    FunctionExpression: SharedVisitorKeys.Function,
    Identifier: ['decorators', 'typeAnnotation'],
    ImportAttribute: ['key', 'value'],
    ImportDeclaration: ['specifiers', 'source', 'attributes'],
    ImportExpression: ['source', 'options'],
    JSXClosingFragment: [],
    JSXOpeningElement: ['name', 'typeArguments', 'attributes'],
    JSXOpeningFragment: [],
    JSXSpreadChild: ['expression'],
    MethodDefinition: ['decorators', 'key', 'value'],
    NewExpression: ['callee', 'typeArguments', 'arguments'],
    ObjectPattern: ['decorators', 'properties', 'typeAnnotation'],
    PropertyDefinition: SharedVisitorKeys.PropertyDefinition,
    RestElement: ['decorators', 'argument', 'typeAnnotation'],
    StaticBlock: ['body'],
    TaggedTemplateExpression: ['tag', 'typeArguments', 'quasi'],
    TSAbstractAccessorProperty: SharedVisitorKeys.AbstractPropertyDefinition,
    TSAbstractKeyword: [],
    TSAbstractMethodDefinition: ['key', 'value'],
    TSAbstractPropertyDefinition: SharedVisitorKeys.AbstractPropertyDefinition,
    TSAnyKeyword: [],
    TSArrayType: ['elementType'],
    TSAsExpression: SharedVisitorKeys.AsExpression,
    TSAsyncKeyword: [],
    TSBigIntKeyword: [],
    TSBooleanKeyword: [],
    TSCallSignatureDeclaration: SharedVisitorKeys.FunctionType,
    TSClassImplements: ['expression', 'typeArguments'],
    TSConditionalType: ['checkType', 'extendsType', 'trueType', 'falseType'],
    TSConstructorType: SharedVisitorKeys.FunctionType,
    TSConstructSignatureDeclaration: SharedVisitorKeys.FunctionType,
    TSDeclareFunction: SharedVisitorKeys.Function,
    TSDeclareKeyword: [],
    TSEmptyBodyFunctionExpression: ['id', ...SharedVisitorKeys.FunctionType],
    TSEnumBody: ['members'],
    TSEnumDeclaration: ['id', 'body'],
    TSEnumMember: ['id', 'initializer'],
    TSExportAssignment: ['expression'],
    TSExportKeyword: [],
    TSExternalModuleReference: ['expression'],
    TSFunctionType: SharedVisitorKeys.FunctionType,
    TSImportEqualsDeclaration: ['id', 'moduleReference'],
    TSImportType: ['source', 'options', 'qualifier', 'typeArguments'],
    TSIndexedAccessType: ['objectType', 'indexType'],
    TSIndexSignature: ['parameters', 'typeAnnotation'],
    TSInferType: ['typeParameter'],
    TSInstantiationExpression: ['expression', 'typeArguments'],
    TSInterfaceBody: ['body'],
    TSInterfaceDeclaration: ['id', 'typeParameters', 'extends', 'body'],
    TSInterfaceHeritage: ['expression', 'typeArguments'],
    TSIntersectionType: ['types'],
    TSIntrinsicKeyword: [],
    TSLiteralType: ['literal'],
    TSMappedType: ['key', 'constraint', 'nameType', 'typeAnnotation'],
    TSMethodSignature: ['key', 'typeParameters', 'params', 'returnType'],
    TSModuleBlock: ['body'],
    TSModuleDeclaration: ['id', 'body'],
    TSNamedTupleMember: ['label', 'elementType'],
    TSNamespaceExportDeclaration: ['id'],
    TSNeverKeyword: [],
    TSNonNullExpression: ['expression'],
    TSNullKeyword: [],
    TSNumberKeyword: [],
    TSObjectKeyword: [],
    TSOptionalType: ['typeAnnotation'],
    TSParameterProperty: ['decorators', 'parameter'],
    TSPrivateKeyword: [],
    TSPropertySignature: ['key', 'typeAnnotation'],
    TSProtectedKeyword: [],
    TSPublicKeyword: [],
    TSQualifiedName: ['left', 'right'],
    TSReadonlyKeyword: [],
    TSRestType: ['typeAnnotation'],
    TSSatisfiesExpression: SharedVisitorKeys.AsExpression,
    TSStaticKeyword: [],
    TSStringKeyword: [],
    TSSymbolKeyword: [],
    TSTemplateLiteralType: ['quasis', 'types'],
    TSThisType: [],
    TSTupleType: ['elementTypes'],
    TSTypeAliasDeclaration: ['id', 'typeParameters', 'typeAnnotation'],
    TSTypeAnnotation: ['typeAnnotation'],
    TSTypeAssertion: ['typeAnnotation', 'expression'],
    TSTypeLiteral: ['members'],
    TSTypeOperator: ['typeAnnotation'],
    TSTypeParameter: ['name', 'constraint', 'default'],
    TSTypeParameterDeclaration: ['params'],
    TSTypeParameterInstantiation: ['params'],
    TSTypePredicate: ['parameterName', 'typeAnnotation'],
    TSTypeQuery: ['exprName', 'typeArguments'],
    TSTypeReference: ['typeName', 'typeArguments'],
    TSUndefinedKeyword: [],
    TSUnionType: ['types'],
    TSUnknownKeyword: [],
    TSVoidKeyword: [],
};
exports.visitorKeys = eslintVisitorKeys.unionWith(additionalKeys);
