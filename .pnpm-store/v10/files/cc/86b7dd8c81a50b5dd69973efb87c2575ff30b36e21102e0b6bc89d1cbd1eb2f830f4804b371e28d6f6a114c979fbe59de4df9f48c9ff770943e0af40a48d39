// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * `Source` objects allow you to accept a variety of payment methods. They
     * represent a customer's payment instrument, and can be used with the Stripe API
     * just like a `Card` object: once chargeable, they can be charged, or can be
     * attached to customers.
     *
     * Stripe doesn't recommend using the deprecated [Sources API](https://stripe.com/docs/api/sources).
     * We recommend that you adopt the [PaymentMethods API](https://stripe.com/docs/api/payment_methods).
     * This newer API provides access to our latest features and payment method types.
     *
     * Related guides: [Sources API](https://stripe.com/docs/sources) and [Sources & Customers](https://stripe.com/docs/sources/customers).
     */
    interface Source {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'source';

      ach_credit_transfer?: Source.AchCreditTransfer;

      ach_debit?: Source.AchDebit;

      acss_debit?: Source.AcssDebit;

      alipay?: Source.Alipay;

      /**
       * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount associated with the source. This is the amount for which the source will be chargeable once ready. Required for `single_use` sources.
       */
      amount: number | null;

      au_becs_debit?: Source.AuBecsDebit;

      bancontact?: Source.Bancontact;

      card?: Source.Card;

      card_present?: Source.CardPresent;

      /**
       * The client secret of the source. Used for client-side retrieval using a publishable key.
       */
      client_secret: string;

      code_verification?: Source.CodeVerification;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. This is the currency for which the source will be chargeable once ready. Required for `single_use` sources.
       */
      currency: string | null;

      /**
       * The ID of the customer to which this source is attached. This will not be present when the source has not been attached to a customer.
       */
      customer?: string;

      eps?: Source.Eps;

      /**
       * The authentication `flow` of the source. `flow` is one of `redirect`, `receiver`, `code_verification`, `none`.
       */
      flow: string;

      giropay?: Source.Giropay;

      ideal?: Source.Ideal;

      klarna?: Source.Klarna;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      multibanco?: Source.Multibanco;

      /**
       * Information about the owner of the payment instrument that may be used or required by particular source types.
       */
      owner: Source.Owner | null;

      p24?: Source.P24;

      receiver?: Source.Receiver;

      redirect?: Source.Redirect;

      sepa_credit_transfer?: Source.SepaCreditTransfer;

      sepa_debit?: Source.SepaDebit;

      sofort?: Source.Sofort;

      source_order?: Source.SourceOrder;

      /**
       * Extra information about a source. This will appear on your customer's statement every time you charge the source.
       */
      statement_descriptor: string | null;

      /**
       * The status of the source, one of `canceled`, `chargeable`, `consumed`, `failed`, or `pending`. Only `chargeable` sources can be used to create a charge.
       */
      status: string;

      three_d_secure?: Source.ThreeDSecure;

      /**
       * The `type` of the source. The `type` is a payment method, one of `ach_credit_transfer`, `ach_debit`, `alipay`, `bancontact`, `card`, `card_present`, `eps`, `giropay`, `ideal`, `multibanco`, `klarna`, `p24`, `sepa_debit`, `sofort`, `three_d_secure`, or `wechat`. An additional hash is included on the source with a name matching this value. It contains additional information specific to the [payment method](https://stripe.com/docs/sources) used.
       */
      type: Source.Type;

      /**
       * Either `reusable` or `single_use`. Whether this source should be reusable or not. Some source types may or may not be reusable by construction, while others may leave the option at creation. If an incompatible value is passed, an error will be returned.
       */
      usage: string | null;

      wechat?: Source.Wechat;
    }

    namespace Source {
      interface AchCreditTransfer {
        account_number?: string | null;

        bank_name?: string | null;

        fingerprint?: string | null;

        refund_account_holder_name?: string | null;

        refund_account_holder_type?: string | null;

        refund_routing_number?: string | null;

        routing_number?: string | null;

        swift_code?: string | null;
      }

      interface AchDebit {
        bank_name?: string | null;

        country?: string | null;

        fingerprint?: string | null;

        last4?: string | null;

        routing_number?: string | null;

        type?: string | null;
      }

      interface AcssDebit {
        bank_address_city?: string | null;

        bank_address_line_1?: string | null;

        bank_address_line_2?: string | null;

        bank_address_postal_code?: string | null;

        bank_name?: string | null;

        category?: string | null;

        country?: string | null;

        fingerprint?: string | null;

        last4?: string | null;

        routing_number?: string | null;
      }

      interface Alipay {
        data_string?: string | null;

        native_url?: string | null;

        statement_descriptor?: string | null;
      }

      interface AuBecsDebit {
        bsb_number?: string | null;

        fingerprint?: string | null;

        last4?: string | null;
      }

      interface Bancontact {
        bank_code?: string | null;

        bank_name?: string | null;

        bic?: string | null;

        iban_last4?: string | null;

        preferred_language?: string | null;

        statement_descriptor?: string | null;
      }

      interface Card {
        address_line1_check?: string | null;

        address_zip_check?: string | null;

        brand?: string | null;

        country?: string | null;

        cvc_check?: string | null;

        description?: string;

        dynamic_last4?: string | null;

        exp_month?: number | null;

        exp_year?: number | null;

        fingerprint?: string;

        funding?: string | null;

        iin?: string;

        issuer?: string;

        last4?: string | null;

        name?: string | null;

        three_d_secure?: string;

        tokenization_method?: string | null;
      }

      interface CardPresent {
        application_cryptogram?: string;

        application_preferred_name?: string;

        authorization_code?: string | null;

        authorization_response_code?: string;

        brand?: string | null;

        country?: string | null;

        cvm_type?: string;

        data_type?: string | null;

        dedicated_file_name?: string;

        description?: string;

        emv_auth_data?: string;

        evidence_customer_signature?: string | null;

        evidence_transaction_certificate?: string | null;

        exp_month?: number | null;

        exp_year?: number | null;

        fingerprint?: string;

        funding?: string | null;

        iin?: string;

        issuer?: string;

        last4?: string | null;

        pos_device_id?: string | null;

        pos_entry_mode?: string;

        read_method?: string | null;

        reader?: string | null;

        terminal_verification_results?: string;

        transaction_status_information?: string;
      }

      interface CodeVerification {
        /**
         * The number of attempts remaining to authenticate the source object with a verification code.
         */
        attempts_remaining: number;

        /**
         * The status of the code verification, either `pending` (awaiting verification, `attempts_remaining` should be greater than 0), `succeeded` (successful verification) or `failed` (failed verification, cannot be verified anymore as `attempts_remaining` should be 0).
         */
        status: string;
      }

      interface Eps {
        reference?: string | null;

        statement_descriptor?: string | null;
      }

      interface Giropay {
        bank_code?: string | null;

        bank_name?: string | null;

        bic?: string | null;

        statement_descriptor?: string | null;
      }

      interface Ideal {
        bank?: string | null;

        bic?: string | null;

        iban_last4?: string | null;

        statement_descriptor?: string | null;
      }

      interface Klarna {
        background_image_url?: string;

        client_token?: string | null;

        first_name?: string;

        last_name?: string;

        locale?: string;

        logo_url?: string;

        page_title?: string;

        pay_later_asset_urls_descriptive?: string;

        pay_later_asset_urls_standard?: string;

        pay_later_name?: string;

        pay_later_redirect_url?: string;

        pay_now_asset_urls_descriptive?: string;

        pay_now_asset_urls_standard?: string;

        pay_now_name?: string;

        pay_now_redirect_url?: string;

        pay_over_time_asset_urls_descriptive?: string;

        pay_over_time_asset_urls_standard?: string;

        pay_over_time_name?: string;

        pay_over_time_redirect_url?: string;

        payment_method_categories?: string;

        purchase_country?: string;

        purchase_type?: string;

        redirect_url?: string;

        shipping_delay?: number;

        shipping_first_name?: string;

        shipping_last_name?: string;
      }

      interface Multibanco {
        entity?: string | null;

        reference?: string | null;

        refund_account_holder_address_city?: string | null;

        refund_account_holder_address_country?: string | null;

        refund_account_holder_address_line1?: string | null;

        refund_account_holder_address_line2?: string | null;

        refund_account_holder_address_postal_code?: string | null;

        refund_account_holder_address_state?: string | null;

        refund_account_holder_name?: string | null;

        refund_iban?: string | null;
      }

      interface Owner {
        /**
         * Owner's address.
         */
        address: Stripe.Address | null;

        /**
         * Owner's email address.
         */
        email: string | null;

        /**
         * Owner's full name.
         */
        name: string | null;

        /**
         * Owner's phone number (including extension).
         */
        phone: string | null;

        /**
         * Verified owner's address. Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.
         */
        verified_address: Stripe.Address | null;

        /**
         * Verified owner's email address. Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.
         */
        verified_email: string | null;

        /**
         * Verified owner's full name. Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.
         */
        verified_name: string | null;

        /**
         * Verified owner's phone number (including extension). Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.
         */
        verified_phone: string | null;
      }

      interface P24 {
        reference?: string | null;
      }

      interface Receiver {
        /**
         * The address of the receiver source. This is the value that should be communicated to the customer to send their funds to.
         */
        address: string | null;

        /**
         * The total amount that was moved to your balance. This is almost always equal to the amount charged. In rare cases when customers deposit excess funds and we are unable to refund those, those funds get moved to your balance and show up in amount_charged as well. The amount charged is expressed in the source's currency.
         */
        amount_charged: number;

        /**
         * The total amount received by the receiver source. `amount_received = amount_returned + amount_charged` should be true for consumed sources unless customers deposit excess funds. The amount received is expressed in the source's currency.
         */
        amount_received: number;

        /**
         * The total amount that was returned to the customer. The amount returned is expressed in the source's currency.
         */
        amount_returned: number;

        /**
         * Type of refund attribute method, one of `email`, `manual`, or `none`.
         */
        refund_attributes_method: string;

        /**
         * Type of refund attribute status, one of `missing`, `requested`, or `available`.
         */
        refund_attributes_status: string;
      }

      interface Redirect {
        /**
         * The failure reason for the redirect, either `user_abort` (the customer aborted or dropped out of the redirect flow), `declined` (the authentication failed or the transaction was declined), or `processing_error` (the redirect failed due to a technical error). Present only if the redirect status is `failed`.
         */
        failure_reason: string | null;

        /**
         * The URL you provide to redirect the customer to after they authenticated their payment.
         */
        return_url: string;

        /**
         * The status of the redirect, either `pending` (ready to be used by your customer to authenticate the transaction), `succeeded` (succesful authentication, cannot be reused) or `not_required` (redirect should not be used) or `failed` (failed authentication, cannot be reused).
         */
        status: string;

        /**
         * The URL provided to you to redirect a customer to as part of a `redirect` authentication flow.
         */
        url: string;
      }

      interface SepaCreditTransfer {
        bank_name?: string | null;

        bic?: string | null;

        iban?: string | null;

        refund_account_holder_address_city?: string | null;

        refund_account_holder_address_country?: string | null;

        refund_account_holder_address_line1?: string | null;

        refund_account_holder_address_line2?: string | null;

        refund_account_holder_address_postal_code?: string | null;

        refund_account_holder_address_state?: string | null;

        refund_account_holder_name?: string | null;

        refund_iban?: string | null;
      }

      interface SepaDebit {
        bank_code?: string | null;

        branch_code?: string | null;

        country?: string | null;

        fingerprint?: string | null;

        last4?: string | null;

        mandate_reference?: string | null;

        mandate_url?: string | null;
      }

      interface Sofort {
        bank_code?: string | null;

        bank_name?: string | null;

        bic?: string | null;

        country?: string | null;

        iban_last4?: string | null;

        preferred_language?: string | null;

        statement_descriptor?: string | null;
      }

      interface SourceOrder {
        /**
         * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount for the order.
         */
        amount: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The email address of the customer placing the order.
         */
        email?: string;

        /**
         * List of items constituting the order.
         */
        items: Array<SourceOrder.Item> | null;

        shipping?: SourceOrder.Shipping;
      }

      namespace SourceOrder {
        interface Item {
          /**
           * The amount (price) for this order item.
           */
          amount: number | null;

          /**
           * This currency of this order item. Required when `amount` is present.
           */
          currency: string | null;

          /**
           * Human-readable description for this order item.
           */
          description: string | null;

          /**
           * The ID of the associated object for this line item. Expandable if not null (e.g., expandable to a SKU).
           */
          parent: string | null;

          /**
           * The quantity of this order item. When type is `sku`, this is the number of instances of the SKU to be ordered.
           */
          quantity?: number;

          /**
           * The type of this order item. Must be `sku`, `tax`, or `shipping`.
           */
          type: string | null;
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
      }

      interface ThreeDSecure {
        address_line1_check?: string | null;

        address_zip_check?: string | null;

        authenticated?: boolean | null;

        brand?: string | null;

        card?: string | null;

        country?: string | null;

        customer?: string | null;

        cvc_check?: string | null;

        description?: string;

        dynamic_last4?: string | null;

        exp_month?: number | null;

        exp_year?: number | null;

        fingerprint?: string;

        funding?: string | null;

        iin?: string;

        issuer?: string;

        last4?: string | null;

        name?: string | null;

        three_d_secure?: string;

        tokenization_method?: string | null;
      }

      type Type =
        | 'ach_credit_transfer'
        | 'ach_debit'
        | 'acss_debit'
        | 'alipay'
        | 'au_becs_debit'
        | 'bancontact'
        | 'card'
        | 'card_present'
        | 'eps'
        | 'giropay'
        | 'ideal'
        | 'klarna'
        | 'multibanco'
        | 'p24'
        | 'sepa_credit_transfer'
        | 'sepa_debit'
        | 'sofort'
        | 'three_d_secure'
        | 'wechat';

      interface Wechat {
        prepay_id?: string;

        qr_code_url?: string | null;

        statement_descriptor?: string;
      }
    }
  }
}
