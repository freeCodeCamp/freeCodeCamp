/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../parser/cssNodes", "@vscode/l10n"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.colorKeywords = exports.colors = exports.colorFunctions = void 0;
    exports.isColorConstructor = isColorConstructor;
    exports.isColorString = isColorString;
    exports.isColorValue = isColorValue;
    exports.hexDigit = hexDigit;
    exports.colorFromHex = colorFromHex;
    exports.colorFrom256RGB = colorFrom256RGB;
    exports.colorFromHSL = colorFromHSL;
    exports.hslFromColor = hslFromColor;
    exports.colorFromHWB = colorFromHWB;
    exports.hwbFromColor = hwbFromColor;
    exports.xyzFromLAB = xyzFromLAB;
    exports.xyzFromOKLAB = xyzFromOKLAB;
    exports.xyzToRGB = xyzToRGB;
    exports.RGBtoXYZ = RGBtoXYZ;
    exports.XYZtoLAB = XYZtoLAB;
    exports.XYZtoOKLAB = XYZtoOKLAB;
    exports.labFromColor = labFromColor;
    exports.oklabFromColor = oklabFromColor;
    exports.lchFromColor = lchFromColor;
    exports.oklchFromColor = oklchFromColor;
    exports.colorFromLAB = colorFromLAB;
    exports.colorFromOKLAB = colorFromOKLAB;
    exports.labFromLCH = labFromLCH;
    exports.colorFromLCH = colorFromLCH;
    exports.colorFromOKLCH = colorFromOKLCH;
    exports.getColorValue = getColorValue;
    const nodes = require("../parser/cssNodes");
    const l10n = require("@vscode/l10n");
    const hexColorRegExp = /(^#([0-9A-F]{3}){1,2}$)|(^#([0-9A-F]{4}){1,2}$)/i;
    exports.colorFunctions = [
        {
            label: 'rgb',
            func: 'rgb($red, $green, $blue)',
            insertText: 'rgb(${1:red}, ${2:green}, ${3:blue})',
            desc: l10n.t('Creates a Color from red, green, and blue values.')
        },
        {
            label: 'rgba',
            func: 'rgba($red, $green, $blue, $alpha)',
            insertText: 'rgba(${1:red}, ${2:green}, ${3:blue}, ${4:alpha})',
            desc: l10n.t('Creates a Color from red, green, blue, and alpha values.')
        },
        {
            label: 'rgb relative',
            func: 'rgb(from $color $red $green $blue)',
            insertText: 'rgb(from ${1:color} ${2:r} ${3:g} ${4:b})',
            desc: l10n.t('Creates a Color from the red, green, and blue values of another Color.')
        },
        {
            label: 'hsl',
            func: 'hsl($hue, $saturation, $lightness)',
            insertText: 'hsl(${1:hue}, ${2:saturation}, ${3:lightness})',
            desc: l10n.t('Creates a Color from hue, saturation, and lightness values.')
        },
        {
            label: 'hsla',
            func: 'hsla($hue, $saturation, $lightness, $alpha)',
            insertText: 'hsla(${1:hue}, ${2:saturation}, ${3:lightness}, ${4:alpha})',
            desc: l10n.t('Creates a Color from hue, saturation, lightness, and alpha values.')
        },
        {
            label: 'hsl relative',
            func: 'hsl(from $color $hue $saturation $lightness)',
            insertText: 'hsl(from ${1:color} ${2:h} ${3:s} ${4:l})',
            desc: l10n.t('Creates a Color from the hue, saturation, and lightness values of another Color.')
        },
        {
            label: 'hwb',
            func: 'hwb($hue $white $black)',
            insertText: 'hwb(${1:hue} ${2:white} ${3:black})',
            desc: l10n.t('Creates a Color from hue, white, and black values.')
        },
        {
            label: 'hwb relative',
            func: 'hwb(from $color $hue $white $black)',
            insertText: 'hwb(from ${1:color} ${2:h} ${3:w} ${4:b})',
            desc: l10n.t('Creates a Color from the hue, white, and black values of another Color.')
        },
        {
            label: 'lab',
            func: 'lab($lightness $a $b)',
            insertText: 'lab(${1:lightness} ${2:a} ${3:b})',
            desc: l10n.t('Creates a Color from lightness, a, and b values.')
        },
        {
            label: 'lab relative',
            func: 'lab(from $color $lightness $a $b)',
            insertText: 'lab(from ${1:color} ${2:l} ${3:a} ${4:b})',
            desc: l10n.t('Creates a Color from the lightness, a, and b values of another Color.')
        },
        {
            label: 'oklab',
            func: 'oklab($lightness $a $b)',
            insertText: 'oklab(${1:lightness} ${2:a} ${3:b})',
            desc: l10n.t('Creates a Color from lightness, a, and b values.')
        },
        {
            label: 'oklab relative',
            func: 'oklab(from $color $lightness $a $b)',
            insertText: 'oklab(from ${1:color} ${2:l} ${3:a} ${4:b})',
            desc: l10n.t('Creates a Color from the lightness, a, and b values of another Color.')
        },
        {
            label: 'lch',
            func: 'lch($lightness $chroma $hue)',
            insertText: 'lch(${1:lightness} ${2:chroma} ${3:hue})',
            desc: l10n.t('Creates a Color from lightness, chroma, and hue values.')
        },
        {
            label: 'lch relative',
            func: 'lch(from $color $lightness $chroma $hue)',
            insertText: 'lch(from ${1:color} ${2:l} ${3:c} ${4:h})',
            desc: l10n.t('Creates a Color from the lightness, chroma, and hue values of another Color.')
        },
        {
            label: 'oklch',
            func: 'oklch($lightness $chroma $hue)',
            insertText: 'oklch(${1:lightness} ${2:chroma} ${3:hue})',
            desc: l10n.t('Creates a Color from lightness, chroma, and hue values.')
        },
        {
            label: 'oklch relative',
            func: 'oklch(from $color $lightness $chroma $hue)',
            insertText: 'oklch(from ${1:color} ${2:l} ${3:c} ${4:h})',
            desc: l10n.t('Creates a Color from the lightness, chroma, and hue values of another Color.')
        },
        {
            label: 'color',
            func: 'color($color-space $red $green $blue)',
            insertText: 'color(${1|srgb,srgb-linear,display-p3,a98-rgb,prophoto-rgb,rec2020,xyx,xyz-d50,xyz-d65|} ${2:red} ${3:green} ${4:blue})',
            desc: l10n.t('Creates a Color in a specific color space from red, green, and blue values.')
        },
        {
            label: 'color relative',
            func: 'color(from $color $color-space $red $green $blue)',
            insertText: 'color(from ${1:color} ${2|srgb,srgb-linear,display-p3,a98-rgb,prophoto-rgb,rec2020,xyx,xyz-d50,xyz-d65|} ${3:r} ${4:g} ${5:b})',
            desc: l10n.t('Creates a Color in a specific color space from the red, green, and blue values of another Color.')
        },
        {
            label: 'color-mix',
            func: 'color-mix(in $color-space, $color $percentage, $color $percentage)',
            insertText: 'color-mix(in ${1|srgb,srgb-linear,lab,oklab,xyz,xyz-d50,xyz-d65|}, ${3:color} ${4:percentage}, ${5:color} ${6:percentage})',
            desc: l10n.t('Mix two colors together in a rectangular color space.')
        },
        {
            label: 'color-mix hue',
            func: 'color-mix(in $color-space $interpolation-method hue, $color $percentage, $color $percentage)',
            insertText: 'color-mix(in ${1|hsl,hwb,lch,oklch|} ${2|shorter hue,longer hue,increasing hue,decreasing hue|}, ${3:color} ${4:percentage}, ${5:color} ${6:percentage})',
            desc: l10n.t('Mix two colors together in a polar color space.')
        },
        {
            label: 'lab',
            func: 'lab($lightness $channel_a $channel_b $alpha)',
            insertText: 'lab(${1:lightness} ${2:a} ${3:b} ${4:alpha})',
            desc: l10n.t('css.builtin.lab', 'Creates a Color from Lightness, Channel a, Channel b and alpha values.')
        },
        {
            label: 'lab relative',
            func: 'lab(from $color $lightness $channel_a $channel_b $alpha)',
            insertText: 'lab(from ${1:color} ${2:lightness} ${3:channel_a} ${4:channel_b} ${5:alpha})',
            desc: l10n.t('css.builtin.lab', 'Creates a Color from Lightness, Channel a, Channel b and alpha values of another Color.')
        },
        {
            label: 'lch',
            func: 'lch($lightness $chrome $hue $alpha)',
            insertText: 'lch(${1:lightness} ${2:chrome} ${3:hue} ${4:alpha})',
            desc: l10n.t('css.builtin.lab', 'Creates a Color from Lightness, Chroma, Hue and alpha values.')
        },
        {
            label: 'lch relative',
            func: 'lch(from $color $lightness $chrome $hue $alpha)',
            insertText: 'lch(from ${1:color} ${2:lightness} ${3:chrome} ${4:hue} ${5:alpha})',
            desc: l10n.t('css.builtin.lab', 'Creates a Color from Lightness, Chroma, Hue and alpha values of another Color.')
        }
    ];
    const colorFunctionNameRegExp = /^(?:rgba?|hsla?|hwb|lab|lch|oklab|oklch)$/iu;
    exports.colors = {
        aliceblue: '#f0f8ff',
        antiquewhite: '#faebd7',
        aqua: '#00ffff',
        aquamarine: '#7fffd4',
        azure: '#f0ffff',
        beige: '#f5f5dc',
        bisque: '#ffe4c4',
        black: '#000000',
        blanchedalmond: '#ffebcd',
        blue: '#0000ff',
        blueviolet: '#8a2be2',
        brown: '#a52a2a',
        burlywood: '#deb887',
        cadetblue: '#5f9ea0',
        chartreuse: '#7fff00',
        chocolate: '#d2691e',
        coral: '#ff7f50',
        cornflowerblue: '#6495ed',
        cornsilk: '#fff8dc',
        crimson: '#dc143c',
        cyan: '#00ffff',
        darkblue: '#00008b',
        darkcyan: '#008b8b',
        darkgoldenrod: '#b8860b',
        darkgray: '#a9a9a9',
        darkgrey: '#a9a9a9',
        darkgreen: '#006400',
        darkkhaki: '#bdb76b',
        darkmagenta: '#8b008b',
        darkolivegreen: '#556b2f',
        darkorange: '#ff8c00',
        darkorchid: '#9932cc',
        darkred: '#8b0000',
        darksalmon: '#e9967a',
        darkseagreen: '#8fbc8f',
        darkslateblue: '#483d8b',
        darkslategray: '#2f4f4f',
        darkslategrey: '#2f4f4f',
        darkturquoise: '#00ced1',
        darkviolet: '#9400d3',
        deeppink: '#ff1493',
        deepskyblue: '#00bfff',
        dimgray: '#696969',
        dimgrey: '#696969',
        dodgerblue: '#1e90ff',
        firebrick: '#b22222',
        floralwhite: '#fffaf0',
        forestgreen: '#228b22',
        fuchsia: '#ff00ff',
        gainsboro: '#dcdcdc',
        ghostwhite: '#f8f8ff',
        gold: '#ffd700',
        goldenrod: '#daa520',
        gray: '#808080',
        grey: '#808080',
        green: '#008000',
        greenyellow: '#adff2f',
        honeydew: '#f0fff0',
        hotpink: '#ff69b4',
        indianred: '#cd5c5c',
        indigo: '#4b0082',
        ivory: '#fffff0',
        khaki: '#f0e68c',
        lavender: '#e6e6fa',
        lavenderblush: '#fff0f5',
        lawngreen: '#7cfc00',
        lemonchiffon: '#fffacd',
        lightblue: '#add8e6',
        lightcoral: '#f08080',
        lightcyan: '#e0ffff',
        lightgoldenrodyellow: '#fafad2',
        lightgray: '#d3d3d3',
        lightgrey: '#d3d3d3',
        lightgreen: '#90ee90',
        lightpink: '#ffb6c1',
        lightsalmon: '#ffa07a',
        lightseagreen: '#20b2aa',
        lightskyblue: '#87cefa',
        lightslategray: '#778899',
        lightslategrey: '#778899',
        lightsteelblue: '#b0c4de',
        lightyellow: '#ffffe0',
        lime: '#00ff00',
        limegreen: '#32cd32',
        linen: '#faf0e6',
        magenta: '#ff00ff',
        maroon: '#800000',
        mediumaquamarine: '#66cdaa',
        mediumblue: '#0000cd',
        mediumorchid: '#ba55d3',
        mediumpurple: '#9370d8',
        mediumseagreen: '#3cb371',
        mediumslateblue: '#7b68ee',
        mediumspringgreen: '#00fa9a',
        mediumturquoise: '#48d1cc',
        mediumvioletred: '#c71585',
        midnightblue: '#191970',
        mintcream: '#f5fffa',
        mistyrose: '#ffe4e1',
        moccasin: '#ffe4b5',
        navajowhite: '#ffdead',
        navy: '#000080',
        oldlace: '#fdf5e6',
        olive: '#808000',
        olivedrab: '#6b8e23',
        orange: '#ffa500',
        orangered: '#ff4500',
        orchid: '#da70d6',
        palegoldenrod: '#eee8aa',
        palegreen: '#98fb98',
        paleturquoise: '#afeeee',
        palevioletred: '#d87093',
        papayawhip: '#ffefd5',
        peachpuff: '#ffdab9',
        peru: '#cd853f',
        pink: '#ffc0cb',
        plum: '#dda0dd',
        powderblue: '#b0e0e6',
        purple: '#800080',
        red: '#ff0000',
        rebeccapurple: '#663399',
        rosybrown: '#bc8f8f',
        royalblue: '#4169e1',
        saddlebrown: '#8b4513',
        salmon: '#fa8072',
        sandybrown: '#f4a460',
        seagreen: '#2e8b57',
        seashell: '#fff5ee',
        sienna: '#a0522d',
        silver: '#c0c0c0',
        skyblue: '#87ceeb',
        slateblue: '#6a5acd',
        slategray: '#708090',
        slategrey: '#708090',
        snow: '#fffafa',
        springgreen: '#00ff7f',
        steelblue: '#4682b4',
        tan: '#d2b48c',
        teal: '#008080',
        thistle: '#d8bfd8',
        tomato: '#ff6347',
        turquoise: '#40e0d0',
        violet: '#ee82ee',
        wheat: '#f5deb3',
        white: '#ffffff',
        whitesmoke: '#f5f5f5',
        yellow: '#ffff00',
        yellowgreen: '#9acd32'
    };
    const colorsRegExp = new RegExp(`^(${Object.keys(exports.colors).join('|')})$`, "i");
    exports.colorKeywords = {
        'currentColor': 'The value of the \'color\' property. The computed value of the \'currentColor\' keyword is the computed value of the \'color\' property. If the \'currentColor\' keyword is set on the \'color\' property itself, it is treated as \'color:inherit\' at parse time.',
        'transparent': 'Fully transparent. This keyword can be considered a shorthand for rgba(0,0,0,0) which is its computed value.',
    };
    const colorKeywordsRegExp = new RegExp(`^(${Object.keys(exports.colorKeywords).join('|')})$`, "i");
    function getNumericValue(node, factor, lowerLimit = 0, upperLimit = 1) {
        const val = node.getText();
        const m = val.match(/^([-+]?[0-9]*\.?[0-9]+)(%?)$/);
        if (m) {
            if (m[2]) {
                factor = 100.0;
            }
            const result = parseFloat(m[1]) / factor;
            if (result >= lowerLimit && result <= upperLimit) {
                return result;
            }
        }
        throw new Error();
    }
    const DEGREES_PER_CIRCLE = 360; // Number of degrees in a full circle
    const GRAD_TO_DEGREE_FACTOR = 0.9; // Conversion factor: grads to degrees
    const RADIANS_TO_DEGREES_FACTOR = DEGREES_PER_CIRCLE / 2 / Math.PI; // Conversion factor: radians to degrees
    function getAngle(node) {
        const textValue = node.getText();
        // Hue angle keyword `none` is the equivilient of `0deg`
        if (textValue === 'none') {
            return 0;
        }
        const m = /^(?<numberString>[-+]?[0-9]*\.?[0-9]+)(?<unit>deg|rad|grad|turn)?$/iu.exec(textValue);
        if (m?.groups?.['numberString']) {
            const value = Number.parseFloat(m.groups['numberString']);
            if (!Number.isNaN(value)) {
                switch (m.groups['unit']) {
                    case 'deg': {
                        return value % DEGREES_PER_CIRCLE;
                    }
                    case 'grad': {
                        return (value * GRAD_TO_DEGREE_FACTOR) % DEGREES_PER_CIRCLE;
                    }
                    case 'rad': {
                        return (value * RADIANS_TO_DEGREES_FACTOR) % DEGREES_PER_CIRCLE;
                    }
                    case 'turn': {
                        return (value * DEGREES_PER_CIRCLE) % DEGREES_PER_CIRCLE;
                    }
                    default: {
                        // Unitless angles are treated as degrees
                        return value % DEGREES_PER_CIRCLE;
                    }
                }
            }
        }
        throw new Error(`Failed to parse '${textValue}' as angle`);
    }
    function isColorConstructor(node) {
        const name = node.getName();
        if (!name) {
            return false;
        }
        return colorFunctionNameRegExp.test(name);
    }
    function isColorString(s) {
        return hexColorRegExp.test(s) || colorsRegExp.test(s) || colorKeywordsRegExp.test(s);
    }
    /**
     * Returns true if the node is a color value - either
     * defined a hex number, as rgb or rgba function, or
     * as color name.
     */
    function isColorValue(node) {
        if (node.type === nodes.NodeType.HexColorValue) {
            return true;
        }
        else if (node.type === nodes.NodeType.Function) {
            return isColorConstructor(node);
        }
        else if (node.type === nodes.NodeType.Identifier) {
            if (node.parent && node.parent.type !== nodes.NodeType.Term) {
                return false;
            }
            const candidateColor = node.getText().toLowerCase();
            if (candidateColor === 'none') {
                return false;
            }
            if (exports.colors[candidateColor]) {
                return true;
            }
        }
        return false;
    }
    const Digit0 = 48;
    const Digit9 = 57;
    const A = 65;
    const F = 70;
    const a = 97;
    const f = 102;
    function hexDigit(charCode) {
        if (charCode < Digit0) {
            return 0;
        }
        if (charCode <= Digit9) {
            return charCode - Digit0;
        }
        if (charCode < a) {
            charCode += (a - A);
        }
        if (charCode >= a && charCode <= f) {
            return charCode - a + 10;
        }
        return 0;
    }
    function colorFromHex(text) {
        if (text[0] !== '#') {
            return null;
        }
        switch (text.length) {
            case 4:
                return {
                    red: (hexDigit(text.charCodeAt(1)) * 0x11) / 255.0,
                    green: (hexDigit(text.charCodeAt(2)) * 0x11) / 255.0,
                    blue: (hexDigit(text.charCodeAt(3)) * 0x11) / 255.0,
                    alpha: 1
                };
            case 5:
                return {
                    red: (hexDigit(text.charCodeAt(1)) * 0x11) / 255.0,
                    green: (hexDigit(text.charCodeAt(2)) * 0x11) / 255.0,
                    blue: (hexDigit(text.charCodeAt(3)) * 0x11) / 255.0,
                    alpha: (hexDigit(text.charCodeAt(4)) * 0x11) / 255.0,
                };
            case 7:
                return {
                    red: (hexDigit(text.charCodeAt(1)) * 0x10 + hexDigit(text.charCodeAt(2))) / 255.0,
                    green: (hexDigit(text.charCodeAt(3)) * 0x10 + hexDigit(text.charCodeAt(4))) / 255.0,
                    blue: (hexDigit(text.charCodeAt(5)) * 0x10 + hexDigit(text.charCodeAt(6))) / 255.0,
                    alpha: 1
                };
            case 9:
                return {
                    red: (hexDigit(text.charCodeAt(1)) * 0x10 + hexDigit(text.charCodeAt(2))) / 255.0,
                    green: (hexDigit(text.charCodeAt(3)) * 0x10 + hexDigit(text.charCodeAt(4))) / 255.0,
                    blue: (hexDigit(text.charCodeAt(5)) * 0x10 + hexDigit(text.charCodeAt(6))) / 255.0,
                    alpha: (hexDigit(text.charCodeAt(7)) * 0x10 + hexDigit(text.charCodeAt(8))) / 255.0
                };
        }
        return null;
    }
    function colorFrom256RGB(red, green, blue, alpha = 1.0) {
        return {
            red: red / 255.0,
            green: green / 255.0,
            blue: blue / 255.0,
            alpha
        };
    }
    function colorFromHSL(hue, sat, light, alpha = 1.0) {
        hue = hue / 60.0;
        if (sat === 0) {
            return { red: light, green: light, blue: light, alpha };
        }
        else {
            const hueToRgb = (t1, t2, hue) => {
                while (hue < 0) {
                    hue += 6;
                }
                while (hue >= 6) {
                    hue -= 6;
                }
                if (hue < 1) {
                    return (t2 - t1) * hue + t1;
                }
                if (hue < 3) {
                    return t2;
                }
                if (hue < 4) {
                    return (t2 - t1) * (4 - hue) + t1;
                }
                return t1;
            };
            const t2 = light <= 0.5 ? (light * (sat + 1)) : (light + sat - (light * sat));
            const t1 = light * 2 - t2;
            return { red: hueToRgb(t1, t2, hue + 2), green: hueToRgb(t1, t2, hue), blue: hueToRgb(t1, t2, hue - 2), alpha };
        }
    }
    function hslFromColor(rgba) {
        const r = rgba.red;
        const g = rgba.green;
        const b = rgba.blue;
        const a = rgba.alpha;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h = 0;
        let s = 0;
        const l = (min + max) / 2;
        const chroma = max - min;
        if (chroma > 0) {
            s = Math.min((l <= 0.5 ? chroma / (2 * l) : chroma / (2 - (2 * l))), 1);
            switch (max) {
                case r:
                    h = (g - b) / chroma + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / chroma + 2;
                    break;
                case b:
                    h = (r - g) / chroma + 4;
                    break;
            }
            h *= 60;
            h = Math.round(h);
        }
        return { h, s, l, a };
    }
    function colorFromHWB(hue, white, black, alpha = 1.0) {
        if (white + black >= 1) {
            const gray = white / (white + black);
            return { red: gray, green: gray, blue: gray, alpha };
        }
        const rgb = colorFromHSL(hue, 1, 0.5, alpha);
        let red = rgb.red;
        red *= (1 - white - black);
        red += white;
        let green = rgb.green;
        green *= (1 - white - black);
        green += white;
        let blue = rgb.blue;
        blue *= (1 - white - black);
        blue += white;
        return {
            red: red,
            green: green,
            blue: blue,
            alpha
        };
    }
    function hwbFromColor(rgba) {
        const hsl = hslFromColor(rgba);
        const white = Math.min(rgba.red, rgba.green, rgba.blue);
        const black = 1 - Math.max(rgba.red, rgba.green, rgba.blue);
        return {
            h: hsl.h,
            w: white,
            b: black,
            a: hsl.a
        };
    }
    function xyzFromLAB(lab) {
        const xyz = {
            x: 0,
            y: 0,
            z: 0,
            alpha: lab.alpha ?? 1
        };
        xyz.y = (lab.l + 16.0) / 116.0;
        xyz.x = (lab.a / 500.0) + xyz.y;
        xyz.z = xyz.y - (lab.b / 200.0);
        let key;
        for (key in xyz) {
            let pow = xyz[key] * xyz[key] * xyz[key];
            if (pow > 0.008856) {
                xyz[key] = pow;
            }
            else {
                xyz[key] = (xyz[key] - 16.0 / 116.0) / 7.787;
            }
        }
        xyz.x = xyz.x * 95.047;
        xyz.y = xyz.y * 100.0;
        xyz.z = xyz.z * 108.883;
        return xyz;
    }
    function xyzFromOKLAB(lab) {
        // Convert from OKLab to XYZ
        // References: https://bottosson.github.io/posts/oklab/
        // lab.l is in 0-1 range
        // lab.a and lab.b are in -0.4 to 0.4 range
        const l = lab.l + 0.3963377774 * lab.a + 0.2158037573 * lab.b;
        const m = lab.l - 0.1055613458 * lab.a - 0.0638541728 * lab.b;
        const s = lab.l - 0.0894841775 * lab.a - 1.291485548 * lab.b;
        // Apply non-linearity using exponentiation
        const l3 = l ** 3;
        const m3 = m ** 3;
        const s3 = s ** 3;
        // Convert to XYZ
        const x = 1.2270138511 * l3 - 0.5577999807 * m3 + 0.281256149 * s3;
        const y = -0.0405801784 * l3 + 1.1122568696 * m3 - 0.0716766787 * s3;
        const z = -0.0763812845 * l3 - 0.4214819784 * m3 + 1.5861632204 * s3;
        return {
            x: x * 100,
            y: y * 100,
            z: z * 100,
            alpha: lab.alpha ?? 1,
        };
    }
    function xyzToRGB(xyz) {
        const x = xyz.x / 100;
        const y = xyz.y / 100;
        const z = xyz.z / 100;
        const r = 3.2406254773200533 * x - 1.5372079722103187 * y - 0.4986285986982479 * z;
        const g = -0.9689307147293197 * x + 1.8757560608852415 * y + 0.041517523842953964 * z;
        const b = 0.055710120445510616 * x + -0.2040210505984867 * y + 1.0569959422543882 * z;
        const compand = (c) => {
            return c <= 0.0031308 ?
                12.92 * c :
                Math.min(1.055 * Math.pow(c, 1 / 2.4) - 0.055, 1);
        };
        return {
            red: Math.round(compand(r) * 255.0),
            blue: Math.round(compand(b) * 255.0),
            green: Math.round(compand(g) * 255.0),
            alpha: xyz.alpha
        };
    }
    function RGBtoXYZ(rgba) {
        let r = rgba.red, g = rgba.green, b = rgba.blue;
        if (r > 0.04045) {
            r = Math.pow((r + 0.055) / 1.055, 2.4);
        }
        else {
            r = r / 12.92;
        }
        if (g > 0.04045) {
            g = Math.pow((g + 0.055) / 1.055, 2.4);
        }
        else {
            g = g / 12.92;
        }
        if (b > 0.04045) {
            b = Math.pow((b + 0.055) / 1.055, 2.4);
        }
        else {
            b = b / 12.92;
        }
        r = r * 100;
        g = g * 100;
        b = b * 100;
        //Observer = 2°, Illuminant = D65
        const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
        const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
        const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
        return { x, y, z, alpha: rgba.alpha };
    }
    function XYZtoLAB(xyz, round = true) {
        const ref_X = 95.047, ref_Y = 100.000, ref_Z = 108.883;
        let x = xyz.x / ref_X, y = xyz.y / ref_Y, z = xyz.z / ref_Z;
        if (x > 0.008856) {
            x = Math.pow(x, 1 / 3);
        }
        else {
            x = (7.787 * x) + (16 / 116);
        }
        if (y > 0.008856) {
            y = Math.pow(y, 1 / 3);
        }
        else {
            y = (7.787 * y) + (16 / 116);
        }
        if (z > 0.008856) {
            z = Math.pow(z, 1 / 3);
        }
        else {
            z = (7.787 * z) + (16 / 116);
        }
        const l = (116 * y) - 16, a = 500 * (x - y), b = 200 * (y - z);
        if (round) {
            return {
                l: Math.round((l + Number.EPSILON) * 100) / 100,
                a: Math.round((a + Number.EPSILON) * 100) / 100,
                b: Math.round((b + Number.EPSILON) * 100) / 100,
                alpha: xyz.alpha
            };
        }
        else {
            return {
                l, a, b,
                alpha: xyz.alpha
            };
        }
    }
    function XYZtoOKLAB(xyz, round = true) {
        // Convert XYZ to OKLab
        // References: https://bottosson.github.io/posts/oklab/
        // Normalize XYZ values
        const x = xyz.x / 100;
        const y = xyz.y / 100;
        const z = xyz.z / 100;
        // Convert to LMS
        const l = 0.8189330101 * x + 0.3618667424 * y - 0.1288597137 * z;
        const m = 0.0329845436 * x + 0.9293118715 * y + 0.0361456387 * z;
        const s = 0.0482003018 * x + 0.2643662691 * y + 0.633851707 * z;
        // Apply non-linearity
        const l_ = Math.cbrt(l);
        const m_ = Math.cbrt(m);
        const s_ = Math.cbrt(s);
        // Convert to OKLab
        const L = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_;
        const a = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_;
        const b = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_;
        return round
            // 5 decimal places for precision
            ? {
                l: Number(L.toFixed(5)),
                a: Number(a.toFixed(5)),
                b: Number(b.toFixed(5)),
                alpha: xyz.alpha,
            }
            : {
                l: L,
                a,
                b,
                alpha: xyz.alpha,
            };
    }
    function labFromColor(rgba, round = true) {
        const xyz = RGBtoXYZ(rgba);
        const lab = XYZtoLAB(xyz, round);
        return lab;
    }
    function oklabFromColor(rgba, round = true) {
        const xyz = RGBtoXYZ(rgba);
        const lab = XYZtoOKLAB(xyz, round);
        // Convert lightness to a percentage of oklab
        return { ...lab, l: lab.l * 100 };
    }
    /**
     * Calculate chroma and hue from Lab values
     * Returns LCH values without formatting/rounding
     */
    function labToLCH(lab) {
        const c = Math.sqrt(Math.pow(lab.a, 2) + Math.pow(lab.b, 2));
        let h = Math.atan2(lab.b, lab.a) * RADIANS_TO_DEGREES_FACTOR;
        while (h < 0) {
            h = h + 360;
        }
        return {
            l: lab.l,
            c: c,
            h: h,
            alpha: lab.alpha,
        };
    }
    function lchFromColor(rgba) {
        const lab = labFromColor(rgba, false);
        const lch = labToLCH(lab);
        return {
            l: Math.round((lch.l + Number.EPSILON) * 100) / 100,
            c: Math.round((lch.c + Number.EPSILON) * 100) / 100,
            h: Math.round((lch.h + Number.EPSILON) * 100) / 100,
            alpha: lch.alpha,
        };
    }
    function oklchFromColor(rgba) {
        const lab = oklabFromColor(rgba, false);
        const lch = labToLCH(lab);
        return {
            l: Number((lch.l).toFixed(3)),
            c: Number(lch.c.toFixed(5)),
            h: Number(lch.h.toFixed(3)),
            alpha: lch.alpha,
        };
    }
    /**
     * Generic function to convert LAB/OKLAB to Color
     */
    function labToColor(lab, xyzConverter) {
        const xyz = xyzConverter(lab);
        const rgb = xyzToRGB(xyz);
        return {
            red: (rgb.red >= 0 ? Math.min(rgb.red, 255) : 0) / 255,
            green: (rgb.green >= 0 ? Math.min(rgb.green, 255) : 0) / 255,
            blue: (rgb.blue >= 0 ? Math.min(rgb.blue, 255) : 0) / 255,
            alpha: lab.alpha ?? 1,
        };
    }
    function colorFromLAB(l, a, b, alpha = 1) {
        return labToColor({ l, a, b, alpha }, xyzFromLAB);
    }
    function colorFromOKLAB(l, a, b, alpha = 1) {
        return labToColor({ l, a, b, alpha }, xyzFromOKLAB);
    }
    const DEGREES_TO_RADIANS_FACTOR = Math.PI / 180;
    function labFromLCH(l, c, h, alpha = 1) {
        return {
            l: l,
            a: c * Math.cos(h * DEGREES_TO_RADIANS_FACTOR),
            b: c * Math.sin(h * DEGREES_TO_RADIANS_FACTOR),
            alpha: alpha,
        };
    }
    function colorFromLCH(l, c, h, alpha = 1) {
        const lab = labFromLCH(l, c, h, alpha);
        return colorFromLAB(lab.l, lab.a, lab.b, alpha);
    }
    function colorFromOKLCH(l, c, h, alpha = 1) {
        const lab = labFromLCH(l, c, h, alpha); // Conversion is the same as LCH->LAB for OKLCH-OKLAB
        return colorFromOKLAB(lab.l, lab.a, lab.b, alpha);
    }
    function getColorValue(node) {
        if (node.type === nodes.NodeType.HexColorValue) {
            const text = node.getText();
            return colorFromHex(text);
        }
        else if (node.type === nodes.NodeType.Function) {
            const functionNode = node;
            const name = functionNode.getName();
            let colorValues = functionNode.getArguments().getChildren();
            if (colorValues.length === 1) {
                const functionArg = colorValues[0].getChildren();
                if (functionArg.length === 1 && functionArg[0].type === nodes.NodeType.Expression) {
                    colorValues = functionArg[0].getChildren();
                    if (colorValues.length === 3) {
                        const lastValue = colorValues[2];
                        if (lastValue instanceof nodes.BinaryExpression) {
                            const left = lastValue.getLeft(), right = lastValue.getRight(), operator = lastValue.getOperator();
                            if (left && right && operator && operator.matches('/')) {
                                colorValues = [colorValues[0], colorValues[1], left, right];
                            }
                        }
                    }
                }
            }
            if (!name || colorValues.length < 3 || colorValues.length > 4) {
                return null;
            }
            try {
                const alpha = colorValues.length === 4 ? getNumericValue(colorValues[3], 1) : 1;
                switch (name) {
                    case 'rgb':
                    case 'rgba': {
                        return {
                            red: getNumericValue(colorValues[0], 255),
                            green: getNumericValue(colorValues[1], 255),
                            blue: getNumericValue(colorValues[2], 255),
                            alpha,
                        };
                    }
                    case 'hsl':
                    case 'hsla': {
                        const h = getAngle(colorValues[0]);
                        const s = getNumericValue(colorValues[1], 100);
                        const l = getNumericValue(colorValues[2], 100);
                        return colorFromHSL(h, s, l, alpha);
                    }
                    case 'hwb': {
                        const h = getAngle(colorValues[0]);
                        const w = getNumericValue(colorValues[1], 100);
                        const b = getNumericValue(colorValues[2], 100);
                        return colorFromHWB(h, w, b, alpha);
                    }
                    case 'lab': {
                        // Reference: https://mina86.com/2021/srgb-lab-lchab-conversions/
                        const l = getNumericValue(colorValues[0], 100);
                        // Since these two values can be negative, a lower limit of -1 has been added
                        const a = getNumericValue(colorValues[1], 125, -1);
                        const b = getNumericValue(colorValues[2], 125, -1);
                        return colorFromLAB(l * 100, a * 125, b * 125, alpha);
                    }
                    case 'lch': {
                        const l = getNumericValue(colorValues[0], 100);
                        const c = getNumericValue(colorValues[1], 230);
                        const h = getAngle(colorValues[2]);
                        return colorFromLCH(l * 100, c * 230, h, alpha);
                    }
                    case 'oklab': {
                        const l = getNumericValue(colorValues[0], 1);
                        // Since these two values can be negative, a lower limit of -1 has been added
                        const a = getNumericValue(colorValues[1], 0.4, -1);
                        const b = getNumericValue(colorValues[2], 0.4, -1);
                        return colorFromOKLAB(l, a * 0.4, b * 0.4, alpha);
                    }
                    case 'oklch': {
                        const l = getNumericValue(colorValues[0], 1);
                        const c = getNumericValue(colorValues[1], 0.4);
                        const h = getAngle(colorValues[2]);
                        return colorFromOKLCH(l, c * 0.4, h, alpha);
                    }
                }
            }
            catch {
                // parse error on numeric value
                return null;
            }
        }
        else if (node.type === nodes.NodeType.Identifier) {
            if (node.parent && node.parent.type !== nodes.NodeType.Term) {
                return null;
            }
            const term = node.parent;
            if (term && term.parent && term.parent.type === nodes.NodeType.BinaryExpression) {
                const expression = term.parent;
                if (expression.parent && expression.parent.type === nodes.NodeType.ListEntry && expression.parent.key === expression) {
                    return null;
                }
            }
            const candidateColor = node.getText().toLowerCase();
            if (candidateColor === 'none') {
                return null;
            }
            const colorHex = exports.colors[candidateColor];
            if (colorHex) {
                return colorFromHex(colorHex);
            }
        }
        return null;
    }
});
