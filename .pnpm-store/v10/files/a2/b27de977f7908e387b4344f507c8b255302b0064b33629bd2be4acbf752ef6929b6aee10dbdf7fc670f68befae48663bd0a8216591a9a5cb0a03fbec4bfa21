import { type TSchema } from '../types/schema.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TAsyncIterator } from '../types/async_iterator.mjs';
import { type TExtendsRight } from './extends_right.mjs';
import { type TExtendsLeft } from './extends_left.mjs';
export type TExtendsAsyncIterator<Inferred extends TProperties, Left extends TSchema, Right extends TSchema> = (Right extends TAsyncIterator<infer Type extends TSchema> ? TExtendsLeft<Inferred, Left, Type> : TExtendsRight<Inferred, TAsyncIterator<Left>, Right>);
export declare function ExtendsAsyncIterator<Inferred extends TProperties, Left extends TSchema, Right extends TSchema>(inferred: Inferred, left: Left, right: Right): TExtendsAsyncIterator<Inferred, Left, Right>;
