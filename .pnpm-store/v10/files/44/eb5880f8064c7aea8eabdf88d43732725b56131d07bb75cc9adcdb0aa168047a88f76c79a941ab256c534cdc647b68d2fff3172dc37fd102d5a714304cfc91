// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * An AccountSession allows a Connect platform to grant access to a connected account in Connect embedded components.
     *
     * We recommend that you create an AccountSession each time you need to display an embedded component
     * to your user. Do not save AccountSessions to your database as they expire relatively
     * quickly, and cannot be used more than once.
     *
     * Related guide: [Connect embedded components](https://stripe.com/docs/connect/get-started-connect-embedded-components)
     */
    interface AccountSession {
      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'account_session';

      /**
       * The ID of the account the AccountSession was created for
       */
      account: string;

      /**
       * The client secret of this AccountSession. Used on the client to set up secure access to the given `account`.
       *
       * The client secret can be used to provide access to `account` from your frontend. It should not be stored, logged, or exposed to anyone other than the connected account. Make sure that you have TLS enabled on any page that includes the client secret.
       *
       * Refer to our docs to [setup Connect embedded components](https://stripe.com/docs/connect/get-started-connect-embedded-components) and learn about how `client_secret` should be handled.
       */
      client_secret: string;

      components: AccountSession.Components;

      /**
       * The timestamp at which this AccountSession will expire.
       */
      expires_at: number;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;
    }

    namespace AccountSession {
      interface Components {
        account_management: Components.AccountManagement;

        account_onboarding: Components.AccountOnboarding;

        balances: Components.Balances;

        documents: Components.Documents;

        notification_banner: Components.NotificationBanner;

        payment_details: Components.PaymentDetails;

        payments: Components.Payments;

        payouts: Components.Payouts;

        payouts_list: Components.PayoutsList;

        tax_registrations: Components.TaxRegistrations;

        tax_settings: Components.TaxSettings;
      }

      namespace Components {
        interface AccountManagement {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: AccountManagement.Features;
        }

        namespace AccountManagement {
          interface Features {
            /**
             * Whether to allow platforms to control bank account collection for their connected accounts. This feature can only be false for custom accounts (or accounts where the platform is compliance owner). Otherwise, bank account collection is determined by compliance requirements.
             */
            external_account_collection: boolean;
          }
        }

        interface AccountOnboarding {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: AccountOnboarding.Features;
        }

        namespace AccountOnboarding {
          interface Features {
            /**
             * Whether to allow platforms to control bank account collection for their connected accounts. This feature can only be false for custom accounts (or accounts where the platform is compliance owner). Otherwise, bank account collection is determined by compliance requirements.
             */
            external_account_collection: boolean;
          }
        }

        interface Balances {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: Balances.Features;
        }

        namespace Balances {
          interface Features {
            /**
             * Whether to allow payout schedule to be changed. Default `true` when Stripe owns Loss Liability, default `false` otherwise.
             */
            edit_payout_schedule: boolean;

            /**
             * Whether to allow platforms to control bank account collection for their connected accounts. This feature can only be false for custom accounts (or accounts where the platform is compliance owner). Otherwise, bank account collection is determined by compliance requirements.
             */
            external_account_collection: boolean;

            /**
             * Whether to allow creation of instant payouts. Default `true` when Stripe owns Loss Liability, default `false` otherwise.
             */
            instant_payouts: boolean;

            /**
             * Whether to allow creation of standard payouts. Default `true` when Stripe owns Loss Liability, default `false` otherwise.
             */
            standard_payouts: boolean;
          }
        }

        interface Documents {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: Documents.Features;
        }

        namespace Documents {
          interface Features {}
        }

        interface NotificationBanner {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: NotificationBanner.Features;
        }

        namespace NotificationBanner {
          interface Features {
            /**
             * Whether to allow platforms to control bank account collection for their connected accounts. This feature can only be false for custom accounts (or accounts where the platform is compliance owner). Otherwise, bank account collection is determined by compliance requirements.
             */
            external_account_collection: boolean;
          }
        }

        interface PaymentDetails {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: PaymentDetails.Features;
        }

        namespace PaymentDetails {
          interface Features {
            /**
             * Whether to allow capturing and cancelling payment intents. This is `true` by default.
             */
            capture_payments: boolean;

            /**
             * Whether to allow connected accounts to manage destination charges that are created on behalf of them. This is `false` by default.
             */
            destination_on_behalf_of_charge_management: boolean;

            /**
             * Whether to allow responding to disputes, including submitting evidence and accepting disputes. This is `true` by default.
             */
            dispute_management: boolean;

            /**
             * Whether to allow sending refunds. This is `true` by default.
             */
            refund_management: boolean;
          }
        }

        interface Payments {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: Payments.Features;
        }

        namespace Payments {
          interface Features {
            /**
             * Whether to allow capturing and cancelling payment intents. This is `true` by default.
             */
            capture_payments: boolean;

            /**
             * Whether to allow connected accounts to manage destination charges that are created on behalf of them. This is `false` by default.
             */
            destination_on_behalf_of_charge_management: boolean;

            /**
             * Whether to allow responding to disputes, including submitting evidence and accepting disputes. This is `true` by default.
             */
            dispute_management: boolean;

            /**
             * Whether to allow sending refunds. This is `true` by default.
             */
            refund_management: boolean;
          }
        }

        interface Payouts {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: Payouts.Features;
        }

        namespace Payouts {
          interface Features {
            /**
             * Whether to allow payout schedule to be changed. Default `true` when Stripe owns Loss Liability, default `false` otherwise.
             */
            edit_payout_schedule: boolean;

            /**
             * Whether to allow platforms to control bank account collection for their connected accounts. This feature can only be false for custom accounts (or accounts where the platform is compliance owner). Otherwise, bank account collection is determined by compliance requirements.
             */
            external_account_collection: boolean;

            /**
             * Whether to allow creation of instant payouts. Default `true` when Stripe owns Loss Liability, default `false` otherwise.
             */
            instant_payouts: boolean;

            /**
             * Whether to allow creation of standard payouts. Default `true` when Stripe owns Loss Liability, default `false` otherwise.
             */
            standard_payouts: boolean;
          }
        }

        interface PayoutsList {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: PayoutsList.Features;
        }

        namespace PayoutsList {
          interface Features {}
        }

        interface TaxRegistrations {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: TaxRegistrations.Features;
        }

        namespace TaxRegistrations {
          interface Features {}
        }

        interface TaxSettings {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: TaxSettings.Features;
        }

        namespace TaxSettings {
          interface Features {}
        }
      }
    }
  }
}
