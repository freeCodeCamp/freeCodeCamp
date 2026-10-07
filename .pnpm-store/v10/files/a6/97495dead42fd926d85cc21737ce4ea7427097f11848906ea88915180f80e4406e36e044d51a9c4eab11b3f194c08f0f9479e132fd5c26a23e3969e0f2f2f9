import { StandardSchemaV1 } from '@standard-schema/spec';

/**
 * Creates and returns the dot path of an issue if possible.
 *
 * @param issue The issue to get the dot path from.
 *
 * @returns The dot path or null.
 */
declare function getDotPath(issue: StandardSchemaV1.Issue): string | null;

/**
 * A schema error with useful information.
 */
declare class SchemaError extends Error {
    /**
     * The schema issues.
     */
    readonly issues: ReadonlyArray<StandardSchemaV1.Issue>;
    /**
     * Creates a schema error with useful information.
     *
     * @param issues The schema issues.
     */
    constructor(issues: ReadonlyArray<StandardSchemaV1.Issue>);
}

export { SchemaError, getDotPath };
