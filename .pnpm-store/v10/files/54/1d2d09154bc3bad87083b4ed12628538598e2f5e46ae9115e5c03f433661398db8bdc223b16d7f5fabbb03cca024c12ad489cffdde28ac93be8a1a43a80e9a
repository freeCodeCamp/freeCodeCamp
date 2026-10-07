/**
 * This file contains information about the options that the Parser carries
 * around with it while parsing. Data is held in an `Options` object, and when
 * recursing, a new `Options` object can be created with the `.with*` and
 * `.reset` functions.
 */

import {getGlobalMetrics} from "./fontMetrics";
import type {FontMetrics} from "./fontMetrics";
import type {StyleInterface} from "./Style";

const sizeStyleMap = [
    // Each element contains [textsize, scriptsize, scriptscriptsize].
    // The size mappings are taken from TeX with \normalsize=10pt.
    [1, 1, 1],    // size1: [5, 5, 5]              \tiny
    [2, 1, 1],    // size2: [6, 5, 5]
    [3, 1, 1],    // size3: [7, 5, 5]              \scriptsize
    [4, 2, 1],    // size4: [8, 6, 5]              \footnotesize
    [5, 2, 1],    // size5: [9, 6, 5]              \small
    [6, 3, 1],    // size6: [10, 7, 5]             \normalsize
    [7, 4, 2],    // size7: [12, 8, 6]             \large
    [8, 6, 3],    // size8: [14.4, 10, 7]          \Large
    [9, 7, 6],    // size9: [17.28, 12, 10]        \LARGE
    [10, 8, 7],   // size10: [20.74, 14.4, 12]     \huge
    [11, 10, 9],  // size11: [24.88, 20.74, 17.28] \HUGE
];

const sizeMultipliers = [
    // fontMetrics.js:getGlobalMetrics also uses size indexes, so if
    // you change size indexes, change that function.
    0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.2, 1.44, 1.728, 2.074, 2.488,
];

const sizeAtStyle = function(size: number, style: StyleInterface): number {
    return style.size < 2 ? size : sizeStyleMap[size - 1][style.size - 1];
};

// In these types, "" (empty string) means "no change".
export type FontWeight = "textbf" | "textmd" | "";
export type FontShape = "textit" | "textup" | "";

export type OptionsData = {
    style: StyleInterface;
    color?: string | undefined;
    size?: number;
    textSize?: number;
    phantom?: boolean;
    font?: string;
    fontFamily?: string;
    fontWeight?: FontWeight;
    fontShape?: FontShape;
    sizeMultiplier?: number;
    maxSize: number;
    minRuleThickness: number;
};

/**
 * This is the main options class. It contains the current style, size, color,
 * and font.
 *
 * Options objects should not be modified. To create a new Options with
 * different properties, call a `.having*` method.
 */
class Options {
    style: StyleInterface;
    color: string | undefined;
    size: number;
    textSize: number;
    phantom: boolean;
    // A font family applies to a group of fonts (i.e. SansSerif), while a font
    // represents a specific font (i.e. SansSerif Bold).
    // See: https://tex.stackexchange.com/questions/22350/difference-between-textrm-and-mathrm
    font: string;
    fontFamily: string;
    fontWeight: FontWeight;
    fontShape: FontShape;
    sizeMultiplier: number;
    maxSize: number;
    minRuleThickness: number;
    _fontMetrics: FontMetrics | undefined;

    /**
     * The base size index.
     */
    static BASESIZE: number = 6;

    constructor(data: OptionsData) {
        this.style = data.style;
        this.color = data.color;
        this.size = data.size || Options.BASESIZE;
        this.textSize = data.textSize || this.size;
        this.phantom = !!data.phantom;
        this.font = data.font || "";
        this.fontFamily = data.fontFamily || "";
        this.fontWeight = data.fontWeight || '';
        this.fontShape = data.fontShape || '';
        this.sizeMultiplier = sizeMultipliers[this.size - 1];
        this.maxSize = data.maxSize;
        this.minRuleThickness = data.minRuleThickness;
        this._fontMetrics = undefined;
    }

    /**
     * Returns a new options object with the same properties as "this".  Properties
     * from "extension" will be copied to the new options object.
     */
    extend(extension: Partial<OptionsData>): Options {
        const data: OptionsData = {
            style: this.style,
            size: this.size,
            textSize: this.textSize,
            color: this.color,
            phantom: this.phantom,
            font: this.font,
            fontFamily: this.fontFamily,
            fontWeight: this.fontWeight,
            fontShape: this.fontShape,
            maxSize: this.maxSize,
            minRuleThickness: this.minRuleThickness,
        };

        Object.assign(data, extension);

        return new Options(data);
    }

