import { CSSCompletion } from './cssCompletion.js';
import { NodeType, ReferenceType } from '../parser/cssNodes.js';
import '../cssLanguageTypes.js';
import { t } from '../../../../@vscode/l10n/dist/browser.js';
import { CompletionItemKind, InsertTextFormat, TextEdit } from '../../../../vscode-languageserver-types/lib/esm/main.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const sassDocumentationName = t('Sass documentation');
class SCSSCompletion extends CSSCompletion {
    constructor(lsServiceOptions, cssDataManager) {
        super('$', lsServiceOptions, cssDataManager);
        addReferencesToDocumentation(SCSSCompletion.scssModuleLoaders);
        addReferencesToDocumentation(SCSSCompletion.scssModuleBuiltIns);
    }
    isImportPathParent(type) {
        return type === NodeType.Forward
            || type === NodeType.Use
            || super.isImportPathParent(type);
    }
    getCompletionForImportPath(importPathNode, result) {
        const parentType = importPathNode.getParent().type;
        if (parentType === NodeType.Forward || parentType === NodeType.Use) {
            for (let p of SCSSCompletion.scssModuleBuiltIns) {
                const item = {
                    label: p.label,
                    documentation: p.documentation,
                    textEdit: TextEdit.replace(this.getCompletionRange(importPathNode), `'${p.label}'`),
                    kind: CompletionItemKind.Module
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
                textEdit: TextEdit.replace(this.getCompletionRange(existingNode), insertText),
                insertTextFormat: InsertTextFormat.Snippet,
                kind: CompletionItemKind.Function
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
        const symbols = this.getSymbolContext().findSymbolsAtOffset(this.offset, ReferenceType.Rule);
        for (const symbol of symbols) {
            const suggest = {
                label: symbol.name,
                textEdit: TextEdit.replace(this.getCompletionRange(existingNode), symbol.name),
                kind: CompletionItemKind.Function,
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
    { func: 'red($color)', desc: t('Gets the red component of a color.') },
    { func: 'green($color)', desc: t('Gets the green component of a color.') },
    { func: 'blue($color)', desc: t('Gets the blue component of a color.') },
    { func: 'mix($color, $color, [$weight])', desc: t('Mixes two colors together.') },
    { func: 'hue($color)', desc: t('Gets the hue component of a color.') },
    { func: 'saturation($color)', desc: t('Gets the saturation component of a color.') },
    { func: 'lightness($color)', desc: t('Gets the lightness component of a color.') },
    { func: 'adjust-hue($color, $degrees)', desc: t('Changes the hue of a color.') },
    { func: 'lighten($color, $amount)', desc: t('Makes a color lighter.') },
    { func: 'darken($color, $amount)', desc: t('Makes a color darker.') },
    { func: 'saturate($color, $amount)', desc: t('Makes a color more saturated.') },
    { func: 'desaturate($color, $amount)', desc: t('Makes a color less saturated.') },
    { func: 'grayscale($color)', desc: t('Converts a color to grayscale.') },
    { func: 'complement($color)', desc: t('Returns the complement of a color.') },
    { func: 'invert($color)', desc: t('Returns the inverse of a color.') },
    { func: 'alpha($color)', desc: t('Gets the opacity component of a color.') },
    { func: 'opacity($color)', desc: 'Gets the alpha component (opacity) of a color.' },
    { func: 'rgba($color, $alpha)', desc: t('Changes the alpha component for a color.') },
    { func: 'opacify($color, $amount)', desc: t('Makes a color more opaque.') },
    { func: 'fade-in($color, $amount)', desc: t('Makes a color more opaque.') },
    { func: 'transparentize($color, $amount)', desc: t('Makes a color more transparent.') },
    { func: 'fade-out($color, $amount)', desc: t('Makes a color more transparent.') },
    { func: 'adjust-color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha])', desc: t('Increases or decreases one or more components of a color.') },
    { func: 'scale-color($color, [$red], [$green], [$blue], [$saturation], [$lightness], [$alpha])', desc: t('Fluidly scales one or more properties of a color.') },
    { func: 'change-color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha])', desc: t('Changes one or more properties of a color.') },
    { func: 'ie-hex-str($color)', desc: t('Converts a color into the format understood by IE filters.') }
];
SCSSCompletion.selectorFuncs = [
    { func: 'selector-nest($selectors…)', desc: t('Nests selector beneath one another like they would be nested in the stylesheet.') },
    { func: 'selector-append($selectors…)', desc: t('Appends selectors to one another without spaces in between.') },
    { func: 'selector-extend($selector, $extendee, $extender)', desc: t('Extends $extendee with $extender within $selector.') },
    { func: 'selector-replace($selector, $original, $replacement)', desc: t('Replaces $original with $replacement within $selector.') },
    { func: 'selector-unify($selector1, $selector2)', desc: t('Unifies two selectors to produce a selector that matches elements matched by both.') },
    { func: 'is-superselector($super, $sub)', desc: t('Returns whether $super matches all the elements $sub does, and possibly more.') },
    { func: 'simple-selectors($selector)', desc: t('Returns the simple selectors that comprise a compound selector.') },
    { func: 'selector-parse($selector)', desc: t('Parses a selector into the format returned by &.') }
];
SCSSCompletion.builtInFuncs = [
    { func: 'unquote($string)', desc: t('Removes quotes from a string.') },
    { func: 'quote($string)', desc: t('Adds quotes to a string.') },
    { func: 'str-length($string)', desc: t('Returns the number of characters in a string.') },
    { func: 'str-insert($string, $insert, $index)', desc: t('Inserts $insert into $string at $index.') },
    { func: 'str-index($string, $substring)', desc: t('Returns the index of the first occurance of $substring in $string.') },
    { func: 'str-slice($string, $start-at, [$end-at])', desc: t('Extracts a substring from $string.') },
    { func: 'to-upper-case($string)', desc: t('Converts a string to upper case.') },
    { func: 'to-lower-case($string)', desc: t('Converts a string to lower case.') },
    { func: 'percentage($number)', desc: t('Converts a unitless number to a percentage.'), type: 'percentage' },
    { func: 'round($number)', desc: t('Rounds a number to the nearest whole number.') },
    { func: 'ceil($number)', desc: t('Rounds a number up to the next whole number.') },
    { func: 'floor($number)', desc: t('Rounds a number down to the previous whole number.') },
    { func: 'abs($number)', desc: t('Returns the absolute value of a number.') },
    { func: 'min($numbers)', desc: t('Finds the minimum of several numbers.') },
    { func: 'max($numbers)', desc: t('Finds the maximum of several numbers.') },
    { func: 'random([$limit])', desc: t('Returns a random number.') },
    { func: 'length($list)', desc: t('Returns the length of a list.') },
    { func: 'nth($list, $n)', desc: t('Returns a specific item in a list.') },
    { func: 'set-nth($list, $n, $value)', desc: t('Replaces the nth item in a list.') },
    { func: 'join($list1, $list2, [$separator])', desc: t('Joins together two lists into one.') },
    { func: 'append($list1, $val, [$separator])', desc: t('Appends a single value onto the end of a list.') },
    { func: 'zip($lists)', desc: t('Combines several lists into a single multidimensional list.') },
    { func: 'index($list, $value)', desc: t('Returns the position of a value within a list.') },
    { func: 'list-separator(#list)', desc: t('Returns the separator of a list.') },
    { func: 'map-get($map, $key)', desc: t('Returns the value in a map associated with a given key.') },
    { func: 'map-merge($map1, $map2)', desc: t('Merges two maps together into a new map.') },
    { func: 'map-remove($map, $keys)', desc: t('Returns a new map with keys removed.') },
    { func: 'map-keys($map)', desc: t('Returns a list of all keys in a map.') },
    { func: 'map-values($map)', desc: t('Returns a list of all values in a map.') },
    { func: 'map-has-key($map, $key)', desc: t('Returns whether a map has a value associated with a given key.') },
    { func: 'keywords($args)', desc: t('Returns the keywords passed to a function that takes variable arguments.') },
    { func: 'feature-exists($feature)', desc: t('Returns whether a feature exists in the current Sass runtime.') },
    { func: 'variable-exists($name)', desc: t('Returns whether a variable with the given name exists in the current scope.') },
    { func: 'global-variable-exists($name)', desc: t('Returns whether a variable with the given name exists in the global scope.') },
    { func: 'function-exists($name)', desc: t('Returns whether a function with the given name exists.') },
    { func: 'mixin-exists($name)', desc: t('Returns whether a mixin with the given name exists.') },
    { func: 'inspect($value)', desc: t('Returns the string representation of a value as it would be represented in Sass.') },
    { func: 'type-of($value)', desc: t('Returns the type of a value.') },
    { func: 'unit($number)', desc: t('Returns the unit(s) associated with a number.') },
    { func: 'unitless($number)', desc: t('Returns whether a number has units.') },
    { func: 'comparable($number1, $number2)', desc: t('Returns whether two numbers can be added, subtracted, or compared.') },
    { func: 'call($name, $args…)', desc: t('Dynamically calls a Sass function.') }
];
SCSSCompletion.scssAtDirectives = [
    {
        label: "@extend",
        documentation: t("Inherits the styles of another selector."),
        kind: CompletionItemKind.Keyword
    },
    {
        label: "@at-root",
        documentation: t("Causes one or more rules to be emitted at the root of the document."),
        kind: CompletionItemKind.Keyword
    },
    {
        label: "@debug",
        documentation: t("Prints the value of an expression to the standard error output stream. Useful for debugging complicated Sass files."),
        kind: CompletionItemKind.Keyword
    },
    {
        label: "@warn",
        documentation: t("Prints the value of an expression to the standard error output stream. Useful for libraries that need to warn users of deprecations or recovering from minor mixin usage mistakes. Warnings can be turned off with the `--quiet` command-line option or the `:quiet` Sass option."),
        kind: CompletionItemKind.Keyword
    },
    {
        label: "@error",
        documentation: t("Throws the value of an expression as a fatal error with stack trace. Useful for validating arguments to mixins and functions."),
        kind: CompletionItemKind.Keyword
    },
    {
        label: "@if",
        documentation: t("Includes the body if the expression does not evaluate to `false` or `null`."),
        insertText: "@if ${1:expr} {\n\t$0\n}",
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Keyword
    },
    {
        label: "@for",
        documentation: t("For loop that repeatedly outputs a set of styles for each `$var` in the `from/through` or `from/to` clause."),
        insertText: "@for \\$${1:var} from ${2:start} ${3|to,through|} ${4:end} {\n\t$0\n}",
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Keyword
    },
    {
        label: "@each",
        documentation: t("Each loop that sets `$var` to each item in the list or map, then outputs the styles it contains using that value of `$var`."),
        insertText: "@each \\$${1:var} in ${2:list} {\n\t$0\n}",
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Keyword
    },
    {
        label: "@while",
        documentation: t("While loop that takes an expression and repeatedly outputs the nested styles until the statement evaluates to `false`."),
        insertText: "@while ${1:condition} {\n\t$0\n}",
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Keyword
    },
    {
        label: "@mixin",
        documentation: t("Defines styles that can be re-used throughout the stylesheet with `@include`."),
        insertText: "@mixin ${1:name} {\n\t$0\n}",
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Keyword
    },
    {
        label: "@include",
        documentation: t("Includes the styles defined by another mixin into the current rule."),
        kind: CompletionItemKind.Keyword
    },
    {
        label: "@function",
        documentation: t("Defines complex operations that can be re-used throughout stylesheets."),
        kind: CompletionItemKind.Keyword
    }
];
SCSSCompletion.scssModuleLoaders = [
    {
        label: "@use",
        documentation: t("Loads mixins, functions, and variables from other Sass stylesheets as 'modules', and combines CSS from multiple stylesheets together."),
        references: [{ name: sassDocumentationName, url: 'https://sass-lang.com/documentation/at-rules/use' }],
        insertText: "@use $0;",
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Keyword
    },
    {
        label: "@forward",
        documentation: t("Loads a Sass stylesheet and makes its mixins, functions, and variables available when this stylesheet is loaded with the @use rule."),
        references: [{ name: sassDocumentationName, url: 'https://sass-lang.com/documentation/at-rules/forward' }],
        insertText: "@forward $0;",
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Keyword
    },
];
SCSSCompletion.scssModuleBuiltIns = [
    {
        label: 'sass:math',
        documentation: t('Provides functions that operate on numbers.'),
        references: [{ name: sassDocumentationName, url: 'https://sass-lang.com/documentation/modules/math' }]
    },
    {
        label: 'sass:string',
        documentation: t('Makes it easy to combine, search, or split apart strings.'),
        references: [{ name: sassDocumentationName, url: 'https://sass-lang.com/documentation/modules/string' }]
    },
    {
        label: 'sass:color',
        documentation: t('Generates new colors based on existing ones, making it easy to build color themes.'),
        references: [{ name: sassDocumentationName, url: 'https://sass-lang.com/documentation/modules/color' }]
    },
    {
        label: 'sass:list',
        documentation: t('Lets you access and modify values in lists.'),
        references: [{ name: sassDocumentationName, url: 'https://sass-lang.com/documentation/modules/list' }]
    },
    {
        label: 'sass:map',
        documentation: t('Makes it possible to look up the value associated with a key in a map, and much more.'),
        references: [{ name: sassDocumentationName, url: 'https://sass-lang.com/documentation/modules/map' }]
    },
    {
        label: 'sass:selector',
        documentation: t('Provides access to Sass’s powerful selector engine.'),
        references: [{ name: sassDocumentationName, url: 'https://sass-lang.com/documentation/modules/selector' }]
    },
    {
        label: 'sass:meta',
        documentation: t('Exposes the details of Sass’s inner workings.'),
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

export { SCSSCompletion };
