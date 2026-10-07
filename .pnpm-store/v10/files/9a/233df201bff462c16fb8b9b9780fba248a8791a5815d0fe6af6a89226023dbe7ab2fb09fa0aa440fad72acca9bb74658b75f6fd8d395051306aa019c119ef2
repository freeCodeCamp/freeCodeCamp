import { type TSchema } from '../types/schema.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TCyclic } from '../types/cyclic.mjs';
import { type TUnknown } from '../types/unknown.mjs';
import { type TUnsafe } from '../types/unsafe.mjs';
import { type TExtendsLeft } from './extends_left.mjs';
import { type TCyclicExtends } from '../engine/cyclic/index.mjs';
type TCanonical<Type extends TSchema> = (Type extends TCyclic ? TCyclicExtends<Type> : Type extends TUnsafe ? TUnknown : Type);
/** Performs a structural extends check on left and right types and yields inferred types on right if specified. */
export type TExtends<Inferred extends TProperties, Left extends TSchema, Right extends TSchema, CanonicalLeft extends TSchema = TCanonical<Left>, CanonicalRight extends TSchema = TCanonical<Right>> = TExtendsLeft<Inferred, CanonicalLeft, CanonicalRight>;
/** Performs a structural extends check on left and right types and yields inferred types on right if specified. */
export declare function Extends<Inferred extends TProperties, Left extends TSchema, Right extends TSchema>(inferred: Inferred, left: Left, right: Right): TExtends<Inferred, Left, Right>;
export {};
