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
exports.default = (0, util_1.createRule)({
    name: 'consistent-type-exports',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce consistent usage of type exports',
            requiresTypeChecking: true,
        },
        fixable: 'code',
        messages: {
            multipleExportsAreTypes: 'Type exports {{exportNames}} are not values and should be exported using `export type`.',
            singleExportIsType: 'Type export {{exportNames}} is not a value and should be exported using `export type`.',
            typeOverValue: 'All exports in the declaration are only used as types. Use `export type`.',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    fixMixedExportsWithInlineTypeSpecifier: {
                        type: 'boolean',
                        description: 'Whether the rule will autofix "mixed" export cases using TS inline type specifiers.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            fixMixedExportsWithInlineTypeSpecifier: false,
        },
    ],
    create(context, [{ fixMixedExportsWithInlineTypeSpecifier }]) {
        const sourceExportsMap = {};
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        /**
         * Helper for identifying if a symbol resolves to a
         * JavaScript value or a TypeScript type.
         *
         * @returns True/false if is a type or not, or undefined if the specifier
         * can't be resolved.
         */
        function isSymbolTypeBased(symbol) {
            if (!symbol || checker.isUnknownSymbol(symbol)) {
                return undefined;
            }
            if (symbol.getDeclarations()?.some(ts.isTypeOnlyImportOrExportDeclaration)) {
                return true;
            }
            if (tsutils.isSymbolFlagSet(symbol, ts.SymbolFlags.Value)) {
                return false;
            }
            return tsutils.isSymbolFlagSet(symbol, ts.SymbolFlags.Alias)
                ? isSymbolTypeBased(checker.getImmediateAliasedSymbol(symbol))
                : true;
        }
        return {
            ExportAllDeclaration(node) {
                if (node.exportKind === 'type') {
                    return;
                }
                const sourceModule = ts.resolveModuleName(node.source.value, context.filename, services.program.getCompilerOptions(), ts.sys);
                if (sourceModule.resolvedModule == null) {
                    return;
                }
                const sourceFile = services.program.getSourceFile(sourceModule.resolvedModule.resolvedFileName);
                if (sourceFile == null) {
                    return;
                }
                const sourceFileSymbol = checker.getSymbolAtLocation(sourceFile);
                if (sourceFileSymbol == null) {
                    return;
                }
                const sourceFileType = checker.getTypeOfSymbol(sourceFileSymbol);
                // Module can explicitly export types or values, and it's not difficult
                // to distinguish one from the other, since we can get the flags of
                // the exported symbols or check if symbol export declaration has
                // the "type" keyword in it.
                //
                // Things get a lot more complicated when we're dealing with
                // export * from './module-with-type-only-exports'
                // export type * from './module-with-type-and-value-exports'
                //
                // TS checker has an internal function getExportsOfModuleWorker that
                // recursively visits all module exports, including "export *". It then
                // puts type-only-star-exported symbols into the typeOnlyExportStarMap
                // property of sourceFile's SymbolLinks. Since symbol links aren't
                // exposed outside the checker, we cannot access it directly.
                //
                // Therefore, to filter out value properties, we use the following hack:
                // checker.getPropertiesOfType returns all exports that were originally
                // values, but checker.getPropertyOfType returns undefined for
                // properties that are mentioned in the typeOnlyExportStarMap.
                const isThereAnyExportedValue = checker
                    .getPropertiesOfType(sourceFileType)
                    .some(propertyTypeSymbol => checker.getPropertyOfType(sourceFileType, propertyTypeSymbol.escapedName.toString()) != null);
                if (isThereAnyExportedValue) {
                    return;
                }
                context.report({
                    node,
                    messageId: 'typeOverValue',
                    fix(fixer) {
                        const asteriskToken = (0, util_1.nullThrows)(context.sourceCode.getFirstToken(node, token => token.type === utils_1.AST_TOKEN_TYPES.Punctuator &&
                            token.value === '*'), util_1.NullThrowsReasons.MissingToken('asterisk', 'export all declaration'));
                        return fixer.insertTextBefore(asteriskToken, 'type ');
                    },
                });
            },
            ExportNamedDeclaration(node) {
                // Coerce the source into a string for use as a lookup entry.
                const source = getSourceFromExport(node) ?? 'undefined';
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                const sourceExports = (sourceExportsMap[source] ||= {
                    reportValueExports: [],
                    source,
                    typeOnlyNamedExport: null,
                    valueOnlyNamedExport: null,
                });
                // Cache the first encountered exports for the package. We will need to come
                // back to these later when fixing the problems.
                if (node.exportKind === 'type') {
                    // The export is a type export
                    sourceExports.typeOnlyNamedExport ??= node;
                }
                else {
                    // The export is a value export
                    sourceExports.valueOnlyNamedExport ??= node;
                }
                // Next for the current export, we will separate type/value specifiers.
                const typeBasedSpecifiers = [];
                const inlineTypeSpecifiers = [];
                const valueSpecifiers = [];
                // Note: it is valid to export values as types. We will avoid reporting errors
                // when this is encountered.
                if (node.exportKind !== 'type') {
                    for (const specifier of node.specifiers) {
                        if (specifier.exportKind === 'type') {
                            inlineTypeSpecifiers.push(specifier);
                            continue;
                        }
                        const isTypeBased = isSymbolTypeBased(services.getSymbolAtLocation(specifier.exported));
                        if (isTypeBased === true) {
                            typeBasedSpecifiers.push(specifier);
                        }
                        else if (isTypeBased === false) {
                            // When isTypeBased is undefined, we should avoid reporting them.
                            valueSpecifiers.push(specifier);
                        }
                    }
                }
                if ((node.exportKind === 'value' && typeBasedSpecifiers.length) ||
                    (node.exportKind === 'type' && valueSpecifiers.length)) {
                    sourceExports.reportValueExports.push({
                        node,
                        inlineTypeSpecifiers,
                        typeBasedSpecifiers,
                        valueSpecifiers,
                    });
                }
            },
            'Program:exit'() {
                for (const sourceExports of Object.values(sourceExportsMap)) {
                    // If this export has no issues, move on.
                    if (sourceExports.reportValueExports.length === 0) {
                        continue;
                    }
                    for (const report of sourceExports.reportValueExports) {
                        if (report.valueSpecifiers.length === 0) {
                            // Export is all type-only with no type specifiers; convert the entire export to `export type`.
                            context.report({
                                node: report.node,
                                messageId: 'typeOverValue',
                                *fix(fixer) {
                                    yield* fixExportInsertType(fixer, context.sourceCode, report.node);
                                },
                            });
                            continue;
                        }
                        // We have both type and value violations.
                        const allExportNames = report.typeBasedSpecifiers.map(specifier => specifier.local.type === utils_1.AST_NODE_TYPES.Identifier
                            ? specifier.local.name
                            : specifier.local.value);
                        if (allExportNames.length === 1) {
                            const exportNames = allExportNames[0];
                            context.report({
                                node: report.node,
                                messageId: 'singleExportIsType',
                                data: { exportNames },
                                *fix(fixer) {
                                    if (fixMixedExportsWithInlineTypeSpecifier) {
                                        yield* fixAddTypeSpecifierToNamedExports(fixer, report);
                                    }
                                    else {
                                        yield* fixSeparateNamedExports(fixer, context.sourceCode, report);
                                    }
                                },
                            });
                        }
                        else {
                            const exportNames = (0, util_1.formatWordList)(allExportNames);
                            context.report({
                                node: report.node,
                                messageId: 'multipleExportsAreTypes',
                                data: { exportNames },
                                *fix(fixer) {
                                    if (fixMixedExportsWithInlineTypeSpecifier) {
                                        yield* fixAddTypeSpecifierToNamedExports(fixer, report);
                                    }
                                    else {
                                        yield* fixSeparateNamedExports(fixer, context.sourceCode, report);
                                    }
                                },
                            });
                        }
                    }
                }
            },
        };
    },
});
/**
 * Inserts "type" into an export.
 *
 * Example:
 *
 * export type { Foo } from 'foo';
 *        ^^^^
 */
