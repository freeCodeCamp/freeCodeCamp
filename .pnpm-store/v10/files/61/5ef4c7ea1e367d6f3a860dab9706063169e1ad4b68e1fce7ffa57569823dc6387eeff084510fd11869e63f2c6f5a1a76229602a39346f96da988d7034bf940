"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function deprecate(msg) {
    let stack;
    let stackStr = '';
    const error = new Error();
    if (error.stack) {
        stack = error.stack.replace(/^\s+at\s+/gm, '').split('\n');
        stack.slice(2, 7).forEach((s, i) => {
            stackStr += i === 1 ? '\n--> ' : '\n    ';
            stackStr += s;
        });
    }
    console.log(`GRAPHQL-COMPOSE DEPRECATION: ${msg} ${stackStr}\n\n`);
}
exports.default = deprecate;
//# sourceMappingURL=deprecate.js.map