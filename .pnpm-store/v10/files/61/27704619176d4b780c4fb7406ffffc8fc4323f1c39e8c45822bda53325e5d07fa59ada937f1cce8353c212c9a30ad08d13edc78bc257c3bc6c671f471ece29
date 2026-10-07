import type { Selector, GetParamsFromSelectors, OutputSelector, SelectorArray, SelectorResultArray, DropFirst, MergeParameters, Expand, ObjValueTuple, Head, Tail } from './types';
export type { Selector, GetParamsFromSelectors, GetStateFromSelectors, OutputSelector, EqualityFn, SelectorArray, SelectorResultArray, ParametricSelector, OutputParametricSelector, OutputSelectorFields } from './types';
import { defaultMemoize, defaultEqualityCheck, DefaultMemoizeOptions } from './defaultMemoize';
export { defaultMemoize, defaultEqualityCheck };
export type { DefaultMemoizeOptions };
export declare function createSelectorCreator<
/** Selectors will eventually accept some function to be memoized */
F extends (...args: unknown[]) => unknown, 
/** A memoizer such as defaultMemoize that accepts a function + some possible options */
MemoizeFunction extends (func: F, ...options: any[]) => F, 
/** The additional options arguments to the memoizer */
MemoizeOptions extends unknown[] = DropFirst<Parameters<MemoizeFunction>>>(memoize: MemoizeFunction, ...memoizeOptionsFromArgs: DropFirst<Parameters<MemoizeFunction>>): CreateSelectorFunction<F, MemoizeFunction, MemoizeOptions, Expand<Pick<ReturnType<MemoizeFunction>, keyof ReturnType<MemoizeFunction>>>>;
export interface CreateSelectorOptions<MemoizeOptions extends unknown[]> {
    memoizeOptions: MemoizeOptions[0] | MemoizeOptions;
}
/**
 * An instance of createSelector, customized with a given memoize implementation
 */
export interface CreateSelectorFunction<F extends (...args: unknown[]) => unknown, MemoizeFunction extends (func: F, ...options: any[]) => F, MemoizeOptions extends unknown[] = DropFirst<Parameters<MemoizeFunction>>, Keys = Expand<Pick<ReturnType<MemoizeFunction>, keyof ReturnType<MemoizeFunction>>>> {
    /** Input selectors as separate inline arguments */
    <Selectors extends SelectorArray, Result>(...items: [
        ...Selectors,
        (...args: SelectorResultArray<Selectors>) => Result
    ]): OutputSelector<Selectors, Result, (...args: SelectorResultArray<Selectors>) => Result, GetParamsFromSelectors<Selectors>, Keys> & Keys;
    /** Input selectors as separate inline arguments with memoizeOptions passed */
    <Selectors extends SelectorArray, Result>(...items: [
        ...Selectors,
        (...args: SelectorResultArray<Selectors>) => Result,
        CreateSelectorOptions<MemoizeOptions>
    ]): OutputSelector<Selectors, Result, ((...args: SelectorResultArray<Selectors>) => Result), GetParamsFromSelectors<Selectors>, Keys> & Keys;
    /** Input selectors as a separate array */
    <Selectors extends SelectorArray, Result>(selectors: [...Selectors], combiner: (...args: SelectorResultArray<Selectors>) => Result, options?: CreateSelectorOptions<MemoizeOptions>): OutputSelector<Selectors, Result, (...args: SelectorResultArray<Selectors>) => Result, GetParamsFromSelectors<Selectors>, Keys> & Keys;
}
export declare const createSelector: CreateSelectorFunction<(...args: unknown[]) => unknown, typeof defaultMemoize, [equalityCheckOrOptions?: import("./types").EqualityFn | DefaultMemoizeOptions | undefined], {
    clearCache: () => void;
}>;
type SelectorsObject = {
    [key: string]: (...args: any[]) => any;
};
export interface StructuredSelectorCreator {
    <SelectorMap extends SelectorsObject, SelectorParams = MergeParameters<ObjValueTuple<SelectorMap>>>(selectorMap: SelectorMap, selectorCreator?: CreateSelectorFunction<any, any, any>): (state: Head<SelectorParams>, ...params: Tail<SelectorParams>) => {
        [Key in keyof SelectorMap]: ReturnType<SelectorMap[Key]>;
    };
    <State, Result = State>(selectors: {
        [K in keyof Result]: Selector<State, Result[K], never>;
    }, selectorCreator?: CreateSelectorFunction<any, any, any>): Selector<State, Result, never>;
}
export declare const createStructuredSelector: StructuredSelectorCreator;
