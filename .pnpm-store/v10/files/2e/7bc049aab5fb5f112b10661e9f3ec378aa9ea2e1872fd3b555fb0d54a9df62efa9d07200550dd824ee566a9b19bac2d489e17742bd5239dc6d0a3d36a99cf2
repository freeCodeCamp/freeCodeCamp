/** A special constant with type `never` */
export const NEVER = Object.freeze({
    status: "aborted",
});
export /*@__NO_SIDE_EFFECTS__*/ function $constructor(name, initializer, params) {
    function init(inst, def) {
        var _a;
        Object.defineProperty(inst, "_zod", {
            value: inst._zod ?? {},
            enumerable: false,
        });
        (_a = inst._zod).traits ?? (_a.traits = new Set());
        inst._zod.traits.add(name);
        initializer(inst, def);
        // support prototype modifications
        for (const k in _.prototype) {
            if (!(k in inst))
                Object.defineProperty(inst, k, { value: _.prototype[k].bind(inst) });
        }
        inst._zod.constr = _;
        inst._zod.def = def;
    }
    // doesn't work if Parent has a constructor with arguments
    const Parent = params?.Parent ?? Object;
    class Definition extends Parent {
    }
    Object.defineProperty(Definition, "name", { value: name });
    function _(def) {
        var _a;
        const inst = params?.Parent ? new Definition() : this;
        init(inst, def);
        (_a = inst._zod).deferred ?? (_a.deferred = []);
        for (const fn of inst._zod.deferred) {
            fn();
        }
        return inst;
    }
    Object.defineProperty(_, "init", { value: init });
    Object.defineProperty(_, Symbol.hasInstance, {
        value: (inst) => {
            if (params?.Parent && inst instanceof params.Parent)
                return true;
            return inst?._zod?.traits?.has(name);
        },
    });
    Object.defineProperty(_, "name", { value: name });
    return _;
}
//////////////////////////////   UTILITIES   ///////////////////////////////////////
export const $brand = Symbol("zod_brand");
export class $ZodAsyncError extends Error {
    constructor() {
        super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
    }
}
export const globalConfig = {};
export function config(newConfig) {
    if (newConfig)
        Object.assign(globalConfig, newConfig);
    return globalConfig;
}
