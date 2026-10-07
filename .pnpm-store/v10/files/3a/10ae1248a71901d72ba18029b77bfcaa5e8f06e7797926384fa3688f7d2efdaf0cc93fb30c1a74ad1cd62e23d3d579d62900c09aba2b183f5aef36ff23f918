// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface SourceCreateParams {
      /**
       * Amount associated with the source. This is the amount for which the source will be chargeable once ready. Required for `single_use` sources. Not supported for `receiver` type sources, where charge amount may not be specified until funds land.
       */
      amount?: number;

      /**
       * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. This is the currency for which the source will be chargeable once ready.
       */
      currency?: string;

      /**
       * The `Customer` to whom the original source is attached to. Must be set when the original source is not a `Source` (e.g., `Card`).
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The authentication `flow` of the source to create. `flow` is one of `redirect`, `receiver`, `code_verification`, `none`. It is generally inferred unless a type supports multiple flows.
       */
      flow?: SourceCreateParams.Flow;

      /**
       * Information about a mandate possibility attached to a source object (generally for bank debits) as well as its acceptance status.
       */
      mandate?: SourceCreateParams.Mandate;

      metadata?: Stripe.MetadataParam;

      /**
       * The source to share.
       */
      original_source?: string;

      /**
       * Information about the owner of the payment instrument that may be used or required by particular source types.
       */
      owner?: SourceCreateParams.Owner;

      /**
       * Optional parameters for the receiver flow. Can be set only if the source is a receiver (`flow` is `receiver`).
       */
      receiver?: SourceCreateParams.Receiver;

      /**
       * Parameters required for the redirect flow. Required if the source is authenticated by a redirect (`flow` is `redirect`).
       */
      redirect?: SourceCreateParams.Redirect;

      /**
       * Information about the items and shipping associated with the source. Required for transactional credit (for example Klarna) sources before you can charge it.
       */
      source_order?: SourceCreateParams.SourceOrder;

      /**
       * An arbitrary string to be displayed on your customer's statement. As an example, if your website is `RunClub` and the item you're charging for is a race ticket, you may want to specify a `statement_descriptor` of `RunClub 5K race ticket.` While many payment types will display this information, some may not display it at all.
       */
      statement_descriptor?: string;

      /**
       * An optional token used to create the source. When passed, token properties will override source parameters.
       */
      token?: string;

      /**
       * The `type` of the source to create. Required unless `customer` and `original_source` are specified (see the [Cloning card Sources](https://stripe.com/docs/sources/connect#cloning-card-sources) guide)
       */
      type?: string;

      usage?: SourceCreateParams.Usage;
    }

    namespace SourceCreateParams {
      type Flow = 'code_verification' | 'none' | 'receiver' | 'redirect';

      interface Mandate {
        /**
         * The parameters required to notify Stripe of a mandate acceptance or refusal by the customer.
         */
        acceptance?: Mandate.Acceptance;

        /**
         * The amount specified by the mandate. (Leave null for a mandate covering all amounts)
         */
        amount?: Stripe.Emptyable<number>;

        /**
         * The currency specified by the mandate. (Must match `currency` of the source)
         */
        currency?: string;

        /**
         * The interval of debits permitted by the mandate. Either `one_time` (just permitting a single debit), `scheduled` (with debits on an agreed schedule or for clearly-defined events), or `variable`(for debits with any frequency)
         */
        interval?: Mandate.Interval;

        /**
         * The method Stripe should use to notify the customer of upcoming debit instructions and/or mandate confirmation as required by the underlying debit network. Either `email` (an email is sent directly to the customer), `manual` (a `source.mandate_notification` event is sent to your webhooks endpoint and you should handle the notification) or `none` (the underlying debit network does not require any notification).
         */
        notification_method?: Mandate.NotificationMethod;
      }

      namespace Mandate {
        interface Acceptance {
          /**
           * The Unix timestamp (in seconds) when the mandate was accepted or refused by the customer.
           */
          date?: number;

          /**
           * The IP address from which the mandate was accepted or refused by the customer.
           */
          ip?: string;

          /**
           * The parameters required to store a mandate accepted offline. Should only be set if `mandate[type]` is `offline`
           */
          offline?: Acceptance.Offline;

          /**
           * The parameters required to store a mandate accepted online. Should only be set if `mandate[type]` is `online`
           */
          online?: Acceptance.Online;

          /**
           * The status of the mandate acceptance. Either `accepted` (the mandate was accepted) or `refused` (the mandate was refused).
           */
          status: Acceptance.Status;

          /**
           * The type of acceptance information included with the mandate. Either `online` or `offline`
           */
          type?: Acceptance.Type;

          /**
           * The user agent of the browser from which the mandate was accepted or refused by the customer.
           */
          user_agent?: string;
        }

        namespace Acceptance {
          interface Offline {
            /**
             * An email to contact you with if a copy of the mandate is requested, required if `type` is `offline`.
             */
            contact_email: string;
          }

          interface Online {
            /**
             * The Unix timestamp (in seconds) when the mandate was accepted or refused by the customer.
             */
            date?: number;

            /**
             * The IP address from which the mandate was accepted or refused by the customer.
             */
            ip?: string;

            /**
             * The user agent of the browser from which the mandate was accepted or refused by the customer.
             */
            user_agent?: string;
          }

          type Status = 'accepted' | 'pending' | 'refused' | 'revoked';

          type Type = 'offline' | 'online';
        }

        type Interval = 'one_time' | 'scheduled' | 'variable';

        type NotificationMethod =
          | 'deprecated_none'
          | 'email'
          | 'manual'
          | 'none'
          | 'stripe_email';
      }

      interface Owner {
        /**
         * Owner's address.
         */
        address?: Stripe.AddressParam;

        /**
         * Owner's email address.
         */
        email?: string;

        /**
         * Owner's full name.
         */
        name?: string;

        /**
         * Owner's phone number.
         */
        phone?: string;
      }

      interface Receiver {
        /**
         * The method Stripe should use to request information needed to process a refund or mispayment. Either `email` (an email is sent directly to the customer) or `manual` (a `source.refund_attributes_required` event is sent to your webhooks endpoint). Refer to each payment method's documentation to learn which refund attributes may be required.
         */
        refund_attributes_method?: Receiver.RefundAttributesMethod;
      }

      namespace Receiver {
        type RefundAttributesMethod = 'email' | 'manual' | 'none';
      }

      interface Redirect {
        /**
         * The URL you provide to redirect the customer back to you after they authenticated their payment. It can use your application URI scheme in the context of a mobile application.
         */
        return_url: string;
      }

      interface SourceOrder {
        /**
         * List of items constituting the order.
         */
        items?: Array<SourceOrder.Item>;

        /**
         * Shipping address for the order. Required if any of the SKUs are for products that have `shippable` set to true.
         */
        shipping?: SourceOrder.Shipping;
      }

      namespace SourceOrder {
        interface Item {
          amount?: number;

          currency?: string;

          description?: string;

          /**
           * The ID of the SKU being ordered.
           */
          parent?: string;

          /**
           * The quantity of this order item. When type is `sku`, this is the number of instances of the SKU to be ordered.
           */
          quantity?: number;

          type?: Item.Type;
        }

        namespace Item {
          type Type = 'discount' | 'shipping' | 'sku' | 'tax';
        }

        interface Shipping {
          /**
           * Shipping address.
           */
          address: Stripe.ShippingAddressParam;

          /**
           * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
           */
          carrier?: string;

          /**
           * Recipient name.
           */
          name?: string;

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

      type Usage = 'reusable' | 'single_use';
    }

    interface SourceRetrieveParams {
      /**
       * The client secret of the source. Required if a publishable key is used to retrieve the source.
       */
      client_secret?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface SourceUpdateParams {
      /**
       * Amount associated with the source.
       */
      amount?: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Information about a mandate possibility attached to a source object (generally for bank debits) as well as its acceptance status.
       */
      mandate?: SourceUpdateParams.Mandate;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Information about the owner of the payment instrument that may be used or required by particular source types.
       */
      owner?: SourceUpdateParams.Owner;

      /**
       * Information about the items and shipping associated with the source. Required for transactional credit (for example Klarna) sources before you can charge it.
       */
      source_order?: SourceUpdateParams.SourceOrder;
    }

    namespace SourceUpdateParams {
      interface Mandate {
        /**
         * The parameters required to notify Stripe of a mandate acceptance or refusal by the customer.
         */
        acceptance?: Mandate.Acceptance;

        /**
         * The amount specified by the mandate. (Leave null for a mandate covering all amounts)
         */
        amount?: Stripe.Emptyable<number>;

        /**
         * The currency specified by the mandate. (Must match `currency` of the source)
         */
        currency?: string;

        /**
         * The interval of debits permitted by the mandate. Either `one_time` (just permitting a single debit), `scheduled` (with debits on an agreed schedule or for clearly-defined events), or `variable`(for debits with any frequency)
         */
        interval?: Mandate.Interval;

        /**
         * The method Stripe should use to notify the customer of upcoming debit instructions and/or mandate confirmation as required by the underlying debit network. Either `email` (an email is sent directly to the customer), `manual` (a `source.mandate_notification` event is sent to your webhooks endpoint and you should handle the notification) or `none` (the underlying debit network does not require any notification).
         */
        notification_method?: Mandate.NotificationMethod;
      }

      namespace Mandate {
        interface Acceptance {
          /**
           * The Unix timestamp (in seconds) when the mandate was accepted or refused by the customer.
           */
          date?: number;

          /**
           * The IP address from which the mandate was accepted or refused by the customer.
           */
          ip?: string;

          /**
           * The parameters required to store a mandate accepted offline. Should only be set if `mandate[type]` is `offline`
           */
          offline?: Acceptance.Offline;

          /**
           * The parameters required to store a mandate accepted online. Should only be set if `mandate[type]` is `online`
           */
          online?: Acceptance.Online;

          /**
           * The status of the mandate acceptance. Either `accepted` (the mandate was accepted) or `refused` (the mandate was refused).
           */
          status: Acceptance.Status;

          /**
           * The type of acceptance information included with the mandate. Either `online` or `offline`
           */
          type?: Acceptance.Type;

          /**
           * The user agent of the browser from which the mandate was accepted or refused by the customer.
           */
          user_agent?: string;
        }

        namespace Acceptance {
          interface Offline {
            /**
             * An email to contact you with if a copy of the mandate is requested, required if `type` is `offline`.
             */
            contact_email: string;
          }

          interface Online {
            /**
             * The Unix timestamp (in seconds) when the mandate was accepted or refused by the customer.
             */
            date?: number;

            /**
             * The IP address from which the mandate was accepted or refused by the customer.
             */
            ip?: string;

            /**
             * The user agent of the browser from which the mandate was accepted or refused by the customer.
             */
            user_agent?: string;
          }

          type Status = 'accepted' | 'pending' | 'refused' | 'revoked';

          type Type = 'offline' | 'online';
        }

        type Interval = 'one_time' | 'scheduled' | 'variable';

        type NotificationMethod =
          | 'deprecated_none'
          | 'email'
          | 'manual'
          | 'none'
          | 'stripe_email';
      }

      interface Owner {
        /**
         * Owner's address.
         */
        address?: Stripe.AddressParam;

        /**
         * Owner's email address.
         */
        email?: string;

        /**
         * Owner's full name.
         */
        name?: string;

        /**
         * Owner's phone number.
         */
        phone?: string;
      }

      interface SourceOrder {
        /**
         * List of items constituting the order.
         */
        items?: Array<SourceOrder.Item>;

        /**
         * Shipping address for the order. Required if any of the SKUs are for products that have `shippable` set to true.
         */
        shipping?: SourceOrder.Shipping;
      }

      namespace SourceOrder {
        interface Item {
          amount?: number;

          currency?: string;

          description?: string;

          /**
           * The ID of the SKU being ordered.
           */
          parent?: string;

          /**
           * The quantity of this order item. When type is `sku`, this is the number of instances of the SKU to be ordered.
           */
          quantity?: number;

          type?: Item.Type;
        }

        namespace Item {
          type Type = 'discount' | 'shipping' | 'sku' | 'tax';
        }

        interface Shipping {
          /**
           * Shipping address.
           */
          address: Stripe.ShippingAddressParam;

          /**
           * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
           */
          carrier?: string;

          /**
           * Recipient name.
           */
          name?: string;

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
    }

    interface SourceListSourceTransactionsParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface SourceVerifyParams {
      /**
       * The values needed to verify the source.
       */
      values: Array<string>;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class SourcesResource {
      /**
       * Creates a new source object.
       */
      create(
        params?: SourceCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Source>>;
      create(options?: RequestOptions): Promise<Stripe.Response<Stripe.Source>>;

      /**
       * Retrieves an existing source object. Supply the unique source ID from a source creation request and Stripe will return the corresponding up-to-date source object information.
       */
      retrieve(
        id: string,
        params?: SourceRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Source>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Source>>;

      /**
       * Updates the specified source by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       *
       * This request accepts the metadata and owner as arguments. It is also possible to update type specific information for selected payment methods. Please refer to our [payment method guides](https://stripe.com/docs/sources) for more detail.
       */
      update(
        id: string,
        params?: SourceUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Source>>;

      /**
       * List source transactions for a given source.
       */
      listSourceTransactions(
        id: string,
        params?: SourceListSourceTransactionsParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.SourceTransaction>;
      listSourceTransactions(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.SourceTransaction>;

      /**
       * Verify a given source.
       */
      verify(
        id: string,
        params: SourceVerifyParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Source>>;
    }
  }
}
