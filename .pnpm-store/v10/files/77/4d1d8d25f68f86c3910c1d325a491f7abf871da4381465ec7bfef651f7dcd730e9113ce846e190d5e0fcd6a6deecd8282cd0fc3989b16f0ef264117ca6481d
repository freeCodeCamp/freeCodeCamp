"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEffect = useEffect;
const hook_engine_ts_1 = require("./hook-engine.js");
function useEffect(cb, depArray) {
    (0, hook_engine_ts_1.withPointer)((pointer) => {
        const oldDeps = pointer.get();
        const hasChanged = !Array.isArray(oldDeps) || depArray.some((dep, i) => !Object.is(dep, oldDeps[i]));
        if (hasChanged) {
            hook_engine_ts_1.effectScheduler.queue(cb);
        }
        pointer.set(depArray);
    });
}
