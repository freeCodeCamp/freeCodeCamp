import {StripeElement, StripeElements} from '../stripe-js';
import {Metadata, MetadataParam, Address} from './shared';

/**
 * The PaymentMethod object.
 */
export interface PaymentMethod {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'payment_method';

  billing_details: PaymentMethod.BillingDetails;

  card?: PaymentMethod.Card;

  card_present?: PaymentMethod.CardPresent;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * The ID of the Customer to which this PaymentMethod is saved. This will not be set when the PaymentMethod has not been saved to a Customer.
   */
  customer: string | null;

  eps?: PaymentMethod.Eps;

  fpx?: PaymentMethod.Fpx;

  grabpay?: PaymentMethod.GrabPay;

  ideal?: PaymentMethod.Ideal;

  p24?: PaymentMethod.P24;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata;

  sepa_debit?: PaymentMethod.SepaDebit;

  /**
   * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
   */
  type: string;

  affirm?: PaymentMethod.Affirm;

  afterpay_clearpay?: PaymentMethod.AfterpayClearpay;

  acss_debit?: PaymentMethod.AcssDebit;

  au_becs_debit?: PaymentMethod.AuBecsDebit;

  us_bank_account?: PaymentMethod.UsBankAccount;
}

export namespace PaymentMethod {
  export interface AuBecsDebit {
    /**
     * Bank State Branch
     */
    bsb_number: string | null;

    /**
     * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
     */
    fingerprint: string | null;

    /**
     * Last four characters of the account number.
     */
    last4: string | null;
  }

  export interface BillingDetails {
    /**
     * Billing address.
     */
    address: Address | null;

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

  export interface Card {
    /**
     * Card brand. Can be `amex`, `diners`, `discover`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
     */
    brand: string;

    /**
     * Checks on Card address and CVC if provided.
     */
    checks: Card.Checks | null;

    /**
     * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
     */
    country: string | null;

    /**
     * Two-digit number representing the card's expiration month.
     */
    exp_month: number;

    /**
     * Four-digit number representing the card's expiration year.
     */
    exp_year: number;

    /**
     * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number.
     */
    fingerprint?: string | null;

    /**
     * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
     */
    funding: string;

    /**
     * The last four digits of the card.
     */
    last4: string;

    /**
     * Contains details on how this Card maybe be used for 3D Secure authentication.
     */
    three_d_secure_usage: Card.ThreeDSecureUsage | null;

    /**
     * If this Card is part of a card wallet, this contains the details of the card wallet.
     */
    wallet: null | {[k: string]: any};
  }

  export namespace Card {
    export interface Checks {
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

    export interface ThreeDSecureUsage {
      /**
       * Whether 3D Secure is supported on this card.
       */
      supported: boolean;
    }
  }

  export interface CardPresent {}

  export interface Eps {
    /**
     * The customer's bank.
     */
    bank: string;
  }

  export interface Fpx {
    /**
     * The customer's bank.
     */
    bank: string;
  }

  export interface GrabPay {}

  export interface Ideal {
    /**
     * The customer's bank, if provided.
     */
    bank: string | null;

    /**
     * The Bank Identifier Code of the customer's bank, if the bank was provided.
     */
    bic: string | null;
  }

  export interface P24 {
    /**
     * The customer's bank.
     */
    bank: string;
  }

  export interface SepaDebit {
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
  }

  export interface Affirm {}

  export interface AfterpayClearpay {}

  export interface AcssDebit {
    /**
     * Customer’s bank account number.
     */
    account_number: string;

    /**
     * Institution number of the customer’s bank.
     */
    institution_number: string;

    /**
     * Transit number of the customer’s bank.
     */
    transit_number: string;
  }

  export interface UsBankAccount {
    /**
     * Customer’s bank account number.
     */
    account_number: string;

    /**
     * The routing transit number for the bank account.
     */
    routing_number: string;

    /**
     * The type of entity that holds the account. This can be either `individual` or `company`.
     */
    account_holder_type: string;

    /**
     * Account type: checkings or savings. Defaults to checking if omitted.
     */
    account_type: string;

    /**
     * The name of the bank.
     */
    bank_name: string;

    /**
     * The ID of the Financial Connections Account used to create the payment method.
     */
    financial_connections_account: string;

    /**
     * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
     */
    fingerprint: string;

    /**
     * Last four digits of the bank account number.
     */
    last4: string;

    /**
     * Contains information about US bank account networks that can be used.
     */
    networks: {
      /**
       * The preferred network.
       */
      preferred: string;

      /**
       * All supported networks.
       */
      supported: string[];
    };
  }
}

export interface PaymentMethodCreateParams {
  /**
   * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
   */
  billing_details?: PaymentMethodCreateParams.BillingDetails;

  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: MetadataParam;

  /**
   * The PaymentMethod to share.
   */
  payment_method?: string;

  /**
   * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type. Required unless `payment_method` is specified (see the [Cloning PaymentMethods](https://stripe.com/docs/payments/payment-methods/connect#cloning-payment-methods) guide)
   */
  type?: string;
}

export interface CreatePaymentMethodFromElements {
  /**
   * The Elements instance
   *
   * @docs https://stripe.com/docs/js/elements_object
   */
  elements: StripeElements;

  /**
   * Parameters that will be passed on to the PaymentMethod API
   *
   * @docs https://stripe.com/docs/api/payment_methods/create
   */
  params?: PaymentMethodCreateParams;

  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: MetadataParam;
}
export interface CreatePaymentMethodFromElement {
  /**
   * The specific Element used to collect payment details
   *
   * @docs https://stripe.com/docs/js/element
   */
  element: StripeElement;

  /**
   * Parameters that will be passed on to the PaymentMethod API
   *
   * @docs https://stripe.com/docs/api/payment_methods/create
   */
  params?: PaymentMethodCreateParams;

  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: MetadataParam;
}

export namespace PaymentMethodCreateParams {
  export interface BillingDetails {
    /**
     * Billing address.
     */
    address?: BillingDetails.Address;

    /**
     * Email address.
     */
    email?: string;

    /**
     * Full name.
     */
    name?: string;

    /**
     * Billing phone number (including extension).
     */
    phone?: string;
  }

  export namespace BillingDetails {
    export interface Address {
      /**
       * City, district, suburb, town, or village.
       */
      city?: string;

      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country?: string;

      /**
       * Address line 1 (e.g., street, PO Box, or company name).
       */
      line1?: string;

      /**
       * Address line 2 (e.g., apartment, suite, unit, or building).
       */
      line2?: string;

      /**
       * ZIP or postal code.
       */
      postal_code?: string;

      /**
       * State, county, province, or region.
       */
      state?: string;
    }
  }
}
