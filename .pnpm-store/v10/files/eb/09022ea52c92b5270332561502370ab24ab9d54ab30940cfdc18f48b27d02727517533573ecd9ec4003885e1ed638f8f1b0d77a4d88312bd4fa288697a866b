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
const typescript_1 = require("typescript");
const util = __importStar(require("../util"));
exports.default = util.createRule({
    name: 'consistent-type-exports',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce consistent usage of type exports',
            recommended: false,
            requiresTypeChecking: true,
        },
        messages: {
            typeOverValue: 'All exports in the declaration are only used as types. Use `export type`.',
            singleExportIsType: 'Type export {{exportNames}} is not a value and should be exported using `export type`.',
            multipleExportsAreTypes: 'Type exports {{exportNames}} are not values and should be exported using `export type`.',
        },
        schema: [
            {
                type: 'object',
                properties: {
                    fixMixedExportsWithInlineTypeSpecifier: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
        fixable: 'code',
    },
    defaultOptions: [
        {
            fixMixedExportsWithInlineTypeSpecifier: false,
        },
    ],
    create(context, [{ fixMixedExportsWithInlineTypeSpecifier }]) {
        const sourceCode = context.getSourceCode();
        const sourceExportsMap = {};
        const parserServices = util.getParserServices(context);
        return {
            ExportNamedDeclaration(node) {
                var _a;
                // Coerce the source into a string for use as a lookup entry.
                const source = (_a = getSourceFromExport(node)) !== null && _a !== void 0 ? _a : 'undefined';
                const sourceExports = (sourceExportsMap[source] || (sourceExportsMap[source] = {
                    source,
                    reportValueExports: [],
                    typeOnlyNamedExport: null,
                    valueOnlyNamedExport: null,
                }));
                // Cache the first encountered exports for the package. We will need to come
                // back to these later when fixing the problems.
                if (node.exportKind === 'type') {
                    if (sourceExports.typeOnlyNamedExport == null) {
                        // The export is a type export
                        sourceExports.typeOnlyNamedExport = node;
                    }
                }
                else if (sourceExports.valueOnlyNamedExport == null) {
                    // The export is a value export
                    sourceExports.valueOnlyNamedExport = node;
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
                        const isTypeBased = isSpecifierTypeBased(parserServices, specifier);
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
                        typeBasedSpecifiers,
                        valueSpecifiers,
                        inlineTypeSpecifiers,
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
                                    yield* fixExportInsertType(fixer, sourceCode, report.node);
                                },
                            });
                            continue;
                        }
                        // We have both type and value violations.
                        const allExportNames = report.typeBasedSpecifiers.map(specifier => `${specifier.local.name}`);
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
                                        yield* fixSeparateNamedExports(fixer, sourceCode, report);
                                    }
                                },
                            });
                        }
                        else {
                            const exportNames = util.formatWordList(allExportNames);
                            context.report({
                                node: report.node,
                                messageId: 'multipleExportsAreTypes',
                                data: { exportNames },
                                *fix(fixer) {
                                    if (fixMixedExportsWithInlineTypeSpecifier) {
                                        yield* fixAddTypeSpecifierToNamedExports(fixer, report);
                                    }
                                    else {
                                        yield* fixSeparateNamedExports(fixer, sourceCode, report);
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
 * Helper for identifying if an export specifier resolves to a
 * JavaScript value or a TypeScript type.
 *
 * @returns True/false if is a type or not, or undefined if the specifier
 * can't be resolved.
 */
function isSpecifierTypeBased(parserServices, specifier) {
    const checker = parserServices.program.getTypeChecker();
    const node = parserServices.esTreeNodeToTSNodeMap.get(specifier.exported);
    const symbol = checker.getSymbolAtLocation(node);
    const aliasedSymbol = checker.getAliasedSymbol(symbol);
    if (!aliasedSymbol || aliasedSymbol.escapedName === 'unknown') {
        return undefined;
    }
    return !(aliasedSymbol.flags & typescript_1.SymbolFlags.Value);
}
/**
 * Inserts "type" into an export.
 *
 * Example:
 *
 * export type { Foo } from 'foo';
 *        ^^^^
 */
function* fixExportInsertType(fixer, sourceCode, node) {
    const exportToken = util.nullThrows(sourceCode.getFirstToken(node), util.NullThrowsReasons.MissingToken('export', node.type));
    yield fixer.insertTextAfter(exportToken, ' type');
    for (const specifier of node.specifiers) {
        if (specifier.exportKind === 'type') {
            const kindToken = util.nullThrows(sourceCode.getFirstToken(specifier), util.NullThrowsReasons.MissingToken('export', specifier.type));
            const firstTokenAfter = util.nullThrows(sourceCode.getTokenAfter(kindToken, {
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
    const { node, typeBasedSpecifiers, inlineTypeSpecifiers, valueSpecifiers } = report;
    const typeSpecifiers = typeBasedSpecifiers.concat(inlineTypeSpecifiers);
    const source = getSourceFromExport(node);
    const specifierNames = typeSpecifiers.map(getSpecifierText).join(', ');
    const exportToken = util.nullThrows(sourceCode.getFirstToken(node), util.NullThrowsReasons.MissingToken('export', node.type));
    // Filter the bad exports from the current line.
    const filteredSpecifierNames = valueSpecifiers
        .map(getSpecifierText)
        .join(', ');
    const openToken = util.nullThrows(sourceCode.getFirstToken(node, util.isOpeningBraceToken), util.NullThrowsReasons.MissingToken('{', node.type));
    const closeToken = util.nullThrows(sourceCode.getLastToken(node, util.isClosingBraceToken), util.NullThrowsReasons.MissingToken('}', node.type));
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
    var _a;
    if (((_a = node.source) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.Literal &&
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
    return `${specifier.local.name}${specifier.exported.name !== specifier.local.name
        ? ` as ${specifier.exported.name}`
        : ''}`;
}
//# sourceMappingURL=consistent-type-exports.js.map