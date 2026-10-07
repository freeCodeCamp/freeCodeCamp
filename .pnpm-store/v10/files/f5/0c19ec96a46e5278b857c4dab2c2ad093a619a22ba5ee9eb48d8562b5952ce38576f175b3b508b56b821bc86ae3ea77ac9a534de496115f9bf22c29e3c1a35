import { type TSchema } from '../types/schema.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TEnum } from '../types/enum.mjs';
import { type TExtendsLeft } from './extends_left.mjs';
import { type TEnumToUnion } from '../engine/enum/index.mjs';
export type TExtendsEnum<Inferred extends TProperties, Left extends TEnum, Right extends TSchema> = (TExtendsLeft<Inferred, TEnumToUnion<Left>, Right>);
export declare function ExtendsEnum<Inferred extends TProperties, Left extends TEnum, Right extends TSchema>(inferred: Inferred, left: Left, right: Right): TExtendsEnum<Inferred, Left, Right>;
