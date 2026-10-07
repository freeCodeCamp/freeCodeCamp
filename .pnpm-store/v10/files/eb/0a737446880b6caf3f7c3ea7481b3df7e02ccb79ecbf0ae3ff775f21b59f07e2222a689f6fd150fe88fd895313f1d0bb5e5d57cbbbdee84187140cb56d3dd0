/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const positionKeywords = {
    'bottom': 'Computes to ‘100%’ for the vertical position if one or two values are given, otherwise specifies the bottom edge as the origin for the next offset.',
    'center': 'Computes to ‘50%’ (‘left 50%’) for the horizontal position if the horizontal position is not otherwise specified, or ‘50%’ (‘top 50%’) for the vertical position if it is.',
    'left': 'Computes to ‘0%’ for the horizontal position if one or two values are given, otherwise specifies the left edge as the origin for the next offset.',
    'right': 'Computes to ‘100%’ for the horizontal position if one or two values are given, otherwise specifies the right edge as the origin for the next offset.',
    'top': 'Computes to ‘0%’ for the vertical position if one or two values are given, otherwise specifies the top edge as the origin for the next offset.'
};
const repeatStyleKeywords = {
    'no-repeat': 'Placed once and not repeated in this direction.',
    'repeat': 'Repeated in this direction as often as needed to cover the background painting area.',
    'repeat-x': 'Computes to ‘repeat no-repeat’.',
    'repeat-y': 'Computes to ‘no-repeat repeat’.',
    'round': 'Repeated as often as will fit within the background positioning area. If it doesn’t fit a whole number of times, it is rescaled so that it does.',
    'space': 'Repeated as often as will fit within the background positioning area without being clipped and then the images are spaced out to fill the area.'
};
const lineStyleKeywords = {
    'dashed': 'A series of square-ended dashes.',
    'dotted': 'A series of round dots.',
    'double': 'Two parallel solid lines with some space between them.',
    'groove': 'Looks as if it were carved in the canvas.',
    'hidden': 'Same as ‘none’, but has different behavior in the border conflict resolution rules for border-collapsed tables.',
    'inset': 'Looks as if the content on the inside of the border is sunken into the canvas.',
    'none': 'No border. Color and width are ignored.',
    'outset': 'Looks as if the content on the inside of the border is coming out of the canvas.',
    'ridge': 'Looks as if it were coming out of the canvas.',
    'solid': 'A single line segment.'
};
const lineWidthKeywords = ['medium', 'thick', 'thin'];
const boxKeywords = {
    'border-box': 'The background is painted within (clipped to) the border box.',
    'content-box': 'The background is painted within (clipped to) the content box.',
    'padding-box': 'The background is painted within (clipped to) the padding box.'
};
const geometryBoxKeywords = {
    'margin-box': 'Uses the margin box as reference box.',
    'fill-box': 'Uses the object bounding box as reference box.',
    'stroke-box': 'Uses the stroke bounding box as reference box.',
    'view-box': 'Uses the nearest SVG viewport as reference box.'
};
const cssWideKeywords = {
    'initial': 'Represents the value specified as the property’s initial value.',
    'inherit': 'Represents the computed value of the property on the element’s parent.',
    'unset': 'Acts as either `inherit` or `initial`, depending on whether the property is inherited or not.'
};
const cssWideFunctions = {
    'var()': 'Evaluates the value of a custom variable.',
    'calc()': 'Evaluates an mathematical expression. The following operators can be used: + - * /.'
};
const imageFunctions = {
    'url()': 'Reference an image file by URL',
    'image()': 'Provide image fallbacks and annotations.',
    '-webkit-image-set()': 'Provide multiple resolutions. Remember to use unprefixed image-set() in addition.',
    'image-set()': 'Provide multiple resolutions of an image and const the UA decide which is most appropriate in a given situation.',
    '-moz-element()': 'Use an element in the document as an image. Remember to use unprefixed element() in addition.',
    'element()': 'Use an element in the document as an image.',
    'cross-fade()': 'Indicates the two images to be combined and how far along in the transition the combination is.',
    '-webkit-gradient()': 'Deprecated. Use modern linear-gradient() or radial-gradient() instead.',
    '-webkit-linear-gradient()': 'Linear gradient. Remember to use unprefixed version in addition.',
    '-moz-linear-gradient()': 'Linear gradient. Remember to use unprefixed version in addition.',
    '-o-linear-gradient()': 'Linear gradient. Remember to use unprefixed version in addition.',
    'linear-gradient()': 'A linear gradient is created by specifying a straight gradient line, and then several colors placed along that line.',
    '-webkit-repeating-linear-gradient()': 'Repeating Linear gradient. Remember to use unprefixed version in addition.',
    '-moz-repeating-linear-gradient()': 'Repeating Linear gradient. Remember to use unprefixed version in addition.',
    '-o-repeating-linear-gradient()': 'Repeating Linear gradient. Remember to use unprefixed version in addition.',
    'repeating-linear-gradient()': 'Same as linear-gradient, except the color-stops are repeated infinitely in both directions, with their positions shifted by multiples of the difference between the last specified color-stop’s position and the first specified color-stop’s position.',
    '-webkit-radial-gradient()': 'Radial gradient. Remember to use unprefixed version in addition.',
    '-moz-radial-gradient()': 'Radial gradient. Remember to use unprefixed version in addition.',
    'radial-gradient()': 'Colors emerge from a single point and smoothly spread outward in a circular or elliptical shape.',
    '-webkit-repeating-radial-gradient()': 'Repeating radial gradient. Remember to use unprefixed version in addition.',
    '-moz-repeating-radial-gradient()': 'Repeating radial gradient. Remember to use unprefixed version in addition.',
    'repeating-radial-gradient()': 'Same as radial-gradient, except the color-stops are repeated infinitely in both directions, with their positions shifted by multiples of the difference between the last specified color-stop’s position and the first specified color-stop’s position.'
};
const transitionTimingFunctions = {
    'ease': 'Equivalent to cubic-bezier(0.25, 0.1, 0.25, 1.0).',
    'ease-in': 'Equivalent to cubic-bezier(0.42, 0, 1.0, 1.0).',
    'ease-in-out': 'Equivalent to cubic-bezier(0.42, 0, 0.58, 1.0).',
    'ease-out': 'Equivalent to cubic-bezier(0, 0, 0.58, 1.0).',
    'linear': 'Equivalent to cubic-bezier(0.0, 0.0, 1.0, 1.0).',
    'step-end': 'Equivalent to steps(1, end).',
    'step-start': 'Equivalent to steps(1, start).',
    'steps()': 'The first parameter specifies the number of intervals in the function. The second parameter, which is optional, is either the value “start” or “end”.',
    'cubic-bezier()': 'Specifies a cubic-bezier curve. The four values specify points P1 and P2  of the curve as (x1, y1, x2, y2).',
    'cubic-bezier(0.6, -0.28, 0.735, 0.045)': 'Ease-in Back. Overshoots.',
    'cubic-bezier(0.68, -0.55, 0.265, 1.55)': 'Ease-in-out Back. Overshoots.',
    'cubic-bezier(0.175, 0.885, 0.32, 1.275)': 'Ease-out Back. Overshoots.',
    'cubic-bezier(0.6, 0.04, 0.98, 0.335)': 'Ease-in Circular. Based on half circle.',
    'cubic-bezier(0.785, 0.135, 0.15, 0.86)': 'Ease-in-out Circular. Based on half circle.',
    'cubic-bezier(0.075, 0.82, 0.165, 1)': 'Ease-out Circular. Based on half circle.',
    'cubic-bezier(0.55, 0.055, 0.675, 0.19)': 'Ease-in Cubic. Based on power of three.',
    'cubic-bezier(0.645, 0.045, 0.355, 1)': 'Ease-in-out Cubic. Based on power of three.',
    'cubic-bezier(0.215, 0.610, 0.355, 1)': 'Ease-out Cubic. Based on power of three.',
    'cubic-bezier(0.95, 0.05, 0.795, 0.035)': 'Ease-in Exponential. Based on two to the power ten.',
    'cubic-bezier(1, 0, 0, 1)': 'Ease-in-out Exponential. Based on two to the power ten.',
    'cubic-bezier(0.19, 1, 0.22, 1)': 'Ease-out Exponential. Based on two to the power ten.',
    'cubic-bezier(0.47, 0, 0.745, 0.715)': 'Ease-in Sine.',
    'cubic-bezier(0.445, 0.05, 0.55, 0.95)': 'Ease-in-out Sine.',
    'cubic-bezier(0.39, 0.575, 0.565, 1)': 'Ease-out Sine.',
    'cubic-bezier(0.55, 0.085, 0.68, 0.53)': 'Ease-in Quadratic. Based on power of two.',
    'cubic-bezier(0.455, 0.03, 0.515, 0.955)': 'Ease-in-out Quadratic. Based on power of two.',
    'cubic-bezier(0.25, 0.46, 0.45, 0.94)': 'Ease-out Quadratic. Based on power of two.',
    'cubic-bezier(0.895, 0.03, 0.685, 0.22)': 'Ease-in Quartic. Based on power of four.',
    'cubic-bezier(0.77, 0, 0.175, 1)': 'Ease-in-out Quartic. Based on power of four.',
    'cubic-bezier(0.165, 0.84, 0.44, 1)': 'Ease-out Quartic. Based on power of four.',
    'cubic-bezier(0.755, 0.05, 0.855, 0.06)': 'Ease-in Quintic. Based on power of five.',
    'cubic-bezier(0.86, 0, 0.07, 1)': 'Ease-in-out Quintic. Based on power of five.',
    'cubic-bezier(0.23, 1, 0.320, 1)': 'Ease-out Quintic. Based on power of five.'
};
const basicShapeFunctions = {
    'circle()': 'Defines a circle.',
    'ellipse()': 'Defines an ellipse.',
    'inset()': 'Defines an inset rectangle.',
    'polygon()': 'Defines a polygon.'
};
const units = {
    'length': ['cap', 'ch', 'cm', 'cqb', 'cqh', 'cqi', 'cqmax', 'cqmin', 'cqw', 'dvb', 'dvh', 'dvi', 'dvw', 'em', 'ex', 'ic', 'in', 'lh', 'lvb', 'lvh', 'lvi', 'lvw', 'mm', 'pc', 'pt', 'px', 'q', 'rcap', 'rch', 'rem', 'rex', 'ric', 'rlh', 'svb', 'svh', 'svi', 'svw', 'vb', 'vh', 'vi', 'vmax', 'vmin', 'vw'],
    'angle': ['deg', 'rad', 'grad', 'turn'],
    'time': ['ms', 's'],
    'frequency': ['Hz', 'kHz'],
    'resolution': ['dpi', 'dpcm', 'dppx'],
    'percentage': ['%', 'fr']
};
const html5Tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption',
    'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer',
    'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link',
    'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q',
    'rb', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td',
    'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'const', 'video', 'wbr'];
const svgElements = ['circle', 'clipPath', 'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting',
    'feDisplacementMap', 'feDistantLight', 'feDropShadow', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology',
    'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'foreignObject', 'g', 'hatch', 'hatchpath', 'image', 'line', 'linearGradient',
    'marker', 'mask', 'mesh', 'meshpatch', 'meshrow', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'set', 'solidcolor', 'stop', 'svg', 'switch',
    'symbol', 'text', 'textPath', 'tspan', 'use', 'view'];
const pageBoxDirectives = [
    '@bottom-center', '@bottom-left', '@bottom-left-corner', '@bottom-right', '@bottom-right-corner',
    '@left-bottom', '@left-middle', '@left-top', '@right-bottom', '@right-middle', '@right-top',
    '@top-center', '@top-left', '@top-left-corner', '@top-right', '@top-right-corner'
];

export { basicShapeFunctions, boxKeywords, cssWideFunctions, cssWideKeywords, geometryBoxKeywords, html5Tags, imageFunctions, lineStyleKeywords, lineWidthKeywords, pageBoxDirectives, positionKeywords, repeatStyleKeywords, svgElements, transitionTimingFunctions, units };
