import { type TSchema } from '../types/schema.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TSymbol } from '../types/symbol.mjs';
import { type TExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
export type TExtendsSymbol<Inferred extends TProperties, Left extends TSymbol, Right extends TSchema> = (Right extends TSymbol ? Result.TExtendsTrue<Inferred> : TExtendsRight<Inferred, Left, Right>);
export declare function ExtendsSymbol<Inferred extends TProperties, Left extends TSymbol, Right extends TSchema>(inferred: Inferred, left: Left, right: Right): TExtendsSymbol<Inferred, Left, Right>;
