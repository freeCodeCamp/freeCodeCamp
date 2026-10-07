import "server-only";
import { type EligiblePaymentMethods, type FindEligiblePaymentMethodsResponse } from "../types";
type FindEligiblePaymentMethodsOptions = {
    environment: "production" | "sandbox";
    payload?: FindEligiblePaymentMethodsRequestPayload;
    headers?: HeadersInit;
};
type PhoneNumber = {
    country_code?: string;
    national_number?: string;
};
type PaymentFlow = "ONE_TIME_PAYMENT" | "RECURRING_PAYMENT" | "VAULT_WITHOUT_PAYMENT" | "VAULT_WITH_PAYMENT";
export type FindEligiblePaymentMethodsRequestPayload = {
    customer?: {
        channel?: {
            browser_type?: string;
            client_os?: string;
            device_type?: string;
        };
        country_code?: string;
        id?: string;
        email?: string;
        phone?: PhoneNumber;
    };
    purchase_units?: ReadonlyArray<{
        amount: {
            currency_code: string;
            value?: string;
        };
        payee?: {
            client_id?: string;
            display_data?: {
                business_email?: string;
                business_phone?: PhoneNumber & {
                    extension_number: string;
                };
                brand_name?: string;
            };
            email_address?: string;
            merchant_id?: string;
        };
    }>;
    preferences?: {
        include_account_details?: boolean;
        include_vault_tokens?: boolean;
        payment_flow?: PaymentFlow;
        payment_source_constraint?: {
            constraint_type: string;
            payment_sources: Uppercase<EligiblePaymentMethods>[];
        };
    };
    shopper_session_id?: string;
    merchant_info?: {
        merchant_origin?: string;
    };
};
/**
 * Server-side function to fetch eligible payment methods from the PayPal API.
 *
 * Use this in server environments (Next.js server components, Remix loaders, etc.)
 * to pre-fetch eligibility data before hydrating the client. Pass the response
 * to the `PayPalProvider` via the `eligibleMethodsResponse` prop.
 *
 * @param options - Configuration for the eligibility request
 * @param options.headers - HTTP headers for the request, including the `Authorization` bearer token
 * @param options.environment - Target environment ("sandbox" or "production")
 * @param options.payload - Optional request payload with customer/purchase details
 * @param options.signal - Optional AbortSignal for request cancellation
 * @returns Promise resolving to the eligibility API response
 *
 * @example
 * // Next.js server component
 * const response = await fetchEligibleMethods({
 *     headers: {
 *         "Content-Type": "application/json",
 *         Authorization: `Bearer ${clientToken}`,
 *     },
 *     environment: "sandbox",
 *     payload: { purchase_units: [{ amount: { currency_code: "USD" } }] },
 * });
 *
 * <PayPalProvider eligibleMethodsResponse={response} ... />
 */
export declare function fetchEligibleMethods(options: FindEligiblePaymentMethodsOptions & {
    signal?: AbortSignal;
}): Promise<FindEligiblePaymentMethodsResponse>;
/**
 * @deprecated Renamed to `fetchEligibleMethods`. This is a server-side async
 * function, not a React hook — the `use` prefix falsely triggers
 * eslint-plugin-react-hooks (`rules-of-hooks` / `no-unnecessary-use-prefix`)
 * in consumer projects. Import `fetchEligibleMethods` instead.
 */
export declare const useFetchEligibleMethods: typeof fetchEligibleMethods;
export {};
