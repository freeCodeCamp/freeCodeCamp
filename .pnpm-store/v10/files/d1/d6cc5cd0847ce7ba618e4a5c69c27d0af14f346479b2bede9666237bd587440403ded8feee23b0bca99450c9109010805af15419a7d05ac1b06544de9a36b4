/**
 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 */
export interface Metadata {
  [name: string]: string;
}

/**
 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 * While you can send values as numbers, they will be returned as strings.
 */
export interface MetadataParam {
  [name: string]: string | number | null;
}

/**
 * The Address object.
 */
export interface Address {
  /**
   * City/District/Suburb/Town/Village.
   */
  city: string | null;

  /**
   * 2-letter country code.
   */
  country: string | null;

  /**
   * Address line 1 (Street address/PO Box/Company name).
   */
  line1: string | null;

  /**
   * Address line 2 (Apartment/Suite/Unit/Building).
   */
  line2: string | null;

  /**
   * ZIP or postal code.
   */
  postal_code: string | null;

  /**
   * State/County/Province/Region.
   */
  state: string | null;
}

export interface AccountAddressParam {
  /**
   * City, district, suburb, town, or village.
   */
  city?: string;

  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country?: string;

  /**
   * Address line 1 (e.g., street, PO Box, or company name).
   */
  line1?: string;

  /**
   * Address line 2 (e.g., apartment, suite, unit, or building).
   */
  line2?: string;

  /**
   * ZIP or postal code.
   */
  postal_code?: string;

  /**
   * State, county, province, or region.
   */
  state?: string;
}

export interface AddressParam extends AccountAddressParam {
  /**
   * Address line 1 (e.g., street, PO Box, or company name).
   */
  line1: string;
}

export interface JapanAddressParam {
  /**
   * City or ward.
   */
  city?: string;

  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country?: string;

  /**
   * Block or building number.
   */
  line1?: string;

  /**
   * Building details.
   */
  line2?: string;

  /**
   * Postal code.
   */
  postal_code?: string;

  /**
   * Prefecture.
   */
  state?: string;

  /**
   * Town or cho-me.
   */
  town?: string;
}
