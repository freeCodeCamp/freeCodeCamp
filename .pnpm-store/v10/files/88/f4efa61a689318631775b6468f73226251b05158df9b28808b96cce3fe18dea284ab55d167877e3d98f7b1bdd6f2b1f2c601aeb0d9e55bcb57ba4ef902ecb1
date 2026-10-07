"use strict";

exports._ = exports._tagged_template_literal = _tagged_template_literal;
function _tagged_template_literal(strings, raw) {
    if (!raw) raw = strings.slice(0);

    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
