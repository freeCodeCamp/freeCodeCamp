// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Terminal {
      /**
       * A Configurations object represents how features should be configured for terminal readers.
       */
      interface Configuration {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'terminal.configuration';

        bbpos_wisepos_e?: Configuration.BbposWiseposE;

        /**
         * Always true for a deleted object
         */
        deleted?: void;

        /**
         * Whether this Configuration is the default for your account
         */
        is_account_default: boolean | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * String indicating the name of the Configuration object, set by the user
         */
        name: string | null;

        offline?: Configuration.Offline;

        reboot_window?: Configuration.RebootWindow;

        stripe_s700?: Configuration.StripeS700;

        tipping?: Configuration.Tipping;

        verifone_p400?: Configuration.VerifoneP400;
      }

      namespace Configuration {
        interface BbposWiseposE {
          /**
           * A File ID representing an image you would like displayed on the reader.
           */
          splashscreen?: string | Stripe.File;
        }

        interface Offline {
          /**
           * Determines whether to allow transactions to be collected while reader is offline. Defaults to false.
           */
          enabled: boolean | null;
        }

        interface RebootWindow {
          /**
           * Integer between 0 to 23 that represents the end hour of the reboot time window. The value must be different than the start_hour.
           */
          end_hour: number;

          /**
           * Integer between 0 to 23 that represents the start hour of the reboot time window.
           */
          start_hour: number;
        }

        interface StripeS700 {
          /**
           * A File ID representing an image you would like displayed on the reader.
           */
          splashscreen?: string | Stripe.File;
        }

        interface Tipping {
          aud?: Tipping.Aud;

          cad?: Tipping.Cad;

          chf?: Tipping.Chf;

          czk?: Tipping.Czk;

          dkk?: Tipping.Dkk;

          eur?: Tipping.Eur;

          gbp?: Tipping.Gbp;

          hkd?: Tipping.Hkd;

          myr?: Tipping.Myr;

          nok?: Tipping.Nok;

          nzd?: Tipping.Nzd;

          sek?: Tipping.Sek;

          sgd?: Tipping.Sgd;

          usd?: Tipping.Usd;
        }

        namespace Tipping {
          interface Aud {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Cad {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Chf {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Czk {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Dkk {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Eur {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Gbp {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Hkd {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Myr {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Nok {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Nzd {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Sek {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Sgd {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Usd {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }
        }

        interface VerifoneP400 {
          /**
           * A File ID representing an image you would like displayed on the reader.
           */
          splashscreen?: string | Stripe.File;
        }
      }

      /**
       * The DeletedConfiguration object.
       */
      interface DeletedConfiguration {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'terminal.configuration';

        /**
         * Always true for a deleted object
         */
        deleted: true;
      }
    }
  }
}
