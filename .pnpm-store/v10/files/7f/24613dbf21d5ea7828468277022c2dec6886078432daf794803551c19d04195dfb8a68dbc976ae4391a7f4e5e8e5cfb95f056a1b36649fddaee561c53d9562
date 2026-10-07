// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      /**
       * An Issuing `Cardholder` object represents an individual or business entity who is [issued](https://stripe.com/docs/issuing) cards.
       *
       * Related guide: [How to create a cardholder](https://stripe.com/docs/issuing/cards#create-cardholder)
       */
      interface Cardholder {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'issuing.cardholder';

        billing: Cardholder.Billing;

        /**
         * Additional information about a `company` cardholder.
         */
        company: Cardholder.Company | null;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * The cardholder's email address.
         */
        email: string | null;

        /**
         * Additional information about an `individual` cardholder.
         */
        individual: Cardholder.Individual | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata;

        /**
         * The cardholder's name. This will be printed on cards issued to them.
         */
        name: string;

        /**
         * The cardholder's phone number. This is required for all cardholders who will be creating EU cards. See the [3D Secure documentation](https://stripe.com/docs/issuing/3d-secure#when-is-3d-secure-applied) for more details.
         */
        phone_number: string | null;

        /**
         * The cardholder's preferred locales (languages), ordered by preference. Locales can be `de`, `en`, `es`, `fr`, or `it`.
         *  This changes the language of the [3D Secure flow](https://stripe.com/docs/issuing/3d-secure) and one-time password messages sent to the cardholder.
         */
        preferred_locales: Array<Cardholder.PreferredLocale> | null;

        requirements: Cardholder.Requirements;

        /**
         * Rules that control spending across this cardholder's cards. Refer to our [documentation](https://stripe.com/docs/issuing/controls/spending-controls) for more details.
         */
        spending_controls: Cardholder.SpendingControls | null;

        /**
         * Specifies whether to permit authorizations on this cardholder's cards.
         */
        status: Cardholder.Status;

        /**
         * One of `individual` or `company`. See [Choose a cardholder type](https://stripe.com/docs/issuing/other/choose-cardholder) for more details.
         */
        type: Cardholder.Type;
      }

      namespace Cardholder {
        interface Billing {
          address: Stripe.Address;
        }

        interface Company {
          /**
           * Whether the company's business ID number was provided.
           */
          tax_id_provided: boolean;
        }

        interface Individual {
          /**
           * Information related to the card_issuing program for this cardholder.
           */
          card_issuing?: Individual.CardIssuing | null;

          /**
           * The date of birth of this cardholder.
           */
          dob: Individual.Dob | null;

          /**
           * The first name of this cardholder. Required before activating Cards. This field cannot contain any numbers, special characters (except periods, commas, hyphens, spaces and apostrophes) or non-latin letters.
           */
          first_name: string | null;

          /**
           * The last name of this cardholder. Required before activating Cards. This field cannot contain any numbers, special characters (except periods, commas, hyphens, spaces and apostrophes) or non-latin letters.
           */
          last_name: string | null;

          /**
           * Government-issued ID document for this cardholder.
           */
          verification: Individual.Verification | null;
        }

        namespace Individual {
          interface CardIssuing {
            /**
             * Information about cardholder acceptance of Celtic [Authorized User Terms](https://stripe.com/docs/issuing/cards#accept-authorized-user-terms). Required for cards backed by a Celtic program.
             */
            user_terms_acceptance: CardIssuing.UserTermsAcceptance | null;
          }

          namespace CardIssuing {
            interface UserTermsAcceptance {
              /**
               * The Unix timestamp marking when the cardholder accepted the Authorized User Terms.
               */
              date: number | null;

              /**
               * The IP address from which the cardholder accepted the Authorized User Terms.
               */
              ip: string | null;

              /**
               * The user agent of the browser from which the cardholder accepted the Authorized User Terms.
               */
              user_agent: string | null;
            }
          }

          interface Dob {
            /**
             * The day of birth, between 1 and 31.
             */
            day: number | null;

            /**
             * The month of birth, between 1 and 12.
             */
            month: number | null;

            /**
             * The four-digit year of birth.
             */
            year: number | null;
          }

          interface Verification {
            /**
             * An identifying document, either a passport or local ID card.
             */
            document: Verification.Document | null;
          }

          namespace Verification {
            interface Document {
              /**
               * The back of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`.
               */
              back: string | Stripe.File | null;

              /**
               * The front of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`.
               */
              front: string | Stripe.File | null;
            }
          }
        }

        type PreferredLocale = 'de' | 'en' | 'es' | 'fr' | 'it';

        interface Requirements {
          /**
           * If `disabled_reason` is present, all cards will decline authorizations with `cardholder_verification_required` reason.
           */
          disabled_reason: Requirements.DisabledReason | null;

          /**
           * Array of fields that need to be collected in order to verify and re-enable the cardholder.
           */
          past_due: Array<Requirements.PastDue> | null;
        }

        namespace Requirements {
          type DisabledReason =
            | 'listed'
            | 'rejected.listed'
            | 'requirements.past_due'
            | 'under_review';

          type PastDue =
            | 'company.tax_id'
            | 'individual.card_issuing.user_terms_acceptance.date'
            | 'individual.card_issuing.user_terms_acceptance.ip'
            | 'individual.dob.day'
            | 'individual.dob.month'
            | 'individual.dob.year'
            | 'individual.first_name'
            | 'individual.last_name'
            | 'individual.verification.document';
        }

        interface SpendingControls {
          /**
           * Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) of authorizations to allow. All other categories will be blocked. Cannot be set with `blocked_categories`.
           */
          allowed_categories: Array<SpendingControls.AllowedCategory> | null;

          /**
           * Array of strings containing representing countries from which authorizations will be allowed. Authorizations from merchants in all other countries will be declined. Country codes should be ISO 3166 alpha-2 country codes (e.g. `US`). Cannot be set with `blocked_merchant_countries`. Provide an empty value to unset this control.
           */
          allowed_merchant_countries: Array<string> | null;

          /**
           * Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) of authorizations to decline. All other categories will be allowed. Cannot be set with `allowed_categories`.
           */
          blocked_categories: Array<SpendingControls.BlockedCategory> | null;

          /**
           * Array of strings containing representing countries from which authorizations will be declined. Country codes should be ISO 3166 alpha-2 country codes (e.g. `US`). Cannot be set with `allowed_merchant_countries`. Provide an empty value to unset this control.
           */
          blocked_merchant_countries: Array<string> | null;

          /**
           * Limit spending with amount-based rules that apply across this cardholder's cards.
           */
          spending_limits: Array<SpendingControls.SpendingLimit> | null;

          /**
           * Currency of the amounts within `spending_limits`.
           */
          spending_limits_currency: string | null;
        }

        namespace SpendingControls {
          type AllowedCategory =
            | 'ac_refrigeration_repair'
            | 'accounting_bookkeeping_services'
            | 'advertising_services'
            | 'agricultural_cooperative'
            | 'airlines_air_carriers'
            | 'airports_flying_fields'
            | 'ambulance_services'
            | 'amusement_parks_carnivals'
            | 'antique_reproductions'
            | 'antique_shops'
            | 'aquariums'
            | 'architectural_surveying_services'
            | 'art_dealers_and_galleries'
            | 'artists_supply_and_craft_shops'
            | 'auto_and_home_supply_stores'
            | 'auto_body_repair_shops'
            | 'auto_paint_shops'
            | 'auto_service_shops'
            | 'automated_cash_disburse'
            | 'automated_fuel_dispensers'
            | 'automobile_associations'
            | 'automotive_parts_and_accessories_stores'
            | 'automotive_tire_stores'
            | 'bail_and_bond_payments'
            | 'bakeries'
            | 'bands_orchestras'
            | 'barber_and_beauty_shops'
            | 'betting_casino_gambling'
            | 'bicycle_shops'
            | 'billiard_pool_establishments'
            | 'boat_dealers'
            | 'boat_rentals_and_leases'
            | 'book_stores'
            | 'books_periodicals_and_newspapers'
            | 'bowling_alleys'
            | 'bus_lines'
            | 'business_secretarial_schools'
            | 'buying_shopping_services'
            | 'cable_satellite_and_other_pay_television_and_radio'
            | 'camera_and_photographic_supply_stores'
            | 'candy_nut_and_confectionery_stores'
            | 'car_and_truck_dealers_new_used'
            | 'car_and_truck_dealers_used_only'
            | 'car_rental_agencies'
            | 'car_washes'
            | 'carpentry_services'
            | 'carpet_upholstery_cleaning'
            | 'caterers'
            | 'charitable_and_social_service_organizations_fundraising'
            | 'chemicals_and_allied_products'
            | 'child_care_services'
            | 'childrens_and_infants_wear_stores'
            | 'chiropodists_podiatrists'
            | 'chiropractors'
            | 'cigar_stores_and_stands'
            | 'civic_social_fraternal_associations'
            | 'cleaning_and_maintenance'
            | 'clothing_rental'
            | 'colleges_universities'
            | 'commercial_equipment'
            | 'commercial_footwear'
            | 'commercial_photography_art_and_graphics'
            | 'commuter_transport_and_ferries'
            | 'computer_network_services'
            | 'computer_programming'
            | 'computer_repair'
            | 'computer_software_stores'
            | 'computers_peripherals_and_software'
            | 'concrete_work_services'
            | 'construction_materials'
            | 'consulting_public_relations'
            | 'correspondence_schools'
            | 'cosmetic_stores'
            | 'counseling_services'
            | 'country_clubs'
            | 'courier_services'
            | 'court_costs'
            | 'credit_reporting_agencies'
            | 'cruise_lines'
            | 'dairy_products_stores'
            | 'dance_hall_studios_schools'
            | 'dating_escort_services'
            | 'dentists_orthodontists'
            | 'department_stores'
            | 'detective_agencies'
            | 'digital_goods_applications'
            | 'digital_goods_games'
            | 'digital_goods_large_volume'
            | 'digital_goods_media'
            | 'direct_marketing_catalog_merchant'
            | 'direct_marketing_combination_catalog_and_retail_merchant'
            | 'direct_marketing_inbound_telemarketing'
            | 'direct_marketing_insurance_services'
            | 'direct_marketing_other'
            | 'direct_marketing_outbound_telemarketing'
            | 'direct_marketing_subscription'
            | 'direct_marketing_travel'
            | 'discount_stores'
            | 'doctors'
            | 'door_to_door_sales'
            | 'drapery_window_covering_and_upholstery_stores'
            | 'drinking_places'
            | 'drug_stores_and_pharmacies'
            | 'drugs_drug_proprietaries_and_druggist_sundries'
            | 'dry_cleaners'
            | 'durable_goods'
            | 'duty_free_stores'
            | 'eating_places_restaurants'
            | 'educational_services'
            | 'electric_razor_stores'
            | 'electric_vehicle_charging'
            | 'electrical_parts_and_equipment'
            | 'electrical_services'
            | 'electronics_repair_shops'
            | 'electronics_stores'
            | 'elementary_secondary_schools'
            | 'emergency_services_gcas_visa_use_only'
            | 'employment_temp_agencies'
            | 'equipment_rental'
            | 'exterminating_services'
            | 'family_clothing_stores'
            | 'fast_food_restaurants'
            | 'financial_institutions'
            | 'fines_government_administrative_entities'
            | 'fireplace_fireplace_screens_and_accessories_stores'
            | 'floor_covering_stores'
            | 'florists'
            | 'florists_supplies_nursery_stock_and_flowers'
            | 'freezer_and_locker_meat_provisioners'
            | 'fuel_dealers_non_automotive'
            | 'funeral_services_crematories'
            | 'furniture_home_furnishings_and_equipment_stores_except_appliances'
            | 'furniture_repair_refinishing'
            | 'furriers_and_fur_shops'
            | 'general_services'
            | 'gift_card_novelty_and_souvenir_shops'
            | 'glass_paint_and_wallpaper_stores'
            | 'glassware_crystal_stores'
            | 'golf_courses_public'
            | 'government_licensed_horse_dog_racing_us_region_only'
            | 'government_licensed_online_casions_online_gambling_us_region_only'
            | 'government_owned_lotteries_non_us_region'
            | 'government_owned_lotteries_us_region_only'
            | 'government_services'
            | 'grocery_stores_supermarkets'
            | 'hardware_equipment_and_supplies'
            | 'hardware_stores'
            | 'health_and_beauty_spas'
            | 'hearing_aids_sales_and_supplies'
            | 'heating_plumbing_a_c'
            | 'hobby_toy_and_game_shops'
            | 'home_supply_warehouse_stores'
            | 'hospitals'
            | 'hotels_motels_and_resorts'
            | 'household_appliance_stores'
            | 'industrial_supplies'
            | 'information_retrieval_services'
            | 'insurance_default'
            | 'insurance_underwriting_premiums'
            | 'intra_company_purchases'
            | 'jewelry_stores_watches_clocks_and_silverware_stores'
            | 'landscaping_services'
            | 'laundries'
            | 'laundry_cleaning_services'
            | 'legal_services_attorneys'
            | 'luggage_and_leather_goods_stores'
            | 'lumber_building_materials_stores'
            | 'manual_cash_disburse'
            | 'marinas_service_and_supplies'
            | 'marketplaces'
            | 'masonry_stonework_and_plaster'
            | 'massage_parlors'
            | 'medical_and_dental_labs'
            | 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies'
            | 'medical_services'
            | 'membership_organizations'
            | 'mens_and_boys_clothing_and_accessories_stores'
            | 'mens_womens_clothing_stores'
            | 'metal_service_centers'
            | 'miscellaneous'
            | 'miscellaneous_apparel_and_accessory_shops'
            | 'miscellaneous_auto_dealers'
            | 'miscellaneous_business_services'
            | 'miscellaneous_food_stores'
            | 'miscellaneous_general_merchandise'
            | 'miscellaneous_general_services'
            | 'miscellaneous_home_furnishing_specialty_stores'
            | 'miscellaneous_publishing_and_printing'
            | 'miscellaneous_recreation_services'
            | 'miscellaneous_repair_shops'
            | 'miscellaneous_specialty_retail'
            | 'mobile_home_dealers'
            | 'motion_picture_theaters'
            | 'motor_freight_carriers_and_trucking'
            | 'motor_homes_dealers'
            | 'motor_vehicle_supplies_and_new_parts'
            | 'motorcycle_shops_and_dealers'
            | 'motorcycle_shops_dealers'
            | 'music_stores_musical_instruments_pianos_and_sheet_music'
            | 'news_dealers_and_newsstands'
            | 'non_fi_money_orders'
            | 'non_fi_stored_value_card_purchase_load'
            | 'nondurable_goods'
            | 'nurseries_lawn_and_garden_supply_stores'
            | 'nursing_personal_care'
            | 'office_and_commercial_furniture'
            | 'opticians_eyeglasses'
            | 'optometrists_ophthalmologist'
            | 'orthopedic_goods_prosthetic_devices'
            | 'osteopaths'
            | 'package_stores_beer_wine_and_liquor'
            | 'paints_varnishes_and_supplies'
            | 'parking_lots_garages'
            | 'passenger_railways'
            | 'pawn_shops'
            | 'pet_shops_pet_food_and_supplies'
            | 'petroleum_and_petroleum_products'
            | 'photo_developing'
            | 'photographic_photocopy_microfilm_equipment_and_supplies'
            | 'photographic_studios'
            | 'picture_video_production'
            | 'piece_goods_notions_and_other_dry_goods'
            | 'plumbing_heating_equipment_and_supplies'
            | 'political_organizations'
            | 'postal_services_government_only'
            | 'precious_stones_and_metals_watches_and_jewelry'
            | 'professional_services'
            | 'public_warehousing_and_storage'
            | 'quick_copy_repro_and_blueprint'
            | 'railroads'
            | 'real_estate_agents_and_managers_rentals'
            | 'record_stores'
            | 'recreational_vehicle_rentals'
            | 'religious_goods_stores'
            | 'religious_organizations'
            | 'roofing_siding_sheet_metal'
            | 'secretarial_support_services'
            | 'security_brokers_dealers'
            | 'service_stations'
            | 'sewing_needlework_fabric_and_piece_goods_stores'
            | 'shoe_repair_hat_cleaning'
            | 'shoe_stores'
            | 'small_appliance_repair'
            | 'snowmobile_dealers'
            | 'special_trade_services'
            | 'specialty_cleaning'
            | 'sporting_goods_stores'
            | 'sporting_recreation_camps'
            | 'sports_and_riding_apparel_stores'
            | 'sports_clubs_fields'
            | 'stamp_and_coin_stores'
            | 'stationary_office_supplies_printing_and_writing_paper'
            | 'stationery_stores_office_and_school_supply_stores'
            | 'swimming_pools_sales'
            | 't_ui_travel_germany'
            | 'tailors_alterations'
            | 'tax_payments_government_agencies'
            | 'tax_preparation_services'
            | 'taxicabs_limousines'
            | 'telecommunication_equipment_and_telephone_sales'
            | 'telecommunication_services'
            | 'telegraph_services'
            | 'tent_and_awning_shops'
            | 'testing_laboratories'
            | 'theatrical_ticket_agencies'
            | 'timeshares'
            | 'tire_retreading_and_repair'
            | 'tolls_bridge_fees'
            | 'tourist_attractions_and_exhibits'
            | 'towing_services'
            | 'trailer_parks_campgrounds'
            | 'transportation_services'
            | 'travel_agencies_tour_operators'
            | 'truck_stop_iteration'
            | 'truck_utility_trailer_rentals'
            | 'typesetting_plate_making_and_related_services'
            | 'typewriter_stores'
            | 'u_s_federal_government_agencies_or_departments'
            | 'uniforms_commercial_clothing'
            | 'used_merchandise_and_secondhand_stores'
            | 'utilities'
            | 'variety_stores'
            | 'veterinary_services'
            | 'video_amusement_game_supplies'
            | 'video_game_arcades'
            | 'video_tape_rental_stores'
            | 'vocational_trade_schools'
            | 'watch_jewelry_repair'
            | 'welding_repair'
            | 'wholesale_clubs'
            | 'wig_and_toupee_stores'
            | 'wires_money_orders'
            | 'womens_accessory_and_specialty_shops'
            | 'womens_ready_to_wear_stores'
            | 'wrecking_and_salvage_yards';

          type BlockedCategory =
            | 'ac_refrigeration_repair'
            | 'accounting_bookkeeping_services'
            | 'advertising_services'
            | 'agricultural_cooperative'
            | 'airlines_air_carriers'
            | 'airports_flying_fields'
            | 'ambulance_services'
            | 'amusement_parks_carnivals'
            | 'antique_reproductions'
            | 'antique_shops'
            | 'aquariums'
            | 'architectural_surveying_services'
            | 'art_dealers_and_galleries'
            | 'artists_supply_and_craft_shops'
            | 'auto_and_home_supply_stores'
            | 'auto_body_repair_shops'
            | 'auto_paint_shops'
            | 'auto_service_shops'
            | 'automated_cash_disburse'
            | 'automated_fuel_dispensers'
            | 'automobile_associations'
            | 'automotive_parts_and_accessories_stores'
            | 'automotive_tire_stores'
            | 'bail_and_bond_payments'
            | 'bakeries'
            | 'bands_orchestras'
            | 'barber_and_beauty_shops'
            | 'betting_casino_gambling'
            | 'bicycle_shops'
            | 'billiard_pool_establishments'
            | 'boat_dealers'
            | 'boat_rentals_and_leases'
            | 'book_stores'
            | 'books_periodicals_and_newspapers'
            | 'bowling_alleys'
            | 'bus_lines'
            | 'business_secretarial_schools'
            | 'buying_shopping_services'
            | 'cable_satellite_and_other_pay_television_and_radio'
            | 'camera_and_photographic_supply_stores'
            | 'candy_nut_and_confectionery_stores'
            | 'car_and_truck_dealers_new_used'
            | 'car_and_truck_dealers_used_only'
            | 'car_rental_agencies'
            | 'car_washes'
            | 'carpentry_services'
            | 'carpet_upholstery_cleaning'
            | 'caterers'
            | 'charitable_and_social_service_organizations_fundraising'
            | 'chemicals_and_allied_products'
            | 'child_care_services'
            | 'childrens_and_infants_wear_stores'
            | 'chiropodists_podiatrists'
            | 'chiropractors'
            | 'cigar_stores_and_stands'
            | 'civic_social_fraternal_associations'
            | 'cleaning_and_maintenance'
            | 'clothing_rental'
            | 'colleges_universities'
            | 'commercial_equipment'
            | 'commercial_footwear'
            | 'commercial_photography_art_and_graphics'
            | 'commuter_transport_and_ferries'
            | 'computer_network_services'
            | 'computer_programming'
            | 'computer_repair'
            | 'computer_software_stores'
            | 'computers_peripherals_and_software'
            | 'concrete_work_services'
            | 'construction_materials'
            | 'consulting_public_relations'
            | 'correspondence_schools'
            | 'cosmetic_stores'
            | 'counseling_services'
            | 'country_clubs'
            | 'courier_services'
            | 'court_costs'
            | 'credit_reporting_agencies'
            | 'cruise_lines'
            | 'dairy_products_stores'
            | 'dance_hall_studios_schools'
            | 'dating_escort_services'
            | 'dentists_orthodontists'
            | 'department_stores'
            | 'detective_agencies'
            | 'digital_goods_applications'
            | 'digital_goods_games'
            | 'digital_goods_large_volume'
            | 'digital_goods_media'
            | 'direct_marketing_catalog_merchant'
            | 'direct_marketing_combination_catalog_and_retail_merchant'
            | 'direct_marketing_inbound_telemarketing'
            | 'direct_marketing_insurance_services'
            | 'direct_marketing_other'
            | 'direct_marketing_outbound_telemarketing'
            | 'direct_marketing_subscription'
            | 'direct_marketing_travel'
            | 'discount_stores'
            | 'doctors'
            | 'door_to_door_sales'
            | 'drapery_window_covering_and_upholstery_stores'
            | 'drinking_places'
            | 'drug_stores_and_pharmacies'
            | 'drugs_drug_proprietaries_and_druggist_sundries'
            | 'dry_cleaners'
            | 'durable_goods'
            | 'duty_free_stores'
            | 'eating_places_restaurants'
            | 'educational_services'
            | 'electric_razor_stores'
            | 'electric_vehicle_charging'
            | 'electrical_parts_and_equipment'
            | 'electrical_services'
            | 'electronics_repair_shops'
            | 'electronics_stores'
            | 'elementary_secondary_schools'
            | 'emergency_services_gcas_visa_use_only'
            | 'employment_temp_agencies'
            | 'equipment_rental'
            | 'exterminating_services'
            | 'family_clothing_stores'
            | 'fast_food_restaurants'
            | 'financial_institutions'
            | 'fines_government_administrative_entities'
            | 'fireplace_fireplace_screens_and_accessories_stores'
            | 'floor_covering_stores'
            | 'florists'
            | 'florists_supplies_nursery_stock_and_flowers'
            | 'freezer_and_locker_meat_provisioners'
            | 'fuel_dealers_non_automotive'
            | 'funeral_services_crematories'
            | 'furniture_home_furnishings_and_equipment_stores_except_appliances'
            | 'furniture_repair_refinishing'
            | 'furriers_and_fur_shops'
            | 'general_services'
            | 'gift_card_novelty_and_souvenir_shops'
            | 'glass_paint_and_wallpaper_stores'
            | 'glassware_crystal_stores'
            | 'golf_courses_public'
            | 'government_licensed_horse_dog_racing_us_region_only'
            | 'government_licensed_online_casions_online_gambling_us_region_only'
            | 'government_owned_lotteries_non_us_region'
            | 'government_owned_lotteries_us_region_only'
            | 'government_services'
            | 'grocery_stores_supermarkets'
            | 'hardware_equipment_and_supplies'
            | 'hardware_stores'
            | 'health_and_beauty_spas'
            | 'hearing_aids_sales_and_supplies'
            | 'heating_plumbing_a_c'
            | 'hobby_toy_and_game_shops'
            | 'home_supply_warehouse_stores'
            | 'hospitals'
            | 'hotels_motels_and_resorts'
            | 'household_appliance_stores'
            | 'industrial_supplies'
            | 'information_retrieval_services'
            | 'insurance_default'
            | 'insurance_underwriting_premiums'
            | 'intra_company_purchases'
            | 'jewelry_stores_watches_clocks_and_silverware_stores'
            | 'landscaping_services'
            | 'laundries'
            | 'laundry_cleaning_services'
            | 'legal_services_attorneys'
            | 'luggage_and_leather_goods_stores'
            | 'lumber_building_materials_stores'
            | 'manual_cash_disburse'
            | 'marinas_service_and_supplies'
            | 'marketplaces'
            | 'masonry_stonework_and_plaster'
            | 'massage_parlors'
            | 'medical_and_dental_labs'
            | 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies'
            | 'medical_services'
            | 'membership_organizations'
            | 'mens_and_boys_clothing_and_accessories_stores'
            | 'mens_womens_clothing_stores'
            | 'metal_service_centers'
            | 'miscellaneous'
            | 'miscellaneous_apparel_and_accessory_shops'
            | 'miscellaneous_auto_dealers'
            | 'miscellaneous_business_services'
            | 'miscellaneous_food_stores'
            | 'miscellaneous_general_merchandise'
            | 'miscellaneous_general_services'
            | 'miscellaneous_home_furnishing_specialty_stores'
            | 'miscellaneous_publishing_and_printing'
            | 'miscellaneous_recreation_services'
            | 'miscellaneous_repair_shops'
            | 'miscellaneous_specialty_retail'
            | 'mobile_home_dealers'
            | 'motion_picture_theaters'
            | 'motor_freight_carriers_and_trucking'
            | 'motor_homes_dealers'
            | 'motor_vehicle_supplies_and_new_parts'
            | 'motorcycle_shops_and_dealers'
            | 'motorcycle_shops_dealers'
            | 'music_stores_musical_instruments_pianos_and_sheet_music'
            | 'news_dealers_and_newsstands'
            | 'non_fi_money_orders'
            | 'non_fi_stored_value_card_purchase_load'
            | 'nondurable_goods'
            | 'nurseries_lawn_and_garden_supply_stores'
            | 'nursing_personal_care'
            | 'office_and_commercial_furniture'
            | 'opticians_eyeglasses'
            | 'optometrists_ophthalmologist'
            | 'orthopedic_goods_prosthetic_devices'
            | 'osteopaths'
            | 'package_stores_beer_wine_and_liquor'
            | 'paints_varnishes_and_supplies'
            | 'parking_lots_garages'
            | 'passenger_railways'
            | 'pawn_shops'
            | 'pet_shops_pet_food_and_supplies'
            | 'petroleum_and_petroleum_products'
            | 'photo_developing'
            | 'photographic_photocopy_microfilm_equipment_and_supplies'
            | 'photographic_studios'
            | 'picture_video_production'
            | 'piece_goods_notions_and_other_dry_goods'
            | 'plumbing_heating_equipment_and_supplies'
            | 'political_organizations'
            | 'postal_services_government_only'
            | 'precious_stones_and_metals_watches_and_jewelry'
            | 'professional_services'
            | 'public_warehousing_and_storage'
            | 'quick_copy_repro_and_blueprint'
            | 'railroads'
            | 'real_estate_agents_and_managers_rentals'
            | 'record_stores'
            | 'recreational_vehicle_rentals'
            | 'religious_goods_stores'
            | 'religious_organizations'
            | 'roofing_siding_sheet_metal'
            | 'secretarial_support_services'
            | 'security_brokers_dealers'
            | 'service_stations'
            | 'sewing_needlework_fabric_and_piece_goods_stores'
            | 'shoe_repair_hat_cleaning'
            | 'shoe_stores'
            | 'small_appliance_repair'
            | 'snowmobile_dealers'
            | 'special_trade_services'
            | 'specialty_cleaning'
            | 'sporting_goods_stores'
            | 'sporting_recreation_camps'
            | 'sports_and_riding_apparel_stores'
            | 'sports_clubs_fields'
            | 'stamp_and_coin_stores'
            | 'stationary_office_supplies_printing_and_writing_paper'
            | 'stationery_stores_office_and_school_supply_stores'
            | 'swimming_pools_sales'
            | 't_ui_travel_germany'
            | 'tailors_alterations'
            | 'tax_payments_government_agencies'
            | 'tax_preparation_services'
            | 'taxicabs_limousines'
            | 'telecommunication_equipment_and_telephone_sales'
            | 'telecommunication_services'
            | 'telegraph_services'
            | 'tent_and_awning_shops'
            | 'testing_laboratories'
            | 'theatrical_ticket_agencies'
            | 'timeshares'
            | 'tire_retreading_and_repair'
            | 'tolls_bridge_fees'
            | 'tourist_attractions_and_exhibits'
            | 'towing_services'
            | 'trailer_parks_campgrounds'
            | 'transportation_services'
            | 'travel_agencies_tour_operators'
            | 'truck_stop_iteration'
            | 'truck_utility_trailer_rentals'
            | 'typesetting_plate_making_and_related_services'
            | 'typewriter_stores'
            | 'u_s_federal_government_agencies_or_departments'
            | 'uniforms_commercial_clothing'
            | 'used_merchandise_and_secondhand_stores'
            | 'utilities'
            | 'variety_stores'
            | 'veterinary_services'
            | 'video_amusement_game_supplies'
            | 'video_game_arcades'
            | 'video_tape_rental_stores'
            | 'vocational_trade_schools'
            | 'watch_jewelry_repair'
            | 'welding_repair'
            | 'wholesale_clubs'
            | 'wig_and_toupee_stores'
            | 'wires_money_orders'
            | 'womens_accessory_and_specialty_shops'
            | 'womens_ready_to_wear_stores'
            | 'wrecking_and_salvage_yards';

          interface SpendingLimit {
            /**
             * Maximum amount allowed to spend per interval. This amount is in the card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
             */
            amount: number;

            /**
             * Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) this limit applies to. Omitting this field will apply the limit to all categories.
             */
            categories: Array<SpendingLimit.Category> | null;

            /**
             * Interval (or event) to which the amount applies.
             */
            interval: SpendingLimit.Interval;
          }

          namespace SpendingLimit {
            type Category =
              | 'ac_refrigeration_repair'
              | 'accounting_bookkeeping_services'
              | 'advertising_services'
              | 'agricultural_cooperative'
              | 'airlines_air_carriers'
              | 'airports_flying_fields'
              | 'ambulance_services'
              | 'amusement_parks_carnivals'
              | 'antique_reproductions'
              | 'antique_shops'
              | 'aquariums'
              | 'architectural_surveying_services'
              | 'art_dealers_and_galleries'
              | 'artists_supply_and_craft_shops'
              | 'auto_and_home_supply_stores'
              | 'auto_body_repair_shops'
              | 'auto_paint_shops'
              | 'auto_service_shops'
              | 'automated_cash_disburse'
              | 'automated_fuel_dispensers'
              | 'automobile_associations'
              | 'automotive_parts_and_accessories_stores'
              | 'automotive_tire_stores'
              | 'bail_and_bond_payments'
              | 'bakeries'
              | 'bands_orchestras'
              | 'barber_and_beauty_shops'
              | 'betting_casino_gambling'
              | 'bicycle_shops'
              | 'billiard_pool_establishments'
              | 'boat_dealers'
              | 'boat_rentals_and_leases'
              | 'book_stores'
              | 'books_periodicals_and_newspapers'
              | 'bowling_alleys'
              | 'bus_lines'
              | 'business_secretarial_schools'
              | 'buying_shopping_services'
              | 'cable_satellite_and_other_pay_television_and_radio'
              | 'camera_and_photographic_supply_stores'
              | 'candy_nut_and_confectionery_stores'
              | 'car_and_truck_dealers_new_used'
              | 'car_and_truck_dealers_used_only'
              | 'car_rental_agencies'
              | 'car_washes'
              | 'carpentry_services'
              | 'carpet_upholstery_cleaning'
              | 'caterers'
              | 'charitable_and_social_service_organizations_fundraising'
              | 'chemicals_and_allied_products'
              | 'child_care_services'
              | 'childrens_and_infants_wear_stores'
              | 'chiropodists_podiatrists'
              | 'chiropractors'
              | 'cigar_stores_and_stands'
              | 'civic_social_fraternal_associations'
              | 'cleaning_and_maintenance'
              | 'clothing_rental'
              | 'colleges_universities'
              | 'commercial_equipment'
              | 'commercial_footwear'
              | 'commercial_photography_art_and_graphics'
              | 'commuter_transport_and_ferries'
              | 'computer_network_services'
              | 'computer_programming'
              | 'computer_repair'
              | 'computer_software_stores'
              | 'computers_peripherals_and_software'
              | 'concrete_work_services'
              | 'construction_materials'
              | 'consulting_public_relations'
              | 'correspondence_schools'
              | 'cosmetic_stores'
              | 'counseling_services'
              | 'country_clubs'
              | 'courier_services'
              | 'court_costs'
              | 'credit_reporting_agencies'
              | 'cruise_lines'
              | 'dairy_products_stores'
              | 'dance_hall_studios_schools'
              | 'dating_escort_services'
              | 'dentists_orthodontists'
              | 'department_stores'
              | 'detective_agencies'
              | 'digital_goods_applications'
              | 'digital_goods_games'
              | 'digital_goods_large_volume'
              | 'digital_goods_media'
              | 'direct_marketing_catalog_merchant'
              | 'direct_marketing_combination_catalog_and_retail_merchant'
              | 'direct_marketing_inbound_telemarketing'
              | 'direct_marketing_insurance_services'
              | 'direct_marketing_other'
              | 'direct_marketing_outbound_telemarketing'
              | 'direct_marketing_subscription'
              | 'direct_marketing_travel'
              | 'discount_stores'
              | 'doctors'
              | 'door_to_door_sales'
              | 'drapery_window_covering_and_upholstery_stores'
              | 'drinking_places'
              | 'drug_stores_and_pharmacies'
              | 'drugs_drug_proprietaries_and_druggist_sundries'
              | 'dry_cleaners'
              | 'durable_goods'
              | 'duty_free_stores'
              | 'eating_places_restaurants'
              | 'educational_services'
              | 'electric_razor_stores'
              | 'electric_vehicle_charging'
              | 'electrical_parts_and_equipment'
              | 'electrical_services'
              | 'electronics_repair_shops'
              | 'electronics_stores'
              | 'elementary_secondary_schools'
              | 'emergency_services_gcas_visa_use_only'
              | 'employment_temp_agencies'
              | 'equipment_rental'
              | 'exterminating_services'
              | 'family_clothing_stores'
              | 'fast_food_restaurants'
              | 'financial_institutions'
              | 'fines_government_administrative_entities'
              | 'fireplace_fireplace_screens_and_accessories_stores'
              | 'floor_covering_stores'
              | 'florists'
              | 'florists_supplies_nursery_stock_and_flowers'
              | 'freezer_and_locker_meat_provisioners'
              | 'fuel_dealers_non_automotive'
              | 'funeral_services_crematories'
              | 'furniture_home_furnishings_and_equipment_stores_except_appliances'
              | 'furniture_repair_refinishing'
              | 'furriers_and_fur_shops'
              | 'general_services'
              | 'gift_card_novelty_and_souvenir_shops'
              | 'glass_paint_and_wallpaper_stores'
              | 'glassware_crystal_stores'
              | 'golf_courses_public'
              | 'government_licensed_horse_dog_racing_us_region_only'
              | 'government_licensed_online_casions_online_gambling_us_region_only'
              | 'government_owned_lotteries_non_us_region'
              | 'government_owned_lotteries_us_region_only'
              | 'government_services'
              | 'grocery_stores_supermarkets'
              | 'hardware_equipment_and_supplies'
              | 'hardware_stores'
              | 'health_and_beauty_spas'
              | 'hearing_aids_sales_and_supplies'
              | 'heating_plumbing_a_c'
              | 'hobby_toy_and_game_shops'
              | 'home_supply_warehouse_stores'
              | 'hospitals'
              | 'hotels_motels_and_resorts'
              | 'household_appliance_stores'
              | 'industrial_supplies'
              | 'information_retrieval_services'
              | 'insurance_default'
              | 'insurance_underwriting_premiums'
              | 'intra_company_purchases'
              | 'jewelry_stores_watches_clocks_and_silverware_stores'
              | 'landscaping_services'
              | 'laundries'
              | 'laundry_cleaning_services'
              | 'legal_services_attorneys'
              | 'luggage_and_leather_goods_stores'
              | 'lumber_building_materials_stores'
              | 'manual_cash_disburse'
              | 'marinas_service_and_supplies'
              | 'marketplaces'
              | 'masonry_stonework_and_plaster'
              | 'massage_parlors'
              | 'medical_and_dental_labs'
              | 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies'
              | 'medical_services'
              | 'membership_organizations'
              | 'mens_and_boys_clothing_and_accessories_stores'
              | 'mens_womens_clothing_stores'
              | 'metal_service_centers'
              | 'miscellaneous'
              | 'miscellaneous_apparel_and_accessory_shops'
              | 'miscellaneous_auto_dealers'
              | 'miscellaneous_business_services'
              | 'miscellaneous_food_stores'
              | 'miscellaneous_general_merchandise'
              | 'miscellaneous_general_services'
              | 'miscellaneous_home_furnishing_specialty_stores'
              | 'miscellaneous_publishing_and_printing'
              | 'miscellaneous_recreation_services'
              | 'miscellaneous_repair_shops'
              | 'miscellaneous_specialty_retail'
              | 'mobile_home_dealers'
              | 'motion_picture_theaters'
              | 'motor_freight_carriers_and_trucking'
              | 'motor_homes_dealers'
              | 'motor_vehicle_supplies_and_new_parts'
              | 'motorcycle_shops_and_dealers'
              | 'motorcycle_shops_dealers'
              | 'music_stores_musical_instruments_pianos_and_sheet_music'
              | 'news_dealers_and_newsstands'
              | 'non_fi_money_orders'
              | 'non_fi_stored_value_card_purchase_load'
              | 'nondurable_goods'
              | 'nurseries_lawn_and_garden_supply_stores'
              | 'nursing_personal_care'
              | 'office_and_commercial_furniture'
              | 'opticians_eyeglasses'
              | 'optometrists_ophthalmologist'
              | 'orthopedic_goods_prosthetic_devices'
              | 'osteopaths'
              | 'package_stores_beer_wine_and_liquor'
              | 'paints_varnishes_and_supplies'
              | 'parking_lots_garages'
              | 'passenger_railways'
              | 'pawn_shops'
              | 'pet_shops_pet_food_and_supplies'
              | 'petroleum_and_petroleum_products'
              | 'photo_developing'
              | 'photographic_photocopy_microfilm_equipment_and_supplies'
              | 'photographic_studios'
              | 'picture_video_production'
              | 'piece_goods_notions_and_other_dry_goods'
              | 'plumbing_heating_equipment_and_supplies'
              | 'political_organizations'
              | 'postal_services_government_only'
              | 'precious_stones_and_metals_watches_and_jewelry'
              | 'professional_services'
              | 'public_warehousing_and_storage'
              | 'quick_copy_repro_and_blueprint'
              | 'railroads'
              | 'real_estate_agents_and_managers_rentals'
              | 'record_stores'
              | 'recreational_vehicle_rentals'
              | 'religious_goods_stores'
              | 'religious_organizations'
              | 'roofing_siding_sheet_metal'
              | 'secretarial_support_services'
              | 'security_brokers_dealers'
              | 'service_stations'
              | 'sewing_needlework_fabric_and_piece_goods_stores'
              | 'shoe_repair_hat_cleaning'
              | 'shoe_stores'
              | 'small_appliance_repair'
              | 'snowmobile_dealers'
              | 'special_trade_services'
              | 'specialty_cleaning'
              | 'sporting_goods_stores'
              | 'sporting_recreation_camps'
              | 'sports_and_riding_apparel_stores'
              | 'sports_clubs_fields'
              | 'stamp_and_coin_stores'
              | 'stationary_office_supplies_printing_and_writing_paper'
              | 'stationery_stores_office_and_school_supply_stores'
              | 'swimming_pools_sales'
              | 't_ui_travel_germany'
              | 'tailors_alterations'
              | 'tax_payments_government_agencies'
              | 'tax_preparation_services'
              | 'taxicabs_limousines'
              | 'telecommunication_equipment_and_telephone_sales'
              | 'telecommunication_services'
              | 'telegraph_services'
              | 'tent_and_awning_shops'
              | 'testing_laboratories'
              | 'theatrical_ticket_agencies'
              | 'timeshares'
              | 'tire_retreading_and_repair'
              | 'tolls_bridge_fees'
              | 'tourist_attractions_and_exhibits'
              | 'towing_services'
              | 'trailer_parks_campgrounds'
              | 'transportation_services'
              | 'travel_agencies_tour_operators'
              | 'truck_stop_iteration'
              | 'truck_utility_trailer_rentals'
              | 'typesetting_plate_making_and_related_services'
              | 'typewriter_stores'
              | 'u_s_federal_government_agencies_or_departments'
              | 'uniforms_commercial_clothing'
              | 'used_merchandise_and_secondhand_stores'
              | 'utilities'
              | 'variety_stores'
              | 'veterinary_services'
              | 'video_amusement_game_supplies'
              | 'video_game_arcades'
              | 'video_tape_rental_stores'
              | 'vocational_trade_schools'
              | 'watch_jewelry_repair'
              | 'welding_repair'
              | 'wholesale_clubs'
              | 'wig_and_toupee_stores'
              | 'wires_money_orders'
              | 'womens_accessory_and_specialty_shops'
              | 'womens_ready_to_wear_stores'
              | 'wrecking_and_salvage_yards';

            type Interval =
              | 'all_time'
              | 'daily'
              | 'monthly'
              | 'per_authorization'
              | 'weekly'
              | 'yearly';
          }
        }

        type Status = 'active' | 'blocked' | 'inactive';

        type Type = 'company' | 'individual';
      }
    }
  }
}
