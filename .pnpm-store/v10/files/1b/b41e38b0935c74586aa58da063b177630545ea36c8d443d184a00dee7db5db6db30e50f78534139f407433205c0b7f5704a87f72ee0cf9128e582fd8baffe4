import { DynamicSamplingContext } from '../types/envelope';
export declare const SENTRY_BAGGAGE_KEY_PREFIX = "sentry-";
export declare const SENTRY_BAGGAGE_KEY_PREFIX_REGEX: RegExp;
/**
 * Max length of a serialized baggage string
 *
 * https://www.w3.org/TR/baggage/#limits
 */
export declare const MAX_BAGGAGE_STRING_LENGTH = 8192;
/**
 * Takes a baggage header and turns it into Dynamic Sampling Context, by extracting all the "sentry-" prefixed values
 * from it.
 *
 * @param baggageHeader A very bread definition of a baggage header as it might appear in various frameworks.
 * @returns The Dynamic Sampling Context that was found on `baggageHeader`, if there was any, `undefined` otherwise.
 */
export declare function baggageHeaderToDynamicSamplingContext(baggageHeader: string | string[] | number | null | undefined | boolean): Partial<DynamicSamplingContext> | undefined;
/**
 * Turns a Dynamic Sampling Object into a baggage header by prefixing all the keys on the object with "sentry-".
 *
 * @param dynamicSamplingContext The Dynamic Sampling Context to turn into a header. For convenience and compatibility
 * with the `getDynamicSamplingContext` method on the Transaction class ,this argument can also be `undefined`. If it is
 * `undefined` the function will return `undefined`.
 * @returns a baggage header, created from `dynamicSamplingContext`, or `undefined` either if `dynamicSamplingContext`
 * was `undefined`, or if `dynamicSamplingContext` didn't contain any values.
 */
export declare function dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContext?: Partial<DynamicSamplingContext>): string | undefined;
/**
 * Take a baggage header and parse it into an object.
 */
export declare function parseBaggageHeader(baggageHeader: string | string[] | number | null | undefined | boolean): Record<string, string> | undefined;
/**
 * Turns a flat object (key-value pairs) into a baggage header, which is also just key-value pairs.
 *
 * @param object The object to turn into a baggage header.
 * @returns a baggage header string, or `undefined` if the object didn't have any values, since an empty baggage header
 * is not spec compliant.
 */
export declare function objectToBaggageHeader(object: Record<string, string>): string | undefined;
/**
 * Merge two baggage headers into one.
 * - Sentry-specific entries (keys starting with "sentry-") from the new
 *   baggage take precedence
 * - Non-Sentry entries from existing baggage take precedence
 *
 * The order of the existing baggage will be preserved, and new entries will
 * be added to the end.
 *
 * This matches the behavior of OTEL's propagation.inject() which uses
 * `baggage.setEntry()`  to overwrite existing entries with the same key.
 */
export declare function mergeBaggageHeaders<Existing extends string | string[] | number | undefined>(existing: Existing, incoming: string): string | undefined | Existing;
//# sourceMappingURL=baggage.d.ts.map
