// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Tax {
      /**
       * A Tax Transaction records the tax collected from or refunded to your customer.
       *
       * Related guide: [Calculate tax in your custom payment flow](https://stripe.com/docs/tax/custom#tax-transaction)
       */
      interface Transaction {
        /**
         * Unique identifier for the transaction.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'tax.transaction';

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The ID of an existing [Customer](https://stripe.com/docs/api/customers/object) used for the resource.
         */
        customer: string | null;

        customer_details: Transaction.CustomerDetails;

        /**
         * The tax collected or refunded, by line item.
         */
        line_items?: ApiList<Stripe.Tax.TransactionLineItem> | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata | null;

        /**
         * The Unix timestamp representing when the tax liability is assumed or reduced.
         */
        posted_at: number;

        /**
         * A custom unique identifier, such as 'myOrder_123'.
         */
        reference: string;

        /**
         * If `type=reversal`, contains information about what was reversed.
         */
        reversal: Transaction.Reversal | null;

        /**
         * The details of the ship from location, such as the address.
         */
        ship_from_details: Transaction.ShipFromDetails | null;

        /**
         * The shipping cost details for the transaction.
         */
        shipping_cost: Transaction.ShippingCost | null;

        /**
         * Timestamp of date at which the tax rules and rates in effect applies for the calculation.
         */
        tax_date: number;

        /**
         * If `reversal`, this transaction reverses an earlier transaction.
         */
        type: Transaction.Type;
      }

      namespace Transaction {
        interface CustomerDetails {
          /**
           * The customer's postal address (for example, home or business location).
           */
          address: Stripe.Address | null;

          /**
           * The type of customer address provided.
           */
          address_source: CustomerDetails.AddressSource | null;

          /**
           * The customer's IP address (IPv4 or IPv6).
           */
          ip_address: string | null;

          /**
           * The customer's tax IDs (for example, EU VAT numbers).
           */
          tax_ids: Array<CustomerDetails.TaxId>;

          /**
           * The taxability override used for taxation.
           */
          taxability_override: CustomerDetails.TaxabilityOverride;
        }

        namespace CustomerDetails {
          type AddressSource = 'billing' | 'shipping';

          type TaxabilityOverride =
            | 'customer_exempt'
            | 'none'
            | 'reverse_charge';

          interface TaxId {
            /**
             * The type of the tax ID, one of `ad_nrt`, `ar_cuit`, `eu_vat`, `bo_tin`, `br_cnpj`, `br_cpf`, `cn_tin`, `co_nit`, `cr_tin`, `do_rcn`, `ec_ruc`, `eu_oss_vat`, `hr_oib`, `pe_ruc`, `ro_tin`, `rs_pib`, `sv_nit`, `uy_ruc`, `ve_rif`, `vn_tin`, `gb_vat`, `nz_gst`, `au_abn`, `au_arn`, `in_gst`, `no_vat`, `no_voec`, `za_vat`, `ch_vat`, `mx_rfc`, `sg_uen`, `ru_inn`, `ru_kpp`, `ca_bn`, `hk_br`, `es_cif`, `tw_vat`, `th_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `li_uid`, `my_itn`, `us_ein`, `kr_brn`, `ca_qst`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `my_sst`, `sg_gst`, `ae_trn`, `cl_tin`, `sa_vat`, `id_npwp`, `my_frp`, `il_vat`, `ge_vat`, `ua_vat`, `is_vat`, `bg_uic`, `hu_tin`, `si_tin`, `ke_pin`, `tr_tin`, `eg_tin`, `ph_tin`, `bh_vat`, `kz_bin`, `ng_tin`, `om_vat`, `de_stn`, `ch_uid`, or `unknown`
             */
            type: TaxId.Type;

            /**
             * The value of the tax ID.
             */
            value: string;
          }

          namespace TaxId {
            type Type =
              | 'ad_nrt'
              | 'ae_trn'
              | 'ar_cuit'
              | 'au_abn'
              | 'au_arn'
              | 'bg_uic'
              | 'bh_vat'
              | 'bo_tin'
              | 'br_cnpj'
              | 'br_cpf'
              | 'ca_bn'
              | 'ca_gst_hst'
              | 'ca_pst_bc'
              | 'ca_pst_mb'
              | 'ca_pst_sk'
              | 'ca_qst'
              | 'ch_uid'
              | 'ch_vat'
              | 'cl_tin'
              | 'cn_tin'
              | 'co_nit'
              | 'cr_tin'
              | 'de_stn'
              | 'do_rcn'
              | 'ec_ruc'
              | 'eg_tin'
              | 'es_cif'
              | 'eu_oss_vat'
              | 'eu_vat'
              | 'gb_vat'
              | 'ge_vat'
              | 'hk_br'
              | 'hr_oib'
              | 'hu_tin'
              | 'id_npwp'
              | 'il_vat'
              | 'in_gst'
              | 'is_vat'
              | 'jp_cn'
              | 'jp_rn'
              | 'jp_trn'
              | 'ke_pin'
              | 'kr_brn'
              | 'kz_bin'
              | 'li_uid'
              | 'mx_rfc'
              | 'my_frp'
              | 'my_itn'
              | 'my_sst'
              | 'ng_tin'
              | 'no_vat'
              | 'no_voec'
              | 'nz_gst'
              | 'om_vat'
              | 'pe_ruc'
              | 'ph_tin'
              | 'ro_tin'
              | 'rs_pib'
              | 'ru_inn'
              | 'ru_kpp'
              | 'sa_vat'
              | 'sg_gst'
              | 'sg_uen'
              | 'si_tin'
              | 'sv_nit'
              | 'th_vat'
              | 'tr_tin'
              | 'tw_vat'
              | 'ua_vat'
              | 'unknown'
              | 'us_ein'
              | 'uy_ruc'
              | 've_rif'
              | 'vn_tin'
              | 'za_vat';
          }
        }

        interface Reversal {
          /**
           * The `id` of the reversed `Transaction` object.
           */
          original_transaction: string | null;
        }

        interface ShipFromDetails {
          address: Stripe.Address;
        }

        interface ShippingCost {
          /**
           * The shipping amount in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). If `tax_behavior=inclusive`, then this amount includes taxes. Otherwise, taxes were calculated on top of this amount.
           */
          amount: number;

          /**
           * The amount of tax calculated for shipping, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
           */
          amount_tax: number;

          /**
           * The ID of an existing [ShippingRate](https://stripe.com/docs/api/shipping_rates/object).
           */
          shipping_rate?: string;

          /**
           * Specifies whether the `amount` includes taxes. If `tax_behavior=inclusive`, then the amount includes taxes.
           */
          tax_behavior: ShippingCost.TaxBehavior;

          /**
           * Detailed account of taxes relevant to shipping cost. (It is not populated for the transaction resource object and will be removed in the next API version.)
           */
          tax_breakdown?: Array<ShippingCost.TaxBreakdown>;

          /**
           * The [tax code](https://stripe.com/docs/tax/tax-categories) ID used for shipping.
           */
          tax_code: string;
        }

        namespace ShippingCost {
          type TaxBehavior = 'exclusive' | 'inclusive';

          interface TaxBreakdown {
            /**
             * The amount of tax, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
             */
            amount: number;

            jurisdiction: TaxBreakdown.Jurisdiction;

            /**
             * Indicates whether the jurisdiction was determined by the origin (merchant's address) or destination (customer's address).
             */
            sourcing: TaxBreakdown.Sourcing;

            /**
             * Details regarding the rate for this tax. This field will be `null` when the tax is not imposed, for example if the product is exempt from tax.
             */
            tax_rate_details: TaxBreakdown.TaxRateDetails | null;

            /**
             * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
             */
            taxability_reason: TaxBreakdown.TaxabilityReason;

            /**
             * The amount on which tax is calculated, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
             */
            taxable_amount: number;
          }

          namespace TaxBreakdown {
            interface Jurisdiction {
              /**
               * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
               */
              country: string;

              /**
               * A human-readable name for the jurisdiction imposing the tax.
               */
              display_name: string;

              /**
               * Indicates the level of the jurisdiction imposing the tax.
               */
              level: Jurisdiction.Level;

              /**
               * [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2:US), without country prefix. For example, "NY" for New York, United States.
               */
              state: string | null;
            }

            namespace Jurisdiction {
              type Level = 'city' | 'country' | 'county' | 'district' | 'state';
            }

            type Sourcing = 'destination' | 'origin';

            type TaxabilityReason =
              | 'customer_exempt'
              | 'not_collecting'
              | 'not_subject_to_tax'
              | 'not_supported'
              | 'portion_product_exempt'
              | 'portion_reduced_rated'
              | 'portion_standard_rated'
              | 'product_exempt'
              | 'product_exempt_holiday'
              | 'proportionally_rated'
              | 'reduced_rated'
              | 'reverse_charge'
              | 'standard_rated'
              | 'taxable_basis_reduced'
              | 'zero_rated';

            interface TaxRateDetails {
              /**
               * A localized display name for tax type, intended to be human-readable. For example, "Local Sales and Use Tax", "Value-added tax (VAT)", or "Umsatzsteuer (USt.)".
               */
              display_name: string;

              /**
               * The tax rate percentage as a string. For example, 8.5% is represented as "8.5".
               */
              percentage_decimal: string;

              /**
               * The tax type, such as `vat` or `sales_tax`.
               */
              tax_type: TaxRateDetails.TaxType;
            }

            namespace TaxRateDetails {
              type TaxType =
                | 'amusement_tax'
                | 'communications_tax'
                | 'gst'
                | 'hst'
                | 'igst'
                | 'jct'
                | 'lease_tax'
                | 'pst'
                | 'qst'
                | 'rst'
                | 'sales_tax'
                | 'vat';
            }
          }
        }

        type Type = 'reversal' | 'transaction';
      }
    }
  }
}
