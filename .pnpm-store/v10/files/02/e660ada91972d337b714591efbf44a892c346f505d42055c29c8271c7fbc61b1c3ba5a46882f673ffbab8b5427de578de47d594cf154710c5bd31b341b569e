"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTypeScriptPerformance(typescript) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return typescript.performance;
}
function connectTypeScriptPerformance(typescript, performance) {
    const typeScriptPerformance = getTypeScriptPerformance(typescript);
    if (typeScriptPerformance) {
        const { enable, disable } = performance;
        return Object.assign(Object.assign({}, performance), { enable() {
                var _a;
                enable();
                (_a = typeScriptPerformance.enable) === null || _a === void 0 ? void 0 : _a.call(typeScriptPerformance);
            },
            disable() {
                var _a;
                disable();
                (_a = typeScriptPerformance.disable) === null || _a === void 0 ? void 0 : _a.call(typeScriptPerformance);
            } });
    }
    else {
        return performance;
    }
}
exports.connectTypeScriptPerformance = connectTypeScriptPerformance;
