import { equals as equals$1 } from '../../../base/common/arrays.js';
import { equals } from '../../../base/common/objects.js';
import { isLinux, isMacintosh, isChrome, isEdge, isNative } from '../../../base/common/platform.js';
import { EDITOR_FONT_DEFAULTS, FONT_VARIATION_OFF, FONT_VARIATION_TRANSLATE, FontInfo } from './fontInfo.js';
import { EDITOR_MODEL_DEFAULTS } from '../core/misc/textModelDefaults.js';
import { USUAL_WORD_SEPARATORS } from '../core/wordHelper.js';
import { localize } from '../../../nls.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * @internal
 * The width of the minimap gutter, in pixels.
 */
const MINIMAP_GUTTER_WIDTH = 8;
//#endregion
/**
 * An event describing that the configuration of the editor has changed.
 */
class ConfigurationChangedEvent {
    /**
     * @internal
     */
    constructor(values) {
        this._values = values;
    }
    hasChanged(id) {
        return this._values[id];
    }
}
/**
 * @internal
 */
class ComputeOptionsMemory {
    constructor() {
        this.stableMinimapLayoutInput = null;
        this.stableFitMaxMinimapScale = 0;
        this.stableFitRemainingWidth = 0;
    }
}
/**
 * @internal
 */
class BaseEditorOption {
    constructor(id, name, defaultValue, schema) {
        this.id = id;
        this.name = name;
        this.defaultValue = defaultValue;
        this.schema = schema;
    }
    applyUpdate(value, update) {
        return applyUpdate(value, update);
    }
    compute(env, options, value) {
        return value;
    }
}
class ApplyUpdateResult {
    constructor(newValue, didChange) {
        this.newValue = newValue;
        this.didChange = didChange;
    }
}
function applyUpdate(value, update) {
    if (typeof value !== 'object' || typeof update !== 'object' || !value || !update) {
        return new ApplyUpdateResult(update, value !== update);
    }
    if (Array.isArray(value) || Array.isArray(update)) {
        const arrayEquals = Array.isArray(value) && Array.isArray(update) && equals$1(value, update);
        return new ApplyUpdateResult(update, !arrayEquals);
    }
    let didChange = false;
    for (const key in update) {
        if (update.hasOwnProperty(key)) {
            const result = applyUpdate(value[key], update[key]);
            if (result.didChange) {
                value[key] = result.newValue;
                didChange = true;
            }
        }
    }
    return new ApplyUpdateResult(value, didChange);
}
/**
 * @internal
 */
class ComputedEditorOption {
    constructor(id, defaultValue) {
        this.schema = undefined;
        this.id = id;
        this.name = '_never_';
        this.defaultValue = defaultValue;
    }
    applyUpdate(value, update) {
        return applyUpdate(value, update);
    }
    validate(input) {
        return this.defaultValue;
    }
}
class SimpleEditorOption {
    constructor(id, name, defaultValue, schema) {
        this.id = id;
        this.name = name;
        this.defaultValue = defaultValue;
        this.schema = schema;
    }
    applyUpdate(value, update) {
        return applyUpdate(value, update);
    }
    compute(env, options, value) {
        return value;
    }
}
/**
 * @internal
 */
function boolean(value, defaultValue) {
    if (typeof value === 'undefined') {
        return defaultValue;
    }
    if (value === 'false') {
        // treat the string 'false' as false
        return false;
    }
    return Boolean(value);
}
class EditorBooleanOption extends SimpleEditorOption {
    constructor(id, name, defaultValue, schema = undefined) {
        if (typeof schema !== 'undefined') {
            schema.type = 'boolean';
            schema.default = defaultValue;
        }
        super(id, name, defaultValue, schema);
    }
    validate(input) {
        return boolean(input, this.defaultValue);
    }
}
/**
 * @internal
 */
function clampedInt(value, defaultValue, minimum, maximum) {
    if (typeof value === 'string') {
        value = parseInt(value, 10);
    }
    if (typeof value !== 'number' || isNaN(value)) {
        return defaultValue;
    }
    let r = value;
    r = Math.max(minimum, r);
    r = Math.min(maximum, r);
    return r | 0;
}
class EditorIntOption extends SimpleEditorOption {
    static clampedInt(value, defaultValue, minimum, maximum) {
        return clampedInt(value, defaultValue, minimum, maximum);
    }
    constructor(id, name, defaultValue, minimum, maximum, schema = undefined) {
        if (typeof schema !== 'undefined') {
            schema.type = 'integer';
            schema.default = defaultValue;
            schema.minimum = minimum;
            schema.maximum = maximum;
        }
        super(id, name, defaultValue, schema);
        this.minimum = minimum;
        this.maximum = maximum;
    }
    validate(input) {
        return EditorIntOption.clampedInt(input, this.defaultValue, this.minimum, this.maximum);
    }
}
/**
 * @internal
 */
function clampedFloat(value, defaultValue, minimum, maximum) {
    if (typeof value === 'undefined') {
        return defaultValue;
    }
    const r = EditorFloatOption.float(value, defaultValue);
    return EditorFloatOption.clamp(r, minimum, maximum);
}
class EditorFloatOption extends SimpleEditorOption {
    static clamp(n, min, max) {
        if (n < min) {
            return min;
        }
        if (n > max) {
            return max;
        }
        return n;
    }
    static float(value, defaultValue) {
        if (typeof value === 'string') {
            value = parseFloat(value);
        }
        if (typeof value !== 'number' || isNaN(value)) {
            return defaultValue;
        }
        return value;
    }
    constructor(id, name, defaultValue, validationFn, schema, minimum, maximum) {
        if (typeof schema !== 'undefined') {
            schema.type = 'number';
            schema.default = defaultValue;
            schema.minimum = minimum;
            schema.maximum = maximum;
        }
        super(id, name, defaultValue, schema);
        this.validationFn = validationFn;
        this.minimum = minimum;
        this.maximum = maximum;
    }
    validate(input) {
        return this.validationFn(EditorFloatOption.float(input, this.defaultValue));
    }
}
class EditorStringOption extends SimpleEditorOption {
    static string(value, defaultValue) {
        if (typeof value !== 'string') {
            return defaultValue;
        }
        return value;
    }
    constructor(id, name, defaultValue, schema = undefined) {
        if (typeof schema !== 'undefined') {
            schema.type = 'string';
            schema.default = defaultValue;
        }
        super(id, name, defaultValue, schema);
    }
    validate(input) {
        return EditorStringOption.string(input, this.defaultValue);
    }
}
/**
 * @internal
 */
