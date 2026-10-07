// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Treasury {
      interface OutboundPaymentCreateParams {
        /**
         * Amount (in cents) to be transferred.
         */
        amount: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The FinancialAccount to pull funds from.
         */
        financial_account: string;

        /**
         * ID of the customer to whom the OutboundPayment is sent. Must match the Customer attached to the `destination_payment_method` passed in.
         */
        customer?: string;

        /**
         * An arbitrary string attached to the object. Often useful for displaying to users.
         */
        description?: string;

        /**
         * The PaymentMethod to use as the payment instrument for the OutboundPayment. Exclusive with `destination_payment_method_data`.
         */
        destination_payment_method?: string;

        /**
         * Hash used to generate the PaymentMethod to be used for this OutboundPayment. Exclusive with `destination_payment_method`.
         */
        destination_payment_method_data?: OutboundPaymentCreateParams.DestinationPaymentMethodData;

        /**
         * Payment method-specific configuration for this OutboundPayment.
         */
        destination_payment_method_options?: OutboundPaymentCreateParams.DestinationPaymentMethodOptions;

        /**
         * End user details.
         */
        end_user_details?: OutboundPaymentCreateParams.EndUserDetails;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * The description that appears on the receiving end for this OutboundPayment (for example, bank statement for external bank transfer). Maximum 10 characters for `ach` payments, 140 characters for `us_domestic_wire` payments, or 500 characters for `stripe` network transfers. The default value is "payment".
         */
        statement_descriptor?: string;
      }

      namespace OutboundPaymentCreateParams {
        interface DestinationPaymentMethodData {
          /**
           * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
           */
          billing_details?: DestinationPaymentMethodData.BillingDetails;

          /**
           * Required if type is set to `financial_account`. The FinancialAccount ID to send funds to.
           */
          financial_account?: string;

          /**
           * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
           */
          metadata?: Stripe.MetadataParam;

          /**
           * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
           */
          type: DestinationPaymentMethodData.Type;

          /**
           * Required hash if type is set to `us_bank_account`.
           */
          us_bank_account?: DestinationPaymentMethodData.UsBankAccount;
        }

        namespace DestinationPaymentMethodData {
          interface BillingDetails {
            /**
             * Billing address.
             */
            address?: Stripe.Emptyable<Stripe.AddressParam>;

            /**
             * Email address.
             */
            email?: Stripe.Emptyable<string>;

            /**
             * Full name.
             */
            name?: Stripe.Emptyable<string>;

            /**
             * Billing phone number (including extension).
             */
            phone?: Stripe.Emptyable<string>;
          }

          type Type = 'financial_account' | 'us_bank_account';

          interface UsBankAccount {
            /**
             * Account holder type: individual or company.
             */
            account_holder_type?: UsBankAccount.AccountHolderType;

            /**
             * Account number of the bank account.
             */
            account_number?: string;

            /**
             * Account type: checkings or savings. Defaults to checking if omitted.
             */
            account_type?: UsBankAccount.AccountType;

            /**
             * The ID of a Financial Connections Account to use as a payment method.
             */
            financial_connections_account?: string;

            /**
             * Routing number of the bank account.
             */
            routing_number?: string;
          }

          namespace UsBankAccount {
            type AccountHolderType = 'company' | 'individual';

            type AccountType = 'checking' | 'savings';
          }
        }

        interface DestinationPaymentMethodOptions {
          /**
           * Optional fields for `us_bank_account`.
           */
          us_bank_account?: Stripe.Emptyable<
            DestinationPaymentMethodOptions.UsBankAccount
          >;
        }

        namespace DestinationPaymentMethodOptions {
          interface UsBankAccount {
            /**
             * Specifies the network rails to be used. If not set, will default to the PaymentMethod's preferred network. See the [docs](https://stripe.com/docs/treasury/money-movement/timelines) to learn more about money movement timelines for each network type.
             */
            network?: UsBankAccount.Network;
          }

          namespace UsBankAccount {
            type Network = 'ach' | 'us_domestic_wire';
          }
        }

        interface EndUserDetails {
          /**
           * IP address of the user initiating the OutboundPayment. Must be supplied if `present` is set to `true`.
           */
          ip_address?: string;

          /**
           * `True` if the OutboundPayment creation request is being made on behalf of an end user by a platform. Otherwise, `false`.
           */
          present: boolean;
        }
      }

      interface OutboundPaymentRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface OutboundPaymentListParams extends PaginationParams {
        /**
         * Returns objects associated with this FinancialAccount.
         */
        financial_account: string;

        /**
         * Only return OutboundPayments that were created during the given date interval.
         */
        created?: Stripe.RangeQueryParam | number;

        /**
         * Only return OutboundPayments sent to this customer.
         */
        customer?: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Only return OutboundPayments that have the given status: `processing`, `failed`, `posted`, `returned`, or `canceled`.
         */
        status?: OutboundPaymentListParams.Status;
      }

      namespace OutboundPaymentListParams {
        type Status =
          | 'canceled'
          | 'failed'
          | 'posted'
          | 'processing'
          | 'returned';
      }

      interface OutboundPaymentCancelParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class OutboundPaymentsResource {
        /**
         * Creates an OutboundPayment.
         */
        create(
          params: OutboundPaymentCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.OutboundPayment>>;

        /**
         * Retrieves the details of an existing OutboundPayment by passing the unique OutboundPayment ID from either the OutboundPayment creation request or OutboundPayment list.
         */
        retrieve(
          id: string,
          params?: OutboundPaymentRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.OutboundPayment>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.OutboundPayment>>;

        /**
         * Returns a list of OutboundPayments sent from the specified FinancialAccount.
         */
        list(
          params: OutboundPaymentListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Treasury.OutboundPayment>;

        /**
         * Cancel an OutboundPayment.
         */
        cancel(
          id: string,
          params?: OutboundPaymentCancelParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.OutboundPayment>>;
        cancel(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.OutboundPayment>>;
      }
    }
  }
}
