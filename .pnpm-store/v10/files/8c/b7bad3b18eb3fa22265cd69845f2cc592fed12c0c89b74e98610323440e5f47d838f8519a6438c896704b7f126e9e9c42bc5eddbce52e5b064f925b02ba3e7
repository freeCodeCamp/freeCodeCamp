export * from "./ProviderEnums";
export * from "./braintree";
export * from "./googlePay";
export type * from "@paypal/paypal-js/sdk-v6";
export type * from "./sdkWebComponents";
export interface BasePaymentSessionReturn {
    error: Error | null;
    isPending: boolean;
    handleClick: () => Promise<{
        redirectURL?: string;
    } | void>;
    handleCancel: () => void;
    handleDestroy: () => void;
}
/**
 * Wraps an SDK presentation-mode discriminated union so that the `presentationMode`
 * discriminator becomes optional. When omitted, the React hook defaults it to `"auto"`
 * at runtime, so the consumer can rely on the `"auto"` branch's sibling-field shape.
 *
 * Either: the user picks a mode explicitly (the original strict union applies) — or:
 * they omit `presentationMode`, in which case only the auto-branch's allowed siblings
 * are valid.
 */
export type WithOptionalPresentationMode<T extends {
    presentationMode: string;
}> = T | (Omit<Extract<T, {
    presentationMode: "auto";
}>, "presentationMode"> & {
    presentationMode?: undefined;
});
