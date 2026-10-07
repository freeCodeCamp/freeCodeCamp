// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface AccountSessionCreateParams {
      /**
       * The identifier of the account to create an Account Session for.
       */
      account: string;

      /**
       * Each key of the dictionary represents an embedded component, and each embedded component maps to its configuration (e.g. whether it has been enabled or not).
       */
      components: AccountSessionCreateParams.Components;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    namespace AccountSessionCreateParams {
      interface Components {
        /**
         * Configuration for the account management embedded component.
         */
        account_management?: Components.AccountManagement;

        /**
         * Configuration for the account onboarding embedded component.
         */
        account_onboarding?: Components.AccountOnboarding;

        /**
         * Configuration for the balances embedded component.
         */
        balances?: Components.Balances;

        /**
         * Configuration for the documents embedded component.
         */
        documents?: Components.Documents;

        /**
         * Configuration for the notification banner embedded component.
         */
        notification_banner?: Components.NotificationBanner;

        /**
         * Configuration for the payment details embedded component.
         */
        payment_details?: Components.PaymentDetails;

        /**
         * Configuration for the payments embedded component.
         */
        payments?: Components.Payments;

        /**
         * Configuration for the payouts embedded component.
         */
        payouts?: Components.Payouts;

        /**
         * Configuration for the payouts list embedded component.
         */
        payouts_list?: Components.PayoutsList;

        /**
         * Configuration for the tax registrations embedded component.
         */
        tax_registrations?: Components.TaxRegistrations;

        /**
         * Configuration for the tax settings embedded component.
         */
        tax_settings?: Components.TaxSettings;
      }

      namespace Components {
        interface AccountManagement {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: AccountManagement.Features;
        }

        namespace AccountManagement {
          interface Features {
            /**
             * Whether to allow platforms to control bank account collection for their connected accounts. This feature can only be false for custom accounts (or accounts where the platform is compliance owner). Otherwise, bank account collection is determined by compliance requirements.
             */
            external_account_collection?: boolean;
          }
        }

        interface AccountOnboarding {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: AccountOnboarding.Features;
        }

        namespace AccountOnboarding {
          interface Features {
            /**
             * Whether to allow platforms to control bank account collection for their connected accounts. This feature can only be false for custom accounts (or accounts where the platform is compliance owner). Otherwise, bank account collection is determined by compliance requirements.
             */
            external_account_collection?: boolean;
          }
        }

        interface Balances {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: Balances.Features;
        }

        namespace Balances {
          interface Features {
            /**
             * Whether to allow payout schedule to be changed. Default `true` when Stripe owns Loss Liability, default `false` otherwise.
             */
            edit_payout_schedule?: boolean;

            /**
             * Whether to allow platforms to control bank account collection for their connected accounts. This feature can only be false for custom accounts (or accounts where the platform is compliance owner). Otherwise, bank account collection is determined by compliance requirements.
             */
            external_account_collection?: boolean;

            /**
             * Whether to allow creation of instant payouts. Default `true` when Stripe owns Loss Liability, default `false` otherwise.
             */
            instant_payouts?: boolean;

            /**
             * Whether to allow creation of standard payouts. Default `true` when Stripe owns Loss Liability, default `false` otherwise.
             */
            standard_payouts?: boolean;
          }
        }

        interface Documents {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: Documents.Features;
        }

        namespace Documents {
          interface Features {}
        }

        interface NotificationBanner {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: NotificationBanner.Features;
        }

        namespace NotificationBanner {
          interface Features {
            /**
             * Whether to allow platforms to control bank account collection for their connected accounts. This feature can only be false for custom accounts (or accounts where the platform is compliance owner). Otherwise, bank account collection is determined by compliance requirements.
             */
            external_account_collection?: boolean;
          }
        }

        interface PaymentDetails {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: PaymentDetails.Features;
        }

        namespace PaymentDetails {
          interface Features {
            /**
             * Whether to allow capturing and cancelling payment intents. This is `true` by default.
             */
            capture_payments?: boolean;

            /**
             * Whether to allow connected accounts to manage destination charges that are created on behalf of them. This is `false` by default.
             */
            destination_on_behalf_of_charge_management?: boolean;

            /**
             * Whether to allow responding to disputes, including submitting evidence and accepting disputes. This is `true` by default.
             */
            dispute_management?: boolean;

            /**
             * Whether to allow sending refunds. This is `true` by default.
             */
            refund_management?: boolean;
          }
        }

        interface Payments {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: Payments.Features;
        }

        namespace Payments {
          interface Features {
            /**
             * Whether to allow capturing and cancelling payment intents. This is `true` by default.
             */
            capture_payments?: boolean;

            /**
             * Whether to allow connected accounts to manage destination charges that are created on behalf of them. This is `false` by default.
             */
            destination_on_behalf_of_charge_management?: boolean;

            /**
             * Whether to allow responding to disputes, including submitting evidence and accepting disputes. This is `true` by default.
             */
            dispute_management?: boolean;

            /**
             * Whether to allow sending refunds. This is `true` by default.
             */
            refund_management?: boolean;
          }
        }

        interface Payouts {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: Payouts.Features;
        }

        namespace Payouts {
          interface Features {
            /**
             * Whether to allow payout schedule to be changed. Default `true` when Stripe owns Loss Liability, default `false` otherwise.
             */
            edit_payout_schedule?: boolean;

            /**
             * Whether to allow platforms to control bank account collection for their connected accounts. This feature can only be false for custom accounts (or accounts where the platform is compliance owner). Otherwise, bank account collection is determined by compliance requirements.
             */
            external_account_collection?: boolean;

            /**
             * Whether to allow creation of instant payouts. Default `true` when Stripe owns Loss Liability, default `false` otherwise.
             */
            instant_payouts?: boolean;

            /**
             * Whether to allow creation of standard payouts. Default `true` when Stripe owns Loss Liability, default `false` otherwise.
             */
            standard_payouts?: boolean;
          }
        }

        interface PayoutsList {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: PayoutsList.Features;
        }

        namespace PayoutsList {
          interface Features {}
        }

        interface TaxRegistrations {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: TaxRegistrations.Features;
        }

        namespace TaxRegistrations {
          interface Features {}
        }

        interface TaxSettings {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: TaxSettings.Features;
        }

        namespace TaxSettings {
          interface Features {}
        }
      }
    }

    class AccountSessionsResource {
      /**
       * Creates a AccountSession object that includes a single-use token that the platform can use on their front-end to grant client-side API access.
       */
      create(
        params: AccountSessionCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.AccountSession>>;
    }
  }
}
