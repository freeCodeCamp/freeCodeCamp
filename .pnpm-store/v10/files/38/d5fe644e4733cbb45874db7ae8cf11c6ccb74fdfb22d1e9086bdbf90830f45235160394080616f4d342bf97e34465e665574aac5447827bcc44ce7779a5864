"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dedent = void 0;
function dedent(strings, ...values) {
    const raw = typeof strings === 'string' ? [strings] : strings.raw;
    let result = '';
    for (let i = 0; i < raw.length; i++) {
        result += raw[i]
            .replace(/\\\n[ \t]*/g, '')
            .replace(/\\`/g, '`');
        if (i < values.length) {
            result += values[i];
        }
    }
    const lines = result.split('\n');
    let mindent = null;
    lines.forEach((l) => {
        const m = l.match(/^(\s+)\S+/);
        if (m) {
            const indent = m[1].length;
            if (!mindent) {
                mindent = indent;
            }
            else {
                mindent = Math.min(mindent, indent);
            }
        }
    });
    if (mindent !== null) {
        const m = mindent;
        result = lines.map((l) => (l[0] === ' ' ? l.slice(m) : l)).join('\n');
    }
    return (result
        .trim()
        .replace(/\\n/g, '\n'));
}
exports.dedent = dedent;
//# sourceMappingURL=dedent.js.map