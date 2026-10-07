"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeApply = safeApply;
const untouchedApply = Function.prototype.apply;
const ApplySymbol = Symbol('apply');
function safeExtractApply(f) {
    try {
        return f.apply;
    }
    catch (err) {
        return undefined;
    }
}
function safeApplyHacky(f, instance, args) {
    const ff = f;
    ff[ApplySymbol] = untouchedApply;
    const out = ff[ApplySymbol](instance, args);
    delete ff[ApplySymbol];
    return out;
}
function safeApply(f, instance, args) {
    if (safeExtractApply(f) === untouchedApply) {
        return f.apply(instance, args);
    }
    return safeApplyHacky(f, instance, args);
}
