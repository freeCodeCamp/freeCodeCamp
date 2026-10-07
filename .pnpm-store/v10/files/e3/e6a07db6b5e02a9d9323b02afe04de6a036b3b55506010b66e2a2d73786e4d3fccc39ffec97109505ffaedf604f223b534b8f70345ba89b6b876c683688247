// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The `Charge` object represents a single attempt to move money into your Stripe account.
     * PaymentIntent confirmation is the most common way to create Charges, but transferring
     * money to a different Stripe account through Connect also creates Charges.
     * Some legacy payment flows create Charges directly, which is not recommended for new integrations.
     */
    interface Charge {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'charge';

      /**
       * Amount intended to be collected by this payment. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
       */
      amount: number;

      /**
       * Amount in cents (or local equivalent) captured (can be less than the amount attribute on the charge if a partial capture was made).
       */
      amount_captured: number;

      /**
       * Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the charge if a partial refund was issued).
       */
      amount_refunded: number;

      /**
       * ID of the Connect application that created the charge.
       */
      application: string | Stripe.Application | null;

      /**
       * The application fee (if any) for the charge. [See the Connect documentation](https://stripe.com/docs/connect/direct-charges#collect-fees) for details.
       */
      application_fee: string | Stripe.ApplicationFee | null;

      /**
       * The amount of the application fee (if any) requested for the charge. [See the Connect documentation](https://stripe.com/docs/connect/direct-charges#collect-fees) for details.
       */
      application_fee_amount: number | null;

      /**
       * Authorization code on the charge.
       */
      authorization_code?: string;

      /**
       * ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes).
       */
      balance_transaction: string | Stripe.BalanceTransaction | null;

      billing_details: Charge.BillingDetails;

      /**
       * The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. Allows you to see what the statement descriptor looks like after the static and dynamic portions are combined. This value only exists for card payments.
       */
      calculated_statement_descriptor: string | null;

      /**
       * If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured.
       */
      captured: boolean;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * ID of the customer this charge is for if one exists.
       */
      customer: string | Stripe.Customer | Stripe.DeletedCustomer | null;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description: string | null;

      /**
       * Whether the charge has been disputed.
       */
      disputed: boolean;

      /**
       * ID of the balance transaction that describes the reversal of the balance on your account due to payment failure.
       */
      failure_balance_transaction: string | Stripe.BalanceTransaction | null;

      /**
       * Error code explaining reason for charge failure if available (see [the errors section](https://stripe.com/docs/error-codes) for a list of codes).
       */
      failure_code: string | null;

      /**
       * Message to user further explaining reason for charge failure if available.
       */
      failure_message: string | null;

      /**
       * Information on fraud assessments for the charge.
       */
      fraud_details: Charge.FraudDetails | null;

      /**
       * ID of the invoice this charge is for if one exists.
       */
      invoice: string | Stripe.Invoice | null;

      level3?: Charge.Level3;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata;

      /**
       * The account (if any) the charge was made on behalf of without triggering an automatic transfer. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers) for details.
       */
      on_behalf_of: string | Stripe.Account | null;

      /**
       * Details about whether the payment was accepted, and why. See [understanding declines](https://stripe.com/docs/declines) for details.
       */
      outcome: Charge.Outcome | null;

      /**
       * `true` if the charge succeeded, or was successfully authorized for later capture.
       */
      paid: boolean;

      /**
       * ID of the PaymentIntent associated with this charge, if one exists.
       */
      payment_intent: string | Stripe.PaymentIntent | null;

      /**
       * ID of the payment method used in this charge.
       */
      payment_method: string | null;

      /**
       * Details about the payment method at the time of the transaction.
       */
      payment_method_details: Charge.PaymentMethodDetails | null;

      /**
       * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
       */
      radar_options?: Charge.RadarOptions;

      /**
       * This is the email address that the receipt for this charge was sent to.
       */
      receipt_email: string | null;

      /**
       * This is the transaction number that appears on email receipts sent for this charge. This attribute will be `null` until a receipt has been sent.
       */
      receipt_number: string | null;

      /**
       * This is the URL to view the receipt for this charge. The receipt is kept up-to-date to the latest state of the charge, including any refunds. If the charge is for an Invoice, the receipt will be stylized as an Invoice receipt.
       */
      receipt_url: string | null;

      /**
       * Whether the charge has been fully refunded. If the charge is only partially refunded, this attribute will still be false.
       */
      refunded: boolean;

      /**
       * A list of refunds that have been applied to the charge.
       */
      refunds?: ApiList<Stripe.Refund> | null;

      /**
       * ID of the review associated with this charge if one exists.
       */
      review: string | Stripe.Review | null;

      /**
       * Shipping information for the charge.
       */
      shipping: Charge.Shipping | null;

      /**
       * This is a legacy field that will be removed in the future. It contains the Source, Card, or BankAccount object used for the charge. For details about the payment method used for this charge, refer to `payment_method` or `payment_method_details` instead.
       */
      source: Stripe.CustomerSource | null;

      /**
       * The transfer ID which created this charge. Only present if the charge came from another Stripe account. [See the Connect documentation](https://docs.stripe.com/connect/destination-charges) for details.
       */
      source_transfer: string | Stripe.Transfer | null;

      /**
       * For a non-card charge, text that appears on the customer's statement as the statement descriptor. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
       *
       * For a card charge, this value is ignored unless you don't specify a `statement_descriptor_suffix`, in which case this value is used as the suffix.
       */
      statement_descriptor: string | null;

      /**
       * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement. If the account has no prefix value, the suffix is concatenated to the account's statement descriptor.
       */
      statement_descriptor_suffix: string | null;

      /**
       * The status of the payment is either `succeeded`, `pending`, or `failed`.
       */
      status: Charge.Status;

      /**
       * ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter).
       */
      transfer?: string | Stripe.Transfer;

      /**
       * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
       */
      transfer_data: Charge.TransferData | null;

      /**
       * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options) for details.
       */
      transfer_group: string | null;
    }

    namespace Charge {
      interface BillingDetails {
        /**
         * Billing address.
         */
        address: Stripe.Address | null;

        /**
         * Email address.
         */
        email: string | null;

        /**
         * Full name.
         */
        name: string | null;

        /**
         * Billing phone number (including extension).
         */
        phone: string | null;
      }

      interface FraudDetails {
        /**
         * Assessments from Stripe. If set, the value is `fraudulent`.
         */
        stripe_report?: string;

        /**
         * Assessments reported by you. If set, possible values of are `safe` and `fraudulent`.
         */
        user_report?: string;
      }

      interface Level3 {
        customer_reference?: string;

        line_items: Array<Level3.LineItem>;

        merchant_reference: string;

        shipping_address_zip?: string;

        shipping_amount?: number;

        shipping_from_zip?: string;
      }

      namespace Level3 {
        interface LineItem {
          discount_amount: number | null;

          product_code: string;

          product_description: string;

          quantity: number | null;

          tax_amount: number | null;

          unit_cost: number | null;
        }
      }

      interface Outcome {
        /**
         * Possible values are `approved_by_network`, `declined_by_network`, `not_sent_to_network`, and `reversed_after_approval`. The value `reversed_after_approval` indicates the payment was [blocked by Stripe](https://stripe.com/docs/declines#blocked-payments) after bank authorization, and may temporarily appear as "pending" on a cardholder's statement.
         */
        network_status: string | null;

        /**
         * An enumerated value providing a more detailed explanation of the outcome's `type`. Charges blocked by Radar's default block rule have the value `highest_risk_level`. Charges placed in review by Radar's default review rule have the value `elevated_risk_level`. Charges authorized, blocked, or placed in review by custom rules have the value `rule`. See [understanding declines](https://stripe.com/docs/declines) for more details.
         */
        reason: string | null;

        /**
         * Stripe Radar's evaluation of the riskiness of the payment. Possible values for evaluated payments are `normal`, `elevated`, `highest`. For non-card payments, and card-based payments predating the public assignment of risk levels, this field will have the value `not_assessed`. In the event of an error in the evaluation, this field will have the value `unknown`. This field is only available with Radar.
         */
        risk_level?: string;

        /**
         * Stripe Radar's evaluation of the riskiness of the payment. Possible values for evaluated payments are between 0 and 100. For non-card payments, card-based payments predating the public assignment of risk scores, or in the event of an error during evaluation, this field will not be present. This field is only available with Radar for Fraud Teams.
         */
        risk_score?: number;

        /**
         * The ID of the Radar rule that matched the payment, if applicable.
         */
        rule?: string | Outcome.Rule;

        /**
         * A human-readable description of the outcome type and reason, designed for you (the recipient of the payment), not your customer.
         */
        seller_message: string | null;

        /**
         * Possible values are `authorized`, `manual_review`, `issuer_declined`, `blocked`, and `invalid`. See [understanding declines](https://stripe.com/docs/declines) and [Radar reviews](https://stripe.com/docs/radar/reviews) for details.
         */
        type: string;
      }

      namespace Outcome {
        interface Rule {
          /**
           * The action taken on the payment.
           */
          action: string;

          /**
           * Unique identifier for the object.
           */
          id: string;

          /**
           * The predicate to evaluate the payment against.
           */
          predicate: string;
        }
      }

      interface PaymentMethodDetails {
        ach_credit_transfer?: PaymentMethodDetails.AchCreditTransfer;

        ach_debit?: PaymentMethodDetails.AchDebit;

        acss_debit?: PaymentMethodDetails.AcssDebit;

        affirm?: PaymentMethodDetails.Affirm;

        afterpay_clearpay?: PaymentMethodDetails.AfterpayClearpay;

        alipay?: PaymentMethodDetails.Alipay;

        amazon_pay?: PaymentMethodDetails.AmazonPay;

        au_becs_debit?: PaymentMethodDetails.AuBecsDebit;

        bacs_debit?: PaymentMethodDetails.BacsDebit;

        bancontact?: PaymentMethodDetails.Bancontact;

        blik?: PaymentMethodDetails.Blik;

        boleto?: PaymentMethodDetails.Boleto;

        card?: PaymentMethodDetails.Card;

        card_present?: PaymentMethodDetails.CardPresent;

        cashapp?: PaymentMethodDetails.Cashapp;

        customer_balance?: PaymentMethodDetails.CustomerBalance;

        eps?: PaymentMethodDetails.Eps;

        fpx?: PaymentMethodDetails.Fpx;

        giropay?: PaymentMethodDetails.Giropay;

        grabpay?: PaymentMethodDetails.Grabpay;

        ideal?: PaymentMethodDetails.Ideal;

        interac_present?: PaymentMethodDetails.InteracPresent;

        klarna?: PaymentMethodDetails.Klarna;

        konbini?: PaymentMethodDetails.Konbini;

        link?: PaymentMethodDetails.Link;

        mobilepay?: PaymentMethodDetails.Mobilepay;

        multibanco?: PaymentMethodDetails.Multibanco;

        oxxo?: PaymentMethodDetails.Oxxo;

        p24?: PaymentMethodDetails.P24;

        paynow?: PaymentMethodDetails.Paynow;

        paypal?: PaymentMethodDetails.Paypal;

        pix?: PaymentMethodDetails.Pix;

        promptpay?: PaymentMethodDetails.Promptpay;

        revolut_pay?: PaymentMethodDetails.RevolutPay;

        sepa_credit_transfer?: PaymentMethodDetails.SepaCreditTransfer;

        sepa_debit?: PaymentMethodDetails.SepaDebit;

        sofort?: PaymentMethodDetails.Sofort;

        stripe_account?: PaymentMethodDetails.StripeAccount;

        swish?: PaymentMethodDetails.Swish;

        twint?: PaymentMethodDetails.Twint;

        /**
         * The type of transaction-specific details of the payment method used in the payment, one of `ach_credit_transfer`, `ach_debit`, `acss_debit`, `alipay`, `au_becs_debit`, `bancontact`, `card`, `card_present`, `eps`, `giropay`, `ideal`, `klarna`, `multibanco`, `p24`, `sepa_debit`, `sofort`, `stripe_account`, or `wechat`.
         * An additional hash is included on `payment_method_details` with a name matching this value.
         * It contains information specific to the payment method.
         */
        type: string;

        us_bank_account?: PaymentMethodDetails.UsBankAccount;

        wechat?: PaymentMethodDetails.Wechat;

        wechat_pay?: PaymentMethodDetails.WechatPay;

        zip?: PaymentMethodDetails.Zip;
      }

      namespace PaymentMethodDetails {
        interface AchCreditTransfer {
          /**
           * Account number to transfer funds to.
           */
          account_number: string | null;

          /**
           * Name of the bank associated with the routing number.
           */
          bank_name: string | null;

          /**
           * Routing transit number for the bank account to transfer funds to.
           */
          routing_number: string | null;

          /**
           * SWIFT code of the bank associated with the routing number.
           */
          swift_code: string | null;
        }

        interface AchDebit {
          /**
           * Type of entity that holds the account. This can be either `individual` or `company`.
           */
          account_holder_type: AchDebit.AccountHolderType | null;

          /**
           * Name of the bank associated with the bank account.
           */
          bank_name: string | null;

          /**
           * Two-letter ISO code representing the country the bank account is located in.
           */
          country: string | null;

          /**
           * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
           */
          fingerprint: string | null;

          /**
           * Last four digits of the bank account number.
           */
          last4: string | null;

          /**
           * Routing transit number of the bank account.
           */
          routing_number: string | null;
        }

        namespace AchDebit {
          type AccountHolderType = 'company' | 'individual';
        }

        interface AcssDebit {
          /**
           * Name of the bank associated with the bank account.
           */
          bank_name: string | null;

          /**
           * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
           */
          fingerprint: string | null;

          /**
           * Institution number of the bank account
           */
          institution_number: string | null;

          /**
           * Last four digits of the bank account number.
           */
          last4: string | null;

          /**
           * ID of the mandate used to make this payment.
           */
          mandate?: string;

          /**
           * Transit number of the bank account.
           */
          transit_number: string | null;
        }

        interface Affirm {
          /**
           * The Affirm transaction ID associated with this payment.
           */
          transaction_id: string | null;
        }

        interface AfterpayClearpay {
          /**
           * The Afterpay order ID associated with this payment intent.
           */
          order_id: string | null;

          /**
           * Order identifier shown to the merchant in Afterpay's online portal.
           */
          reference: string | null;
        }

        interface Alipay {
          /**
           * Uniquely identifies this particular Alipay account. You can use this attribute to check whether two Alipay accounts are the same.
           */
          buyer_id?: string;

          /**
           * Uniquely identifies this particular Alipay account. You can use this attribute to check whether two Alipay accounts are the same.
           */
          fingerprint: string | null;

          /**
           * Transaction ID of this particular Alipay transaction.
           */
          transaction_id: string | null;
        }

        interface AmazonPay {}

        interface AuBecsDebit {
          /**
           * Bank-State-Branch number of the bank account.
           */
          bsb_number: string | null;

          /**
           * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
           */
          fingerprint: string | null;

          /**
           * Last four digits of the bank account number.
           */
          last4: string | null;

          /**
           * ID of the mandate used to make this payment.
           */
          mandate?: string;
        }

        interface BacsDebit {
          /**
           * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
           */
          fingerprint: string | null;

          /**
           * Last four digits of the bank account number.
           */
          last4: string | null;

          /**
           * ID of the mandate used to make this payment.
           */
          mandate: string | null;

          /**
           * Sort code of the bank account. (e.g., `10-20-30`)
           */
          sort_code: string | null;
        }

        interface Bancontact {
          /**
           * Bank code of bank associated with the bank account.
           */
          bank_code: string | null;

          /**
           * Name of the bank associated with the bank account.
           */
          bank_name: string | null;

          /**
           * Bank Identifier Code of the bank associated with the bank account.
           */
          bic: string | null;

          /**
           * The ID of the SEPA Direct Debit PaymentMethod which was generated by this Charge.
           */
          generated_sepa_debit: string | Stripe.PaymentMethod | null;

          /**
           * The mandate for the SEPA Direct Debit PaymentMethod which was generated by this Charge.
           */
          generated_sepa_debit_mandate: string | Stripe.Mandate | null;

          /**
           * Last four characters of the IBAN.
           */
          iban_last4: string | null;

          /**
           * Preferred language of the Bancontact authorization page that the customer is redirected to.
           * Can be one of `en`, `de`, `fr`, or `nl`
           */
          preferred_language: Bancontact.PreferredLanguage | null;

          /**
           * Owner's verified full name. Values are verified or provided by Bancontact directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          verified_name: string | null;
        }

        namespace Bancontact {
          type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';
        }

        interface Blik {
          /**
           * A unique and immutable identifier assigned by BLIK to every buyer.
           */
          buyer_id: string | null;
        }

        interface Boleto {
          /**
           * The tax ID of the customer (CPF for individuals consumers or CNPJ for businesses consumers)
           */
          tax_id: string;
        }

        interface Card {
          /**
           * The authorized amount.
           */
          amount_authorized: number | null;

          /**
           * Authorization code on the charge.
           */
          authorization_code: string | null;

          /**
           * Card brand. Can be `amex`, `diners`, `discover`, `eftpos_au`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
           */
          brand: string | null;

          /**
           * When using manual capture, a future timestamp at which the charge will be automatically refunded if uncaptured.
           */
          capture_before?: number;

          /**
           * Check results by Card networks on Card address and CVC at time of payment.
           */
          checks: Card.Checks | null;

          /**
           * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
           */
          country: string | null;

          /**
           * A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.)
           */
          description?: string | null;

          /**
           * Two-digit number representing the card's expiration month.
           */
          exp_month: number;

          /**
           * Four-digit number representing the card's expiration year.
           */
          exp_year: number;

          extended_authorization?: Card.ExtendedAuthorization;

          /**
           * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
           *
           * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
           */
          fingerprint?: string | null;

          /**
           * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
           */
          funding: string | null;

          /**
           * Issuer identification number of the card. (For internal use only and not typically available in standard API requests.)
           */
          iin?: string | null;

          incremental_authorization?: Card.IncrementalAuthorization;

          /**
           * Installment details for this payment (Mexico only).
           *
           * For more information, see the [installments integration guide](https://stripe.com/docs/payments/installments).
           */
          installments: Card.Installments | null;

          /**
           * The name of the card's issuing bank. (For internal use only and not typically available in standard API requests.)
           */
          issuer?: string | null;

          /**
           * The last four digits of the card.
           */
          last4: string | null;

          /**
           * ID of the mandate used to make this payment or created by it.
           */
          mandate: string | null;

          /**
           * True if this payment was marked as MOTO and out of scope for SCA.
           */
          moto?: boolean | null;

          multicapture?: Card.Multicapture;

          /**
           * Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
           */
          network: string | null;

          /**
           * If this card has network token credentials, this contains the details of the network token credentials.
           */
          network_token?: Card.NetworkToken | null;

          overcapture?: Card.Overcapture;

          /**
           * Populated if this transaction used 3D Secure authentication.
           */
          three_d_secure: Card.ThreeDSecure | null;

          /**
           * If this Card is part of a card wallet, this contains the details of the card wallet.
           */
          wallet: Card.Wallet | null;
        }

        namespace Card {
          interface Checks {
            /**
             * If a address line1 was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
             */
            address_line1_check: string | null;

            /**
             * If a address postal code was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
             */
            address_postal_code_check: string | null;

            /**
             * If a CVC was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
             */
            cvc_check: string | null;
          }

          interface ExtendedAuthorization {
            /**
             * Indicates whether or not the capture window is extended beyond the standard authorization.
             */
            status: ExtendedAuthorization.Status;
          }

          namespace ExtendedAuthorization {
            type Status = 'disabled' | 'enabled';
          }

          interface IncrementalAuthorization {
            /**
             * Indicates whether or not the incremental authorization feature is supported.
             */
            status: IncrementalAuthorization.Status;
          }

          namespace IncrementalAuthorization {
            type Status = 'available' | 'unavailable';
          }

          interface Installments {
            /**
             * Installment plan selected for the payment.
             */
            plan: Installments.Plan | null;
          }

          namespace Installments {
            interface Plan {
              /**
               * For `fixed_count` installment plans, this is the number of installment payments your customer will make to their credit card.
               */
              count: number | null;

              /**
               * For `fixed_count` installment plans, this is the interval between installment payments your customer will make to their credit card.
               * One of `month`.
               */
              interval: 'month' | null;

              /**
               * Type of installment plan, one of `fixed_count`.
               */
              type: 'fixed_count';
            }
          }

          interface Multicapture {
            /**
             * Indicates whether or not multiple captures are supported.
             */
            status: Multicapture.Status;
          }

          namespace Multicapture {
            type Status = 'available' | 'unavailable';
          }

          interface NetworkToken {
            /**
             * Indicates if Stripe used a network token, either user provided or Stripe managed when processing the transaction.
             */
            used: boolean;
          }

          interface Overcapture {
            /**
             * The maximum amount that can be captured.
             */
            maximum_amount_capturable: number;

            /**
             * Indicates whether or not the authorized amount can be over-captured.
             */
            status: Overcapture.Status;
          }

          namespace Overcapture {
            type Status = 'available' | 'unavailable';
          }

          interface ThreeDSecure {
            /**
             * For authenticated transactions: how the customer was authenticated by
             * the issuing bank.
             */
            authentication_flow: ThreeDSecure.AuthenticationFlow | null;

            /**
             * The Electronic Commerce Indicator (ECI). A protocol-level field
             * indicating what degree of authentication was performed.
             */
            electronic_commerce_indicator: ThreeDSecure.ElectronicCommerceIndicator | null;

            /**
             * The exemption requested via 3DS and accepted by the issuer at authentication time.
             */
            exemption_indicator: ThreeDSecure.ExemptionIndicator | null;

            /**
             * Whether Stripe requested the value of `exemption_indicator` in the transaction. This will depend on
             * the outcome of Stripe's internal risk assessment.
             */
            exemption_indicator_applied?: boolean;

            /**
             * Indicates the outcome of 3D Secure authentication.
             */
            result: ThreeDSecure.Result | null;

            /**
             * Additional information about why 3D Secure succeeded or failed based
             * on the `result`.
             */
            result_reason: ThreeDSecure.ResultReason | null;

            /**
             * The 3D Secure 1 XID or 3D Secure 2 Directory Server Transaction ID
             * (dsTransId) for this payment.
             */
            transaction_id: string | null;

            /**
             * The version of 3D Secure that was used.
             */
            version: ThreeDSecure.Version | null;
          }

          namespace ThreeDSecure {
            type AuthenticationFlow = 'challenge' | 'frictionless';

            type ElectronicCommerceIndicator = '01' | '02' | '05' | '06' | '07';

            type ExemptionIndicator = 'low_risk' | 'none';

            type Result =
              | 'attempt_acknowledged'
              | 'authenticated'
              | 'exempted'
              | 'failed'
              | 'not_supported'
              | 'processing_error';

            type ResultReason =
              | 'abandoned'
              | 'bypassed'
              | 'canceled'
              | 'card_not_enrolled'
              | 'network_not_supported'
              | 'protocol_error'
              | 'rejected';

            type Version = '1.0.2' | '2.1.0' | '2.2.0';
          }

          interface Wallet {
            amex_express_checkout?: Wallet.AmexExpressCheckout;

            apple_pay?: Wallet.ApplePay;

            /**
             * (For tokenized numbers only.) The last four digits of the device account number.
             */
            dynamic_last4: string | null;

            google_pay?: Wallet.GooglePay;

            link?: Wallet.Link;

            masterpass?: Wallet.Masterpass;

            samsung_pay?: Wallet.SamsungPay;

            /**
             * The type of the card wallet, one of `amex_express_checkout`, `apple_pay`, `google_pay`, `masterpass`, `samsung_pay`, `visa_checkout`, or `link`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
             */
            type: Wallet.Type;

            visa_checkout?: Wallet.VisaCheckout;
          }

          namespace Wallet {
            interface AmexExpressCheckout {}

            interface ApplePay {}

            interface GooglePay {}

            interface Link {}

            interface Masterpass {
              /**
               * Owner's verified billing address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
               */
              billing_address: Stripe.Address | null;

              /**
               * Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
               */
              email: string | null;

              /**
               * Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
               */
              name: string | null;

              /**
               * Owner's verified shipping address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
               */
              shipping_address: Stripe.Address | null;
            }

            interface SamsungPay {}

            type Type =
              | 'amex_express_checkout'
              | 'apple_pay'
              | 'google_pay'
              | 'link'
              | 'masterpass'
              | 'samsung_pay'
              | 'visa_checkout';

            interface VisaCheckout {
              /**
               * Owner's verified billing address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
               */
              billing_address: Stripe.Address | null;

              /**
               * Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
               */
              email: string | null;

              /**
               * Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
               */
              name: string | null;

              /**
               * Owner's verified shipping address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
               */
              shipping_address: Stripe.Address | null;
            }
          }
        }

        interface CardPresent {
          /**
           * The authorized amount
           */
          amount_authorized: number | null;

          /**
           * Card brand. Can be `amex`, `diners`, `discover`, `eftpos_au`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
           */
          brand: string | null;

          /**
           * The [product code](https://stripe.com/docs/card-product-codes) that identifies the specific program or product associated with a card.
           */
          brand_product: string | null;

          /**
           * When using manual capture, a future timestamp after which the charge will be automatically refunded if uncaptured.
           */
          capture_before?: number;

          /**
           * The cardholder name as read from the card, in [ISO 7813](https://en.wikipedia.org/wiki/ISO/IEC_7813) format. May include alphanumeric characters, special characters and first/last name separator (`/`). In some cases, the cardholder name may not be available depending on how the issuer has configured the card. Cardholder name is typically not available on swipe or contactless payments, such as those made with Apple Pay and Google Pay.
           */
          cardholder_name: string | null;

          /**
           * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
           */
          country: string | null;

          /**
           * A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.)
           */
          description?: string | null;

          /**
           * Authorization response cryptogram.
           */
          emv_auth_data: string | null;

          /**
           * Two-digit number representing the card's expiration month.
           */
          exp_month: number;

          /**
           * Four-digit number representing the card's expiration year.
           */
          exp_year: number;

          /**
           * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
           *
           * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
           */
          fingerprint: string | null;

          /**
           * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
           */
          funding: string | null;

          /**
           * ID of a card PaymentMethod generated from the card_present PaymentMethod that may be attached to a Customer for future transactions. Only present if it was possible to generate a card PaymentMethod.
           */
          generated_card: string | null;

          /**
           * Issuer identification number of the card. (For internal use only and not typically available in standard API requests.)
           */
          iin?: string | null;

          /**
           * Whether this [PaymentIntent](https://stripe.com/docs/api/payment_intents) is eligible for incremental authorizations. Request support using [request_incremental_authorization_support](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-payment_method_options-card_present-request_incremental_authorization_support).
           */
          incremental_authorization_supported: boolean;

          /**
           * The name of the card's issuing bank. (For internal use only and not typically available in standard API requests.)
           */
          issuer?: string | null;

          /**
           * The last four digits of the card.
           */
          last4: string | null;

          /**
           * Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
           */
          network: string | null;

          /**
           * This is used by the financial networks to identify a transaction. Visa calls this the Transaction ID, Mastercard calls this the Trace ID, and American Express calls this the Acquirer Reference Data. The first three digits of the Trace ID is the Financial Network Code, the next 6 digits is the Banknet Reference Number, and the last 4 digits represent the date (MM/DD). This field will be available for successful Visa, Mastercard, or American Express transactions and always null for other card brands.
           */
          network_transaction_id: string | null;

          /**
           * Details about payments collected offline.
           */
          offline: CardPresent.Offline | null;

          /**
           * Defines whether the authorized amount can be over-captured or not
           */
          overcapture_supported: boolean;

          /**
           * EMV tag 5F2D. Preferred languages specified by the integrated circuit chip.
           */
          preferred_locales: Array<string> | null;

          /**
           * How card details were read in this transaction.
           */
          read_method: CardPresent.ReadMethod | null;

          /**
           * A collection of fields required to be displayed on receipts. Only required for EMV transactions.
           */
          receipt: CardPresent.Receipt | null;

          wallet?: CardPresent.Wallet;
        }

        namespace CardPresent {
          interface Offline {
            /**
             * Time at which the payment was collected while offline
             */
            stored_at: number | null;

            /**
             * The method used to process this payment method offline. Only deferred is allowed.
             */
            type: 'deferred' | null;
          }

          type ReadMethod =
            | 'contact_emv'
            | 'contactless_emv'
            | 'contactless_magstripe_mode'
            | 'magnetic_stripe_fallback'
            | 'magnetic_stripe_track2';

          interface Receipt {
            /**
             * The type of account being debited or credited
             */
            account_type?: Receipt.AccountType;

            /**
             * EMV tag 9F26, cryptogram generated by the integrated circuit chip.
             */
            application_cryptogram: string | null;

            /**
             * Mnenomic of the Application Identifier.
             */
            application_preferred_name: string | null;

            /**
             * Identifier for this transaction.
             */
            authorization_code: string | null;

            /**
             * EMV tag 8A. A code returned by the card issuer.
             */
            authorization_response_code: string | null;

            /**
             * Describes the method used by the cardholder to verify ownership of the card. One of the following: `approval`, `failure`, `none`, `offline_pin`, `offline_pin_and_signature`, `online_pin`, or `signature`.
             */
            cardholder_verification_method: string | null;

            /**
             * EMV tag 84. Similar to the application identifier stored on the integrated circuit chip.
             */
            dedicated_file_name: string | null;

            /**
             * The outcome of a series of EMV functions performed by the card reader.
             */
            terminal_verification_results: string | null;

            /**
             * An indication of various EMV functions performed during the transaction.
             */
            transaction_status_information: string | null;
          }

          namespace Receipt {
            type AccountType = 'checking' | 'credit' | 'prepaid' | 'unknown';
          }

          interface Wallet {
            /**
             * The type of mobile wallet, one of `apple_pay`, `google_pay`, `samsung_pay`, or `unknown`.
             */
            type: Wallet.Type;
          }

          namespace Wallet {
            type Type = 'apple_pay' | 'google_pay' | 'samsung_pay' | 'unknown';
          }
        }

        interface Cashapp {
          /**
           * A unique and immutable identifier assigned by Cash App to every buyer.
           */
          buyer_id: string | null;

          /**
           * A public identifier for buyers using Cash App.
           */
          cashtag: string | null;
        }

        interface CustomerBalance {}

        interface Eps {
          /**
           * The customer's bank. Should be one of `arzte_und_apotheker_bank`, `austrian_anadi_bank_ag`, `bank_austria`, `bankhaus_carl_spangler`, `bankhaus_schelhammer_und_schattera_ag`, `bawag_psk_ag`, `bks_bank_ag`, `brull_kallmus_bank_ag`, `btv_vier_lander_bank`, `capital_bank_grawe_gruppe_ag`, `deutsche_bank_ag`, `dolomitenbank`, `easybank_ag`, `erste_bank_und_sparkassen`, `hypo_alpeadriabank_international_ag`, `hypo_noe_lb_fur_niederosterreich_u_wien`, `hypo_oberosterreich_salzburg_steiermark`, `hypo_tirol_bank_ag`, `hypo_vorarlberg_bank_ag`, `hypo_bank_burgenland_aktiengesellschaft`, `marchfelder_bank`, `oberbank_ag`, `raiffeisen_bankengruppe_osterreich`, `schoellerbank_ag`, `sparda_bank_wien`, `volksbank_gruppe`, `volkskreditbank_ag`, or `vr_bank_braunau`.
           */
          bank: Eps.Bank | null;

          /**
           * Owner's verified full name. Values are verified or provided by EPS directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           * EPS rarely provides this information so the attribute is usually empty.
           */
          verified_name: string | null;
        }

        namespace Eps {
          type Bank =
            | 'arzte_und_apotheker_bank'
            | 'austrian_anadi_bank_ag'
            | 'bank_austria'
            | 'bankhaus_carl_spangler'
            | 'bankhaus_schelhammer_und_schattera_ag'
            | 'bawag_psk_ag'
            | 'bks_bank_ag'
            | 'brull_kallmus_bank_ag'
            | 'btv_vier_lander_bank'
            | 'capital_bank_grawe_gruppe_ag'
            | 'deutsche_bank_ag'
            | 'dolomitenbank'
            | 'easybank_ag'
            | 'erste_bank_und_sparkassen'
            | 'hypo_alpeadriabank_international_ag'
            | 'hypo_bank_burgenland_aktiengesellschaft'
            | 'hypo_noe_lb_fur_niederosterreich_u_wien'
            | 'hypo_oberosterreich_salzburg_steiermark'
            | 'hypo_tirol_bank_ag'
            | 'hypo_vorarlberg_bank_ag'
            | 'marchfelder_bank'
            | 'oberbank_ag'
            | 'raiffeisen_bankengruppe_osterreich'
            | 'schoellerbank_ag'
            | 'sparda_bank_wien'
            | 'volksbank_gruppe'
            | 'volkskreditbank_ag'
            | 'vr_bank_braunau';
        }

        interface Fpx {
          /**
           * Account holder type, if provided. Can be one of `individual` or `company`.
           */
          account_holder_type: Fpx.AccountHolderType | null;

          /**
           * The customer's bank. Can be one of `affin_bank`, `agrobank`, `alliance_bank`, `ambank`, `bank_islam`, `bank_muamalat`, `bank_rakyat`, `bsn`, `cimb`, `hong_leong_bank`, `hsbc`, `kfh`, `maybank2u`, `ocbc`, `public_bank`, `rhb`, `standard_chartered`, `uob`, `deutsche_bank`, `maybank2e`, `pb_enterprise`, or `bank_of_china`.
           */
          bank: Fpx.Bank;

          /**
           * Unique transaction id generated by FPX for every request from the merchant
           */
          transaction_id: string | null;
        }

        namespace Fpx {
          type AccountHolderType = 'company' | 'individual';

          type Bank =
            | 'affin_bank'
            | 'agrobank'
            | 'alliance_bank'
            | 'ambank'
            | 'bank_islam'
            | 'bank_muamalat'
            | 'bank_of_china'
            | 'bank_rakyat'
            | 'bsn'
            | 'cimb'
            | 'deutsche_bank'
            | 'hong_leong_bank'
            | 'hsbc'
            | 'kfh'
            | 'maybank2e'
            | 'maybank2u'
            | 'ocbc'
            | 'pb_enterprise'
            | 'public_bank'
            | 'rhb'
            | 'standard_chartered'
            | 'uob';
        }

        interface Giropay {
          /**
           * Bank code of bank associated with the bank account.
           */
          bank_code: string | null;

          /**
           * Name of the bank associated with the bank account.
           */
          bank_name: string | null;

          /**
           * Bank Identifier Code of the bank associated with the bank account.
           */
          bic: string | null;

          /**
           * Owner's verified full name. Values are verified or provided by Giropay directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           * Giropay rarely provides this information so the attribute is usually empty.
           */
          verified_name: string | null;
        }

        interface Grabpay {
          /**
           * Unique transaction id generated by GrabPay
           */
          transaction_id: string | null;
        }

        interface Ideal {
          /**
           * The customer's bank. Can be one of `abn_amro`, `asn_bank`, `bunq`, `handelsbanken`, `ing`, `knab`, `moneyou`, `n26`, `nn`, `rabobank`, `regiobank`, `revolut`, `sns_bank`, `triodos_bank`, `van_lanschot`, or `yoursafe`.
           */
          bank: Ideal.Bank | null;

          /**
           * The Bank Identifier Code of the customer's bank.
           */
          bic: Ideal.Bic | null;

          /**
           * The ID of the SEPA Direct Debit PaymentMethod which was generated by this Charge.
           */
          generated_sepa_debit: string | Stripe.PaymentMethod | null;

          /**
           * The mandate for the SEPA Direct Debit PaymentMethod which was generated by this Charge.
           */
          generated_sepa_debit_mandate: string | Stripe.Mandate | null;

          /**
           * Last four characters of the IBAN.
           */
          iban_last4: string | null;

          /**
           * Owner's verified full name. Values are verified or provided by iDEAL directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          verified_name: string | null;
        }

        namespace Ideal {
          type Bank =
            | 'abn_amro'
            | 'asn_bank'
            | 'bunq'
            | 'handelsbanken'
            | 'ing'
            | 'knab'
            | 'moneyou'
            | 'n26'
            | 'nn'
            | 'rabobank'
            | 'regiobank'
            | 'revolut'
            | 'sns_bank'
            | 'triodos_bank'
            | 'van_lanschot'
            | 'yoursafe';

          type Bic =
            | 'ABNANL2A'
            | 'ASNBNL21'
            | 'BITSNL2A'
            | 'BUNQNL2A'
            | 'FVLBNL22'
            | 'HANDNL2A'
            | 'INGBNL2A'
            | 'KNABNL2H'
            | 'MOYONL21'
            | 'NNBANL2G'
            | 'NTSBDEB1'
            | 'RABONL2U'
            | 'RBRBNL21'
            | 'REVOIE23'
            | 'REVOLT21'
            | 'SNSBNL2A'
            | 'TRIONL2U';
        }

        interface InteracPresent {
          /**
           * Card brand. Can be `interac`, `mastercard` or `visa`.
           */
          brand: string | null;

          /**
           * The cardholder name as read from the card, in [ISO 7813](https://en.wikipedia.org/wiki/ISO/IEC_7813) format. May include alphanumeric characters, special characters and first/last name separator (`/`). In some cases, the cardholder name may not be available depending on how the issuer has configured the card. Cardholder name is typically not available on swipe or contactless payments, such as those made with Apple Pay and Google Pay.
           */
          cardholder_name: string | null;

          /**
           * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
           */
          country: string | null;

          /**
           * A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.)
           */
          description?: string | null;

          /**
           * Authorization response cryptogram.
           */
          emv_auth_data: string | null;

          /**
           * Two-digit number representing the card's expiration month.
           */
          exp_month: number;

          /**
           * Four-digit number representing the card's expiration year.
           */
          exp_year: number;

          /**
           * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
           *
           * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
           */
          fingerprint: string | null;

          /**
           * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
           */
          funding: string | null;

          /**
           * ID of a card PaymentMethod generated from the card_present PaymentMethod that may be attached to a Customer for future transactions. Only present if it was possible to generate a card PaymentMethod.
           */
          generated_card: string | null;

          /**
           * Issuer identification number of the card. (For internal use only and not typically available in standard API requests.)
           */
          iin?: string | null;

          /**
           * The name of the card's issuing bank. (For internal use only and not typically available in standard API requests.)
           */
          issuer?: string | null;

          /**
           * The last four digits of the card.
           */
          last4: string | null;

          /**
           * Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
           */
          network: string | null;

          /**
           * This is used by the financial networks to identify a transaction. Visa calls this the Transaction ID, Mastercard calls this the Trace ID, and American Express calls this the Acquirer Reference Data. The first three digits of the Trace ID is the Financial Network Code, the next 6 digits is the Banknet Reference Number, and the last 4 digits represent the date (MM/DD). This field will be available for successful Visa, Mastercard, or American Express transactions and always null for other card brands.
           */
          network_transaction_id: string | null;

          /**
           * EMV tag 5F2D. Preferred languages specified by the integrated circuit chip.
           */
          preferred_locales: Array<string> | null;

          /**
           * How card details were read in this transaction.
           */
          read_method: InteracPresent.ReadMethod | null;

          /**
           * A collection of fields required to be displayed on receipts. Only required for EMV transactions.
           */
          receipt: InteracPresent.Receipt | null;
        }

        namespace InteracPresent {
          type ReadMethod =
            | 'contact_emv'
            | 'contactless_emv'
            | 'contactless_magstripe_mode'
            | 'magnetic_stripe_fallback'
            | 'magnetic_stripe_track2';

          interface Receipt {
            /**
             * The type of account being debited or credited
             */
            account_type?: Receipt.AccountType;

            /**
             * EMV tag 9F26, cryptogram generated by the integrated circuit chip.
             */
            application_cryptogram: string | null;

            /**
             * Mnenomic of the Application Identifier.
             */
            application_preferred_name: string | null;

            /**
             * Identifier for this transaction.
             */
            authorization_code: string | null;

            /**
             * EMV tag 8A. A code returned by the card issuer.
             */
            authorization_response_code: string | null;

            /**
             * Describes the method used by the cardholder to verify ownership of the card. One of the following: `approval`, `failure`, `none`, `offline_pin`, `offline_pin_and_signature`, `online_pin`, or `signature`.
             */
            cardholder_verification_method: string | null;

            /**
             * EMV tag 84. Similar to the application identifier stored on the integrated circuit chip.
             */
            dedicated_file_name: string | null;

            /**
             * The outcome of a series of EMV functions performed by the card reader.
             */
            terminal_verification_results: string | null;

            /**
             * An indication of various EMV functions performed during the transaction.
             */
            transaction_status_information: string | null;
          }

          namespace Receipt {
            type AccountType = 'checking' | 'savings' | 'unknown';
          }
        }

        interface Klarna {
          /**
           * The payer details for this transaction.
           */
          payer_details: Klarna.PayerDetails | null;

          /**
           * The Klarna payment method used for this transaction.
           * Can be one of `pay_later`, `pay_now`, `pay_with_financing`, or `pay_in_installments`
           */
          payment_method_category: string | null;

          /**
           * Preferred language of the Klarna authorization page that the customer is redirected to.
           * Can be one of `de-AT`, `en-AT`, `nl-BE`, `fr-BE`, `en-BE`, `de-DE`, `en-DE`, `da-DK`, `en-DK`, `es-ES`, `en-ES`, `fi-FI`, `sv-FI`, `en-FI`, `en-GB`, `en-IE`, `it-IT`, `en-IT`, `nl-NL`, `en-NL`, `nb-NO`, `en-NO`, `sv-SE`, `en-SE`, `en-US`, `es-US`, `fr-FR`, `en-FR`, `cs-CZ`, `en-CZ`, `ro-RO`, `en-RO`, `el-GR`, `en-GR`, `en-AU`, `en-NZ`, `en-CA`, `fr-CA`, `pl-PL`, `en-PL`, `pt-PT`, `en-PT`, `de-CH`, `fr-CH`, `it-CH`, or `en-CH`
           */
          preferred_locale: string | null;
        }

        namespace Klarna {
          interface PayerDetails {
            /**
             * The payer's address
             */
            address: PayerDetails.Address | null;
          }

          namespace PayerDetails {
            interface Address {
              /**
               * The payer address country
               */
              country: string | null;
            }
          }
        }

        interface Konbini {
          /**
           * If the payment succeeded, this contains the details of the convenience store where the payment was completed.
           */
          store: Konbini.Store | null;
        }

        namespace Konbini {
          interface Store {
            /**
             * The name of the convenience store chain where the payment was completed.
             */
            chain: Store.Chain | null;
          }

          namespace Store {
            type Chain = 'familymart' | 'lawson' | 'ministop' | 'seicomart';
          }
        }

        interface Link {
          /**
           * Two-letter ISO code representing the funding source country beneath the Link payment.
           * You could use this attribute to get a sense of international fees.
           */
          country: string | null;
        }

        interface Mobilepay {
          /**
           * Internal card details
           */
          card: Mobilepay.Card | null;
        }

        namespace Mobilepay {
          interface Card {
            /**
             * Brand of the card used in the transaction
             */
            brand: string | null;

            /**
             * Two-letter ISO code representing the country of the card
             */
            country: string | null;

            /**
             * Two digit number representing the card's expiration month
             */
            exp_month: number | null;

            /**
             * Two digit number representing the card's expiration year
             */
            exp_year: number | null;

            /**
             * The last 4 digits of the card
             */
            last4: string | null;
          }
        }

        interface Multibanco {
          /**
           * Entity number associated with this Multibanco payment.
           */
          entity: string | null;

          /**
           * Reference number associated with this Multibanco payment.
           */
          reference: string | null;
        }

        interface Oxxo {
          /**
           * OXXO reference number
           */
          number: string | null;
        }

        interface P24 {
          /**
           * The customer's bank. Can be one of `ing`, `citi_handlowy`, `tmobile_usbugi_bankowe`, `plus_bank`, `etransfer_pocztowy24`, `banki_spbdzielcze`, `bank_nowy_bfg_sa`, `getin_bank`, `velobank`, `blik`, `noble_pay`, `ideabank`, `envelobank`, `santander_przelew24`, `nest_przelew`, `mbank_mtransfer`, `inteligo`, `pbac_z_ipko`, `bnp_paribas`, `credit_agricole`, `toyota_bank`, `bank_pekao_sa`, `volkswagen_bank`, `bank_millennium`, `alior_bank`, or `boz`.
           */
          bank: P24.Bank | null;

          /**
           * Unique reference for this Przelewy24 payment.
           */
          reference: string | null;

          /**
           * Owner's verified full name. Values are verified or provided by Przelewy24 directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           * Przelewy24 rarely provides this information so the attribute is usually empty.
           */
          verified_name: string | null;
        }

        namespace P24 {
          type Bank =
            | 'alior_bank'
            | 'bank_millennium'
            | 'bank_nowy_bfg_sa'
            | 'bank_pekao_sa'
            | 'banki_spbdzielcze'
            | 'blik'
            | 'bnp_paribas'
            | 'boz'
            | 'citi_handlowy'
            | 'credit_agricole'
            | 'envelobank'
            | 'etransfer_pocztowy24'
            | 'getin_bank'
            | 'ideabank'
            | 'ing'
            | 'inteligo'
            | 'mbank_mtransfer'
            | 'nest_przelew'
            | 'noble_pay'
            | 'pbac_z_ipko'
            | 'plus_bank'
            | 'santander_przelew24'
            | 'tmobile_usbugi_bankowe'
            | 'toyota_bank'
            | 'velobank'
            | 'volkswagen_bank';
        }

        interface Paynow {
          /**
           * Reference number associated with this PayNow payment
           */
          reference: string | null;
        }

        interface Paypal {
          /**
           * Owner's email. Values are provided by PayPal directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          payer_email: string | null;

          /**
           * PayPal account PayerID. This identifier uniquely identifies the PayPal customer.
           */
          payer_id: string | null;

          /**
           * Owner's full name. Values provided by PayPal directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          payer_name: string | null;

          /**
           * The level of protection offered as defined by PayPal Seller Protection for Merchants, for this transaction.
           */
          seller_protection: Paypal.SellerProtection | null;

          /**
           * A unique ID generated by PayPal for this transaction.
           */
          transaction_id: string | null;
        }

        namespace Paypal {
          interface SellerProtection {
            /**
             * An array of conditions that are covered for the transaction, if applicable.
             */
            dispute_categories: Array<SellerProtection.DisputeCategory> | null;

            /**
             * Indicates whether the transaction is eligible for PayPal's seller protection.
             */
            status: SellerProtection.Status;
          }

          namespace SellerProtection {
            type DisputeCategory = 'fraudulent' | 'product_not_received';

            type Status = 'eligible' | 'not_eligible' | 'partially_eligible';
          }
        }

        interface Pix {
          /**
           * Unique transaction id generated by BCB
           */
          bank_transaction_id?: string | null;
        }

        interface Promptpay {
          /**
           * Bill reference generated by PromptPay
           */
          reference: string | null;
        }

        interface RevolutPay {}

        interface SepaCreditTransfer {
          /**
           * Name of the bank associated with the bank account.
           */
          bank_name: string | null;

          /**
           * Bank Identifier Code of the bank associated with the bank account.
           */
          bic: string | null;

          /**
           * IBAN of the bank account to transfer funds to.
           */
          iban: string | null;
        }

        interface SepaDebit {
          /**
           * Bank code of bank associated with the bank account.
           */
          bank_code: string | null;

          /**
           * Branch code of bank associated with the bank account.
           */
          branch_code: string | null;

          /**
           * Two-letter ISO code representing the country the bank account is located in.
           */
          country: string | null;

          /**
           * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
           */
          fingerprint: string | null;

          /**
           * Last four characters of the IBAN.
           */
          last4: string | null;

          /**
           * Find the ID of the mandate used for this payment under the [payment_method_details.sepa_debit.mandate](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details-sepa_debit-mandate) property on the Charge. Use this mandate ID to [retrieve the Mandate](https://stripe.com/docs/api/mandates/retrieve).
           */
          mandate: string | null;
        }

        interface Sofort {
          /**
           * Bank code of bank associated with the bank account.
           */
          bank_code: string | null;

          /**
           * Name of the bank associated with the bank account.
           */
          bank_name: string | null;

          /**
           * Bank Identifier Code of the bank associated with the bank account.
           */
          bic: string | null;

          /**
           * Two-letter ISO code representing the country the bank account is located in.
           */
          country: string | null;

          /**
           * The ID of the SEPA Direct Debit PaymentMethod which was generated by this Charge.
           */
          generated_sepa_debit: string | Stripe.PaymentMethod | null;

          /**
           * The mandate for the SEPA Direct Debit PaymentMethod which was generated by this Charge.
           */
          generated_sepa_debit_mandate: string | Stripe.Mandate | null;

          /**
           * Last four characters of the IBAN.
           */
          iban_last4: string | null;

          /**
           * Preferred language of the SOFORT authorization page that the customer is redirected to.
           * Can be one of `de`, `en`, `es`, `fr`, `it`, `nl`, or `pl`
           */
          preferred_language: Sofort.PreferredLanguage | null;

          /**
           * Owner's verified full name. Values are verified or provided by SOFORT directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          verified_name: string | null;
        }

        namespace Sofort {
          type PreferredLanguage =
            | 'de'
            | 'en'
            | 'es'
            | 'fr'
            | 'it'
            | 'nl'
            | 'pl';
        }

        interface StripeAccount {}

        interface Swish {
          /**
           * Uniquely identifies the payer's Swish account. You can use this attribute to check whether two Swish transactions were paid for by the same payer
           */
          fingerprint: string | null;

          /**
           * Payer bank reference number for the payment
           */
          payment_reference: string | null;

          /**
           * The last four digits of the Swish account phone number
           */
          verified_phone_last4: string | null;
        }

        interface Twint {}

        interface UsBankAccount {
          /**
           * Account holder type: individual or company.
           */
          account_holder_type: UsBankAccount.AccountHolderType | null;

          /**
           * Account type: checkings or savings. Defaults to checking if omitted.
           */
          account_type: UsBankAccount.AccountType | null;

          /**
           * Name of the bank associated with the bank account.
           */
          bank_name: string | null;

          /**
           * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
           */
          fingerprint: string | null;

          /**
           * Last four digits of the bank account number.
           */
          last4: string | null;

          /**
           * ID of the mandate used to make this payment.
           */
          mandate?: string | Stripe.Mandate;

          /**
           * Reference number to locate ACH payments with customer's bank.
           */
          payment_reference: string | null;

          /**
           * Routing number of the bank account.
           */
          routing_number: string | null;
        }

        namespace UsBankAccount {
          type AccountHolderType = 'company' | 'individual';

          type AccountType = 'checking' | 'savings';
        }

        interface Wechat {}

        interface WechatPay {
          /**
           * Uniquely identifies this particular WeChat Pay account. You can use this attribute to check whether two WeChat accounts are the same.
           */
          fingerprint: string | null;

          /**
           * Transaction ID of this particular WeChat Pay transaction.
           */
          transaction_id: string | null;
        }

        interface Zip {}
      }

      interface RadarOptions {
        /**
         * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
         */
        session?: string;
      }

      interface Shipping {
        address?: Stripe.Address;

        /**
         * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
         */
        carrier?: string | null;

        /**
         * Recipient name.
         */
        name?: string;

        /**
         * Recipient phone (including extension).
         */
        phone?: string | null;

        /**
         * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
         */
        tracking_number?: string | null;
      }

      type Status = 'failed' | 'pending' | 'succeeded';

      interface TransferData {
        /**
         * The amount transferred to the destination account, if specified. By default, the entire charge amount is transferred to the destination account.
         */
        amount: number | null;

        /**
         * ID of an existing, connected Stripe account to transfer funds to if `transfer_data` was specified in the charge request.
         */
        destination: string | Stripe.Account;
      }
    }
  }
}
