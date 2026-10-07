/**
 * PII filtering for MCP server spans
 *
 * Removes network-level sensitive data when sendDefaultPii is false.
 * Input/output data (request arguments, tool/prompt results) is controlled
 * separately via recordInputs/recordOutputs options.
 */
import { SpanAttributeValue } from '../../types/span';
/**
 * Removes network PII attributes from span data when sendDefaultPii is false
 * @param spanData - Raw span attributes
 * @param sendDefaultPii - Whether to include PII data
 * @returns Filtered span attributes
 */
export declare function filterMcpPiiFromSpanData(spanData: Record<string, unknown>, sendDefaultPii: boolean): Record<string, SpanAttributeValue>;
//# sourceMappingURL=piiFiltering.d.ts.map
