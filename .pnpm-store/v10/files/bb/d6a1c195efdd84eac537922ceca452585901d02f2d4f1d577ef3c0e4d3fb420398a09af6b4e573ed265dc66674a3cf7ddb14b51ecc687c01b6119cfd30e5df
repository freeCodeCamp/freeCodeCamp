// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * You can store multiple cards on a customer in order to charge the customer
     * later. You can also store multiple debit cards on a recipient in order to
     * transfer to those cards later.
     *
     * Related guide: [Card payments with Sources](https://stripe.com/docs/sources/cards)
     */
    interface Card {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'card';

      /**
       * The account this card belongs to. This attribute will not be in the card object if the card belongs to a customer or recipient instead. This property is only available for accounts where [controller.requirement_collection](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
       */
      account?: string | Stripe.Account | null;

      /**
       * City/District/Suburb/Town/Village.
       */
      address_city: string | null;

      /**
       * Billing address country, if provided when creating card.
       */
      address_country: string | null;

      /**
       * Address line 1 (Street address/PO Box/Company name).
       */
      address_line1: string | null;

      /**
       * If `address_line1` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`.
       */
      address_line1_check: string | null;

      /**
       * Address line 2 (Apartment/Suite/Unit/Building).
       */
      address_line2: string | null;

      /**
       * State/County/Province/Region.
       */
      address_state: string | null;

      /**
       * ZIP or postal code.
       */
      address_zip: string | null;

      /**
       * If `address_zip` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`.
       */
      address_zip_check: string | null;

      /**
       * A set of available payout methods for this card. Only values from this set should be passed as the `method` when creating a payout.
       */
      available_payout_methods?: Array<Card.AvailablePayoutMethod> | null;

      /**
       * Card brand. Can be `American Express`, `Diners Club`, `Discover`, `Eftpos Australia`, `Girocard`, `JCB`, `MasterCard`, `UnionPay`, `Visa`, or `Unknown`.
       */
      brand: string;

      /**
       * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
       */
      country: string | null;

      /**
       * Three-letter [ISO code for currency](https://www.iso.org/iso-4217-currency-codes.html) in lowercase. Must be a [supported currency](https://docs.stripe.com/currencies). Only applicable on accounts (not customers or recipients). The card can be used as a transfer destination for funds in this currency. This property is only available for accounts where [controller.requirement_collection](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
       */
      currency?: string | null;

      /**
       * The customer that this card belongs to. This attribute will not be in the card object if the card belongs to an account or recipient instead.
       */
      customer?: string | Stripe.Customer | Stripe.DeletedCustomer | null;

      /**
       * If a CVC was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. A result of unchecked indicates that CVC was provided but hasn't been checked yet. Checks are typically performed when attaching a card to a Customer object, or when creating a charge. For more details, see [Check if a card is valid without a charge](https://support.stripe.com/questions/check-if-a-card-is-valid-without-a-charge).
       */
      cvc_check: string | null;

      /**
       * Whether this card is the default external account for its currency. This property is only available for accounts where [controller.requirement_collection](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
       */
      default_for_currency?: boolean | null;

      /**
       * Always true for a deleted object
       */
      deleted?: void;

      /**
       * A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.)
       */
      description?: string;

      /**
       * (For tokenized numbers only.) The last four digits of the device account number.
       */
      dynamic_last4: string | null;

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
      fingerprint?: string | null;

      /**
       * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
       */
      funding: string;

      /**
       * Issuer identification number of the card. (For internal use only and not typically available in standard API requests.)
       */
      iin?: string;

      /**
       * The name of the card's issuing bank. (For internal use only and not typically available in standard API requests.)
       */
      issuer?: string;

      /**
       * The last four digits of the card.
       */
      last4: string;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      /**
       * Cardholder name.
       */
      name: string | null;

      networks?: Card.Networks;

      /**
       * For external accounts that are cards, possible values are `new` and `errored`. If a payout fails, the status is set to `errored` and [scheduled payouts](https://stripe.com/docs/payouts#payout-schedule) are stopped until account details are updated.
       */
      status?: string | null;

      /**
       * If the card number is tokenized, this is the method that was used. Can be `android_pay` (includes Google Pay), `apple_pay`, `masterpass`, `visa_checkout`, or null.
       */
      tokenization_method: string | null;
    }

    namespace Card {
      type AvailablePayoutMethod = 'instant' | 'standard';

      interface Networks {
        /**
         * The preferred network for co-branded cards. Can be `cartes_bancaires`, `mastercard`, `visa` or `invalid_preference` if requested network is not valid for the card.
         */
        preferred: string | null;
      }
    }

    /**
     * The DeletedCard object.
     */
    interface DeletedCard {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'card';

      /**
       * Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.
       */
      currency?: string | null;

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }
  }
}
