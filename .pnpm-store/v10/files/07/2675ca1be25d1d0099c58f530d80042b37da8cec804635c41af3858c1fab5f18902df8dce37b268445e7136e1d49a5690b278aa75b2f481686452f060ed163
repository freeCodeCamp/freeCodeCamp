import { type TSchema } from '../types/schema.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TInteger } from '../types/integer.mjs';
import { type TNumber } from '../types/number.mjs';
import { type TExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
export type TExtendsInteger<Inferred extends TProperties, Left extends TInteger, Right extends TSchema> = (Right extends TInteger ? Result.TExtendsTrue<Inferred> : Right extends TNumber ? Result.TExtendsTrue<Inferred> : TExtendsRight<Inferred, Left, Right>);
export declare function ExtendsInteger<Inferred extends TProperties, Left extends TInteger, Right extends TSchema>(inferred: Inferred, left: Left, right: Right): TExtendsInteger<Inferred, Left, Right>;
