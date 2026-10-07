// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface DisputeRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface DisputeUpdateParams {
      /**
       * Evidence to upload, to respond to a dispute. Updating any field in the hash will submit all fields in the hash for review. The combined character count of all fields is limited to 150,000.
       */
      evidence?: DisputeUpdateParams.Evidence;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Whether to immediately submit evidence to the bank. If `false`, evidence is staged on the dispute. Staged evidence is visible in the API and Dashboard, and can be submitted to the bank by making another request with this attribute set to `true` (the default).
       */
      submit?: boolean;
    }

    namespace DisputeUpdateParams {
      interface Evidence {
        /**
         * Any server or activity logs showing proof that the customer accessed or downloaded the purchased digital product. This information should include IP addresses, corresponding timestamps, and any detailed recorded activity. Has a maximum character count of 20,000.
         */
        access_activity_log?: string;

        /**
         * The billing address provided by the customer.
         */
        billing_address?: string;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Your subscription cancellation policy, as shown to the customer.
         */
        cancellation_policy?: string;

        /**
         * An explanation of how and when the customer was shown your refund policy prior to purchase. Has a maximum character count of 20,000.
         */
        cancellation_policy_disclosure?: string;

        /**
         * A justification for why the customer's subscription was not canceled. Has a maximum character count of 20,000.
         */
        cancellation_rebuttal?: string;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Any communication with the customer that you feel is relevant to your case. Examples include emails proving that the customer received the product or service, or demonstrating their use of or satisfaction with the product or service.
         */
        customer_communication?: string;

        /**
         * The email address of the customer.
         */
        customer_email_address?: string;

        /**
         * The name of the customer.
         */
        customer_name?: string;

        /**
         * The IP address that the customer used when making the purchase.
         */
        customer_purchase_ip?: string;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A relevant document or contract showing the customer's signature.
         */
        customer_signature?: string;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Documentation for the prior charge that can uniquely identify the charge, such as a receipt, shipping label, work order, etc. This document should be paired with a similar document from the disputed payment that proves the two payments are separate.
         */
        duplicate_charge_documentation?: string;

        /**
         * An explanation of the difference between the disputed charge versus the prior charge that appears to be a duplicate. Has a maximum character count of 20,000.
         */
        duplicate_charge_explanation?: string;

        /**
         * The Stripe ID for the prior charge which appears to be a duplicate of the disputed charge.
         */
        duplicate_charge_id?: string;

        /**
         * A description of the product or service that was sold. Has a maximum character count of 20,000.
         */
        product_description?: string;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Any receipt or message sent to the customer notifying them of the charge.
         */
        receipt?: string;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Your refund policy, as shown to the customer.
         */
        refund_policy?: string;

        /**
         * Documentation demonstrating that the customer was shown your refund policy prior to purchase. Has a maximum character count of 20,000.
         */
        refund_policy_disclosure?: string;

        /**
         * A justification for why the customer is not entitled to a refund. Has a maximum character count of 20,000.
         */
        refund_refusal_explanation?: string;

        /**
         * The date on which the customer received or began receiving the purchased service, in a clear human-readable format.
         */
        service_date?: string;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Documentation showing proof that a service was provided to the customer. This could include a copy of a signed contract, work order, or other form of written agreement.
         */
        service_documentation?: string;

        /**
         * The address to which a physical product was shipped. You should try to include as complete address information as possible.
         */
        shipping_address?: string;

        /**
         * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc. If multiple carriers were used for this purchase, please separate them with commas.
         */
        shipping_carrier?: string;

        /**
         * The date on which a physical product began its route to the shipping address, in a clear human-readable format.
         */
        shipping_date?: string;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Documentation showing proof that a product was shipped to the customer at the same address the customer provided to you. This could include a copy of the shipment receipt, shipping label, etc. It should show the customer's full shipping address, if possible.
         */
        shipping_documentation?: string;

        /**
         * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
         */
        shipping_tracking_number?: string;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Any additional evidence or statements.
         */
        uncategorized_file?: string;

        /**
         * Any additional evidence or statements. Has a maximum character count of 20,000.
         */
        uncategorized_text?: string;
      }
    }

    interface DisputeListParams extends PaginationParams {
      /**
       * Only return disputes associated to the charge specified by this charge ID.
       */
      charge?: string;

      /**
       * Only return disputes that were created during the given date interval.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return disputes associated to the PaymentIntent specified by this PaymentIntent ID.
       */
      payment_intent?: string;
    }

    interface DisputeCloseParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class DisputesResource {
      /**
       * Retrieves the dispute with the given ID.
       */
      retrieve(
        id: string,
        params?: DisputeRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Dispute>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Dispute>>;

      /**
       * When you get a dispute, contacting your customer is always the best first step. If that doesn't work, you can submit evidence to help us resolve the dispute in your favor. You can do this in your [dashboard](https://dashboard.stripe.com/disputes), but if you prefer, you can use the API to submit evidence programmatically.
       *
       * Depending on your dispute type, different evidence fields will give you a better chance of winning your dispute. To figure out which evidence fields to provide, see our [guide to dispute types](https://stripe.com/docs/disputes/categories).
       */
      update(
        id: string,
        params?: DisputeUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Dispute>>;

      /**
       * Returns a list of your disputes.
       */
      list(
        params?: DisputeListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Dispute>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Dispute>;

      /**
       * Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially dismissing the dispute, acknowledging it as lost.
       *
       * The status of the dispute will change from needs_response to lost. Closing a dispute is irreversible.
       */
      close(
        id: string,
        params?: DisputeCloseParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Dispute>>;
      close(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Dispute>>;
    }
  }
}
