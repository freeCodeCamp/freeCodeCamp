import type { PayPalPresentationModeOptions, SavePaymentSessionOptions, BasePaymentSessionReturn, WithOptionalPresentationMode } from "../types";
export type UsePayPalSavePaymentSessionProps = ((Omit<SavePaymentSessionOptions, "vaultSetupToken"> & {
    createVaultToken: () => Promise<{
        vaultSetupToken: string;
    }>;
    vaultSetupToken?: never;
}) | (SavePaymentSessionOptions & {
    createVaultToken?: never;
    vaultSetupToken: string;
})) & WithOptionalPresentationMode<PayPalPresentationModeOptions>;
/**
 * Hook for managing a PayPal save payment session, vault without purchase.
 *
 * This hook creates and manages a PayPal save payment session for vaulting payment methods.
 * It supports multiple presentation modes and handles session lifecycle, resume flows for redirect-based
 * flows, and provides methods to start, cancel, and destroy the session.
 *
 * @returns Object with: `error` (any session error), `isPending` (SDK loading), `handleClick` (starts session), `handleCancel` (cancels session), `handleDestroy` (cleanup)
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * function SavePayPalButton() {
 *   const { error, isPending, handleClick, handleCancel } = usePayPalSavePaymentSession({
 *     presentationMode: 'popup',
 *     createVaultToken: async () => ({ vaultSetupToken: 'VAULT-TOKEN-123' }),
 *     onApprove: (data) => console.log('Vaulted:', data),
 *     onCancel: () => console.log('Cancelled'),
 *   });
 *
 *   if (isPending) return null;
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return (
 *     <paypal-button onClick={handleClick} onCancel={handleCancel} />
 *   );
 * }
 */
export declare function usePayPalSavePaymentSession({ presentationMode, fullPageOverlay, autoRedirect, createVaultToken, vaultSetupToken, ...callbacks }: UsePayPalSavePaymentSessionProps): BasePaymentSessionReturn;
