import { FieldOptions, FieldPosition } from "@smithy/types";
/**
 * A name-value pair representing a single field
 * transmitted in an HTTP Request or Response.
 *
 * The kind will dictate metadata placement within
 * an HTTP message.
 *
 * All field names are case insensitive and
 * case-variance must be treated as equivalent.
 * Names MAY be normalized but SHOULD be preserved
 * for accuracy during transmission.
 */
export declare class Field {
    readonly name: string;
    readonly kind: FieldPosition;
    values: string[];
    constructor({ name, kind, values }: FieldOptions);
    /**
     * Appends a value to the field.
     *
     * @param value The value to append.
     */
    add(value: string): void;
    /**
     * Overwrite existing field values.
     *
     * @param values The new field values.
     */
    set(values: string[]): void;
    /**
     * Remove all matching entries from list.
     *
     * @param value Value to remove.
     */
    remove(value: string): void;
    /**
     * Get comma-delimited string.
     *
     * @returns String representation of {@link Field}.
     */
    toString(): string;
    /**
     * Get string values as a list
     *
     * @returns Values in {@link Field} as a list.
     */
    get(): string[];
}
