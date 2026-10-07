import * as dns from 'dns';

import { getKerberos, type Kerberos, type KerberosClient } from '../../deps';
import { MongoInvalidArgumentError, MongoMissingCredentialsError } from '../../error';
import { ns } from '../../utils';
import type { Connection } from '../connection';
import { type AuthContext, AuthProvider } from './auth_provider';

/** @public */
export const GSSAPICanonicalizationValue = Object.freeze({
  on: true,
  off: false,
  none: 'none',
  forward: 'forward',
  forwardAndReverse: 'forwardAndReverse'
} as const);

/** @public */
export type GSSAPICanonicalizationValue =
  (typeof GSSAPICanonicalizationValue)[keyof typeof GSSAPICanonicalizationValue];

type MechanismProperties = {
  CANONICALIZE_HOST_NAME?: GSSAPICanonicalizationValue;
  SERVICE_HOST?: string;
  SERVICE_NAME?: string;
  SERVICE_REALM?: string;
};

async function externalCommand(
  connection: Connection,
  command: ReturnType<typeof saslStart> | ReturnType<typeof saslContinue>
): Promise<{ payload: string; conversationId: number }> {
  const response = await connection.command(ns('$external.$cmd'), command);
  return response as { payload: string; conversationId: number };
}

let krb: Kerberos;

export class GSSAPI extends AuthProvider {
  override async auth(authContext: AuthContext): Promise<void> {
    const { connection, credentials } = authContext;
    if (credentials == null) {
      throw new MongoMissingCredentialsError('Credentials required for GSSAPI authentication');
    }

    const { username } = credentials;

    const client = await makeKerberosClient(authContext);

    const payload = await client.step('');

    const saslStartResponse = await externalCommand(connection, saslStart(payload));

    const negotiatedPayload = await negotiate(client, 10, saslStartResponse.payload);

    const saslContinueResponse = await externalCommand(
      connection,
      saslContinue(negotiatedPayload, saslStartResponse.conversationId)
    );

    const finalizePayload = await finalize(client, username, saslContinueResponse.payload);

    await externalCommand(connection, {
      saslContinue: 1,
      conversationId: saslContinueResponse.conversationId,
      payload: finalizePayload
    });
  }
}

async function makeKerberosClient(authContext: AuthContext): Promise<KerberosClient> {
  const { hostAddress } = authContext.options;
  const { credentials } = authContext;
  if (!hostAddress || typeof hostAddress.host !== 'string' || !credentials) {
    throw new MongoInvalidArgumentError(
      'Connection must have host and port and credentials defined.'
    );
  }

  loadKrb();
  if ('kModuleError' in krb) {
    throw krb['kModuleError'];
  }
  const { initializeClient } = krb;

  const { username, password } = credentials;
  const mechanismProperties = credentials.mechanismProperties as MechanismProperties;

  const serviceName = mechanismProperties.SERVICE_NAME ?? 'mongodb';

  const host = await performGSSAPICanonicalizeHostName(hostAddress.host, mechanismProperties);

  const initOptions = {};
  if (password != null) {
    // TODO(NODE-5139): These do not match the typescript options in initializeClient
    Object.assign(initOptions, { user: username, password: password });
  }

  const spnHost = mechanismProperties.SERVICE_HOST ?? host;
  let spn = `${serviceName}${process.platform === 'win32' ? '/' : '@'}${spnHost}`;
  if ('SERVICE_REALM' in mechanismProperties) {
    spn = `${spn}@${mechanismProperties.SERVICE_REALM}`;
  }

  return await initializeClient(spn, initOptions);
}

function saslStart(payload: string) {
  return {
    saslStart: 1,
    mechanism: 'GSSAPI',
    payload,
    autoAuthorize: 1
  } as const;
}

function saslContinue(payload: string, conversationId: number) {
  return {
    saslContinue: 1,
    conversationId,
    payload
  } as const;
}

async function negotiate(
  client: KerberosClient,
  retries: number,
  payload: string
): Promise<string> {
  try {
    const response = await client.step(payload);
    return response || '';
  } catch (error) {
    if (retries === 0) {
      // Retries exhausted, raise error
      throw error;
    }
    // Adjust number of retries and call step again
    return await negotiate(client, retries - 1, payload);
  }
}

async function finalize(client: KerberosClient, user: string, payload: string): Promise<string> {
  // GSS Client Unwrap
  const response = await client.unwrap(payload);
  return await client.wrap(response || '', { user });
}

export async function performGSSAPICanonicalizeHostName(
  host: string,
  mechanismProperties: MechanismProperties
): Promise<string> {
  const mode = mechanismProperties.CANONICALIZE_HOST_NAME;
  if (!mode || mode === GSSAPICanonicalizationValue.none) {
    return host;
  }

  // If forward and reverse or true
  if (
    mode === GSSAPICanonicalizationValue.on ||
    mode === GSSAPICanonicalizationValue.forwardAndReverse
  ) {
    // Perform the lookup of the ip address.
    const { address } = await dns.promises.lookup(host);

    try {
      // Perform a reverse ptr lookup on the ip address.
      const results = await dns.promises.resolvePtr(address);
      // If the ptr did not error but had no results, return the host.
      return results.length > 0 ? results[0] : host;
    } catch {
      // This can error as ptr records may not exist for all ips. In this case
      // fallback to a cname lookup as dns.lookup() does not return the
      // cname.
      return await resolveCname(host);
    }
  } else {
    // The case for forward is just to resolve the cname as dns.lookup()
    // will not return it.
    return await resolveCname(host);
  }
}

export async function resolveCname(host: string): Promise<string> {
  // Attempt to resolve the host name
  try {
    const results = await dns.promises.resolveCname(host);
    // Get the first resolved host id
    return results.length > 0 ? results[0] : host;
  } catch {
    return host;
  }
}

/**
 * Load the Kerberos library.
 */
function loadKrb() {
  if (!krb) {
    krb = getKerberos();
  }
}
