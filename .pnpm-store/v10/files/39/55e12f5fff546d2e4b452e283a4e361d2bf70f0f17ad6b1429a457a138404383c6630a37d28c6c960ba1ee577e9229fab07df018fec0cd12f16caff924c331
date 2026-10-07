"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'consistent-type-imports',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce consistent usage of type imports',
        },
        fixable: 'code',
        messages: {
            avoidImportType: 'Use an `import` instead of an `import type`.',
            noImportTypeAnnotations: '`import()` type annotations are forbidden.',
            someImportsAreOnlyTypes: 'Imports {{typeImports}} are only used as type.',
            typeOverValue: 'All imports in the declaration are only used as types. Use `import type`.',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    disallowTypeAnnotations: {
                        type: 'boolean',
                        description: 'Whether to disallow type imports in type annotations (`import()`).',
                    },
                    fixStyle: {
                        type: 'string',
                        description: 'The expected type modifier to be added when an import is detected as used only in the type position.',
                        enum: ['separate-type-imports', 'inline-type-imports'],
                    },
                    prefer: {
                        type: 'string',
                        description: 'The expected import kind for type-only imports.',
                        enum: ['type-imports', 'no-type-imports'],
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            disallowTypeAnnotations: true,
            fixStyle: 'separate-type-imports',
            prefer: 'type-imports',
        },
    ],
    create(context, [option]) {
        const prefer = option.prefer ?? 'type-imports';
        const disallowTypeAnnotations = option.disallowTypeAnnotations !== false;
        const selectors = {};
        if (disallowTypeAnnotations) {
            selectors.TSImportType = (node) => {
                context.report({
                    node,
                    messageId: 'noImportTypeAnnotations',
                });
            };
        }
        if (prefer === 'no-type-imports') {
            return {
                ...selectors,
                'ImportDeclaration[importKind = "type"]'(node) {
                    context.report({
                        node,
                        messageId: 'avoidImportType',
                        fix(fixer) {
                            return fixRemoveTypeSpecifierFromImportDeclaration(fixer, node);
                        },
                    });
                },
                'ImportSpecifier[importKind = "type"]'(node) {
                    context.report({
                        node,
                        messageId: 'avoidImportType',
                        fix(fixer) {
                            return fixRemoveTypeSpecifierFromImportSpecifier(fixer, node);
                        },
                    });
                },
            };
        }
        // prefer type imports
        const fixStyle = option.fixStyle ?? 'separate-type-imports';
        let hasDecoratorMetadata = false;
        const sourceImportsMap = {};
        const emitDecoratorMetadata = (0, util_1.getParserServices)(context, true).emitDecoratorMetadata ?? false;
        const experimentalDecorators = (0, util_1.getParserServices)(context, true).experimentalDecorators ?? false;
        if (experimentalDecorators && emitDecoratorMetadata) {
            selectors.Decorator = () => {
                hasDecoratorMetadata = true;
            };
        }
        return {
            ...selectors,
            ImportDeclaration(node) {
                const source = node.source.value;
                // sourceImports is the object containing all the specifics for a particular import source, type or value
                sourceImportsMap[source] ??= {
                    reportValueImports: [], // if there is a mismatch where type importKind but value specifiers
                    source,
                    typeOnlyNamedImport: null, // if only type imports
                    valueImport: null, // if only value imports
                    valueOnlyNamedImport: null, // if only value imports with named specifiers
                };
                const sourceImports = sourceImportsMap[source];
                if (node.importKind === 'type') {
                    if (!sourceImports.typeOnlyNamedImport &&
                        node.specifiers.every(specifier => specifier.type === utils_1.AST_NODE_TYPES.ImportSpecifier)) {
                        // definitely import type { TypeX }
                        sourceImports.typeOnlyNamedImport = node;
                    }
                }
                else if (!sourceImports.valueOnlyNamedImport &&
                    node.specifiers.length &&
                    node.specifiers.every(specifier => specifier.type === utils_1.AST_NODE_TYPES.ImportSpecifier)) {
                    sourceImports.valueOnlyNamedImport = node;
                    sourceImports.valueImport = node;
                }
                else if (!sourceImports.valueImport &&
                    node.specifiers.some(specifier => specifier.type === utils_1.AST_NODE_TYPES.ImportDefaultSpecifier)) {
                    sourceImports.valueImport = node;
                }
                const typeSpecifiers = [];
                const inlineTypeSpecifiers = [];
                const valueSpecifiers = [];
                const unusedSpecifiers = [];
                for (const specifier of node.specifiers) {
                    if (specifier.type === utils_1.AST_NODE_TYPES.ImportSpecifier &&
                        specifier.importKind === 'type') {
                        inlineTypeSpecifiers.push(specifier);
                        continue;
                    }
                    const [variable] = context.sourceCode.getDeclaredVariables(specifier);
                    if (variable.references.length === 0) {
                        unusedSpecifiers.push(specifier);
                    }
                    else {
                        const onlyHasTypeReferences = variable.references.every(ref => {
                            /**
                             * keep origin import kind when export
                             * export { Type }
                             * export default Type;
                             * export = Type;
                             */
                            if ((ref.identifier.parent.type ===
                                utils_1.AST_NODE_TYPES.ExportSpecifier ||
                                ref.identifier.parent.type ===
                                    utils_1.AST_NODE_TYPES.ExportDefaultDeclaration ||
                                ref.identifier.parent.type ===
                                    utils_1.AST_NODE_TYPES.TSExportAssignment) &&
                                ref.isValueReference &&
                                ref.isTypeReference) {
                                return node.importKind === 'type';
                            }
                            if (ref.isValueReference) {
                                let parent = ref.identifier.parent;
                                let child = ref.identifier;
                                while (parent) {
                                    switch (parent.type) {
                                        // CASE 1:
                                        // `type T = typeof foo` will create a value reference because "foo" must be a value type
                                        // however this value reference is safe to use with type-only imports
                                        case utils_1.AST_NODE_TYPES.TSTypeQuery:
                                            return true;
                                        case utils_1.AST_NODE_TYPES.TSQualifiedName:
                                            // TSTypeQuery must have a TSESTree.EntityName as its child, so we can filter here and break early
                                            if (parent.left !== child) {
                                                return false;
                                            }
                                            child = parent;
                                            parent = parent.parent;
                                            continue;
                                        // END CASE 1
                                        //////////////
                                        // CASE 2:
                                        // `type T = { [foo]: string }` will create a value reference because "foo" must be a value type
                                        // however this value reference is safe to use with type-only imports.
                                        // Also this is represented as a non-type AST - hence it uses MemberExpression
                                        case utils_1.AST_NODE_TYPES.TSPropertySignature:
                                            return parent.key === child;
                                        case utils_1.AST_NODE_TYPES.MemberExpression:
                                            if (parent.object !== child) {
                                                return false;
                                            }
                                            child = parent;
                                            parent = parent.parent;
                                            continue;
                                        // END CASE 2
                                        default:
                                            return false;
                                    }
                                }
                            }
                            return ref.isTypeReference;
                        });
                        if (onlyHasTypeReferences) {
                            typeSpecifiers.push(specifier);
                        }
                        else {
                            valueSpecifiers.push(specifier);
                        }
                    }
                }
                if (node.importKind === 'value' && typeSpecifiers.length) {
                    sourceImports.reportValueImports.push({
                        node,
                        inlineTypeSpecifiers,
                        typeSpecifiers,
                        unusedSpecifiers,
                        valueSpecifiers,
                    });
                }
            },
            'Program:exit'() {
                if (hasDecoratorMetadata) {
                    // Experimental decorator metadata is bowl of poop that cannot be
                    // supported based on pure syntactic analysis.
                    //
                    // So we can do one of two things:
                    // 1) add type-information to the rule in a breaking change and
                    //    prevent users from using it so that we can fully support this
                    //    case.
                    // 2) make the rule ignore all imports that are used in a file that
                    //    might have decorator metadata.
                    //
                    // (1) is has huge impact and prevents the rule from being used by 99%
                    // of users Frankly - it's a straight-up bad option. So instead we
                    // choose with option (2) and just avoid reporting on any imports in a
                    // file with both emitDecoratorMetadata AND decorators
                    //
                    // For more context see the discussion in this issue and its linked
                    // issues:
                    // https://github.com/typescript-eslint/typescript-eslint/issues/5468
                    //
                    //
                    // NOTE - in TS 5.0 `experimentalDecorators` became the legacy option,
                    // replaced with un-flagged, stable decorators and thus the type-aware
                    // emitDecoratorMetadata implementation also became legacy. in TS 5.2
                    // support for the new, stable decorator metadata proposal was added -
                    // however this proposal does not include type information
                    //
                    //
                    // PHEW. So TL;DR what does all this mean?
                    // - if you use experimentalDecorators:true,
                    //   emitDecoratorMetadata:true, and have a decorator in the file -
                    //   the rule will do nothing in the file out of an abundance of
                    //   caution.
                    // - else the rule will work as normal.
                    return;
                }
                for (const sourceImports of Object.values(sourceImportsMap)) {
                    if (sourceImports.reportValueImports.length === 0) {
                        // nothing to fix. value specifiers and type specifiers are correctly written
                        continue;
                    }
                    for (const report of sourceImports.reportValueImports) {
                        if (report.valueSpecifiers.length === 0 &&
                            report.unusedSpecifiers.length === 0 &&
                            report.node.importKind !== 'type') {
                            /**
                             * checks if import has type assertions
                             * @example
                             * ```ts
                             * import * as type from 'mod' assert \{ type: 'json' \};
                             * ```
                             * https://github.com/typescript-eslint/typescript-eslint/issues/7527
                             */
                            if (report.node.attributes.length === 0) {
                                context.report({
                                    node: report.node,
                                    messageId: 'typeOverValue',
                                    *fix(fixer) {
                                        yield* fixToTypeImportDeclaration(fixer, report, sourceImports);
                                    },
                                });
                            }
                        }
                        else {
                            // we have a mixed type/value import or just value imports, so we need to split them out into multiple imports if separate-type-imports is configured
                            const importNames = report.typeSpecifiers.map(specifier => `"${specifier.local.name}"`);
                            const message = (() => {
                                const typeImports = (0, util_1.formatWordList)(importNames);
                                if (importNames.length === 1) {
                                    return {
                                        messageId: 'someImportsAreOnlyTypes',
                                        data: {
                                            typeImports,
                                        },
                                    };
                                }
                                return {
                                    messageId: 'someImportsAreOnlyTypes',
                                    data: {
                                        typeImports,
                                    },
                                };
                            })();
                            context.report({
                                node: report.node,
                                ...message,
                                *fix(fixer) {
                                    // take all the typeSpecifiers and put them on a new line
                                    yield* fixToTypeImportDeclaration(fixer, report, sourceImports);
                                },
                            });
                        }
                    }
                }
            },
        };
        function classifySpecifier(node) {
            const defaultSpecifier = node.specifiers[0].type === utils_1.AST_NODE_TYPES.ImportDefaultSpecifier
                ? node.specifiers[0]
                : null;
            const namespaceSpecifier = node.specifiers.find((specifier) => specifier.type === utils_1.AST_NODE_TYPES.ImportNamespaceSpecifier) ?? null;
            const namedSpecifiers = node.specifiers.filter((specifier) => specifier.type === utils_1.AST_NODE_TYPES.ImportSpecifier);
            return {
                defaultSpecifier,
                namedSpecifiers,
                namespaceSpecifier,
            };
        }
        /**
         * Returns information for fixing named specifiers, type or value
         */
        function getFixesNamedSpecifiers(fixer, node, subsetNamedSpecifiers, allNamedSpecifiers) {
            if (allNamedSpecifiers.length === 0) {
                return {
                    removeTypeNamedSpecifiers: [],
                    typeNamedSpecifiersText: '',
                };
            }
            const typeNamedSpecifiersTexts = [];
            const removeTypeNamedSpecifiers = [];
            if (subsetNamedSpecifiers.length === allNamedSpecifiers.length) {
                // import Foo, {Type1, Type2} from 'foo'
                // import DefType, {Type1, Type2} from 'foo'
                const openingBraceToken = (0, util_1.nullThrows)(context.sourceCode.getTokenBefore(subsetNamedSpecifiers[0], util_1.isOpeningBraceToken), util_1.NullThrowsReasons.MissingToken('{', node.type));
                const commaToken = (0, util_1.nullThrows)(context.sourceCode.getTokenBefore(openingBraceToken, util_1.isCommaToken), util_1.NullThrowsReasons.MissingToken(',', node.type));
                const closingBraceToken = (0, util_1.nullThrows)(context.sourceCode.getFirstTokenBetween(openingBraceToken, node.source, util_1.isClosingBraceToken), util_1.NullThrowsReasons.MissingToken('}', node.type));
                // import DefType, {...} from 'foo'
                //               ^^^^^^^ remove
                removeTypeNamedSpecifiers.push(fixer.removeRange([commaToken.range[0], closingBraceToken.range[1]]));
                typeNamedSpecifiersTexts.push(context.sourceCode.text.slice(openingBraceToken.range[1], closingBraceToken.range[0]));
            }
            else {
                const namedSpecifierGroups = [];
                let group = [];
                for (const namedSpecifier of allNamedSpecifiers) {
                    if (subsetNamedSpecifiers.includes(namedSpecifier)) {
                        group.push(namedSpecifier);
                    }
                    else if (group.length) {
                        namedSpecifierGroups.push(group);
                        group = [];
                    }
                }
                if (group.length) {
                    namedSpecifierGroups.push(group);
                }
                for (const namedSpecifiers of namedSpecifierGroups) {
                    const { removeRange, textRange } = getNamedSpecifierRanges(namedSpecifiers, allNamedSpecifiers);
                    removeTypeNamedSpecifiers.push(fixer.removeRange(removeRange));
                    typeNamedSpecifiersTexts.push(context.sourceCode.text.slice(...textRange));
                }
            }
            return {
                removeTypeNamedSpecifiers,
                typeNamedSpecifiersText: typeNamedSpecifiersTexts.join(','),
            };
        }
        /**
         * Returns ranges for fixing named specifier.
         */
        function getNamedSpecifierRanges(namedSpecifierGroup, allNamedSpecifiers) {
            const first = namedSpecifierGroup[0];
            const last = namedSpecifierGroup[namedSpecifierGroup.length - 1];
            const removeRange = [first.range[0], last.range[1]];
            const textRange = [...removeRange];
            const before = (0, util_1.nullThrows)(context.sourceCode.getTokenBefore(first), util_1.NullThrowsReasons.MissingToken('token', 'first specifier'));
            textRange[0] = before.range[1];
            if ((0, util_1.isCommaToken)(before)) {
                removeRange[0] = before.range[0];
            }
            else {
                removeRange[0] = before.range[1];
            }
            const isFirst = allNamedSpecifiers[0] === first;
            const isLast = allNamedSpecifiers[allNamedSpecifiers.length - 1] === last;
            const after = (0, util_1.nullThrows)(context.sourceCode.getTokenAfter(last), util_1.NullThrowsReasons.MissingToken('token', 'last specifier'));
            textRange[1] = after.range[0];
            if ((isFirst || isLast) && (0, util_1.isCommaToken)(after)) {
                removeRange[1] = after.range[1];
            }
            return {
                removeRange,
                textRange,
            };
        }
        /**
         * insert specifiers to named import node.
         * e.g.
         * import type { Already, Type1, Type2 } from 'foo'
         *                        ^^^^^^^^^^^^^ insert
         */
        function fixInsertNamedSpecifiersInNamedSpecifierList(fixer, target, insertText) {
            const closingBraceToken = (0, util_1.nullThrows)(context.sourceCode.getFirstTokenBetween((0, util_1.nullThrows)(context.sourceCode.getFirstToken(target), util_1.NullThrowsReasons.MissingToken('token before', 'import')), target.source, util_1.isClosingBraceToken), util_1.NullThrowsReasons.MissingToken('}', target.type));
            const before = (0, util_1.nullThrows)(context.sourceCode.getTokenBefore(closingBraceToken), util_1.NullThrowsReasons.MissingToken('token before', 'closing brace'));
            if (!(0, util_1.isCommaToken)(before) && !(0, util_1.isOpeningBraceToken)(before)) {
                insertText = `,${insertText}`;
            }
            return fixer.insertTextBefore(closingBraceToken, insertText);
        }
        /**
         * insert type keyword to named import node.
         * e.g.
         * import ADefault, { Already, type Type1, type Type2 } from 'foo'
         *                             ^^^^ insert
         */
        function* fixInsertTypeKeywordInNamedSpecifierList(fixer, typeSpecifiers) {
            for (const spec of typeSpecifiers) {
                const insertText = context.sourceCode.text.slice(...spec.range);
                yield fixer.replaceTextRange(spec.range, `type ${insertText}`);
            }
        }
        function* fixInlineTypeImportDeclaration(fixer, report, sourceImports) {
            const { node } = report;
            // For a value import, will only add an inline type to named specifiers
            const { namedSpecifiers } = classifySpecifier(node);
            const typeNamedSpecifiers = namedSpecifiers.filter(specifier => report.typeSpecifiers.includes(specifier));
            if (sourceImports.valueImport) {
                // add import named type specifiers to its value import
                // import ValueA, { type A }
                //                  ^^^^ insert
                const { namedSpecifiers: valueImportNamedSpecifiers } = classifySpecifier(sourceImports.valueImport);
                if (sourceImports.valueOnlyNamedImport ||
                    valueImportNamedSpecifiers.length) {
                    yield* fixInsertTypeKeywordInNamedSpecifierList(fixer, typeNamedSpecifiers);
                }
            }
        }
        function* fixToTypeImportDeclaration(fixer, report, sourceImports) {
            const { node } = report;
            const { defaultSpecifier, namedSpecifiers, namespaceSpecifier } = classifySpecifier(node);
            if (namespaceSpecifier && !defaultSpecifier) {
                // import * as types from 'foo'
                // checks for presence of import assertions
                if (node.attributes.length === 0) {
                    yield* fixInsertTypeSpecifierForImportDeclaration(fixer, node, false);
                }
                return;
            }
            if (defaultSpecifier) {
                if (report.typeSpecifiers.includes(defaultSpecifier) &&
                    namedSpecifiers.length === 0 &&
                    !namespaceSpecifier) {
                    // import Type from 'foo'
                    yield* fixInsertTypeSpecifierForImportDeclaration(fixer, node, true);
                    return;
                }
                if (fixStyle === 'inline-type-imports' &&
                    !report.typeSpecifiers.includes(defaultSpecifier) &&
                    namedSpecifiers.length > 0 &&
                    !namespaceSpecifier) {
                    // if there is a default specifier but it isn't a type specifier, then just add the inline type modifier to the named specifiers
                    // import AValue, {BValue, Type1, Type2} from 'foo'
                    yield* fixInlineTypeImportDeclaration(fixer, report, sourceImports);
                    return;
                }
            }
            else if (!namespaceSpecifier) {
                if (fixStyle === 'inline-type-imports' &&
                    namedSpecifiers.some(specifier => report.typeSpecifiers.includes(specifier))) {
                    // import {AValue, Type1, Type2} from 'foo'
                    yield* fixInlineTypeImportDeclaration(fixer, report, sourceImports);
                    return;
                }
                if (namedSpecifiers.every(specifier => report.typeSpecifiers.includes(specifier))) {
                    // import {Type1, Type2} from 'foo'
                    yield* fixInsertTypeSpecifierForImportDeclaration(fixer, node, false);
                    return;
                }
            }
            const typeNamedSpecifiers = namedSpecifiers.filter(specifier => report.typeSpecifiers.includes(specifier));
            const fixesNamedSpecifiers = getFixesNamedSpecifiers(fixer, node, typeNamedSpecifiers, namedSpecifiers);
            const afterFixes = [];
            if (typeNamedSpecifiers.length) {
                if (sourceImports.typeOnlyNamedImport) {
                    const insertTypeNamedSpecifiers = fixInsertNamedSpecifiersInNamedSpecifierList(fixer, sourceImports.typeOnlyNamedImport, fixesNamedSpecifiers.typeNamedSpecifiersText);
                    if (sourceImports.typeOnlyNamedImport.range[1] <= node.range[0]) {
                        yield insertTypeNamedSpecifiers;
                    }
                    else {
                        afterFixes.push(insertTypeNamedSpecifiers);
                    }
                }
                else {
                    // The import is both default and named.  Insert named on new line because can't mix default type import and named type imports
                    // eslint-disable-next-line no-lonely-if
                    if (fixStyle === 'inline-type-imports') {
                        yield fixer.insertTextBefore(node, `import {${typeNamedSpecifiers
                            .map(spec => {
                            const insertText = context.sourceCode.text.slice(...spec.range);
                            return `type ${insertText}`;
                        })
                            .join(', ')}} from ${context.sourceCode.getText(node.source)};\n`);
                    }
                    else {
                        yield fixer.insertTextBefore(node, `import type {${fixesNamedSpecifiers.typeNamedSpecifiersText}} from ${context.sourceCode.getText(node.source)};\n`);
                    }
                }
            }
            const fixesRemoveTypeNamespaceSpecifier = [];
            if (namespaceSpecifier &&
                report.typeSpecifiers.includes(namespaceSpecifier)) {
                // import Foo, * as Type from 'foo'
                // import DefType, * as Type from 'foo'
                // import DefType, * as Type from 'foo'
                const commaToken = (0, util_1.nullThrows)(context.sourceCode.getTokenBefore(namespaceSpecifier, util_1.isCommaToken), util_1.NullThrowsReasons.MissingToken(',', node.type));
                // import Def, * as Ns from 'foo'
                //           ^^^^^^^^^ remove
                fixesRemoveTypeNamespaceSpecifier.push(fixer.removeRange([commaToken.range[0], namespaceSpecifier.range[1]]));
                // import type * as Ns from 'foo'
                // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ insert
                yield fixer.insertTextBefore(node, `import type ${context.sourceCode.getText(namespaceSpecifier)} from ${context.sourceCode.getText(node.source)};\n`);
            }
            if (defaultSpecifier &&
                report.typeSpecifiers.includes(defaultSpecifier)) {
                if (report.typeSpecifiers.length === node.specifiers.length) {
                    const importToken = (0, util_1.nullThrows)(context.sourceCode.getFirstToken(node, util_1.isImportKeyword), util_1.NullThrowsReasons.MissingToken('import', node.type));
                    // import type Type from 'foo'
                    //        ^^^^ insert
                    yield fixer.insertTextAfter(importToken, ' type');
                }
                else {
                    const commaToken = (0, util_1.nullThrows)(context.sourceCode.getTokenAfter(defaultSpecifier, util_1.isCommaToken), util_1.NullThrowsReasons.MissingToken(',', defaultSpecifier.type));
                    // import Type , {...} from 'foo'
                    //        ^^^^^ pick
                    const defaultText = context.sourceCode.text
                        .slice(defaultSpecifier.range[0], commaToken.range[0])
                        .trim();
                    yield fixer.insertTextBefore(node, `import type ${defaultText} from ${context.sourceCode.getText(node.source)};\n`);
                    const afterToken = (0, util_1.nullThrows)(context.sourceCode.getTokenAfter(commaToken, {
                        includeComments: true,
                    }), util_1.NullThrowsReasons.MissingToken('any token', node.type));
                    // import Type , {...} from 'foo'
                    //        ^^^^^^^ remove
                    yield fixer.removeRange([
                        defaultSpecifier.range[0],
                        afterToken.range[0],
                    ]);
                }
            }
            yield* fixesNamedSpecifiers.removeTypeNamedSpecifiers;
            yield* fixesRemoveTypeNamespaceSpecifier;
            yield* afterFixes;
        }
        function* fixInsertTypeSpecifierForImportDeclaration(fixer, node, isDefaultImport) {
            // import type Foo from 'foo'
            //       ^^^^^ insert
            const importToken = (0, util_1.nullThrows)(context.sourceCode.getFirstToken(node, util_1.isImportKeyword), util_1.NullThrowsReasons.MissingToken('import', node.type));
            yield fixer.insertTextAfter(importToken, ' type');
            if (isDefaultImport) {
                // Has default import
                const openingBraceToken = context.sourceCode.getFirstTokenBetween(importToken, node.source, util_1.isOpeningBraceToken);
                if (openingBraceToken) {
                    // Only braces. e.g. import Foo, {} from 'foo'
                    const commaToken = (0, util_1.nullThrows)(context.sourceCode.getTokenBefore(openingBraceToken, util_1.isCommaToken), util_1.NullThrowsReasons.MissingToken(',', node.type));
                    const closingBraceToken = (0, util_1.nullThrows)(context.sourceCode.getFirstTokenBetween(openingBraceToken, node.source, util_1.isClosingBraceToken), util_1.NullThrowsReasons.MissingToken('}', node.type));
                    // import type Foo, {} from 'foo'
                    //                  ^^ remove
                    yield fixer.removeRange([
                        commaToken.range[0],
                        closingBraceToken.range[1],
                    ]);
                    const specifiersText = context.sourceCode.text.slice(commaToken.range[1], closingBraceToken.range[1]);
                    if (node.specifiers.length > 1) {
                        yield fixer.insertTextAfter(node, `\nimport type${specifiersText} from ${context.sourceCode.getText(node.source)};`);
                    }
                }
            }
            // make sure we don't do anything like `import type {type T} from 'foo';`
            for (const specifier of node.specifiers) {
                if (specifier.type === utils_1.AST_NODE_TYPES.ImportSpecifier &&
                    specifier.importKind === 'type') {
                    yield* fixRemoveTypeSpecifierFromImportSpecifier(fixer, specifier);
                }
            }
        }
        function* fixRemoveTypeSpecifierFromImportDeclaration(fixer, node) {
            // import type Foo from 'foo'
            //        ^^^^ remove
            const importToken = (0, util_1.nullThrows)(context.sourceCode.getFirstToken(node, util_1.isImportKeyword), util_1.NullThrowsReasons.MissingToken('import', node.type));
            const typeToken = (0, util_1.nullThrows)(context.sourceCode.getFirstTokenBetween(importToken, node.specifiers[0]?.local ?? node.source, util_1.isTypeKeyword), util_1.NullThrowsReasons.MissingToken('type', node.type));
            const afterToken = (0, util_1.nullThrows)(context.sourceCode.getTokenAfter(typeToken, { includeComments: true }), util_1.NullThrowsReasons.MissingToken('any token', node.type));
            yield fixer.removeRange([typeToken.range[0], afterToken.range[0]]);
        }
        function* fixRemoveTypeSpecifierFromImportSpecifier(fixer, node) {
            // import { type Foo } from 'foo'
            //          ^^^^ remove
            const typeToken = (0, util_1.nullThrows)(context.sourceCode.getFirstToken(node, util_1.isTypeKeyword), util_1.NullThrowsReasons.MissingToken('type', node.type));
            const afterToken = (0, util_1.nullThrows)(context.sourceCode.getTokenAfter(typeToken, { includeComments: true }), util_1.NullThrowsReasons.MissingToken('any token', node.type));
            yield fixer.removeRange([typeToken.range[0], afterToken.range[0]]);
        }
    },
});
//# sourceMappingURL=consistent-type-imports.js.map