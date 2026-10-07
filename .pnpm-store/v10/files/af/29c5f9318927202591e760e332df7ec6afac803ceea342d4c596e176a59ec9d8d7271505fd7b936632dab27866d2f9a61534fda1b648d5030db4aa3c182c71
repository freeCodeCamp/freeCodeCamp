import { type TSchema } from '../types/schema.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TIterator } from '../types/iterator.mjs';
import { type TExtendsRight } from './extends_right.mjs';
import { type TExtendsLeft } from './extends_left.mjs';
export type TExtendsIterator<Inferred extends TProperties, Left extends TSchema, Right extends TSchema> = (Right extends TIterator<infer Type extends TSchema> ? TExtendsLeft<Inferred, Left, Type> : TExtendsRight<Inferred, TIterator<Left>, Right>);
export declare function ExtendsIterator<Inferred extends TProperties, Left extends TSchema, Right extends TSchema>(inferred: Inferred, left: Left, right: Right): TExtendsIterator<Inferred, Left, Right>;
