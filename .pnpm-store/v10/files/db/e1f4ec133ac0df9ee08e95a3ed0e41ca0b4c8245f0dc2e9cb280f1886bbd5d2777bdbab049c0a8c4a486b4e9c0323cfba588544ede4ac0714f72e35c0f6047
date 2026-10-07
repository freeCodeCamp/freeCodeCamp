"use strict";
function noop() { }
function once(emitter, name) {
    const o = once.spread(emitter, name);
    const r = o.then((args) => args[0]);
    r.cancel = o.cancel;
    return r;
}
(function (once) {
    function spread(emitter, name) {
        let c = null;
        const p = new Promise((resolve, reject) => {
            function cancel() {
                emitter.removeListener(name, onEvent);
                emitter.removeListener('error', onError);
                p.cancel = noop;
            }
            function onEvent(...args) {
                cancel();
                resolve(args);
            }
            function onError(err) {
                cancel();
                reject(err);
            }
            c = cancel;
            emitter.on(name, onEvent);
            emitter.on('error', onError);
        });
        if (!c) {
            throw new TypeError('Could not get `cancel()` function');
        }
        p.cancel = c;
        return p;
    }
    once.spread = spread;
})(once || (once = {}));
module.exports = once;
//# sourceMappingURL=index.js.map