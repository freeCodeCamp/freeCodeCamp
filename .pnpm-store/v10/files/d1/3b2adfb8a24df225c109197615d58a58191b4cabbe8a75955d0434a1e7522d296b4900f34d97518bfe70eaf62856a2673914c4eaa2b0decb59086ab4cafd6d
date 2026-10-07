"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMemo = useMemo;
const hook_engine_ts_1 = require("./hook-engine.js");
function useMemo(fn, dependencies) {
    return (0, hook_engine_ts_1.withPointer)((pointer) => {
        const prev = pointer.get();
        if (!prev ||
            prev.dependencies.length !== dependencies.length ||
            prev.dependencies.some((dep, i) => dep !== dependencies[i])) {
            const value = fn();
            pointer.set({ value, dependencies });
            return value;
        }
        return prev.value;
    });
}
