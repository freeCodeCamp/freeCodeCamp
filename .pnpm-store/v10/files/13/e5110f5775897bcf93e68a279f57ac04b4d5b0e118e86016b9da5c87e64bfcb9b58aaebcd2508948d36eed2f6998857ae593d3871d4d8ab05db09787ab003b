// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Treasury {
      /**
       * Stripe Treasury provides users with a container for money called a FinancialAccount that is separate from their Payments balance.
       * FinancialAccounts serve as the source and destination of Treasury's money movement APIs.
       */
      interface FinancialAccount {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'treasury.financial_account';

        /**
         * The array of paths to active Features in the Features hash.
         */
        active_features?: Array<FinancialAccount.ActiveFeature>;

        /**
         * Balance information for the FinancialAccount
         */
        balance: FinancialAccount.Balance;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country: string;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Encodes whether a FinancialAccount has access to a particular Feature, with a `status` enum and associated `status_details`.
         * Stripe or the platform can control Features via the requested field.
         */
        features?: Stripe.Treasury.FinancialAccountFeatures;

        /**
         * The set of credentials that resolve to a FinancialAccount.
         */
        financial_addresses: Array<FinancialAccount.FinancialAddress>;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata | null;

        /**
         * The array of paths to pending Features in the Features hash.
         */
        pending_features?: Array<FinancialAccount.PendingFeature>;

        /**
         * The set of functionalities that the platform can restrict on the FinancialAccount.
         */
        platform_restrictions?: FinancialAccount.PlatformRestrictions | null;

        /**
         * The array of paths to restricted Features in the Features hash.
         */
        restricted_features?: Array<FinancialAccount.RestrictedFeature>;

        /**
         * The enum specifying what state the account is in.
         */
        status: FinancialAccount.Status;

        status_details: FinancialAccount.StatusDetails;

        /**
         * The currencies the FinancialAccount can hold a balance in. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.
         */
        supported_currencies: Array<string>;
      }

      namespace FinancialAccount {
        type ActiveFeature =
          | 'card_issuing'
          | 'deposit_insurance'
          | 'financial_addresses.aba'
          | 'financial_addresses.aba.forwarding'
          | 'inbound_transfers.ach'
          | 'intra_stripe_flows'
          | 'outbound_payments.ach'
          | 'outbound_payments.us_domestic_wire'
          | 'outbound_transfers.ach'
          | 'outbound_transfers.us_domestic_wire'
          | 'remote_deposit_capture';

        interface Balance {
          /**
           * Funds the user can spend right now.
           */
          cash: {
            [key: string]: number;
          };

          /**
           * Funds not spendable yet, but will become available at a later time.
           */
          inbound_pending: {
            [key: string]: number;
          };

          /**
           * Funds in the account, but not spendable because they are being held for pending outbound flows.
           */
          outbound_pending: {
            [key: string]: number;
          };
        }

        interface FinancialAddress {
          /**
           * ABA Records contain U.S. bank account details per the ABA format.
           */
          aba?: FinancialAddress.Aba;

          /**
           * The list of networks that the address supports
           */
          supported_networks?: Array<FinancialAddress.SupportedNetwork>;

          /**
           * The type of financial address
           */
          type: 'aba';
        }

        namespace FinancialAddress {
          interface Aba {
            /**
             * The name of the person or business that owns the bank account.
             */
            account_holder_name: string;

            /**
             * The account number.
             */
            account_number?: string | null;

            /**
             * The last four characters of the account number.
             */
            account_number_last4: string;

            /**
             * Name of the bank.
             */
            bank_name: string;

            /**
             * Routing number for the account.
             */
            routing_number: string;
          }

          type SupportedNetwork = 'ach' | 'us_domestic_wire';
        }

        type PendingFeature =
          | 'card_issuing'
          | 'deposit_insurance'
          | 'financial_addresses.aba'
          | 'financial_addresses.aba.forwarding'
          | 'inbound_transfers.ach'
          | 'intra_stripe_flows'
          | 'outbound_payments.ach'
          | 'outbound_payments.us_domestic_wire'
          | 'outbound_transfers.ach'
          | 'outbound_transfers.us_domestic_wire'
          | 'remote_deposit_capture';

        interface PlatformRestrictions {
          /**
           * Restricts all inbound money movement.
           */
          inbound_flows: PlatformRestrictions.InboundFlows | null;

          /**
           * Restricts all outbound money movement.
           */
          outbound_flows: PlatformRestrictions.OutboundFlows | null;
        }

        namespace PlatformRestrictions {
          type InboundFlows = 'restricted' | 'unrestricted';

          type OutboundFlows = 'restricted' | 'unrestricted';
        }

        type RestrictedFeature =
          | 'card_issuing'
          | 'deposit_insurance'
          | 'financial_addresses.aba'
          | 'financial_addresses.aba.forwarding'
          | 'inbound_transfers.ach'
          | 'intra_stripe_flows'
          | 'outbound_payments.ach'
          | 'outbound_payments.us_domestic_wire'
          | 'outbound_transfers.ach'
          | 'outbound_transfers.us_domestic_wire'
          | 'remote_deposit_capture';

        type Status = 'closed' | 'open';

        interface StatusDetails {
          /**
           * Details related to the closure of this FinancialAccount
           */
          closed: StatusDetails.Closed | null;
        }

        namespace StatusDetails {
          interface Closed {
            /**
             * The array that contains reasons for a FinancialAccount closure.
             */
            reasons: Array<Closed.Reason>;
          }

          namespace Closed {
            type Reason = 'account_rejected' | 'closed_by_platform' | 'other';
          }
        }
      }
    }
  }
}
