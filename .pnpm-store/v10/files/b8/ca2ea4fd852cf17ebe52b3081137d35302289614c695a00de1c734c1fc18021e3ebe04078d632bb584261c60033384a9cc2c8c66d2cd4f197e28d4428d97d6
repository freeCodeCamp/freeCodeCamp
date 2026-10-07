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
const utils_1 = require("@typescript-eslint/utils");
const tsutils = __importStar(require("ts-api-utils"));
const ts = __importStar(require("typescript"));
const util_1 = require("../util");
/**
 * Static methods on these globals are either not `this`-aware or supported being
 * called without `this`.
 *
 * - `Promise` is not in the list because it supports subclassing by using `this`
 * - `Array` is in the list because although it supports subclassing, the `this`
 *   value defaults to `Array` when unbound
 *
 * This is now a language-design invariant: static methods are never `this`-aware
 * because TC39 wants to make `array.map(Class.method)` work!
 */
const SUPPORTED_GLOBALS = [
    'Number',
    'Object',
    'String', // eslint-disable-line @typescript-eslint/internal/prefer-ast-types-enum
    'RegExp',
    'Symbol',
    'Array',
    'Proxy',
    'Date',
    'Atomics',
    'Reflect',
    'console',
    'Math',
    'JSON',
    'Intl',
];
const nativelyBoundMembers = new Set(SUPPORTED_GLOBALS.flatMap(namespace => {
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
}));
const SUPPORTED_GLOBAL_TYPES = [
    'NumberConstructor',
    'ObjectConstructor',
    'StringConstructor',
    'SymbolConstructor',
    'ArrayConstructor',
    'Array',
    'ProxyConstructor',
    'Console',
    'DateConstructor',
    'Atomics',
    'Math',
    'JSON',
];
/**
 * Methods on instances of built-in classes that are defined by the ECMAScript
 * spec as *bound* to their instance (i.e. they are safe to call without their
 * receiver), but whose TypeScript declarations don't model that binding - they
 * are declared as plain methods that would require a `this` value.
 *
 * For example, `Intl.Collator.prototype.compare` is defined as a bound getter
 * function per the ECMA-402 spec:
 * https://tc39.es/ecma402/#sec-intl.collator.prototype.compare
 * ...but `lib.es5.d.ts` declares it as a regular method, so this rule would
 * otherwise incorrectly flag usages such as `array.sort(collator.compare)`.
 */
const nativelyBoundInstanceMethods = new Set(['Collator.compare']);
const isNotImported = (symbol, currentSourceFile) => {
    const { valueDeclaration } = symbol;
    if (!valueDeclaration) {
        // working around https://github.com/microsoft/TypeScript/issues/31294
        return false;
    }
    return (!!currentSourceFile &&
        currentSourceFile !== valueDeclaration.getSourceFile());
};
/**
 * Returns `true` if `propertyName` is a member of a built-in class instance
 * that is defined by the spec as bound to that instance (see
 * `nativelyBoundInstanceMethods` above).
 */
