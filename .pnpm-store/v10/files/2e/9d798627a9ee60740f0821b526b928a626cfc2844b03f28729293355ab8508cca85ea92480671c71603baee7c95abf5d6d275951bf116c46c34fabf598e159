import { type TSchema } from '../types/schema.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TArray } from '../types/array.mjs';
import { type TTuple } from '../types/tuple.mjs';
import { type TExtendsLeft } from './extends_left.mjs';
import { type TExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
import { type TInstantiateElements } from '../engine/instantiate.mjs';
import { type TTryRestInferable, type TTryInferable, type TInferable, type TInferTupleResult, type TInferUnionResult } from './inference.mjs';
type TReverse<Types extends TSchema[], Result extends TSchema[] = []> = (Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TReverse<Right, [Left, ...Result]> : Result);
type TApplyReverse<Types extends TSchema[], Reversed extends boolean> = Reversed extends true ? TReverse<Types> : Types;
type TReversed<Types extends TSchema[], First extends TSchema | undefined = Types extends [infer Left extends TSchema, ...infer _ extends TSchema[]] ? Left : undefined, Inferable extends TSchema | undefined = First extends TSchema ? TTryRestInferable<First> : undefined, Result extends boolean = Inferable extends TSchema ? true : false> = Result;
type TElementsCompare<Inferred extends TProperties, Reversed extends boolean, Left extends TSchema, LeftRest extends TSchema[], Right extends TSchema, RightRest extends TSchema[]> = (TExtendsLeft<Inferred, Left, Right> extends Result.TExtendsTrueLike<infer CheckInferred extends TProperties> ? TElements<CheckInferred, Reversed, LeftRest, RightRest> : Result.TExtendsFalse);
type TElementsLeft<Inferred extends TProperties, Reversed extends boolean, LeftRest extends TSchema[], Right extends TSchema, RightRest extends TSchema[], Inferable extends TInferable | undefined = TTryRestInferable<Right>> = (Inferable extends TInferable ? TInferTupleResult<Inferred, Inferable['name'], TApplyReverse<LeftRest, Reversed>, Inferable['type']> : LeftRest extends [infer Head extends TSchema, ...infer Tail extends TSchema[]] ? TElementsCompare<Inferred, Reversed, Head, Tail, Right, RightRest> : Result.TExtendsFalse);
type TElementsRight<Inferred extends TProperties, Reversed extends boolean, LeftRest extends TSchema[], RightRest extends TSchema[]> = (RightRest extends [infer Head extends TSchema, ...infer Tail extends TSchema[]] ? TElementsLeft<Inferred, Reversed, LeftRest, Head, Tail> : LeftRest['length'] extends 0 ? Result.TExtendsTrue<Inferred> : Result.TExtendsFalse);
type TElements<Inferred extends TProperties, Reversed extends boolean, LeftRest extends TSchema[], RightRest extends TSchema[]> = TElementsRight<Inferred, Reversed, LeftRest, RightRest>;
type TExtendsTupleToTuple<Inferred extends TProperties, Left extends TSchema[], Right extends TSchema[], InstantiatedRight extends TSchema[] = TInstantiateElements<Inferred, {
    callstack: [];
}, Right>, Reversed extends boolean = TReversed<InstantiatedRight>> = TElements<Inferred, Reversed, TApplyReverse<Left, Reversed>, TApplyReverse<InstantiatedRight, Reversed>>;
type TExtendsTupleToArray<Inferred extends TProperties, Left extends TSchema[], Right extends TSchema, Inferrable extends TInferable | undefined = TTryInferable<Right>> = (Inferrable extends TInferable ? TInferUnionResult<Inferred, Inferrable['name'], Left, Inferrable['type']> : Left extends [infer Head extends TSchema, ...infer Tail extends TSchema[]] ? TExtendsLeft<Inferred, Head, Right> extends Result.TExtendsTrueLike<infer Inferred extends TProperties> ? TExtendsTupleToArray<Inferred, Tail, Right> : Result.TExtendsFalse : Result.TExtendsTrue<Inferred>);
export type TExtendsTuple<Inferred extends TProperties, Left extends TSchema[], Right extends TSchema, InstantiatedLeft extends TSchema[] = TInstantiateElements<Inferred, {
    callstack: [];
}, Left>> = (Right extends TTuple<infer Types extends TSchema[]> ? TExtendsTupleToTuple<Inferred, InstantiatedLeft, Types> : Right extends TArray<infer Type extends TSchema> ? TExtendsTupleToArray<Inferred, InstantiatedLeft, Type> : TExtendsRight<Inferred, TTuple<InstantiatedLeft>, Right>);
export declare function ExtendsTuple<Inferred extends TProperties, Left extends TSchema[], Right extends TSchema>(inferred: Inferred, left: Left, right: Right): TExtendsTuple<Inferred, Left, Right>;
export {};
