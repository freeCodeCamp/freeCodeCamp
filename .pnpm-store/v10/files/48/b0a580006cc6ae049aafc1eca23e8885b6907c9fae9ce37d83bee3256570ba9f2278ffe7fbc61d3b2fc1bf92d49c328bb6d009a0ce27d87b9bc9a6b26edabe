import { type TSchema } from '../types/schema.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TVoid } from '../types/void.mjs';
import { type TExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
export type TExtendsVoid<Inferred extends TProperties, Left extends TVoid, Right extends TSchema> = (Right extends TVoid ? Result.TExtendsTrue<Inferred> : TExtendsRight<Inferred, Left, Right>);
export declare function ExtendsVoid<Inferred extends TProperties, Left extends TVoid, Right extends TSchema>(inferred: Inferred, left: Left, right: Right): TExtendsVoid<Inferred, Left, Right>;
