'use strict';

const Hoek = require('@hapi/hoek');
const Wreck = require('@hapi/wreck');
const debug = require('debug')('simple-oauth2:client');
const { RequestOptions } = require('./request-options');

const defaultHttpHeaders = {
  Accept: 'application/json',
};

const defaultHttpOptions = {
  json: 'strict',
  headers: defaultHttpHeaders,
};

module.exports = class Client {
  #config = null;
  #client = null;

  constructor(config) {
    const configHttpOptions = Hoek.applyToDefaults(config.http || {}, {
      baseUrl: config.auth.tokenHost,
    });

    const httpOptions = Hoek.applyToDefaults(defaultHttpOptions, configHttpOptions);

    this.#config = config;
    this.#client = Wreck.defaults(httpOptions);
  }

  async request(url, params, opts) {
    const requestOptions = new RequestOptions(this.#config, params);
    const options = requestOptions.toObject(opts);

    debug('Creating request to: (POST) %s', url);
    debug('Using request options: %j', options);

    const response = await this.#client.post(url, options);

    return response.payload;
  }
};
