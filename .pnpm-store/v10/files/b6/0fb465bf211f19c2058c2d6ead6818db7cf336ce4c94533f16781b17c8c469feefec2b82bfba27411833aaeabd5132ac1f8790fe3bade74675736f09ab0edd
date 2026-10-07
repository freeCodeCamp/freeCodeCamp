export type AnyValueScalar = string | number | boolean;
export type AnyValueArray = Array<AnyValue>;
/**
 * AnyValueMap is a map from string to AnyValue (attribute value or a nested map)
 */
export interface AnyValueMap {
    [attributeKey: string]: AnyValue;
}
/**
 * AnyValue can be one of the following:
 * - a scalar value
 * - a byte array
 * - array of any value
 * - map from string to any value
 * - empty value
 */
export type AnyValue = AnyValueScalar | Uint8Array | AnyValueArray | AnyValueMap | null | undefined;
//# sourceMappingURL=AnyValue.d.ts.map