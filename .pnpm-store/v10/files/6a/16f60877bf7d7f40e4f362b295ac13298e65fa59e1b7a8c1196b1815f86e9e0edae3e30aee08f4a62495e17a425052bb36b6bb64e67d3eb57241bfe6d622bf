import type { TArrayOptions, TIntersectOptions, TNumberOptions, TObjectOptions, TStringOptions, TTupleOptions } from '../../type/index.mjs';
import { type TInstantiateType } from '../engine/instantiate.mjs';
import { type TNever, type TSchema, type TProperties } from '../types/index.mjs';
import * as Parser from './parser.mjs';
export type TScriptOptions = TArrayOptions | TIntersectOptions | TNumberOptions | TObjectOptions | TStringOptions | TTupleOptions;
/** Parses a string-based TypeScript type expression into a TypeBox type. */
export type TScript<Context extends TProperties, Input extends string> = (Parser.TScript<Input> extends [infer Type extends TSchema, string] ? TInstantiateType<Context, {
    callstack: [];
}, Type> : TNever);
/** Parses a type from a TypeScript type expression */
export declare function Script<Script extends string>(input: Script): TScript<{}, Script>;
/** Parses a type from a TypeScript type expression */
export declare function Script<Context extends TProperties, Script extends string>(context: Context, input: Script): TScript<Context, Script>;
/** Parses a type from a TypeScript type expression */
export declare function Script<Script extends string>(input: Script, options: TScriptOptions): TScript<{}, Script>;
/** Parses a type from a TypeScript type expression */
export declare function Script<Context extends TProperties, Script extends string>(context: Context, input: Script, options: TScriptOptions): TScript<Context, Script>;
