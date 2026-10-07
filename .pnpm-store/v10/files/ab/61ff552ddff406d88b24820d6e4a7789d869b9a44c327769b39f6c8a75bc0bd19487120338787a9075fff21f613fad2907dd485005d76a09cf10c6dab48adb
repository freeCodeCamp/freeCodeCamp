import { type TSchema } from './schema.mjs';
import { type TCallInstantiate } from '../engine/call/instantiate.mjs';
/** Represents a deferred generic Call */
export interface TCall<Target extends TSchema = TSchema, Arguments extends TSchema[] = TSchema[]> extends TSchema {
    '~kind': 'Call';
    target: Target;
    arguments: Arguments;
}
export type TCallConstruct<Target extends TSchema, Arguments extends TSchema[], Result extends TSchema = TCall<Target, Arguments>> = Result;
export declare function CallConstruct<Target extends TSchema, Arguments extends TSchema[]>(target: Target, arguments_: [...Arguments]): TCallConstruct<Target, Arguments>;
/** Creates a Call type. */
export declare function Call<Target extends TSchema, Arguments extends TSchema[]>(target: Target, arguments_: [...Arguments]): TCallInstantiate<{}, {
    callstack: [];
}, Target, Arguments>;
/** Returns true if the given type is a TCall. */
export declare function IsCall(value: unknown): value is TCall;
