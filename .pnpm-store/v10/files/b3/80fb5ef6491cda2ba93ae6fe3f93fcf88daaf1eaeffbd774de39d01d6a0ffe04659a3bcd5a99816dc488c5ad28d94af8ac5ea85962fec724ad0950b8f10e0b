"use strict";

;
[`log`, `warn`].forEach(method => {
  const old = console[method];
  console[method] = (...methodArgs) => {
    const error = new Error();
    let stack = error.stack ? error.stack.split(/\n/) : [];

    // Chrome includes a single "Error" line, FF doesn't.
    if (stack[0].indexOf(`Error`) === 0) {
      stack = stack.slice(1);
    }
    const [, trace] = stack[1] || ``;
    const args = [].slice.apply(methodArgs).concat([trace.trim()]);
    return old.apply(console, args);
  };
});
//# sourceMappingURL=log-line-function.js.map