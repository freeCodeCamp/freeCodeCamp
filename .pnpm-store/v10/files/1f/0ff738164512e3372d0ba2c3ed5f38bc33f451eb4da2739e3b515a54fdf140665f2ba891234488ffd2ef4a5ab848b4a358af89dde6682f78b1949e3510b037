import type * as core from "./core.cjs";
import * as schemas from "./schemas.cjs";
import { $ZodTuple } from "./schemas.cjs";
import type * as util from "./util.cjs";
export interface $ZodFunctionDef<In extends $ZodFunctionIn = $ZodFunctionIn, Out extends $ZodFunctionOut = $ZodFunctionOut> {
    type: "function";
    input: In;
    output: Out;
}
export type $ZodFunctionArgs = schemas.$ZodType<unknown[], unknown[]>;
export type $ZodFunctionIn = $ZodFunctionArgs;
export type $ZodFunctionOut = schemas.$ZodType;
export type $InferInnerFunctionType<Args extends $ZodFunctionIn, Returns extends $ZodFunctionOut> = (...args: $ZodFunctionIn extends Args ? never[] : core.output<Args>) => core.input<Returns>;
export type $InferInnerFunctionTypeAsync<Args extends $ZodFunctionIn, Returns extends $ZodFunctionOut> = (...args: $ZodFunctionIn extends Args ? never[] : core.output<Args>) => util.MaybeAsync<core.input<Returns>>;
export type $InferOuterFunctionType<Args extends $ZodFunctionIn, Returns extends $ZodFunctionOut> = (...args: $ZodFunctionIn extends Args ? never[] : core.input<Args>) => core.output<Returns>;
export type $InferOuterFunctionTypeAsync<Args extends $ZodFunctionIn, Returns extends $ZodFunctionOut> = (...args: $ZodFunctionIn extends Args ? never[] : core.input<Args>) => util.MaybeAsync<core.output<Returns>>;
export declare class $ZodFunction<Args extends $ZodFunctionIn = $ZodFunctionIn, Returns extends $ZodFunctionOut = $ZodFunctionOut> {
    def: $ZodFunctionDef<Args, Returns>;
    /** @deprecated */
    _def: $ZodFunctionDef<Args, Returns>;
    _input: $InferInnerFunctionType<Args, Returns>;
    _output: $InferOuterFunctionType<Args, Returns>;
    constructor(def: $ZodFunctionDef<Args, Returns>);
    implement<F extends $InferInnerFunctionType<Args, Returns>>(func: F): (...args: Parameters<this["_output"]>) => ReturnType<F> extends ReturnType<this["_output"]> ? ReturnType<F> : ReturnType<this["_output"]>;
    implementAsync<F extends $InferInnerFunctionTypeAsync<Args, Returns>>(func: F): F extends $InferOuterFunctionTypeAsync<Args, Returns> ? F : $InferOuterFunctionTypeAsync<Args, Returns>;
    input<const Items extends util.TupleItems, const Rest extends $ZodFunctionOut = $ZodFunctionOut>(args: Items, rest?: Rest): $ZodFunction<schemas.$ZodTuple<Items, Rest>, Returns>;
    input<NewArgs extends $ZodFunctionIn>(args: NewArgs): $ZodFunction<NewArgs, Returns>;
    output<NewReturns extends schemas.$ZodType>(output: NewReturns): $ZodFunction<Args, NewReturns>;
}
export interface $ZodFunctionParams<I extends $ZodFunctionIn, O extends schemas.$ZodType> {
    input?: I;
    output?: O;
}
declare function _function(): $ZodFunction;
declare function _function<const In extends Array<schemas.$ZodType> = Array<schemas.$ZodType>>(params: {
    input: In;
}): $ZodFunction<$ZodTuple<In, null>, $ZodFunctionOut>;
declare function _function<const In extends Array<schemas.$ZodType> = Array<schemas.$ZodType>, const Out extends $ZodFunctionOut = $ZodFunctionOut>(params: {
    input: In;
    output: Out;
}): $ZodFunction<$ZodTuple<In, null>, Out>;
declare function _function<const In extends $ZodFunctionIn = $ZodFunctionIn>(params: {
    input: In;
}): $ZodFunction<In, $ZodFunctionOut>;
declare function _function<const Out extends $ZodFunctionOut = $ZodFunctionOut>(params: {
    output: Out;
}): $ZodFunction<$ZodFunctionIn, Out>;
declare function _function<In extends $ZodFunctionIn = $ZodFunctionIn, Out extends schemas.$ZodType = schemas.$ZodType>(params?: {
    input: In;
    output: Out;
}): $ZodFunction<In, Out>;
export { _function as function };