function* fixExportInsertType(fixer, sourceCode, node) {
    const exportToken = (0, util_1.nullThrows)(sourceCode.getFirstToken(node), util_1.NullThrowsReasons.MissingToken('export', node.type));
    yield fixer.insertTextAfter(exportToken, ' type');
    for (const specifier of node.specifiers) {
        if (specifier.exportKind === 'type') {
            const kindToken = (0, util_1.nullThrows)(sourceCode.getFirstToken(specifier), util_1.NullThrowsReasons.MissingToken('export', specifier.type));
            const firstTokenAfter = (0, util_1.nullThrows)(sourceCode.getTokenAfter(kindToken, {
                includeComments: true,
            }), 'Missing token following the export kind.');
            yield fixer.removeRange([kindToken.range[0], firstTokenAfter.range[0]]);
        }
    }
}
/**
 * Separates the exports which mismatch the kind of export the given
 * node represents. For example, a type export's named specifiers which
 * represent values will be inserted in a separate `export` statement.
 */
function* fixSeparateNamedExports(fixer, sourceCode, report) {
    const { node, inlineTypeSpecifiers, typeBasedSpecifiers, valueSpecifiers } = report;
    const typeSpecifiers = [...typeBasedSpecifiers, ...inlineTypeSpecifiers];
    const source = getSourceFromExport(node);
    const specifierNames = typeSpecifiers.map(getSpecifierText).join(', ');
    const exportToken = (0, util_1.nullThrows)(sourceCode.getFirstToken(node), util_1.NullThrowsReasons.MissingToken('export', node.type));
    // Filter the bad exports from the current line.
    const filteredSpecifierNames = valueSpecifiers
        .map(getSpecifierText)
        .join(', ');
    const openToken = (0, util_1.nullThrows)(sourceCode.getFirstToken(node, util_1.isOpeningBraceToken), util_1.NullThrowsReasons.MissingToken('{', node.type));
    const closeToken = (0, util_1.nullThrows)(sourceCode.getLastToken(node, util_1.isClosingBraceToken), util_1.NullThrowsReasons.MissingToken('}', node.type));
    // Remove exports from the current line which we're going to re-insert.
    yield fixer.replaceTextRange([openToken.range[1], closeToken.range[0]], ` ${filteredSpecifierNames} `);
    // Insert the bad exports into a new export line above.
    yield fixer.insertTextBefore(exportToken, `export type { ${specifierNames} }${source ? ` from '${source}'` : ''};\n`);
}
function* fixAddTypeSpecifierToNamedExports(fixer, report) {
    if (report.node.exportKind === 'type') {
        return;
    }
    for (const specifier of report.typeBasedSpecifiers) {
        yield fixer.insertTextBefore(specifier, 'type ');
    }
}
/**
 * Returns the source of the export, or undefined if the named export has no source.
 */
function getSourceFromExport(node) {
    if (node.source?.type === utils_1.AST_NODE_TYPES.Literal &&
        typeof node.source.value === 'string') {
        return node.source.value;
    }
    return undefined;
}
/**
 * Returns the specifier text for the export. If it is aliased, we take care to return
 * the proper formatting.
 */
function getSpecifierText(specifier) {
    const exportedName = specifier.exported.type === utils_1.AST_NODE_TYPES.Literal
        ? specifier.exported.raw
        : specifier.exported.name;
    const localName = specifier.local.type === utils_1.AST_NODE_TYPES.Literal
        ? specifier.local.raw
        : specifier.local.name;
    return `${localName}${exportedName !== localName ? ` as ${exportedName}` : ''}`;
}
//# sourceMappingURL=consistent-type-exports.js.map