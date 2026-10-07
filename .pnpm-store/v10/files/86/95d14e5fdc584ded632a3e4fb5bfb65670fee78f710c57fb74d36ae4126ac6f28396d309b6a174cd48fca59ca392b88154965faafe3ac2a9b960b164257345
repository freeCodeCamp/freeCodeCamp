import type { XSchemaObject } from './schema.mjs';
export interface XGuardInterface<Value extends unknown = unknown> {
    check(value: unknown): value is Value;
    errors(value: unknown): object[];
}
export interface XGuard<Value extends unknown = unknown> {
    '~guard': XGuardInterface<Value>;
}
export declare function IsGuardInterface(value: unknown): value is XGuardInterface;
export declare function IsGuard(value: XSchemaObject): value is XGuard;
