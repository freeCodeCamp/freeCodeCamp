import { type TSchema } from '../types/schema.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TPromise } from '../types/promise.mjs';
import { type TExtendsRight } from './extends_right.mjs';
import { type TExtendsLeft } from './extends_left.mjs';
export type TExtendsPromise<Inferred extends TProperties, Left extends TSchema, Right extends TSchema> = (Right extends TPromise<infer Type extends TSchema> ? TExtendsLeft<Inferred, Left, Type> : TExtendsRight<Inferred, TPromise<Left>, Right>);
export declare function ExtendsPromise<Inferred extends TProperties, Left extends TSchema, Right extends TSchema>(inferred: Inferred, left: Left, right: Right): TExtendsPromise<Inferred, Left, Right>;
