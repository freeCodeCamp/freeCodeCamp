// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace TestHelpers {
      namespace Issuing {
        interface AuthorizationCreateParams {
          /**
           * The total amount to attempt to authorize. This amount is in the provided currency, or defaults to the card's currency, and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
           */
          amount: number;

          /**
           * Card associated with this authorization.
           */
          card: string;

          /**
           * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
           */
          amount_details?: AuthorizationCreateParams.AmountDetails;

          /**
           * How the card details were provided. Defaults to online.
           */
          authorization_method?: AuthorizationCreateParams.AuthorizationMethod;

          /**
           * The currency of the authorization. If not provided, defaults to the currency of the card. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency?: string;

          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;

          /**
           * Fleet-specific information for authorizations using Fleet cards.
           */
          fleet?: AuthorizationCreateParams.Fleet;

          /**
           * Information about fuel that was purchased with this transaction.
           */
          fuel?: AuthorizationCreateParams.Fuel;

          /**
           * If set `true`, you may provide [amount](https://stripe.com/docs/api/issuing/authorizations/approve#approve_issuing_authorization-amount) to control how much to hold for the authorization.
           */
          is_amount_controllable?: boolean;

          /**
           * Details about the seller (grocery store, e-commerce website, etc.) where the card authorization happened.
           */
          merchant_data?: AuthorizationCreateParams.MerchantData;

          /**
           * Details about the authorization, such as identifiers, set by the card network.
           */
          network_data?: AuthorizationCreateParams.NetworkData;

          /**
           * Verifications that Stripe performed on information that the cardholder provided to the merchant.
           */
          verification_data?: AuthorizationCreateParams.VerificationData;

          /**
           * The digital wallet used for this transaction. One of `apple_pay`, `google_pay`, or `samsung_pay`. Will populate as `null` when no digital wallet was utilized.
           */
          wallet?: AuthorizationCreateParams.Wallet;
        }

        namespace AuthorizationCreateParams {
          interface AmountDetails {
            /**
             * The ATM withdrawal fee.
             */
            atm_fee?: number;

            /**
             * The amount of cash requested by the cardholder.
             */
            cashback_amount?: number;
          }

          type AuthorizationMethod =
            | 'chip'
            | 'contactless'
            | 'keyed_in'
            | 'online'
            | 'swipe';

          interface Fleet {
            /**
             * Answers to prompts presented to the cardholder at the point of sale. Prompted fields vary depending on the configuration of your physical fleet cards. Typical points of sale support only numeric entry.
             */
            cardholder_prompt_data?: Fleet.CardholderPromptData;

            /**
             * The type of purchase. One of `fuel_purchase`, `non_fuel_purchase`, or `fuel_and_non_fuel_purchase`.
             */
            purchase_type?: Fleet.PurchaseType;

            /**
             * More information about the total amount. This information is not guaranteed to be accurate as some merchants may provide unreliable data.
             */
            reported_breakdown?: Fleet.ReportedBreakdown;

            /**
             * The type of fuel service. One of `non_fuel_transaction`, `full_service`, or `self_service`.
             */
            service_type?: Fleet.ServiceType;
          }

          namespace Fleet {
            interface CardholderPromptData {
              /**
               * Driver ID.
               */
              driver_id?: string;

              /**
               * Odometer reading.
               */
              odometer?: number;

              /**
               * An alphanumeric ID. This field is used when a vehicle ID, driver ID, or generic ID is entered by the cardholder, but the merchant or card network did not specify the prompt type.
               */
              unspecified_id?: string;

              /**
               * User ID.
               */
              user_id?: string;

              /**
               * Vehicle number.
               */
              vehicle_number?: string;
            }

            type PurchaseType =
              | 'fuel_and_non_fuel_purchase'
              | 'fuel_purchase'
              | 'non_fuel_purchase';

            interface ReportedBreakdown {
              /**
               * Breakdown of fuel portion of the purchase.
               */
              fuel?: ReportedBreakdown.Fuel;

              /**
               * Breakdown of non-fuel portion of the purchase.
               */
              non_fuel?: ReportedBreakdown.NonFuel;

              /**
               * Information about tax included in this transaction.
               */
              tax?: ReportedBreakdown.Tax;
            }

            namespace ReportedBreakdown {
              interface Fuel {
                /**
                 * Gross fuel amount that should equal Fuel Volume multipled by Fuel Unit Cost, inclusive of taxes.
                 */
                gross_amount_decimal?: string;
              }

              interface NonFuel {
                /**
                 * Gross non-fuel amount that should equal the sum of the line items, inclusive of taxes.
                 */
                gross_amount_decimal?: string;
              }

              interface Tax {
                /**
                 * Amount of state or provincial Sales Tax included in the transaction amount. Null if not reported by merchant or not subject to tax.
                 */
                local_amount_decimal?: string;

                /**
                 * Amount of national Sales Tax or VAT included in the transaction amount. Null if not reported by merchant or not subject to tax.
                 */
                national_amount_decimal?: string;
              }
            }

            type ServiceType =
              | 'full_service'
              | 'non_fuel_transaction'
              | 'self_service';
          }

          interface Fuel {
            /**
             * [Conexxus Payment System Product Code](https://www.conexxus.org/conexxus-payment-system-product-codes) identifying the primary fuel product purchased.
             */
            industry_product_code?: string;

            /**
             * The quantity of `unit`s of fuel that was dispensed, represented as a decimal string with at most 12 decimal places.
             */
            quantity_decimal?: string;

            /**
             * The type of fuel that was purchased. One of `diesel`, `unleaded_plus`, `unleaded_regular`, `unleaded_super`, or `other`.
             */
            type?: Fuel.Type;

            /**
             * The units for `quantity_decimal`. One of `charging_minute`, `imperial_gallon`, `kilogram`, `kilowatt_hour`, `liter`, `pound`, `us_gallon`, or `other`.
             */
            unit?: Fuel.Unit;

            /**
             * The cost in cents per each unit of fuel, represented as a decimal string with at most 12 decimal places.
             */
            unit_cost_decimal?: string;
          }

          namespace Fuel {
            type Type =
              | 'diesel'
              | 'other'
              | 'unleaded_plus'
              | 'unleaded_regular'
              | 'unleaded_super';

            type Unit =
              | 'charging_minute'
              | 'imperial_gallon'
              | 'kilogram'
              | 'kilowatt_hour'
              | 'liter'
              | 'other'
              | 'pound'
              | 'us_gallon';
          }

          interface MerchantData {
            /**
             * A categorization of the seller's type of business. See our [merchant categories guide](https://stripe.com/docs/issuing/merchant-categories) for a list of possible values.
             */
            category?: MerchantData.Category;

            /**
             * City where the seller is located
             */
            city?: string;

            /**
             * Country where the seller is located
             */
            country?: string;

            /**
             * Name of the seller
             */
            name?: string;

            /**
             * Identifier assigned to the seller by the card network. Different card networks may assign different network_id fields to the same merchant.
             */
            network_id?: string;

            /**
             * Postal code where the seller is located
             */
            postal_code?: string;

            /**
             * State where the seller is located
             */
            state?: string;

            /**
             * An ID assigned by the seller to the location of the sale.
             */
            terminal_id?: string;

            /**
             * URL provided by the merchant on a 3DS request
             */
            url?: string;
          }

          namespace MerchantData {
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
          }

          interface NetworkData {
            /**
             * Identifier assigned to the acquirer by the card network.
             */
            acquiring_institution_id?: string;
          }

          interface VerificationData {
            /**
             * Whether the cardholder provided an address first line and if it matched the cardholder's `billing.address.line1`.
             */
            address_line1_check?: VerificationData.AddressLine1Check;

            /**
             * Whether the cardholder provided a postal code and if it matched the cardholder's `billing.address.postal_code`.
             */
            address_postal_code_check?: VerificationData.AddressPostalCodeCheck;

            /**
             * The exemption applied to this authorization.
             */
            authentication_exemption?: VerificationData.AuthenticationExemption;

            /**
             * Whether the cardholder provided a CVC and if it matched Stripe's record.
             */
            cvc_check?: VerificationData.CvcCheck;

            /**
             * Whether the cardholder provided an expiry date and if it matched Stripe's record.
             */
            expiry_check?: VerificationData.ExpiryCheck;

            /**
             * 3D Secure details.
             */
            three_d_secure?: VerificationData.ThreeDSecure;
          }

          namespace VerificationData {
            type AddressLine1Check = 'match' | 'mismatch' | 'not_provided';

            type AddressPostalCodeCheck = 'match' | 'mismatch' | 'not_provided';

            interface AuthenticationExemption {
              /**
               * The entity that requested the exemption, either the acquiring merchant or the Issuing user.
               */
              claimed_by: AuthenticationExemption.ClaimedBy;

              /**
               * The specific exemption claimed for this authorization.
               */
              type: AuthenticationExemption.Type;
            }

            namespace AuthenticationExemption {
              type ClaimedBy = 'acquirer' | 'issuer';

              type Type =
                | 'low_value_transaction'
                | 'transaction_risk_analysis'
                | 'unknown';
            }

            type CvcCheck = 'match' | 'mismatch' | 'not_provided';

            type ExpiryCheck = 'match' | 'mismatch' | 'not_provided';

            interface ThreeDSecure {
              /**
               * The outcome of the 3D Secure authentication request.
               */
              result: ThreeDSecure.Result;
            }

            namespace ThreeDSecure {
              type Result =
                | 'attempt_acknowledged'
                | 'authenticated'
                | 'failed'
                | 'required';
            }
          }

          type Wallet = 'apple_pay' | 'google_pay' | 'samsung_pay';
        }
      }

      namespace Issuing {
        interface AuthorizationCaptureParams {
          /**
           * The amount to capture from the authorization. If not provided, the full amount of the authorization will be captured. This amount is in the authorization currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
           */
          capture_amount?: number;

          /**
           * Whether to close the authorization after capture. Defaults to true. Set to false to enable multi-capture flows.
           */
          close_authorization?: boolean;

          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;

          /**
           * Additional purchase information that is optionally provided by the merchant.
           */
          purchase_details?: AuthorizationCaptureParams.PurchaseDetails;
        }

        namespace AuthorizationCaptureParams {
          interface PurchaseDetails {
            /**
             * Fleet-specific information for transactions using Fleet cards.
             */
            fleet?: PurchaseDetails.Fleet;

            /**
             * Information about the flight that was purchased with this transaction.
             */
            flight?: PurchaseDetails.Flight;

            /**
             * Information about fuel that was purchased with this transaction.
             */
            fuel?: PurchaseDetails.Fuel;

            /**
             * Information about lodging that was purchased with this transaction.
             */
            lodging?: PurchaseDetails.Lodging;

            /**
             * The line items in the purchase.
             */
            receipt?: Array<PurchaseDetails.Receipt>;

            /**
             * A merchant-specific order number.
             */
            reference?: string;
          }

          namespace PurchaseDetails {
            interface Fleet {
              /**
               * Answers to prompts presented to the cardholder at the point of sale. Prompted fields vary depending on the configuration of your physical fleet cards. Typical points of sale support only numeric entry.
               */
              cardholder_prompt_data?: Fleet.CardholderPromptData;

              /**
               * The type of purchase. One of `fuel_purchase`, `non_fuel_purchase`, or `fuel_and_non_fuel_purchase`.
               */
              purchase_type?: Fleet.PurchaseType;

              /**
               * More information about the total amount. This information is not guaranteed to be accurate as some merchants may provide unreliable data.
               */
              reported_breakdown?: Fleet.ReportedBreakdown;

              /**
               * The type of fuel service. One of `non_fuel_transaction`, `full_service`, or `self_service`.
               */
              service_type?: Fleet.ServiceType;
            }

            namespace Fleet {
              interface CardholderPromptData {
                /**
                 * Driver ID.
                 */
                driver_id?: string;

                /**
                 * Odometer reading.
                 */
                odometer?: number;

                /**
                 * An alphanumeric ID. This field is used when a vehicle ID, driver ID, or generic ID is entered by the cardholder, but the merchant or card network did not specify the prompt type.
                 */
                unspecified_id?: string;

                /**
                 * User ID.
                 */
                user_id?: string;

                /**
                 * Vehicle number.
                 */
                vehicle_number?: string;
              }

              type PurchaseType =
                | 'fuel_and_non_fuel_purchase'
                | 'fuel_purchase'
                | 'non_fuel_purchase';

              interface ReportedBreakdown {
                /**
                 * Breakdown of fuel portion of the purchase.
                 */
                fuel?: ReportedBreakdown.Fuel;

                /**
                 * Breakdown of non-fuel portion of the purchase.
                 */
                non_fuel?: ReportedBreakdown.NonFuel;

                /**
                 * Information about tax included in this transaction.
                 */
                tax?: ReportedBreakdown.Tax;
              }

              namespace ReportedBreakdown {
                interface Fuel {
                  /**
                   * Gross fuel amount that should equal Fuel Volume multipled by Fuel Unit Cost, inclusive of taxes.
                   */
                  gross_amount_decimal?: string;
                }

                interface NonFuel {
                  /**
                   * Gross non-fuel amount that should equal the sum of the line items, inclusive of taxes.
                   */
                  gross_amount_decimal?: string;
                }

                interface Tax {
                  /**
                   * Amount of state or provincial Sales Tax included in the transaction amount. Null if not reported by merchant or not subject to tax.
                   */
                  local_amount_decimal?: string;

                  /**
                   * Amount of national Sales Tax or VAT included in the transaction amount. Null if not reported by merchant or not subject to tax.
                   */
                  national_amount_decimal?: string;
                }
              }

              type ServiceType =
                | 'full_service'
                | 'non_fuel_transaction'
                | 'self_service';
            }

            interface Flight {
              /**
               * The time that the flight departed.
               */
              departure_at?: number;

              /**
               * The name of the passenger.
               */
              passenger_name?: string;

              /**
               * Whether the ticket is refundable.
               */
              refundable?: boolean;

              /**
               * The legs of the trip.
               */
              segments?: Array<Flight.Segment>;

              /**
               * The travel agency that issued the ticket.
               */
              travel_agency?: string;
            }

            namespace Flight {
              interface Segment {
                /**
                 * The three-letter IATA airport code of the flight's destination.
                 */
                arrival_airport_code?: string;

                /**
                 * The airline carrier code.
                 */
                carrier?: string;

                /**
                 * The three-letter IATA airport code that the flight departed from.
                 */
                departure_airport_code?: string;

                /**
                 * The flight number.
                 */
                flight_number?: string;

                /**
                 * The flight's service class.
                 */
                service_class?: string;

                /**
                 * Whether a stopover is allowed on this flight.
                 */
                stopover_allowed?: boolean;
              }
            }

            interface Fuel {
              /**
               * [Conexxus Payment System Product Code](https://www.conexxus.org/conexxus-payment-system-product-codes) identifying the primary fuel product purchased.
               */
              industry_product_code?: string;

              /**
               * The quantity of `unit`s of fuel that was dispensed, represented as a decimal string with at most 12 decimal places.
               */
              quantity_decimal?: string;

              /**
               * The type of fuel that was purchased. One of `diesel`, `unleaded_plus`, `unleaded_regular`, `unleaded_super`, or `other`.
               */
              type?: Fuel.Type;

              /**
               * The units for `quantity_decimal`. One of `charging_minute`, `imperial_gallon`, `kilogram`, `kilowatt_hour`, `liter`, `pound`, `us_gallon`, or `other`.
               */
              unit?: Fuel.Unit;

              /**
               * The cost in cents per each unit of fuel, represented as a decimal string with at most 12 decimal places.
               */
              unit_cost_decimal?: string;
            }

            namespace Fuel {
              type Type =
                | 'diesel'
                | 'other'
                | 'unleaded_plus'
                | 'unleaded_regular'
                | 'unleaded_super';

              type Unit =
                | 'charging_minute'
                | 'imperial_gallon'
                | 'kilogram'
                | 'kilowatt_hour'
                | 'liter'
                | 'other'
                | 'pound'
                | 'us_gallon';
            }

            interface Lodging {
              /**
               * The time of checking into the lodging.
               */
              check_in_at?: number;

              /**
               * The number of nights stayed at the lodging.
               */
              nights?: number;
            }

            interface Receipt {
              description?: string;

              quantity?: string;

              total?: number;

              unit_cost?: number;
            }
          }
        }
      }

      namespace Issuing {
        interface AuthorizationExpireParams {
          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;
        }
      }

      namespace Issuing {
        interface AuthorizationFinalizeAmountParams {
          /**
           * The final authorization amount that will be captured by the merchant. This amount is in the authorization currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
           */
          final_amount: number;

          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;

          /**
           * Fleet-specific information for authorizations using Fleet cards.
           */
          fleet?: AuthorizationFinalizeAmountParams.Fleet;

          /**
           * Information about fuel that was purchased with this transaction.
           */
          fuel?: AuthorizationFinalizeAmountParams.Fuel;
        }

        namespace AuthorizationFinalizeAmountParams {
          interface Fleet {
            /**
             * Answers to prompts presented to the cardholder at the point of sale. Prompted fields vary depending on the configuration of your physical fleet cards. Typical points of sale support only numeric entry.
             */
            cardholder_prompt_data?: Fleet.CardholderPromptData;

            /**
             * The type of purchase. One of `fuel_purchase`, `non_fuel_purchase`, or `fuel_and_non_fuel_purchase`.
             */
            purchase_type?: Fleet.PurchaseType;

            /**
             * More information about the total amount. This information is not guaranteed to be accurate as some merchants may provide unreliable data.
             */
            reported_breakdown?: Fleet.ReportedBreakdown;

            /**
             * The type of fuel service. One of `non_fuel_transaction`, `full_service`, or `self_service`.
             */
            service_type?: Fleet.ServiceType;
          }

          namespace Fleet {
            interface CardholderPromptData {
              /**
               * Driver ID.
               */
              driver_id?: string;

              /**
               * Odometer reading.
               */
              odometer?: number;

              /**
               * An alphanumeric ID. This field is used when a vehicle ID, driver ID, or generic ID is entered by the cardholder, but the merchant or card network did not specify the prompt type.
               */
              unspecified_id?: string;

              /**
               * User ID.
               */
              user_id?: string;

              /**
               * Vehicle number.
               */
              vehicle_number?: string;
            }

            type PurchaseType =
              | 'fuel_and_non_fuel_purchase'
              | 'fuel_purchase'
              | 'non_fuel_purchase';

            interface ReportedBreakdown {
              /**
               * Breakdown of fuel portion of the purchase.
               */
              fuel?: ReportedBreakdown.Fuel;

              /**
               * Breakdown of non-fuel portion of the purchase.
               */
              non_fuel?: ReportedBreakdown.NonFuel;

              /**
               * Information about tax included in this transaction.
               */
              tax?: ReportedBreakdown.Tax;
            }

            namespace ReportedBreakdown {
              interface Fuel {
                /**
                 * Gross fuel amount that should equal Fuel Volume multipled by Fuel Unit Cost, inclusive of taxes.
                 */
                gross_amount_decimal?: string;
              }

              interface NonFuel {
                /**
                 * Gross non-fuel amount that should equal the sum of the line items, inclusive of taxes.
                 */
                gross_amount_decimal?: string;
              }

              interface Tax {
                /**
                 * Amount of state or provincial Sales Tax included in the transaction amount. Null if not reported by merchant or not subject to tax.
                 */
                local_amount_decimal?: string;

                /**
                 * Amount of national Sales Tax or VAT included in the transaction amount. Null if not reported by merchant or not subject to tax.
                 */
                national_amount_decimal?: string;
              }
            }

            type ServiceType =
              | 'full_service'
              | 'non_fuel_transaction'
              | 'self_service';
          }

          interface Fuel {
            /**
             * [Conexxus Payment System Product Code](https://www.conexxus.org/conexxus-payment-system-product-codes) identifying the primary fuel product purchased.
             */
            industry_product_code?: string;

            /**
             * The quantity of `unit`s of fuel that was dispensed, represented as a decimal string with at most 12 decimal places.
             */
            quantity_decimal?: string;

            /**
             * The type of fuel that was purchased. One of `diesel`, `unleaded_plus`, `unleaded_regular`, `unleaded_super`, or `other`.
             */
            type?: Fuel.Type;

            /**
             * The units for `quantity_decimal`. One of `charging_minute`, `imperial_gallon`, `kilogram`, `kilowatt_hour`, `liter`, `pound`, `us_gallon`, or `other`.
             */
            unit?: Fuel.Unit;

            /**
             * The cost in cents per each unit of fuel, represented as a decimal string with at most 12 decimal places.
             */
            unit_cost_decimal?: string;
          }

          namespace Fuel {
            type Type =
              | 'diesel'
              | 'other'
              | 'unleaded_plus'
              | 'unleaded_regular'
              | 'unleaded_super';

            type Unit =
              | 'charging_minute'
              | 'imperial_gallon'
              | 'kilogram'
              | 'kilowatt_hour'
              | 'liter'
              | 'other'
              | 'pound'
              | 'us_gallon';
          }
        }
      }

      namespace Issuing {
        interface AuthorizationIncrementParams {
          /**
           * The amount to increment the authorization by. This amount is in the authorization currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
           */
          increment_amount: number;

          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;

          /**
           * If set `true`, you may provide [amount](https://stripe.com/docs/api/issuing/authorizations/approve#approve_issuing_authorization-amount) to control how much to hold for the authorization.
           */
          is_amount_controllable?: boolean;
        }
      }

      namespace Issuing {
        interface AuthorizationReverseParams {
          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;

          /**
           * The amount to reverse from the authorization. If not provided, the full amount of the authorization will be reversed. This amount is in the authorization currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
           */
          reverse_amount?: number;
        }
      }

      namespace Issuing {
        class AuthorizationsResource {
          /**
           * Create a test-mode authorization.
           */
          create(
            params: AuthorizationCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Issuing.Authorization>>;

          /**
           * Capture a test-mode authorization.
           */
          capture(
            id: string,
            params?: AuthorizationCaptureParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Issuing.Authorization>>;
          capture(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Issuing.Authorization>>;

          /**
           * Expire a test-mode Authorization.
           */
          expire(
            id: string,
            params?: AuthorizationExpireParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Issuing.Authorization>>;
          expire(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Issuing.Authorization>>;

          /**
           * Finalize the amount on an Authorization prior to capture, when the initial authorization was for an estimated amount.
           */
          finalizeAmount(
            id: string,
            params: AuthorizationFinalizeAmountParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Issuing.Authorization>>;

          /**
           * Increment a test-mode Authorization.
           */
          increment(
            id: string,
            params: AuthorizationIncrementParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Issuing.Authorization>>;

          /**
           * Reverse a test-mode Authorization.
           */
          reverse(
            id: string,
            params?: AuthorizationReverseParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Issuing.Authorization>>;
          reverse(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Issuing.Authorization>>;
        }
      }
    }
  }
}
