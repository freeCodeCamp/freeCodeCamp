// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The UsageRecordSummary object.
     */
    interface UsageRecordSummary {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'usage_record_summary';

      /**
       * The invoice in which this usage period has been billed for.
       */
      invoice: string | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      period: UsageRecordSummary.Period;

      /**
       * The ID of the subscription item this summary is describing.
       */
      subscription_item: string;

      /**
       * The total usage within this usage period.
       */
      total_usage: number;
    }

    namespace UsageRecordSummary {
      interface Period {
        /**
         * The end date of this usage period. All usage up to and including this point in time is included.
         */
        end: number | null;

        /**
         * The start date of this usage period. All usage after this point in time is included.
         */
        start: number | null;
      }
    }
  }
}
