import { assertNever } from '../../../base/common/assert.js';
import { RunOnceScheduler } from '../../../base/common/async.js';
import { Color } from '../../../base/common/color.js';
import { Emitter } from '../../../base/common/event.js';
import { Extensions as Extensions$1 } from '../../jsonschemas/common/jsonContributionRegistry.js';
import { Registry } from '../../registry/common/platform.js';
import { localize } from '../../../nls.js';
import { Disposable } from '../../../base/common/lifecycle.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Returns the css variable name for the given color identifier. Dots (`.`) are replaced with hyphens (`-`) and
 * everything is prefixed with `--vscode-`.
 *
 * @sample `editorSuggestWidget.background` is `--vscode-editorSuggestWidget-background`.
 */
function asCssVariableName(colorIdent) {
    return `--vscode-${colorIdent.replace(/\./g, '-')}`;
}
function asCssVariable(color) {
    return `var(${asCssVariableName(color)})`;
}
function asCssVariableWithDefault(color, defaultCssValue) {
    return `var(${asCssVariableName(color)}, ${defaultCssValue})`;
}
function isColorDefaults(value) {
    return value !== null && typeof value === 'object' && 'light' in value && 'dark' in value;
}
// color registry
const Extensions = {
    ColorContribution: 'base.contributions.colors'
};
const DEFAULT_COLOR_CONFIG_VALUE = 'default';
class ColorRegistry extends Disposable {
    constructor() {
        super();
        this._onDidChangeSchema = this._register(new Emitter());
        this.onDidChangeSchema = this._onDidChangeSchema.event;
        this.colorSchema = { type: 'object', properties: {} };
        this.colorReferenceSchema = { type: 'string', enum: [], enumDescriptions: [] };
        this.colorsById = {};
    }
    registerColor(id, defaults, description, needsTransparency = false, deprecationMessage) {
        const colorContribution = { id, description, defaults, needsTransparency, deprecationMessage };
        this.colorsById[id] = colorContribution;
        const propertySchema = { type: 'string', format: 'color-hex', defaultSnippets: [{ body: '${1:#ff0000}' }] };
        if (deprecationMessage) {
            propertySchema.deprecationMessage = deprecationMessage;
        }
        if (needsTransparency) {
            propertySchema.pattern = '^#(?:(?<rgba>[0-9a-fA-f]{3}[0-9a-eA-E])|(?:[0-9a-fA-F]{6}(?:(?![fF]{2})(?:[0-9a-fA-F]{2}))))?$';
            propertySchema.patternErrorMessage = localize(2022, 'This color must be transparent or it will obscure content');
        }
        this.colorSchema.properties[id] = {
            description,
            oneOf: [
                propertySchema,
                { type: 'string', const: DEFAULT_COLOR_CONFIG_VALUE, description: localize(2023, 'Use the default color.') }
            ]
        };
        this.colorReferenceSchema.enum.push(id);
        this.colorReferenceSchema.enumDescriptions.push(description);
        this._onDidChangeSchema.fire();
        return id;
    }
    getColors() {
        return Object.keys(this.colorsById).map(id => this.colorsById[id]);
    }
    resolveDefaultColor(id, theme) {
        const colorDesc = this.colorsById[id];
        if (colorDesc?.defaults) {
            const colorValue = isColorDefaults(colorDesc.defaults) ? colorDesc.defaults[theme.type] : colorDesc.defaults;
            return resolveColorValue(colorValue, theme);
        }
        return undefined;
    }
    getColorSchema() {
        return this.colorSchema;
    }
    toString() {
        const sorter = (a, b) => {
            const cat1 = a.indexOf('.') === -1 ? 0 : 1;
            const cat2 = b.indexOf('.') === -1 ? 0 : 1;
            if (cat1 !== cat2) {
                return cat1 - cat2;
            }
            return a.localeCompare(b);
        };
        return Object.keys(this.colorsById).sort(sorter).map(k => `- \`${k}\`: ${this.colorsById[k].description}`).join('\n');
    }
}
const colorRegistry = new ColorRegistry();
Registry.add(Extensions.ColorContribution, colorRegistry);
function registerColor(id, defaults, description, needsTransparency, deprecationMessage) {
    return colorRegistry.registerColor(id, defaults, description, needsTransparency, deprecationMessage);
}
// ----- color functions
function executeTransform(transform, theme) {
    switch (transform.op) {
        case 0 /* ColorTransformType.Darken */:
            return resolveColorValue(transform.value, theme)?.darken(transform.factor);
        case 1 /* ColorTransformType.Lighten */:
            return resolveColorValue(transform.value, theme)?.lighten(transform.factor);
        case 2 /* ColorTransformType.Transparent */:
            return resolveColorValue(transform.value, theme)?.transparent(transform.factor);
        case 7 /* ColorTransformType.Mix */: {
            const primaryColor = resolveColorValue(transform.color, theme) || Color.transparent;
            const otherColor = resolveColorValue(transform.with, theme) || Color.transparent;
            return primaryColor.mix(otherColor, transform.ratio);
        }
        case 3 /* ColorTransformType.Opaque */: {
            const backgroundColor = resolveColorValue(transform.background, theme);
            if (!backgroundColor) {
                return resolveColorValue(transform.value, theme);
            }
            return resolveColorValue(transform.value, theme)?.makeOpaque(backgroundColor);
        }
        case 4 /* ColorTransformType.OneOf */:
            for (const candidate of transform.values) {
                const color = resolveColorValue(candidate, theme);
                if (color) {
                    return color;
                }
            }
            return undefined;
        case 6 /* ColorTransformType.IfDefinedThenElse */:
            return resolveColorValue(theme.defines(transform.if) ? transform.then : transform.else, theme);
        case 5 /* ColorTransformType.LessProminent */: {
            const from = resolveColorValue(transform.value, theme);
            if (!from) {
                return undefined;
            }
            const backgroundColor = resolveColorValue(transform.background, theme);
            if (!backgroundColor) {
                return from.transparent(transform.factor * transform.transparency);
            }
            return from.isDarkerThan(backgroundColor)
                ? Color.getLighterColor(from, backgroundColor, transform.factor).transparent(transform.transparency)
                : Color.getDarkerColor(from, backgroundColor, transform.factor).transparent(transform.transparency);
        }
        default:
            throw assertNever();
    }
}
function darken(colorValue, factor) {
    return { op: 0 /* ColorTransformType.Darken */, value: colorValue, factor };
}
function lighten(colorValue, factor) {
    return { op: 1 /* ColorTransformType.Lighten */, value: colorValue, factor };
}
function transparent(colorValue, factor) {
    return { op: 2 /* ColorTransformType.Transparent */, value: colorValue, factor };
}
function oneOf(...colorValues) {
    return { op: 4 /* ColorTransformType.OneOf */, values: colorValues };
}
function ifDefinedThenElse(ifArg, thenArg, elseArg) {
    return { op: 6 /* ColorTransformType.IfDefinedThenElse */, if: ifArg, then: thenArg, else: elseArg };
}
function lessProminent(colorValue, backgroundColorValue, factor, transparency) {
    return { op: 5 /* ColorTransformType.LessProminent */, value: colorValue, background: backgroundColorValue, factor, transparency };
}
// ----- implementation
/**
 * @param colorValue Resolve a color value in the context of a theme
 */
