import type { GooglePayButtonOptions, GooglePayIsReadyToPayRequest, GooglePayPaymentDataRequest, GooglePayPaymentMethodData } from "@paypal/paypal-js/sdk-v6";
declare global {
    interface Window {
        google?: {
            payments: {
                api: {
                    PaymentsClient: new (config: {
                        environment: string;
                        paymentDataCallbacks?: {
                            onPaymentAuthorized?: (paymentData: google.payments.api.PaymentData) => Promise<google.payments.api.PaymentAuthorizationResult>;
                        };
                    }) => google.payments.api.PaymentsClient;
                };
            };
        };
    }
    namespace google.payments.api {
        interface PaymentData {
            paymentMethodData: GooglePayPaymentMethodData;
        }
        interface PaymentAuthorizationResult {
            transactionState: "SUCCESS" | "ERROR";
            error?: {
                intent: string;
                message: string;
                reason: string;
            };
        }
        interface PaymentsClient {
            loadPaymentData(request: GooglePayPaymentDataRequest): Promise<void>;
            isReadyToPay(request: GooglePayIsReadyToPayRequest): Promise<{
                result: boolean;
            }>;
            createButton(options: GooglePayButtonOptions): HTMLElement;
        }
    }
}
