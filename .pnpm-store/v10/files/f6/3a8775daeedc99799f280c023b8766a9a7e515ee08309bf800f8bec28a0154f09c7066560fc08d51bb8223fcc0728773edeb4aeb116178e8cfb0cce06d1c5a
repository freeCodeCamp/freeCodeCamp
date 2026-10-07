/**
 *
 * audit/server
 *
 */
import { Audit, AuditResult } from './common.mjs';
/**
 * Options for server audits required to check GraphQL over HTTP spec conformance.
 *
 * @category Audits
 */
export interface ServerAuditOptions {
    /**
     * The URL of the GraphQL server for the audit.
     *
     * A function can be also supplied, in this case -
     * every audit will invoke the function to get the URL.
     */
    url: string | Promise<string> | (() => string | Promise<string>);
    /**
     * The Fetch function to use.
     *
     * For NodeJS environments consider using [`@whatwg-node/fetch`](https://github.com/ardatan/whatwg-node/tree/master/packages/fetch).
     *
     * @default global.fetch
     */
    fetchFn?: unknown;
}
/**
 * List of server audits required to check GraphQL over HTTP spec conformance.
 *
 * @category Audits
 */
export declare function serverAudits(opts: ServerAuditOptions): Audit[];
/**
 * Performs the full list of server audits required for GraphQL over HTTP spec conformance.
 *
 * Please consult the `AuditResult` for more information.
 *
 * @category Audits
 */
export declare function auditServer(opts: ServerAuditOptions): Promise<AuditResult[]>;