function stringSet(value, defaultValue, allowedValues, renamedValues) {
    if (typeof value !== 'string') {
        return defaultValue;
    }
    if (renamedValues && value in renamedValues) {
        return renamedValues[value];
    }
    if (allowedValues.indexOf(value) === -1) {
        return defaultValue;
    }
    return value;
}
class EditorStringEnumOption extends SimpleEditorOption {
    constructor(id, name, defaultValue, allowedValues, schema = undefined) {
        if (typeof schema !== 'undefined') {
            schema.type = 'string';
            schema.enum = allowedValues.slice(0);
            schema.default = defaultValue;
        }
        super(id, name, defaultValue, schema);
        this._allowedValues = allowedValues;
    }
    validate(input) {
        return stringSet(input, this.defaultValue, this._allowedValues);
    }
}
class EditorEnumOption extends BaseEditorOption {
    constructor(id, name, defaultValue, defaultStringValue, allowedValues, convert, schema = undefined) {
        if (typeof schema !== 'undefined') {
            schema.type = 'string';
            schema.enum = allowedValues;
            schema.default = defaultStringValue;
        }
        super(id, name, defaultValue, schema);
        this._allowedValues = allowedValues;
        this._convert = convert;
    }
    validate(input) {
        if (typeof input !== 'string') {
            return this.defaultValue;
        }
        if (this._allowedValues.indexOf(input) === -1) {
            return this.defaultValue;
        }
        return this._convert(input);
    }
}
//#endregion
//#region autoIndent
function _autoIndentFromString(autoIndent) {
    switch (autoIndent) {
        case 'none': return 0 /* EditorAutoIndentStrategy.None */;
        case 'keep': return 1 /* EditorAutoIndentStrategy.Keep */;
        case 'brackets': return 2 /* EditorAutoIndentStrategy.Brackets */;
        case 'advanced': return 3 /* EditorAutoIndentStrategy.Advanced */;
        case 'full': return 4 /* EditorAutoIndentStrategy.Full */;
    }
}
//#endregion
//#region accessibilitySupport
class EditorAccessibilitySupport extends BaseEditorOption {
    constructor() {
        super(2 /* EditorOption.accessibilitySupport */, 'accessibilitySupport', 0 /* AccessibilitySupport.Unknown */, {
            type: 'string',
            enum: ['auto', 'on', 'off'],
            enumDescriptions: [
                localize(201, "Use platform APIs to detect when a Screen Reader is attached."),
                localize(202, "Optimize for usage with a Screen Reader."),
                localize(203, "Assume a screen reader is not attached."),
            ],
            default: 'auto',
            tags: ['accessibility'],
            description: localize(204, "Controls if the UI should run in a mode where it is optimized for screen readers.")
        });
    }
    validate(input) {
        switch (input) {
            case 'auto': return 0 /* AccessibilitySupport.Unknown */;
            case 'off': return 1 /* AccessibilitySupport.Disabled */;
            case 'on': return 2 /* AccessibilitySupport.Enabled */;
        }
        return this.defaultValue;
    }
    compute(env, options, value) {
        if (value === 0 /* AccessibilitySupport.Unknown */) {
            // The editor reads the `accessibilitySupport` from the environment
            return env.accessibilitySupport;
        }
        return value;
    }
}
class EditorComments extends BaseEditorOption {
    constructor() {
        const defaults = {
            insertSpace: true,
            ignoreEmptyLines: true,
        };
        super(29 /* EditorOption.comments */, 'comments', defaults, {
            'editor.comments.insertSpace': {
                type: 'boolean',
                default: defaults.insertSpace,
                description: localize(205, "Controls whether a space character is inserted when commenting.")
            },
            'editor.comments.ignoreEmptyLines': {
                type: 'boolean',
                default: defaults.ignoreEmptyLines,
                description: localize(206, 'Controls if empty lines should be ignored with toggle, add or remove actions for line comments.')
            },
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            insertSpace: boolean(input.insertSpace, this.defaultValue.insertSpace),
            ignoreEmptyLines: boolean(input.ignoreEmptyLines, this.defaultValue.ignoreEmptyLines),
        };
    }
}
/**
 * @internal
 */
function cursorBlinkingStyleFromString(cursorBlinkingStyle) {
    switch (cursorBlinkingStyle) {
        case 'blink': return 1 /* TextEditorCursorBlinkingStyle.Blink */;
        case 'smooth': return 2 /* TextEditorCursorBlinkingStyle.Smooth */;
        case 'phase': return 3 /* TextEditorCursorBlinkingStyle.Phase */;
        case 'expand': return 4 /* TextEditorCursorBlinkingStyle.Expand */;
        case 'solid': return 5 /* TextEditorCursorBlinkingStyle.Solid */;
    }
}
//#endregion
//#region cursorStyle
/**
 * The style in which the editor's cursor should be rendered.
 */
var TextEditorCursorStyle;
(function (TextEditorCursorStyle) {
    /**
     * As a vertical line (sitting between two characters).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["Line"] = 1] = "Line";
    /**
     * As a block (sitting on top of a character).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["Block"] = 2] = "Block";
    /**
     * As a horizontal line (sitting under a character).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["Underline"] = 3] = "Underline";
    /**
     * As a thin vertical line (sitting between two characters).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["LineThin"] = 4] = "LineThin";
    /**
     * As an outlined block (sitting on top of a character).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["BlockOutline"] = 5] = "BlockOutline";
    /**
     * As a thin horizontal line (sitting under a character).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["UnderlineThin"] = 6] = "UnderlineThin";
})(TextEditorCursorStyle || (TextEditorCursorStyle = {}));
/**
 * @internal
 */
function cursorStyleFromString(cursorStyle) {
    switch (cursorStyle) {
        case 'line': return TextEditorCursorStyle.Line;
        case 'block': return TextEditorCursorStyle.Block;
        case 'underline': return TextEditorCursorStyle.Underline;
        case 'line-thin': return TextEditorCursorStyle.LineThin;
        case 'block-outline': return TextEditorCursorStyle.BlockOutline;
        case 'underline-thin': return TextEditorCursorStyle.UnderlineThin;
    }
}
//#endregion
//#region editorClassName
class EditorClassName extends ComputedEditorOption {
    constructor() {
        super(162 /* EditorOption.editorClassName */, '');
    }
    compute(env, options, _) {
        const classNames = ['monaco-editor'];
        if (options.get(48 /* EditorOption.extraEditorClassName */)) {
            classNames.push(options.get(48 /* EditorOption.extraEditorClassName */));
        }
        if (env.extraEditorClassName) {
            classNames.push(env.extraEditorClassName);
        }
        if (options.get(82 /* EditorOption.mouseStyle */) === 'default') {
            classNames.push('mouse-default');
        }
        else if (options.get(82 /* EditorOption.mouseStyle */) === 'copy') {
            classNames.push('mouse-copy');
        }
        if (options.get(127 /* EditorOption.showUnused */)) {
            classNames.push('showUnused');
        }
        if (options.get(157 /* EditorOption.showDeprecated */)) {
            classNames.push('showDeprecated');
        }
        return classNames.join(' ');
    }
}
//#endregion
//#region emptySelectionClipboard
class EditorEmptySelectionClipboard extends EditorBooleanOption {
    constructor() {
        super(45 /* EditorOption.emptySelectionClipboard */, 'emptySelectionClipboard', true, { description: localize(207, "Controls whether copying without a selection copies the current line.") });
    }
    compute(env, options, value) {
        return value && env.emptySelectionClipboard;
    }
}
class EditorFind extends BaseEditorOption {
    constructor() {
        const defaults = {
            cursorMoveOnType: true,
            findOnType: true,
            seedSearchStringFromSelection: 'always',
            autoFindInSelection: 'never',
            globalFindClipboard: false,
            addExtraSpaceOnTop: true,
            loop: true,
            history: 'workspace',
            replaceHistory: 'workspace',
        };
        super(50 /* EditorOption.find */, 'find', defaults, {
            'editor.find.cursorMoveOnType': {
                type: 'boolean',
                default: defaults.cursorMoveOnType,
                description: localize(208, "Controls whether the cursor should jump to find matches while typing.")
            },
            'editor.find.seedSearchStringFromSelection': {
                type: 'string',
                enum: ['never', 'always', 'selection'],
                default: defaults.seedSearchStringFromSelection,
                enumDescriptions: [
                    localize(209, 'Never seed search string from the editor selection.'),
                    localize(210, 'Always seed search string from the editor selection, including word at cursor position.'),
                    localize(211, 'Only seed search string from the editor selection.')
                ],
                description: localize(212, "Controls whether the search string in the Find Widget is seeded from the editor selection.")
            },
            'editor.find.autoFindInSelection': {
                type: 'string',
                enum: ['never', 'always', 'multiline'],
                default: defaults.autoFindInSelection,
                enumDescriptions: [
                    localize(213, 'Never turn on Find in Selection automatically (default).'),
                    localize(214, 'Always turn on Find in Selection automatically.'),
                    localize(215, 'Turn on Find in Selection automatically when multiple lines of content are selected.')
                ],
                description: localize(216, "Controls the condition for turning on Find in Selection automatically.")
            },
            'editor.find.globalFindClipboard': {
                type: 'boolean',
                default: defaults.globalFindClipboard,
                description: localize(217, "Controls whether the Find Widget should read or modify the shared find clipboard on macOS."),
                included: isMacintosh
            },
            'editor.find.addExtraSpaceOnTop': {
                type: 'boolean',
                default: defaults.addExtraSpaceOnTop,
                description: localize(218, "Controls whether the Find Widget should add extra lines on top of the editor. When true, you can scroll beyond the first line when the Find Widget is visible.")
            },
            'editor.find.loop': {
                type: 'boolean',
                default: defaults.loop,
                description: localize(219, "Controls whether the search automatically restarts from the beginning (or the end) when no further matches can be found.")
            },
            'editor.find.history': {
                type: 'string',
                enum: ['never', 'workspace'],
                default: 'workspace',
                enumDescriptions: [
                    localize(220, 'Do not store search history from the find widget.'),
                    localize(221, 'Store search history across the active workspace'),
                ],
                description: localize(222, "Controls how the find widget history should be stored")
            },
            'editor.find.replaceHistory': {
                type: 'string',
                enum: ['never', 'workspace'],
                default: 'workspace',
                enumDescriptions: [
                    localize(223, 'Do not store history from the replace widget.'),
                    localize(224, 'Store replace history across the active workspace'),
                ],
                description: localize(225, "Controls how the replace widget history should be stored")
            },
            'editor.find.findOnType': {
                type: 'boolean',
                default: defaults.findOnType,
                description: localize(226, "Controls whether the Find Widget should search as you type.")
            },
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            cursorMoveOnType: boolean(input.cursorMoveOnType, this.defaultValue.cursorMoveOnType),
            findOnType: boolean(input.findOnType, this.defaultValue.findOnType),
            seedSearchStringFromSelection: typeof input.seedSearchStringFromSelection === 'boolean'
                ? (input.seedSearchStringFromSelection ? 'always' : 'never')
                : stringSet(input.seedSearchStringFromSelection, this.defaultValue.seedSearchStringFromSelection, ['never', 'always', 'selection']),
            autoFindInSelection: typeof input.autoFindInSelection === 'boolean'
                ? (input.autoFindInSelection ? 'always' : 'never')
                : stringSet(input.autoFindInSelection, this.defaultValue.autoFindInSelection, ['never', 'always', 'multiline']),
            globalFindClipboard: boolean(input.globalFindClipboard, this.defaultValue.globalFindClipboard),
            addExtraSpaceOnTop: boolean(input.addExtraSpaceOnTop, this.defaultValue.addExtraSpaceOnTop),
            loop: boolean(input.loop, this.defaultValue.loop),
            history: stringSet(input.history, this.defaultValue.history, ['never', 'workspace']),
            replaceHistory: stringSet(input.replaceHistory, this.defaultValue.replaceHistory, ['never', 'workspace']),
        };
    }
}
//#endregion
//#region fontLigatures
/**
 * @internal
 */
class EditorFontLigatures extends BaseEditorOption {
    static { this.OFF = '"liga" off, "calt" off'; }
    static { this.ON = '"liga" on, "calt" on'; }
    constructor() {
        super(60 /* EditorOption.fontLigatures */, 'fontLigatures', EditorFontLigatures.OFF, {
            anyOf: [
                {
                    type: 'boolean',
                    description: localize(227, "Enables/Disables font ligatures ('calt' and 'liga' font features). Change this to a string for fine-grained control of the 'font-feature-settings' CSS property."),
                },
                {
                    type: 'string',
                    description: localize(228, "Explicit 'font-feature-settings' CSS property. A boolean can be passed instead if one only needs to turn on/off ligatures.")
                }
            ],
            description: localize(229, "Configures font ligatures or font features. Can be either a boolean to enable/disable ligatures or a string for the value of the CSS 'font-feature-settings' property."),
            default: false
        });
    }
    validate(input) {
        if (typeof input === 'undefined') {
            return this.defaultValue;
        }
        if (typeof input === 'string') {
            if (input === 'false' || input.length === 0) {
                return EditorFontLigatures.OFF;
            }
            if (input === 'true') {
                return EditorFontLigatures.ON;
            }
            return input;
        }
        if (Boolean(input)) {
            return EditorFontLigatures.ON;
        }
        return EditorFontLigatures.OFF;
    }
}
//#endregion
//#region fontVariations
/**
 * @internal
 */
class EditorFontVariations extends BaseEditorOption {
    // Text is laid out using default settings.
    static { this.OFF = FONT_VARIATION_OFF; }
    // Translate `fontWeight` config to the `font-variation-settings` CSS property.
    static { this.TRANSLATE = FONT_VARIATION_TRANSLATE; }
    constructor() {
        super(63 /* EditorOption.fontVariations */, 'fontVariations', EditorFontVariations.OFF, {
            anyOf: [
                {
                    type: 'boolean',
                    description: localize(230, "Enables/Disables the translation from font-weight to font-variation-settings. Change this to a string for fine-grained control of the 'font-variation-settings' CSS property."),
                },
                {
                    type: 'string',
                    description: localize(231, "Explicit 'font-variation-settings' CSS property. A boolean can be passed instead if one only needs to translate font-weight to font-variation-settings.")
                }
            ],
            description: localize(232, "Configures font variations. Can be either a boolean to enable/disable the translation from font-weight to font-variation-settings or a string for the value of the CSS 'font-variation-settings' property."),
            default: false
        });
    }
    validate(input) {
        if (typeof input === 'undefined') {
            return this.defaultValue;
        }
        if (typeof input === 'string') {
            if (input === 'false') {
                return EditorFontVariations.OFF;
            }
            if (input === 'true') {
                return EditorFontVariations.TRANSLATE;
            }
            return input;
        }
        if (Boolean(input)) {
            return EditorFontVariations.TRANSLATE;
        }
        return EditorFontVariations.OFF;
    }
    compute(env, options, value) {
        // The value is computed from the fontWeight if it is true.
        // So take the result from env.fontInfo
        return env.fontInfo.fontVariationSettings;
    }
}
//#endregion
//#region fontInfo
class EditorFontInfo extends ComputedEditorOption {
    constructor() {
        super(59 /* EditorOption.fontInfo */, new FontInfo({
            pixelRatio: 0,
            fontFamily: '',
            fontWeight: '',
            fontSize: 0,
            fontFeatureSettings: '',
            fontVariationSettings: '',
            lineHeight: 0,
            letterSpacing: 0,
            isMonospace: false,
            typicalHalfwidthCharacterWidth: 0,
            typicalFullwidthCharacterWidth: 0,
            canUseHalfwidthRightwardsArrow: false,
            spaceWidth: 0,
            middotWidth: 0,
            wsmiddotWidth: 0,
            maxDigitWidth: 0,
        }, false));
    }
    compute(env, options, _) {
        return env.fontInfo;
    }
}
//#endregion
//#region effectiveCursorStyle
class EffectiveCursorStyle extends ComputedEditorOption {
    constructor() {
        super(161 /* EditorOption.effectiveCursorStyle */, TextEditorCursorStyle.Line);
    }
    compute(env, options, _) {
        return env.inputMode === 'overtype' ?
            options.get(92 /* EditorOption.overtypeCursorStyle */) :
            options.get(34 /* EditorOption.cursorStyle */);
    }
}
//#endregion
//#region effectiveExperimentalEditContext
class EffectiveEditContextEnabled extends ComputedEditorOption {
    constructor() {
        super(170 /* EditorOption.effectiveEditContext */, false);
    }
    compute(env, options) {
        return env.editContextSupported && options.get(44 /* EditorOption.editContext */);
    }
}
//#endregion
//#region effectiveAllowVariableFonts
class EffectiveAllowVariableFonts extends ComputedEditorOption {
    constructor() {
        super(172 /* EditorOption.effectiveAllowVariableFonts */, false);
    }
    compute(env, options) {
        const accessibilitySupport = env.accessibilitySupport;
        if (accessibilitySupport === 2 /* AccessibilitySupport.Enabled */) {
            return options.get(7 /* EditorOption.allowVariableFontsInAccessibilityMode */);
        }
        else {
            return options.get(6 /* EditorOption.allowVariableFonts */);
        }
    }
}
//#engregion
//#region fontSize
class EditorFontSize extends SimpleEditorOption {
    constructor() {
        super(61 /* EditorOption.fontSize */, 'fontSize', EDITOR_FONT_DEFAULTS.fontSize, {
            type: 'number',
            minimum: 6,
            maximum: 100,
            default: EDITOR_FONT_DEFAULTS.fontSize,
            description: localize(233, "Controls the font size in pixels.")
        });
    }
    validate(input) {
        const r = EditorFloatOption.float(input, this.defaultValue);
        if (r === 0) {
            return EDITOR_FONT_DEFAULTS.fontSize;
        }
        return EditorFloatOption.clamp(r, 6, 100);
    }
    compute(env, options, value) {
        // The final fontSize respects the editor zoom level.
        // So take the result from env.fontInfo
        return env.fontInfo.fontSize;
    }
}
//#endregion
//#region fontWeight
class EditorFontWeight extends BaseEditorOption {
    static { this.SUGGESTION_VALUES = ['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900']; }
    static { this.MINIMUM_VALUE = 1; }
    static { this.MAXIMUM_VALUE = 1000; }
    constructor() {
        super(62 /* EditorOption.fontWeight */, 'fontWeight', EDITOR_FONT_DEFAULTS.fontWeight, {
            anyOf: [
                {
                    type: 'number',
                    minimum: EditorFontWeight.MINIMUM_VALUE,
                    maximum: EditorFontWeight.MAXIMUM_VALUE,
                    errorMessage: localize(234, "Only \"normal\" and \"bold\" keywords or numbers between 1 and 1000 are allowed.")
                },
                {
                    type: 'string',
                    pattern: '^(normal|bold|1000|[1-9][0-9]{0,2})$'
                },
                {
                    enum: EditorFontWeight.SUGGESTION_VALUES
                }
            ],
            default: EDITOR_FONT_DEFAULTS.fontWeight,
            description: localize(235, "Controls the font weight. Accepts \"normal\" and \"bold\" keywords or numbers between 1 and 1000.")
        });
    }
    validate(input) {
        if (input === 'normal' || input === 'bold') {
            return input;
        }
        return String(EditorIntOption.clampedInt(input, EDITOR_FONT_DEFAULTS.fontWeight, EditorFontWeight.MINIMUM_VALUE, EditorFontWeight.MAXIMUM_VALUE));
    }
}
class EditorGoToLocation extends BaseEditorOption {
    constructor() {
        const defaults = {
            multiple: 'peek',
            multipleDefinitions: 'peek',
            multipleTypeDefinitions: 'peek',
            multipleDeclarations: 'peek',
            multipleImplementations: 'peek',
            multipleReferences: 'peek',
            multipleTests: 'peek',
            alternativeDefinitionCommand: 'editor.action.goToReferences',
            alternativeTypeDefinitionCommand: 'editor.action.goToReferences',
            alternativeDeclarationCommand: 'editor.action.goToReferences',
            alternativeImplementationCommand: '',
            alternativeReferenceCommand: '',
            alternativeTestsCommand: '',
        };
        const jsonSubset = {
            type: 'string',
            enum: ['peek', 'gotoAndPeek', 'goto'],
            default: defaults.multiple,
            enumDescriptions: [
                localize(236, 'Show Peek view of the results (default)'),
                localize(237, 'Go to the primary result and show a Peek view'),
                localize(238, 'Go to the primary result and enable Peek-less navigation to others')
            ]
        };
        const alternativeCommandOptions = ['', 'editor.action.referenceSearch.trigger', 'editor.action.goToReferences', 'editor.action.peekImplementation', 'editor.action.goToImplementation', 'editor.action.peekTypeDefinition', 'editor.action.goToTypeDefinition', 'editor.action.peekDeclaration', 'editor.action.revealDeclaration', 'editor.action.peekDefinition', 'editor.action.revealDefinitionAside', 'editor.action.revealDefinition'];
        super(67 /* EditorOption.gotoLocation */, 'gotoLocation', defaults, {
            'editor.gotoLocation.multiple': {
                deprecationMessage: localize(239, "This setting is deprecated, please use separate settings like 'editor.editor.gotoLocation.multipleDefinitions' or 'editor.editor.gotoLocation.multipleImplementations' instead."),
            },
            'editor.gotoLocation.multipleDefinitions': {
                description: localize(240, "Controls the behavior the 'Go to Definition'-command when multiple target locations exist."),
                ...jsonSubset,
            },
            'editor.gotoLocation.multipleTypeDefinitions': {
                description: localize(241, "Controls the behavior the 'Go to Type Definition'-command when multiple target locations exist."),
                ...jsonSubset,
            },
            'editor.gotoLocation.multipleDeclarations': {
                description: localize(242, "Controls the behavior the 'Go to Declaration'-command when multiple target locations exist."),
                ...jsonSubset,
            },
            'editor.gotoLocation.multipleImplementations': {
                description: localize(243, "Controls the behavior the 'Go to Implementations'-command when multiple target locations exist."),
                ...jsonSubset,
            },
            'editor.gotoLocation.multipleReferences': {
                description: localize(244, "Controls the behavior the 'Go to References'-command when multiple target locations exist."),
                ...jsonSubset,
            },
            'editor.gotoLocation.alternativeDefinitionCommand': {
                type: 'string',
                default: defaults.alternativeDefinitionCommand,
                enum: alternativeCommandOptions,
                description: localize(245, "Alternative command id that is being executed when the result of 'Go to Definition' is the current location.")
            },
            'editor.gotoLocation.alternativeTypeDefinitionCommand': {
                type: 'string',
                default: defaults.alternativeTypeDefinitionCommand,
                enum: alternativeCommandOptions,
                description: localize(246, "Alternative command id that is being executed when the result of 'Go to Type Definition' is the current location.")
            },
            'editor.gotoLocation.alternativeDeclarationCommand': {
                type: 'string',
                default: defaults.alternativeDeclarationCommand,
                enum: alternativeCommandOptions,
                description: localize(247, "Alternative command id that is being executed when the result of 'Go to Declaration' is the current location.")
            },
            'editor.gotoLocation.alternativeImplementationCommand': {
                type: 'string',
                default: defaults.alternativeImplementationCommand,
                enum: alternativeCommandOptions,
                description: localize(248, "Alternative command id that is being executed when the result of 'Go to Implementation' is the current location.")
            },
            'editor.gotoLocation.alternativeReferenceCommand': {
                type: 'string',
                default: defaults.alternativeReferenceCommand,
                enum: alternativeCommandOptions,
                description: localize(249, "Alternative command id that is being executed when the result of 'Go to Reference' is the current location.")
            },
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            multiple: stringSet(input.multiple, this.defaultValue.multiple, ['peek', 'gotoAndPeek', 'goto']),
            multipleDefinitions: stringSet(input.multipleDefinitions, 'peek', ['peek', 'gotoAndPeek', 'goto']),
            multipleTypeDefinitions: stringSet(input.multipleTypeDefinitions, 'peek', ['peek', 'gotoAndPeek', 'goto']),
            multipleDeclarations: stringSet(input.multipleDeclarations, 'peek', ['peek', 'gotoAndPeek', 'goto']),
            multipleImplementations: stringSet(input.multipleImplementations, 'peek', ['peek', 'gotoAndPeek', 'goto']),
            multipleReferences: stringSet(input.multipleReferences, 'peek', ['peek', 'gotoAndPeek', 'goto']),
            multipleTests: stringSet(input.multipleTests, 'peek', ['peek', 'gotoAndPeek', 'goto']),
            alternativeDefinitionCommand: EditorStringOption.string(input.alternativeDefinitionCommand, this.defaultValue.alternativeDefinitionCommand),
            alternativeTypeDefinitionCommand: EditorStringOption.string(input.alternativeTypeDefinitionCommand, this.defaultValue.alternativeTypeDefinitionCommand),
            alternativeDeclarationCommand: EditorStringOption.string(input.alternativeDeclarationCommand, this.defaultValue.alternativeDeclarationCommand),
            alternativeImplementationCommand: EditorStringOption.string(input.alternativeImplementationCommand, this.defaultValue.alternativeImplementationCommand),
            alternativeReferenceCommand: EditorStringOption.string(input.alternativeReferenceCommand, this.defaultValue.alternativeReferenceCommand),
            alternativeTestsCommand: EditorStringOption.string(input.alternativeTestsCommand, this.defaultValue.alternativeTestsCommand),
        };
    }
}
class EditorHover extends BaseEditorOption {
    constructor() {
        const defaults = {
            enabled: true,
            delay: 300,
            hidingDelay: 300,
            sticky: true,
            above: true,
        };
        super(69 /* EditorOption.hover */, 'hover', defaults, {
            'editor.hover.enabled': {
                type: 'boolean',
                default: defaults.enabled,
                description: localize(250, "Controls whether the hover is shown.")
            },
            'editor.hover.delay': {
                type: 'number',
                default: defaults.delay,
                minimum: 0,
                maximum: 10000,
                description: localize(251, "Controls the delay in milliseconds after which the hover is shown.")
            },
            'editor.hover.sticky': {
                type: 'boolean',
                default: defaults.sticky,
                description: localize(252, "Controls whether the hover should remain visible when mouse is moved over it.")
            },
            'editor.hover.hidingDelay': {
                type: 'integer',
                minimum: 0,
                default: defaults.hidingDelay,
                markdownDescription: localize(253, "Controls the delay in milliseconds after which the hover is hidden. Requires `#editor.hover.sticky#` to be enabled.")
            },
            'editor.hover.above': {
                type: 'boolean',
                default: defaults.above,
                description: localize(254, "Prefer showing hovers above the line, if there's space.")
            },
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            enabled: boolean(input.enabled, this.defaultValue.enabled),
            delay: EditorIntOption.clampedInt(input.delay, this.defaultValue.delay, 0, 10000),
            sticky: boolean(input.sticky, this.defaultValue.sticky),
            hidingDelay: EditorIntOption.clampedInt(input.hidingDelay, this.defaultValue.hidingDelay, 0, 600000),
            above: boolean(input.above, this.defaultValue.above),
        };
    }
}
/**
 * @internal
 */
class EditorLayoutInfoComputer extends ComputedEditorOption {
    constructor() {
        super(165 /* EditorOption.layoutInfo */, {
            width: 0,
            height: 0,
            glyphMarginLeft: 0,
            glyphMarginWidth: 0,
            glyphMarginDecorationLaneCount: 0,
            lineNumbersLeft: 0,
            lineNumbersWidth: 0,
            decorationsLeft: 0,
            decorationsWidth: 0,
            contentLeft: 0,
            contentWidth: 0,
            minimap: {
                renderMinimap: 0 /* RenderMinimap.None */,
                minimapLeft: 0,
                minimapWidth: 0,
                minimapHeightIsEditorHeight: false,
                minimapIsSampling: false,
                minimapScale: 1,
                minimapLineHeight: 1,
                minimapCanvasInnerWidth: 0,
                minimapCanvasInnerHeight: 0,
                minimapCanvasOuterWidth: 0,
                minimapCanvasOuterHeight: 0,
            },
            viewportColumn: 0,
            isWordWrapMinified: false,
            isViewportWrapping: false,
            wrappingColumn: -1,
            verticalScrollbarWidth: 0,
            horizontalScrollbarHeight: 0,
            overviewRuler: {
                top: 0,
                width: 0,
                height: 0,
                right: 0
            }
        });
    }
    compute(env, options, _) {
        return EditorLayoutInfoComputer.computeLayout(options, {
            memory: env.memory,
            outerWidth: env.outerWidth,
            outerHeight: env.outerHeight,
            isDominatedByLongLines: env.isDominatedByLongLines,
            lineHeight: env.fontInfo.lineHeight,
            viewLineCount: env.viewLineCount,
            lineNumbersDigitCount: env.lineNumbersDigitCount,
            typicalHalfwidthCharacterWidth: env.fontInfo.typicalHalfwidthCharacterWidth,
            maxDigitWidth: env.fontInfo.maxDigitWidth,
            pixelRatio: env.pixelRatio,
            glyphMarginDecorationLaneCount: env.glyphMarginDecorationLaneCount
        });
    }
    static computeContainedMinimapLineCount(input) {
        const typicalViewportLineCount = input.height / input.lineHeight;
        const extraLinesBeforeFirstLine = Math.floor(input.paddingTop / input.lineHeight);
        let extraLinesBeyondLastLine = Math.floor(input.paddingBottom / input.lineHeight);
        if (input.scrollBeyondLastLine) {
            extraLinesBeyondLastLine = Math.max(extraLinesBeyondLastLine, typicalViewportLineCount - 1);
        }
        const desiredRatio = (extraLinesBeforeFirstLine + input.viewLineCount + extraLinesBeyondLastLine) / (input.pixelRatio * input.height);
        const minimapLineCount = Math.floor(input.viewLineCount / desiredRatio);
        return { typicalViewportLineCount, extraLinesBeforeFirstLine, extraLinesBeyondLastLine, desiredRatio, minimapLineCount };
    }
    static _computeMinimapLayout(input, memory) {
        const outerWidth = input.outerWidth;
        const outerHeight = input.outerHeight;
        const pixelRatio = input.pixelRatio;
        if (!input.minimap.enabled) {
            return {
                renderMinimap: 0 /* RenderMinimap.None */,
                minimapLeft: 0,
                minimapWidth: 0,
                minimapHeightIsEditorHeight: false,
                minimapIsSampling: false,
                minimapScale: 1,
                minimapLineHeight: 1,
                minimapCanvasInnerWidth: 0,
                minimapCanvasInnerHeight: Math.floor(pixelRatio * outerHeight),
                minimapCanvasOuterWidth: 0,
                minimapCanvasOuterHeight: outerHeight,
            };
        }
        // Can use memory if only the `viewLineCount` and `remainingWidth` have changed
        const stableMinimapLayoutInput = memory.stableMinimapLayoutInput;
        const couldUseMemory = (stableMinimapLayoutInput
            // && input.outerWidth === lastMinimapLayoutInput.outerWidth !!! INTENTIONAL OMITTED
            && input.outerHeight === stableMinimapLayoutInput.outerHeight
            && input.lineHeight === stableMinimapLayoutInput.lineHeight
            && input.typicalHalfwidthCharacterWidth === stableMinimapLayoutInput.typicalHalfwidthCharacterWidth
            && input.pixelRatio === stableMinimapLayoutInput.pixelRatio
            && input.scrollBeyondLastLine === stableMinimapLayoutInput.scrollBeyondLastLine
            && input.paddingTop === stableMinimapLayoutInput.paddingTop
            && input.paddingBottom === stableMinimapLayoutInput.paddingBottom
            && input.minimap.enabled === stableMinimapLayoutInput.minimap.enabled
            && input.minimap.side === stableMinimapLayoutInput.minimap.side
            && input.minimap.size === stableMinimapLayoutInput.minimap.size
            && input.minimap.showSlider === stableMinimapLayoutInput.minimap.showSlider
            && input.minimap.renderCharacters === stableMinimapLayoutInput.minimap.renderCharacters
            && input.minimap.maxColumn === stableMinimapLayoutInput.minimap.maxColumn
            && input.minimap.scale === stableMinimapLayoutInput.minimap.scale
            && input.verticalScrollbarWidth === stableMinimapLayoutInput.verticalScrollbarWidth
            // && input.viewLineCount === lastMinimapLayoutInput.viewLineCount !!! INTENTIONAL OMITTED
            // && input.remainingWidth === lastMinimapLayoutInput.remainingWidth !!! INTENTIONAL OMITTED
            && input.isViewportWrapping === stableMinimapLayoutInput.isViewportWrapping);
        const lineHeight = input.lineHeight;
        const typicalHalfwidthCharacterWidth = input.typicalHalfwidthCharacterWidth;
        const scrollBeyondLastLine = input.scrollBeyondLastLine;
        const minimapRenderCharacters = input.minimap.renderCharacters;
        let minimapScale = (pixelRatio >= 2 ? Math.round(input.minimap.scale * 2) : input.minimap.scale);
        const minimapMaxColumn = input.minimap.maxColumn;
        const minimapSize = input.minimap.size;
        const minimapSide = input.minimap.side;
        const verticalScrollbarWidth = input.verticalScrollbarWidth;
        const viewLineCount = input.viewLineCount;
        const remainingWidth = input.remainingWidth;
        const isViewportWrapping = input.isViewportWrapping;
        const baseCharHeight = minimapRenderCharacters ? 2 : 3;
        let minimapCanvasInnerHeight = Math.floor(pixelRatio * outerHeight);
        const minimapCanvasOuterHeight = minimapCanvasInnerHeight / pixelRatio;
        let minimapHeightIsEditorHeight = false;
        let minimapIsSampling = false;
        let minimapLineHeight = baseCharHeight * minimapScale;
        let minimapCharWidth = minimapScale / pixelRatio;
        let minimapWidthMultiplier = 1;
        if (minimapSize === 'fill' || minimapSize === 'fit') {
            const { typicalViewportLineCount, extraLinesBeforeFirstLine, extraLinesBeyondLastLine, desiredRatio, minimapLineCount } = EditorLayoutInfoComputer.computeContainedMinimapLineCount({
                viewLineCount: viewLineCount,
                scrollBeyondLastLine: scrollBeyondLastLine,
                paddingTop: input.paddingTop,
                paddingBottom: input.paddingBottom,
                height: outerHeight,
                lineHeight: lineHeight,
                pixelRatio: pixelRatio
            });
            // ratio is intentionally not part of the layout to avoid the layout changing all the time
            // when doing sampling
            const ratio = viewLineCount / minimapLineCount;
            if (ratio > 1) {
                minimapHeightIsEditorHeight = true;
                minimapIsSampling = true;
                minimapScale = 1;
                minimapLineHeight = 1;
                minimapCharWidth = minimapScale / pixelRatio;
            }
            else {
                let fitBecomesFill = false;
                let maxMinimapScale = minimapScale + 1;
                if (minimapSize === 'fit') {
                    const effectiveMinimapHeight = Math.ceil((extraLinesBeforeFirstLine + viewLineCount + extraLinesBeyondLastLine) * minimapLineHeight);
                    if (isViewportWrapping && couldUseMemory && remainingWidth <= memory.stableFitRemainingWidth) {
                        // There is a loop when using `fit` and viewport wrapping:
                        // - view line count impacts minimap layout
                        // - minimap layout impacts viewport width
                        // - viewport width impacts view line count
                        // To break the loop, once we go to a smaller minimap scale, we try to stick with it.
                        fitBecomesFill = true;
                        maxMinimapScale = memory.stableFitMaxMinimapScale;
                    }
                    else {
                        fitBecomesFill = (effectiveMinimapHeight > minimapCanvasInnerHeight);
                    }
                }
                if (minimapSize === 'fill' || fitBecomesFill) {
                    minimapHeightIsEditorHeight = true;
                    const configuredMinimapScale = minimapScale;
                    minimapLineHeight = Math.min(lineHeight * pixelRatio, Math.max(1, Math.floor(1 / desiredRatio)));
                    if (isViewportWrapping && couldUseMemory && remainingWidth <= memory.stableFitRemainingWidth) {
                        // There is a loop when using `fill` and viewport wrapping:
                        // - view line count impacts minimap layout
                        // - minimap layout impacts viewport width
                        // - viewport width impacts view line count
                        // To break the loop, once we go to a smaller minimap scale, we try to stick with it.
                        maxMinimapScale = memory.stableFitMaxMinimapScale;
                    }
                    minimapScale = Math.min(maxMinimapScale, Math.max(1, Math.floor(minimapLineHeight / baseCharHeight)));
                    if (minimapScale > configuredMinimapScale) {
                        minimapWidthMultiplier = Math.min(2, minimapScale / configuredMinimapScale);
                    }
                    minimapCharWidth = minimapScale / pixelRatio / minimapWidthMultiplier;
                    minimapCanvasInnerHeight = Math.ceil((Math.max(typicalViewportLineCount, extraLinesBeforeFirstLine + viewLineCount + extraLinesBeyondLastLine)) * minimapLineHeight);
                    if (isViewportWrapping) {
                        // remember for next time
                        memory.stableMinimapLayoutInput = input;
                        memory.stableFitRemainingWidth = remainingWidth;
                        memory.stableFitMaxMinimapScale = minimapScale;
                    }
                    else {
                        memory.stableMinimapLayoutInput = null;
                        memory.stableFitRemainingWidth = 0;
                    }
                }
            }
        }
        // Given:
        // (leaving 2px for the cursor to have space after the last character)
        // viewportColumn = (contentWidth - verticalScrollbarWidth - 2) / typicalHalfwidthCharacterWidth
        // minimapWidth = viewportColumn * minimapCharWidth
        // contentWidth = remainingWidth - minimapWidth
        // What are good values for contentWidth and minimapWidth ?
        // minimapWidth = ((contentWidth - verticalScrollbarWidth - 2) / typicalHalfwidthCharacterWidth) * minimapCharWidth
        // typicalHalfwidthCharacterWidth * minimapWidth = (contentWidth - verticalScrollbarWidth - 2) * minimapCharWidth
        // typicalHalfwidthCharacterWidth * minimapWidth = (remainingWidth - minimapWidth - verticalScrollbarWidth - 2) * minimapCharWidth
        // (typicalHalfwidthCharacterWidth + minimapCharWidth) * minimapWidth = (remainingWidth - verticalScrollbarWidth - 2) * minimapCharWidth
        // minimapWidth = ((remainingWidth - verticalScrollbarWidth - 2) * minimapCharWidth) / (typicalHalfwidthCharacterWidth + minimapCharWidth)
        const minimapMaxWidth = Math.floor(minimapMaxColumn * minimapCharWidth);
        const minimapWidth = Math.min(minimapMaxWidth, Math.max(0, Math.floor(((remainingWidth - verticalScrollbarWidth - 2) * minimapCharWidth) / (typicalHalfwidthCharacterWidth + minimapCharWidth))) + MINIMAP_GUTTER_WIDTH);
        let minimapCanvasInnerWidth = Math.floor(pixelRatio * minimapWidth);
        const minimapCanvasOuterWidth = minimapCanvasInnerWidth / pixelRatio;
        minimapCanvasInnerWidth = Math.floor(minimapCanvasInnerWidth * minimapWidthMultiplier);
        const renderMinimap = (minimapRenderCharacters ? 1 /* RenderMinimap.Text */ : 2 /* RenderMinimap.Blocks */);
        const minimapLeft = (minimapSide === 'left' ? 0 : (outerWidth - minimapWidth - verticalScrollbarWidth));
        return {
            renderMinimap,
            minimapLeft,
            minimapWidth,
            minimapHeightIsEditorHeight,
            minimapIsSampling,
            minimapScale,
            minimapLineHeight,
            minimapCanvasInnerWidth,
            minimapCanvasInnerHeight,
            minimapCanvasOuterWidth,
            minimapCanvasOuterHeight,
        };
    }
    static computeLayout(options, env) {
        const outerWidth = env.outerWidth | 0;
        const outerHeight = env.outerHeight | 0;
        const lineHeight = env.lineHeight | 0;
        const lineNumbersDigitCount = env.lineNumbersDigitCount | 0;
        const typicalHalfwidthCharacterWidth = env.typicalHalfwidthCharacterWidth;
        const maxDigitWidth = env.maxDigitWidth;
        const pixelRatio = env.pixelRatio;
        const viewLineCount = env.viewLineCount;
        const wordWrapOverride2 = options.get(154 /* EditorOption.wordWrapOverride2 */);
        const wordWrapOverride1 = (wordWrapOverride2 === 'inherit' ? options.get(153 /* EditorOption.wordWrapOverride1 */) : wordWrapOverride2);
        const wordWrap = (wordWrapOverride1 === 'inherit' ? options.get(149 /* EditorOption.wordWrap */) : wordWrapOverride1);
        const wordWrapColumn = options.get(152 /* EditorOption.wordWrapColumn */);
        const isDominatedByLongLines = env.isDominatedByLongLines;
        const showGlyphMargin = options.get(66 /* EditorOption.glyphMargin */);
        const showLineNumbers = (options.get(76 /* EditorOption.lineNumbers */).renderType !== 0 /* RenderLineNumbersType.Off */);
        const lineNumbersMinChars = options.get(77 /* EditorOption.lineNumbersMinChars */);
        const scrollBeyondLastLine = options.get(119 /* EditorOption.scrollBeyondLastLine */);
        const padding = options.get(96 /* EditorOption.padding */);
        const minimap = options.get(81 /* EditorOption.minimap */);
        const scrollbar = options.get(117 /* EditorOption.scrollbar */);
        const verticalScrollbarWidth = scrollbar.verticalScrollbarSize;
        const verticalScrollbarHasArrows = scrollbar.verticalHasArrows;
        const scrollbarArrowSize = scrollbar.arrowSize;
        const horizontalScrollbarHeight = scrollbar.horizontalScrollbarSize;
        const folding = options.get(52 /* EditorOption.folding */);
        const showFoldingDecoration = options.get(126 /* EditorOption.showFoldingControls */) !== 'never';
        let lineDecorationsWidth = options.get(74 /* EditorOption.lineDecorationsWidth */);
        if (folding && showFoldingDecoration) {
            lineDecorationsWidth += 16;
        }
        let lineNumbersWidth = 0;
        if (showLineNumbers) {
            const digitCount = Math.max(lineNumbersDigitCount, lineNumbersMinChars);
            lineNumbersWidth = Math.round(digitCount * maxDigitWidth);
        }
        let glyphMarginWidth = 0;
        if (showGlyphMargin) {
            glyphMarginWidth = lineHeight * env.glyphMarginDecorationLaneCount;
        }
        let glyphMarginLeft = 0;
        let lineNumbersLeft = glyphMarginLeft + glyphMarginWidth;
        let decorationsLeft = lineNumbersLeft + lineNumbersWidth;
        let contentLeft = decorationsLeft + lineDecorationsWidth;
        const remainingWidth = outerWidth - glyphMarginWidth - lineNumbersWidth - lineDecorationsWidth;
        let isWordWrapMinified = false;
        let isViewportWrapping = false;
        let wrappingColumn = -1;
        if (options.get(2 /* EditorOption.accessibilitySupport */) === 2 /* AccessibilitySupport.Enabled */ && wordWrapOverride1 === 'inherit' && isDominatedByLongLines) {
            // Force viewport width wrapping if model is dominated by long lines
            isWordWrapMinified = true;
            isViewportWrapping = true;
        }
        else if (wordWrap === 'on' || wordWrap === 'bounded') {
            isViewportWrapping = true;
        }
        else if (wordWrap === 'wordWrapColumn') {
            wrappingColumn = wordWrapColumn;
        }
        const minimapLayout = EditorLayoutInfoComputer._computeMinimapLayout({
            outerWidth: outerWidth,
            outerHeight: outerHeight,
            lineHeight: lineHeight,
            typicalHalfwidthCharacterWidth: typicalHalfwidthCharacterWidth,
            pixelRatio: pixelRatio,
            scrollBeyondLastLine: scrollBeyondLastLine,
            paddingTop: padding.top,
            paddingBottom: padding.bottom,
            minimap: minimap,
            verticalScrollbarWidth: verticalScrollbarWidth,
            viewLineCount: viewLineCount,
            remainingWidth: remainingWidth,
            isViewportWrapping: isViewportWrapping,
        }, env.memory || new ComputeOptionsMemory());
        if (minimapLayout.renderMinimap !== 0 /* RenderMinimap.None */ && minimapLayout.minimapLeft === 0) {
            // the minimap is rendered to the left, so move everything to the right
            glyphMarginLeft += minimapLayout.minimapWidth;
            lineNumbersLeft += minimapLayout.minimapWidth;
            decorationsLeft += minimapLayout.minimapWidth;
            contentLeft += minimapLayout.minimapWidth;
        }
        const contentWidth = remainingWidth - minimapLayout.minimapWidth;
        // (leaving 2px for the cursor to have space after the last character)
        const viewportColumn = Math.max(1, Math.floor((contentWidth - verticalScrollbarWidth - 2) / typicalHalfwidthCharacterWidth));
        const verticalArrowSize = (verticalScrollbarHasArrows ? scrollbarArrowSize : 0);
        if (isViewportWrapping) {
            // compute the actual wrappingColumn
            wrappingColumn = Math.max(1, viewportColumn);
            if (wordWrap === 'bounded') {
                wrappingColumn = Math.min(wrappingColumn, wordWrapColumn);
            }
        }
        return {
            width: outerWidth,
            height: outerHeight,
            glyphMarginLeft: glyphMarginLeft,
            glyphMarginWidth: glyphMarginWidth,
            glyphMarginDecorationLaneCount: env.glyphMarginDecorationLaneCount,
            lineNumbersLeft: lineNumbersLeft,
            lineNumbersWidth: lineNumbersWidth,
            decorationsLeft: decorationsLeft,
            decorationsWidth: lineDecorationsWidth,
            contentLeft: contentLeft,
            contentWidth: contentWidth,
            minimap: minimapLayout,
            viewportColumn: viewportColumn,
            isWordWrapMinified: isWordWrapMinified,
            isViewportWrapping: isViewportWrapping,
            wrappingColumn: wrappingColumn,
            verticalScrollbarWidth: verticalScrollbarWidth,
            horizontalScrollbarHeight: horizontalScrollbarHeight,
            overviewRuler: {
                top: verticalArrowSize,
                width: verticalScrollbarWidth,
                height: (outerHeight - 2 * verticalArrowSize),
                right: 0
            }
        };
    }
}
//#endregion
//#region WrappingStrategy
class WrappingStrategy extends BaseEditorOption {
    constructor() {
        super(156 /* EditorOption.wrappingStrategy */, 'wrappingStrategy', 'simple', {
            'editor.wrappingStrategy': {
                enumDescriptions: [
                    localize(255, "Assumes that all characters are of the same width. This is a fast algorithm that works correctly for monospace fonts and certain scripts (like Latin characters) where glyphs are of equal width."),
                    localize(256, "Delegates wrapping points computation to the browser. This is a slow algorithm, that might cause freezes for large files, but it works correctly in all cases.")
                ],
                type: 'string',
                enum: ['simple', 'advanced'],
                default: 'simple',
                description: localize(257, "Controls the algorithm that computes wrapping points. Note that when in accessibility mode, advanced will be used for the best experience.")
            }
        });
    }
    validate(input) {
        return stringSet(input, 'simple', ['simple', 'advanced']);
    }
    compute(env, options, value) {
        const accessibilitySupport = options.get(2 /* EditorOption.accessibilitySupport */);
        if (accessibilitySupport === 2 /* AccessibilitySupport.Enabled */) {
            // if we know for a fact that a screen reader is attached, we switch our strategy to advanced to
            // help that the editor's wrapping points match the textarea's wrapping points
            return 'advanced';
        }
        return value;
    }
}
//#endregion
//#region lightbulb
var ShowLightbulbIconMode;
(function (ShowLightbulbIconMode) {
    ShowLightbulbIconMode["Off"] = "off";
    ShowLightbulbIconMode["OnCode"] = "onCode";
    ShowLightbulbIconMode["On"] = "on";
})(ShowLightbulbIconMode || (ShowLightbulbIconMode = {}));
class EditorLightbulb extends BaseEditorOption {
    constructor() {
        const defaults = { enabled: ShowLightbulbIconMode.OnCode };
        super(73 /* EditorOption.lightbulb */, 'lightbulb', defaults, {
            'editor.lightbulb.enabled': {
                type: 'string',
                enum: [ShowLightbulbIconMode.Off, ShowLightbulbIconMode.OnCode, ShowLightbulbIconMode.On],
                default: defaults.enabled,
                enumDescriptions: [
                    localize(258, 'Disable the code action menu.'),
                    localize(259, 'Show the code action menu when the cursor is on lines with code.'),
                    localize(260, 'Show the code action menu when the cursor is on lines with code or on empty lines.'),
                ],
                description: localize(261, "Enables the Code Action lightbulb in the editor.")
            }
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            enabled: stringSet(input.enabled, this.defaultValue.enabled, [ShowLightbulbIconMode.Off, ShowLightbulbIconMode.OnCode, ShowLightbulbIconMode.On])
        };
    }
}
class EditorStickyScroll extends BaseEditorOption {
    constructor() {
        const defaults = { enabled: true, maxLineCount: 5, defaultModel: 'outlineModel', scrollWithEditor: true };
        super(131 /* EditorOption.stickyScroll */, 'stickyScroll', defaults, {
            'editor.stickyScroll.enabled': {
                type: 'boolean',
                default: defaults.enabled,
                description: localize(262, "Shows the nested current scopes during the scroll at the top of the editor.")
            },
            'editor.stickyScroll.maxLineCount': {
                type: 'number',
                default: defaults.maxLineCount,
                minimum: 1,
                maximum: 20,
                description: localize(263, "Defines the maximum number of sticky lines to show.")
            },
            'editor.stickyScroll.defaultModel': {
                type: 'string',
                enum: ['outlineModel', 'foldingProviderModel', 'indentationModel'],
                default: defaults.defaultModel,
                description: localize(264, "Defines the model to use for determining which lines to stick. If the outline model does not exist, it will fall back on the folding provider model which falls back on the indentation model. This order is respected in all three cases.")
            },
            'editor.stickyScroll.scrollWithEditor': {
                type: 'boolean',
                default: defaults.scrollWithEditor,
                description: localize(265, "Enable scrolling of Sticky Scroll with the editor's horizontal scrollbar.")
            },
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            enabled: boolean(input.enabled, this.defaultValue.enabled),
            maxLineCount: EditorIntOption.clampedInt(input.maxLineCount, this.defaultValue.maxLineCount, 1, 20),
            defaultModel: stringSet(input.defaultModel, this.defaultValue.defaultModel, ['outlineModel', 'foldingProviderModel', 'indentationModel']),
            scrollWithEditor: boolean(input.scrollWithEditor, this.defaultValue.scrollWithEditor)
        };
    }
}
class EditorInlayHints extends BaseEditorOption {
    constructor() {
        const defaults = { enabled: 'on', fontSize: 0, fontFamily: '', padding: false, maximumLength: 43 };
        super(159 /* EditorOption.inlayHints */, 'inlayHints', defaults, {
            'editor.inlayHints.enabled': {
                type: 'string',
                default: defaults.enabled,
                description: localize(266, "Enables the inlay hints in the editor."),
                enum: ['on', 'onUnlessPressed', 'offUnlessPressed', 'off'],
                markdownEnumDescriptions: [
                    localize(267, "Inlay hints are enabled"),
                    localize(268, "Inlay hints are showing by default and hide when holding {0}", isMacintosh ? `Ctrl+Option` : `Ctrl+Alt`),
                    localize(269, "Inlay hints are hidden by default and show when holding {0}", isMacintosh ? `Ctrl+Option` : `Ctrl+Alt`),
                    localize(270, "Inlay hints are disabled"),
                ],
            },
            'editor.inlayHints.fontSize': {
                type: 'number',
                default: defaults.fontSize,
                markdownDescription: localize(271, "Controls font size of inlay hints in the editor. As default the {0} is used when the configured value is less than {1} or greater than the editor font size.", '`#editor.fontSize#`', '`5`')
            },
            'editor.inlayHints.fontFamily': {
                type: 'string',
                default: defaults.fontFamily,
                markdownDescription: localize(272, "Controls font family of inlay hints in the editor. When set to empty, the {0} is used.", '`#editor.fontFamily#`')
            },
            'editor.inlayHints.padding': {
                type: 'boolean',
                default: defaults.padding,
                description: localize(273, "Enables the padding around the inlay hints in the editor.")
            },
            'editor.inlayHints.maximumLength': {
                type: 'number',
                default: defaults.maximumLength,
                markdownDescription: localize(274, "Maximum overall length of inlay hints, for a single line, before they get truncated by the editor. Set to `0` to never truncate")
            }
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        if (typeof input.enabled === 'boolean') {
            input.enabled = input.enabled ? 'on' : 'off';
        }
        return {
            enabled: stringSet(input.enabled, this.defaultValue.enabled, ['on', 'off', 'offUnlessPressed', 'onUnlessPressed']),
            fontSize: EditorIntOption.clampedInt(input.fontSize, this.defaultValue.fontSize, 0, 100),
            fontFamily: EditorStringOption.string(input.fontFamily, this.defaultValue.fontFamily),
            padding: boolean(input.padding, this.defaultValue.padding),
            maximumLength: EditorIntOption.clampedInt(input.maximumLength, this.defaultValue.maximumLength, 0, Number.MAX_SAFE_INTEGER),
        };
    }
}
//#endregion
//#region lineDecorationsWidth
class EditorLineDecorationsWidth extends BaseEditorOption {
    constructor() {
        super(74 /* EditorOption.lineDecorationsWidth */, 'lineDecorationsWidth', 10);
    }
    validate(input) {
        if (typeof input === 'string' && /^\d+(\.\d+)?ch$/.test(input)) {
            const multiple = parseFloat(input.substring(0, input.length - 2));
            return -multiple; // negative numbers signal a multiple
        }
        else {
            return EditorIntOption.clampedInt(input, this.defaultValue, 0, 1000);
        }
    }
    compute(env, options, value) {
        if (value < 0) {
            // negative numbers signal a multiple
            return EditorIntOption.clampedInt(-value * env.fontInfo.typicalHalfwidthCharacterWidth, this.defaultValue, 0, 1000);
        }
        else {
            return value;
        }
    }
}
//#endregion
//#region lineHeight
class EditorLineHeight extends EditorFloatOption {
    constructor() {
        super(75 /* EditorOption.lineHeight */, 'lineHeight', EDITOR_FONT_DEFAULTS.lineHeight, x => EditorFloatOption.clamp(x, 0, 150), { markdownDescription: localize(275, "Controls the line height. \n - Use 0 to automatically compute the line height from the font size.\n - Values between 0 and 8 will be used as a multiplier with the font size.\n - Values greater than or equal to 8 will be used as effective values.") }, 0, 150);
    }
    compute(env, options, value) {
        // The lineHeight is computed from the fontSize if it is 0.
        // Moreover, the final lineHeight respects the editor zoom level.
        // So take the result from env.fontInfo
        return env.fontInfo.lineHeight;
    }
}
class EditorMinimap extends BaseEditorOption {
    constructor() {
        const defaults = {
            enabled: true,
            size: 'proportional',
            side: 'right',
            showSlider: 'mouseover',
            autohide: 'none',
            renderCharacters: true,
            maxColumn: 120,
            scale: 1,
            showRegionSectionHeaders: true,
            showMarkSectionHeaders: true,
            markSectionHeaderRegex: '\\bMARK:\\s*(?<separator>\-?)\\s*(?<label>.*)$',
            sectionHeaderFontSize: 9,
            sectionHeaderLetterSpacing: 1,
        };
        super(81 /* EditorOption.minimap */, 'minimap', defaults, {
            'editor.minimap.enabled': {
                type: 'boolean',
                default: defaults.enabled,
                description: localize(276, "Controls whether the minimap is shown.")
            },
            'editor.minimap.autohide': {
                type: 'string',
                enum: ['none', 'mouseover', 'scroll'],
                enumDescriptions: [
                    localize(277, "The minimap is always shown."),
                    localize(278, "The minimap is hidden when mouse is not over the minimap and shown when mouse is over the minimap."),
                    localize(279, "The minimap is only shown when the editor is scrolled"),
                ],
                default: defaults.autohide,
                description: localize(280, "Controls whether the minimap is hidden automatically.")
            },
            'editor.minimap.size': {
                type: 'string',
                enum: ['proportional', 'fill', 'fit'],
                enumDescriptions: [
                    localize(281, "The minimap has the same size as the editor contents (and might scroll)."),
                    localize(282, "The minimap will stretch or shrink as necessary to fill the height of the editor (no scrolling)."),
                    localize(283, "The minimap will shrink as necessary to never be larger than the editor (no scrolling)."),
                ],
                default: defaults.size,
                description: localize(284, "Controls the size of the minimap.")
            },
            'editor.minimap.side': {
                type: 'string',
                enum: ['left', 'right'],
                default: defaults.side,
                description: localize(285, "Controls the side where to render the minimap.")
            },
            'editor.minimap.showSlider': {
                type: 'string',
                enum: ['always', 'mouseover'],
                default: defaults.showSlider,
                description: localize(286, "Controls when the minimap slider is shown.")
            },
            'editor.minimap.scale': {
                type: 'number',
                default: defaults.scale,
                minimum: 1,
                maximum: 3,
                enum: [1, 2, 3],
                description: localize(287, "Scale of content drawn in the minimap: 1, 2 or 3.")
            },
            'editor.minimap.renderCharacters': {
                type: 'boolean',
                default: defaults.renderCharacters,
                description: localize(288, "Render the actual characters on a line as opposed to color blocks.")
            },
            'editor.minimap.maxColumn': {
                type: 'number',
                default: defaults.maxColumn,
                description: localize(289, "Limit the width of the minimap to render at most a certain number of columns.")
            },
            'editor.minimap.showRegionSectionHeaders': {
                type: 'boolean',
                default: defaults.showRegionSectionHeaders,
                description: localize(290, "Controls whether named regions are shown as section headers in the minimap.")
            },
            'editor.minimap.showMarkSectionHeaders': {
                type: 'boolean',
                default: defaults.showMarkSectionHeaders,
                description: localize(291, "Controls whether MARK: comments are shown as section headers in the minimap.")
            },
            'editor.minimap.markSectionHeaderRegex': {
                type: 'string',
                default: defaults.markSectionHeaderRegex,
                description: localize(292, "Defines the regular expression used to find section headers in comments. The regex must contain a named match group `label` (written as `(?<label>.+)`) that encapsulates the section header, otherwise it will not work. Optionally you can include another match group named `separator`. Use \\n in the pattern to match multi-line headers."),
            },
            'editor.minimap.sectionHeaderFontSize': {
                type: 'number',
                default: defaults.sectionHeaderFontSize,
                description: localize(293, "Controls the font size of section headers in the minimap.")
            },
            'editor.minimap.sectionHeaderLetterSpacing': {
                type: 'number',
                default: defaults.sectionHeaderLetterSpacing,
                description: localize(294, "Controls the amount of space (in pixels) between characters of section header. This helps the readability of the header in small font sizes.")
            }
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        // Validate mark section header regex
        let markSectionHeaderRegex = this.defaultValue.markSectionHeaderRegex;
        const inputRegex = input.markSectionHeaderRegex;
        if (typeof inputRegex === 'string') {
            try {
                new RegExp(inputRegex, 'd');
                markSectionHeaderRegex = inputRegex;
            }
            catch { }
        }
        return {
            enabled: boolean(input.enabled, this.defaultValue.enabled),
            autohide: stringSet(input.autohide, this.defaultValue.autohide, ['none', 'mouseover', 'scroll']),
            size: stringSet(input.size, this.defaultValue.size, ['proportional', 'fill', 'fit']),
            side: stringSet(input.side, this.defaultValue.side, ['right', 'left']),
            showSlider: stringSet(input.showSlider, this.defaultValue.showSlider, ['always', 'mouseover']),
            renderCharacters: boolean(input.renderCharacters, this.defaultValue.renderCharacters),
            scale: EditorIntOption.clampedInt(input.scale, 1, 1, 3),
            maxColumn: EditorIntOption.clampedInt(input.maxColumn, this.defaultValue.maxColumn, 1, 10000),
            showRegionSectionHeaders: boolean(input.showRegionSectionHeaders, this.defaultValue.showRegionSectionHeaders),
            showMarkSectionHeaders: boolean(input.showMarkSectionHeaders, this.defaultValue.showMarkSectionHeaders),
            markSectionHeaderRegex: markSectionHeaderRegex,
            sectionHeaderFontSize: EditorFloatOption.clamp(EditorFloatOption.float(input.sectionHeaderFontSize, this.defaultValue.sectionHeaderFontSize), 4, 32),
            sectionHeaderLetterSpacing: EditorFloatOption.clamp(EditorFloatOption.float(input.sectionHeaderLetterSpacing, this.defaultValue.sectionHeaderLetterSpacing), 0, 5),
        };
    }
}
//#endregion
//#region multiCursorModifier
function _multiCursorModifierFromString(multiCursorModifier) {
    if (multiCursorModifier === 'ctrlCmd') {
        return (isMacintosh ? 'metaKey' : 'ctrlKey');
    }
    return 'altKey';
}
class EditorPadding extends BaseEditorOption {
    constructor() {
        super(96 /* EditorOption.padding */, 'padding', { top: 0, bottom: 0 }, {
            'editor.padding.top': {
                type: 'number',
                default: 0,
                minimum: 0,
                maximum: 1000,
                description: localize(295, "Controls the amount of space between the top edge of the editor and the first line.")
            },
            'editor.padding.bottom': {
                type: 'number',
                default: 0,
                minimum: 0,
                maximum: 1000,
                description: localize(296, "Controls the amount of space between the bottom edge of the editor and the last line.")
            }
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            top: EditorIntOption.clampedInt(input.top, 0, 0, 1000),
            bottom: EditorIntOption.clampedInt(input.bottom, 0, 0, 1000)
        };
    }
}
class EditorParameterHints extends BaseEditorOption {
    constructor() {
        const defaults = {
            enabled: true,
            cycle: true
        };
        super(98 /* EditorOption.parameterHints */, 'parameterHints', defaults, {
            'editor.parameterHints.enabled': {
                type: 'boolean',
                default: defaults.enabled,
                description: localize(297, "Enables a pop-up that shows parameter documentation and type information as you type.")
            },
            'editor.parameterHints.cycle': {
                type: 'boolean',
                default: defaults.cycle,
                description: localize(298, "Controls whether the parameter hints menu cycles or closes when reaching the end of the list.")
            },
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            enabled: boolean(input.enabled, this.defaultValue.enabled),
            cycle: boolean(input.cycle, this.defaultValue.cycle)
        };
    }
}
//#endregion
//#region pixelRatio
class EditorPixelRatio extends ComputedEditorOption {
    constructor() {
        super(163 /* EditorOption.pixelRatio */, 1);
    }
    compute(env, options, _) {
        return env.pixelRatio;
    }
}
//#endregion
//#region
class PlaceholderOption extends BaseEditorOption {
    constructor() {
        super(100 /* EditorOption.placeholder */, 'placeholder', undefined);
    }
    validate(input) {
        if (typeof input === 'undefined') {
            return this.defaultValue;
        }
        if (typeof input === 'string') {
            return input;
        }
        return this.defaultValue;
    }
}
class EditorQuickSuggestions extends BaseEditorOption {
    constructor() {
        const defaults = {
            other: 'on',
            comments: 'off',
            strings: 'off'
        };
        const types = [
            { type: 'boolean' },
            {
                type: 'string',
                enum: ['on', 'inline', 'off'],
                enumDescriptions: [localize(299, "Quick suggestions show inside the suggest widget"), localize(300, "Quick suggestions show as ghost text"), localize(301, "Quick suggestions are disabled")]
            }
        ];
        super(102 /* EditorOption.quickSuggestions */, 'quickSuggestions', defaults, {
            type: 'object',
            additionalProperties: false,
            properties: {
                strings: {
                    anyOf: types,
                    default: defaults.strings,
                    description: localize(302, "Enable quick suggestions inside strings.")
                },
                comments: {
                    anyOf: types,
                    default: defaults.comments,
                    description: localize(303, "Enable quick suggestions inside comments.")
                },
                other: {
                    anyOf: types,
                    default: defaults.other,
                    description: localize(304, "Enable quick suggestions outside of strings and comments.")
                },
            },
            default: defaults,
            markdownDescription: localize(305, "Controls whether suggestions should automatically show up while typing. This can be controlled for typing in comments, strings, and other code. Quick suggestion can be configured to show as ghost text or with the suggest widget. Also be aware of the {0}-setting which controls if suggestions are triggered by special characters.", '`#editor.suggestOnTriggerCharacters#`')
        });
        this.defaultValue = defaults;
    }
    validate(input) {
        if (typeof input === 'boolean') {
            // boolean -> all on/off
            const value = input ? 'on' : 'off';
            return { comments: value, strings: value, other: value };
        }
        if (!input || typeof input !== 'object') {
            // invalid object
            return this.defaultValue;
        }
        const { other, comments, strings } = input;
        const allowedValues = ['on', 'inline', 'off'];
        let validatedOther;
        let validatedComments;
        let validatedStrings;
        if (typeof other === 'boolean') {
            validatedOther = other ? 'on' : 'off';
        }
        else {
            validatedOther = stringSet(other, this.defaultValue.other, allowedValues);
        }
        if (typeof comments === 'boolean') {
            validatedComments = comments ? 'on' : 'off';
        }
        else {
            validatedComments = stringSet(comments, this.defaultValue.comments, allowedValues);
        }
        if (typeof strings === 'boolean') {
            validatedStrings = strings ? 'on' : 'off';
        }
        else {
            validatedStrings = stringSet(strings, this.defaultValue.strings, allowedValues);
        }
        return {
            other: validatedOther,
            comments: validatedComments,
            strings: validatedStrings
        };
    }
}
class EditorRenderLineNumbersOption extends BaseEditorOption {
    constructor() {
        super(76 /* EditorOption.lineNumbers */, 'lineNumbers', { renderType: 1 /* RenderLineNumbersType.On */, renderFn: null }, {
            type: 'string',
            enum: ['off', 'on', 'relative', 'interval'],
            enumDescriptions: [
                localize(306, "Line numbers are not rendered."),
                localize(307, "Line numbers are rendered as absolute number."),
                localize(308, "Line numbers are rendered as distance in lines to cursor position."),
                localize(309, "Line numbers are rendered every 10 lines.")
            ],
            default: 'on',
            description: localize(310, "Controls the display of line numbers.")
        });
    }
    validate(lineNumbers) {
        let renderType = this.defaultValue.renderType;
        let renderFn = this.defaultValue.renderFn;
        if (typeof lineNumbers !== 'undefined') {
            if (typeof lineNumbers === 'function') {
                renderType = 4 /* RenderLineNumbersType.Custom */;
                renderFn = lineNumbers;
            }
            else if (lineNumbers === 'interval') {
                renderType = 3 /* RenderLineNumbersType.Interval */;
            }
            else if (lineNumbers === 'relative') {
                renderType = 2 /* RenderLineNumbersType.Relative */;
            }
            else if (lineNumbers === 'on') {
                renderType = 1 /* RenderLineNumbersType.On */;
            }
            else {
                renderType = 0 /* RenderLineNumbersType.Off */;
            }
        }
        return {
            renderType,
            renderFn
        };
    }
}
//#endregion
//#region renderValidationDecorations
/**
 * @internal
 */
function filterValidationDecorations(options) {
    const renderValidationDecorations = options.get(112 /* EditorOption.renderValidationDecorations */);
    if (renderValidationDecorations === 'editable') {
        return options.get(104 /* EditorOption.readOnly */);
    }
    return renderValidationDecorations === 'on' ? false : true;
}
//#endregion
//#region filterFontDecorations
/**
 * @internal
 */
function filterFontDecorations(options) {
    return !options.get(172 /* EditorOption.effectiveAllowVariableFonts */);
}
class EditorRulers extends BaseEditorOption {
    constructor() {
        const defaults = [];
        const columnSchema = { type: 'number', description: localize(311, "Number of monospace characters at which this editor ruler will render.") };
        super(116 /* EditorOption.rulers */, 'rulers', defaults, {
            type: 'array',
            items: {
                anyOf: [
                    columnSchema,
                    {
                        type: [
                            'object'
                        ],
                        properties: {
                            column: columnSchema,
                            color: {
                                type: 'string',
                                description: localize(312, "Color of this editor ruler."),
                                format: 'color-hex'
                            }
                        }
                    }
                ]
            },
            default: defaults,
            description: localize(313, "Render vertical rulers after a certain number of monospace characters. Use multiple values for multiple rulers. No rulers are drawn if array is empty.")
        });
    }
    validate(input) {
        if (Array.isArray(input)) {
            const rulers = [];
            for (const _element of input) {
                if (typeof _element === 'number') {
                    rulers.push({
                        column: EditorIntOption.clampedInt(_element, 0, 0, 10000),
                        color: null
                    });
                }
                else if (_element && typeof _element === 'object') {
                    const element = _element;
                    rulers.push({
                        column: EditorIntOption.clampedInt(element.column, 0, 0, 10000),
                        color: element.color
                    });
                }
            }
            rulers.sort((a, b) => a.column - b.column);
            return rulers;
        }
        return this.defaultValue;
    }
}
//#endregion
//#region readonly
/**
 * Configuration options for readonly message
 */
class ReadonlyMessage extends BaseEditorOption {
    constructor() {
        const defaults = undefined;
        super(105 /* EditorOption.readOnlyMessage */, 'readOnlyMessage', defaults);
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        return _input;
    }
}
function _scrollbarVisibilityFromString(visibility, defaultValue) {
    if (typeof visibility !== 'string') {
        return defaultValue;
    }
    switch (visibility) {
        case 'hidden': return 2 /* ScrollbarVisibility.Hidden */;
        case 'visible': return 3 /* ScrollbarVisibility.Visible */;
        default: return 1 /* ScrollbarVisibility.Auto */;
    }
}
class EditorScrollbar extends BaseEditorOption {
    constructor() {
        const defaults = {
            vertical: 1 /* ScrollbarVisibility.Auto */,
            horizontal: 1 /* ScrollbarVisibility.Auto */,
            arrowSize: 11,
            useShadows: true,
            verticalHasArrows: false,
            horizontalHasArrows: false,
            horizontalScrollbarSize: 12,
            horizontalSliderSize: 12,
            verticalScrollbarSize: 14,
            verticalSliderSize: 14,
            handleMouseWheel: true,
            alwaysConsumeMouseWheel: true,
            scrollByPage: false,
            ignoreHorizontalScrollbarInContentHeight: false,
        };
        super(117 /* EditorOption.scrollbar */, 'scrollbar', defaults, {
            'editor.scrollbar.vertical': {
                type: 'string',
                enum: ['auto', 'visible', 'hidden'],
                enumDescriptions: [
                    localize(314, "The vertical scrollbar will be visible only when necessary."),
                    localize(315, "The vertical scrollbar will always be visible."),
                    localize(316, "The vertical scrollbar will always be hidden."),
                ],
                default: 'auto',
                description: localize(317, "Controls the visibility of the vertical scrollbar.")
            },
            'editor.scrollbar.horizontal': {
                type: 'string',
                enum: ['auto', 'visible', 'hidden'],
                enumDescriptions: [
                    localize(318, "The horizontal scrollbar will be visible only when necessary."),
                    localize(319, "The horizontal scrollbar will always be visible."),
                    localize(320, "The horizontal scrollbar will always be hidden."),
                ],
                default: 'auto',
                description: localize(321, "Controls the visibility of the horizontal scrollbar.")
            },
            'editor.scrollbar.verticalScrollbarSize': {
                type: 'number',
                default: defaults.verticalScrollbarSize,
                description: localize(322, "The width of the vertical scrollbar.")
            },
            'editor.scrollbar.horizontalScrollbarSize': {
                type: 'number',
                default: defaults.horizontalScrollbarSize,
                description: localize(323, "The height of the horizontal scrollbar.")
            },
            'editor.scrollbar.scrollByPage': {
                type: 'boolean',
                default: defaults.scrollByPage,
                description: localize(324, "Controls whether clicks scroll by page or jump to click position.")
            },
            'editor.scrollbar.ignoreHorizontalScrollbarInContentHeight': {
                type: 'boolean',
                default: defaults.ignoreHorizontalScrollbarInContentHeight,
                description: localize(325, "When set, the horizontal scrollbar will not increase the size of the editor's content.")
            }
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        const horizontalScrollbarSize = EditorIntOption.clampedInt(input.horizontalScrollbarSize, this.defaultValue.horizontalScrollbarSize, 0, 1000);
        const verticalScrollbarSize = EditorIntOption.clampedInt(input.verticalScrollbarSize, this.defaultValue.verticalScrollbarSize, 0, 1000);
        return {
            arrowSize: EditorIntOption.clampedInt(input.arrowSize, this.defaultValue.arrowSize, 0, 1000),
            vertical: _scrollbarVisibilityFromString(input.vertical, this.defaultValue.vertical),
            horizontal: _scrollbarVisibilityFromString(input.horizontal, this.defaultValue.horizontal),
            useShadows: boolean(input.useShadows, this.defaultValue.useShadows),
            verticalHasArrows: boolean(input.verticalHasArrows, this.defaultValue.verticalHasArrows),
            horizontalHasArrows: boolean(input.horizontalHasArrows, this.defaultValue.horizontalHasArrows),
            handleMouseWheel: boolean(input.handleMouseWheel, this.defaultValue.handleMouseWheel),
            alwaysConsumeMouseWheel: boolean(input.alwaysConsumeMouseWheel, this.defaultValue.alwaysConsumeMouseWheel),
            horizontalScrollbarSize: horizontalScrollbarSize,
            horizontalSliderSize: EditorIntOption.clampedInt(input.horizontalSliderSize, horizontalScrollbarSize, 0, 1000),
            verticalScrollbarSize: verticalScrollbarSize,
            verticalSliderSize: EditorIntOption.clampedInt(input.verticalSliderSize, verticalScrollbarSize, 0, 1000),
            scrollByPage: boolean(input.scrollByPage, this.defaultValue.scrollByPage),
            ignoreHorizontalScrollbarInContentHeight: boolean(input.ignoreHorizontalScrollbarInContentHeight, this.defaultValue.ignoreHorizontalScrollbarInContentHeight),
        };
    }
}
/**
 * @internal
*/
const inUntrustedWorkspace = 'inUntrustedWorkspace';
/**
 * @internal
 */
const unicodeHighlightConfigKeys = {
    allowedCharacters: 'editor.unicodeHighlight.allowedCharacters',
    invisibleCharacters: 'editor.unicodeHighlight.invisibleCharacters',
    nonBasicASCII: 'editor.unicodeHighlight.nonBasicASCII',
    ambiguousCharacters: 'editor.unicodeHighlight.ambiguousCharacters',
    includeComments: 'editor.unicodeHighlight.includeComments',
    includeStrings: 'editor.unicodeHighlight.includeStrings',
    allowedLocales: 'editor.unicodeHighlight.allowedLocales',
};
class UnicodeHighlight extends BaseEditorOption {
    constructor() {
        const defaults = {
            nonBasicASCII: inUntrustedWorkspace,
            invisibleCharacters: true,
            ambiguousCharacters: true,
            includeComments: inUntrustedWorkspace,
            includeStrings: true,
            allowedCharacters: {},
            allowedLocales: { _os: true, _vscode: true },
        };
        super(142 /* EditorOption.unicodeHighlighting */, 'unicodeHighlight', defaults, {
            [unicodeHighlightConfigKeys.nonBasicASCII]: {
                restricted: true,
                type: ['boolean', 'string'],
                enum: [true, false, inUntrustedWorkspace],
                default: defaults.nonBasicASCII,
                description: localize(326, "Controls whether all non-basic ASCII characters are highlighted. Only characters between U+0020 and U+007E, tab, line-feed and carriage-return are considered basic ASCII.")
            },
            [unicodeHighlightConfigKeys.invisibleCharacters]: {
                restricted: true,
                type: 'boolean',
                default: defaults.invisibleCharacters,
                description: localize(327, "Controls whether characters that just reserve space or have no width at all are highlighted.")
            },
            [unicodeHighlightConfigKeys.ambiguousCharacters]: {
                restricted: true,
                type: 'boolean',
                default: defaults.ambiguousCharacters,
                description: localize(328, "Controls whether characters are highlighted that can be confused with basic ASCII characters, except those that are common in the current user locale.")
            },
            [unicodeHighlightConfigKeys.includeComments]: {
                restricted: true,
                type: ['boolean', 'string'],
                enum: [true, false, inUntrustedWorkspace],
                default: defaults.includeComments,
                description: localize(329, "Controls whether characters in comments should also be subject to Unicode highlighting.")
            },
            [unicodeHighlightConfigKeys.includeStrings]: {
                restricted: true,
                type: ['boolean', 'string'],
                enum: [true, false, inUntrustedWorkspace],
                default: defaults.includeStrings,
                description: localize(330, "Controls whether characters in strings should also be subject to Unicode highlighting.")
            },
            [unicodeHighlightConfigKeys.allowedCharacters]: {
                restricted: true,
                type: 'object',
                default: defaults.allowedCharacters,
                description: localize(331, "Defines allowed characters that are not being highlighted."),
                additionalProperties: {
                    type: 'boolean'
                }
            },
            [unicodeHighlightConfigKeys.allowedLocales]: {
                restricted: true,
                type: 'object',
                additionalProperties: {
                    type: 'boolean'
                },
                default: defaults.allowedLocales,
                description: localize(332, "Unicode characters that are common in allowed locales are not being highlighted.")
            },
        });
    }
    applyUpdate(value, update) {
        let didChange = false;
        if (update.allowedCharacters && value) {
            // Treat allowedCharacters atomically
            if (!equals(value.allowedCharacters, update.allowedCharacters)) {
                value = { ...value, allowedCharacters: update.allowedCharacters };
                didChange = true;
            }
        }
        if (update.allowedLocales && value) {
            // Treat allowedLocales atomically
            if (!equals(value.allowedLocales, update.allowedLocales)) {
                value = { ...value, allowedLocales: update.allowedLocales };
                didChange = true;
            }
        }
        const result = super.applyUpdate(value, update);
        if (didChange) {
            return new ApplyUpdateResult(result.newValue, true);
        }
        return result;
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            nonBasicASCII: primitiveSet(input.nonBasicASCII, inUntrustedWorkspace, [true, false, inUntrustedWorkspace]),
            invisibleCharacters: boolean(input.invisibleCharacters, this.defaultValue.invisibleCharacters),
            ambiguousCharacters: boolean(input.ambiguousCharacters, this.defaultValue.ambiguousCharacters),
            includeComments: primitiveSet(input.includeComments, inUntrustedWorkspace, [true, false, inUntrustedWorkspace]),
            includeStrings: primitiveSet(input.includeStrings, inUntrustedWorkspace, [true, false, inUntrustedWorkspace]),
            allowedCharacters: this.validateBooleanMap(input.allowedCharacters, this.defaultValue.allowedCharacters),
            allowedLocales: this.validateBooleanMap(input.allowedLocales, this.defaultValue.allowedLocales),
        };
    }
    validateBooleanMap(map, defaultValue) {
        if ((typeof map !== 'object') || !map) {
            return defaultValue;
        }
        const result = {};
        for (const [key, value] of Object.entries(map)) {
            if (value === true) {
                result[key] = true;
            }
        }
        return result;
    }
}
/**
 * Configuration options for inline suggestions
 */
class InlineEditorSuggest extends BaseEditorOption {
    constructor() {
        const defaults = {
            enabled: true,
            mode: 'subwordSmart',
            showToolbar: 'onHover',
            suppressSuggestions: false,
            keepOnBlur: false,
            fontFamily: 'default',
            syntaxHighlightingEnabled: true,
            minShowDelay: 0,
            suppressInSnippetMode: true,
            edits: {
                enabled: true,
                showCollapsed: false,
                renderSideBySide: 'auto',
                allowCodeShifting: 'always',
            },
            triggerCommandOnProviderChange: false,
            experimental: {
                suppressInlineSuggestions: '',
                showOnSuggestConflict: 'never',
                emptyResponseInformation: true,
            },
        };
        super(71 /* EditorOption.inlineSuggest */, 'inlineSuggest', defaults, {
            'editor.inlineSuggest.enabled': {
                type: 'boolean',
                default: defaults.enabled,
                description: localize(333, "Controls whether to automatically show inline suggestions in the editor.")
            },
            'editor.inlineSuggest.showToolbar': {
                type: 'string',
                default: defaults.showToolbar,
                enum: ['always', 'onHover', 'never'],
                enumDescriptions: [
                    localize(334, "Show the inline suggestion toolbar whenever an inline suggestion is shown."),
                    localize(335, "Show the inline suggestion toolbar when hovering over an inline suggestion."),
                    localize(336, "Never show the inline suggestion toolbar."),
                ],
                description: localize(337, "Controls when to show the inline suggestion toolbar."),
            },
            'editor.inlineSuggest.syntaxHighlightingEnabled': {
                type: 'boolean',
                default: defaults.syntaxHighlightingEnabled,
                description: localize(338, "Controls whether to show syntax highlighting for inline suggestions in the editor."),
            },
            'editor.inlineSuggest.suppressSuggestions': {
                type: 'boolean',
                default: defaults.suppressSuggestions,
                description: localize(339, "Controls how inline suggestions interact with the suggest widget. If enabled, the suggest widget is not shown automatically when inline suggestions are available.")
            },
            'editor.inlineSuggest.suppressInSnippetMode': {
                type: 'boolean',
                default: defaults.suppressInSnippetMode,
                description: localize(340, "Controls whether inline suggestions are suppressed when in snippet mode."),
            },
            'editor.inlineSuggest.minShowDelay': {
                type: 'number',
                default: 0,
                minimum: 0,
                maximum: 10000,
                description: localize(341, "Controls the minimal delay in milliseconds after which inline suggestions are shown after typing."),
            },
            'editor.inlineSuggest.experimental.suppressInlineSuggestions': {
                type: 'string',
                default: defaults.experimental.suppressInlineSuggestions,
                tags: ['experimental'],
                description: localize(342, "Suppresses inline completions for specified extension IDs -- comma separated."),
                experiment: {
                    mode: 'auto'
                }
            },
            'editor.inlineSuggest.experimental.emptyResponseInformation': {
                type: 'boolean',
                default: defaults.experimental.emptyResponseInformation,
                tags: ['experimental'],
                description: localize(343, "Controls whether to send request information from the inline suggestion provider."),
                experiment: {
                    mode: 'auto'
                }
            },
            'editor.inlineSuggest.triggerCommandOnProviderChange': {
                type: 'boolean',
                default: defaults.triggerCommandOnProviderChange,
                tags: ['experimental'],
                description: localize(344, "Controls whether to trigger a command when the inline suggestion provider changes."),
                experiment: {
                    mode: 'auto'
                }
            },
            'editor.inlineSuggest.experimental.showOnSuggestConflict': {
                type: 'string',
                default: defaults.experimental.showOnSuggestConflict,
                tags: ['experimental'],
                enum: ['always', 'never', 'whenSuggestListIsIncomplete'],
                description: localize(345, "Controls whether to show inline suggestions when there is a suggest conflict."),
                experiment: {
                    mode: 'auto'
                }
            },
            'editor.inlineSuggest.fontFamily': {
                type: 'string',
                default: defaults.fontFamily,
                description: localize(346, "Controls the font family of the inline suggestions.")
            },
            'editor.inlineSuggest.edits.allowCodeShifting': {
                type: 'string',
                default: defaults.edits.allowCodeShifting,
                description: localize(347, "Controls whether showing a suggestion will shift the code to make space for the suggestion inline."),
                enum: ['always', 'horizontal', 'never'],
                tags: ['nextEditSuggestions']
            },
            'editor.inlineSuggest.edits.renderSideBySide': {
                type: 'string',
                default: defaults.edits.renderSideBySide,
                description: localize(348, "Controls whether larger suggestions can be shown side by side."),
                enum: ['auto', 'never'],
                enumDescriptions: [
                    localize(349, "Larger suggestions will show side by side if there is enough space, otherwise they will be shown below."),
                    localize(350, "Larger suggestions are never shown side by side and will always be shown below."),
                ],
                tags: ['nextEditSuggestions']
            },
            'editor.inlineSuggest.edits.showCollapsed': {
                type: 'boolean',
                default: defaults.edits.showCollapsed,
                description: localize(351, "Controls whether the suggestion will show as collapsed until jumping to it."),
                tags: ['nextEditSuggestions']
            },
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            enabled: boolean(input.enabled, this.defaultValue.enabled),
            mode: stringSet(input.mode, this.defaultValue.mode, ['prefix', 'subword', 'subwordSmart']),
            showToolbar: stringSet(input.showToolbar, this.defaultValue.showToolbar, ['always', 'onHover', 'never']),
            suppressSuggestions: boolean(input.suppressSuggestions, this.defaultValue.suppressSuggestions),
            keepOnBlur: boolean(input.keepOnBlur, this.defaultValue.keepOnBlur),
            fontFamily: EditorStringOption.string(input.fontFamily, this.defaultValue.fontFamily),
            syntaxHighlightingEnabled: boolean(input.syntaxHighlightingEnabled, this.defaultValue.syntaxHighlightingEnabled),
            minShowDelay: EditorIntOption.clampedInt(input.minShowDelay, 0, 0, 10000),
            suppressInSnippetMode: boolean(input.suppressInSnippetMode, this.defaultValue.suppressInSnippetMode),
            edits: this._validateEdits(input.edits),
            triggerCommandOnProviderChange: boolean(input.triggerCommandOnProviderChange, this.defaultValue.triggerCommandOnProviderChange),
            experimental: this._validateExperimental(input.experimental),
        };
    }
    _validateEdits(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue.edits;
        }
        const input = _input;
        return {
            enabled: boolean(input.enabled, this.defaultValue.edits.enabled),
            showCollapsed: boolean(input.showCollapsed, this.defaultValue.edits.showCollapsed),
            allowCodeShifting: stringSet(input.allowCodeShifting, this.defaultValue.edits.allowCodeShifting, ['always', 'horizontal', 'never']),
            renderSideBySide: stringSet(input.renderSideBySide, this.defaultValue.edits.renderSideBySide, ['never', 'auto']),
        };
    }
    _validateExperimental(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue.experimental;
        }
        const input = _input;
        return {
            suppressInlineSuggestions: EditorStringOption.string(input.suppressInlineSuggestions, this.defaultValue.experimental.suppressInlineSuggestions),
            showOnSuggestConflict: stringSet(input.showOnSuggestConflict, this.defaultValue.experimental.showOnSuggestConflict, ['always', 'never', 'whenSuggestListIsIncomplete']),
            emptyResponseInformation: boolean(input.emptyResponseInformation, this.defaultValue.experimental.emptyResponseInformation),
        };
    }
}
/**
 * Configuration options for inline suggestions
 */
class BracketPairColorization extends BaseEditorOption {
    constructor() {
        const defaults = {
            enabled: EDITOR_MODEL_DEFAULTS.bracketPairColorizationOptions.enabled,
            independentColorPoolPerBracketType: EDITOR_MODEL_DEFAULTS.bracketPairColorizationOptions.independentColorPoolPerBracketType,
        };
        super(21 /* EditorOption.bracketPairColorization */, 'bracketPairColorization', defaults, {
            'editor.bracketPairColorization.enabled': {
                type: 'boolean',
                default: defaults.enabled,
                markdownDescription: localize(352, "Controls whether bracket pair colorization is enabled or not. Use {0} to override the bracket highlight colors.", '`#workbench.colorCustomizations#`')
            },
            'editor.bracketPairColorization.independentColorPoolPerBracketType': {
                type: 'boolean',
                default: defaults.independentColorPoolPerBracketType,
                description: localize(353, "Controls whether each bracket type has its own independent color pool.")
            },
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            enabled: boolean(input.enabled, this.defaultValue.enabled),
            independentColorPoolPerBracketType: boolean(input.independentColorPoolPerBracketType, this.defaultValue.independentColorPoolPerBracketType),
        };
    }
}
/**
 * Configuration options for inline suggestions
 */
class GuideOptions extends BaseEditorOption {
    constructor() {
        const defaults = {
            bracketPairs: false,
            bracketPairsHorizontal: 'active',
            highlightActiveBracketPair: true,
            indentation: true,
            highlightActiveIndentation: true
        };
        super(22 /* EditorOption.guides */, 'guides', defaults, {
            'editor.guides.bracketPairs': {
                type: ['boolean', 'string'],
                enum: [true, 'active', false],
                enumDescriptions: [
                    localize(354, "Enables bracket pair guides."),
                    localize(355, "Enables bracket pair guides only for the active bracket pair."),
                    localize(356, "Disables bracket pair guides."),
                ],
                default: defaults.bracketPairs,
                description: localize(357, "Controls whether bracket pair guides are enabled or not.")
            },
            'editor.guides.bracketPairsHorizontal': {
                type: ['boolean', 'string'],
                enum: [true, 'active', false],
                enumDescriptions: [
                    localize(358, "Enables horizontal guides as addition to vertical bracket pair guides."),
                    localize(359, "Enables horizontal guides only for the active bracket pair."),
                    localize(360, "Disables horizontal bracket pair guides."),
                ],
                default: defaults.bracketPairsHorizontal,
                description: localize(361, "Controls whether horizontal bracket pair guides are enabled or not.")
            },
            'editor.guides.highlightActiveBracketPair': {
                type: 'boolean',
                default: defaults.highlightActiveBracketPair,
                description: localize(362, "Controls whether the editor should highlight the active bracket pair.")
            },
            'editor.guides.indentation': {
                type: 'boolean',
                default: defaults.indentation,
                description: localize(363, "Controls whether the editor should render indent guides.")
            },
            'editor.guides.highlightActiveIndentation': {
                type: ['boolean', 'string'],
                enum: [true, 'always', false],
                enumDescriptions: [
                    localize(364, "Highlights the active indent guide."),
                    localize(365, "Highlights the active indent guide even if bracket guides are highlighted."),
                    localize(366, "Do not highlight the active indent guide."),
                ],
                default: defaults.highlightActiveIndentation,
                description: localize(367, "Controls whether the editor should highlight the active indent guide.")
            }
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            bracketPairs: primitiveSet(input.bracketPairs, this.defaultValue.bracketPairs, [true, false, 'active']),
            bracketPairsHorizontal: primitiveSet(input.bracketPairsHorizontal, this.defaultValue.bracketPairsHorizontal, [true, false, 'active']),
            highlightActiveBracketPair: boolean(input.highlightActiveBracketPair, this.defaultValue.highlightActiveBracketPair),
            indentation: boolean(input.indentation, this.defaultValue.indentation),
            highlightActiveIndentation: primitiveSet(input.highlightActiveIndentation, this.defaultValue.highlightActiveIndentation, [true, false, 'always']),
        };
    }
}
function primitiveSet(value, defaultValue, allowedValues) {
    const idx = allowedValues.indexOf(value);
    if (idx === -1) {
        return defaultValue;
    }
    return allowedValues[idx];
}
class EditorSuggest extends BaseEditorOption {
    constructor() {
        const defaults = {
            insertMode: 'insert',
            filterGraceful: true,
            snippetsPreventQuickSuggestions: false,
            localityBonus: false,
            shareSuggestSelections: false,
            selectionMode: 'always',
            showIcons: true,
            showStatusBar: false,
            preview: false,
            previewMode: 'subwordSmart',
            showInlineDetails: true,
            showMethods: true,
            showFunctions: true,
            showConstructors: true,
            showDeprecated: true,
            matchOnWordStartOnly: true,
            showFields: true,
            showVariables: true,
            showClasses: true,
            showStructs: true,
            showInterfaces: true,
            showModules: true,
            showProperties: true,
            showEvents: true,
            showOperators: true,
            showUnits: true,
            showValues: true,
            showConstants: true,
            showEnums: true,
            showEnumMembers: true,
            showKeywords: true,
            showWords: true,
            showColors: true,
            showFiles: true,
            showReferences: true,
            showFolders: true,
            showTypeParameters: true,
            showSnippets: true,
            showUsers: true,
            showIssues: true,
        };
        super(134 /* EditorOption.suggest */, 'suggest', defaults, {
            'editor.suggest.insertMode': {
                type: 'string',
                enum: ['insert', 'replace'],
                enumDescriptions: [
                    localize(368, "Insert suggestion without overwriting text right of the cursor."),
                    localize(369, "Insert suggestion and overwrite text right of the cursor."),
                ],
                default: defaults.insertMode,
                description: localize(370, "Controls whether words are overwritten when accepting completions. Note that this depends on extensions opting into this feature.")
            },
            'editor.suggest.filterGraceful': {
                type: 'boolean',
                default: defaults.filterGraceful,
                description: localize(371, "Controls whether filtering and sorting suggestions accounts for small typos.")
            },
            'editor.suggest.localityBonus': {
                type: 'boolean',
                default: defaults.localityBonus,
                description: localize(372, "Controls whether sorting favors words that appear close to the cursor.")
            },
            'editor.suggest.shareSuggestSelections': {
                type: 'boolean',
                default: defaults.shareSuggestSelections,
                markdownDescription: localize(373, "Controls whether remembered suggestion selections are shared between multiple workspaces and windows (needs `#editor.suggestSelection#`).")
            },
            'editor.suggest.selectionMode': {
                type: 'string',
                enum: ['always', 'never', 'whenTriggerCharacter', 'whenQuickSuggestion'],
                enumDescriptions: [
                    localize(374, "Always select a suggestion when automatically triggering IntelliSense."),
                    localize(375, "Never select a suggestion when automatically triggering IntelliSense."),
                    localize(376, "Select a suggestion only when triggering IntelliSense from a trigger character."),
                    localize(377, "Select a suggestion only when triggering IntelliSense as you type."),
                ],
                default: defaults.selectionMode,
                markdownDescription: localize(378, "Controls whether a suggestion is selected when the widget shows. Note that this only applies to automatically triggered suggestions ({0} and {1}) and that a suggestion is always selected when explicitly invoked, e.g via `Ctrl+Space`.", '`#editor.quickSuggestions#`', '`#editor.suggestOnTriggerCharacters#`')
            },
            'editor.suggest.snippetsPreventQuickSuggestions': {
                type: 'boolean',
                default: defaults.snippetsPreventQuickSuggestions,
                description: localize(379, "Controls whether an active snippet prevents quick suggestions.")
            },
            'editor.suggest.showIcons': {
                type: 'boolean',
                default: defaults.showIcons,
                description: localize(380, "Controls whether to show or hide icons in suggestions.")
            },
            'editor.suggest.showStatusBar': {
                type: 'boolean',
                default: defaults.showStatusBar,
                description: localize(381, "Controls the visibility of the status bar at the bottom of the suggest widget.")
            },
            'editor.suggest.preview': {
                type: 'boolean',
                default: defaults.preview,
                description: localize(382, "Controls whether to preview the suggestion outcome in the editor.")
            },
            'editor.suggest.showInlineDetails': {
                type: 'boolean',
                default: defaults.showInlineDetails,
                description: localize(383, "Controls whether suggest details show inline with the label or only in the details widget.")
            },
            'editor.suggest.maxVisibleSuggestions': {
                type: 'number',
                deprecationMessage: localize(384, "This setting is deprecated. The suggest widget can now be resized."),
            },
            'editor.suggest.filteredTypes': {
                type: 'object',
                deprecationMessage: localize(385, "This setting is deprecated, please use separate settings like 'editor.suggest.showKeywords' or 'editor.suggest.showSnippets' instead.")
            },
            'editor.suggest.showMethods': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(386, "When enabled IntelliSense shows `method`-suggestions.")
            },
            'editor.suggest.showFunctions': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(387, "When enabled IntelliSense shows `function`-suggestions.")
            },
            'editor.suggest.showConstructors': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(388, "When enabled IntelliSense shows `constructor`-suggestions.")
            },
            'editor.suggest.showDeprecated': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(389, "When enabled IntelliSense shows `deprecated`-suggestions.")
            },
            'editor.suggest.matchOnWordStartOnly': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(390, "When enabled IntelliSense filtering requires that the first character matches on a word start. For example, `c` on `Console` or `WebContext` but _not_ on `description`. When disabled IntelliSense will show more results but still sorts them by match quality.")
            },
            'editor.suggest.showFields': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(391, "When enabled IntelliSense shows `field`-suggestions.")
            },
            'editor.suggest.showVariables': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(392, "When enabled IntelliSense shows `variable`-suggestions.")
            },
            'editor.suggest.showClasses': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(393, "When enabled IntelliSense shows `class`-suggestions.")
            },
            'editor.suggest.showStructs': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(394, "When enabled IntelliSense shows `struct`-suggestions.")
            },
            'editor.suggest.showInterfaces': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(395, "When enabled IntelliSense shows `interface`-suggestions.")
            },
            'editor.suggest.showModules': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(396, "When enabled IntelliSense shows `module`-suggestions.")
            },
            'editor.suggest.showProperties': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(397, "When enabled IntelliSense shows `property`-suggestions.")
            },
            'editor.suggest.showEvents': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(398, "When enabled IntelliSense shows `event`-suggestions.")
            },
            'editor.suggest.showOperators': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(399, "When enabled IntelliSense shows `operator`-suggestions.")
            },
            'editor.suggest.showUnits': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(400, "When enabled IntelliSense shows `unit`-suggestions.")
            },
            'editor.suggest.showValues': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(401, "When enabled IntelliSense shows `value`-suggestions.")
            },
            'editor.suggest.showConstants': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(402, "When enabled IntelliSense shows `constant`-suggestions.")
            },
            'editor.suggest.showEnums': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(403, "When enabled IntelliSense shows `enum`-suggestions.")
            },
            'editor.suggest.showEnumMembers': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(404, "When enabled IntelliSense shows `enumMember`-suggestions.")
            },
            'editor.suggest.showKeywords': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(405, "When enabled IntelliSense shows `keyword`-suggestions.")
            },
            'editor.suggest.showWords': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(406, "When enabled IntelliSense shows `text`-suggestions.")
            },
            'editor.suggest.showColors': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(407, "When enabled IntelliSense shows `color`-suggestions.")
            },
            'editor.suggest.showFiles': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(408, "When enabled IntelliSense shows `file`-suggestions.")
            },
            'editor.suggest.showReferences': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(409, "When enabled IntelliSense shows `reference`-suggestions.")
            },
            'editor.suggest.showCustomcolors': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(410, "When enabled IntelliSense shows `customcolor`-suggestions.")
            },
            'editor.suggest.showFolders': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(411, "When enabled IntelliSense shows `folder`-suggestions.")
            },
            'editor.suggest.showTypeParameters': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(412, "When enabled IntelliSense shows `typeParameter`-suggestions.")
            },
            'editor.suggest.showSnippets': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(413, "When enabled IntelliSense shows `snippet`-suggestions.")
            },
            'editor.suggest.showUsers': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(414, "When enabled IntelliSense shows `user`-suggestions.")
            },
            'editor.suggest.showIssues': {
                type: 'boolean',
                default: true,
                markdownDescription: localize(415, "When enabled IntelliSense shows `issues`-suggestions.")
            }
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            insertMode: stringSet(input.insertMode, this.defaultValue.insertMode, ['insert', 'replace']),
            filterGraceful: boolean(input.filterGraceful, this.defaultValue.filterGraceful),
            snippetsPreventQuickSuggestions: boolean(input.snippetsPreventQuickSuggestions, this.defaultValue.filterGraceful),
            localityBonus: boolean(input.localityBonus, this.defaultValue.localityBonus),
            shareSuggestSelections: boolean(input.shareSuggestSelections, this.defaultValue.shareSuggestSelections),
            selectionMode: stringSet(input.selectionMode, this.defaultValue.selectionMode, ['always', 'never', 'whenQuickSuggestion', 'whenTriggerCharacter']),
            showIcons: boolean(input.showIcons, this.defaultValue.showIcons),
            showStatusBar: boolean(input.showStatusBar, this.defaultValue.showStatusBar),
            preview: boolean(input.preview, this.defaultValue.preview),
            previewMode: stringSet(input.previewMode, this.defaultValue.previewMode, ['prefix', 'subword', 'subwordSmart']),
            showInlineDetails: boolean(input.showInlineDetails, this.defaultValue.showInlineDetails),
            showMethods: boolean(input.showMethods, this.defaultValue.showMethods),
            showFunctions: boolean(input.showFunctions, this.defaultValue.showFunctions),
            showConstructors: boolean(input.showConstructors, this.defaultValue.showConstructors),
            showDeprecated: boolean(input.showDeprecated, this.defaultValue.showDeprecated),
            matchOnWordStartOnly: boolean(input.matchOnWordStartOnly, this.defaultValue.matchOnWordStartOnly),
            showFields: boolean(input.showFields, this.defaultValue.showFields),
            showVariables: boolean(input.showVariables, this.defaultValue.showVariables),
            showClasses: boolean(input.showClasses, this.defaultValue.showClasses),
            showStructs: boolean(input.showStructs, this.defaultValue.showStructs),
            showInterfaces: boolean(input.showInterfaces, this.defaultValue.showInterfaces),
            showModules: boolean(input.showModules, this.defaultValue.showModules),
            showProperties: boolean(input.showProperties, this.defaultValue.showProperties),
            showEvents: boolean(input.showEvents, this.defaultValue.showEvents),
            showOperators: boolean(input.showOperators, this.defaultValue.showOperators),
            showUnits: boolean(input.showUnits, this.defaultValue.showUnits),
            showValues: boolean(input.showValues, this.defaultValue.showValues),
            showConstants: boolean(input.showConstants, this.defaultValue.showConstants),
            showEnums: boolean(input.showEnums, this.defaultValue.showEnums),
            showEnumMembers: boolean(input.showEnumMembers, this.defaultValue.showEnumMembers),
            showKeywords: boolean(input.showKeywords, this.defaultValue.showKeywords),
            showWords: boolean(input.showWords, this.defaultValue.showWords),
            showColors: boolean(input.showColors, this.defaultValue.showColors),
            showFiles: boolean(input.showFiles, this.defaultValue.showFiles),
            showReferences: boolean(input.showReferences, this.defaultValue.showReferences),
            showFolders: boolean(input.showFolders, this.defaultValue.showFolders),
            showTypeParameters: boolean(input.showTypeParameters, this.defaultValue.showTypeParameters),
            showSnippets: boolean(input.showSnippets, this.defaultValue.showSnippets),
            showUsers: boolean(input.showUsers, this.defaultValue.showUsers),
            showIssues: boolean(input.showIssues, this.defaultValue.showIssues),
        };
    }
}
class SmartSelect extends BaseEditorOption {
    constructor() {
        super(129 /* EditorOption.smartSelect */, 'smartSelect', {
            selectLeadingAndTrailingWhitespace: true,
            selectSubwords: true,
        }, {
            'editor.smartSelect.selectLeadingAndTrailingWhitespace': {
                description: localize(416, "Whether leading and trailing whitespace should always be selected."),
                default: true,
                type: 'boolean'
            },
            'editor.smartSelect.selectSubwords': {
                description: localize(417, "Whether subwords (like 'foo' in 'fooBar' or 'foo_bar') should be selected."),
                default: true,
                type: 'boolean'
            }
        });
    }
    validate(input) {
        if (!input || typeof input !== 'object') {
            return this.defaultValue;
        }
        return {
            selectLeadingAndTrailingWhitespace: boolean(input.selectLeadingAndTrailingWhitespace, this.defaultValue.selectLeadingAndTrailingWhitespace),
            selectSubwords: boolean(input.selectSubwords, this.defaultValue.selectSubwords),
        };
    }
}
//#endregion
//#region wordSegmenterLocales
/**
 * Locales used for segmenting lines into words when doing word related navigations or operations.
 *
 * Specify the BCP 47 language tag of the word you wish to recognize (e.g., ja, zh-CN, zh-Hant-TW, etc.).
 */
