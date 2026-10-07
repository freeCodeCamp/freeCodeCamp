// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface TaxIdCreateParams {
      /**
       * Type of the tax ID, one of `ad_nrt`, `ae_trn`, `ar_cuit`, `au_abn`, `au_arn`, `bg_uic`, `bh_vat`, `bo_tin`, `br_cnpj`, `br_cpf`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `ch_uid`, `ch_vat`, `cl_tin`, `cn_tin`, `co_nit`, `cr_tin`, `de_stn`, `do_rcn`, `ec_ruc`, `eg_tin`, `es_cif`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `hk_br`, `hr_oib`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kr_brn`, `kz_bin`, `li_uid`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `ng_tin`, `no_vat`, `no_voec`, `nz_gst`, `om_vat`, `pe_ruc`, `ph_tin`, `ro_tin`, `rs_pib`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `sv_nit`, `th_vat`, `tr_tin`, `tw_vat`, `ua_vat`, `us_ein`, `uy_ruc`, `ve_rif`, `vn_tin`, or `za_vat`
       */
      type: TaxIdCreateParams.Type;

      /**
       * Value of the tax ID.
       */
      value: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The account or customer the tax ID belongs to. Defaults to `owner[type]=self`.
       */
      owner?: TaxIdCreateParams.Owner;
    }

    namespace TaxIdCreateParams {
      interface Owner {
        /**
         * Account the tax ID belongs to. Required when `type=account`
         */
        account?: string;

        /**
         * Customer the tax ID belongs to. Required when `type=customer`
         */
        customer?: string;

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
        | 'us_ein'
        | 'uy_ruc'
        | 've_rif'
        | 'vn_tin'
        | 'za_vat';
    }

    interface TaxIdRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface TaxIdListParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The account or customer the tax ID belongs to. Defaults to `owner[type]=self`.
       */
      owner?: TaxIdListParams.Owner;
    }

    namespace TaxIdListParams {
      interface Owner {
        /**
         * Account the tax ID belongs to. Required when `type=account`
         */
        account?: string;

        /**
         * Customer the tax ID belongs to. Required when `type=customer`
         */
        customer?: string;

        /**
         * Type of owner referenced.
         */
        type: Owner.Type;
      }

      namespace Owner {
        type Type = 'account' | 'application' | 'customer' | 'self';
      }
    }

    interface TaxIdDeleteParams {}

    class TaxIdsResource {
      /**
       * Creates a new account or customer tax_id object.
       */
      create(
        params: TaxIdCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.TaxId>>;

      /**
       * Retrieves an account or customer tax_id object.
       */
      retrieve(
        id: string,
        params?: TaxIdRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.TaxId>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.TaxId>>;

      /**
       * Returns a list of tax IDs.
       */
      list(
        params?: TaxIdListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.TaxId>;
      list(options?: RequestOptions): ApiListPromise<Stripe.TaxId>;

      /**
       * Deletes an existing account or customer tax_id object.
       */
      del(
        id: string,
        params?: TaxIdDeleteParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedTaxId>>;
      del(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedTaxId>>;
    }
  }
}
