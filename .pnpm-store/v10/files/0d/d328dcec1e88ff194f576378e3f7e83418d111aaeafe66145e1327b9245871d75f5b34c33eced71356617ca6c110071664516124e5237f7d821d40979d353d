// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Reporting {
      /**
       * The Report Run object represents an instance of a report type generated with
       * specific run parameters. Once the object is created, Stripe begins processing the report.
       * When the report has finished running, it will give you a reference to a file
       * where you can retrieve your results. For an overview, see
       * [API Access to Reports](https://stripe.com/docs/reporting/statements/api).
       *
       * Note that certain report types can only be run based on your live-mode data (not test-mode
       * data), and will error when queried without a [live-mode API key](https://stripe.com/docs/keys#test-live-modes).
       */
      interface ReportRun {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'reporting.report_run';

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * If something should go wrong during the run, a message about the failure (populated when
         *  `status=failed`).
         */
        error: string | null;

        /**
         * `true` if the report is run on live mode data and `false` if it is run on test mode data.
         */
        livemode: boolean;

        parameters: ReportRun.Parameters;

        /**
         * The ID of the [report type](https://stripe.com/docs/reports/report-types) to run, such as `"balance.summary.1"`.
         */
        report_type: string;

        /**
         * The file object representing the result of the report run (populated when
         *  `status=succeeded`).
         */
        result: Stripe.File | null;

        /**
         * Status of this report run. This will be `pending` when the run is initially created.
         *  When the run finishes, this will be set to `succeeded` and the `result` field will be populated.
         *  Rarely, we may encounter an error, at which point this will be set to `failed` and the `error` field will be populated.
         */
        status: string;

        /**
         * Timestamp at which this run successfully finished (populated when
         *  `status=succeeded`). Measured in seconds since the Unix epoch.
         */
        succeeded_at: number | null;
      }

      namespace ReportRun {
        interface Parameters {
          /**
           * The set of output columns requested for inclusion in the report run.
           */
          columns?: Array<string>;

          /**
           * Connected account ID by which to filter the report run.
           */
          connected_account?: string;

          /**
           * Currency of objects to be included in the report run.
           */
          currency?: string;

          /**
           * Ending timestamp of data to be included in the report run. Can be any UTC timestamp between 1 second after the user specified `interval_start` and 1 second before this report's last `data_available_end` value.
           */
          interval_end?: number;

          /**
           * Starting timestamp of data to be included in the report run. Can be any UTC timestamp between 1 second after this report's `data_available_start` and 1 second before the user specified `interval_end` value.
           */
          interval_start?: number;

          /**
           * Payout ID by which to filter the report run.
           */
          payout?: string;

          /**
           * Category of balance transactions to be included in the report run.
           */
          reporting_category?: string;

          /**
           * Defaults to `Etc/UTC`. The output timezone for all timestamps in the report. A list of possible time zone values is maintained at the [IANA Time Zone Database](http://www.iana.org/time-zones). Has no effect on `interval_start` or `interval_end`.
           */
          timezone?: string;
        }
      }
    }
  }
}
