import { unescape } from './escape-html.js';

var hasAlphanumeric = new RegExp(/\w/i);
function getHighlightFromSiblings(parts, i) {
    var _parts_, _parts_1;
    var current = parts[i];
    var isNextHighlighted = ((_parts_ = parts[i + 1]) === null || _parts_ === void 0 ? void 0 : _parts_.isHighlighted) || true;
    var isPreviousHighlighted = ((_parts_1 = parts[i - 1]) === null || _parts_1 === void 0 ? void 0 : _parts_1.isHighlighted) || true;
    if (!hasAlphanumeric.test(unescape(current.value)) && isPreviousHighlighted === isNextHighlighted) {
        return isPreviousHighlighted;
    }
    return current.isHighlighted;
}

export { getHighlightFromSiblings };
