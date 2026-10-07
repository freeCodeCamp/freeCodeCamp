/** @public */
export const AuthMechanism = Object.freeze({
  MONGODB_AWS: 'MONGODB-AWS',
  MONGODB_CR: 'MONGODB-CR',
  MONGODB_DEFAULT: 'DEFAULT',
  MONGODB_GSSAPI: 'GSSAPI',
  MONGODB_PLAIN: 'PLAIN',
  MONGODB_SCRAM_SHA1: 'SCRAM-SHA-1',
  MONGODB_SCRAM_SHA256: 'SCRAM-SHA-256',
  MONGODB_X509: 'MONGODB-X509',
  MONGODB_OIDC: 'MONGODB-OIDC'
} as const);

/** @public */
export type AuthMechanism = (typeof AuthMechanism)[keyof typeof AuthMechanism];

/** @internal */
export const AUTH_MECHS_AUTH_SRC_EXTERNAL = new Set<AuthMechanism>([
  AuthMechanism.MONGODB_GSSAPI,
  AuthMechanism.MONGODB_AWS,
  AuthMechanism.MONGODB_OIDC,
  AuthMechanism.MONGODB_X509
]);
