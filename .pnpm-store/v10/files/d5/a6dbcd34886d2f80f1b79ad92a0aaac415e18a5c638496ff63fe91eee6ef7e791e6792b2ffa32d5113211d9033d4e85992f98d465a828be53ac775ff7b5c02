"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxEscapable = 
// eslint-disable-next-line no-control-regex, no-misleading-character-class
/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
const escaped = {
    "\b": "\\b",
    "\t": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    '"': '\\"',
    "\\": "\\\\",
};
function quote(s) {
    rxEscapable.lastIndex = 0;
    return ('"' +
        (rxEscapable.test(s)
            ? s.replace(rxEscapable, (a) => {
                const c = escaped[a];
                return typeof c === "string"
                    ? c
                    : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
            })
            : s) +
        '"');
}
exports.default = quote;
quote.code = 'require("ajv/dist/runtime/quote").default';
//# sourceMappingURL=quote.js.map