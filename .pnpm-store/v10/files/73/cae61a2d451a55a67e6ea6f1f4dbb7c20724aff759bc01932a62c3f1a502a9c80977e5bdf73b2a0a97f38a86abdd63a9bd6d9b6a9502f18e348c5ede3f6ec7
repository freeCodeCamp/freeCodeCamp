import { getEscapedAny } from './get-escaped-any.js';
import { getEscapedJsonUnsafe } from './get-escaped-json-unsafe.js';
const addSlashes = (str, options = {}) => {
    const { getEscaped = getEscapedJsonUnsafe } = options;
    let result = '';
    for (const char of str) {
        const escaped = getEscaped(char);
        if (!escaped) {
            result += char;
        }
        else if (escaped === true || escaped.length < 2) {
            result += getEscapedAny(char) || char;
        }
        else {
            result += escaped;
        }
    }
    return result;
};
export { addSlashes };
//# sourceMappingURL=add-slashes.js.map