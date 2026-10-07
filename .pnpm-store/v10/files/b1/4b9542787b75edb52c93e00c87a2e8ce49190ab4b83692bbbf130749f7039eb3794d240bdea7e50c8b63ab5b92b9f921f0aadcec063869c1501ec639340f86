(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./cssCompletion", "../parser/cssNodes", "../cssLanguageTypes", "@vscode/l10n"], factory);
    }
})(function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SCSSCompletion = void 0;
    const cssCompletion_1 = require("./cssCompletion");
    const nodes = require("../parser/cssNodes");
    const cssLanguageTypes_1 = require("../cssLanguageTypes");
    const l10n = require("@vscode/l10n");
    const sassDocumentationName = l10n.t('Sass documentation');
    class SCSSCompletion extends cssCompletion_1.CSSCompletion {
        constructor(lsServiceOptions, cssDataManager) {
            super('$', lsServiceOptions, cssDataManager);
            addReferencesToDocumentation(SCSSCompletion.scssModuleLoaders);
            addReferencesToDocumentation(SCSSCompletion.scssModuleBuiltIns);
        }
        isImportPathParent(type) {
            return type === nodes.NodeType.Forward
                || type === nodes.NodeType.Use
                || super.isImportPathParent(type);
        }
        getCompletionForImportPath(importPathNode, result) {
            const parentType = importPathNode.getParent().type;
            if (parentType === nodes.NodeType.Forward || parentType === nodes.NodeType.Use) {
                for (let p of SCSSCompletion.scssModuleBuiltIns) {
                    const item = {
                        label: p.label,
                        documentation: p.documentation,
                        textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(importPathNode), `'${p.label}'`),
                        kind: cssLanguageTypes_1.CompletionItemKind.Module
                    };
                    result.items.push(item);
                }
            }
            return super.getCompletionForImportPath(importPathNode, result);
        }
        createReplaceFunction() {
            let tabStopCounter = 1;
            return (_match, p1) => {
                return '\\' + p1 + ': ${' + tabStopCounter++ + ':' + (SCSSCompletion.variableDefaults[p1] || '') + '}';
            };
        }
        createFunctionProposals(proposals, existingNode, sortToEnd, result) {
            for (const p of proposals) {
                const insertText = p.func.replace(/\[?(\$\w+)\]?/g, this.createReplaceFunction());
                const label = p.func.substr(0, p.func.indexOf('('));
                const item = {
                    label: label,
                    detail: p.func,
                    documentation: p.desc,
                    textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), insertText),
                    insertTextFormat: cssLanguageTypes_1.InsertTextFormat.Snippet,
                    kind: cssLanguageTypes_1.CompletionItemKind.Function
                };
                if (sortToEnd) {
                    item.sortText = 'z';
                }
                result.items.push(item);
            }
            return result;
        }
        getCompletionsForSelector(ruleSet, isNested, result) {
            this.createFunctionProposals(SCSSCompletion.selectorFuncs, null, true, result);
            return super.getCompletionsForSelector(ruleSet, isNested, result);
        }
        getTermProposals(entry, existingNode, result) {
            let functions = SCSSCompletion.builtInFuncs;
            if (entry) {
                functions = functions.filter(f => !f.type || !entry.restrictions || entry.restrictions.indexOf(f.type) !== -1);
            }
            this.createFunctionProposals(functions, existingNode, true, result);
            return super.getTermProposals(entry, existingNode, result);
        }
        getColorProposals(entry, existingNode, result) {
            this.createFunctionProposals(SCSSCompletion.colorProposals, existingNode, false, result);
            return super.getColorProposals(entry, existingNode, result);
        }
        getCompletionsForDeclarationProperty(declaration, result) {
            this.getCompletionForAtDirectives(result);
            this.getCompletionsForSelector(null, true, result);
            return super.getCompletionsForDeclarationProperty(declaration, result);
        }
        getCompletionsForExtendsReference(_extendsRef, existingNode, result) {
            const symbols = this.getSymbolContext().findSymbolsAtOffset(this.offset, nodes.ReferenceType.Rule);
            for (const symbol of symbols) {
                const suggest = {
                    label: symbol.name,
                    textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), symbol.name),
                    kind: cssLanguageTypes_1.CompletionItemKind.Function,
                };
                result.items.push(suggest);
            }
            return result;
        }
        getCompletionForAtDirectives(result) {
            result.items.push(...SCSSCompletion.scssAtDirectives);
            return result;
        }
        getCompletionForTopLevel(result) {
            this.getCompletionForAtDirectives(result);
            this.getCompletionForModuleLoaders(result);
            super.getCompletionForTopLevel(result);
            return result;
        }
        getCompletionForModuleLoaders(result) {
            result.items.push(...SCSSCompletion.scssModuleLoaders);
            return result;
        }
    }
    exports.SCSSCompletion = SCSSCompletion;
    SCSSCompletion.variableDefaults = {
        '$red': '1',
        '$green': '2',
        '$blue': '3',
        '$alpha': '1.0',
        '$color': '#000000',
        '$weight': '0.5',
        '$hue': '0',
        '$saturation': '0%',
        '$lightness': '0%',
        '$degrees': '0',
        '$amount': '0',
        '$string': '""',
        '$substring': '"s"',
        '$number': '0',
        '$limit': '1'
    };
    SCSSCompletion.colorProposals = [
        { func: 'red($color)', desc: l10n.t('Gets the red component of a color.') },
        { func: 'green($color)', desc: l10n.t('Gets the green component of a color.') },
        { func: 'blue($color)', desc: l10n.t('Gets the blue component of a color.') },
        { func: 'mix($color, $color, [$weight])', desc: l10n.t('Mixes two colors together.') },
        { func: 'hue($color)', desc: l10n.t('Gets the hue component of a color.') },
        { func: 'saturation($color)', desc: l10n.t('Gets the saturation component of a color.') },
        { func: 'lightness($color)', desc: l10n.t('Gets the lightness component of a color.') },
        { func: 'adjust-hue($color, $degrees)', desc: l10n.t('Changes the hue of a color.') },
        { func: 'lighten($color, $amount)', desc: l10n.t('Makes a color lighter.') },
        { func: 'darken($color, $amount)', desc: l10n.t('Makes a color darker.') },
        { func: 'saturate($color, $amount)', desc: l10n.t('Makes a color more saturated.') },
        { func: 'desaturate($color, $amount)', desc: l10n.t('Makes a color less saturated.') },
        { func: 'grayscale($color)', desc: l10n.t('Converts a color to grayscale.') },
        { func: 'complement($color)', desc: l10n.t('Returns the complement of a color.') },
        { func: 'invert($color)', desc: l10n.t('Returns the inverse of a color.') },
        { func: 'alpha($color)', desc: l10n.t('Gets the opacity component of a color.') },
        { func: 'opacity($color)', desc: 'Gets the alpha component (opacity) of a color.' },
        { func: 'rgba($color, $alpha)', desc: l10n.t('Changes the alpha component for a color.') },
        { func: 'opacify($color, $amount)', desc: l10n.t('Makes a color more opaque.') },
        { func: 'fade-in($color, $amount)', desc: l10n.t('Makes a color more opaque.') },
        { func: 'transparentize($color, $amount)', desc: l10n.t('Makes a color more transparent.') },
        { func: 'fade-out($color, $amount)', desc: l10n.t('Makes a color more transparent.') },
        { func: 'adjust-color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha])', desc: l10n.t('Increases or decreases one or more components of a color.') },
        { func: 'scale-color($color, [$red], [$green], [$blue], [$saturation], [$lightness], [$alpha])', desc: l10n.t('Fluidly scales one or more properties of a color.') },
        { func: 'change-color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha])', desc: l10n.t('Changes one or more properties of a color.') },
        { func: 'ie-hex-str($color)', desc: l10n.t('Converts a color into the format understood by IE filters.') }
    ];
    SCSSCompletion.selectorFuncs = [
        { func: 'selector-nest($selectors…)', desc: l10n.t('Nests selector beneath one another like they would be nested in the stylesheet.') },
        { func: 'selector-append($selectors…)', desc: l10n.t('Appends selectors to one another without spaces in between.') },
        { func: 'selector-extend($selector, $extendee, $extender)', desc: l10n.t('Extends $extendee with $extender within $selector.') },
        { func: 'selector-replace($selector, $original, $replacement)', desc: l10n.t('Replaces $original with $replacement within $selector.') },
        { func: 'selector-unify($selector1, $selector2)', desc: l10n.t('Unifies two selectors to produce a selector that matches elements matched by both.') },
        { func: 'is-superselector($super, $sub)', desc: l10n.t('Returns whether $super matches all the elements $sub does, and possibly more.') },
        { func: 'simple-selectors($selector)', desc: l10n.t('Returns the simple selectors that comprise a compound selector.') },
        { func: 'selector-parse($selector)', desc: l10n.t('Parses a selector into the format returned by &.') }
    ];
    SCSSCompletion.builtInFuncs = [
        { func: 'unquote($string)', desc: l10n.t('Removes quotes from a string.') },
        { func: 'quote($string)', desc: l10n.t('Adds quotes to a string.') },
        { func: 'str-length($string)', desc: l10n.t('Returns the number of characters in a string.') },
        { func: 'str-insert($string, $insert, $index)', desc: l10n.t('Inserts $insert into $string at $index.') },
        { func: 'str-index($string, $substring)', desc: l10n.t('Returns the index of the first occurance of $substring in $string.') },
        { func: 'str-slice($string, $start-at, [$end-at])', desc: l10n.t('Extracts a substring from $string.') },
        { func: 'to-upper-case($string)', desc: l10n.t('Converts a string to upper case.') },
        { func: 'to-lower-case($string)', desc: l10n.t('Converts a string to lower case.') },
        { func: 'percentage($number)', desc: l10n.t('Converts a unitless number to a percentage.'), type: 'percentage' },
        { func: 'round($number)', desc: l10n.t('Rounds a number to the nearest whole number.') },
        { func: 'ceil($number)', desc: l10n.t('Rounds a number up to the next whole number.') },
        { func: 'floor($number)', desc: l10n.t('Rounds a number down to the previous whole number.') },
        { func: 'abs($number)', desc: l10n.t('Returns the absolute value of a number.') },
        { func: 'min($numbers)', desc: l10n.t('Finds the minimum of several numbers.') },
        { func: 'max($numbers)', desc: l10n.t('Finds the maximum of several numbers.') },
        { func: 'random([$limit])', desc: l10n.t('Returns a random number.') },
        { func: 'length($list)', desc: l10n.t('Returns the length of a list.') },
        { func: 'nth($list, $n)', desc: l10n.t('Returns a specific item in a list.') },
        { func: 'set-nth($list, $n, $value)', desc: l10n.t('Replaces the nth item in a list.') },
        { func: 'join($list1, $list2, [$separator])', desc: l10n.t('Joins together two lists into one.') },
        { func: 'append($list1, $val, [$separator])', desc: l10n.t('Appends a single value onto the end of a list.') },
        { func: 'zip($lists)', desc: l10n.t('Combines several lists into a single multidimensional list.') },
        { func: 'index($list, $value)', desc: l10n.t('Returns the position of a value within a list.') },
        { func: 'list-separator(#list)', desc: l10n.t('Returns the separator of a list.') },
        { func: 'map-get($map, $key)', desc: l10n.t('Returns the value in a map associated with a given key.') },
        { func: 'map-merge($map1, $map2)', desc: l10n.t('Merges two maps together into a new map.') },
        { func: 'map-remove($map, $keys)', desc: l10n.t('Returns a new map with keys removed.') },
        { func: 'map-keys($map)', desc: l10n.t('Returns a list of all keys in a map.') },
        { func: 'map-values($map)', desc: l10n.t('Returns a list of all values in a map.') },
        { func: 'map-has-key($map, $key)', desc: l10n.t('Returns whether a map has a value associated with a given key.') },
        { func: 'keywords($args)', desc: l10n.t('Returns the keywords passed to a function that takes variable arguments.') },
        { func: 'feature-exists($feature)', desc: l10n.t('Returns whether a feature exists in the current Sass runtime.') },
        { func: 'variable-exists($name)', desc: l10n.t('Returns whether a variable with the given name exists in the current scope.') },
        { func: 'global-variable-exists($name)', desc: l10n.t('Returns whether a variable with the given name exists in the global scope.') },
        { func: 'function-exists($name)', desc: l10n.t('Returns whether a function with the given name exists.') },
        { func: 'mixin-exists($name)', desc: l10n.t('Returns whether a mixin with the given name exists.') },
        { func: 'inspect($value)', desc: l10n.t('Returns the string representation of a value as it would be represented in Sass.') },
        { func: 'type-of($value)', desc: l10n.t('Returns the type of a value.') },
        { func: 'unit($number)', desc: l10n.t('Returns the unit(s) associated with a number.') },
        { func: 'unitless($number)', desc: l10n.t('Returns whether a number has units.') },
        { func: 'comparable($number1, $number2)', desc: l10n.t('Returns whether two numbers can be added, subtracted, or compared.') },
        { func: 'call($name, $args…)', desc: l10n.t('Dynamically calls a Sass function.') }
    ];
    SCSSCompletion.scssAtDirectives = [
        {
            label: "@extend",
            documentation: l10n.t("Inherits the styles of another selector."),
            kind: cssLanguageTypes_1.CompletionItemKind.Keyword
        },
        {
            label: "@at-root",
            documentation: l10n.t("Causes one or more rules to be emitted at the root of the document."),
            kind: cssLanguageTypes_1.CompletionItemKind.Keyword
        },
        {
            label: "@debug",
            documentation: l10n.t("Prints the value of an expression to the standard error output stream. Useful for debugging complicated Sass files."),
            kind: cssLanguageTypes_1.CompletionItemKind.Keyword
        },
        {
            label: "@warn",
            documentation: l10n.t("Prints the value of an expression to the standard error output stream. Useful for libraries that need to warn users of deprecations or recovering from minor mixin usage mistakes. Warnings can be turned off with the `--quiet` command-line option or the `:quiet` Sass option."),
            kind: cssLanguageTypes_1.CompletionItemKind.Keyword
        },
        {
            label: "@error",
            documentation: l10n.t("Throws the value of an expression as a fatal error with stack trace. Useful for validating arguments to mixins and functions."),
            kind: cssLanguageTypes_1.CompletionItemKind.Keyword
        },
        {
            label: "@if",
            documentation: l10n.t("Includes the body if the expression does not evaluate to `false` or `null`."),
            insertText: "@if ${1:expr} {\n\t$0\n}",
            insertTextFormat: cssLanguageTypes_1.InsertTextFormat.Snippet,
            kind: cssLanguageTypes_1.CompletionItemKind.Keyword
        },
        {
            label: "@for",
            documentation: l10n.t("For loop that repeatedly outputs a set of styles for each `$var` in the `from/through` or `from/to` clause."),
            insertText: "@for \\$${1:var} from ${2:start} ${3|to,through|} ${4:end} {\n\t$0\n}",
            insertTextFormat: cssLanguageTypes_1.InsertTextFormat.Snippet,
            kind: cssLanguageTypes_1.CompletionItemKind.Keyword
        },
        {
            label: "@each",
            documentation: l10n.t("Each loop that sets `$var` to each item in the list or map, then outputs the styles it contains using that value of `$var`."),
            insertText: "@each \\$${1:var} in ${2:list} {\n\t$0\n}",
            insertTextFormat: cssLanguageTypes_1.InsertTextFormat.Snippet,
            kind: cssLanguageTypes_1.CompletionItemKind.Keyword
        },
        {
            label: "@while",
            documentation: l10n.t("While loop that takes an expression and repeatedly outputs the nested styles until the statement evaluates to `false`."),
            insertText: "@while ${1:condition} {\n\t$0\n}",
            insertTextFormat: cssLanguageTypes_1.InsertTextFormat.Snippet,
            kind: cssLanguageTypes_1.CompletionItemKind.Keyword
        },
        {
            label: "@mixin",
            documentation: l10n.t("Defines styles that can be re-used throughout the stylesheet with `@include`."),
            insertText: "@mixin ${1:name} {\n\t$0\n}",
            insertTextFormat: cssLanguageTypes_1.InsertTextFormat.Snippet,
            kind: cssLanguageTypes_1.CompletionItemKind.Keyword
        },
        {
            label: "@include",
            documentation: l10n.t("Includes the styles defined by another mixin into the current rule."),
            kind: cssLanguageTypes_1.CompletionItemKind.Keyword
        },
        {
            label: "@function",
            documentation: l10n.t("Defines complex operations that can be re-used throughout stylesheets."),
            kind: cssLanguageTypes_1.CompletionItemKind.Keyword
        }
    ];
    SCSSCompletion.scssModuleLoaders = [
        {
            label: "@use",
            documentation: l10n.t("Loads mixins, functions, and variables from other Sass stylesheets as 'modules', and combines CSS from multiple stylesheets together."),
            references: [{ name: sassDocumentationName, url: 'https://sass-lang.com/documentation/at-rules/use' }],
            insertText: "@use $0;",
            insertTextFormat: cssLanguageTypes_1.InsertTextFormat.Snippet,
            kind: cssLanguageTypes_1.CompletionItemKind.Keyword
        },
        {
            label: "@forward",
            documentation: l10n.t("Loads a Sass stylesheet and makes its mixins, functions, and variables available when this stylesheet is loaded with the @use rule."),
            references: [{ name: sassDocumentationName, url: 'https://sass-lang.com/documentation/at-rules/forward' }],
            insertText: "@forward $0;",
            insertTextFormat: cssLanguageTypes_1.InsertTextFormat.Snippet,
            kind: cssLanguageTypes_1.CompletionItemKind.Keyword
        },
    ];
    SCSSCompletion.scssModuleBuiltIns = [
        {
            label: 'sass:math',
            documentation: l10n.t('Provides functions that operate on numbers.'),
            references: [{ name: sassDocumentationName, url: 'https://sass-lang.com/documentation/modules/math' }]
        },
        {
            label: 'sass:string',
            documentation: l10n.t('Makes it easy to combine, search, or split apart strings.'),
            references: [{ name: sassDocumentationName, url: 'https://sass-lang.com/documentation/modules/string' }]
        },
        {
            label: 'sass:color',
            documentation: l10n.t('Generates new colors based on existing ones, making it easy to build color themes.'),
            references: [{ name: sassDocumentationName, url: 'https://sass-lang.com/documentation/modules/color' }]
        },
        {
            label: 'sass:list',
            documentation: l10n.t('Lets you access and modify values in lists.'),
            references: [{ name: sassDocumentationName, url: 'https://sass-lang.com/documentation/modules/list' }]
        },
        {
            label: 'sass:map',
            documentation: l10n.t('Makes it possible to look up the value associated with a key in a map, and much more.'),
            references: [{ name: sassDocumentationName, url: 'https://sass-lang.com/documentation/modules/map' }]
        },
        {
            label: 'sass:selector',
            documentation: l10n.t('Provides access to Sass’s powerful selector engine.'),
            references: [{ name: sassDocumentationName, url: 'https://sass-lang.com/documentation/modules/selector' }]
        },
        {
            label: 'sass:meta',
            documentation: l10n.t('Exposes the details of Sass’s inner workings.'),
            references: [{ name: sassDocumentationName, url: 'https://sass-lang.com/documentation/modules/meta' }]
        },
    ];
    /**
     * Todo @Pine: Remove this and do it through custom data
     */
    function addReferencesToDocumentation(items) {
        items.forEach(i => {
            if (i.documentation && i.references && i.references.length > 0) {
                const markdownDoc = typeof i.documentation === 'string'
                    ? { kind: 'markdown', value: i.documentation }
                    : { kind: 'markdown', value: i.documentation.value };
                markdownDoc.value += '\n\n';
                markdownDoc.value += i.references
                    .map(r => {
                    return `[${r.name}](${r.url})`;
                })
                    .join(' | ');
                i.documentation = markdownDoc;
            }
        });
    }
});
