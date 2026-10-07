// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace TestHelpers {
      interface CustomerFundCashBalanceParams {
        /**
         * Amount to be used for this test cash balance transaction. A positive integer representing how much to fund in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to fund $1.00 or 100 to fund ¥100, a zero-decimal currency).
         */
        amount: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * A description of the test funding. This simulates free-text references supplied by customers when making bank transfers to their cash balance. You can use this to test how Stripe's [reconciliation algorithm](https://stripe.com/docs/payments/customer-balance/reconciliation) applies to different user inputs.
         */
        reference?: string;
      }

      class CustomersResource {
        /**
         * Create an incoming testmode bank transfer
         */
        fundCashBalance(
          id: string,
          params: CustomerFundCashBalanceParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.CustomerCashBalanceTransaction>>;
      }
    }
  }
}
