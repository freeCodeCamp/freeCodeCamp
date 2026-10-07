import type { Components } from "./types";
/**
 * Custom hook that memoizes a components array based on shallow equality comparison.
 * Returns a stable reference when the array contents haven't changed.
 *
 * This allows developers to pass inline component arrays without causing unnecessary re-renders
 * when the array values are the same, even if the array reference changes.
 *
 * @param value - The components array to memoize
 * @returns A stable reference to the components array
 *
 * @example
 * const memoizedComponents = useCompareMemoize(["paypal-payments", "venmo-payments"]);
 */
export declare function useCompareMemoize<T extends readonly Components[] | null | undefined>(value: T): T;
export declare function useProxyProps<T extends Record<PropertyKey, unknown>>(props: T): T;
/**
 * Normalize input to an {@link Error} instance.
 *
 * @param {unknown} error - this argument will be coerced into a String then passed into a new
 *      {@link Error}. If it's already an {@link Error} instance, it will be returned without modification.
 * @returns {Error}
 *
 * @example
 * toError("An error occurred");
 *
 * @example
 * const myError = new Error("An error occurred");
 * toError(myError);
 */
export declare function toError(error: unknown): Error;
/**
 * Custom hook that memoizes a value based on deep equality comparison.
 * Returns a stable reference when the value hasn't changed, even if the
 * object or array reference is new.
 *
 * This allows developers to pass inline objects or arrays without causing
 * unnecessary re-renders or effect re-runs when the values are the same.
 *
 * @param value - The value to memoize
 * @returns A stable reference to the value
 *
 * @example
 * const memoizedAmount = useDeepCompareMemoize({ value: "10.00", currencyCode: "USD" });
 */
export declare function useDeepCompareMemoize<T>(value: T): T;
/**
 * Performs a recursive deep equality check on two values.
 *
 * Handles primitives, null/undefined, arrays, and plain objects. Recursion is
 * bounded by `maxDepth` (default: 10) to prevent stack overflow on deeply nested
 * structures — comparison returns `false` if the limit is exceeded.
 *
 * @param obj1 - First value to compare
 * @param obj2 - Second value to compare
 * @param maxDepth - Maximum recursion depth (default: 10)
 * @param currentDepth - Current recursion depth, used internally
 * @returns `true` if both values are deeply equal, `false` otherwise
 *
 * @example
 * deepEqual({ amount: "10.00", currency: "USD" }, { amount: "10.00", currency: "USD" }); // true
 * deepEqual({ amount: "10.00" }, { amount: "20.00" }); // false
 */
export declare function deepEqual(obj1: unknown, obj2: unknown, maxDepth?: number, currentDepth?: number): boolean;
/**
 * Detects the empty sentinel MessageContent the SDK returns on a fetch error.
 *
 * On an API error, PayPal Messages `fetchContent` resolves to a MessageContent whose
 * `messageItems` is null or has empty main/action arrays (rather than throwing), so the
 * `<paypal-message>` element recognizes the error state and collapses. A nullish result
 * is likewise treated as empty. `messageItems` being absent is treated as valid content
 * to avoid false positives.
 *
 * @param content - The value returned by `fetchContent`
 * @returns `true` if the content is the empty error sentinel (or nullish)
 *
 * @example
 * isEmptyMessageContent({ messageItems: { mainItems: [], actionItems: [] } }); // true
 * isEmptyMessageContent({ messageItems: { mainItems: [block] } }); // false
 */
export declare function isEmptyMessageContent(content: unknown): boolean;
interface CreatePaymentSessionOptions<T> {
    sessionCreator: () => T;
    failedSdkRef: {
        current: unknown;
    };
    sdkInstance: unknown;
    setError: (error: Error | null) => void;
    errorMessage: string;
}
/**
 * Creates a payment session with error handling and retry prevention.
 *
 * @param options - Configuration for creating the payment session
 * @returns The payment session or null if creation fails
 *
 * @example
 * const session = createPaymentSession({
 *   sessionCreator: () => sdkInstance.createPayPalOneTimePaymentSession({ orderId, ...callbacks }),
 *   failedSdkRef,
 *   sdkInstance,
 *   setError,
 *   errorMessage: 'Failed to create payment session. This may occur if the required component "paypal-payments" is not included in the SDK components array.',
 * });
 *
 * if (!session) return;
 */
export declare function createPaymentSession<T>({ sessionCreator, failedSdkRef, sdkInstance, setError, errorMessage, }: CreatePaymentSessionOptions<T>): T | null;
export {};
