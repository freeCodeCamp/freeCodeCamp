import { type TProperties } from '../../types/properties.mjs';
import { type TState, type TInstantiateType } from '../instantiate.mjs';
import { type TCyclicCheck } from '../cyclic/check.mjs';
import { type TRef } from '../../types/ref.mjs';
export type TRefInstantiate<Context extends TProperties, State extends TState, Type extends TRef, Ref extends string> = (Ref extends keyof Context ? TCyclicCheck<[Ref], Context, Context[Ref]> extends true ? Type : TInstantiateType<Context, State, Context[Ref]> : Type);
export declare function RefInstantiate<Context extends TProperties, State extends TState, Type extends TRef, Ref extends string>(context: Context, state: State, type: Type, ref: Ref): TRefInstantiate<Context, State, Type, Ref>;
