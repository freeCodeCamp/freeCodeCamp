import { IProduceWithPatches, IProduce, ImmerState, Drafted, Patch, Objectish, Draft, PatchListener } from "../internal";
interface ProducersFns {
    produce: IProduce;
    produceWithPatches: IProduceWithPatches;
}
export declare class Immer implements ProducersFns {
    useProxies_: boolean;
    autoFreeze_: boolean;
    constructor(config?: {
        useProxies?: boolean;
        autoFreeze?: boolean;
    });
    /**
     * The `produce` function takes a value and a "recipe function" (whose
     * return value often depends on the base state). The recipe function is
     * free to mutate its first argument however it wants. All mutations are
     * only ever applied to a __copy__ of the base state.
     *
     * Pass only a function to create a "curried producer" which relieves you
     * from passing the recipe function every time.
     *
     * Only plain objects and arrays are made mutable. All other objects are
     * considered uncopyable.
     *
     * Note: This function is __bound__ to its `Immer` instance.
     *
     * @param {any} base - the initial state
     * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
     * @param {Function} patchListener - optional function that will be called with all the patches produced here
     * @returns {any} a new state, or the initial state if nothing was modified
     */
    produce: IProduce;
    produceWithPatches: IProduceWithPatches;
    createDraft<T extends Objectish>(base: T): Draft<T>;
    finishDraft<D extends Draft<any>>(draft: D, patchListener?: PatchListener): D extends Draft<infer T> ? T : never;
    /**
     * Pass true to automatically freeze all copies created by Immer.
     *
     * By default, auto-freezing is enabled.
     */
    setAutoFreeze(value: boolean): void;
    /**
     * Pass true to use the ES2015 `Proxy` class when creating drafts, which is
     * always faster than using ES5 proxies.
     *
     * By default, feature detection is used, so calling this is rarely necessary.
     */
    setUseProxies(value: boolean): void;
    applyPatches<T extends Objectish>(base: T, patches: Patch[]): T;
}
export declare function createProxy<T extends Objectish>(immer: Immer, value: T, parent?: ImmerState): Drafted<T, ImmerState>;
export {};
//# sourceMappingURL=immerClass.d.ts.map