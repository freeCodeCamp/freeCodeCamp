import { type TSchema } from '../types/schema.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TBigInt } from '../types/bigint.mjs';
import { type TExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
export type TExtendsBigInt<Inferred extends TProperties, Left extends TBigInt, Right extends TSchema> = (Right extends TBigInt ? Result.TExtendsTrue<Inferred> : TExtendsRight<Inferred, Left, Right>);
export declare function ExtendsBigInt<Inferred extends TProperties, Left extends TBigInt, Right extends TSchema>(inferred: Inferred, left: Left, right: Right): TExtendsBigInt<Inferred, Left, Right>;
