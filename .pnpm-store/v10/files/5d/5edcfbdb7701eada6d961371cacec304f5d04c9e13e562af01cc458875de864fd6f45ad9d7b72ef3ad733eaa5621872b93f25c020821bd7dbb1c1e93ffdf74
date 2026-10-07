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
exports.valueMatchesSomeSpecifier = exports.typeMatchesSomeSpecifier = exports.typeOrValueSpecifiersSchema = void 0;
exports.typeMatchesSpecifier = typeMatchesSpecifier;
exports.valueMatchesSpecifier = valueMatchesSpecifier;
const types_1 = require("@typescript-eslint/types");
const tsutils = __importStar(require("ts-api-utils"));
const specifierNameMatches_1 = require("./typeOrValueSpecifiers/specifierNameMatches");
const typeDeclaredInFile_1 = require("./typeOrValueSpecifiers/typeDeclaredInFile");
const typeDeclaredInLib_1 = require("./typeOrValueSpecifiers/typeDeclaredInLib");
const typeDeclaredInPackageDeclarationFile_1 = require("./typeOrValueSpecifiers/typeDeclaredInPackageDeclarationFile");
exports.typeOrValueSpecifiersSchema = {
    items: {
        oneOf: [
            {
                type: 'string',
            },
            {
                additionalProperties: false,
                properties: {
                    from: {
                        enum: ['file'],
                        type: 'string',
                    },
                    name: {
                        oneOf: [
                            {
                                type: 'string',
                            },
                            {
                                items: {
                                    type: 'string',
                                },
                                minItems: 1,
                                type: 'array',
                                uniqueItems: true,
                            },
                        ],
                    },
                    path: {
                        type: 'string',
                    },
                },
                required: ['from', 'name'],
                type: 'object',
            },
            {
                additionalProperties: false,
                properties: {
                    from: {
                        enum: ['lib'],
                        type: 'string',
                    },
                    name: {
                        oneOf: [
                            {
                                type: 'string',
                            },
                            {
                                items: {
                                    type: 'string',
                                },
                                minItems: 1,
                                type: 'array',
                                uniqueItems: true,
                            },
                        ],
                    },
                },
                required: ['from', 'name'],
                type: 'object',
            },
            {
                additionalProperties: false,
                properties: {
                    from: {
                        enum: ['package'],
                        type: 'string',
                    },
                    name: {
                        oneOf: [
                            {
                                type: 'string',
                            },
                            {
                                items: {
                                    type: 'string',
                                },
                                minItems: 1,
                                type: 'array',
                                uniqueItems: true,
                            },
                        ],
                    },
                    package: {
                        type: 'string',
                    },
                },
                required: ['from', 'name', 'package'],
                type: 'object',
            },
        ],
    },
    type: 'array',
};
function typeMatchesSpecifier(type, specifier, program) {
    if (tsutils.isUnionType(type)) {
        return type.types.every(t => typeMatchesSpecifier(t, specifier, program));
    }
    const wholeTypeMatches = (() => {
        if (tsutils.isIntrinsicErrorType(type)) {
            return false;
        }
        if (typeof specifier === 'string') {
            return (0, specifierNameMatches_1.specifierNameMatches)(type, specifier);
        }
        if (!(0, specifierNameMatches_1.specifierNameMatches)(type, specifier.name)) {
            return false;
        }
        const symbol = type.getSymbol() ?? type.aliasSymbol;
        const declarations = symbol?.getDeclarations() ?? [];
        const declarationFiles = declarations.map(declaration => declaration.getSourceFile());
        switch (specifier.from) {
            case 'file':
                return (0, typeDeclaredInFile_1.typeDeclaredInFile)(specifier.path, declarationFiles, program);
            case 'lib':
                return (0, typeDeclaredInLib_1.typeDeclaredInLib)(declarationFiles, program);
            case 'package':
                return (0, typeDeclaredInPackageDeclarationFile_1.typeDeclaredInPackageDeclarationFile)(specifier.package, declarations, declarationFiles, program);
        }
    })();
    if (wholeTypeMatches) {
        return true;
    }
    if (tsutils.isIntersectionType(type) &&
        tsutils
            .intersectionConstituents(type)
            .some(part => typeMatchesSpecifier(part, specifier, program))) {
        return true;
    }
    return false;
}
const typeMatchesSomeSpecifier = (type, specifiers = [], program) => specifiers.some(specifier => typeMatchesSpecifier(type, specifier, program));
exports.typeMatchesSomeSpecifier = typeMatchesSomeSpecifier;
const getSpecifierNames = (specifierName) => {
    return typeof specifierName === 'string' ? [specifierName] : specifierName;
};
const getStaticName = (node) => {
    if (node.type === types_1.AST_NODE_TYPES.Identifier ||
        node.type === types_1.AST_NODE_TYPES.JSXIdentifier ||
        node.type === types_1.AST_NODE_TYPES.PrivateIdentifier) {
        return node.name;
    }
    if (node.type === types_1.AST_NODE_TYPES.Literal && typeof node.value === 'string') {
        return node.value;
    }
    return undefined;
};
function valueMatchesSpecifier(node, specifier, program, type) {
    const staticName = getStaticName(node);
    if (!staticName) {
        return false;
    }
    if (typeof specifier === 'string') {
        return specifier === staticName;
    }
    if (!getSpecifierNames(specifier.name).includes(staticName)) {
        return false;
    }
    if (specifier.from === 'package') {
        const symbol = type.getSymbol() ?? type.aliasSymbol;
        const declarations = symbol?.getDeclarations() ?? [];
        const declarationFiles = declarations.map(declaration => declaration.getSourceFile());
        return (0, typeDeclaredInPackageDeclarationFile_1.typeDeclaredInPackageDeclarationFile)(specifier.package, declarations, declarationFiles, program);
    }
    return true;
}
const valueMatchesSomeSpecifier = (node, specifiers = [], program, type) => specifiers.some(specifier => valueMatchesSpecifier(node, specifier, program, type));
exports.valueMatchesSomeSpecifier = valueMatchesSomeSpecifier;
//# sourceMappingURL=TypeOrValueSpecifier.js.map