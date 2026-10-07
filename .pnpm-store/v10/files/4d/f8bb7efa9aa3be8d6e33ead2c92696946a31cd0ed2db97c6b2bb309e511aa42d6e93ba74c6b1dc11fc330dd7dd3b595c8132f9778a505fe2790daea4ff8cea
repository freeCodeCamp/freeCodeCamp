var lexer = require('css-tree').lexer;
var packNumber = require('./Number').pack;

// http://www.w3.org/TR/css3-color/#svg-color
var NAME_TO_HEX = {
    'aliceblue': 'f0f8ff',
    'antiquewhite': 'faebd7',
    'aqua': '0ff',
    'aquamarine': '7fffd4',
    'azure': 'f0ffff',
    'beige': 'f5f5dc',
    'bisque': 'ffe4c4',
    'black': '000',
    'blanchedalmond': 'ffebcd',
    'blue': '00f',
    'blueviolet': '8a2be2',
    'brown': 'a52a2a',
    'burlywood': 'deb887',
    'cadetblue': '5f9ea0',
    'chartreuse': '7fff00',
    'chocolate': 'd2691e',
    'coral': 'ff7f50',
    'cornflowerblue': '6495ed',
    'cornsilk': 'fff8dc',
    'crimson': 'dc143c',
    'cyan': '0ff',
    'darkblue': '00008b',
    'darkcyan': '008b8b',
    'darkgoldenrod': 'b8860b',
    'darkgray': 'a9a9a9',
    'darkgrey': 'a9a9a9',
    'darkgreen': '006400',
    'darkkhaki': 'bdb76b',
    'darkmagenta': '8b008b',
    'darkolivegreen': '556b2f',
    'darkorange': 'ff8c00',
    'darkorchid': '9932cc',
    'darkred': '8b0000',
    'darksalmon': 'e9967a',
    'darkseagreen': '8fbc8f',
    'darkslateblue': '483d8b',
    'darkslategray': '2f4f4f',
    'darkslategrey': '2f4f4f',
    'darkturquoise': '00ced1',
    'darkviolet': '9400d3',
    'deeppink': 'ff1493',
    'deepskyblue': '00bfff',
    'dimgray': '696969',
    'dimgrey': '696969',
    'dodgerblue': '1e90ff',
    'firebrick': 'b22222',
    'floralwhite': 'fffaf0',
    'forestgreen': '228b22',
    'fuchsia': 'f0f',
    'gainsboro': 'dcdcdc',
    'ghostwhite': 'f8f8ff',
    'gold': 'ffd700',
    'goldenrod': 'daa520',
    'gray': '808080',
    'grey': '808080',
    'green': '008000',
    'greenyellow': 'adff2f',
    'honeydew': 'f0fff0',
    'hotpink': 'ff69b4',
    'indianred': 'cd5c5c',
    'indigo': '4b0082',
    'ivory': 'fffff0',
    'khaki': 'f0e68c',
    'lavender': 'e6e6fa',
    'lavenderblush': 'fff0f5',
    'lawngreen': '7cfc00',
    'lemonchiffon': 'fffacd',
    'lightblue': 'add8e6',
    'lightcoral': 'f08080',
    'lightcyan': 'e0ffff',
    'lightgoldenrodyellow': 'fafad2',
    'lightgray': 'd3d3d3',
    'lightgrey': 'd3d3d3',
    'lightgreen': '90ee90',
    'lightpink': 'ffb6c1',
    'lightsalmon': 'ffa07a',
    'lightseagreen': '20b2aa',
    'lightskyblue': '87cefa',
    'lightslategray': '789',
    'lightslategrey': '789',
    'lightsteelblue': 'b0c4de',
    'lightyellow': 'ffffe0',
    'lime': '0f0',
    'limegreen': '32cd32',
    'linen': 'faf0e6',
    'magenta': 'f0f',
    'maroon': '800000',
    'mediumaquamarine': '66cdaa',
    'mediumblue': '0000cd',
    'mediumorchid': 'ba55d3',
    'mediumpurple': '9370db',
    'mediumseagreen': '3cb371',
    'mediumslateblue': '7b68ee',
    'mediumspringgreen': '00fa9a',
    'mediumturquoise': '48d1cc',
    'mediumvioletred': 'c71585',
    'midnightblue': '191970',
    'mintcream': 'f5fffa',
    'mistyrose': 'ffe4e1',
    'moccasin': 'ffe4b5',
    'navajowhite': 'ffdead',
    'navy': '000080',
    'oldlace': 'fdf5e6',
    'olive': '808000',
    'olivedrab': '6b8e23',
    'orange': 'ffa500',
    'orangered': 'ff4500',
    'orchid': 'da70d6',
    'palegoldenrod': 'eee8aa',
    'palegreen': '98fb98',
    'paleturquoise': 'afeeee',
    'palevioletred': 'db7093',
    'papayawhip': 'ffefd5',
    'peachpuff': 'ffdab9',
    'peru': 'cd853f',
    'pink': 'ffc0cb',
    'plum': 'dda0dd',
    'powderblue': 'b0e0e6',
    'purple': '800080',
    'rebeccapurple': '639',
    'red': 'f00',
    'rosybrown': 'bc8f8f',
    'royalblue': '4169e1',
    'saddlebrown': '8b4513',
    'salmon': 'fa8072',
    'sandybrown': 'f4a460',
    'seagreen': '2e8b57',
    'seashell': 'fff5ee',
    'sienna': 'a0522d',
    'silver': 'c0c0c0',
    'skyblue': '87ceeb',
    'slateblue': '6a5acd',
    'slategray': '708090',
    'slategrey': '708090',
    'snow': 'fffafa',
    'springgreen': '00ff7f',
    'steelblue': '4682b4',
    'tan': 'd2b48c',
    'teal': '008080',
    'thistle': 'd8bfd8',
    'tomato': 'ff6347',
    'turquoise': '40e0d0',
    'violet': 'ee82ee',
    'wheat': 'f5deb3',
    'white': 'fff',
    'whitesmoke': 'f5f5f5',
    'yellow': 'ff0',
    'yellowgreen': '9acd32'
};

