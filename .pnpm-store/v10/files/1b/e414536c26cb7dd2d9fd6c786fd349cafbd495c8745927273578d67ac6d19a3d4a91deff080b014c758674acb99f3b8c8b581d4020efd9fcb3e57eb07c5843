/**
 *
 * audit/common
 *
 */
/**
 * Audit requirement levels as per [RFC2119](https://www.rfc-editor.org/rfc/rfc2119).
 *
 * @category Audits
 */
export type AuditRequirement = 'MUST' | 'SHOULD' | 'MAY';
/**
 * Audit name starting with the audit requirement level.
 *
 * @category Audits
 */
export type AuditName = `${AuditRequirement} ${string}`;
/**
 * Actual audit test returning an result.
 *
 * The test function will throw only if the error is fatal.
 *
 * @category Audits
 */
export interface Audit {
    /**
     * Uniquely represents the audit. Helps with pinning audits
     * without depending on the human readable audit name.
     */
    id: string;
    name: AuditName;
    fn: () => Promise<AuditResult>;
}
/**
 * Indicates that the audit was successful.
 *
 * @category Audits
 */
export interface AuditOk {
    /**
     * Uniquely represents the passing audit. Helps with pinning audits
     * without depending on the human readable audit name.
     */
    id: string;
    name: AuditName;
    status: 'ok';
}
/**
 * Indicates that the audit failed.
 *
 * If the status is `warn`, the audit is not a requirement but rather a recommendation.
 *
 * On the other hand, if the status is `error`, the audit is a requirement and the source
 * is therefore not compliant.
 *
 * @category Audits
 */
export interface AuditFail {
    /**
     * Uniquely represents the failing audit. Helps with pinning audits
     * without depending on the human readable audit name.
     */
    id: string;
    name: AuditName;
    status: 'notice' | 'warn' | 'error';
    reason: string;
    response: Response;
}
/**
 * Result of the performed audit. See `AuditOk` and `AuditFail` for more information.
 *
 * @category Audits
 */
export type AuditResult = AuditOk | AuditFail;
