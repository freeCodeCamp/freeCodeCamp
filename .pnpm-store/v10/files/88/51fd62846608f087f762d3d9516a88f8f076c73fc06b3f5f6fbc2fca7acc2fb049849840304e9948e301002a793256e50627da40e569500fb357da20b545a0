'use strict';

const { URL } = require('url');
const AccessToken = require('./access-token');
const GrantTypeParams = require('./grant-type-params');

module.exports = class AuthorizationCode {
  #config = null;
  #client = null;

  constructor(config, client) {
    this.#config = config;
    this.#client = client;
  }

  /**
   * Get a valid redirect URL used to redirect users to an authorization page
   *
   * @param {Object} params
   * @param {String} params.redirectURI String representing the registered application URI where the user is redirected after authentication
   * @param {String|Array<String>} params.scope String or array of strings representing the application privileges
   * @param {String} params.state String representing an opaque value used by the client to main the state between the request and the callback
   *
   * @return {String} the absolute authorization url
   */
  authorizeURL(params = {}) {
    const baseParams = {
      response_type: 'code',
      [this.#config.client.idParamName]: this.#config.client.id,
    };

    const url = new URL(this.#config.auth.authorizePath, this.#config.auth.authorizeHost);
    const parameters = new GrantTypeParams(this.#config.options, baseParams, params);

    Object
      .entries(parameters.toObject())
      .forEach(([parameterName, value]) => url.searchParams.set(parameterName, value));

    return url.toString();
  }

  /**
   * Requests and returns an access token from the authorization server
   * @param {Object} params
   * @param {String} params.code Authorization code (from previous step)
   * @param {String} params.redirectURI String representing the registered application URI where the user is redirected after authentication
   * @param {String|Array<String>} [params.scope] String or array of strings representing the application privileges
   * @param {Object} [httpOptions] Optional http options passed through the underlying http library
   * @return {Promise<AccessToken>}
   */
  async getToken(params, httpOptions) {
    const parameters = GrantTypeParams.forGrantType('authorization_code', this.#config.options, params);
    const response = await this.#client.request(this.#config.auth.tokenPath, parameters.toObject(), httpOptions);

    return this.createToken(response);
  }

  /**
   * Creates a new access token instance from a plain object
   *
   * @param {Object} token Plain object representation of an access token
   * @returns {AccessToken}
   */
  createToken(token) {
    return new AccessToken(this.#config, this.#client, token);
  }
};
