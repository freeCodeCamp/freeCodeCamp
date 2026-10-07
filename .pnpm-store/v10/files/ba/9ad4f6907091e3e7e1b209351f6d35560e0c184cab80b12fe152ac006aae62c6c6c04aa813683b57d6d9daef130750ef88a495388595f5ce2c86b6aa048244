import { type TSchema } from '../types/schema.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TBoolean } from '../types/boolean.mjs';
import { type TExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
export type TExtendsBoolean<Inferred extends TProperties, Left extends TBoolean, Right extends TSchema> = (Right extends TBoolean ? Result.TExtendsTrue<Inferred> : TExtendsRight<Inferred, Left, Right>);
export declare function ExtendsBoolean<Inferred extends TProperties, Left extends TBoolean, Right extends TSchema>(inferred: Inferred, left: Left, right: Right): TExtendsBoolean<Inferred, Left, Right>;
