import { JSX, ReactNode } from "react";
import type { CardFieldsOneTimePaymentSession, CardFieldsSavePaymentSession, CardFieldsEventsOptions, UpdateOptions } from "../types";
export type CardFieldsSession = CardFieldsOneTimePaymentSession | CardFieldsSavePaymentSession;
export declare const CARD_FIELDS_SESSION_TYPES: {
    readonly ONE_TIME_PAYMENT: "one-time-payment";
    readonly SAVE_PAYMENT: "save-payment";
};
export type CardFieldsSessionType = (typeof CARD_FIELDS_SESSION_TYPES)[keyof typeof CARD_FIELDS_SESSION_TYPES];
type CardFieldsEventHandlers = Partial<CardFieldsEventsOptions>;
type CardFieldsProviderProps = {
    children: ReactNode;
} & CardFieldsEventHandlers & UpdateOptions;
/**
 * {@link PayPalCardFieldsProvider} creates a Card Fields session and provides it to child components.
 *
 * @remarks
 * Child components must use either {@link usePayPalCardFieldsOneTimePaymentSession} or
 * {@link usePayPalCardFieldsSavePaymentSession} to initialize the appropriate session type.
 * The session will not be created until one of these hooks is called.
 *
 * @example
 * // Amount can be updated dynamically
 * const [amount, setAmount] = useState<OrderAmount>({ value: "10.00", currencyCode: "USD" });
 * const onBlur = useCallback((event) => { ... }, []);
 * <PayPalProvider
 *  components={["card-fields"]}
 *  clientToken={clientToken}
 *  pageType="checkout"
 * >
 *   <PayPalCardFieldsProvider
 *     blur={onBlur}
 *     validitychange={(event) => console.log('Validity:', event)}
 *     cardtypechange={(event) => console.log('Card type:', event)}
 *     amount={amount}
 *     isCobrandedEligible={true}
 *   >
 *     <CheckoutForm />
 *   </PayPalCardFieldsProvider>
 * </PayPalProvider>
 */
export declare const PayPalCardFieldsProvider: ({ children, amount, isCobrandedEligible, ...eventHandlers }: CardFieldsProviderProps) => JSX.Element;
export {};
