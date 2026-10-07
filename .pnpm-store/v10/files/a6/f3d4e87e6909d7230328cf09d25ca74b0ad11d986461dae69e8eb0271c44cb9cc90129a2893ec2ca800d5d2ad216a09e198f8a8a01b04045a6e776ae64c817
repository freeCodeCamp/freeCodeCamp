import { type TSchema } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TNever } from '../../types/never.mjs';
import { type TRef } from '../../types/ref.mjs';
type TResolve<Defs extends TProperties, Ref extends string> = (Ref extends keyof Defs ? Defs[Ref] extends TRef<infer Ref extends string> ? TResolve<Defs, Ref> : Defs[Ref] : TNever);
/** Returns the target Type from the Defs or Never if target is non-resolvable */
export type TCyclicTarget<Defs extends TProperties, Ref extends string, Result extends TSchema = TResolve<Defs, Ref>> = Result;
/** Returns the target Type from the Defs or Never if target is non-resolvable */
export declare function CyclicTarget<Defs extends TProperties, Ref extends string>(defs: Defs, ref: Ref): TCyclicTarget<Defs, Ref>;
export {};
