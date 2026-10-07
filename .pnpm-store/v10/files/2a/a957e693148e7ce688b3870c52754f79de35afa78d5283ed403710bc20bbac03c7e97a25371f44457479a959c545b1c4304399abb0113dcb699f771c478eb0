import { type TUnreachable } from '../../system/unreachable/index.mjs';
import { Memory } from '../../system/memory/index.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TSchema } from '../types/schema.mjs';
import { type TOptional } from '../types/_optional.mjs';
import { type TInfer } from '../types/infer.mjs';
import { type TNever } from '../types/never.mjs';
import { type TObject } from '../types/object.mjs';
import { type TExtendsLeft } from './extends_left.mjs';
import { type TExtendsRight } from './extends_right.mjs';
import { type TUnionToTuple } from '../engine/helpers/union.mjs';
import * as Result from './result.mjs';
type TExtendsPropertyOptional<Inferred extends TProperties, Left extends TSchema, Right extends TSchema> = (Left extends TOptional<Left> ? Right extends TOptional<Right> ? Result.TExtendsTrue<Inferred> : Result.TExtendsFalse : Result.TExtendsTrue<Inferred>);
type TExtendsProperty<Inferred extends TProperties, Left extends TSchema, Right extends TSchema> = (Right extends TInfer<string, TNever> ? Result.TExtendsFalse : TExtendsLeft<Inferred, Left, Right> extends Result.TExtendsTrueLike<infer Inferred extends TProperties> ? TExtendsPropertyOptional<Inferred, Left, Right> : Result.TExtendsFalse);
type TExtractInferredProperties<Keys extends PropertyKey[], Properties extends Record<PropertyKey, Result.TResult>, Result extends TProperties = {}> = (Keys extends [infer Left extends PropertyKey, ...infer Right extends PropertyKey[]] ? Left extends keyof Properties ? Properties[Left] extends Result.TExtendsTrueLike<infer Inferred extends TProperties> ? TExtractInferredProperties<Right, Properties, Result & Inferred> : TExtractInferredProperties<Right, Properties, Result> : TUnreachable : Result);
type TExtendsPropertiesComparer<Inferred extends TProperties, Left extends TProperties, Right extends TProperties, Properties extends Record<PropertyKey, Result.TExtendsTrue | Result.TExtendsFalse> = {
    [RightKey in keyof Right]: (RightKey extends keyof Left ? TExtendsProperty<{}, Left[RightKey], Right[RightKey]> : Right[RightKey] extends TOptional<Right[RightKey]> ? Right[RightKey] extends TInfer ? Result.TExtendsTrue<Memory.TAssign<Inferred, {
        [_ in Right[RightKey]['name']]: Right[RightKey]['extends'];
    }>> : Result.TExtendsTrue<Inferred> : Result.TExtendsFalse);
}, Checked extends boolean = Properties[keyof Right] extends Result.TExtendsTrueLike ? true : false, Extracted extends TProperties = Checked extends true ? TExtractInferredProperties<TUnionToTuple<keyof Properties>, Properties> : {}> = (Checked extends true ? Result.TExtendsTrue<Extracted> : Result.TExtendsFalse);
type TExtendsProperties<Inferred extends TProperties, Left extends TProperties, Right extends TProperties, Compared extends Result.TResult = TExtendsPropertiesComparer<Inferred, Left, Right>> = (Compared extends Result.TExtendsTrueLike<infer ComparedInferred extends TProperties> ? Result.TExtendsTrue<Memory.TAssign<Inferred, ComparedInferred>> : Result.TExtendsFalse);
type TExtendsObjectToObject<Inferred extends TProperties, Left extends TProperties, Right extends TProperties> = (TExtendsProperties<Inferred, Left, Right>);
export type TExtendsObject<Inferred extends TProperties, Left extends TProperties, Right extends TSchema> = (Right extends TObject<infer Properties extends TProperties> ? TExtendsObjectToObject<Inferred, Left, Properties> : TExtendsRight<Inferred, TObject<Left>, Right>);
export declare function ExtendsObject<Inferred extends TProperties, Left extends TProperties, Right extends TSchema>(inferred: Inferred, left: Left, right: Right): TExtendsObject<Inferred, Left, Right>;
export {};
