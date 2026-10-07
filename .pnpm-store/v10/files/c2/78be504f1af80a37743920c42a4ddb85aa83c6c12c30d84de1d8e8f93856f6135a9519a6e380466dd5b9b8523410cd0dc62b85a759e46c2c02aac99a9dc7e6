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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const tsutils = __importStar(require("tsutils"));
const ts = __importStar(require("typescript"));
const util = __importStar(require("../util"));
const util_1 = require("../util");
/**
 * The following is a list of exceptions to the rule
 * Generated via the following script.
 * This is statically defined to save making purposely invalid calls every lint run
 * ```
SUPPORTED_GLOBALS.flatMap(namespace => {
  const object = window[namespace];
    return Object.getOwnPropertyNames(object)
      .filter(
        name =>
          !name.startsWith('_') &&
          typeof object[name] === 'function',
      )
      .map(name => {
        try {
          const x = object[name];
          x();
        } catch (e) {
          if (e.message.includes("called on non-object")) {
            return `${namespace}.${name}`;
          }
        }
      });
}).filter(Boolean);
   * ```
 */
const nativelyNotBoundMembers = new Set([
    'Promise.all',
    'Promise.race',
    'Promise.resolve',
    'Promise.reject',
    'Promise.allSettled',
    'Object.defineProperties',
    'Object.defineProperty',
    'Reflect.defineProperty',
    'Reflect.deleteProperty',
    'Reflect.get',
    'Reflect.getOwnPropertyDescriptor',
    'Reflect.getPrototypeOf',
    'Reflect.has',
    'Reflect.isExtensible',
    'Reflect.ownKeys',
    'Reflect.preventExtensions',
    'Reflect.set',
    'Reflect.setPrototypeOf',
]);
const SUPPORTED_GLOBALS = [
    'Number',
    'Object',
    'String',
    'RegExp',
    'Symbol',
    'Array',
    'Proxy',
    'Date',
    'Infinity',
    'Atomics',
    'Reflect',
    'console',
    'Math',
    'JSON',
    'Intl',
];
const nativelyBoundMembers = SUPPORTED_GLOBALS.map(namespace => {
    if (!(namespace in global)) {
        // node.js might not have namespaces like Intl depending on compilation options
        // https://nodejs.org/api/intl.html#intl_options_for_building_node_js
        return [];
    }
    const object = global[namespace];
    return Object.getOwnPropertyNames(object)
        .filter(name => !name.startsWith('_') &&
        typeof object[name] === 'function')
        .map(name => `${namespace}.${name}`);
})
    .reduce((arr, names) => arr.concat(names), [])
    .filter(name => !nativelyNotBoundMembers.has(name));