function isSpecBoundBuiltinMethod(program, objectType, propertyName) {
    const symbol = objectType.getSymbol();
    if (!symbol || !(0, util_1.isSymbolFromDefaultLibrary)(program, symbol)) {
        return false;
    }
    return nativelyBoundInstanceMethods.has(`${symbol.getName()}.${propertyName}`);
}
const BASE_MESSAGE = [
    `A method that is not declared with \`this: void\` may cause unintentional scoping of \`this\` when separated from its object.`,
    `Consider using an arrow function or explicitly \`.bind()\`ing the method to avoid calling the method with an unintended \`this\` value. `,
].join('\n');
exports.default = (0, util_1.createRule)({
    name: 'unbound-method',
    meta: {
        type: 'problem',
        docs: {
            description: 'Enforce unbound methods are called with their expected scope',
            recommended: 'recommended',
            requiresTypeChecking: true,
        },
        messages: {
            unbound: BASE_MESSAGE,
            unboundWithoutThisAnnotation: `${BASE_MESSAGE}\nIf a function does not access \`this\`, it can be annotated with \`this: void\`.`,
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    ignoreStatic: {
                        type: 'boolean',
                        description: 'Whether to skip checking whether `static` methods are correctly bound.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            ignoreStatic: false,
        },
    ],
    create(context, [{ ignoreStatic }]) {
        const services = (0, util_1.getParserServices)(context);
        const currentSourceFile = services.program.getSourceFile(context.filename);
        function checkIfMethodAndReport(node, symbol) {
            if (!symbol) {
                return false;
            }
            const { dangerous, firstParamIsThis } = checkIfMethod(symbol, ignoreStatic);
            if (dangerous) {
                context.report({
                    node,
                    messageId: firstParamIsThis === false
                        ? 'unboundWithoutThisAnnotation'
                        : 'unbound',
                });
                return true;
            }
            return false;
        }
        function checkUnionConstituentsAndReport(reportNode, propertyName, type) {
            for (const intersectionPart of tsutils
                .unionConstituents(type)
                .flatMap(unionPart => tsutils.intersectionConstituents(unionPart))) {
                const reported = checkIfMethodAndReport(reportNode, intersectionPart.getProperty(propertyName));
                if (reported) {
                    return true;
                }
            }
            return false;
        }
        function getAccessedPropertyNames(node) {
            if (!node.computed) {
                return node.property.type === utils_1.AST_NODE_TYPES.Identifier
                    ? [node.property.name]
                    : [];
            }
            return tsutils
                .unionConstituents(services.getTypeAtLocation(node.property))
                .flatMap(part => {
                return part.isStringLiteral() || part.isNumberLiteral()
                    ? [part.value.toString()]
                    : [];
            });
        }
        function isNativelyBound(object, property) {
            // We can't rely entirely on the type-level checks made at the end of this
            // function, because sometimes type declarations don't come from the
            // default library, but come from, for example, "@types/node". And we can't
            // tell if a method is unbound just by looking at its signature declared in
            // the interface.
            //
            // See related discussion https://github.com/typescript-eslint/typescript-eslint/pull/8952#discussion_r1576543310
            if (object.type === utils_1.AST_NODE_TYPES.Identifier &&
                property.type === utils_1.AST_NODE_TYPES.Identifier) {
                const objectSymbol = services.getSymbolAtLocation(object);
                const notImported = objectSymbol != null &&
                    isNotImported(objectSymbol, currentSourceFile);
                if (notImported &&
                    nativelyBoundMembers.has(`${object.name}.${property.name}`)) {
                    return true;
                }
            }
            if (property.type === utils_1.AST_NODE_TYPES.Identifier) {
                const objectType = services.getTypeAtLocation(object);
                if (isSpecBoundBuiltinMethod(services.program, objectType, property.name)) {
                    return true;
                }
            }
            // if `${object.name}.${property.name}` doesn't match any of
            // the nativelyBoundMembers, then we fallback to type-level checks
            return ((0, util_1.isBuiltinSymbolLike)(services.program, services.getTypeAtLocation(object), SUPPORTED_GLOBAL_TYPES) &&
                (0, util_1.isSymbolFromDefaultLibrary)(services.program, services.getTypeAtLocation(property).getSymbol()));
        }
        return {
            MemberExpression(node) {
                if (isSafeUse(node) || isNativelyBound(node.object, node.property)) {
                    return;
                }
                const propertyNames = getAccessedPropertyNames(node);
                if (propertyNames.length === 0) {
                    return;
                }
                const objectType = services.getTypeAtLocation(node.object);
                for (const propertyName of propertyNames) {
                    if (checkUnionConstituentsAndReport(node, propertyName, objectType)) {
                        break;
                    }
                }
            },
            ObjectPattern(node) {
                if (isNodeInsideTypeDeclaration(node)) {
                    return;
                }
                let initNode = null;
                if (node.parent.type === utils_1.AST_NODE_TYPES.VariableDeclarator) {
                    initNode = node.parent.init;
                }
                else if (node.parent.type === utils_1.AST_NODE_TYPES.AssignmentPattern ||
                    node.parent.type === utils_1.AST_NODE_TYPES.AssignmentExpression) {
                    initNode = node.parent.right;
                }
                for (const property of node.properties) {
                    if (property.type !== utils_1.AST_NODE_TYPES.Property ||
                        property.key.type !== utils_1.AST_NODE_TYPES.Identifier) {
                        continue;
                    }
                    if (initNode) {
                        if (!isNativelyBound(initNode, property.key)) {
                            const reported = checkIfMethodAndReport(property.key, services
                                .getTypeAtLocation(initNode)
                                .getProperty(property.key.name));
                            if (reported) {
                                continue;
                            }
                            // In assignment patterns, we should also check the type of
                            // Foo's nativelyBound method because initNode might be used as
                            // default value:
                            //   function ({ nativelyBound }: Foo = NativeObject) {}
                        }
                        else if (node.parent.type !== utils_1.AST_NODE_TYPES.AssignmentPattern) {
                            continue;
                        }
                    }
                    checkUnionConstituentsAndReport(property.key, property.key.name, services.getTypeAtLocation(node));
                }
            },
        };
    },
});
function isNodeInsideTypeDeclaration(node) {
    let parent = node;
    while ((parent = parent.parent)) {
        if ((parent.type === utils_1.AST_NODE_TYPES.ClassDeclaration && parent.declare) ||
            parent.type === utils_1.AST_NODE_TYPES.TSAbstractMethodDefinition ||
            parent.type === utils_1.AST_NODE_TYPES.TSDeclareFunction ||
            parent.type === utils_1.AST_NODE_TYPES.TSFunctionType ||
            parent.type === utils_1.AST_NODE_TYPES.TSInterfaceDeclaration ||
            parent.type === utils_1.AST_NODE_TYPES.TSTypeAliasDeclaration ||
            (parent.type === utils_1.AST_NODE_TYPES.VariableDeclaration && parent.declare)) {
            return true;
        }
    }
    return false;
}
function checkIfMethod(symbol, ignoreStatic) {
    const { valueDeclaration } = symbol;
    if (!valueDeclaration) {
        // working around https://github.com/microsoft/TypeScript/issues/31294
        return { dangerous: false };
    }
    switch (valueDeclaration.kind) {
        case ts.SyntaxKind.PropertyDeclaration:
            return {
                dangerous: valueDeclaration.initializer?.kind ===
                    ts.SyntaxKind.FunctionExpression,
            };
        case ts.SyntaxKind.PropertyAssignment: {
            const assignee = valueDeclaration.initializer;
            if (assignee.kind !== ts.SyntaxKind.FunctionExpression) {
                return {
                    dangerous: false,
                };
            }
            return checkMethod(assignee, ignoreStatic);
        }
        case ts.SyntaxKind.MethodDeclaration:
        case ts.SyntaxKind.MethodSignature: {
            return checkMethod(valueDeclaration, ignoreStatic);
        }
    }
    return { dangerous: false };
}
function checkMethod(valueDeclaration, ignoreStatic) {
    const firstParam = valueDeclaration.parameters.at(0);
    const firstParamIsThis = firstParam?.name.kind === ts.SyntaxKind.Identifier &&
        // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
        firstParam.name.escapedText === 'this';
    const thisArgIsVoid = firstParamIsThis && firstParam.type?.kind === ts.SyntaxKind.VoidKeyword;
    return {
        dangerous: !thisArgIsVoid &&
            !(ignoreStatic &&
                tsutils.includesModifier((0, util_1.getModifiers)(valueDeclaration), ts.SyntaxKind.StaticKeyword)),
        firstParamIsThis,
    };
}
function isSafeUse(node) {
    const parent = node.parent;
    switch (parent?.type) {
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
            return ['!', 'delete', 'typeof', 'void'].includes(parent.operator);
        case utils_1.AST_NODE_TYPES.BinaryExpression:
            return ['!=', '!==', '==', '===', 'instanceof'].includes(parent.operator);
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