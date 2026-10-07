import { type TSchema } from '../types/schema.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TString } from '../types/string.mjs';
import { type TExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
export type TExtendsString<Inferred extends TProperties, Left extends TString, Right extends TSchema> = (Right extends TString ? Result.TExtendsTrue<Inferred> : TExtendsRight<Inferred, Left, Right>);
export declare function ExtendsString<Inferred extends TProperties, Left extends TString, Right extends TSchema>(inferred: Inferred, left: Left, right: Right): TExtendsString<Inferred, Left, Right>;
