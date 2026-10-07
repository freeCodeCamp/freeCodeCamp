import { type TSchema } from '../types/schema.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TNever } from '../types/never.mjs';
import { type TInfer } from '../types/infer.mjs';
import { type TExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
export type TExtendsNever<Inferred extends TProperties, Left extends TNever, Right extends TSchema> = (Right extends TInfer ? TExtendsRight<Inferred, Left, Right> : Result.TExtendsTrue<Inferred>);
export declare function ExtendsNever<Inferred extends TProperties, Left extends TNever, Right extends TSchema>(inferred: Inferred, left: Left, right: Right): TExtendsNever<Inferred, Left, Right>;
