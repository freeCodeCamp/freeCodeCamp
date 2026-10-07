declare module 'stripe' {
  namespace Stripe {
    interface OAuthToken {
      /**
       * The access token you can use to make requests on behalf of this Stripe account. Use it as you would any Stripe secret API key.
       * This key does not expire, but may be revoked by the user at any time (you'll get a account.application.deauthorized webhook event when this happens).
       */
      access_token?: string;

      /**
       * The scope granted to the access token, depending on the scope of the authorization code and scope parameter.
       */
      scope?: string;

      /**
       * The live mode indicator for the token. If true, the access_token can be used as a live secret key. If false, the access_token can be used as a test secret key.
       * Depends on the mode of the secret API key used to make the request.
       */
      livemode?: boolean;

      /**
       * Will always have a value of bearer.
       */
      token_type?: 'bearer';

      /**
       * Can be used to get a new access token of an equal or lesser scope, or of a different live mode (where applicable).
       */
      refresh_token?: string;

      /**
       * The unique id of the account you have been granted access to, as a string.
       */
      stripe_user_id?: string;

      /**
       * A publishable key that can be used with this account. Matches the mode—live or test—of the token.
       */
      stripe_publishable_key?: string;
    }

    interface OAuthDeauthorization {
      /**
       * The unique id of the account you have revoked access to, as a string.
       * This is the same as the stripe_user_id you passed in.
       * If this is returned, the revocation was successful.
       */
      stripe_user_id: string;
    }

    interface OAuthAuthorizeUrlParams {
      /**
       * The unique identifier provided to your application, found in your application settings.
       */
      client_id: string;

      /**
       * The only option at the moment is `'code'`.
       */
      response_type: 'code';

      /**
       * The URL for the authorize response redirect. If provided, this must exactly match one of the comma-separated redirect_uri values in your application settings.
       * To protect yourself from certain forms of man-in-the-middle attacks, the live mode redirect_uri must use a secure HTTPS connection.
       * Defaults to the redirect_uri in your application settings if not provided.
       */
      redirect_uri?: string;

      /**
       * read_write or read_only, depending on the level of access you need.
       *
       * Defaults to read_only.
       */
      scope?: string;

      /**
       * An arbitrary string value we will pass back to you, useful for CSRF protection.
       */
      state?: string;

      /**
       * login or register, depending on what type of screen you want your users to see. Only override this to be login if you expect all your users to have Stripe accounts already (e.g., most read-only applications, like analytics dashboards or accounting software).
       * Defaults to login for scope read_only and register for scope read_write.
       */
      stripe_landing?: string;

      /**
       * Boolean to indicate that the user should always be asked to connect, even if they're already connected.
       * Defaults to false.
       */
      always_prompt?: boolean;

      /**
       * Express only
       * An array of capabilities to apply to the connected account.
       */
      suggested_capabilities?: Array<string>;

      /**
       * Stripe will use these to prefill details in the account form for new users.
       * Some prefilled fields (e.g., URL or product category) may be automatically hidden from the user's view.
       * Any parameters with invalid values will be silently ignored.
       */
      stripe_user?: OAuthAuthorizeUrlParams.StripeUser;
    }

    namespace OAuthAuthorizeUrlParams {
      interface StripeUser {
        /**
         * Recommended
         * The user's email address. Must be a valid email format.
         */
        email?: string;

        /**
         * Recommended
         * The URL for the user's business. This may be the user's website, a profile page within your application, or another publicly available profile for the business, such as a LinkedIn or Facebook profile.
         * Must be URL-encoded and include a scheme (http or https).
         * If you will be prefilling this field, we highly recommend that the linked page contain a description of the user's products or services and their contact information. If we don't have enough information, we'll have to reach out to the user directly before initiating payouts.
         */
        url?: string;

        /**
         * Two-letter country code (e.g., US or CA).
         * Must be a country that Stripe currently supports.
         */
        country?: string;

        /**
         * The business phone number. Must be 10 digits only.
         * Must also prefill stripe_user[country] with the corresponding country.
         */
        phone_number?: string;

        /**
         * The legal name of the business, also used for the statement descriptor.
         */
        business_name?: string;

        /**
         * The type of the business.
         * Must be one of sole_prop, corporation, non_profit, partnership, or llc.
         */
        business_type?: string;

        /**
         * First name of the person who will be filling out a Stripe application.
         */
        first_name?: string;

        /**
         * Last name of the person who will be filling out a Stripe application.
         */
        last_name?: string;

        /**
         * Day (0-31), month (1-12), and year (YYYY, greater than 1900) for the birth date of the person who will be filling out a Stripe application.
         * If you choose to pass these parameters, you must pass all three.
         */
        dob_day?: string;

        /**
         * Day (0-31), month (1-12), and year (YYYY, greater than 1900) for the birth date of the person who will be filling out a Stripe application.
         * If you choose to pass these parameters, you must pass all three.
         */
        dob_month?: string;

        /**
         * Day (0-31), month (1-12), and year (YYYY, greater than 1900) for the birth date of the person who will be filling out a Stripe application.
         * If you choose to pass these parameters, you must pass all three.
         */
        dob_year?: string;

        /**
         * Standard only
         * Street address of the business.
         */
        street_address?: string;

        /**
         * Standard only
         * Address city of the business.
         * We highly recommend that you also prefill stripe_user[country] with the corresponding country.
         */
        city?: string;

        /**
         * Standard only
         * Address state of the business. Must be the two-letter state or province code (e.g., NY for a U.S. business or AB for a Canadian one).
         * Must also prefill stripe_user[country] with the corresponding country.
         */
        state?: string;

        /**
         * Standard only
         * Address ZIP code of the business. Must be a string.
         * We highly recommend that you also prefill stripe_user[country] with the corresponding country.
         */
        zip?: string;

        /**
         * Standard only
         * A string: true if the user sells a physical product, false otherwise.
         */
        physical_product?: string;

        /**
         * A description of what the business is accepting payments for.
         */
        product_description?: string;

        /**
         * Standard only
         * Three-letter ISO code representing currency, in lowercase (e.g., usd or cad).
         * Must be a valid country and currency combination that Stripe supports.
         * Must prefill stripe_user[country] with the corresponding country.
         */
        currency?: string;

        /**
         * The Kana variation of the first name of the person who will be filling out a Stripe application.
         * Must prefill stripe_user[country] with JP, as this parameter is only relevant for Japan.
         */
        first_name_kana?: string;

        /**
         * The Kanji variation of the first name of the person who will be filling out a Stripe application.
         * Must prefill stripe_user[country] with JP, as this parameter is only relevant for Japan.
         */
        first_name_kanji?: string;

        /**
         * The Kana variation of the last name of the person who will be filling out a Stripe application.
         * Must prefill stripe_user[country] with JP, as this parameter is only relevant for Japan.
         */
        last_name_kana?: string;

        /**
         * The Kanji variation of the last name of the person who will be filling out a Stripe application.
         * Must prefill stripe_user[country] with JP, as this parameter is only relevant for Japan.
         */
        last_name_kanji?: string;

        /**
         * The gender of the person who will be filling out a Stripe application. (International regulations require either male or female.)
         * Must prefill stripe_user[country] with JP, as this parameter is only relevant for Japan.
         */
        gender?: string;

        /**
         * Standard only
         * The Kana variation of the address block.
         * This parameter is only relevant for Japan. You must prefill stripe_user[country] with JP and stripe_user[zip] with a valid Japanese postal code to use this parameter.
         */
        block_kana?: string;

        /**
         * Standard only
         * The Kanji variation of the address block.
         * This parameter is only relevant for Japan. You must prefill stripe_user[country] with JP and stripe_user[zip] with a valid Japanese postal code to use this parameter.
         */
        block_kanji?: string;

        /**
         * Standard only
         * The Kana variation of the address building.
         * This parameter is only relevant for Japan. You must prefill stripe_user[country] with JP and stripe_user[zip] with a valid Japanese postal code to use this parameter.
         */
        building_kana?: string;

        /**
         * Standard only
         * The Kanji variation of the address building.
         * This parameter is only relevant for Japan. You must prefill stripe_user[country] with JP and stripe_user[zip] with a valid Japanese postal code to use this parameter.
         */
        building_kanji?: string;
      }
    }

    interface OAuthAuthorizeUrlOptions {
      express?: boolean;
    }

    interface OAuthDeauthorizeParams {
      /**
       * The client_id of the application that you'd like to disconnect the account from.
       * The account must be connected to this application.
       */
      client_id: string;

      /**
       * The account you'd like to disconnect from.
       */
      stripe_user_id: string;
    }

    interface OAuthTokenParams {
      /**
       * `'authorization_code'` when turning an authorization code into an access token, or `'refresh_token'` when using a refresh token to get a new access token.
       */
      grant_type: 'authorization_code' | 'refresh_token';

      /**
       * The value of the code or refresh_token, depending on the grant_type.
       */
      code?: string;

      /**
       * The value of the code or refresh_token, depending on the grant_type.
       */
      refresh_token?: string;

      /**
       * When requesting a new access token from a refresh token, any scope that has an equal or lesser scope as the refresh token. Has no effect when requesting an access token from an authorization code.
       * Defaults to the scope of the refresh token.
       */
      scope?: string;

      /**
       * Express only
       * Check whether the suggested_capabilities were applied to the connected account.
       */
      assert_capabilities?: Array<string>;
    }

    export class OAuthResource {
      /**
       * Get a URL to which you can send a user to complete the OAuth flow to authorize their account.
       * @docs https://stripe.com/docs/connect/oauth-reference#get-authorize
       */
      authorizeUrl(
        params?: OAuthAuthorizeUrlParams,
        options?: OAuthAuthorizeUrlOptions
      ): string;

      /**
       * Used for revoking access to an account.
       * @docs https://stripe.com/docs/connect/oauth-reference#post-deauthorize
       */
      deauthorize(
        params: OAuthDeauthorizeParams,
        options?: Stripe.RequestOptions
      ): Promise<OAuthDeauthorization>;

      /**
       * Turning an authorization_code into an access_token, or get a new access token using a refresh_token.
       * @docs https://stripe.com/docs/connect/oauth-reference#post-token
       */
      token(
        params: OAuthTokenParams,
        options?: Stripe.RequestOptions
      ): Promise<OAuthToken>;
    }
  }
}
