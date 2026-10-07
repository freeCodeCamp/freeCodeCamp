// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Reporting {
      /**
       * The Report Type resource corresponds to a particular type of report, such as
       * the "Activity summary" or "Itemized payouts" reports. These objects are
       * identified by an ID belonging to a set of enumerated values. See
       * [API Access to Reports documentation](https://stripe.com/docs/reporting/statements/api)
       * for those Report Type IDs, along with required and optional parameters.
       *
       * Note that certain report types can only be run based on your live-mode data (not test-mode
       * data), and will error when queried without a [live-mode API key](https://stripe.com/docs/keys#test-live-modes).
       */
      interface ReportType {
        /**
         * The [ID of the Report Type](https://stripe.com/docs/reporting/statements/api#available-report-types), such as `balance.summary.1`.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'reporting.report_type';

        /**
         * Most recent time for which this Report Type is available. Measured in seconds since the Unix epoch.
         */
        data_available_end: number;

        /**
         * Earliest time for which this Report Type is available. Measured in seconds since the Unix epoch.
         */
        data_available_start: number;

        /**
         * List of column names that are included by default when this Report Type gets run. (If the Report Type doesn't support the `columns` parameter, this will be null.)
         */
        default_columns: Array<string> | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Human-readable name of the Report Type
         */
        name: string;

        /**
         * When this Report Type was latest updated. Measured in seconds since the Unix epoch.
         */
        updated: number;

        /**
         * Version of the Report Type. Different versions report with the same ID will have the same purpose, but may take different run parameters or have different result schemas.
         */
        version: number;
      }
    }
  }
}
