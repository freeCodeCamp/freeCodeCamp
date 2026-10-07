// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace TestHelpers {
      namespace Terminal {
        interface ReaderPresentPaymentMethodParams {
          /**
           * Simulated on-reader tip amount.
           */
          amount_tip?: number;

          /**
           * Simulated data for the card_present payment method.
           */
          card_present?: ReaderPresentPaymentMethodParams.CardPresent;

          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;

          /**
           * Simulated data for the interac_present payment method.
           */
          interac_present?: ReaderPresentPaymentMethodParams.InteracPresent;

          /**
           * Simulated payment type.
           */
          type?: ReaderPresentPaymentMethodParams.Type;
        }

        namespace ReaderPresentPaymentMethodParams {
          interface CardPresent {
            /**
             * The card number, as a string without any separators.
             */
            number?: string;
          }

          interface InteracPresent {
            /**
             * Card Number
             */
            number?: string;
          }

          type Type = 'card_present' | 'interac_present';
        }
      }

      namespace Terminal {
        class ReadersResource {
          /**
           * Presents a payment method on a simulated reader. Can be used to simulate accepting a payment, saving a card or refunding a transaction.
           */
          presentPaymentMethod(
            id: string,
            params?: ReaderPresentPaymentMethodParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Terminal.Reader>>;
          presentPaymentMethod(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Terminal.Reader>>;
        }
      }
    }
  }
}