    /**
     * Return an options object with the given style. If `this.style === style`,
     * returns `this`.
     */
    havingStyle(style: StyleInterface): Options {
        if (this.style === style) {
            return this;
        } else {
            return this.extend({
                style: style,
                size: sizeAtStyle(this.textSize, style),
            });
        }
    }

    /**
     * Return an options object with a cramped version of the current style. If
     * the current style is cramped, returns `this`.
     */
    havingCrampedStyle(): Options {
        return this.havingStyle(this.style.cramp());
    }

    /**
     * Return an options object with the given size and in at least `\textstyle`.
     * Returns `this` if appropriate.
     */
    havingSize(size: number): Options {
        if (this.size === size && this.textSize === size) {
            return this;
        } else {
            return this.extend({
                style: this.style.text(),
                size: size,
                textSize: size,
                sizeMultiplier: sizeMultipliers[size - 1],
            });
        }
    }

    /**
     * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
     * changes to at least `\textstyle`.
     */
    havingBaseStyle(style: StyleInterface): Options {
        style = style || this.style.text();
        const wantSize = sizeAtStyle(Options.BASESIZE, style);
        if (this.size === wantSize && this.textSize === Options.BASESIZE
            && this.style === style) {
            return this;
        } else {
            return this.extend({
                style: style,
                size: wantSize,
            });
        }
    }

    /**
     * Remove the effect of sizing changes such as \Huge.
     * Keep the effect of the current style, such as \scriptstyle.
     */
    havingBaseSizing(): Options {
        let size;
        switch (this.style.id) {
            case 4:
            case 5:
                size = 3;  // normalsize in scriptstyle
                break;
            case 6:
            case 7:
                size = 1;  // normalsize in scriptscriptstyle
                break;
            default:
                size = 6;  // normalsize in textstyle or displaystyle
        }
        return this.extend({
            style: this.style.text(),
            size: size,
        });
    }

    /**
     * Create a new options object with the given color.
     */
    withColor(color: string): Options {
        return this.extend({
            color: color,
        });
    }

    /**
     * Create a new options object with "phantom" set to true.
     */
    withPhantom(): Options {
        return this.extend({
            phantom: true,
        });
    }

    /**
     * Creates a new options object with the given math font or old text font.
     * @type {[type]}
     */
    withFont(font: string): Options {
        return this.extend({
            font,
        });
    }

    /**
     * Create a new options objects with the given fontFamily.
     */
    withTextFontFamily(fontFamily: string): Options {
        return this.extend({
            fontFamily,
            font: "",
        });
    }

    /**
     * Creates a new options object with the given font weight
     */
    withTextFontWeight(fontWeight: FontWeight): Options {
        return this.extend({
            fontWeight,
            font: "",
        });
    }

    /**
     * Creates a new options object with the given font weight
     */
    withTextFontShape(fontShape: FontShape): Options {
        return this.extend({
            fontShape,
            font: "",
        });
    }

    /**
     * Return the CSS sizing classes required to switch from enclosing options
     * `oldOptions` to `this`. Returns an array of classes.
     */
    sizingClasses(oldOptions: Options): Array<string> {
        if (oldOptions.size !== this.size) {
            return ["sizing", "reset-size" + oldOptions.size, "size" + this.size];
        } else {
            return [];
        }
    }

    /**
     * Return the CSS sizing classes required to switch to the base size. Like
     * `this.havingSize(BASESIZE).sizingClasses(this)`.
     */
    baseSizingClasses(): Array<string> {
        if (this.size !== Options.BASESIZE) {
            return ["sizing", "reset-size" + this.size, "size" + Options.BASESIZE];
        } else {
            return [];
        }
    }

    /**
     * Return the font metrics for this size.
     */
    fontMetrics(): FontMetrics {
        if (!this._fontMetrics) {
            this._fontMetrics = getGlobalMetrics(this.size);
        }
        return this._fontMetrics;
    }


    /**
     * Gets the CSS color of the current options object
     */
    getColor(): string | undefined {
        if (this.phantom) {
            return "transparent";
        } else {
            return this.color;
        }
    }
}

export default Options;
