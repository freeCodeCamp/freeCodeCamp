import { NodeType, BinaryExpression } from '../parser/cssNodes.js';
import { t } from '../../../../@vscode/l10n/dist/browser.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const hexColorRegExp = /(^#([0-9A-F]{3}){1,2}$)|(^#([0-9A-F]{4}){1,2}$)/i;
const colorFunctions = [
    {
        label: 'rgb',
        func: 'rgb($red, $green, $blue)',
        insertText: 'rgb(${1:red}, ${2:green}, ${3:blue})',
        desc: t('Creates a Color from red, green, and blue values.')
    },
    {
        label: 'rgba',
        func: 'rgba($red, $green, $blue, $alpha)',
        insertText: 'rgba(${1:red}, ${2:green}, ${3:blue}, ${4:alpha})',
        desc: t('Creates a Color from red, green, blue, and alpha values.')
    },
    {
        label: 'rgb relative',
        func: 'rgb(from $color $red $green $blue)',
        insertText: 'rgb(from ${1:color} ${2:r} ${3:g} ${4:b})',
        desc: t('Creates a Color from the red, green, and blue values of another Color.')
    },
    {
        label: 'hsl',
        func: 'hsl($hue, $saturation, $lightness)',
        insertText: 'hsl(${1:hue}, ${2:saturation}, ${3:lightness})',
        desc: t('Creates a Color from hue, saturation, and lightness values.')
    },
    {
        label: 'hsla',
        func: 'hsla($hue, $saturation, $lightness, $alpha)',
        insertText: 'hsla(${1:hue}, ${2:saturation}, ${3:lightness}, ${4:alpha})',
        desc: t('Creates a Color from hue, saturation, lightness, and alpha values.')
    },
    {
        label: 'hsl relative',
        func: 'hsl(from $color $hue $saturation $lightness)',
        insertText: 'hsl(from ${1:color} ${2:h} ${3:s} ${4:l})',
        desc: t('Creates a Color from the hue, saturation, and lightness values of another Color.')
    },
    {
        label: 'hwb',
        func: 'hwb($hue $white $black)',
        insertText: 'hwb(${1:hue} ${2:white} ${3:black})',
        desc: t('Creates a Color from hue, white, and black values.')
    },
    {
        label: 'hwb relative',
        func: 'hwb(from $color $hue $white $black)',
        insertText: 'hwb(from ${1:color} ${2:h} ${3:w} ${4:b})',
        desc: t('Creates a Color from the hue, white, and black values of another Color.')
    },
    {
        label: 'lab',
        func: 'lab($lightness $a $b)',
        insertText: 'lab(${1:lightness} ${2:a} ${3:b})',
        desc: t('Creates a Color from lightness, a, and b values.')
    },
    {
        label: 'lab relative',
        func: 'lab(from $color $lightness $a $b)',
        insertText: 'lab(from ${1:color} ${2:l} ${3:a} ${4:b})',
        desc: t('Creates a Color from the lightness, a, and b values of another Color.')
    },
    {
        label: 'oklab',
        func: 'oklab($lightness $a $b)',
        insertText: 'oklab(${1:lightness} ${2:a} ${3:b})',
        desc: t('Creates a Color from lightness, a, and b values.')
    },
    {
        label: 'oklab relative',
        func: 'oklab(from $color $lightness $a $b)',
        insertText: 'oklab(from ${1:color} ${2:l} ${3:a} ${4:b})',
        desc: t('Creates a Color from the lightness, a, and b values of another Color.')
    },
    {
        label: 'lch',
        func: 'lch($lightness $chroma $hue)',
        insertText: 'lch(${1:lightness} ${2:chroma} ${3:hue})',
        desc: t('Creates a Color from lightness, chroma, and hue values.')
    },
    {
        label: 'lch relative',
        func: 'lch(from $color $lightness $chroma $hue)',
        insertText: 'lch(from ${1:color} ${2:l} ${3:c} ${4:h})',
        desc: t('Creates a Color from the lightness, chroma, and hue values of another Color.')
    },
    {
        label: 'oklch',
        func: 'oklch($lightness $chroma $hue)',
        insertText: 'oklch(${1:lightness} ${2:chroma} ${3:hue})',
        desc: t('Creates a Color from lightness, chroma, and hue values.')
    },
    {
        label: 'oklch relative',
        func: 'oklch(from $color $lightness $chroma $hue)',
        insertText: 'oklch(from ${1:color} ${2:l} ${3:c} ${4:h})',
        desc: t('Creates a Color from the lightness, chroma, and hue values of another Color.')
    },
    {
        label: 'color',
        func: 'color($color-space $red $green $blue)',
        insertText: 'color(${1|srgb,srgb-linear,display-p3,a98-rgb,prophoto-rgb,rec2020,xyx,xyz-d50,xyz-d65|} ${2:red} ${3:green} ${4:blue})',
        desc: t('Creates a Color in a specific color space from red, green, and blue values.')
    },
    {
        label: 'color relative',
        func: 'color(from $color $color-space $red $green $blue)',
        insertText: 'color(from ${1:color} ${2|srgb,srgb-linear,display-p3,a98-rgb,prophoto-rgb,rec2020,xyx,xyz-d50,xyz-d65|} ${3:r} ${4:g} ${5:b})',
        desc: t('Creates a Color in a specific color space from the red, green, and blue values of another Color.')
    },
    {
        label: 'color-mix',
        func: 'color-mix(in $color-space, $color $percentage, $color $percentage)',
        insertText: 'color-mix(in ${1|srgb,srgb-linear,lab,oklab,xyz,xyz-d50,xyz-d65|}, ${3:color} ${4:percentage}, ${5:color} ${6:percentage})',
        desc: t('Mix two colors together in a rectangular color space.')
    },
    {
        label: 'color-mix hue',
        func: 'color-mix(in $color-space $interpolation-method hue, $color $percentage, $color $percentage)',
        insertText: 'color-mix(in ${1|hsl,hwb,lch,oklch|} ${2|shorter hue,longer hue,increasing hue,decreasing hue|}, ${3:color} ${4:percentage}, ${5:color} ${6:percentage})',
        desc: t('Mix two colors together in a polar color space.')
    },
];
const colorFunctionNameRegExp = /^(rgb|rgba|hsl|hsla|hwb)$/i;
const colors = {
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
const colorsRegExp = new RegExp(`^(${Object.keys(colors).join('|')})$`, "i");
const colorKeywords = {
    'currentColor': 'The value of the \'color\' property. The computed value of the \'currentColor\' keyword is the computed value of the \'color\' property. If the \'currentColor\' keyword is set on the \'color\' property itself, it is treated as \'color:inherit\' at parse time.',
    'transparent': 'Fully transparent. This keyword can be considered a shorthand for rgba(0,0,0,0) which is its computed value.',
};
const colorKeywordsRegExp = new RegExp(`^(${Object.keys(colorKeywords).join('|')})$`, "i");
function getNumericValue(node, factor) {
    const val = node.getText();
    const m = val.match(/^([-+]?[0-9]*\.?[0-9]+)(%?)$/);
    if (m) {
        if (m[2]) {
            factor = 100.0;
        }
        const result = parseFloat(m[1]) / factor;
        if (result >= 0 && result <= 1) {
            return result;
        }
    }
    throw new Error();
}
function getAngle(node) {
    const val = node.getText();
    const m = val.match(/^([-+]?[0-9]*\.?[0-9]+)(deg|rad|grad|turn)?$/);
    if (m) {
        switch (m[2]) {
            case 'deg':
                return parseFloat(val) % 360;
            case 'rad':
                return (parseFloat(val) * 180 / Math.PI) % 360;
            case 'grad':
                return (parseFloat(val) * 0.9) % 360;
            case 'turn':
                return (parseFloat(val) * 360) % 360;
            default:
                if ('undefined' === typeof m[2]) {
                    return parseFloat(val) % 360;
                }
        }
    }
    throw new Error();
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
const Digit0 = 48;
const Digit9 = 57;
const A = 65;
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
function getColorValue(node) {
    if (node.type === NodeType.HexColorValue) {
        const text = node.getText();
        return colorFromHex(text);
    }
    else if (node.type === NodeType.Function) {
        const functionNode = node;
        const name = functionNode.getName();
        let colorValues = functionNode.getArguments().getChildren();
        if (colorValues.length === 1) {
            const functionArg = colorValues[0].getChildren();
            if (functionArg.length === 1 && functionArg[0].type === NodeType.Expression) {
                colorValues = functionArg[0].getChildren();
                if (colorValues.length === 3) {
                    const lastValue = colorValues[2];
                    if (lastValue instanceof BinaryExpression) {
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
            if (name === 'rgb' || name === 'rgba') {
                return {
                    red: getNumericValue(colorValues[0], 255.0),
                    green: getNumericValue(colorValues[1], 255.0),
                    blue: getNumericValue(colorValues[2], 255.0),
                    alpha
                };
            }
            else if (name === 'hsl' || name === 'hsla') {
                const h = getAngle(colorValues[0]);
                const s = getNumericValue(colorValues[1], 100.0);
                const l = getNumericValue(colorValues[2], 100.0);
                return colorFromHSL(h, s, l, alpha);
            }
            else if (name === 'hwb') {
                const h = getAngle(colorValues[0]);
                const w = getNumericValue(colorValues[1], 100.0);
                const b = getNumericValue(colorValues[2], 100.0);
                return colorFromHWB(h, w, b, alpha);
            }
        }
        catch (e) {
            // parse error on numeric value
            return null;
        }
    }
    else if (node.type === NodeType.Identifier) {
        if (node.parent && node.parent.type !== NodeType.Term) {
            return null;
        }
        const term = node.parent;
        if (term && term.parent && term.parent.type === NodeType.BinaryExpression) {
            const expression = term.parent;
            if (expression.parent && expression.parent.type === NodeType.ListEntry && expression.parent.key === expression) {
                return null;
            }
        }
        const candidateColor = node.getText().toLowerCase();
        if (candidateColor === 'none') {
            return null;
        }
        const colorHex = colors[candidateColor];
        if (colorHex) {
            return colorFromHex(colorHex);
        }
    }
    return null;
}

export { colorFromHSL, colorFromHWB, colorFromHex, colorFunctions, colorKeywords, colors, getColorValue, hexDigit, hslFromColor, hwbFromColor, isColorConstructor, isColorString };
