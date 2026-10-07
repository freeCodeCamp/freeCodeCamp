// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace TestHelpers {
      namespace Treasury {
        interface ReceivedCreditCreateParams {
          /**
           * Amount (in cents) to be transferred.
           */
          amount: number;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * The FinancialAccount to send funds to.
           */
          financial_account: string;

          /**
           * Specifies the network rails to be used. If not set, will default to the PaymentMethod's preferred network. See the [docs](https://stripe.com/docs/treasury/money-movement/timelines) to learn more about money movement timelines for each network type.
           */
          network: ReceivedCreditCreateParams.Network;

          /**
           * An arbitrary string attached to the object. Often useful for displaying to users.
           */
          description?: string;

          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;

          /**
           * Initiating payment method details for the object.
           */
          initiating_payment_method_details?: ReceivedCreditCreateParams.InitiatingPaymentMethodDetails;
        }

        namespace ReceivedCreditCreateParams {
          interface InitiatingPaymentMethodDetails {
            /**
             * The source type.
             */
            type: 'us_bank_account';

            /**
             * Optional fields for `us_bank_account`.
             */
            us_bank_account?: InitiatingPaymentMethodDetails.UsBankAccount;
          }

          namespace InitiatingPaymentMethodDetails {
            interface UsBankAccount {
              /**
               * The bank account holder's name.
               */
              account_holder_name?: string;

              /**
               * The bank account number.
               */
              account_number?: string;

              /**
               * The bank account's routing number.
               */
              routing_number?: string;
            }
          }

          type Network = 'ach' | 'us_domestic_wire';
        }
      }

      namespace Treasury {
        class ReceivedCreditsResource {
          /**
           * Use this endpoint to simulate a test mode ReceivedCredit initiated by a third party. In live mode, you can't directly create ReceivedCredits initiated by third parties.
           */
          create(
            params: ReceivedCreditCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Treasury.ReceivedCredit>>;
        }
      }
    }
  }
}
