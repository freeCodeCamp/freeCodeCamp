// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface ChargeCreateParams {
      /**
       * Amount intended to be collected by this payment. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
       */
      amount?: number;

      application_fee?: number;

      /**
       * A fee in cents (or local equivalent) that will be applied to the charge and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the `Stripe-Account` header in order to take an application fee. For more information, see the application fees [documentation](https://stripe.com/docs/connect/direct-charges#collect-fees).
       */
      application_fee_amount?: number;

      /**
       * Whether to immediately capture the charge. Defaults to `true`. When `false`, the charge issues an authorization (or pre-authorization), and will need to be [captured](https://stripe.com/docs/api#capture_charge) later. Uncaptured charges expire after a set number of days (7 by default). For more information, see the [authorizing charges and settling later](https://stripe.com/docs/charges/placing-a-hold) documentation.
       */
      capture?: boolean;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency?: string;

      /**
       * The ID of an existing customer that will be charged in this request.
       */
      customer?: string;

      /**
       * An arbitrary string which you can attach to a `Charge` object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the `description` of the charge(s) that they are describing.
       */
      description?: string;

      destination?: ChargeCreateParams.Destination;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * The Stripe account ID for which these funds are intended. Automatically set if you use the `destination` parameter. For details, see [Creating Separate Charges and Transfers](https://stripe.com/docs/connect/separate-charges-and-transfers#settlement-merchant).
       */
      on_behalf_of?: string;

      /**
       * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
       */
      radar_options?: ChargeCreateParams.RadarOptions;

      /**
       * The email address to which this charge's [receipt](https://stripe.com/docs/dashboard/receipts) will be sent. The receipt will not be sent until the charge is paid, and no receipts will be sent for test mode charges. If this charge is for a [Customer](https://stripe.com/docs/api/customers/object), the email address specified here will override the customer's email address. If `receipt_email` is specified for a charge in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
       */
      receipt_email?: string;

      /**
       * Shipping information for the charge. Helps prevent fraud on charges for physical goods.
       */
      shipping?: ChargeCreateParams.Shipping;

      /**
       * A payment source to be charged. This can be the ID of a [card](https://stripe.com/docs/api#cards) (i.e., credit or debit card), a [bank account](https://stripe.com/docs/api#bank_accounts), a [source](https://stripe.com/docs/api#sources), a [token](https://stripe.com/docs/api#tokens), or a [connected account](https://stripe.com/docs/connect/account-debits#charging-a-connected-account). For certain sources---namely, [cards](https://stripe.com/docs/api#cards), [bank accounts](https://stripe.com/docs/api#bank_accounts), and attached [sources](https://stripe.com/docs/api#sources)---you must also pass the ID of the associated customer.
       */
      source?: string;

      /**
       * For a non-card charge, text that appears on the customer's statement as the statement descriptor. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
       *
       * For a card charge, this value is ignored unless you don't specify a `statement_descriptor_suffix`, in which case this value is used as the suffix.
       */
      statement_descriptor?: string;

      /**
       * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement. If the account has no prefix value, the suffix is concatenated to the account's statement descriptor.
       */
      statement_descriptor_suffix?: string;

      /**
       * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
       */
      transfer_data?: ChargeCreateParams.TransferData;

      /**
       * A string that identifies this transaction as part of a group. For details, see [Grouping transactions](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options).
       */
      transfer_group?: string;
    }

    namespace ChargeCreateParams {
      interface Destination {
        /**
         * ID of an existing, connected Stripe account.
         */
        account: string;

        /**
         * The amount to transfer to the destination account without creating an `Application Fee` object. Cannot be combined with the `application_fee` parameter. Must be less than or equal to the charge amount.
         */
        amount?: number;
      }

      interface RadarOptions {
        /**
         * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
         */
        session?: string;
      }

      interface Shipping {
        /**
         * Shipping address.
         */
        address: Stripe.AddressParam;

        /**
         * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
         */
        carrier?: string;

        /**
         * Recipient name.
         */
        name: string;

        /**
         * Recipient phone (including extension).
         */
        phone?: string;

        /**
         * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
         */
        tracking_number?: string;
      }

      interface TransferData {
        /**
         * The amount transferred to the destination account, if specified. By default, the entire charge amount is transferred to the destination account.
         */
        amount?: number;

        /**
         * ID of an existing, connected Stripe account.
         */
        destination: string;
      }
    }

    interface ChargeRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface ChargeUpdateParams {
      /**
       * The ID of an existing customer that will be associated with this request. This field may only be updated if there is no existing associated customer with this charge.
       */
      customer?: string;

      /**
       * An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the `description` of the charge(s) that they are describing.
       */
      description?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A set of key-value pairs you can attach to a charge giving information about its riskiness. If you believe a charge is fraudulent, include a `user_report` key with a value of `fraudulent`. If you believe a charge is safe, include a `user_report` key with a value of `safe`. Stripe will use the information you send to improve our fraud detection algorithms.
       */
      fraud_details?: ChargeUpdateParams.FraudDetails;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * This is the email address that the receipt for this charge will be sent to. If this field is updated, then a new email receipt will be sent to the updated address.
       */
      receipt_email?: string;

      /**
       * Shipping information for the charge. Helps prevent fraud on charges for physical goods.
       */
      shipping?: ChargeUpdateParams.Shipping;

      /**
       * A string that identifies this transaction as part of a group. `transfer_group` may only be provided if it has not been set. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options) for details.
       */
      transfer_group?: string;
    }

    namespace ChargeUpdateParams {
      interface FraudDetails {
        /**
         * Either `safe` or `fraudulent`.
         */
        user_report: Stripe.Emptyable<FraudDetails.UserReport>;
      }

      namespace FraudDetails {
        type UserReport = 'fraudulent' | 'safe';
      }

      interface Shipping {
        /**
         * Shipping address.
         */
        address: Stripe.AddressParam;

        /**
         * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
         */
        carrier?: string;

        /**
         * Recipient name.
         */
        name: string;

        /**
         * Recipient phone (including extension).
         */
        phone?: string;

        /**
         * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
         */
        tracking_number?: string;
      }
    }

    interface ChargeListParams extends PaginationParams {
      /**
       * Only return charges that were created during the given date interval.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Only return charges for the customer specified by this customer ID.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return charges that were created by the PaymentIntent specified by this PaymentIntent ID.
       */
      payment_intent?: string;

      /**
       * Only return charges for this transfer group, limited to 100.
       */
      transfer_group?: string;
    }

    interface ChargeCaptureParams {
      /**
       * The amount to capture, which must be less than or equal to the original amount. Any additional amount will be automatically refunded.
       */
      amount?: number;

      /**
       * An application fee to add on to this charge.
       */
      application_fee?: number;

      /**
       * An application fee amount to add on to this charge, which must be less than or equal to the original amount.
       */
      application_fee_amount?: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The email address to send this charge's receipt to. This will override the previously-specified email address for this charge, if one was set. Receipts will not be sent in test mode.
       */
      receipt_email?: string;

      /**
       * For a non-card charge, text that appears on the customer's statement as the statement descriptor. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
       *
       * For a card charge, this value is ignored unless you don't specify a `statement_descriptor_suffix`, in which case this value is used as the suffix.
       */
      statement_descriptor?: string;

      /**
       * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement. If the account has no prefix value, the suffix is concatenated to the account's statement descriptor.
       */
      statement_descriptor_suffix?: string;

      /**
       * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
       */
      transfer_data?: ChargeCaptureParams.TransferData;

      /**
       * A string that identifies this transaction as part of a group. `transfer_group` may only be provided if it has not been set. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options) for details.
       */
      transfer_group?: string;
    }

    namespace ChargeCaptureParams {
      interface TransferData {
        /**
         * The amount transferred to the destination account, if specified. By default, the entire charge amount is transferred to the destination account.
         */
        amount?: number;
      }
    }

    interface ChargeSearchParams {
      /**
       * The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for charges](https://stripe.com/docs/search#query-fields-for-charges).
       */
      query: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
       */
      limit?: number;

      /**
       * A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
       */
      page?: string;
    }

    class ChargesResource {
      /**
       * This method is no longer recommended—use the [Payment Intents API](https://stripe.com/docs/api/payment_intents)
       * to initiate a new payment instead. Confirmation of the PaymentIntent creates the Charge
       * object used to request payment.
       */
      create(
        params?: ChargeCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Charge>>;
      create(options?: RequestOptions): Promise<Stripe.Response<Stripe.Charge>>;

      /**
       * Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Stripe will return the corresponding charge information. The same information is returned when creating or refunding the charge.
       */
      retrieve(
        id: string,
        params?: ChargeRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Charge>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Charge>>;

      /**
       * Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       */
      update(
        id: string,
        params?: ChargeUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Charge>>;

      /**
       * Returns a list of charges you've previously created. The charges are returned in sorted order, with the most recent charges appearing first.
       */
      list(
        params?: ChargeListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Charge>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Charge>;

      /**
       * Capture the payment of an existing, uncaptured charge that was created with the capture option set to false.
       *
       * Uncaptured payments expire a set number of days after they are created ([7 by default](https://stripe.com/docs/charges/placing-a-hold)), after which they are marked as refunded and capture attempts will fail.
       *
       * Don't use this method to capture a PaymentIntent-initiated charge. Use [Capture a PaymentIntent](https://stripe.com/docs/api/payment_intents/capture).
       */
      capture(
        id: string,
        params?: ChargeCaptureParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Charge>>;
      capture(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Charge>>;

      /**
       * Search for charges you've previously created using Stripe's [Search Query Language](https://stripe.com/docs/search#search-query-language).
       * Don't use search in read-after-write flows where strict consistency is necessary. Under normal operating
       * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
       * to an hour behind during outages. Search functionality is not available to merchants in India.
       */
      search(
        params: ChargeSearchParams,
        options?: RequestOptions
      ): ApiSearchResultPromise<Stripe.Charge>;
    }
  }
}
