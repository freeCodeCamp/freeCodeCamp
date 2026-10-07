import { type TSchema } from '../types/schema.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TAny } from '../types/any.mjs';
import { type TUnknown } from '../types/unknown.mjs';
import { type TInfer } from '../types/infer.mjs';
import { type TExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
export type TExtendsUnknown<Inferred extends TProperties, Left extends TUnknown, Right extends TSchema> = (Right extends TInfer ? TExtendsRight<Inferred, Left, Right> : Right extends TAny ? Result.TExtendsTrue<Inferred> : Right extends TUnknown ? Result.TExtendsTrue<Inferred> : Result.TExtendsFalse);
export declare function ExtendsUnknown<Inferred extends TProperties, Left extends TUnknown, Right extends TSchema>(inferred: Inferred, left: Left, right: Right): TExtendsUnknown<Inferred, Left, Right>;