const isNotImported = (symbol, currentSourceFile) => {
    const { valueDeclaration } = symbol;
    if (!valueDeclaration) {
        // working around https://github.com/microsoft/TypeScript/issues/31294
        return false;
    }
    return (!!currentSourceFile &&
        currentSourceFile !== valueDeclaration.getSourceFile());
};
const getNodeName = (node) => node.type === utils_1.AST_NODE_TYPES.Identifier ? node.name : null;
const getMemberFullName = (node) => `${getNodeName(node.object)}.${getNodeName(node.property)}`;
const BASE_MESSAGE = 'Avoid referencing unbound methods which may cause unintentional scoping of `this`.';
exports.default = util.createRule({
    name: 'unbound-method',
    meta: {
        docs: {
            description: 'Enforce unbound methods are called with their expected scope',
            recommended: 'error',
            requiresTypeChecking: true,
        },
        messages: {
            unbound: BASE_MESSAGE,
            unboundWithoutThisAnnotation: BASE_MESSAGE +
                '\n' +
                'If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.',
        },
        schema: [
            {
                type: 'object',
                properties: {
                    ignoreStatic: {
                        description: 'Whether to skip checking whether `static` methods are correctly bound.',
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
        type: 'problem',
    },
    defaultOptions: [
        {
            ignoreStatic: false,
        },
    ],
    create(context, [{ ignoreStatic }]) {
        const parserServices = util.getParserServices(context);
        const checker = parserServices.program.getTypeChecker();
        const currentSourceFile = parserServices.program.getSourceFile(context.getFilename());
        function checkMethodAndReport(node, symbol) {
            if (!symbol) {
                return;
            }
            const { dangerous, firstParamIsThis } = checkMethod(symbol, ignoreStatic);
            if (dangerous) {
                context.report({
                    messageId: firstParamIsThis === false
                        ? 'unboundWithoutThisAnnotation'
                        : 'unbound',
                    node,
                });
            }
        }
        return {
            MemberExpression(node) {
                if (isSafeUse(node)) {
                    return;
                }
                const objectSymbol = checker.getSymbolAtLocation(parserServices.esTreeNodeToTSNodeMap.get(node.object));
                if (objectSymbol &&
                    nativelyBoundMembers.includes(getMemberFullName(node)) &&
                    isNotImported(objectSymbol, currentSourceFile)) {
                    return;
                }
                const originalNode = parserServices.esTreeNodeToTSNodeMap.get(node);
                checkMethodAndReport(node, checker.getSymbolAtLocation(originalNode));
            },
            'VariableDeclarator, AssignmentExpression'(node) {
                const [idNode, initNode] = node.type === utils_1.AST_NODE_TYPES.VariableDeclarator
                    ? [node.id, node.init]
                    : [node.left, node.right];
                if (initNode && idNode.type === utils_1.AST_NODE_TYPES.ObjectPattern) {
                    const tsNode = parserServices.esTreeNodeToTSNodeMap.get(initNode);
                    const rightSymbol = checker.getSymbolAtLocation(tsNode);
                    const initTypes = checker.getTypeAtLocation(tsNode);
                    const notImported = rightSymbol && isNotImported(rightSymbol, currentSourceFile);
                    idNode.properties.forEach(property => {
                        if (property.type === utils_1.AST_NODE_TYPES.Property &&
                            property.key.type === utils_1.AST_NODE_TYPES.Identifier) {
                            if (notImported &&
                                util.isIdentifier(initNode) &&
                                nativelyBoundMembers.includes(`${initNode.name}.${property.key.name}`)) {
                                return;
                            }
                            checkMethodAndReport(property.key, initTypes.getProperty(property.key.name));
                        }
                    });
                }
            },
        };
    },
});
function checkMethod(symbol, ignoreStatic) {
    var _a, _b;
    const { valueDeclaration } = symbol;
    if (!valueDeclaration) {
        // working around https://github.com/microsoft/TypeScript/issues/31294
        return { dangerous: false };
    }
    switch (valueDeclaration.kind) {
        case ts.SyntaxKind.PropertyDeclaration:
            return {
                dangerous: ((_a = valueDeclaration.initializer) === null || _a === void 0 ? void 0 : _a.kind) ===
                    ts.SyntaxKind.FunctionExpression,
            };
        case ts.SyntaxKind.MethodDeclaration:
        case ts.SyntaxKind.MethodSignature: {
            const decl = valueDeclaration;
            const firstParam = decl.parameters[0];
            const firstParamIsThis = (firstParam === null || firstParam === void 0 ? void 0 : firstParam.name.kind) === ts.SyntaxKind.Identifier &&
                (firstParam === null || firstParam === void 0 ? void 0 : firstParam.name.escapedText) === 'this';
            const thisArgIsVoid = firstParamIsThis &&
                ((_b = firstParam === null || firstParam === void 0 ? void 0 : firstParam.type) === null || _b === void 0 ? void 0 : _b.kind) === ts.SyntaxKind.VoidKeyword;
            return {
                dangerous: !thisArgIsVoid &&
                    !(ignoreStatic &&
                        tsutils.hasModifier((0, util_1.getModifiers)(valueDeclaration), ts.SyntaxKind.StaticKeyword)),
                firstParamIsThis,
            };
        }
    }
    return { dangerous: false };
}
function isSafeUse(node) {
    const parent = node.parent;
    switch (parent === null || parent === void 0 ? void 0 : parent.type) {
        case utils_1.AST_NODE_TYPES.IfStatement:
        case utils_1.AST_NODE_TYPES.ForStatement:
        case utils_1.AST_NODE_TYPES.MemberExpression:
        case utils_1.AST_NODE_TYPES.SwitchStatement:
        case utils_1.AST_NODE_TYPES.UpdateExpression:
        case utils_1.AST_NODE_TYPES.WhileStatement:
            return true;
        case utils_1.AST_NODE_TYPES.CallExpression:
            return parent.callee === node;
        case utils_1.AST_NODE_TYPES.ConditionalExpression:
            return parent.test === node;
        case utils_1.AST_NODE_TYPES.TaggedTemplateExpression:
            return parent.tag === node;
        case utils_1.AST_NODE_TYPES.UnaryExpression:
            // the first case is safe for obvious
            // reasons. The second one is also fine
            // since we're returning something falsy
            return ['typeof', '!', 'void', 'delete'].includes(parent.operator);
        case utils_1.AST_NODE_TYPES.BinaryExpression:
            return ['instanceof', '==', '!=', '===', '!=='].includes(parent.operator);
        case utils_1.AST_NODE_TYPES.AssignmentExpression:
            return (parent.operator === '=' &&
                (node === parent.left ||
                    (node.type === utils_1.AST_NODE_TYPES.MemberExpression &&
                        node.object.type === utils_1.AST_NODE_TYPES.Super &&
                        parent.left.type === utils_1.AST_NODE_TYPES.MemberExpression &&
                        parent.left.object.type === utils_1.AST_NODE_TYPES.ThisExpression)));
        case utils_1.AST_NODE_TYPES.ChainExpression:
        case utils_1.AST_NODE_TYPES.TSNonNullExpression:
        case utils_1.AST_NODE_TYPES.TSAsExpression:
        case utils_1.AST_NODE_TYPES.TSTypeAssertion:
            return isSafeUse(parent);
        case utils_1.AST_NODE_TYPES.LogicalExpression:
            if (parent.operator === '&&' && parent.left === node) {
                // this is safe, as && will return the left if and only if it's falsy
                return true;
            }
            // in all other cases, it's likely the logical expression will return the method ref
            // so make sure the parent is a safe usage
            return isSafeUse(parent);
    }
    return false;
}
//# sourceMappingURL=unbound-method.js.map