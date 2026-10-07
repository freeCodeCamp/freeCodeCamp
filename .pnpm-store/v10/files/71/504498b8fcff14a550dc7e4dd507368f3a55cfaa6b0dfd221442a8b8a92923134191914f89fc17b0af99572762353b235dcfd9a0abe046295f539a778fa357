import { FileAccess } from '../common/network.js';

function asFragment(raw) {
    return raw;
}
function asCssValueWithDefault(cssPropertyValue, dflt) {
    if (cssPropertyValue !== undefined) {
        const variableMatch = cssPropertyValue.match(/^\s*var\((.+)\)$/);
        if (variableMatch) {
            const varArguments = variableMatch[1].split(',', 2);
            if (varArguments.length === 2) {
                dflt = asCssValueWithDefault(varArguments[1].trim(), dflt);
            }
            return `var(${varArguments[0]}, ${dflt})`;
        }
        return cssPropertyValue;
    }
    return dflt;
}
function identValue(value) {
    const out = value.replaceAll(/[^_\-a-z0-9]/gi, '');
    if (out !== value) {
        console.warn(`CSS ident value ${value} modified to ${out} to be safe for CSS`);
    }
    return asFragment(out);
}
function stringValue(value) {
    return asFragment(`'${value.replaceAll(/'/g, '\\000027')}'`);
}
/**
 * returns url('...')
 */
function asCSSUrl(uri) {
    if (!uri) {
        return asFragment(`url('')`);
    }
    return inline `url('${asFragment(CSS.escape(FileAccess.uriToBrowserUri(uri).toString(true)))}')`;
}
function className(value, escapingExpected = false) {
    const out = CSS.escape(value);
    if (!escapingExpected && out !== value) {
        console.warn(`CSS class name ${value} modified to ${out} to be safe for CSS`);
    }
    return asFragment(out);
}
/**
 * Template string tag that that constructs a CSS fragment.
 *
 * All expressions in the template must be css safe values.
 */
function inline(strings, ...values) {
    return asFragment(strings.reduce((result, str, i) => {
        const value = values[i] || '';
        return result + str + value;
    }, ''));
}
class Builder {
    constructor() {
        this._parts = [];
    }
    push(...parts) {
        this._parts.push(...parts);
    }
    join(joiner = '\n') {
        return asFragment(this._parts.join(joiner));
    }
}

export { Builder, asCSSUrl, asCssValueWithDefault, className, identValue, inline, stringValue };
