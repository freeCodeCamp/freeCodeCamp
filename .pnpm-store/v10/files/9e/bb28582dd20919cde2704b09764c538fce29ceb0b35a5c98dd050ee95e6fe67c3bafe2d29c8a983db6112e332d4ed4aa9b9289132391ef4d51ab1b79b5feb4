// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The DeletedTaxId object.
     */
    interface DeletedTaxId {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'tax_id';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }

    /**
     * You can add one or multiple tax IDs to a [customer](https://stripe.com/docs/api/customers) or account.
     * Customer and account tax IDs get displayed on related invoices and credit notes.
     *
     * Related guides: [Customer tax identification numbers](https://stripe.com/docs/billing/taxes/tax-ids), [Account tax IDs](https://stripe.com/docs/invoicing/connect#account-tax-ids)
     */
    interface TaxId {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'tax_id';

      /**
       * Two-letter ISO code representing the country of the tax ID.
       */
      country: string | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * ID of the customer.
       */
      customer: string | Stripe.Customer | null;

      /**
       * Always true for a deleted object
       */
      deleted?: void;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * The account or customer the tax ID belongs to.
       */
      owner: TaxId.Owner | null;

      /**
       * Type of the tax ID, one of `ad_nrt`, `ae_trn`, `ar_cuit`, `au_abn`, `au_arn`, `bg_uic`, `bh_vat`, `bo_tin`, `br_cnpj`, `br_cpf`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `ch_uid`, `ch_vat`, `cl_tin`, `cn_tin`, `co_nit`, `cr_tin`, `de_stn`, `do_rcn`, `ec_ruc`, `eg_tin`, `es_cif`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `hk_br`, `hr_oib`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kr_brn`, `kz_bin`, `li_uid`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `ng_tin`, `no_vat`, `no_voec`, `nz_gst`, `om_vat`, `pe_ruc`, `ph_tin`, `ro_tin`, `rs_pib`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `sv_nit`, `th_vat`, `tr_tin`, `tw_vat`, `ua_vat`, `us_ein`, `uy_ruc`, `ve_rif`, `vn_tin`, or `za_vat`. Note that some legacy tax IDs have type `unknown`
       */
      type: TaxId.Type;

      /**
       * Value of the tax ID.
       */
      value: string;

      /**
       * Tax ID verification information.
       */
      verification: TaxId.Verification | null;
    }

    namespace TaxId {
      interface Owner {
        /**
         * The account being referenced when `type` is `account`.
         */
        account?: string | Stripe.Account;

        /**
         * The Connect Application being referenced when `type` is `application`.
         */
        application?: string | Stripe.Application;

        /**
         * The customer being referenced when `type` is `customer`.
         */
        customer?: string | Stripe.Customer;

        /**
         * Type of owner referenced.
         */
        type: Owner.Type;
      }

      namespace Owner {
        type Type = 'account' | 'application' | 'customer' | 'self';
      }

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

      interface Verification {
        /**
         * Verification status, one of `pending`, `verified`, `unverified`, or `unavailable`.
         */
        status: Verification.Status;

        /**
         * Verified address.
         */
        verified_address: string | null;

        /**
         * Verified name.
         */
        verified_name: string | null;
      }

      namespace Verification {
        type Status = 'pending' | 'unavailable' | 'unverified' | 'verified';
      }
    }
  }
}
