// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * PaymentMethodConfigurations control which payment methods are displayed to your customers when you don't explicitly specify payment method types. You can have multiple configurations with different sets of payment methods for different scenarios.
     *
     * There are two types of PaymentMethodConfigurations. Which is used depends on the [charge type](https://stripe.com/docs/connect/charges):
     *
     * **Direct** configurations apply to payments created on your account, including Connect destination charges, Connect separate charges and transfers, and payments not involving Connect.
     *
     * **Child** configurations apply to payments created on your connected accounts using direct charges, and charges with the on_behalf_of parameter.
     *
     * Child configurations have a `parent` that sets default values and controls which settings connected accounts may override. You can specify a parent ID at payment time, and Stripe will automatically resolve the connected account's associated child configuration. Parent configurations are [managed in the dashboard](https://dashboard.stripe.com/settings/payment_methods/connected_accounts) and are not available in this API.
     *
     * Related guides:
     * - [Payment Method Configurations API](https://stripe.com/docs/connect/payment-method-configurations)
     * - [Multiple configurations on dynamic payment methods](https://stripe.com/docs/payments/multiple-payment-method-configs)
     * - [Multiple configurations for your Connect accounts](https://stripe.com/docs/connect/multiple-payment-method-configurations)
     */
    interface PaymentMethodConfiguration {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'payment_method_configuration';

      acss_debit?: PaymentMethodConfiguration.AcssDebit;

      /**
       * Whether the configuration can be used for new payments.
       */
      active: boolean;

      affirm?: PaymentMethodConfiguration.Affirm;

      afterpay_clearpay?: PaymentMethodConfiguration.AfterpayClearpay;

      alipay?: PaymentMethodConfiguration.Alipay;

      amazon_pay?: PaymentMethodConfiguration.AmazonPay;

      apple_pay?: PaymentMethodConfiguration.ApplePay;

      /**
       * For child configs, the Connect application associated with the configuration.
       */
      application: string | null;

      au_becs_debit?: PaymentMethodConfiguration.AuBecsDebit;

      bacs_debit?: PaymentMethodConfiguration.BacsDebit;

      bancontact?: PaymentMethodConfiguration.Bancontact;

      blik?: PaymentMethodConfiguration.Blik;

      boleto?: PaymentMethodConfiguration.Boleto;

      card?: PaymentMethodConfiguration.Card;

      cartes_bancaires?: PaymentMethodConfiguration.CartesBancaires;

      cashapp?: PaymentMethodConfiguration.Cashapp;

      customer_balance?: PaymentMethodConfiguration.CustomerBalance;

      eps?: PaymentMethodConfiguration.Eps;

      fpx?: PaymentMethodConfiguration.Fpx;

      giropay?: PaymentMethodConfiguration.Giropay;

      google_pay?: PaymentMethodConfiguration.GooglePay;

      grabpay?: PaymentMethodConfiguration.Grabpay;

      ideal?: PaymentMethodConfiguration.Ideal;

      /**
       * The default configuration is used whenever a payment method configuration is not specified.
       */
      is_default: boolean;

      jcb?: PaymentMethodConfiguration.Jcb;

      klarna?: PaymentMethodConfiguration.Klarna;

      konbini?: PaymentMethodConfiguration.Konbini;

      link?: PaymentMethodConfiguration.Link;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      mobilepay?: PaymentMethodConfiguration.Mobilepay;

      multibanco?: PaymentMethodConfiguration.Multibanco;

      /**
       * The configuration's name.
       */
      name: string;

      oxxo?: PaymentMethodConfiguration.Oxxo;

      p24?: PaymentMethodConfiguration.P24;

      /**
       * For child configs, the configuration's parent configuration.
       */
      parent: string | null;

      paynow?: PaymentMethodConfiguration.Paynow;

      paypal?: PaymentMethodConfiguration.Paypal;

      promptpay?: PaymentMethodConfiguration.Promptpay;

      revolut_pay?: PaymentMethodConfiguration.RevolutPay;

      sepa_debit?: PaymentMethodConfiguration.SepaDebit;

      sofort?: PaymentMethodConfiguration.Sofort;

      swish?: PaymentMethodConfiguration.Swish;

      twint?: PaymentMethodConfiguration.Twint;

      us_bank_account?: PaymentMethodConfiguration.UsBankAccount;

      wechat_pay?: PaymentMethodConfiguration.WechatPay;

      zip?: PaymentMethodConfiguration.Zip;
    }

    namespace PaymentMethodConfiguration {
      interface AcssDebit {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: AcssDebit.DisplayPreference;
      }

      namespace AcssDebit {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Affirm {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Affirm.DisplayPreference;
      }

      namespace Affirm {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface AfterpayClearpay {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: AfterpayClearpay.DisplayPreference;
      }

      namespace AfterpayClearpay {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Alipay {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Alipay.DisplayPreference;
      }

      namespace Alipay {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface AmazonPay {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: AmazonPay.DisplayPreference;
      }

      namespace AmazonPay {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface ApplePay {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: ApplePay.DisplayPreference;
      }

      namespace ApplePay {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface AuBecsDebit {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: AuBecsDebit.DisplayPreference;
      }

      namespace AuBecsDebit {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface BacsDebit {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: BacsDebit.DisplayPreference;
      }

      namespace BacsDebit {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Bancontact {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Bancontact.DisplayPreference;
      }

      namespace Bancontact {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Blik {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Blik.DisplayPreference;
      }

      namespace Blik {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Boleto {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Boleto.DisplayPreference;
      }

      namespace Boleto {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Card {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Card.DisplayPreference;
      }

      namespace Card {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface CartesBancaires {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: CartesBancaires.DisplayPreference;
      }

      namespace CartesBancaires {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Cashapp {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Cashapp.DisplayPreference;
      }

      namespace Cashapp {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface CustomerBalance {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: CustomerBalance.DisplayPreference;
      }

      namespace CustomerBalance {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Eps {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Eps.DisplayPreference;
      }

      namespace Eps {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Fpx {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Fpx.DisplayPreference;
      }

      namespace Fpx {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Giropay {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Giropay.DisplayPreference;
      }

      namespace Giropay {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface GooglePay {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: GooglePay.DisplayPreference;
      }

      namespace GooglePay {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Grabpay {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Grabpay.DisplayPreference;
      }

      namespace Grabpay {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Ideal {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Ideal.DisplayPreference;
      }

      namespace Ideal {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Jcb {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Jcb.DisplayPreference;
      }

      namespace Jcb {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Klarna {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Klarna.DisplayPreference;
      }

      namespace Klarna {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Konbini {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Konbini.DisplayPreference;
      }

      namespace Konbini {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Link {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Link.DisplayPreference;
      }

      namespace Link {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Mobilepay {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Mobilepay.DisplayPreference;
      }

      namespace Mobilepay {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Multibanco {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Multibanco.DisplayPreference;
      }

      namespace Multibanco {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Oxxo {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Oxxo.DisplayPreference;
      }

      namespace Oxxo {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface P24 {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: P24.DisplayPreference;
      }

      namespace P24 {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Paynow {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Paynow.DisplayPreference;
      }

      namespace Paynow {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Paypal {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Paypal.DisplayPreference;
      }

      namespace Paypal {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Promptpay {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Promptpay.DisplayPreference;
      }

      namespace Promptpay {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface RevolutPay {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: RevolutPay.DisplayPreference;
      }

      namespace RevolutPay {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface SepaDebit {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: SepaDebit.DisplayPreference;
      }

      namespace SepaDebit {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Sofort {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Sofort.DisplayPreference;
      }

      namespace Sofort {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Swish {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Swish.DisplayPreference;
      }

      namespace Swish {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Twint {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Twint.DisplayPreference;
      }

      namespace Twint {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface UsBankAccount {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: UsBankAccount.DisplayPreference;
      }

      namespace UsBankAccount {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface WechatPay {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: WechatPay.DisplayPreference;
      }

      namespace WechatPay {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }

      interface Zip {
        /**
         * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
         */
        available: boolean;

        display_preference: Zip.DisplayPreference;
      }

      namespace Zip {
        interface DisplayPreference {
          /**
           * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
           */
          overridable: boolean | null;

          /**
           * The account's display preference.
           */
          preference: DisplayPreference.Preference;

          /**
           * The effective display preference value.
           */
          value: DisplayPreference.Value;
        }

        namespace DisplayPreference {
          type Preference = 'none' | 'off' | 'on';

          type Value = 'off' | 'on';
        }
      }
    }
  }
}
