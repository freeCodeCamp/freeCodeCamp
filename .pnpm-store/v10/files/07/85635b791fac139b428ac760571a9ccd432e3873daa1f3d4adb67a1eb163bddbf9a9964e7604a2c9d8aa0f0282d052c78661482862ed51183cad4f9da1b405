import { type TSchema } from '../types/schema.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TUndefined } from '../types/undefined.mjs';
import { type TVoid } from '../types/void.mjs';
import { type TExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
export type TExtendsUndefined<Inferred extends TProperties, Left extends TUndefined, Right extends TSchema> = (Right extends TVoid ? Result.TExtendsTrue<Inferred> : Right extends TUndefined ? Result.TExtendsTrue<Inferred> : TExtendsRight<Inferred, Left, Right>);
export declare function ExtendsUndefined<Inferred extends TProperties, Left extends TUndefined, Right extends TSchema>(inferred: Inferred, left: Left, right: Right): TExtendsUndefined<Inferred, Left, Right>;
