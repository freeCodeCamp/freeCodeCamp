// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * This is an object representing your Stripe balance. You can retrieve it to see
     * the balance currently on your Stripe account.
     *
     * You can also retrieve the balance history, which contains a list of
     * [transactions](https://stripe.com/docs/reporting/balance-transaction-types) that contributed to the balance
     * (charges, payouts, and so forth).
     *
     * The available and pending amounts for each currency are broken down further by
     * payment source types.
     *
     * Related guide: [Understanding Connect account balances](https://stripe.com/docs/connect/account-balances)
     */
    interface Balance {
      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'balance';

      /**
       * Available funds that you can transfer or pay out automatically by Stripe or explicitly through the [Transfers API](https://stripe.com/docs/api#transfers) or [Payouts API](https://stripe.com/docs/api#payouts). You can find the available balance for each currency and payment type in the `source_types` property.
       */
      available: Array<Balance.Available>;

      /**
       * Funds held due to negative balances on connected accounts where [account.controller.requirement_collection](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. You can find the connect reserve balance for each currency and payment type in the `source_types` property.
       */
      connect_reserved?: Array<Balance.ConnectReserved>;

      /**
       * Funds that you can pay out using Instant Payouts.
       */
      instant_available?: Array<Balance.InstantAvailable>;

      issuing?: Balance.Issuing;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Funds that aren't available in the balance yet. You can find the pending balance for each currency and each payment type in the `source_types` property.
       */
      pending: Array<Balance.Pending>;
    }

    namespace Balance {
      interface Available {
        /**
         * Balance amount.
         */
        amount: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        source_types?: Available.SourceTypes;
      }

      namespace Available {
        interface SourceTypes {
          /**
           * Amount for bank account.
           */
          bank_account?: number;

          /**
           * Amount for card.
           */
          card?: number;

          /**
           * Amount for FPX.
           */
          fpx?: number;
        }
      }

      interface ConnectReserved {
        /**
         * Balance amount.
         */
        amount: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        source_types?: ConnectReserved.SourceTypes;
      }

      namespace ConnectReserved {
        interface SourceTypes {
          /**
           * Amount for bank account.
           */
          bank_account?: number;

          /**
           * Amount for card.
           */
          card?: number;

          /**
           * Amount for FPX.
           */
          fpx?: number;
        }
      }

      interface InstantAvailable {
        /**
         * Balance amount.
         */
        amount: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * Breakdown of balance by destination.
         */
        net_available?: Array<InstantAvailable.NetAvailable>;

        source_types?: InstantAvailable.SourceTypes;
      }

      namespace InstantAvailable {
        interface NetAvailable {
          /**
           * Net balance amount, subtracting fees from platform-set pricing.
           */
          amount: number;

          /**
           * ID of the external account for this net balance (not expandable).
           */
          destination: string;

          source_types?: NetAvailable.SourceTypes;
        }

        namespace NetAvailable {
          interface SourceTypes {
            /**
             * Amount for bank account.
             */
            bank_account?: number;

            /**
             * Amount for card.
             */
            card?: number;

            /**
             * Amount for FPX.
             */
            fpx?: number;
          }
        }

        interface SourceTypes {
          /**
           * Amount for bank account.
           */
          bank_account?: number;

          /**
           * Amount for card.
           */
          card?: number;

          /**
           * Amount for FPX.
           */
          fpx?: number;
        }
      }

      interface Issuing {
        /**
         * Funds that are available for use.
         */
        available: Array<Issuing.Available>;
      }

      namespace Issuing {
        interface Available {
          /**
           * Balance amount.
           */
          amount: number;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          source_types?: Available.SourceTypes;
        }

        namespace Available {
          interface SourceTypes {
            /**
             * Amount for bank account.
             */
            bank_account?: number;

            /**
             * Amount for card.
             */
            card?: number;

            /**
             * Amount for FPX.
             */
            fpx?: number;
          }
        }
      }

      interface Pending {
        /**
         * Balance amount.
         */
        amount: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        source_types?: Pending.SourceTypes;
      }

      namespace Pending {
        interface SourceTypes {
          /**
           * Amount for bank account.
           */
          bank_account?: number;

          /**
           * Amount for card.
           */
          card?: number;

          /**
           * Amount for FPX.
           */
          fpx?: number;
        }
      }
    }
  }
}
