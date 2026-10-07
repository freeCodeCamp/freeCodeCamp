import { FieldPosition } from "@smithy/types";
import { Field } from "./Field";
export type FieldsOptions = {
    fields?: Field[];
    encoding?: string;
};
/**
 * Collection of Field entries mapped by name.
 */
export declare class Fields {
    private readonly entries;
    private readonly encoding;
    constructor({ fields, encoding }: FieldsOptions);
    /**
     * Set entry for a {@link Field} name. The `name`
     * attribute will be used to key the collection.
     *
     * @param field The {@link Field} to set.
     */
    setField(field: Field): void;
    /**
     *  Retrieve {@link Field} entry by name.
     *
     * @param name The name of the {@link Field} entry
     *  to retrieve
     * @returns The {@link Field} if it exists.
     */
    getField(name: string): Field | undefined;
    /**
     * Delete entry from collection.
     *
     * @param name Name of the entry to delete.
     */
    removeField(name: string): void;
    /**
     * Helper function for retrieving specific types of fields.
     * Used to grab all headers or all trailers.
     *
     * @param kind {@link FieldPosition} of entries to retrieve.
     * @returns The {@link Field} entries with the specified
     *  {@link FieldPosition}.
     */
    getByType(kind: FieldPosition): Field[];
}
