// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Tax {
      /**
       * A Tax `Registration` lets us know that your business is registered to collect tax on payments within a region, enabling you to [automatically collect tax](https://stripe.com/docs/tax).
       *
       * Stripe doesn't register on your behalf with the relevant authorities when you create a Tax `Registration` object. For more information on how to register to collect tax, see [our guide](https://stripe.com/docs/tax/registering).
       *
       * Related guide: [Using the Registrations API](https://stripe.com/docs/tax/registrations-api)
       */
      interface Registration {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'tax.registration';

        /**
         * Time at which the registration becomes active. Measured in seconds since the Unix epoch.
         */
        active_from: number;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country: string;

        country_options: Registration.CountryOptions;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * If set, the registration stops being active at this time. If not set, the registration will be active indefinitely. Measured in seconds since the Unix epoch.
         */
        expires_at: number | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The status of the registration. This field is present for convenience and can be deduced from `active_from` and `expires_at`.
         */
        status: Registration.Status;
      }

      namespace Registration {
        interface CountryOptions {
          ae?: CountryOptions.Ae;

          at?: CountryOptions.At;

          au?: CountryOptions.Au;

          be?: CountryOptions.Be;

          bg?: CountryOptions.Bg;

          bh?: CountryOptions.Bh;

          ca?: CountryOptions.Ca;

          ch?: CountryOptions.Ch;

          cl?: CountryOptions.Cl;

          co?: CountryOptions.Co;

          cy?: CountryOptions.Cy;

          cz?: CountryOptions.Cz;

          de?: CountryOptions.De;

          dk?: CountryOptions.Dk;

          ee?: CountryOptions.Ee;

          eg?: CountryOptions.Eg;

          es?: CountryOptions.Es;

          fi?: CountryOptions.Fi;

          fr?: CountryOptions.Fr;

          gb?: CountryOptions.Gb;

          ge?: CountryOptions.Ge;

          gr?: CountryOptions.Gr;

          hr?: CountryOptions.Hr;

          hu?: CountryOptions.Hu;

          id?: CountryOptions.Id;

          ie?: CountryOptions.Ie;

          is?: CountryOptions.Is;

          it?: CountryOptions.It;

          jp?: CountryOptions.Jp;

          ke?: CountryOptions.Ke;

          kr?: CountryOptions.Kr;

          kz?: CountryOptions.Kz;

          lt?: CountryOptions.Lt;

          lu?: CountryOptions.Lu;

          lv?: CountryOptions.Lv;

          mt?: CountryOptions.Mt;

          mx?: CountryOptions.Mx;

          my?: CountryOptions.My;

          ng?: CountryOptions.Ng;

          nl?: CountryOptions.Nl;

          no?: CountryOptions.No;

          nz?: CountryOptions.Nz;

          om?: CountryOptions.Om;

          pl?: CountryOptions.Pl;

          pt?: CountryOptions.Pt;

          ro?: CountryOptions.Ro;

          sa?: CountryOptions.Sa;

          se?: CountryOptions.Se;

          sg?: CountryOptions.Sg;

          si?: CountryOptions.Si;

          sk?: CountryOptions.Sk;

          th?: CountryOptions.Th;

          tr?: CountryOptions.Tr;

          us?: CountryOptions.Us;

          vn?: CountryOptions.Vn;

          za?: CountryOptions.Za;
        }

        namespace CountryOptions {
          interface Ae {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface At {
            standard?: At.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: At.Type;
          }

          namespace At {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Au {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Be {
            standard?: Be.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: Be.Type;
          }

          namespace Be {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Bg {
            standard?: Bg.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: Bg.Type;
          }

          namespace Bg {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Bh {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Ca {
            province_standard?: Ca.ProvinceStandard;

            /**
             * Type of registration in Canada.
             */
            type: Ca.Type;
          }

          namespace Ca {
            interface ProvinceStandard {
              /**
               * Two-letter CA province code ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
               */
              province: string;
            }

            type Type = 'province_standard' | 'simplified' | 'standard';
          }

          interface Ch {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Cl {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Co {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Cy {
            standard?: Cy.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: Cy.Type;
          }

          namespace Cy {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Cz {
            standard?: Cz.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: Cz.Type;
          }

          namespace Cz {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface De {
            standard?: De.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: De.Type;
          }

          namespace De {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Dk {
            standard?: Dk.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: Dk.Type;
          }

          namespace Dk {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Ee {
            standard?: Ee.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: Ee.Type;
          }

          namespace Ee {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Eg {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Es {
            standard?: Es.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: Es.Type;
          }

          namespace Es {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Fi {
            standard?: Fi.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: Fi.Type;
          }

          namespace Fi {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Fr {
            standard?: Fr.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: Fr.Type;
          }

          namespace Fr {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Gb {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Ge {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Gr {
            standard?: Gr.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: Gr.Type;
          }

          namespace Gr {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Hr {
            standard?: Hr.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: Hr.Type;
          }

          namespace Hr {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Hu {
            standard?: Hu.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: Hu.Type;
          }

          namespace Hu {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Id {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Ie {
            standard?: Ie.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: Ie.Type;
          }

          namespace Ie {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Is {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface It {
            standard?: It.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: It.Type;
          }

          namespace It {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Jp {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Ke {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Kr {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Kz {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Lt {
            standard?: Lt.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: Lt.Type;
          }

          namespace Lt {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Lu {
            standard?: Lu.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: Lu.Type;
          }

          namespace Lu {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Lv {
            standard?: Lv.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: Lv.Type;
          }

          namespace Lv {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Mt {
            standard?: Mt.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: Mt.Type;
          }

          namespace Mt {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Mx {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface My {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Ng {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Nl {
            standard?: Nl.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: Nl.Type;
          }

          namespace Nl {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface No {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Nz {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Om {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Pl {
            standard?: Pl.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: Pl.Type;
          }

          namespace Pl {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Pt {
            standard?: Pt.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: Pt.Type;
          }

          namespace Pt {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Ro {
            standard?: Ro.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: Ro.Type;
          }

          namespace Ro {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Sa {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Se {
            standard?: Se.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: Se.Type;
          }

          namespace Se {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Sg {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Si {
            standard?: Si.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: Si.Type;
          }

          namespace Si {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Sk {
            standard?: Sk.Standard;

            /**
             * Type of registration in an EU country.
             */
            type: Sk.Type;
          }

          namespace Sk {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Th {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Tr {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Us {
            local_amusement_tax?: Us.LocalAmusementTax;

            local_lease_tax?: Us.LocalLeaseTax;

            /**
             * Two-letter US state code ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
             */
            state: string;

            state_sales_tax?: Us.StateSalesTax;

            /**
             * Type of registration in the US.
             */
            type: Us.Type;
          }

          namespace Us {
            interface LocalAmusementTax {
              /**
               * A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction.
               */
              jurisdiction: string;
            }

            interface LocalLeaseTax {
              /**
               * A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction.
               */
              jurisdiction: string;
            }

            interface StateSalesTax {
              /**
               * Elections for the state sales tax registration.
               */
              elections?: Array<StateSalesTax.Election>;
            }

            namespace StateSalesTax {
              interface Election {
                /**
                 * A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction.
                 */
                jurisdiction?: string;

                /**
                 * The type of the election for the state sales tax registration.
                 */
                type: Election.Type;
              }

              namespace Election {
                type Type =
                  | 'local_use_tax'
                  | 'simplified_sellers_use_tax'
                  | 'single_local_use_tax';
              }
            }

            type Type =
              | 'local_amusement_tax'
              | 'local_lease_tax'
              | 'state_communications_tax'
              | 'state_sales_tax';
          }

          interface Vn {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Za {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }
        }

        type Status = 'active' | 'expired' | 'scheduled';
      }
    }
  }
}
