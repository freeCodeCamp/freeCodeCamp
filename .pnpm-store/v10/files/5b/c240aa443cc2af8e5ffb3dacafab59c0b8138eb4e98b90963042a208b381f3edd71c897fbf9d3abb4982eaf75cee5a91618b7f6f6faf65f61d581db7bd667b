/*!
 * react-paypal-js v10.3.0 (2026-07-31T15:41:18.126Z)
 * Copyright 2020-present, PayPal, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import 'server-only';

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
async function fetchEligibleMethods(options) {
  const {
    payload,
    signal,
    environment,
    headers
  } = options;
  if (environment !== "production" && environment !== "sandbox") {
    throw new Error('The "environment" option is required and must be either "production" or "sandbox"');
  }
  const defaultPayload = payload ?? {};
  const baseUrl = environment === "production" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com";
  try {
    const response = await fetch(`${baseUrl}/v2/payments/find-eligible-methods`, {
      method: "POST",
      headers,
      body: JSON.stringify(defaultPayload),
      signal
    });
    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Eligibility API error: ${response.status} - ${body}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch eligible methods: ${error instanceof Error ? error.message : String(error)}`);
  }
}
/**
 * @deprecated Renamed to `fetchEligibleMethods`. This is a server-side async
 * function, not a React hook — the `use` prefix falsely triggers
 * eslint-plugin-react-hooks (`rules-of-hooks` / `no-unnecessary-use-prefix`)
 * in consumer projects. Import `fetchEligibleMethods` instead.
 */
const useFetchEligibleMethods = fetchEligibleMethods;
export { fetchEligibleMethods, useFetchEligibleMethods };
