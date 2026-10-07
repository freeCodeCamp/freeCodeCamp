import { type TProperties } from '../types/properties.mjs';
import { type TSchema } from '../types/schema.mjs';
import { type TExtendsLeft } from './extends_left.mjs';
import { type TEvaluateIntersect } from '../engine/evaluate/index.mjs';
export type TExtendsIntersect<Inferred extends TProperties, Left extends TSchema[], Right extends TSchema, Evaluated extends TSchema = TEvaluateIntersect<Left>> = TExtendsLeft<Inferred, Evaluated, Right>;
export declare function ExtendsIntersect<Inferred extends TProperties, Left extends TSchema[], Right extends TSchema>(inferred: Inferred, left: Left, right: Right): TExtendsIntersect<Inferred, Left, Right>;
