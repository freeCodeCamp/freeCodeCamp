// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Terminal {
      /**
       * The DeletedReader object.
       */
      interface DeletedReader {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'terminal.reader';

        /**
         * Always true for a deleted object
         */
        deleted: true;
      }

      /**
       * A Reader represents a physical device for accepting payment details.
       *
       * Related guide: [Connecting to a reader](https://stripe.com/docs/terminal/payments/connect-reader)
       */
      interface Reader {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'terminal.reader';

        /**
         * The most recent action performed by the reader.
         */
        action: Reader.Action | null;

        /**
         * Always true for a deleted object
         */
        deleted?: void;

        /**
         * The current software version of the reader.
         */
        device_sw_version: string | null;

        /**
         * Type of reader, one of `bbpos_wisepad3`, `stripe_m2`, `stripe_s700`, `bbpos_chipper2x`, `bbpos_wisepos_e`, `verifone_P400`, `simulated_wisepos_e`, or `mobile_phone_reader`.
         */
        device_type: Reader.DeviceType;

        /**
         * The local IP address of the reader.
         */
        ip_address: string | null;

        /**
         * Custom label given to the reader for easier identification.
         */
        label: string;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The location identifier of the reader.
         */
        location: string | Stripe.Terminal.Location | null;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata;

        /**
         * Serial number of the reader.
         */
        serial_number: string;

        /**
         * The networking status of the reader. We do not recommend using this field in flows that may block taking payments.
         */
        status: Reader.Status | null;
      }

      namespace Reader {
        interface Action {
          /**
           * Failure code, only set if status is `failed`.
           */
          failure_code: string | null;

          /**
           * Detailed failure message, only set if status is `failed`.
           */
          failure_message: string | null;

          /**
           * Represents a reader action to process a payment intent
           */
          process_payment_intent?: Action.ProcessPaymentIntent;

          /**
           * Represents a reader action to process a setup intent
           */
          process_setup_intent?: Action.ProcessSetupIntent;

          /**
           * Represents a reader action to refund a payment
           */
          refund_payment?: Action.RefundPayment;

          /**
           * Represents a reader action to set the reader display
           */
          set_reader_display?: Action.SetReaderDisplay;

          /**
           * Status of the action performed by the reader.
           */
          status: Action.Status;

          /**
           * Type of action performed by the reader.
           */
          type: Action.Type;
        }

        namespace Action {
          interface ProcessPaymentIntent {
            /**
             * Most recent PaymentIntent processed by the reader.
             */
            payment_intent: string | Stripe.PaymentIntent;

            /**
             * Represents a per-transaction override of a reader configuration
             */
            process_config?: ProcessPaymentIntent.ProcessConfig;
          }

          namespace ProcessPaymentIntent {
            interface ProcessConfig {
              /**
               * Enable customer initiated cancellation when processing this payment.
               */
              enable_customer_cancellation?: boolean;

              /**
               * Override showing a tipping selection screen on this transaction.
               */
              skip_tipping?: boolean;

              /**
               * Represents a per-transaction tipping configuration
               */
              tipping?: ProcessConfig.Tipping;
            }

            namespace ProcessConfig {
              interface Tipping {
                /**
                 * Amount used to calculate tip suggestions on tipping selection screen for this transaction. Must be a positive integer in the smallest currency unit (e.g., 100 cents to represent $1.00 or 100 to represent ¥100, a zero-decimal currency).
                 */
                amount_eligible?: number;
              }
            }
          }

          interface ProcessSetupIntent {
            /**
             * ID of a card PaymentMethod generated from the card_present PaymentMethod that may be attached to a Customer for future transactions. Only present if it was possible to generate a card PaymentMethod.
             */
            generated_card?: string;

            /**
             * Represents a per-setup override of a reader configuration
             */
            process_config?: ProcessSetupIntent.ProcessConfig;

            /**
             * Most recent SetupIntent processed by the reader.
             */
            setup_intent: string | Stripe.SetupIntent;
          }

          namespace ProcessSetupIntent {
            interface ProcessConfig {
              /**
               * Enable customer initiated cancellation when processing this SetupIntent.
               */
              enable_customer_cancellation?: boolean;
            }
          }

          interface RefundPayment {
            /**
             * The amount being refunded.
             */
            amount?: number;

            /**
             * Charge that is being refunded.
             */
            charge?: string | Stripe.Charge;

            /**
             * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata?: Stripe.Metadata;

            /**
             * Payment intent that is being refunded.
             */
            payment_intent?: string | Stripe.PaymentIntent;

            /**
             * The reason for the refund.
             */
            reason?: RefundPayment.Reason;

            /**
             * Unique identifier for the refund object.
             */
            refund?: string | Stripe.Refund;

            /**
             * Boolean indicating whether the application fee should be refunded when refunding this charge. If a full charge refund is given, the full application fee will be refunded. Otherwise, the application fee will be refunded in an amount proportional to the amount of the charge refunded. An application fee can be refunded only by the application that created the charge.
             */
            refund_application_fee?: boolean;

            /**
             * Represents a per-transaction override of a reader configuration
             */
            refund_payment_config?: RefundPayment.RefundPaymentConfig;

            /**
             * Boolean indicating whether the transfer should be reversed when refunding this charge. The transfer will be reversed proportionally to the amount being refunded (either the entire or partial amount). A transfer can be reversed only by the application that created the charge.
             */
            reverse_transfer?: boolean;
          }

          namespace RefundPayment {
            type Reason = 'duplicate' | 'fraudulent' | 'requested_by_customer';

            interface RefundPaymentConfig {
              /**
               * Enable customer initiated cancellation when refunding this payment.
               */
              enable_customer_cancellation?: boolean;
            }
          }

          interface SetReaderDisplay {
            /**
             * Cart object to be displayed by the reader.
             */
            cart: SetReaderDisplay.Cart | null;

            /**
             * Type of information to be displayed by the reader.
             */
            type: 'cart';
          }

          namespace SetReaderDisplay {
            interface Cart {
              /**
               * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
               */
              currency: string;

              /**
               * List of line items in the cart.
               */
              line_items: Array<Cart.LineItem>;

              /**
               * Tax amount for the entire cart. A positive integer in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
               */
              tax: number | null;

              /**
               * Total amount for the entire cart, including tax. A positive integer in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
               */
              total: number;
            }

            namespace Cart {
              interface LineItem {
                /**
                 * The amount of the line item. A positive integer in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
                 */
                amount: number;

                /**
                 * Description of the line item.
                 */
                description: string;

                /**
                 * The quantity of the line item.
                 */
                quantity: number;
              }
            }
          }

          type Status = 'failed' | 'in_progress' | 'succeeded';

          type Type =
            | 'process_payment_intent'
            | 'process_setup_intent'
            | 'refund_payment'
            | 'set_reader_display';
        }

        type DeviceType =
          | 'bbpos_chipper2x'
          | 'bbpos_wisepad3'
          | 'bbpos_wisepos_e'
          | 'mobile_phone_reader'
          | 'simulated_wisepos_e'
          | 'stripe_m2'
          | 'stripe_s700'
          | 'verifone_P400';

        type Status = 'offline' | 'online';
      }
    }
  }
}