var HEX_TO_NAME = {
    '800000': 'maroon',
    '800080': 'purple',
    '808000': 'olive',
    '808080': 'gray',
    '00ffff': 'cyan',
    'f0ffff': 'azure',
    'f5f5dc': 'beige',
    'ffe4c4': 'bisque',
    '000000': 'black',
    '0000ff': 'blue',
    'a52a2a': 'brown',
    'ff7f50': 'coral',
    'ffd700': 'gold',
    '008000': 'green',
    '4b0082': 'indigo',
    'fffff0': 'ivory',
    'f0e68c': 'khaki',
    '00ff00': 'lime',
    'faf0e6': 'linen',
    '000080': 'navy',
    'ffa500': 'orange',
    'da70d6': 'orchid',
    'cd853f': 'peru',
    'ffc0cb': 'pink',
    'dda0dd': 'plum',
    'f00': 'red',
    'ff0000': 'red',
    'fa8072': 'salmon',
    'a0522d': 'sienna',
    'c0c0c0': 'silver',
    'fffafa': 'snow',
    'd2b48c': 'tan',
    '008080': 'teal',
    'ff6347': 'tomato',
    'ee82ee': 'violet',
    'f5deb3': 'wheat',
    'ffffff': 'white',
    'ffff00': 'yellow'
};

function hueToRgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}

function hslToRgb(h, s, l, a) {
    var r;
    var g;
    var b;

    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;

        r = hueToRgb(p, q, h + 1 / 3);
        g = hueToRgb(p, q, h);
        b = hueToRgb(p, q, h - 1 / 3);
    }

    return [
        Math.round(r * 255),
        Math.round(g * 255),
        Math.round(b * 255),
        a
    ];
}

function toHex(value) {
    value = value.toString(16);
    return value.length === 1 ? '0' + value : value;
}

function parseFunctionArgs(functionArgs, count, rgb) {
    var cursor = functionArgs.head;
    var args = [];
    var wasValue = false;

    while (cursor !== null) {
        var node = cursor.data;
        var type = node.type;

        switch (type) {
            case 'Number':
            case 'Percentage':
                if (wasValue) {
                    return;
                }

                wasValue = true;
                args.push({
                    type: type,
                    value: Number(node.value)
                });
                break;

            case 'Operator':
                if (node.value === ',') {
                    if (!wasValue) {
                        return;
                    }
                    wasValue = false;
                } else if (wasValue || node.value !== '+') {
                    return;
                }
                break;

            default:
                // something we couldn't understand
                return;
        }

        cursor = cursor.next;
    }

    if (args.length !== count) {
        // invalid arguments count
        // TODO: remove those tokens
        return;
    }

    if (args.length === 4) {
        if (args[3].type !== 'Number') {
            // 4th argument should be a number
            // TODO: remove those tokens
            return;
        }

        args[3].type = 'Alpha';
    }

    if (rgb) {
        if (args[0].type !== args[1].type || args[0].type !== args[2].type) {
            // invalid color, numbers and percentage shouldn't be mixed
            // TODO: remove those tokens
            return;
        }
    } else {
        if (args[0].type !== 'Number' ||
            args[1].type !== 'Percentage' ||
            args[2].type !== 'Percentage') {
            // invalid color, for hsl values should be: number, percentage, percentage
            // TODO: remove those tokens
            return;
        }

        args[0].type = 'Angle';
    }

    return args.map(function(arg) {
        var value = Math.max(0, arg.value);

        switch (arg.type) {
            case 'Number':
                // fit value to [0..255] range
                value = Math.min(value, 255);
                break;

            case 'Percentage':
                // convert 0..100% to value in [0..255] range
                value = Math.min(value, 100) / 100;

                if (!rgb) {
                    return value;
                }

                value = 255 * value;
                break;

            case 'Angle':
                // fit value to (-360..360) range
                return (((value % 360) + 360) % 360) / 360;

            case 'Alpha':
                // fit value to [0..1] range
                return Math.min(value, 1);
        }

        return Math.round(value);
    });
}

