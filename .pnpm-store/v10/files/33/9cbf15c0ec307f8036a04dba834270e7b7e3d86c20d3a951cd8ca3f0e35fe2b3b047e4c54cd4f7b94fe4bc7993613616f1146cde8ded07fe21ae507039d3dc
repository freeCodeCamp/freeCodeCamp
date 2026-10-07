import {SourceCreateParams} from '../api';

/**
 * An object containing the unique ID and client secret for a `Source`.
 *
 * You can use a `Source` object created with `stripe.createSource` as the argument to `stripe.retrieveSource`, as every `Source` object has both `id` and `client_secret` keys.
 */
export interface RetrieveSourceParam {
  /**
   * Unique identifier of the `Source`.
   */
  id: string;

  /**
   * A secret available to the web client that created the `Source`, for purposes of retrieving the `Source` later from that same client.
   */
  client_secret: string;
}

/**
 * An object containing additional payment information you might have collected.
 *
 * Although these fields are optional, we highly recommend collecting name and address.
 * This information can be used to perform a number of verifications, such as CVC, ZIP, and address verification.
 * Radar includes built-in rules that can block payments where the ZIP or CVC verifications with the cardholder’s bank failed.
 */
export interface CreateTokenCardData {
  /**
   * @recommended
   */
  name?: string;

  address_line1?: string;

  address_line2?: string;

  address_city?: string;

  address_state?: string;

  address_zip?: string;

  /**
   * A two character country code (for example, `US`).
   *
   * @recommended
   */
  address_country?: string;

  /**
   * Required in order to [add the card to a Connect account](https://stripe.com/docs/connect/payouts#bank-accounts) (in all other cases, this parameter is not used).
   * Currently, the only supported currency for debit card payouts is `usd`.
   */
  currency?: string;
}

export interface CreateTokenIbanData {
  /**
   * Three character currency code (e.g., `eur`).
   */
  currency: string;

  account_holder_name: string;

  account_holder_type: string;
}

export interface CreateTokenPiiData {
  personal_id_number: string;
}

export interface CreateTokenBankAccountData {
  country: string;

  currency: string;

  routing_number?: string;

  account_number: string;

  account_holder_name?: string;

  account_holder_type: string;

  account_type?: string;
}

/**
 * A required object containing the `type` of `Source` you want to create, and any additional payment information that you have collected.
 * See the [Sources API](https://stripe.com/docs/api#create_source) reference for details.
 *
 * You cannot pass raw card information to `stripe.createSource(sourceData)`.
 * Instead, you must gather card information in an `Element` and use `stripe.createSource(element, sourceData)`.
 * You can also pass an existing card token to convert it into a `Source` object.
 */
export interface CreateSourceData extends SourceCreateParams {
  bancontact?: CreateSourceData.DeprecatedMethodData;

  ideal?: CreateSourceData.DeprecatedMethodData;

  klarna?: CreateSourceData.DeprecatedMethodData;

  sepa_debit?: CreateSourceData.DeprecatedMethodData;

  sofort?: CreateSourceData.DeprecatedMethodData;
}

export namespace CreateSourceData {
  export type DeprecatedMethodData = Record<string, unknown>;
}
