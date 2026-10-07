// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Treasury {
      interface ReceivedCreditRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface ReceivedCreditListParams extends PaginationParams {
        /**
         * The FinancialAccount that received the funds.
         */
        financial_account: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Only return ReceivedCredits described by the flow.
         */
        linked_flows?: ReceivedCreditListParams.LinkedFlows;

        /**
         * Only return ReceivedCredits that have the given status: `succeeded` or `failed`.
         */
        status?: ReceivedCreditListParams.Status;
      }

      namespace ReceivedCreditListParams {
        interface LinkedFlows {
          /**
           * The source flow type.
           */
          source_flow_type: LinkedFlows.SourceFlowType;
        }

        namespace LinkedFlows {
          type SourceFlowType =
            | 'credit_reversal'
            | 'other'
            | 'outbound_payment'
            | 'payout';
        }

        type Status = 'failed' | 'succeeded';
      }

      class ReceivedCreditsResource {
        /**
         * Retrieves the details of an existing ReceivedCredit by passing the unique ReceivedCredit ID from the ReceivedCredit list.
         */
        retrieve(
          id: string,
          params?: ReceivedCreditRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.ReceivedCredit>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.ReceivedCredit>>;

        /**
         * Returns a list of ReceivedCredits.
         */
        list(
          params: ReceivedCreditListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Treasury.ReceivedCredit>;
      }
    }
  }
}
