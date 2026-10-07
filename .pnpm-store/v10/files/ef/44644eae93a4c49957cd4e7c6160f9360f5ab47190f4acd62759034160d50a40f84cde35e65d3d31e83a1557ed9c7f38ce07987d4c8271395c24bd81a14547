// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace TestHelpers {
      namespace Issuing {
        interface PersonalizationDesignActivateParams {
          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;
        }
      }

      namespace Issuing {
        interface PersonalizationDesignDeactivateParams {
          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;
        }
      }

      namespace Issuing {
        interface PersonalizationDesignRejectParams {
          /**
           * The reason(s) the personalization design was rejected.
           */
          rejection_reasons: PersonalizationDesignRejectParams.RejectionReasons;

          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;
        }

        namespace PersonalizationDesignRejectParams {
          interface RejectionReasons {
            /**
             * The reason(s) the card logo was rejected.
             */
            card_logo?: Array<RejectionReasons.CardLogo>;

            /**
             * The reason(s) the carrier text was rejected.
             */
            carrier_text?: Array<RejectionReasons.CarrierText>;
          }

          namespace RejectionReasons {
            type CardLogo =
              | 'geographic_location'
              | 'inappropriate'
              | 'network_name'
              | 'non_binary_image'
              | 'non_fiat_currency'
              | 'other'
              | 'other_entity'
              | 'promotional_material';

            type CarrierText =
              | 'geographic_location'
              | 'inappropriate'
              | 'network_name'
              | 'non_fiat_currency'
              | 'other'
              | 'other_entity'
              | 'promotional_material';
          }
        }
      }

      namespace Issuing {
        class PersonalizationDesignsResource {
          /**
           * Updates the status of the specified testmode personalization design object to active.
           */
          activate(
            id: string,
            params?: PersonalizationDesignActivateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Issuing.PersonalizationDesign>>;
          activate(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Issuing.PersonalizationDesign>>;

          /**
           * Updates the status of the specified testmode personalization design object to inactive.
           */
          deactivate(
            id: string,
            params?: PersonalizationDesignDeactivateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Issuing.PersonalizationDesign>>;
          deactivate(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Issuing.PersonalizationDesign>>;

          /**
           * Updates the status of the specified testmode personalization design object to rejected.
           */
          reject(
            id: string,
            params: PersonalizationDesignRejectParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Issuing.PersonalizationDesign>>;
        }
      }
    }
  }
}
