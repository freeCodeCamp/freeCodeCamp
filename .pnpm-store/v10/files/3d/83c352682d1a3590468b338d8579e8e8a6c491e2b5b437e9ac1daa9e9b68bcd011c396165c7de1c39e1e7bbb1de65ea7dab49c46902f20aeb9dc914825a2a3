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
const scope_manager_1 = require("@typescript-eslint/scope-manager");
const utils_1 = require("@typescript-eslint/utils");
const tsutils = __importStar(require("tsutils"));
const ts = __importStar(require("typescript"));
const util = __importStar(require("../util"));
var AllowedType;
(function (AllowedType) {
    AllowedType[AllowedType["Number"] = 0] = "Number";
    AllowedType[AllowedType["String"] = 1] = "String";
    AllowedType[AllowedType["Unknown"] = 2] = "Unknown";
})(AllowedType || (AllowedType = {}));
exports.default = util.createRule({
    name: 'no-mixed-enums',
    meta: {
        docs: {
            description: 'Disallow enums from having both number and string members',
            recommended: 'strict',
            requiresTypeChecking: true,
        },
        messages: {
            mixed: `Mixing number and string enums can be confusing.`,
        },
        schema: [],
        type: 'problem',
    },
    defaultOptions: [],
    create(context) {
        const parserServices = util.getParserServices(context);
        const typeChecker = parserServices.program.getTypeChecker();
        function collectNodeDefinitions(node) {
            var _a, _b, _c, _d, _e;
            const { name } = node.id;
            const found = {
                imports: [],
                previousSibling: undefined,
            };
            let scope = context.getScope();
            for (const definition of (_c = (_b = (_a = scope.upper) === null || _a === void 0 ? void 0 : _a.set.get(name)) === null || _b === void 0 ? void 0 : _b.defs) !== null && _c !== void 0 ? _c : []) {
                if (definition.node.type === utils_1.AST_NODE_TYPES.TSEnumDeclaration &&
                    definition.node.range[0] < node.range[0] &&
                    definition.node.members.length > 0) {
                    found.previousSibling = definition.node;
                    break;
                }
            }
            while (scope) {
                (_e = (_d = scope.set.get(name)) === null || _d === void 0 ? void 0 : _d.defs) === null || _e === void 0 ? void 0 : _e.forEach(definition => {
                    if (definition.type === scope_manager_1.DefinitionType.ImportBinding) {
                        found.imports.push(definition.node);
                    }
                });
                scope = scope.upper;
            }
            return found;
        }
        function getAllowedTypeForNode(node) {
            return tsutils.isTypeFlagSet(typeChecker.getTypeAtLocation(node), ts.TypeFlags.StringLike)
                ? AllowedType.String
                : AllowedType.Number;
        }
        function getTypeFromImported(imported) {
            var _a;
            const type = typeChecker.getTypeAtLocation(parserServices.esTreeNodeToTSNodeMap.get(imported));
            const valueDeclaration = (_a = type.getSymbol()) === null || _a === void 0 ? void 0 : _a.valueDeclaration;
            if (!valueDeclaration ||
                !ts.isEnumDeclaration(valueDeclaration) ||
                valueDeclaration.members.length === 0) {
                return undefined;
            }
            return getAllowedTypeForNode(valueDeclaration.members[0]);
        }
        function getMemberType(member) {
            if (!member.initializer) {
                return AllowedType.Number;
            }
            switch (member.initializer.type) {
                case utils_1.AST_NODE_TYPES.Literal:
                    switch (typeof member.initializer.value) {
                        case 'number':
                            return AllowedType.Number;
                        case 'string':
                            return AllowedType.String;
                        default:
                            return AllowedType.Unknown;
                    }
                case utils_1.AST_NODE_TYPES.TemplateLiteral:
                    return AllowedType.String;
                default:
                    return getAllowedTypeForNode(parserServices.esTreeNodeToTSNodeMap.get(member.initializer));
            }
        }
        function getDesiredTypeForDefinition(node) {
            const { imports, previousSibling } = collectNodeDefinitions(node);
            // Case: Merged ambiently via module augmentation
            // import { MyEnum } from 'other-module';
            // declare module 'other-module' {
            //   enum MyEnum { A }
            // }
            for (const imported of imports) {
                const typeFromImported = getTypeFromImported(imported);
                if (typeFromImported !== undefined) {
                    return typeFromImported;
                }
            }
            // Case: Multiple enum declarations in the same file
            // enum MyEnum { A }
            // enum MyEnum { B }
            if (previousSibling) {
                return getMemberType(previousSibling.members[0]);
            }
            // Case: Namespace declaration merging
            // namespace MyNamespace {
            //   export enum MyEnum { A }
            // }
            // namespace MyNamespace {
            //   export enum MyEnum { B }
            // }
            if (node.parent.type === utils_1.AST_NODE_TYPES.ExportNamedDeclaration &&
                node.parent.parent.type === utils_1.AST_NODE_TYPES.TSModuleBlock) {
                // TODO: We don't need to dip into the TypeScript type checker here!
                // Merged namespaces must all exist in the same file.
                // We could instead compare this file's nodes to find the merges.
                const tsNode = parserServices.esTreeNodeToTSNodeMap.get(node.id);
                const declarations = typeChecker
                    .getSymbolAtLocation(tsNode)
                    .getDeclarations();
                for (const declaration of declarations) {
                    for (const member of declaration.members) {
                        return member.initializer
                            ? tsutils.isTypeFlagSet(typeChecker.getTypeAtLocation(member.initializer), ts.TypeFlags.StringLike)
                                ? AllowedType.String
                                : AllowedType.Number
                            : AllowedType.Number;
                    }
                }
            }
            // Finally, we default to the type of the first enum member
            return getMemberType(node.members[0]);
        }
        return {
            TSEnumDeclaration(node) {
                var _a;
                if (!node.members.length) {
                    return;
                }
                let desiredType = getDesiredTypeForDefinition(node);
                if (desiredType === ts.TypeFlags.Unknown) {
                    return;
                }
                for (const member of node.members) {
                    const currentType = getMemberType(member);
                    if (currentType === AllowedType.Unknown) {
                        return;
                    }
                    if (currentType === AllowedType.Number) {
                        desiredType !== null && desiredType !== void 0 ? desiredType : (desiredType = currentType);
                    }
                    if (currentType !== desiredType &&
                        (currentType !== undefined || desiredType === AllowedType.String)) {
                        context.report({
                            messageId: 'mixed',
                            node: (_a = member.initializer) !== null && _a !== void 0 ? _a : member,
                        });
                        return;
                    }
                }
            },
        };
    },
});
//# sourceMappingURL=no-mixed-enums.js.map