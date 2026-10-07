import type { PayPalPresentationModeOptions, SavePaymentSessionOptions, BasePaymentSessionReturn, WithOptionalPresentationMode } from "../types";
export type UsePayPalCreditSavePaymentSessionProps = ((Omit<SavePaymentSessionOptions, "vaultSetupToken"> & {
    createVaultToken: () => Promise<{
        vaultSetupToken: string;
    }>;
    vaultSetupToken?: never;
}) | (SavePaymentSessionOptions & {
    createVaultToken?: never;
    vaultSetupToken: string;
})) & WithOptionalPresentationMode<PayPalPresentationModeOptions>;
/**
 * Hook for managing PayPal Credit save payment sessions.
 *
 * This hook creates and manages a PayPal Credit save payment session for vaulting payment methods.
 * It handles session lifecycle, resume flows for redirect-based flows, and provides methods to start, cancel, and destroy the session.
 *
 * @returns Object with: `error` (any session error), `isPending` (SDK loading), `handleClick` (starts session), `handleCancel` (cancels session), `handleDestroy` (cleanup)
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * function SaveCreditButton() {
 *   const { error, isPending, handleClick, handleCancel } = usePayPalCreditSavePaymentSession({
 *     presentationMode: 'redirect',
 *     createVaultToken: async () => ({ vaultSetupToken: 'VAULT-TOKEN-123' }),
 *     onApprove: (data) => console.log('Vaulted:', data),
 *     onCancel: () => console.log('Cancelled'),
 *   });
 *   const { eligiblePaymentMethods } = usePayPal();
 *   const creditDetails = eligiblePaymentMethods?.getDetails?.("credit");
 *
 *   if (isPending) return null;
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return (
 *     <paypal-credit-button
 *       countryCode={creditDetails?.countryCode}
 *       onClick={handleClick}
 *       onCancel={handleCancel}
 *     />
 *   );
 * }
 */
export declare function usePayPalCreditSavePaymentSession({ presentationMode, fullPageOverlay, autoRedirect, createVaultToken, vaultSetupToken, ...callbacks }: UsePayPalCreditSavePaymentSessionProps): BasePaymentSessionReturn;
