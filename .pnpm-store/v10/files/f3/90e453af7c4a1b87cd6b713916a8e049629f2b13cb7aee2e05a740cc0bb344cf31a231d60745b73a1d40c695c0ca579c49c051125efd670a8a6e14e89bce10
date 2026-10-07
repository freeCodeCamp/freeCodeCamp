'use strict';

const Hoek = require('@hapi/hoek');
const querystring = require('querystring');
const debug = require('debug')('simple-oauth2:request-options');
const { CredentialsEncoding } = require('./credentials-encoding');

const JSON_CONTENT_TYPE = 'application/json';
const FORM_CONTENT_TYPE = 'application/x-www-form-urlencoded';

const authorizationMethodEnum = {
  HEADER: 'header',
  BODY: 'body',
};

const bodyFormatEnum = {
  FORM: 'form',
  JSON: 'json',
};

function getDefaultRequestOptions() {
  return {
    headers: {},
  };
}

class RequestOptions {
  #config = null;
  #requestOptions = null;

  constructor(config, params) {
    this.#config = config;
    this.#requestOptions = this.createOptions(params);
  }

  createOptions(params) {
    const parameters = { ...params };
    const requestOptions = getDefaultRequestOptions();

    if (this.#config.options.authorizationMethod === authorizationMethodEnum.HEADER) {
      const encoding = new CredentialsEncoding(this.#config.options.credentialsEncodingMode);
      const credentials = encoding.getAuthorizationHeaderToken(this.#config.client.id, this.#config.client.secret);

      debug('Using header authentication. Authorization header set to %s', credentials);

      requestOptions.headers.Authorization = `Basic ${credentials}`;
    } else {
      debug('Using body authentication');

      parameters[this.#config.client.idParamName] = this.#config.client.id;
      parameters[this.#config.client.secretParamName] = this.#config.client.secret;
    }

    if (this.#config.options.bodyFormat === bodyFormatEnum.FORM) {
      debug('Using form request format');

      requestOptions.payload = querystring.stringify(parameters);
      requestOptions.headers['Content-Type'] = FORM_CONTENT_TYPE;
    } else {
      debug('Using json request format');

      requestOptions.payload = parameters;
      requestOptions.headers['Content-Type'] = JSON_CONTENT_TYPE;
    }

    return requestOptions;
  }

  toObject(requestOptions = {}) {
    return Hoek.applyToDefaults(requestOptions, this.#requestOptions);
  }
}

module.exports = {
  RequestOptions,
  authorizationMethodEnum,
  bodyFormatEnum,
};
