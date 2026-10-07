import { CSSCompletion } from './cssCompletion.js';
import '../cssLanguageTypes.js';
import { t } from '../../../../@vscode/l10n/dist/browser.js';
import { CompletionItemKind, InsertTextFormat, TextEdit } from '../../../../vscode-languageserver-types/lib/esm/main.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class LESSCompletion extends CSSCompletion {
    constructor(lsOptions, cssDataManager) {
        super('@', lsOptions, cssDataManager);
    }
    createFunctionProposals(proposals, existingNode, sortToEnd, result) {
        for (const p of proposals) {
            const item = {
                label: p.name,
                detail: p.example,
                documentation: p.description,
                textEdit: TextEdit.replace(this.getCompletionRange(existingNode), p.name + '($0)'),
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
    getTermProposals(entry, existingNode, result) {
        let functions = LESSCompletion.builtInProposals;
        if (entry) {
            functions = functions.filter(f => !f.type || !entry.restrictions || entry.restrictions.indexOf(f.type) !== -1);
        }
        this.createFunctionProposals(functions, existingNode, true, result);
        return super.getTermProposals(entry, existingNode, result);
    }
    getColorProposals(entry, existingNode, result) {
        this.createFunctionProposals(LESSCompletion.colorProposals, existingNode, false, result);
        return super.getColorProposals(entry, existingNode, result);
    }
    getCompletionsForDeclarationProperty(declaration, result) {
        this.getCompletionsForSelector(null, true, result);
        return super.getCompletionsForDeclarationProperty(declaration, result);
    }
}
LESSCompletion.builtInProposals = [
    // Boolean functions
    {
        'name': 'if',
        'example': 'if(condition, trueValue [, falseValue]);',
        'description': t('returns one of two values depending on a condition.')
    },
    {
        'name': 'boolean',
        'example': 'boolean(condition);',
        'description': t('"store" a boolean test for later evaluation in a guard or if().')
    },
    // List functions
    {
        'name': 'length',
        'example': 'length(@list);',
        'description': t('returns the number of elements in a value list')
    },
    {
        'name': 'extract',
        'example': 'extract(@list, index);',
        'description': t('returns a value at the specified position in the list')
    },
    {
        'name': 'range',
        'example': 'range([start, ] end [, step]);',
        'description': t('generate a list spanning a range of values')
    },
    {
        'name': 'each',
        'example': 'each(@list, ruleset);',
        'description': t('bind the evaluation of a ruleset to each member of a list.')
    },
    // Other built-ins
    {
        'name': 'escape',
        'example': 'escape(@string);',
        'description': t('URL encodes a string')
    },
    {
        'name': 'e',
        'example': 'e(@string);',
        'description': t('escape string content')
    },
    {
        'name': 'replace',
        'example': 'replace(@string, @pattern, @replacement[, @flags]);',
        'description': t('string replace')
    },
    {
        'name': 'unit',
        'example': 'unit(@dimension, [@unit: \'\']);',
        'description': t('remove or change the unit of a dimension')
    },
    {
        'name': 'color',
        'example': 'color(@string);',
        'description': t('parses a string to a color'),
        'type': 'color'
    },
    {
        'name': 'convert',
        'example': 'convert(@value, unit);',
        'description': t('converts numbers from one type into another')
    },
    {
        'name': 'data-uri',
        'example': 'data-uri([mimetype,] url);',
        'description': t('inlines a resource and falls back to `url()`'),
        'type': 'url'
    },
    {
        'name': 'abs',
        'description': t('absolute value of a number'),
        'example': 'abs(number);'
    },
    {
        'name': 'acos',
        'description': t('arccosine - inverse of cosine function'),
        'example': 'acos(number);'
    },
    {
        'name': 'asin',
        'description': t('arcsine - inverse of sine function'),
        'example': 'asin(number);'
    },
    {
        'name': 'ceil',
        'example': 'ceil(@number);',
        'description': t('rounds up to an integer')
    },
    {
        'name': 'cos',
        'description': t('cosine function'),
        'example': 'cos(number);'
    },
    {
        'name': 'floor',
        'description': t('rounds down to an integer'),
        'example': 'floor(@number);'
    },
    {
        'name': 'percentage',
        'description': t('converts to a %, e.g. 0.5 > 50%'),
        'example': 'percentage(@number);',
        'type': 'percentage'
    },
    {
        'name': 'round',
        'description': t('rounds a number to a number of places'),
        'example': 'round(number, [places: 0]);'
    },
    {
        'name': 'sqrt',
        'description': t('calculates square root of a number'),
        'example': 'sqrt(number);'
    },
    {
        'name': 'sin',
        'description': t('sine function'),
        'example': 'sin(number);'
    },
    {
        'name': 'tan',
        'description': t('tangent function'),
        'example': 'tan(number);'
    },
    {
        'name': 'atan',
        'description': t('arctangent - inverse of tangent function'),
        'example': 'atan(number);'
    },
    {
        'name': 'pi',
        'description': t('returns pi'),
        'example': 'pi();'
    },
    {
        'name': 'pow',
        'description': t('first argument raised to the power of the second argument'),
        'example': 'pow(@base, @exponent);'
    },
    {
        'name': 'mod',
        'description': t('first argument modulus second argument'),
        'example': 'mod(number, number);'
    },
    {
        'name': 'min',
        'description': t('returns the lowest of one or more values'),
        'example': 'min(@x, @y);'
    },
    {
        'name': 'max',
        'description': t('returns the lowest of one or more values'),
        'example': 'max(@x, @y);'
    }
];
LESSCompletion.colorProposals = [
    {
        'name': 'argb',
        'example': 'argb(@color);',
        'description': t('creates a #AARRGGBB')
    },
    {
        'name': 'hsl',
        'example': 'hsl(@hue, @saturation, @lightness);',
        'description': t('creates a color')
    },
    {
        'name': 'hsla',
        'example': 'hsla(@hue, @saturation, @lightness, @alpha);',
        'description': t('creates a color')
    },
    {
        'name': 'hsv',
        'example': 'hsv(@hue, @saturation, @value);',
        'description': t('creates a color')
    },
    {
        'name': 'hsva',
        'example': 'hsva(@hue, @saturation, @value, @alpha);',
        'description': t('creates a color')
    },
    {
        'name': 'hue',
        'example': 'hue(@color);',
        'description': t('returns the `hue` channel of `@color` in the HSL space')
    },
    {
        'name': 'saturation',
        'example': 'saturation(@color);',
        'description': t('returns the `saturation` channel of `@color` in the HSL space')
    },
    {
        'name': 'lightness',
        'example': 'lightness(@color);',
        'description': t('returns the `lightness` channel of `@color` in the HSL space')
    },
    {
        'name': 'hsvhue',
        'example': 'hsvhue(@color);',
        'description': t('returns the `hue` channel of `@color` in the HSV space')
    },
    {
        'name': 'hsvsaturation',
        'example': 'hsvsaturation(@color);',
        'description': t('returns the `saturation` channel of `@color` in the HSV space')
    },
    {
        'name': 'hsvvalue',
        'example': 'hsvvalue(@color);',
        'description': t('returns the `value` channel of `@color` in the HSV space')
    },
    {
        'name': 'red',
        'example': 'red(@color);',
        'description': t('returns the `red` channel of `@color`')
    },
    {
        'name': 'green',
        'example': 'green(@color);',
        'description': t('returns the `green` channel of `@color`')
    },
    {
        'name': 'blue',
        'example': 'blue(@color);',
        'description': t('returns the `blue` channel of `@color`')
    },
    {
        'name': 'alpha',
        'example': 'alpha(@color);',
        'description': t('returns the `alpha` channel of `@color`')
    },
    {
        'name': 'luma',
        'example': 'luma(@color);',
        'description': t('returns the `luma` value (perceptual brightness) of `@color`')
    },
    {
        'name': 'saturate',
        'example': 'saturate(@color, 10%);',
        'description': t('return `@color` 10% points more saturated')
    },
    {
        'name': 'desaturate',
        'example': 'desaturate(@color, 10%);',
        'description': t('return `@color` 10% points less saturated')
    },
    {
        'name': 'lighten',
        'example': 'lighten(@color, 10%);',
        'description': t('return `@color` 10% points lighter')
    },
    {
        'name': 'darken',
        'example': 'darken(@color, 10%);',
        'description': t('return `@color` 10% points darker')
    },
    {
        'name': 'fadein',
        'example': 'fadein(@color, 10%);',
        'description': t('return `@color` 10% points less transparent')
    },
    {
        'name': 'fadeout',
        'example': 'fadeout(@color, 10%);',
        'description': t('return `@color` 10% points more transparent')
    },
    {
        'name': 'fade',
        'example': 'fade(@color, 50%);',
        'description': t('return `@color` with 50% transparency')
    },
    {
        'name': 'spin',
        'example': 'spin(@color, 10);',
        'description': t('return `@color` with a 10 degree larger in hue')
    },
    {
        'name': 'mix',
        'example': 'mix(@color1, @color2, [@weight: 50%]);',
        'description': t('return a mix of `@color1` and `@color2`')
    },
    {
        'name': 'greyscale',
        'example': 'greyscale(@color);',
        'description': t('returns a grey, 100% desaturated color'),
    },
    {
        'name': 'contrast',
        'example': 'contrast(@color1, [@darkcolor: black], [@lightcolor: white], [@threshold: 43%]);',
        'description': t('return `@darkcolor` if `@color1 is> 43% luma` otherwise return `@lightcolor`, see notes')
    },
    {
        'name': 'multiply',
        'example': 'multiply(@color1, @color2);'
    },
    {
        'name': 'screen',
        'example': 'screen(@color1, @color2);'
    },
    {
        'name': 'overlay',
        'example': 'overlay(@color1, @color2);'
    },
    {
        'name': 'softlight',
        'example': 'softlight(@color1, @color2);'
    },
    {
        'name': 'hardlight',
        'example': 'hardlight(@color1, @color2);'
    },
    {
        'name': 'difference',
        'example': 'difference(@color1, @color2);'
    },
    {
        'name': 'exclusion',
        'example': 'exclusion(@color1, @color2);'
    },
    {
        'name': 'average',
        'example': 'average(@color1, @color2);'
    },
    {
        'name': 'negation',
        'example': 'negation(@color1, @color2);'
    }
];

export { LESSCompletion };
