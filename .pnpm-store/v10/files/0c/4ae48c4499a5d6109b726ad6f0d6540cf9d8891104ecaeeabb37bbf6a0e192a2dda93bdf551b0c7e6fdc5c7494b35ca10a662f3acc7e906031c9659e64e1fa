import type { Client } from '../client';
import type { DsnComponents, DsnLike } from '../types/dsn';
/**
 * Renders the string representation of this Dsn.
 *
 * By default, this will render the public representation without the password
 * component. To get the deprecated private representation, set `withPassword`
 * to true.
 *
 * @param withPassword When set to true, the password will be included.
 */
export declare function dsnToString(dsn: DsnComponents, withPassword?: boolean): string;
/**
 * Parses a Dsn from a given string.
 *
 * @param str A Dsn as string
 * @returns Dsn as DsnComponents or undefined if @param str is not a valid DSN string
 */
export declare function dsnFromString(str: string): DsnComponents | undefined;
/**
 * Extract the org ID from a DSN host.
 *
 * @param host The host from a DSN
 * @returns The org ID if found, undefined otherwise
 */
export declare function extractOrgIdFromDsnHost(host: string): string | undefined;
/**
 *  Returns the organization ID of the client.
 *
 *  The organization ID is extracted from the DSN. If the client options include a `orgId`, this will always take precedence.
 */
export declare function extractOrgIdFromClient(client: Client): string | undefined;
/**
 * Creates a valid Sentry Dsn object, identifying a Sentry instance and project.
 * @returns a valid DsnComponents object or `undefined` if @param from is an invalid DSN source
 */
export declare function makeDsn(from: DsnLike): DsnComponents | undefined;
//# sourceMappingURL=dsn.d.ts.map