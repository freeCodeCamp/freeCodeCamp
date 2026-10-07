'use strict';

const Joi = require('joi');
const { authorizationMethodEnum, bodyFormatEnum, credentialsEncodingModeEnum } = require('./client');

// https://tools.ietf.org/html/draft-ietf-oauth-v2-31#appendix-A.1
const vsCharRegEx = /^[\x20-\x7E]*$/;

const ClientSchema = Joi
  .object({
    id: Joi
      .string()
      .pattern(vsCharRegEx)
      .allow(''),
    secret: Joi
      .string()
      .pattern(vsCharRegEx)
      .allow(''),
    secretParamName: Joi
      .string()
      .default('client_secret'),
    idParamName: Joi
      .string()
      .default('client_id'),
  })
  .required();

const AuthSchema = Joi.object().keys({
  tokenHost: Joi
    .string()
    .required()
    .uri({ scheme: ['http', 'https'] }),
  tokenPath: Joi
    .string()
    .default('/oauth/token'),
  refreshPath: Joi
    .string()
    .default(Joi.ref('tokenPath')),
  revokePath: Joi
    .string()
    .default('/oauth/revoke'),
})
  .required();

const OptionsSchema = Joi
  .object({
    scopeSeparator: Joi
      .string()
      .default(' '),
    credentialsEncodingMode: Joi
      .string()
      .valid(...Object.values(credentialsEncodingModeEnum))
      .default(credentialsEncodingModeEnum.STRICT),
    bodyFormat: Joi
      .string()
      .valid(...Object.values(bodyFormatEnum))
      .default(bodyFormatEnum.FORM),
    authorizationMethod: Joi
      .string()
      .valid(...Object.values(authorizationMethodEnum))
      .default(authorizationMethodEnum.HEADER),
  })
  .default();

const HttpOptionsSchema = Joi
  .object({
    baseUrl: Joi.string().forbidden(),
  })
  .unknown(true);

const AuthorizationCodeSchema = Joi
  .object({
    client: ClientSchema,
    auth: AuthSchema
      .keys({
        authorizeHost: Joi
          .string()
          .uri({ scheme: ['http', 'https'] })
          .default(Joi.ref('tokenHost')),
        authorizePath: Joi
          .string()
          .default('/oauth/authorize'),
      }),
    http: HttpOptionsSchema,
    options: OptionsSchema,
  });

const ClientCredentialsSchema = Joi
  .object({
    client: ClientSchema,
    auth: AuthSchema,
    http: HttpOptionsSchema,
    options: OptionsSchema,
  });

const ResourceOwnerPasswordSchema = Joi
  .object({
    client: ClientSchema,
    auth: AuthSchema,
    http: HttpOptionsSchema,
    options: OptionsSchema,
  });

module.exports = {
  AuthorizationCodeSchema,
  ClientCredentialsSchema,
  ResourceOwnerPasswordSchema,
};
