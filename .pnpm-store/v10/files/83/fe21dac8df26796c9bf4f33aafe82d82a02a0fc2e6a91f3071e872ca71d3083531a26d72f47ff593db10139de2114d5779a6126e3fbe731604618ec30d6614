import { type TEdit } from './edit.mjs';
/**
 * Generates a sequence of Edit commands to transform the current value into the next value.
 * These commands can be serialized and sent over a network to synchronize a remote
 * value, applied with Patch, or tested with Hash. Edit commands should be treated as
 * opaque data structures; TypeBox may enhance this functionality in the future to
 * support full operational transformation and may change the commands. Do not apply
 * any logic directly to the command structures.
 */
export declare function Diff(current: unknown, next: unknown): TEdit[];
