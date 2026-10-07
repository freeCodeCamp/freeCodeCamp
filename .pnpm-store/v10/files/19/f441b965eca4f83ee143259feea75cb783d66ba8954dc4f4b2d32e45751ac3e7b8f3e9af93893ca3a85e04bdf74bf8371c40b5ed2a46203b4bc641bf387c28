import { type TSchema } from '../types/schema.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TVoid } from '../types/void.mjs';
import { type TExtendsLeft } from './extends_left.mjs';
import * as Result from './result.mjs';
export type TExtendsReturnType<Inferred extends TProperties, Left extends TSchema, Right extends TSchema> = (Right extends TVoid ? Result.TExtendsTrue<Inferred> : TExtendsLeft<Inferred, Left, Right>);
export declare function ExtendsReturnType<Inferred extends TProperties, Left extends TSchema, Right extends TSchema>(inferred: Inferred, left: Left, right: Right): TExtendsReturnType<Inferred, Left, Right>;
