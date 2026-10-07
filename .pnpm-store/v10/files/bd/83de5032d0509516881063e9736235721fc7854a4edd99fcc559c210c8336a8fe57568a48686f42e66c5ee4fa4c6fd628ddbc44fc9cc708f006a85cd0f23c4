export type Reviver = (key: unknown, value: unknown) => unknown;
/**
 * Applies the JSON.parse reviver algorithm as defined in the ECMA-262 spec,
 * in section 24.5.1.1 "Runtime Semantics: InternalizeJSONProperty" of the
 * 2021 edition: https://tc39.es/ecma262/#sec-json.parse
 *
 * Includes extensions for handling Map and Set objects.
 */
export declare function applyReviver(reviver: Reviver, obj: unknown, key: unknown, val: any): unknown;