function compressFunction(node, item, list) {
    var functionName = node.name;
    var args;

    if (functionName === 'rgba' || functionName === 'hsla') {
        args = parseFunctionArgs(node.children, 4, functionName === 'rgba');

        if (!args) {
            // something went wrong
            return;
        }

        if (functionName === 'hsla') {
            args = hslToRgb.apply(null, args);
            node.name = 'rgba';
        }

        if (args[3] === 0) {
            // try to replace `rgba(x, x, x, 0)` to `transparent`
            // always replace `rgba(0, 0, 0, 0)` to `transparent`
            // otherwise avoid replacement in gradients since it may break color transition
            // http://stackoverflow.com/questions/11829410/css3-gradient-rendering-issues-from-transparent-to-white
            var scopeFunctionName = this.function && this.function.name;
            if ((args[0] === 0 && args[1] === 0 && args[2] === 0) ||
                !/^(?:to|from|color-stop)$|gradient$/i.test(scopeFunctionName)) {

                item.data = {
                    type: 'Identifier',
                    loc: node.loc,
                    name: 'transparent'
                };

                return;
            }
        }

        if (args[3] !== 1) {
            // replace argument values for normalized/interpolated
            node.children.each(function(node, item, list) {
                if (node.type === 'Operator') {
                    if (node.value !== ',') {
                        list.remove(item);
                    }
                    return;
                }

                item.data = {
                    type: 'Number',
                    loc: node.loc,
                    value: packNumber(args.shift(), null)
                };
            });

            return;
        }

        // otherwise convert to rgb, i.e. rgba(255, 0, 0, 1) -> rgb(255, 0, 0)
        functionName = 'rgb';
    }

    if (functionName === 'hsl') {
        args = args || parseFunctionArgs(node.children, 3, false);

        if (!args) {
            // something went wrong
            return;
        }

        // convert to rgb
        args = hslToRgb.apply(null, args);
        functionName = 'rgb';
    }

    if (functionName === 'rgb') {
        args = args || parseFunctionArgs(node.children, 3, true);

        if (!args) {
            // something went wrong
            return;
        }

        // check if color is not at the end and not followed by space
        var next = item.next;
        if (next && next.data.type !== 'WhiteSpace') {
            list.insert(list.createItem({
                type: 'WhiteSpace',
                value: ' '
            }), next);
        }

        item.data = {
            type: 'Hash',
            loc: node.loc,
            value: toHex(args[0]) + toHex(args[1]) + toHex(args[2])
        };

        compressHex(item.data, item);
    }
}

function compressIdent(node, item) {
    if (this.declaration === null) {
        return;
    }

    var color = node.name.toLowerCase();

    if (NAME_TO_HEX.hasOwnProperty(color) &&
        lexer.matchDeclaration(this.declaration).isType(node, 'color')) {
        var hex = NAME_TO_HEX[color];

        if (hex.length + 1 <= color.length) {
            // replace for shorter hex value
            item.data = {
                type: 'Hash',
                loc: node.loc,
                value: hex
            };
        } else {
            // special case for consistent colors
            if (color === 'grey') {
                color = 'gray';
            }

            // just replace value for lower cased name
            node.name = color;
        }
    }
}

function compressHex(node, item) {
    var color = node.value.toLowerCase();

    // #112233 -> #123
    if (color.length === 6 &&
        color[0] === color[1] &&
        color[2] === color[3] &&
        color[4] === color[5]) {
        color = color[0] + color[2] + color[4];
    }

    if (HEX_TO_NAME[color]) {
        item.data = {
            type: 'Identifier',
            loc: node.loc,
            name: HEX_TO_NAME[color]
        };
    } else {
        node.value = color;
    }
}

module.exports = {
    compressFunction: compressFunction,
    compressIdent: compressIdent,
    compressHex: compressHex
};