function resolveColorValue(colorValue, theme) {
    if (colorValue === null) {
        return undefined;
    }
    else if (typeof colorValue === 'string') {
        if (colorValue[0] === '#') {
            return Color.fromHex(colorValue);
        }
        return theme.getColor(colorValue);
    }
    else if (colorValue instanceof Color) {
        return colorValue;
    }
    else if (typeof colorValue === 'object') {
        return executeTransform(colorValue, theme);
    }
    return undefined;
}
const workbenchColorsSchemaId = 'vscode://schemas/workbench-colors';
const schemaRegistry = Registry.as(Extensions$1.JSONContribution);
schemaRegistry.registerSchema(workbenchColorsSchemaId, colorRegistry.getColorSchema());
const delayer = new RunOnceScheduler(() => schemaRegistry.notifySchemaChanged(workbenchColorsSchemaId), 200);
colorRegistry.onDidChangeSchema(() => {
    if (!delayer.isScheduled()) {
        delayer.schedule();
    }
});
// setTimeout(_ => console.log(colorRegistry.toString()), 5000);

export { DEFAULT_COLOR_CONFIG_VALUE, Extensions, asCssVariable, asCssVariableName, asCssVariableWithDefault, darken, executeTransform, ifDefinedThenElse, isColorDefaults, lessProminent, lighten, oneOf, registerColor, resolveColorValue, transparent, workbenchColorsSchemaId };