class WordSegmenterLocales extends BaseEditorOption {
    constructor() {
        const defaults = [];
        super(147 /* EditorOption.wordSegmenterLocales */, 'wordSegmenterLocales', defaults, {
            anyOf: [
                {
                    type: 'string',
                }, {
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                }
            ],
            description: localize(418, "Locales to be used for word segmentation when doing word related navigations or operations. Specify the BCP 47 language tag of the word you wish to recognize (e.g., ja, zh-CN, zh-Hant-TW, etc.)."),
            type: 'array',
            items: {
                type: 'string',
            },
            default: defaults,
        });
    }
    validate(input) {
        if (typeof input === 'string') {
            input = [input];
        }
        if (Array.isArray(input)) {
            const validLocales = [];
            for (const locale of input) {
                if (typeof locale === 'string') {
                    try {
                        if (Intl.Segmenter.supportedLocalesOf(locale).length > 0) {
                            validLocales.push(locale);
                        }
                    }
                    catch {
                        // ignore invalid locales
                    }
                }
            }
            return validLocales;
        }
        return this.defaultValue;
    }
}
class WrappingIndentOption extends BaseEditorOption {
    constructor() {
        super(155 /* EditorOption.wrappingIndent */, 'wrappingIndent', 1 /* WrappingIndent.Same */, {
            'editor.wrappingIndent': {
                type: 'string',
                enum: ['none', 'same', 'indent', 'deepIndent'],
                enumDescriptions: [
                    localize(419, "No indentation. Wrapped lines begin at column 1."),
                    localize(420, "Wrapped lines get the same indentation as the parent."),
                    localize(421, "Wrapped lines get +1 indentation toward the parent."),
                    localize(422, "Wrapped lines get +2 indentation toward the parent."),
                ],
                description: localize(423, "Controls the indentation of wrapped lines."),
                default: 'same'
            }
        });
    }
    validate(input) {
        switch (input) {
            case 'none': return 0 /* WrappingIndent.None */;
            case 'same': return 1 /* WrappingIndent.Same */;
            case 'indent': return 2 /* WrappingIndent.Indent */;
            case 'deepIndent': return 3 /* WrappingIndent.DeepIndent */;
        }
        return 1 /* WrappingIndent.Same */;
    }
    compute(env, options, value) {
        const accessibilitySupport = options.get(2 /* EditorOption.accessibilitySupport */);
        if (accessibilitySupport === 2 /* AccessibilitySupport.Enabled */) {
            // if we know for a fact that a screen reader is attached, we use no indent wrapping to
            // help that the editor's wrapping points match the textarea's wrapping points
            return 0 /* WrappingIndent.None */;
        }
        return value;
    }
}
class EditorWrappingInfoComputer extends ComputedEditorOption {
    constructor() {
        super(166 /* EditorOption.wrappingInfo */, {
            isDominatedByLongLines: false,
            isWordWrapMinified: false,
            isViewportWrapping: false,
            wrappingColumn: -1
        });
    }
    compute(env, options, _) {
        const layoutInfo = options.get(165 /* EditorOption.layoutInfo */);
        return {
            isDominatedByLongLines: env.isDominatedByLongLines,
            isWordWrapMinified: layoutInfo.isWordWrapMinified,
            isViewportWrapping: layoutInfo.isViewportWrapping,
            wrappingColumn: layoutInfo.wrappingColumn,
        };
    }
}
class EditorDropIntoEditor extends BaseEditorOption {
    constructor() {
        const defaults = { enabled: true, showDropSelector: 'afterDrop' };
        super(43 /* EditorOption.dropIntoEditor */, 'dropIntoEditor', defaults, {
            'editor.dropIntoEditor.enabled': {
                type: 'boolean',
                default: defaults.enabled,
                markdownDescription: localize(424, "Controls whether you can drag and drop a file into a text editor by holding down the `Shift` key (instead of opening the file in an editor)."),
            },
            'editor.dropIntoEditor.showDropSelector': {
                type: 'string',
                markdownDescription: localize(425, "Controls if a widget is shown when dropping files into the editor. This widget lets you control how the file is dropped."),
                enum: [
                    'afterDrop',
                    'never'
                ],
                enumDescriptions: [
                    localize(426, "Show the drop selector widget after a file is dropped into the editor."),
                    localize(427, "Never show the drop selector widget. Instead the default drop provider is always used."),
                ],
                default: 'afterDrop',
            },
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            enabled: boolean(input.enabled, this.defaultValue.enabled),
            showDropSelector: stringSet(input.showDropSelector, this.defaultValue.showDropSelector, ['afterDrop', 'never']),
        };
    }
}
class EditorPasteAs extends BaseEditorOption {
    constructor() {
        const defaults = { enabled: true, showPasteSelector: 'afterPaste' };
        super(97 /* EditorOption.pasteAs */, 'pasteAs', defaults, {
            'editor.pasteAs.enabled': {
                type: 'boolean',
                default: defaults.enabled,
                markdownDescription: localize(428, "Controls whether you can paste content in different ways."),
            },
            'editor.pasteAs.showPasteSelector': {
                type: 'string',
                markdownDescription: localize(429, "Controls if a widget is shown when pasting content in to the editor. This widget lets you control how the file is pasted."),
                enum: [
                    'afterPaste',
                    'never'
                ],
                enumDescriptions: [
                    localize(430, "Show the paste selector widget after content is pasted into the editor."),
                    localize(431, "Never show the paste selector widget. Instead the default pasting behavior is always used."),
                ],
                default: 'afterPaste',
            },
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            enabled: boolean(input.enabled, this.defaultValue.enabled),
            showPasteSelector: stringSet(input.showPasteSelector, this.defaultValue.showPasteSelector, ['afterPaste', 'never']),
        };
    }
}
//#endregion
/**
 * @internal
 */
const editorOptionsRegistry = [];
function register(option) {
    editorOptionsRegistry[option.id] = option;
    return option;
}
const EditorOptions = {
    acceptSuggestionOnCommitCharacter: register(new EditorBooleanOption(0 /* EditorOption.acceptSuggestionOnCommitCharacter */, 'acceptSuggestionOnCommitCharacter', true, { markdownDescription: localize(432, "Controls whether suggestions should be accepted on commit characters. For example, in JavaScript, the semi-colon (`;`) can be a commit character that accepts a suggestion and types that character.") })),
    acceptSuggestionOnEnter: register(new EditorStringEnumOption(1 /* EditorOption.acceptSuggestionOnEnter */, 'acceptSuggestionOnEnter', 'on', ['on', 'smart', 'off'], {
        markdownEnumDescriptions: [
            '',
            localize(433, "Only accept a suggestion with `Enter` when it makes a textual change."),
            ''
        ],
        markdownDescription: localize(434, "Controls whether suggestions should be accepted on `Enter`, in addition to `Tab`. Helps to avoid ambiguity between inserting new lines or accepting suggestions.")
    })),
    accessibilitySupport: register(new EditorAccessibilitySupport()),
    accessibilityPageSize: register(new EditorIntOption(3 /* EditorOption.accessibilityPageSize */, 'accessibilityPageSize', 500, 1, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */, {
        description: localize(435, "Controls the number of lines in the editor that can be read out by a screen reader at once. When we detect a screen reader we automatically set the default to be 500. Warning: this has a performance implication for numbers larger than the default."),
        tags: ['accessibility']
    })),
    allowOverflow: register(new EditorBooleanOption(4 /* EditorOption.allowOverflow */, 'allowOverflow', true)),
    allowVariableLineHeights: register(new EditorBooleanOption(5 /* EditorOption.allowVariableLineHeights */, 'allowVariableLineHeights', true, {
        description: localize(436, "Controls whether to allow using variable line heights in the editor.")
    })),
    allowVariableFonts: register(new EditorBooleanOption(6 /* EditorOption.allowVariableFonts */, 'allowVariableFonts', true, {
        description: localize(437, "Controls whether to allow using variable fonts in the editor.")
    })),
    allowVariableFontsInAccessibilityMode: register(new EditorBooleanOption(7 /* EditorOption.allowVariableFontsInAccessibilityMode */, 'allowVariableFontsInAccessibilityMode', false, {
        description: localize(438, "Controls whether to allow using variable fonts in the editor in the accessibility mode."),
        tags: ['accessibility']
    })),
    ariaLabel: register(new EditorStringOption(8 /* EditorOption.ariaLabel */, 'ariaLabel', localize(439, "Editor content"))),
    ariaRequired: register(new EditorBooleanOption(9 /* EditorOption.ariaRequired */, 'ariaRequired', false, undefined)),
    screenReaderAnnounceInlineSuggestion: register(new EditorBooleanOption(12 /* EditorOption.screenReaderAnnounceInlineSuggestion */, 'screenReaderAnnounceInlineSuggestion', true, {
        description: localize(440, "Control whether inline suggestions are announced by a screen reader."),
        tags: ['accessibility']
    })),
    autoClosingBrackets: register(new EditorStringEnumOption(10 /* EditorOption.autoClosingBrackets */, 'autoClosingBrackets', 'languageDefined', ['always', 'languageDefined', 'beforeWhitespace', 'never'], {
        enumDescriptions: [
            '',
            localize(441, "Use language configurations to determine when to autoclose brackets."),
            localize(442, "Autoclose brackets only when the cursor is to the left of whitespace."),
            '',
        ],
        description: localize(443, "Controls whether the editor should automatically close brackets after the user adds an opening bracket.")
    })),
    autoClosingComments: register(new EditorStringEnumOption(11 /* EditorOption.autoClosingComments */, 'autoClosingComments', 'languageDefined', ['always', 'languageDefined', 'beforeWhitespace', 'never'], {
        enumDescriptions: [
            '',
            localize(444, "Use language configurations to determine when to autoclose comments."),
            localize(445, "Autoclose comments only when the cursor is to the left of whitespace."),
            '',
        ],
        description: localize(446, "Controls whether the editor should automatically close comments after the user adds an opening comment.")
    })),
    autoClosingDelete: register(new EditorStringEnumOption(13 /* EditorOption.autoClosingDelete */, 'autoClosingDelete', 'auto', ['always', 'auto', 'never'], {
        enumDescriptions: [
            '',
            localize(447, "Remove adjacent closing quotes or brackets only if they were automatically inserted."),
            '',
        ],
        description: localize(448, "Controls whether the editor should remove adjacent closing quotes or brackets when deleting.")
    })),
    autoClosingOvertype: register(new EditorStringEnumOption(14 /* EditorOption.autoClosingOvertype */, 'autoClosingOvertype', 'auto', ['always', 'auto', 'never'], {
        enumDescriptions: [
            '',
            localize(449, "Type over closing quotes or brackets only if they were automatically inserted."),
            '',
        ],
        description: localize(450, "Controls whether the editor should type over closing quotes or brackets.")
    })),
    autoClosingQuotes: register(new EditorStringEnumOption(15 /* EditorOption.autoClosingQuotes */, 'autoClosingQuotes', 'languageDefined', ['always', 'languageDefined', 'beforeWhitespace', 'never'], {
        enumDescriptions: [
            '',
            localize(451, "Use language configurations to determine when to autoclose quotes."),
            localize(452, "Autoclose quotes only when the cursor is to the left of whitespace."),
            '',
        ],
        description: localize(453, "Controls whether the editor should automatically close quotes after the user adds an opening quote.")
    })),
    autoIndent: register(new EditorEnumOption(16 /* EditorOption.autoIndent */, 'autoIndent', 4 /* EditorAutoIndentStrategy.Full */, 'full', ['none', 'keep', 'brackets', 'advanced', 'full'], _autoIndentFromString, {
        enumDescriptions: [
            localize(454, "The editor will not insert indentation automatically."),
            localize(455, "The editor will keep the current line's indentation."),
            localize(456, "The editor will keep the current line's indentation and honor language defined brackets."),
            localize(457, "The editor will keep the current line's indentation, honor language defined brackets and invoke special onEnterRules defined by languages."),
            localize(458, "The editor will keep the current line's indentation, honor language defined brackets, invoke special onEnterRules defined by languages, and honor indentationRules defined by languages."),
        ],
        description: localize(459, "Controls whether the editor should automatically adjust the indentation when users type, paste, move or indent lines.")
    })),
    autoIndentOnPaste: register(new EditorBooleanOption(17 /* EditorOption.autoIndentOnPaste */, 'autoIndentOnPaste', false, { description: localize(460, "Controls whether the editor should automatically auto-indent the pasted content.") })),
    autoIndentOnPasteWithinString: register(new EditorBooleanOption(18 /* EditorOption.autoIndentOnPasteWithinString */, 'autoIndentOnPasteWithinString', true, { description: localize(461, "Controls whether the editor should automatically auto-indent the pasted content when pasted within a string. This takes effect when autoIndentOnPaste is true.") })),
    automaticLayout: register(new EditorBooleanOption(19 /* EditorOption.automaticLayout */, 'automaticLayout', false)),
    autoSurround: register(new EditorStringEnumOption(20 /* EditorOption.autoSurround */, 'autoSurround', 'languageDefined', ['languageDefined', 'quotes', 'brackets', 'never'], {
        enumDescriptions: [
            localize(462, "Use language configurations to determine when to automatically surround selections."),
            localize(463, "Surround with quotes but not brackets."),
            localize(464, "Surround with brackets but not quotes."),
            ''
        ],
        description: localize(465, "Controls whether the editor should automatically surround selections when typing quotes or brackets.")
    })),
    bracketPairColorization: register(new BracketPairColorization()),
    bracketPairGuides: register(new GuideOptions()),
    stickyTabStops: register(new EditorBooleanOption(132 /* EditorOption.stickyTabStops */, 'stickyTabStops', false, { description: localize(466, "Emulate selection behavior of tab characters when using spaces for indentation. Selection will stick to tab stops.") })),
    codeLens: register(new EditorBooleanOption(23 /* EditorOption.codeLens */, 'codeLens', true, { description: localize(467, "Controls whether the editor shows CodeLens.") })),
    codeLensFontFamily: register(new EditorStringOption(24 /* EditorOption.codeLensFontFamily */, 'codeLensFontFamily', '', { description: localize(468, "Controls the font family for CodeLens.") })),
    codeLensFontSize: register(new EditorIntOption(25 /* EditorOption.codeLensFontSize */, 'codeLensFontSize', 0, 0, 100, {
        type: 'number',
        default: 0,
        minimum: 0,
        maximum: 100,
        markdownDescription: localize(469, "Controls the font size in pixels for CodeLens. When set to 0, 90% of `#editor.fontSize#` is used.")
    })),
    colorDecorators: register(new EditorBooleanOption(26 /* EditorOption.colorDecorators */, 'colorDecorators', true, { description: localize(470, "Controls whether the editor should render the inline color decorators and color picker.") })),
    colorDecoratorActivatedOn: register(new EditorStringEnumOption(168 /* EditorOption.colorDecoratorsActivatedOn */, 'colorDecoratorsActivatedOn', 'clickAndHover', ['clickAndHover', 'hover', 'click'], {
        enumDescriptions: [
            localize(471, "Make the color picker appear both on click and hover of the color decorator"),
            localize(472, "Make the color picker appear on hover of the color decorator"),
            localize(473, "Make the color picker appear on click of the color decorator")
        ],
        description: localize(474, "Controls the condition to make a color picker appear from a color decorator.")
    })),
    colorDecoratorsLimit: register(new EditorIntOption(27 /* EditorOption.colorDecoratorsLimit */, 'colorDecoratorsLimit', 500, 1, 1000000, {
        markdownDescription: localize(475, "Controls the max number of color decorators that can be rendered in an editor at once.")
    })),
    columnSelection: register(new EditorBooleanOption(28 /* EditorOption.columnSelection */, 'columnSelection', false, { description: localize(476, "Enable that the selection with the mouse and keys is doing column selection.") })),
    comments: register(new EditorComments()),
    contextmenu: register(new EditorBooleanOption(30 /* EditorOption.contextmenu */, 'contextmenu', true)),
    copyWithSyntaxHighlighting: register(new EditorBooleanOption(31 /* EditorOption.copyWithSyntaxHighlighting */, 'copyWithSyntaxHighlighting', true, { description: localize(477, "Controls whether syntax highlighting should be copied into the clipboard.") })),
    cursorBlinking: register(new EditorEnumOption(32 /* EditorOption.cursorBlinking */, 'cursorBlinking', 1 /* TextEditorCursorBlinkingStyle.Blink */, 'blink', ['blink', 'smooth', 'phase', 'expand', 'solid'], cursorBlinkingStyleFromString, { description: localize(478, "Control the cursor animation style.") })),
    cursorSmoothCaretAnimation: register(new EditorStringEnumOption(33 /* EditorOption.cursorSmoothCaretAnimation */, 'cursorSmoothCaretAnimation', 'off', ['off', 'explicit', 'on'], {
        enumDescriptions: [
            localize(479, "Smooth caret animation is disabled."),
            localize(480, "Smooth caret animation is enabled only when the user moves the cursor with an explicit gesture."),
            localize(481, "Smooth caret animation is always enabled.")
        ],
        description: localize(482, "Controls whether the smooth caret animation should be enabled.")
    })),
    cursorStyle: register(new EditorEnumOption(34 /* EditorOption.cursorStyle */, 'cursorStyle', TextEditorCursorStyle.Line, 'line', ['line', 'block', 'underline', 'line-thin', 'block-outline', 'underline-thin'], cursorStyleFromString, { description: localize(483, "Controls the cursor style in insert input mode.") })),
    overtypeCursorStyle: register(new EditorEnumOption(92 /* EditorOption.overtypeCursorStyle */, 'overtypeCursorStyle', TextEditorCursorStyle.Block, 'block', ['line', 'block', 'underline', 'line-thin', 'block-outline', 'underline-thin'], cursorStyleFromString, { description: localize(484, "Controls the cursor style in overtype input mode.") })),
    cursorSurroundingLines: register(new EditorIntOption(35 /* EditorOption.cursorSurroundingLines */, 'cursorSurroundingLines', 0, 0, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */, { description: localize(485, "Controls the minimal number of visible leading lines (minimum 0) and trailing lines (minimum 1) surrounding the cursor. Known as 'scrollOff' or 'scrollOffset' in some other editors.") })),
    cursorSurroundingLinesStyle: register(new EditorStringEnumOption(36 /* EditorOption.cursorSurroundingLinesStyle */, 'cursorSurroundingLinesStyle', 'default', ['default', 'all'], {
        enumDescriptions: [
            localize(486, "`cursorSurroundingLines` is enforced only when triggered via the keyboard or API."),
            localize(487, "`cursorSurroundingLines` is enforced always.")
        ],
        markdownDescription: localize(488, "Controls when `#editor.cursorSurroundingLines#` should be enforced.")
    })),
    cursorWidth: register(new EditorIntOption(37 /* EditorOption.cursorWidth */, 'cursorWidth', 0, 0, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */, { markdownDescription: localize(489, "Controls the width of the cursor when `#editor.cursorStyle#` is set to `line`.") })),
    cursorHeight: register(new EditorIntOption(38 /* EditorOption.cursorHeight */, 'cursorHeight', 0, 0, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */, { markdownDescription: localize(490, "Controls the height of the cursor when `#editor.cursorStyle#` is set to `line`. Cursor's max height depends on line height.") })),
    disableLayerHinting: register(new EditorBooleanOption(39 /* EditorOption.disableLayerHinting */, 'disableLayerHinting', false)),
    disableMonospaceOptimizations: register(new EditorBooleanOption(40 /* EditorOption.disableMonospaceOptimizations */, 'disableMonospaceOptimizations', false)),
    domReadOnly: register(new EditorBooleanOption(41 /* EditorOption.domReadOnly */, 'domReadOnly', false)),
    dragAndDrop: register(new EditorBooleanOption(42 /* EditorOption.dragAndDrop */, 'dragAndDrop', true, { description: localize(491, "Controls whether the editor should allow moving selections via drag and drop.") })),
    emptySelectionClipboard: register(new EditorEmptySelectionClipboard()),
    dropIntoEditor: register(new EditorDropIntoEditor()),
    editContext: register(new EditorBooleanOption(44 /* EditorOption.editContext */, 'editContext', true, {
        description: localize(492, "Sets whether the EditContext API should be used instead of the text area to power input in the editor."),
        included: isChrome || isEdge || isNative
    })),
    renderRichScreenReaderContent: register(new EditorBooleanOption(107 /* EditorOption.renderRichScreenReaderContent */, 'renderRichScreenReaderContent', false, {
        markdownDescription: localize(493, "Whether to render rich screen reader content when the `#editor.editContext#` setting is enabled."),
    })),
    stickyScroll: register(new EditorStickyScroll()),
    experimentalGpuAcceleration: register(new EditorStringEnumOption(46 /* EditorOption.experimentalGpuAcceleration */, 'experimentalGpuAcceleration', 'off', ['off', 'on'], {
        tags: ['experimental'],
        enumDescriptions: [
            localize(494, "Use regular DOM-based rendering."),
            localize(495, "Use GPU acceleration."),
        ],
        description: localize(496, "Controls whether to use the experimental GPU acceleration to render the editor.")
    })),
    experimentalWhitespaceRendering: register(new EditorStringEnumOption(47 /* EditorOption.experimentalWhitespaceRendering */, 'experimentalWhitespaceRendering', 'svg', ['svg', 'font', 'off'], {
        enumDescriptions: [
            localize(497, "Use a new rendering method with svgs."),
            localize(498, "Use a new rendering method with font characters."),
            localize(499, "Use the stable rendering method."),
        ],
        description: localize(500, "Controls whether whitespace is rendered with a new, experimental method.")
    })),
    extraEditorClassName: register(new EditorStringOption(48 /* EditorOption.extraEditorClassName */, 'extraEditorClassName', '')),
    fastScrollSensitivity: register(new EditorFloatOption(49 /* EditorOption.fastScrollSensitivity */, 'fastScrollSensitivity', 5, x => (x <= 0 ? 5 : x), { markdownDescription: localize(501, "Scrolling speed multiplier when pressing `Alt`.") })),
    find: register(new EditorFind()),
    fixedOverflowWidgets: register(new EditorBooleanOption(51 /* EditorOption.fixedOverflowWidgets */, 'fixedOverflowWidgets', false)),
    folding: register(new EditorBooleanOption(52 /* EditorOption.folding */, 'folding', true, { description: localize(502, "Controls whether the editor has code folding enabled.") })),
    foldingStrategy: register(new EditorStringEnumOption(53 /* EditorOption.foldingStrategy */, 'foldingStrategy', 'auto', ['auto', 'indentation'], {
        enumDescriptions: [
            localize(503, "Use a language-specific folding strategy if available, else the indentation-based one."),
            localize(504, "Use the indentation-based folding strategy."),
        ],
        description: localize(505, "Controls the strategy for computing folding ranges.")
    })),
    foldingHighlight: register(new EditorBooleanOption(54 /* EditorOption.foldingHighlight */, 'foldingHighlight', true, { description: localize(506, "Controls whether the editor should highlight folded ranges.") })),
    foldingImportsByDefault: register(new EditorBooleanOption(55 /* EditorOption.foldingImportsByDefault */, 'foldingImportsByDefault', false, { description: localize(507, "Controls whether the editor automatically collapses import ranges.") })),
    foldingMaximumRegions: register(new EditorIntOption(56 /* EditorOption.foldingMaximumRegions */, 'foldingMaximumRegions', 5000, 10, 65000, // limit must be less than foldingRanges MAX_FOLDING_REGIONS
    { description: localize(508, "The maximum number of foldable regions. Increasing this value may result in the editor becoming less responsive when the current source has a large number of foldable regions.") })),
    unfoldOnClickAfterEndOfLine: register(new EditorBooleanOption(57 /* EditorOption.unfoldOnClickAfterEndOfLine */, 'unfoldOnClickAfterEndOfLine', false, { description: localize(509, "Controls whether clicking on the empty content after a folded line will unfold the line.") })),
    fontFamily: register(new EditorStringOption(58 /* EditorOption.fontFamily */, 'fontFamily', EDITOR_FONT_DEFAULTS.fontFamily, { description: localize(510, "Controls the font family.") })),
    fontInfo: register(new EditorFontInfo()),
    fontLigatures2: register(new EditorFontLigatures()),
    fontSize: register(new EditorFontSize()),
    fontWeight: register(new EditorFontWeight()),
    fontVariations: register(new EditorFontVariations()),
    formatOnPaste: register(new EditorBooleanOption(64 /* EditorOption.formatOnPaste */, 'formatOnPaste', false, { description: localize(511, "Controls whether the editor should automatically format the pasted content. A formatter must be available and the formatter should be able to format a range in a document.") })),
    formatOnType: register(new EditorBooleanOption(65 /* EditorOption.formatOnType */, 'formatOnType', false, { description: localize(512, "Controls whether the editor should automatically format the line after typing.") })),
    glyphMargin: register(new EditorBooleanOption(66 /* EditorOption.glyphMargin */, 'glyphMargin', true, { description: localize(513, "Controls whether the editor should render the vertical glyph margin. Glyph margin is mostly used for debugging.") })),
    gotoLocation: register(new EditorGoToLocation()),
    hideCursorInOverviewRuler: register(new EditorBooleanOption(68 /* EditorOption.hideCursorInOverviewRuler */, 'hideCursorInOverviewRuler', false, { description: localize(514, "Controls whether the cursor should be hidden in the overview ruler.") })),
    hover: register(new EditorHover()),
    inDiffEditor: register(new EditorBooleanOption(70 /* EditorOption.inDiffEditor */, 'inDiffEditor', false)),
    inertialScroll: register(new EditorBooleanOption(158 /* EditorOption.inertialScroll */, 'inertialScroll', false, { description: localize(515, "Make scrolling inertial - mostly useful with touchpad on linux.") })),
    letterSpacing: register(new EditorFloatOption(72 /* EditorOption.letterSpacing */, 'letterSpacing', EDITOR_FONT_DEFAULTS.letterSpacing, x => EditorFloatOption.clamp(x, -5, 20), { description: localize(516, "Controls the letter spacing in pixels.") })),
    lightbulb: register(new EditorLightbulb()),
    lineDecorationsWidth: register(new EditorLineDecorationsWidth()),
    lineHeight: register(new EditorLineHeight()),
    lineNumbers: register(new EditorRenderLineNumbersOption()),
    lineNumbersMinChars: register(new EditorIntOption(77 /* EditorOption.lineNumbersMinChars */, 'lineNumbersMinChars', 5, 1, 300)),
    linkedEditing: register(new EditorBooleanOption(78 /* EditorOption.linkedEditing */, 'linkedEditing', false, { description: localize(517, "Controls whether the editor has linked editing enabled. Depending on the language, related symbols such as HTML tags, are updated while editing.") })),
    links: register(new EditorBooleanOption(79 /* EditorOption.links */, 'links', true, { description: localize(518, "Controls whether the editor should detect links and make them clickable.") })),
    matchBrackets: register(new EditorStringEnumOption(80 /* EditorOption.matchBrackets */, 'matchBrackets', 'always', ['always', 'near', 'never'], { description: localize(519, "Highlight matching brackets.") })),
    minimap: register(new EditorMinimap()),
    mouseStyle: register(new EditorStringEnumOption(82 /* EditorOption.mouseStyle */, 'mouseStyle', 'text', ['text', 'default', 'copy'])),
    mouseWheelScrollSensitivity: register(new EditorFloatOption(83 /* EditorOption.mouseWheelScrollSensitivity */, 'mouseWheelScrollSensitivity', 1, x => (x === 0 ? 1 : x), { markdownDescription: localize(520, "A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events.") })),
    mouseWheelZoom: register(new EditorBooleanOption(84 /* EditorOption.mouseWheelZoom */, 'mouseWheelZoom', false, {
        markdownDescription: isMacintosh
            ? localize(521, "Zoom the font of the editor when using mouse wheel and holding `Cmd`.")
            : localize(522, "Zoom the font of the editor when using mouse wheel and holding `Ctrl`.")
    })),
    multiCursorMergeOverlapping: register(new EditorBooleanOption(85 /* EditorOption.multiCursorMergeOverlapping */, 'multiCursorMergeOverlapping', true, { description: localize(523, "Merge multiple cursors when they are overlapping.") })),
    multiCursorModifier: register(new EditorEnumOption(86 /* EditorOption.multiCursorModifier */, 'multiCursorModifier', 'altKey', 'alt', ['ctrlCmd', 'alt'], _multiCursorModifierFromString, {
        markdownEnumDescriptions: [
            localize(524, "Maps to `Control` on Windows and Linux and to `Command` on macOS."),
            localize(525, "Maps to `Alt` on Windows and Linux and to `Option` on macOS.")
        ],
        markdownDescription: localize(526, "The modifier to be used to add multiple cursors with the mouse. The Go to Definition and Open Link mouse gestures will adapt such that they do not conflict with the [multicursor modifier](https://code.visualstudio.com/docs/editor/codebasics#_multicursor-modifier).")






    })),
    mouseMiddleClickAction: register(new EditorStringEnumOption(87 /* EditorOption.mouseMiddleClickAction */, 'mouseMiddleClickAction', 'default', ['default', 'openLink', 'ctrlLeftClick'], { description: localize(527, "Controls what happens when middle mouse button is clicked in the editor.") })),
    multiCursorPaste: register(new EditorStringEnumOption(88 /* EditorOption.multiCursorPaste */, 'multiCursorPaste', 'spread', ['spread', 'full'], {
        markdownEnumDescriptions: [
            localize(528, "Each cursor pastes a single line of the text."),
            localize(529, "Each cursor pastes the full text.")
        ],
        markdownDescription: localize(530, "Controls pasting when the line count of the pasted text matches the cursor count.")
    })),
    multiCursorLimit: register(new EditorIntOption(89 /* EditorOption.multiCursorLimit */, 'multiCursorLimit', 10000, 1, 100000, {
        markdownDescription: localize(531, "Controls the max number of cursors that can be in an active editor at once.")
    })),
    occurrencesHighlight: register(new EditorStringEnumOption(90 /* EditorOption.occurrencesHighlight */, 'occurrencesHighlight', 'singleFile', ['off', 'singleFile', 'multiFile'], {
        markdownEnumDescriptions: [
            localize(532, "Does not highlight occurrences."),
            localize(533, "Highlights occurrences only in the current file."),
            localize(534, "Experimental: Highlights occurrences across all valid open files.")
        ],
        markdownDescription: localize(535, "Controls whether occurrences should be highlighted across open files.")
    })),
    occurrencesHighlightDelay: register(new EditorIntOption(91 /* EditorOption.occurrencesHighlightDelay */, 'occurrencesHighlightDelay', 0, 0, 2000, {
        description: localize(536, "Controls the delay in milliseconds after which occurrences are highlighted."),
        tags: ['preview']
    })),
    overtypeOnPaste: register(new EditorBooleanOption(93 /* EditorOption.overtypeOnPaste */, 'overtypeOnPaste', true, { description: localize(537, "Controls whether pasting should overtype.") })),
    overviewRulerBorder: register(new EditorBooleanOption(94 /* EditorOption.overviewRulerBorder */, 'overviewRulerBorder', true, { description: localize(538, "Controls whether a border should be drawn around the overview ruler.") })),
    overviewRulerLanes: register(new EditorIntOption(95 /* EditorOption.overviewRulerLanes */, 'overviewRulerLanes', 3, 0, 3)),
    padding: register(new EditorPadding()),
    pasteAs: register(new EditorPasteAs()),
    parameterHints: register(new EditorParameterHints()),
    peekWidgetDefaultFocus: register(new EditorStringEnumOption(99 /* EditorOption.peekWidgetDefaultFocus */, 'peekWidgetDefaultFocus', 'tree', ['tree', 'editor'], {
        enumDescriptions: [
            localize(539, "Focus the tree when opening peek"),
            localize(540, "Focus the editor when opening peek")
        ],
        description: localize(541, "Controls whether to focus the inline editor or the tree in the peek widget.")
    })),
    placeholder: register(new PlaceholderOption()),
    definitionLinkOpensInPeek: register(new EditorBooleanOption(101 /* EditorOption.definitionLinkOpensInPeek */, 'definitionLinkOpensInPeek', false, { description: localize(542, "Controls whether the Go to Definition mouse gesture always opens the peek widget.") })),
    quickSuggestions: register(new EditorQuickSuggestions()),
    quickSuggestionsDelay: register(new EditorIntOption(103 /* EditorOption.quickSuggestionsDelay */, 'quickSuggestionsDelay', 10, 0, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */, {
        description: localize(543, "Controls the delay in milliseconds after which quick suggestions will show up."),
        experiment: {
            mode: 'auto'
        }
    })),
    readOnly: register(new EditorBooleanOption(104 /* EditorOption.readOnly */, 'readOnly', false)),
    readOnlyMessage: register(new ReadonlyMessage()),
    renameOnType: register(new EditorBooleanOption(106 /* EditorOption.renameOnType */, 'renameOnType', false, { description: localize(544, "Controls whether the editor auto renames on type."), markdownDeprecationMessage: localize(545, "Deprecated, use `#editor.linkedEditing#` instead.") })),
    renderControlCharacters: register(new EditorBooleanOption(108 /* EditorOption.renderControlCharacters */, 'renderControlCharacters', true, { description: localize(546, "Controls whether the editor should render control characters."), restricted: true })),
    renderFinalNewline: register(new EditorStringEnumOption(109 /* EditorOption.renderFinalNewline */, 'renderFinalNewline', (isLinux ? 'dimmed' : 'on'), ['off', 'on', 'dimmed'], { description: localize(547, "Render last line number when the file ends with a newline.") })),
    renderLineHighlight: register(new EditorStringEnumOption(110 /* EditorOption.renderLineHighlight */, 'renderLineHighlight', 'line', ['none', 'gutter', 'line', 'all'], {
        enumDescriptions: [
            '',
            '',
            '',
            localize(548, "Highlights both the gutter and the current line."),
        ],
        description: localize(549, "Controls how the editor should render the current line highlight.")
    })),
    renderLineHighlightOnlyWhenFocus: register(new EditorBooleanOption(111 /* EditorOption.renderLineHighlightOnlyWhenFocus */, 'renderLineHighlightOnlyWhenFocus', false, { description: localize(550, "Controls if the editor should render the current line highlight only when the editor is focused.") })),
    renderValidationDecorations: register(new EditorStringEnumOption(112 /* EditorOption.renderValidationDecorations */, 'renderValidationDecorations', 'editable', ['editable', 'on', 'off'])),
    renderWhitespace: register(new EditorStringEnumOption(113 /* EditorOption.renderWhitespace */, 'renderWhitespace', 'selection', ['none', 'boundary', 'selection', 'trailing', 'all'], {
        enumDescriptions: [
            '',
            localize(551, "Render whitespace characters except for single spaces between words."),
            localize(552, "Render whitespace characters only on selected text."),
            localize(553, "Render only trailing whitespace characters."),
            ''
        ],
        description: localize(554, "Controls how the editor should render whitespace characters.")
    })),
    revealHorizontalRightPadding: register(new EditorIntOption(114 /* EditorOption.revealHorizontalRightPadding */, 'revealHorizontalRightPadding', 15, 0, 1000)),
    roundedSelection: register(new EditorBooleanOption(115 /* EditorOption.roundedSelection */, 'roundedSelection', true, { description: localize(555, "Controls whether selections should have rounded corners.") })),
    rulers: register(new EditorRulers()),
    scrollbar: register(new EditorScrollbar()),
    scrollBeyondLastColumn: register(new EditorIntOption(118 /* EditorOption.scrollBeyondLastColumn */, 'scrollBeyondLastColumn', 4, 0, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */, { description: localize(556, "Controls the number of extra characters beyond which the editor will scroll horizontally.") })),
    scrollBeyondLastLine: register(new EditorBooleanOption(119 /* EditorOption.scrollBeyondLastLine */, 'scrollBeyondLastLine', true, { description: localize(557, "Controls whether the editor will scroll beyond the last line.") })),
    scrollOnMiddleClick: register(new EditorBooleanOption(171 /* EditorOption.scrollOnMiddleClick */, 'scrollOnMiddleClick', false, { description: localize(558, "Controls whether the editor will scroll when the middle button is pressed.") })),
    scrollPredominantAxis: register(new EditorBooleanOption(120 /* EditorOption.scrollPredominantAxis */, 'scrollPredominantAxis', true, { description: localize(559, "Scroll only along the predominant axis when scrolling both vertically and horizontally at the same time. Prevents horizontal drift when scrolling vertically on a trackpad.") })),
    selectionClipboard: register(new EditorBooleanOption(121 /* EditorOption.selectionClipboard */, 'selectionClipboard', true, {
        description: localize(560, "Controls whether the Linux primary clipboard should be supported."),
        included: isLinux
    })),
    selectionHighlight: register(new EditorBooleanOption(122 /* EditorOption.selectionHighlight */, 'selectionHighlight', true, { description: localize(561, "Controls whether the editor should highlight matches similar to the selection.") })),
    selectionHighlightMaxLength: register(new EditorIntOption(123 /* EditorOption.selectionHighlightMaxLength */, 'selectionHighlightMaxLength', 200, 0, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */, { description: localize(562, "Controls how many characters can be in the selection before similiar matches are not highlighted. Set to zero for unlimited.") })),
    selectionHighlightMultiline: register(new EditorBooleanOption(124 /* EditorOption.selectionHighlightMultiline */, 'selectionHighlightMultiline', false, { description: localize(563, "Controls whether the editor should highlight selection matches that span multiple lines.") })),
    selectOnLineNumbers: register(new EditorBooleanOption(125 /* EditorOption.selectOnLineNumbers */, 'selectOnLineNumbers', true)),
    showFoldingControls: register(new EditorStringEnumOption(126 /* EditorOption.showFoldingControls */, 'showFoldingControls', 'mouseover', ['always', 'never', 'mouseover'], {
        enumDescriptions: [
            localize(564, "Always show the folding controls."),
            localize(565, "Never show the folding controls and reduce the gutter size."),
            localize(566, "Only show the folding controls when the mouse is over the gutter."),
        ],
        description: localize(567, "Controls when the folding controls on the gutter are shown.")
    })),
    showUnused: register(new EditorBooleanOption(127 /* EditorOption.showUnused */, 'showUnused', true, { description: localize(568, "Controls fading out of unused code.") })),
    showDeprecated: register(new EditorBooleanOption(157 /* EditorOption.showDeprecated */, 'showDeprecated', true, { description: localize(569, "Controls strikethrough deprecated variables.") })),
    inlayHints: register(new EditorInlayHints()),
    snippetSuggestions: register(new EditorStringEnumOption(128 /* EditorOption.snippetSuggestions */, 'snippetSuggestions', 'inline', ['top', 'bottom', 'inline', 'none'], {
        enumDescriptions: [
            localize(570, "Show snippet suggestions on top of other suggestions."),
            localize(571, "Show snippet suggestions below other suggestions."),
            localize(572, "Show snippets suggestions with other suggestions."),
            localize(573, "Do not show snippet suggestions."),
        ],
        description: localize(574, "Controls whether snippets are shown with other suggestions and how they are sorted.")
    })),
    smartSelect: register(new SmartSelect()),
    smoothScrolling: register(new EditorBooleanOption(130 /* EditorOption.smoothScrolling */, 'smoothScrolling', false, { description: localize(575, "Controls whether the editor will scroll using an animation.") })),
    stopRenderingLineAfter: register(new EditorIntOption(133 /* EditorOption.stopRenderingLineAfter */, 'stopRenderingLineAfter', 10000, -1, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */)),
    suggest: register(new EditorSuggest()),
    inlineSuggest: register(new InlineEditorSuggest()),
    inlineCompletionsAccessibilityVerbose: register(new EditorBooleanOption(169 /* EditorOption.inlineCompletionsAccessibilityVerbose */, 'inlineCompletionsAccessibilityVerbose', false, { description: localize(576, "Controls whether the accessibility hint should be provided to screen reader users when an inline completion is shown.") })),
    suggestFontSize: register(new EditorIntOption(135 /* EditorOption.suggestFontSize */, 'suggestFontSize', 0, 0, 1000, { markdownDescription: localize(577, "Font size for the suggest widget. When set to {0}, the value of {1} is used.", '`0`', '`#editor.fontSize#`') })),
    suggestLineHeight: register(new EditorIntOption(136 /* EditorOption.suggestLineHeight */, 'suggestLineHeight', 0, 0, 1000, { markdownDescription: localize(578, "Line height for the suggest widget. When set to {0}, the value of {1} is used. The minimum value is 8.", '`0`', '`#editor.lineHeight#`') })),
    suggestOnTriggerCharacters: register(new EditorBooleanOption(137 /* EditorOption.suggestOnTriggerCharacters */, 'suggestOnTriggerCharacters', true, { description: localize(579, "Controls whether suggestions should automatically show up when typing trigger characters.") })),
    suggestSelection: register(new EditorStringEnumOption(138 /* EditorOption.suggestSelection */, 'suggestSelection', 'first', ['first', 'recentlyUsed', 'recentlyUsedByPrefix'], {
        markdownEnumDescriptions: [
            localize(580, "Always select the first suggestion."),
            localize(581, "Select recent suggestions unless further typing selects one, e.g. `console.| -> console.log` because `log` has been completed recently."),
            localize(582, "Select suggestions based on previous prefixes that have completed those suggestions, e.g. `co -> console` and `con -> const`."),
        ],
        description: localize(583, "Controls how suggestions are pre-selected when showing the suggest list.")
    })),
    tabCompletion: register(new EditorStringEnumOption(139 /* EditorOption.tabCompletion */, 'tabCompletion', 'off', ['on', 'off', 'onlySnippets'], {
        enumDescriptions: [
            localize(584, "Tab complete will insert the best matching suggestion when pressing tab."),
            localize(585, "Disable tab completions."),
            localize(586, "Tab complete snippets when their prefix match. Works best when 'quickSuggestions' aren't enabled."),
        ],
        description: localize(587, "Enables tab completions.")
    })),
    tabIndex: register(new EditorIntOption(140 /* EditorOption.tabIndex */, 'tabIndex', 0, -1, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */)),
    trimWhitespaceOnDelete: register(new EditorBooleanOption(141 /* EditorOption.trimWhitespaceOnDelete */, 'trimWhitespaceOnDelete', false, { description: localize(588, "Controls whether the editor will also delete the next line's indentation whitespace when deleting a newline.") })),
    unicodeHighlight: register(new UnicodeHighlight()),
    unusualLineTerminators: register(new EditorStringEnumOption(143 /* EditorOption.unusualLineTerminators */, 'unusualLineTerminators', 'prompt', ['auto', 'off', 'prompt'], {
        enumDescriptions: [
            localize(589, "Unusual line terminators are automatically removed."),
            localize(590, "Unusual line terminators are ignored."),
            localize(591, "Unusual line terminators prompt to be removed."),
        ],
        description: localize(592, "Remove unusual line terminators that might cause problems.")
    })),
    useShadowDOM: register(new EditorBooleanOption(144 /* EditorOption.useShadowDOM */, 'useShadowDOM', true)),
    useTabStops: register(new EditorBooleanOption(145 /* EditorOption.useTabStops */, 'useTabStops', true, { description: localize(593, "Spaces and tabs are inserted and deleted in alignment with tab stops.") })),
    wordBreak: register(new EditorStringEnumOption(146 /* EditorOption.wordBreak */, 'wordBreak', 'normal', ['normal', 'keepAll'], {
        markdownEnumDescriptions: [
            localize(594, "Use the default line break rule."),
            localize(595, "Word breaks should not be used for Chinese/Japanese/Korean (CJK) text. Non-CJK text behavior is the same as for normal."),
        ],
        description: localize(596, "Controls the word break rules used for Chinese/Japanese/Korean (CJK) text.")
    })),
    wordSegmenterLocales: register(new WordSegmenterLocales()),
    wordSeparators: register(new EditorStringOption(148 /* EditorOption.wordSeparators */, 'wordSeparators', USUAL_WORD_SEPARATORS, { description: localize(597, "Characters that will be used as word separators when doing word related navigations or operations.") })),
    wordWrap: register(new EditorStringEnumOption(149 /* EditorOption.wordWrap */, 'wordWrap', 'off', ['off', 'on', 'wordWrapColumn', 'bounded'], {
        markdownEnumDescriptions: [
            localize(598, "Lines will never wrap."),
            localize(599, "Lines will wrap at the viewport width."),
            localize(600, "Lines will wrap at `#editor.wordWrapColumn#`."),





            localize(601, "Lines will wrap at the minimum of viewport and `#editor.wordWrapColumn#`."),






        ],
        description: localize(602, "Controls how lines should wrap.")






    })),
    wordWrapBreakAfterCharacters: register(new EditorStringOption(150 /* EditorOption.wordWrapBreakAfterCharacters */, 'wordWrapBreakAfterCharacters', 
    // allow-any-unicode-next-line
    ' \t})]?|/&.,;¢°′″‰℃、。｡､￠，．：；？！％・･ゝゞヽヾーァィゥェォッャュョヮヵヶぁぃぅぇぉっゃゅょゎゕゖㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ々〻ｧｨｩｪｫｬｭｮｯｰ”〉》」』】〕）］｝｣')),
    wordWrapBreakBeforeCharacters: register(new EditorStringOption(151 /* EditorOption.wordWrapBreakBeforeCharacters */, 'wordWrapBreakBeforeCharacters', 
    // allow-any-unicode-next-line
    '([{‘“〈《「『【〔（［｛｢£¥＄￡￥+＋')),
    wordWrapColumn: register(new EditorIntOption(152 /* EditorOption.wordWrapColumn */, 'wordWrapColumn', 80, 1, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */, {
        markdownDescription: localize(603, "Controls the wrapping column of the editor when `#editor.wordWrap#` is `wordWrapColumn` or `bounded`.")






    })),
    wordWrapOverride1: register(new EditorStringEnumOption(153 /* EditorOption.wordWrapOverride1 */, 'wordWrapOverride1', 'inherit', ['off', 'on', 'inherit'])),
    wordWrapOverride2: register(new EditorStringEnumOption(154 /* EditorOption.wordWrapOverride2 */, 'wordWrapOverride2', 'inherit', ['off', 'on', 'inherit'])),
    wrapOnEscapedLineFeeds: register(new EditorBooleanOption(160 /* EditorOption.wrapOnEscapedLineFeeds */, 'wrapOnEscapedLineFeeds', false, { markdownDescription: localize(604, "Controls whether literal `\\n` shall trigger a wordWrap when `#editor.wordWrap#` is enabled.\n\nFor example:\n```c\nchar* str=\"hello\\nworld\"\n```\nwill be displayed as\n```c\nchar* str=\"hello\\n\n           world\"\n```") })),
    // Leave these at the end (because they have dependencies!)
    effectiveCursorStyle: register(new EffectiveCursorStyle()),
    editorClassName: register(new EditorClassName()),
    defaultColorDecorators: register(new EditorStringEnumOption(167 /* EditorOption.defaultColorDecorators */, 'defaultColorDecorators', 'auto', ['auto', 'always', 'never'], {
        enumDescriptions: [
            localize(605, "Show default color decorators only when no extension provides colors decorators."),
            localize(606, "Always show default color decorators."),
            localize(607, "Never show default color decorators."),
        ],
        description: localize(608, "Controls whether inline color decorations should be shown using the default document color provider.")
    })),
    pixelRatio: register(new EditorPixelRatio()),
    tabFocusMode: register(new EditorBooleanOption(164 /* EditorOption.tabFocusMode */, 'tabFocusMode', false, { markdownDescription: localize(609, "Controls whether the editor receives tabs or defers them to the workbench for navigation.") })),
    layoutInfo: register(new EditorLayoutInfoComputer()),
    wrappingInfo: register(new EditorWrappingInfoComputer()),
    wrappingIndent: register(new WrappingIndentOption()),
    wrappingStrategy: register(new WrappingStrategy()),
    effectiveEditContextEnabled: register(new EffectiveEditContextEnabled()),
    effectiveAllowVariableFonts: register(new EffectiveAllowVariableFonts())
};

export { ApplyUpdateResult, ComputeOptionsMemory, ConfigurationChangedEvent, EditorFontLigatures, EditorFontVariations, EditorLayoutInfoComputer, EditorOptions, MINIMAP_GUTTER_WIDTH, ShowLightbulbIconMode, TextEditorCursorStyle, boolean, clampedFloat, clampedInt, cursorBlinkingStyleFromString, cursorStyleFromString, editorOptionsRegistry, filterFontDecorations, filterValidationDecorations, inUntrustedWorkspace, stringSet, unicodeHighlightConfigKeys };
