// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A dispute occurs when a customer questions your charge with their card issuer.
     * When this happens, you have the opportunity to respond to the dispute with
     * evidence that shows that the charge is legitimate.
     *
     * Related guide: [Disputes and fraud](https://stripe.com/docs/disputes)
     */
    interface Dispute {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'dispute';

      /**
       * Disputed amount. Usually the amount of the charge, but it can differ (usually because of currency fluctuation or because only part of the order is disputed).
       */
      amount: number;

      /**
       * List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your Stripe account as a result of this dispute.
       */
      balance_transactions: Array<Stripe.BalanceTransaction>;

      /**
       * ID of the charge that's disputed.
       */
      charge: string | Stripe.Charge;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      evidence: Dispute.Evidence;

      evidence_details: Dispute.EvidenceDetails;

      /**
       * If true, it's still possible to refund the disputed payment. After the payment has been fully refunded, no further funds are withdrawn from your Stripe account as a result of this dispute.
       */
      is_charge_refundable: boolean;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata;

      /**
       * Network-dependent reason code for the dispute.
       */
      network_reason_code?: string | null;

      /**
       * ID of the PaymentIntent that's disputed.
       */
      payment_intent: string | Stripe.PaymentIntent | null;

      payment_method_details?: Dispute.PaymentMethodDetails;

      /**
       * Reason given by cardholder for dispute. Possible values are `bank_cannot_process`, `check_returned`, `credit_not_processed`, `customer_initiated`, `debit_not_authorized`, `duplicate`, `fraudulent`, `general`, `incorrect_account_details`, `insufficient_funds`, `product_not_received`, `product_unacceptable`, `subscription_canceled`, or `unrecognized`. Learn more about [dispute reasons](https://stripe.com/docs/disputes/categories).
       */
      reason: string;

      /**
       * Current status of dispute. Possible values are `warning_needs_response`, `warning_under_review`, `warning_closed`, `needs_response`, `under_review`, `won`, or `lost`.
       */
      status: Dispute.Status;
    }

    namespace Dispute {
      interface Evidence {
        /**
         * Any server or activity logs showing proof that the customer accessed or downloaded the purchased digital product. This information should include IP addresses, corresponding timestamps, and any detailed recorded activity.
         */
        access_activity_log: string | null;

        /**
         * The billing address provided by the customer.
         */
        billing_address: string | null;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Your subscription cancellation policy, as shown to the customer.
         */
        cancellation_policy: string | Stripe.File | null;

        /**
         * An explanation of how and when the customer was shown your refund policy prior to purchase.
         */
        cancellation_policy_disclosure: string | null;

        /**
         * A justification for why the customer's subscription was not canceled.
         */
        cancellation_rebuttal: string | null;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Any communication with the customer that you feel is relevant to your case. Examples include emails proving that the customer received the product or service, or demonstrating their use of or satisfaction with the product or service.
         */
        customer_communication: string | Stripe.File | null;

        /**
         * The email address of the customer.
         */
        customer_email_address: string | null;

        /**
         * The name of the customer.
         */
        customer_name: string | null;

        /**
         * The IP address that the customer used when making the purchase.
         */
        customer_purchase_ip: string | null;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A relevant document or contract showing the customer's signature.
         */
        customer_signature: string | Stripe.File | null;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Documentation for the prior charge that can uniquely identify the charge, such as a receipt, shipping label, work order, etc. This document should be paired with a similar document from the disputed payment that proves the two payments are separate.
         */
        duplicate_charge_documentation: string | Stripe.File | null;

        /**
         * An explanation of the difference between the disputed charge versus the prior charge that appears to be a duplicate.
         */
        duplicate_charge_explanation: string | null;

        /**
         * The Stripe ID for the prior charge which appears to be a duplicate of the disputed charge.
         */
        duplicate_charge_id: string | null;

        /**
         * A description of the product or service that was sold.
         */
        product_description: string | null;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Any receipt or message sent to the customer notifying them of the charge.
         */
        receipt: string | Stripe.File | null;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Your refund policy, as shown to the customer.
         */
        refund_policy: string | Stripe.File | null;

        /**
         * Documentation demonstrating that the customer was shown your refund policy prior to purchase.
         */
        refund_policy_disclosure: string | null;

        /**
         * A justification for why the customer is not entitled to a refund.
         */
        refund_refusal_explanation: string | null;

        /**
         * The date on which the customer received or began receiving the purchased service, in a clear human-readable format.
         */
        service_date: string | null;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Documentation showing proof that a service was provided to the customer. This could include a copy of a signed contract, work order, or other form of written agreement.
         */
        service_documentation: string | Stripe.File | null;

        /**
         * The address to which a physical product was shipped. You should try to include as complete address information as possible.
         */
        shipping_address: string | null;

        /**
         * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc. If multiple carriers were used for this purchase, please separate them with commas.
         */
        shipping_carrier: string | null;

        /**
         * The date on which a physical product began its route to the shipping address, in a clear human-readable format.
         */
        shipping_date: string | null;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Documentation showing proof that a product was shipped to the customer at the same address the customer provided to you. This could include a copy of the shipment receipt, shipping label, etc. It should show the customer's full shipping address, if possible.
         */
        shipping_documentation: string | Stripe.File | null;

        /**
         * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
         */
        shipping_tracking_number: string | null;

        /**
         * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Any additional evidence or statements.
         */
        uncategorized_file: string | Stripe.File | null;

        /**
         * Any additional evidence or statements.
         */
        uncategorized_text: string | null;
      }

      interface EvidenceDetails {
        /**
         * Date by which evidence must be submitted in order to successfully challenge dispute. Will be 0 if the customer's bank or credit card company doesn't allow a response for this particular dispute.
         */
        due_by: number | null;

        /**
         * Whether evidence has been staged for this dispute.
         */
        has_evidence: boolean;

        /**
         * Whether the last evidence submission was submitted past the due date. Defaults to `false` if no evidence submissions have occurred. If `true`, then delivery of the latest evidence is *not* guaranteed.
         */
        past_due: boolean;

        /**
         * The number of times evidence has been submitted. Typically, you may only submit evidence once.
         */
        submission_count: number;
      }

      interface PaymentMethodDetails {
        amazon_pay?: PaymentMethodDetails.AmazonPay;

        card?: PaymentMethodDetails.Card;

        klarna?: PaymentMethodDetails.Klarna;

        paypal?: PaymentMethodDetails.Paypal;

        /**
         * Payment method type.
         */
        type: PaymentMethodDetails.Type;
      }

      namespace PaymentMethodDetails {
        interface AmazonPay {
          /**
           * The AmazonPay dispute type, chargeback or claim
           */
          dispute_type: AmazonPay.DisputeType | null;
        }

        namespace AmazonPay {
          type DisputeType = 'chargeback' | 'claim';
        }

        interface Card {
          /**
           * Card brand. Can be `amex`, `diners`, `discover`, `eftpos_au`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
           */
          brand: string;

          /**
           * The type of dispute opened. Different case types may have varying fees and financial impact.
           */
          case_type: Card.CaseType;

          /**
           * The card network's specific dispute reason code, which maps to one of Stripe's primary dispute categories to simplify response guidance. The [Network code map](https://stripe.com/docs/disputes/categories#network-code-map) lists all available dispute reason codes by network.
           */
          network_reason_code: string | null;
        }

        namespace Card {
          type CaseType = 'chargeback' | 'inquiry';
        }

        interface Klarna {
          /**
           * The reason for the dispute as defined by Klarna
           */
          reason_code: string | null;
        }

        interface Paypal {
          /**
           * The ID of the dispute in PayPal.
           */
          case_id: string | null;

          /**
           * The reason for the dispute as defined by PayPal
           */
          reason_code: string | null;
        }

        type Type = 'amazon_pay' | 'card' | 'klarna' | 'paypal';
      }

      type Status =
        | 'lost'
        | 'needs_response'
        | 'under_review'
        | 'warning_closed'
        | 'warning_needs_response'
        | 'warning_under_review'
        | 'won';
    }
  }
}
