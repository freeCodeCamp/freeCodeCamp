import { type TSchema } from '../types/schema.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TNull } from '../types/null.mjs';
import { type TExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
export type TExtendsNull<Inferred extends TProperties, Left extends TNull, Right extends TSchema> = (Right extends TNull ? Result.TExtendsTrue<Inferred> : TExtendsRight<Inferred, Left, Right>);
export declare function ExtendsNull<Inferred extends TProperties, Left extends TNull, Right extends TSchema>(inferred: Inferred, left: Left, right: Right): TExtendsNull<Inferred, Left, Right>;
