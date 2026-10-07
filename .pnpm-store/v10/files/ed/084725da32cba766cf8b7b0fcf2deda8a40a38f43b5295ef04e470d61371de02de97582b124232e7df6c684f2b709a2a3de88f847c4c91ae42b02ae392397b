// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace TestHelpers {
      /**
       * The DeletedTestClock object.
       */
      interface DeletedTestClock {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'test_helpers.test_clock';

        /**
         * Always true for a deleted object
         */
        deleted: true;
      }

      /**
       * A test clock enables deterministic control over objects in testmode. With a test clock, you can create
       * objects at a frozen time in the past or future, and advance to a specific future time to observe webhooks and state changes. After the clock advances,
       * you can either validate the current state of your scenario (and test your assumptions), change the current state of your scenario (and test more complex scenarios), or keep advancing forward in time.
       */
      interface TestClock {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'test_helpers.test_clock';

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Always true for a deleted object
         */
        deleted?: void;

        /**
         * Time at which this clock is scheduled to auto delete.
         */
        deletes_after: number;

        /**
         * Time at which all objects belonging to this clock are frozen.
         */
        frozen_time: number;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The custom name supplied at creation.
         */
        name: string | null;

        /**
         * The status of the Test Clock.
         */
        status: TestClock.Status;

        status_details: TestClock.StatusDetails;
      }

      namespace TestClock {
        type Status = 'advancing' | 'internal_failure' | 'ready';

        interface StatusDetails {
          advancing?: StatusDetails.Advancing;
        }

        namespace StatusDetails {
          interface Advancing {
            /**
             * The `frozen_time` that the Test Clock is advancing towards.
             */
            target_frozen_time: number;
          }
        }
      }
    }
  }
}
