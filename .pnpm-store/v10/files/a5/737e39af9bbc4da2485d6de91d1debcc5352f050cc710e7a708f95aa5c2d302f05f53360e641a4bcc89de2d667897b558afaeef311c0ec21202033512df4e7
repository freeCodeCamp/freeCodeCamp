import { type TSchema } from '../types/schema.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TNumber } from '../types/number.mjs';
import { type TExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
export type TExtendsNumber<Inferred extends TProperties, Left extends TNumber, Right extends TSchema> = (Right extends TNumber ? Result.TExtendsTrue<Inferred> : TExtendsRight<Inferred, Left, Right>);
export declare function ExtendsNumber<Inferred extends TProperties, Left extends TNumber, Right extends TSchema>(inferred: Inferred, left: Left, right: Right): TExtendsNumber<Inferred, Left, Right>;
