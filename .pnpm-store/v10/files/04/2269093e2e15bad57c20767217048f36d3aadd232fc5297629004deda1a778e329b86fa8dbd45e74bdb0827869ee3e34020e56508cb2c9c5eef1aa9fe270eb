import * as dns from 'dns';
import ConnectionString from 'mongodb-connection-string-url';
import { URLSearchParams } from 'url';

import type { Document } from './bson';
import { MongoCredentials } from './cmap/auth/mongo_credentials';
import { AUTH_MECHS_AUTH_SRC_EXTERNAL, AuthMechanism } from './cmap/auth/providers';
import { Compressor, type CompressorName } from './cmap/wire_protocol/compression';
import { Encrypter } from './encrypter';
import {
  MongoAPIError,
  MongoInvalidArgumentError,
  MongoMissingCredentialsError,
  MongoParseError
} from './error';
import {
  MongoClient,
  type MongoClientOptions,
  type MongoOptions,
  type PkFactory,
  type ServerApi,
  ServerApiVersion
} from './mongo_client';
import { MongoLoggableComponent, MongoLogger, SeverityLevel } from './mongo_logger';
import { ReadConcern, type ReadConcernLevel } from './read_concern';
import { ReadPreference, type ReadPreferenceMode } from './read_preference';
import { ServerMonitoringMode } from './sdam/monitor';
import type { TagSet } from './sdam/server_description';
import {
  checkParentDomainMatch,
  DEFAULT_PK_FACTORY,
  emitWarning,
  HostAddress,
  isRecord,
  parseInteger,
  setDifference,
  squashError
} from './utils';
import { type W, WriteConcern } from './write_concern';

const VALID_TXT_RECORDS = ['authSource', 'replicaSet', 'loadBalanced'];

const LB_SINGLE_HOST_ERROR = 'loadBalanced option only supported with a single host in the URI';
const LB_REPLICA_SET_ERROR = 'loadBalanced option not supported with a replicaSet option';
const LB_DIRECT_CONNECTION_ERROR =
  'loadBalanced option not supported when directConnection is provided';

function retryDNSTimeoutFor(api: 'resolveSrv'): (a: string) => Promise<dns.SrvRecord[]>;
function retryDNSTimeoutFor(api: 'resolveTxt'): (a: string) => Promise<string[][]>;
function retryDNSTimeoutFor(
  api: 'resolveSrv' | 'resolveTxt'
): (a: string) => Promise<dns.SrvRecord[] | string[][]> {
  return async function dnsReqRetryTimeout(lookupAddress: string) {
    try {
      return await dns.promises[api](lookupAddress);
    } catch (firstDNSError) {
      if (firstDNSError.code === dns.TIMEOUT) {
        return await dns.promises[api](lookupAddress);
      } else {
        throw firstDNSError;
      }
    }
  };
}

const resolveSrv = retryDNSTimeoutFor('resolveSrv');
const resolveTxt = retryDNSTimeoutFor('resolveTxt');

/**
 * Lookup a `mongodb+srv` connection string, combine the parts and reparse it as a normal
 * connection string.
 *
 * @param uri - The connection string to parse
 * @param options - Optional user provided connection string options
 */
export async function resolveSRVRecord(options: MongoOptions): Promise<HostAddress[]> {
  if (typeof options.srvHost !== 'string') {
    throw new MongoAPIError('Option "srvHost" must not be empty');
  }

  // Asynchronously start TXT resolution so that we do not have to wait until
  // the SRV record is resolved before starting a second DNS query.
  const lookupAddress = options.srvHost;
  const txtResolutionPromise = resolveTxt(lookupAddress);

  txtResolutionPromise.then(undefined, squashError); // rejections will be handled later

  const hostname = `_${options.srvServiceName}._tcp.${lookupAddress}`;
  // Resolve the SRV record and use the result as the list of hosts to connect to.
  const addresses = await resolveSrv(hostname);

  if (addresses.length === 0) {
    throw new MongoAPIError('No addresses found at host');
  }

  for (const { name } of addresses) {
    checkParentDomainMatch(name, lookupAddress);
  }

  const hostAddresses = addresses.map(r => HostAddress.fromString(`${r.name}:${r.port ?? 27017}`));

  validateLoadBalancedOptions(hostAddresses, options, true);

  // Use the result of resolving the TXT record and add options from there if they exist.
  let record;
  try {
    record = await txtResolutionPromise;
  } catch (error) {
    if (error.code !== 'ENODATA' && error.code !== 'ENOTFOUND') {
      throw error;
    }
    return hostAddresses;
  }

  if (record.length > 1) {
    throw new MongoParseError('Multiple text records not allowed');
  }

  const txtRecordOptions = new URLSearchParams(record[0].join(''));
  const txtRecordOptionKeys = [...txtRecordOptions.keys()];
  if (txtRecordOptionKeys.some(key => !VALID_TXT_RECORDS.includes(key))) {
    throw new MongoParseError(`Text record may only set any of: ${VALID_TXT_RECORDS.join(', ')}`);
  }

  if (VALID_TXT_RECORDS.some(option => txtRecordOptions.get(option) === '')) {
    throw new MongoParseError('Cannot have empty URI params in DNS TXT Record');
  }

  const source = txtRecordOptions.get('authSource') ?? undefined;
  const replicaSet = txtRecordOptions.get('replicaSet') ?? undefined;
  const loadBalanced = txtRecordOptions.get('loadBalanced') ?? undefined;

  if (
    !options.userSpecifiedAuthSource &&
    source &&
    options.credentials &&
    !AUTH_MECHS_AUTH_SRC_EXTERNAL.has(options.credentials.mechanism)
  ) {
    options.credentials = MongoCredentials.merge(options.credentials, { source });
  }

  if (!options.userSpecifiedReplicaSet && replicaSet) {
    options.replicaSet = replicaSet;
  }

  if (loadBalanced === 'true') {
    options.loadBalanced = true;
  }

  if (options.replicaSet && options.srvMaxHosts > 0) {
    throw new MongoParseError('Cannot combine replicaSet option with srvMaxHosts');
  }

  validateLoadBalancedOptions(hostAddresses, options, true);

  return hostAddresses;
}

/**
 * Checks if TLS options are valid
 *
 * @param allOptions - All options provided by user or included in default options map
 * @throws MongoAPIError if TLS options are invalid
 */
function checkTLSOptions(allOptions: CaseInsensitiveMap): void {
  if (!allOptions) return;
  const check = (a: string, b: string) => {
    if (allOptions.has(a) && allOptions.has(b)) {
      throw new MongoAPIError(`The '${a}' option cannot be used with the '${b}' option`);
    }
  };
  check('tlsInsecure', 'tlsAllowInvalidCertificates');
  check('tlsInsecure', 'tlsAllowInvalidHostnames');
}
function getBoolean(name: string, value: unknown): boolean {
  if (typeof value === 'boolean') return value;
  switch (value) {
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      throw new MongoParseError(`${name} must be either "true" or "false"`);
  }
}

function getIntFromOptions(name: string, value: unknown): number {
  const parsedInt = parseInteger(value);
  if (parsedInt != null) {
    return parsedInt;
  }
  throw new MongoParseError(`Expected ${name} to be stringified int value, got: ${value}`);
}

function getUIntFromOptions(name: string, value: unknown): number {
  const parsedValue = getIntFromOptions(name, value);
  if (parsedValue < 0) {
    throw new MongoParseError(`${name} can only be a positive int value, got: ${value}`);
  }
  return parsedValue;
}

function* entriesFromString(value: string): Generator<[string, string]> {
  if (value === '') {
    return;
  }
  const keyValuePairs = value.split(',');
  for (const keyValue of keyValuePairs) {
    const [key, value] = keyValue.split(/:(.*)/);
    if (value == null) {
      throw new MongoParseError('Cannot have undefined values in key value pairs');
    }

    yield [key, value];
  }
}

class CaseInsensitiveMap<Value = any> extends Map<string, Value> {
  constructor(entries: Array<[string, any]> = []) {
    super(entries.map(([k, v]) => [k.toLowerCase(), v]));
  }
  override has(k: string) {
    return super.has(k.toLowerCase());
  }
  override get(k: string) {
    return super.get(k.toLowerCase());
  }
  override set(k: string, v: any) {
    return super.set(k.toLowerCase(), v);
  }
  override delete(k: string): boolean {
    return super.delete(k.toLowerCase());
  }
}

export function parseOptions(
  uri: string,
  mongoClient: MongoClient | MongoClientOptions | undefined = undefined,
  options: MongoClientOptions = {}
): MongoOptions {
  if (mongoClient != null && !(mongoClient instanceof MongoClient)) {
    options = mongoClient;
    mongoClient = undefined;
  }

  // validate BSONOptions
  if (options.useBigInt64 && typeof options.promoteLongs === 'boolean' && !options.promoteLongs) {
    throw new MongoAPIError('Must request either bigint or Long for int64 deserialization');
  }

  if (options.useBigInt64 && typeof options.promoteValues === 'boolean' && !options.promoteValues) {
    throw new MongoAPIError('Must request either bigint or Long for int64 deserialization');
  }

  const url = new ConnectionString(uri);
  const { hosts, isSRV } = url;

  const mongoOptions = Object.create(null);

  mongoOptions.hosts = isSRV ? [] : hosts.map(HostAddress.fromString);

  const urlOptions = new CaseInsensitiveMap<unknown[]>();

  if (url.pathname !== '/' && url.pathname !== '') {
    const dbName = decodeURIComponent(
      url.pathname[0] === '/' ? url.pathname.slice(1) : url.pathname
    );
    if (dbName) {
      urlOptions.set('dbName', [dbName]);
    }
  }

  if (url.username !== '') {
    const auth: Document = {
      username: decodeURIComponent(url.username)
    };

    if (typeof url.password === 'string') {
      auth.password = decodeURIComponent(url.password);
    }

    urlOptions.set('auth', [auth]);
  }

  for (const key of url.searchParams.keys()) {
    const values = url.searchParams.getAll(key);

    const isReadPreferenceTags = /readPreferenceTags/i.test(key);

    if (!isReadPreferenceTags && values.length > 1) {
      throw new MongoInvalidArgumentError(
        `URI option "${key}" cannot appear more than once in the connection string`
      );
    }

    if (!isReadPreferenceTags && values.includes('')) {
      throw new MongoAPIError(`URI option "${key}" cannot be specified with no value`);
    }

    if (!urlOptions.has(key)) {
      urlOptions.set(key, values);
    }
  }

  const objectOptions = new CaseInsensitiveMap<unknown>(
    Object.entries(options).filter(([, v]) => v != null)
  );

  // Validate options that can only be provided by one of uri or object

  if (urlOptions.has('serverApi')) {
    throw new MongoParseError(
      'URI cannot contain `serverApi`, it can only be passed to the client'
    );
  }

  const uriMechanismProperties = urlOptions.get('authMechanismProperties');
  if (uriMechanismProperties) {
    for (const property of uriMechanismProperties) {
      if (/(^|,)ALLOWED_HOSTS:/.test(property as string)) {
        throw new MongoParseError(
          'Auth mechanism property ALLOWED_HOSTS is not allowed in the connection string.'
        );
      }
    }
  }

  if (objectOptions.has('loadBalanced')) {
    throw new MongoParseError('loadBalanced is only a valid option in the URI');
  }

  // All option collection

  const allProvidedOptions = new CaseInsensitiveMap<unknown[]>();

  const allProvidedKeys = new Set<string>([...urlOptions.keys(), ...objectOptions.keys()]);

  for (const key of allProvidedKeys) {
    const values = [];
    const objectOptionValue = objectOptions.get(key);
    if (objectOptionValue != null) {
      values.push(objectOptionValue);
    }

    const urlValues = urlOptions.get(key) ?? [];
    values.push(...urlValues);
    allProvidedOptions.set(key, values);
  }

  if (allProvidedOptions.has('tls') || allProvidedOptions.has('ssl')) {
    const tlsAndSslOpts = (allProvidedOptions.get('tls') || [])
      .concat(allProvidedOptions.get('ssl') || [])
      .map(getBoolean.bind(null, 'tls/ssl'));
    if (new Set(tlsAndSslOpts).size !== 1) {
      throw new MongoParseError('All values of tls/ssl must be the same.');
    }
  }

  checkTLSOptions(allProvidedOptions);

  const unsupportedOptions = setDifference(
    allProvidedKeys,
    Array.from(Object.keys(OPTIONS)).map(s => s.toLowerCase())
  );
  if (unsupportedOptions.size !== 0) {
    const optionWord = unsupportedOptions.size > 1 ? 'options' : 'option';
    const isOrAre = unsupportedOptions.size > 1 ? 'are' : 'is';
    throw new MongoParseError(
      `${optionWord} ${Array.from(unsupportedOptions).join(', ')} ${isOrAre} not supported`
    );
  }

  // Option parsing and setting

  for (const [key, descriptor] of Object.entries(OPTIONS)) {
    const values = allProvidedOptions.get(key);
    if (!values || values.length === 0) {
      if (DEFAULT_OPTIONS.has(key)) {
        setOption(mongoOptions, key, descriptor, [DEFAULT_OPTIONS.get(key)]);
      }
    } else {
      const { deprecated } = descriptor;
      if (deprecated) {
        const deprecatedMsg = typeof deprecated === 'string' ? `: ${deprecated}` : '';
        emitWarning(`${key} is a deprecated option${deprecatedMsg}`);
      }

      setOption(mongoOptions, key, descriptor, values);
    }
  }

  if (mongoOptions.credentials) {
    const isGssapi = mongoOptions.credentials.mechanism === AuthMechanism.MONGODB_GSSAPI;
    const isX509 = mongoOptions.credentials.mechanism === AuthMechanism.MONGODB_X509;
    const isAws = mongoOptions.credentials.mechanism === AuthMechanism.MONGODB_AWS;
    const isOidc = mongoOptions.credentials.mechanism === AuthMechanism.MONGODB_OIDC;
    if (
      (isGssapi || isX509) &&
      allProvidedOptions.has('authSource') &&
      mongoOptions.credentials.source !== '$external'
    ) {
      // If authSource was explicitly given and its incorrect, we error
      throw new MongoParseError(
        `authMechanism ${mongoOptions.credentials.mechanism} requires an authSource of '$external'`
      );
    }

    if (
      !(isGssapi || isX509 || isAws || isOidc) &&
      mongoOptions.dbName &&
      !allProvidedOptions.has('authSource')
    ) {
      // inherit the dbName unless GSSAPI or X509, then silently ignore dbName
      // and there was no specific authSource given
      mongoOptions.credentials = MongoCredentials.merge(mongoOptions.credentials, {
        source: mongoOptions.dbName
      });
    }

    if (isAws && mongoOptions.credentials.username && !mongoOptions.credentials.password) {
      throw new MongoMissingCredentialsError(
        `When using ${mongoOptions.credentials.mechanism} password must be set when a username is specified`
      );
    }

    mongoOptions.credentials.validate();

    // Check if the only auth related option provided was authSource, if so we can remove credentials
    if (
      mongoOptions.credentials.password === '' &&
      mongoOptions.credentials.username === '' &&
      mongoOptions.credentials.mechanism === AuthMechanism.MONGODB_DEFAULT &&
      Object.keys(mongoOptions.credentials.mechanismProperties).length === 0
    ) {
      delete mongoOptions.credentials;
    }
  }

  if (!mongoOptions.dbName) {
    // dbName default is applied here because of the credential validation above
    mongoOptions.dbName = 'test';
  }

  validateLoadBalancedOptions(hosts, mongoOptions, isSRV);

  if (mongoClient && mongoOptions.autoEncryption) {
    Encrypter.checkForMongoCrypt();
    mongoOptions.encrypter = new Encrypter(mongoClient, uri, options);
    mongoOptions.autoEncrypter = mongoOptions.encrypter.autoEncrypter;
  }

  // Potential SRV Overrides and SRV connection string validations

  mongoOptions.userSpecifiedAuthSource =
    objectOptions.has('authSource') || urlOptions.has('authSource');
  mongoOptions.userSpecifiedReplicaSet =
    objectOptions.has('replicaSet') || urlOptions.has('replicaSet');

  if (isSRV) {
    // SRV Record is resolved upon connecting
    mongoOptions.srvHost = hosts[0];

    if (mongoOptions.directConnection) {
      throw new MongoAPIError('SRV URI does not support directConnection');
    }

    if (mongoOptions.srvMaxHosts > 0 && typeof mongoOptions.replicaSet === 'string') {
      throw new MongoParseError('Cannot use srvMaxHosts option with replicaSet');
    }

    // SRV turns on TLS by default, but users can override and turn it off
    const noUserSpecifiedTLS = !objectOptions.has('tls') && !urlOptions.has('tls');
    const noUserSpecifiedSSL = !objectOptions.has('ssl') && !urlOptions.has('ssl');
    if (noUserSpecifiedTLS && noUserSpecifiedSSL) {
      mongoOptions.tls = true;
    }
  } else {
    const userSpecifiedSrvOptions =
      urlOptions.has('srvMaxHosts') ||
      objectOptions.has('srvMaxHosts') ||
      urlOptions.has('srvServiceName') ||
      objectOptions.has('srvServiceName');

    if (userSpecifiedSrvOptions) {
      throw new MongoParseError(
        'Cannot use srvMaxHosts or srvServiceName with a non-srv connection string'
      );
    }
  }

  if (mongoOptions.directConnection && mongoOptions.hosts.length !== 1) {
    throw new MongoParseError('directConnection option requires exactly one host');
  }

  if (
    !mongoOptions.proxyHost &&
    (mongoOptions.proxyPort || mongoOptions.proxyUsername || mongoOptions.proxyPassword)
  ) {
    throw new MongoParseError('Must specify proxyHost if other proxy options are passed');
  }

  if (
    (mongoOptions.proxyUsername && !mongoOptions.proxyPassword) ||
    (!mongoOptions.proxyUsername && mongoOptions.proxyPassword)
  ) {
    throw new MongoParseError('Can only specify both of proxy username/password or neither');
  }

  const proxyOptions = ['proxyHost', 'proxyPort', 'proxyUsername', 'proxyPassword'].map(
    key => urlOptions.get(key) ?? []
  );

  if (proxyOptions.some(options => options.length > 1)) {
    throw new MongoParseError(
      'Proxy options cannot be specified multiple times in the connection string'
    );
  }

  mongoOptions.mongoLoggerOptions = MongoLogger.resolveOptions(
    {
      MONGODB_LOG_COMMAND: process.env.MONGODB_LOG_COMMAND,
      MONGODB_LOG_TOPOLOGY: process.env.MONGODB_LOG_TOPOLOGY,
      MONGODB_LOG_SERVER_SELECTION: process.env.MONGODB_LOG_SERVER_SELECTION,
      MONGODB_LOG_CONNECTION: process.env.MONGODB_LOG_CONNECTION,
      MONGODB_LOG_CLIENT: process.env.MONGODB_LOG_CLIENT,
      MONGODB_LOG_ALL: process.env.MONGODB_LOG_ALL,
      MONGODB_LOG_MAX_DOCUMENT_LENGTH: process.env.MONGODB_LOG_MAX_DOCUMENT_LENGTH,
      MONGODB_LOG_PATH: process.env.MONGODB_LOG_PATH
    },
    {
      mongodbLogPath: mongoOptions.mongodbLogPath,
      mongodbLogComponentSeverities: mongoOptions.mongodbLogComponentSeverities,
      mongodbLogMaxDocumentLength: mongoOptions.mongodbLogMaxDocumentLength
    }
  );

  return mongoOptions;
}

/**
 * #### Throws if LB mode is true:
 * - hosts contains more than one host
 * - there is a replicaSet name set
 * - directConnection is set
 * - if srvMaxHosts is used when an srv connection string is passed in
 *
 * @throws MongoParseError
 */
function validateLoadBalancedOptions(
  hosts: HostAddress[] | string[],
  mongoOptions: MongoOptions,
  isSrv: boolean
): void {
  if (mongoOptions.loadBalanced) {
    if (hosts.length > 1) {
      throw new MongoParseError(LB_SINGLE_HOST_ERROR);
    }
    if (mongoOptions.replicaSet) {
      throw new MongoParseError(LB_REPLICA_SET_ERROR);
    }
    if (mongoOptions.directConnection) {
      throw new MongoParseError(LB_DIRECT_CONNECTION_ERROR);
    }

    if (isSrv && mongoOptions.srvMaxHosts > 0) {
      throw new MongoParseError('Cannot limit srv hosts with loadBalanced enabled');
    }
  }
  return;
}

function setOption(
  mongoOptions: any,
  key: string,
  descriptor: OptionDescriptor,
  values: unknown[]
) {
  const { target, type, transform } = descriptor;
  const name = target ?? key;

  switch (type) {
    case 'boolean':
      mongoOptions[name] = getBoolean(name, values[0]);
      break;
    case 'int':
      mongoOptions[name] = getIntFromOptions(name, values[0]);
      break;
    case 'uint':
      mongoOptions[name] = getUIntFromOptions(name, values[0]);
      break;
    case 'string':
      if (values[0] == null) {
        break;
      }
      // The value should always be a string here, but since the array is typed as unknown
      // there still needs to be an explicit cast.
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      mongoOptions[name] = String(values[0]);
      break;
    case 'record':
      if (!isRecord(values[0])) {
        throw new MongoParseError(`${name} must be an object`);
      }
      mongoOptions[name] = values[0];
      break;
    case 'any':
      mongoOptions[name] = values[0];
      break;
    default: {
      if (!transform) {
        throw new MongoParseError('Descriptors missing a type must define a transform');
      }
      const transformValue = transform({ name, options: mongoOptions, values });
      mongoOptions[name] = transformValue;
      break;
    }
  }
}

interface OptionDescriptor {
  target?: string;
  type?: 'boolean' | 'int' | 'uint' | 'record' | 'string' | 'any';
  default?: any;

  deprecated?: boolean | string;
  /**
   * @param name - the original option name
   * @param options - the options so far for resolution
   * @param values - the possible values in precedence order
   */
  transform?: (args: { name: string; options: MongoOptions; values: unknown[] }) => unknown;
}

export const OPTIONS = {
  appName: {
    type: 'string'
  },
  auth: {
    target: 'credentials',
    transform({ name, options, values: [value] }): MongoCredentials {
      if (!isRecord(value, ['username', 'password'] as const)) {
        throw new MongoParseError(
          `${name} must be an object with 'username' and 'password' properties`
        );
      }
      return MongoCredentials.merge(options.credentials, {
        username: value.username,
        password: value.password
      });
    }
  },
  authMechanism: {
    target: 'credentials',
    transform({ options, values: [value] }): MongoCredentials {
      const mechanisms = Object.values(AuthMechanism);
      const [mechanism] = mechanisms.filter(m => m.match(RegExp(String.raw`\b${value}\b`, 'i')));
      if (!mechanism) {
        throw new MongoParseError(`authMechanism one of ${mechanisms}, got ${value}`);
      }
      let source = options.credentials?.source;
      if (
        mechanism === AuthMechanism.MONGODB_PLAIN ||
        AUTH_MECHS_AUTH_SRC_EXTERNAL.has(mechanism)
      ) {
        // some mechanisms have '$external' as the Auth Source
        source = '$external';
      }

      let password = options.credentials?.password;
      if (mechanism === AuthMechanism.MONGODB_X509 && password === '') {
        password = undefined;
      }
      return MongoCredentials.merge(options.credentials, {
        mechanism,
        source,
        password
      });
    }
  },
  // Note that if the authMechanismProperties contain a TOKEN_RESOURCE that has a
  // comma in it, it MUST be supplied as a MongoClient option instead of in the
  // connection string.
  authMechanismProperties: {
    target: 'credentials',
    transform({ options, values }): MongoCredentials {
      // We can have a combination of options passed in the URI and options passed
      // as an object to the MongoClient. So we must transform the string options
      // as well as merge them together with a potentially provided object.
      let mechanismProperties = Object.create(null);

      for (const optionValue of values) {
        if (typeof optionValue === 'string') {
          for (const [key, value] of entriesFromString(optionValue)) {
            try {
              mechanismProperties[key] = getBoolean(key, value);
            } catch {
              mechanismProperties[key] = value;
            }
          }
        } else {
          if (!isRecord(optionValue)) {
            throw new MongoParseError('AuthMechanismProperties must be an object');
          }
          mechanismProperties = { ...optionValue };
        }
      }
      return MongoCredentials.merge(options.credentials, {
        mechanismProperties
      });
    }
  },
  authSource: {
    target: 'credentials',
    transform({ options, values: [value] }): MongoCredentials {
      const source = String(value);
      return MongoCredentials.merge(options.credentials, { source });
    }
  },
  autoEncryption: {
    type: 'record'
  },
  autoSelectFamily: {
    type: 'boolean',
    default: true
  },
  autoSelectFamilyAttemptTimeout: {
    type: 'uint'
  },
  bsonRegExp: {
    type: 'boolean'
  },
  serverApi: {
    target: 'serverApi',
    transform({ values: [version] }): ServerApi {
      const serverApiToValidate =
        typeof version === 'string' ? ({ version } as ServerApi) : (version as ServerApi);
      const versionToValidate = serverApiToValidate && serverApiToValidate.version;
      if (!versionToValidate) {
        throw new MongoParseError(
          `Invalid \`serverApi\` property; must specify a version from the following enum: ["${Object.values(
            ServerApiVersion
          ).join('", "')}"]`
        );
      }
      if (!Object.values(ServerApiVersion).some(v => v === versionToValidate)) {
        throw new MongoParseError(
          `Invalid server API version=${versionToValidate}; must be in the following enum: ["${Object.values(
            ServerApiVersion
          ).join('", "')}"]`
        );
      }
      return serverApiToValidate;
    }
  },
  checkKeys: {
    type: 'boolean'
  },
  compressors: {
    default: 'none',
    target: 'compressors',
    transform({ values }) {
      const compressionList = new Set();
      for (const compVal of values as (CompressorName[] | string)[]) {
        const compValArray = typeof compVal === 'string' ? compVal.split(',') : compVal;
        if (!Array.isArray(compValArray)) {
          throw new MongoInvalidArgumentError(
            'compressors must be an array or a comma-delimited list of strings'
          );
        }
        for (const c of compValArray) {
          if (Object.keys(Compressor).includes(String(c))) {
            compressionList.add(String(c));
          } else {
            throw new MongoInvalidArgumentError(
              `${c} is not a valid compression mechanism. Must be one of: ${Object.keys(
                Compressor
              )}.`
            );
          }
        }
      }
      return [...compressionList];
    }
  },
  connectTimeoutMS: {
    default: 30000,
    type: 'uint'
  },
  dbName: {
    type: 'string'
  },
  directConnection: {
    default: false,
    type: 'boolean'
  },
  driverInfo: {
    default: {},
    type: 'record'
  },
  enableUtf8Validation: { type: 'boolean', default: true },
  family: {
    transform({ name, values: [value] }): 4 | 6 {
      const transformValue = getIntFromOptions(name, value);
      if (transformValue === 4 || transformValue === 6) {
        return transformValue;
      }
      throw new MongoParseError(`Option 'family' must be 4 or 6 got ${transformValue}.`);
    }
  },
  fieldsAsRaw: {
    type: 'record'
  },
  forceServerObjectId: {
    default: false,
    type: 'boolean'
  },
  fsync: {
    deprecated: 'Please use journal instead',
    target: 'writeConcern',
    transform({ name, options, values: [value] }): WriteConcern {
      const wc = WriteConcern.fromOptions({
        writeConcern: {
          ...options.writeConcern,
          fsync: getBoolean(name, value)
        }
      });
      if (!wc) throw new MongoParseError(`Unable to make a writeConcern from fsync=${value}`);
      return wc;
    }
  } as OptionDescriptor,
  heartbeatFrequencyMS: {
    default: 10000,
    type: 'uint'
  },
  ignoreUndefined: {
    type: 'boolean'
  },
  j: {
    deprecated: 'Please use journal instead',
    target: 'writeConcern',
    transform({ name, options, values: [value] }): WriteConcern {
      const wc = WriteConcern.fromOptions({
        writeConcern: {
          ...options.writeConcern,
          journal: getBoolean(name, value)
        }
      });
      if (!wc) throw new MongoParseError(`Unable to make a writeConcern from journal=${value}`);
      return wc;
    }
  } as OptionDescriptor,
  journal: {
    target: 'writeConcern',
    transform({ name, options, values: [value] }): WriteConcern {
      const wc = WriteConcern.fromOptions({
        writeConcern: {
          ...options.writeConcern,
          journal: getBoolean(name, value)
        }
      });
      if (!wc) throw new MongoParseError(`Unable to make a writeConcern from journal=${value}`);
      return wc;
    }
  },
  loadBalanced: {
    default: false,
    type: 'boolean'
  },
  localThresholdMS: {
    default: 15,
    type: 'uint'
  },
  maxConnecting: {
    default: 2,
    transform({ name, values: [value] }): number {
      const maxConnecting = getUIntFromOptions(name, value);
      if (maxConnecting === 0) {
        throw new MongoInvalidArgumentError('maxConnecting must be > 0 if specified');
      }
      return maxConnecting;
    }
  },
  maxIdleTimeMS: {
    default: 0,
    type: 'uint'
  },
  maxPoolSize: {
    default: 100,
    type: 'uint'
  },
  maxStalenessSeconds: {
    target: 'readPreference',
    transform({ name, options, values: [value] }) {
      const maxStalenessSeconds = getUIntFromOptions(name, value);
      if (options.readPreference) {
        return ReadPreference.fromOptions({
          readPreference: { ...options.readPreference, maxStalenessSeconds }
        });
      } else {
        return new ReadPreference('secondary', undefined, { maxStalenessSeconds });
      }
    }
  },
  minInternalBufferSize: {
    type: 'uint'
  },
  minPoolSize: {
    default: 0,
    type: 'uint'
  },
  minHeartbeatFrequencyMS: {
    default: 500,
    type: 'uint'
  },
  monitorCommands: {
    default: false,
    type: 'boolean'
  },
  name: {
    target: 'driverInfo',
    transform({ values: [value], options }) {
      return { ...options.driverInfo, name: String(value) };
    }
  } as OptionDescriptor,
  noDelay: {
    default: true,
    type: 'boolean'
  },
  pkFactory: {
    default: DEFAULT_PK_FACTORY,
    transform({ values: [value] }): PkFactory {
      if (isRecord(value, ['createPk'] as const) && typeof value.createPk === 'function') {
        return value as PkFactory;
      }
      throw new MongoParseError(
        `Option pkFactory must be an object with a createPk function, got ${value}`
      );
    }
  },
  promoteBuffers: {
    type: 'boolean'
  },
  promoteLongs: {
    type: 'boolean'
  },
  promoteValues: {
    type: 'boolean'
  },
  useBigInt64: {
    type: 'boolean'
  },
  proxyHost: {
    type: 'string'
  },
  proxyPassword: {
    type: 'string'
  },
  proxyPort: {
    type: 'uint'
  },
  proxyUsername: {
    type: 'string'
  },
  raw: {
    default: false,
    type: 'boolean'
  },
  readConcern: {
    transform({ values: [value], options }) {
      if (value instanceof ReadConcern || isRecord(value, ['level'] as const)) {
        return ReadConcern.fromOptions({ ...options.readConcern, ...value } as any);
      }
      throw new MongoParseError(`ReadConcern must be an object, got ${JSON.stringify(value)}`);
    }
  },
  readConcernLevel: {
    target: 'readConcern',
    transform({ values: [level], options }) {
      return ReadConcern.fromOptions({
        ...options.readConcern,
        level: level as ReadConcernLevel
      });
    }
  },
  readPreference: {
    default: ReadPreference.primary,
    transform({ values: [value], options }) {
      if (value instanceof ReadPreference) {
        return ReadPreference.fromOptions({
          readPreference: { ...options.readPreference, ...value },
          ...value
        } as any);
      }
      if (isRecord(value, ['mode'] as const)) {
        const rp = ReadPreference.fromOptions({
          readPreference: { ...options.readPreference, ...value },
          ...value
        } as any);
        if (rp) return rp;
        else throw new MongoParseError(`Cannot make read preference from ${JSON.stringify(value)}`);
      }
      if (typeof value === 'string') {
        const rpOpts = {
          hedge: options.readPreference?.hedge,
          maxStalenessSeconds: options.readPreference?.maxStalenessSeconds
        };
        return new ReadPreference(
          value as ReadPreferenceMode,
          options.readPreference?.tags,
          rpOpts
        );
      }
      throw new MongoParseError(`Unknown ReadPreference value: ${value}`);
    }
  },
  readPreferenceTags: {
    target: 'readPreference',
    transform({
      values,
      options
    }: {
      values: Array<string | Record<string, string>[]>;
      options: MongoClientOptions;
    }) {
      const tags: Array<string | Record<string, string>> = Array.isArray(values[0])
        ? values[0]
        : (values as Array<string>);
      const readPreferenceTags = [];
      for (const tag of tags) {
        const readPreferenceTag: TagSet = Object.create(null);
        if (typeof tag === 'string') {
          for (const [k, v] of entriesFromString(tag)) {
            readPreferenceTag[k] = v;
          }
        }
        if (isRecord(tag)) {
          for (const [k, v] of Object.entries(tag)) {
            readPreferenceTag[k] = v;
          }
        }
        readPreferenceTags.push(readPreferenceTag);
      }
      return ReadPreference.fromOptions({
        readPreference: options.readPreference,
        readPreferenceTags
      });
    }
  },
  replicaSet: {
    type: 'string'
  },
  retryReads: {
    default: true,
    type: 'boolean'
  },
  retryWrites: {
    default: true,
    type: 'boolean'
  },
  serializeFunctions: {
    type: 'boolean'
  },
  serverMonitoringMode: {
    default: 'auto',
    transform({ values: [value] }) {
      if (!Object.values(ServerMonitoringMode).includes(value as any)) {
        throw new MongoParseError(
          'serverMonitoringMode must be one of `auto`, `poll`, or `stream`'
        );
      }
      return value;
    }
  },
  serverSelectionTimeoutMS: {
    default: 30000,
    type: 'uint'
  },
  servername: {
    type: 'string'
  },
  socketTimeoutMS: {
    // TODO(NODE-6491): deprecated: 'Please use timeoutMS instead',
    default: 0,
    type: 'uint'
  },
  srvMaxHosts: {
    type: 'uint',
    default: 0
  },
  srvServiceName: {
    type: 'string',
    default: 'mongodb'
  },
  ssl: {
    target: 'tls',
    type: 'boolean'
  },
  timeoutMS: {
    type: 'uint'
  },
  tls: {
    type: 'boolean'
  },
  tlsAllowInvalidCertificates: {
    target: 'rejectUnauthorized',
    transform({ name, values: [value] }) {
      // allowInvalidCertificates is the inverse of rejectUnauthorized
      return !getBoolean(name, value);
    }
  },
  tlsAllowInvalidHostnames: {
    target: 'checkServerIdentity',
    transform({ name, values: [value] }) {
      // tlsAllowInvalidHostnames means setting the checkServerIdentity function to a noop
      return getBoolean(name, value) ? () => undefined : undefined;
    }
  },
  tlsCAFile: {
    type: 'string'
  },
  tlsCRLFile: {
    type: 'string'
  },
  tlsCertificateKeyFile: {
    type: 'string'
  },
  tlsCertificateKeyFilePassword: {
    target: 'passphrase',
    type: 'any'
  },
  tlsInsecure: {
    transform({ name, options, values: [value] }) {
      const tlsInsecure = getBoolean(name, value);
      if (tlsInsecure) {
        options.checkServerIdentity = () => undefined;
        options.rejectUnauthorized = false;
      } else {
        options.checkServerIdentity = options.tlsAllowInvalidHostnames
          ? () => undefined
          : undefined;
        options.rejectUnauthorized = options.tlsAllowInvalidCertificates ? false : true;
      }
      return tlsInsecure;
    }
  },
  w: {
    target: 'writeConcern',
    transform({ values: [value], options }) {
      return WriteConcern.fromOptions({ writeConcern: { ...options.writeConcern, w: value as W } });
    }
  },
  waitQueueTimeoutMS: {
    // TODO(NODE-6491): deprecated: 'Please use timeoutMS instead',
    default: 0,
    type: 'uint'
  },
  writeConcern: {
    target: 'writeConcern',
    transform({ values: [value], options }) {
      if (isRecord(value) || value instanceof WriteConcern) {
        return WriteConcern.fromOptions({
          writeConcern: {
            ...options.writeConcern,
            ...value
          }
        });
      } else if (value === 'majority' || typeof value === 'number') {
        return WriteConcern.fromOptions({
          writeConcern: {
            ...options.writeConcern,
            w: value
          }
        });
      }

      throw new MongoParseError(`Invalid WriteConcern cannot parse: ${JSON.stringify(value)}`);
    }
  },
  wtimeout: {
    deprecated: 'Please use wtimeoutMS instead',
    target: 'writeConcern',
    transform({ values: [value], options }) {
      const wc = WriteConcern.fromOptions({
        writeConcern: {
          ...options.writeConcern,
          wtimeout: getUIntFromOptions('wtimeout', value)
        }
      });
      if (wc) return wc;
      throw new MongoParseError(`Cannot make WriteConcern from wtimeout`);
    }
  } as OptionDescriptor,
  wtimeoutMS: {
    target: 'writeConcern',
    transform({ values: [value], options }) {
      const wc = WriteConcern.fromOptions({
        writeConcern: {
          ...options.writeConcern,
          wtimeoutMS: getUIntFromOptions('wtimeoutMS', value)
        }
      });
      if (wc) return wc;
      throw new MongoParseError(`Cannot make WriteConcern from wtimeout`);
    }
  },
  zlibCompressionLevel: {
    default: 0,
    type: 'int'
  },
  mongodbLogPath: {
    transform({ values: [value] }) {
      if (
        !(
          (typeof value === 'string' && ['stderr', 'stdout'].includes(value)) ||
          (value &&
            typeof value === 'object' &&
            'write' in value &&
            typeof value.write === 'function')
        )
      ) {
        throw new MongoAPIError(
          `Option 'mongodbLogPath' must be of type 'stderr' | 'stdout' | MongoDBLogWritable`
        );
      }
      return value;
    }
  },
  mongodbLogComponentSeverities: {
    transform({ values: [value] }) {
      if (typeof value !== 'object' || !value) {
        throw new MongoAPIError(`Option 'mongodbLogComponentSeverities' must be a non-null object`);
      }
      for (const [k, v] of Object.entries(value)) {
        if (typeof v !== 'string' || typeof k !== 'string') {
          throw new MongoAPIError(
            `User input for option 'mongodbLogComponentSeverities' object cannot include a non-string key or value`
          );
        }
        if (!Object.values(MongoLoggableComponent).some(val => val === k) && k !== 'default') {
          throw new MongoAPIError(
            `User input for option 'mongodbLogComponentSeverities' contains invalid key: ${k}`
          );
        }
        if (!Object.values(SeverityLevel).some(val => val === v)) {
          throw new MongoAPIError(
            `Option 'mongodbLogComponentSeverities' does not support ${v} as a value for ${k}`
          );
        }
      }
      return value;
    }
  },
  mongodbLogMaxDocumentLength: { type: 'uint' },
  // Custom types for modifying core behavior
  connectionType: { type: 'any' },
  srvPoller: { type: 'any' },
  // Accepted Node.js Options
  allowPartialTrustChain: { type: 'any' },
  minDHSize: { type: 'any' },
  pskCallback: { type: 'any' },
  secureContext: { type: 'any' },
  enableTrace: { type: 'any' },
  requestCert: { type: 'any' },
  rejectUnauthorized: { type: 'any' },
  checkServerIdentity: { type: 'any' },
  keepAliveInitialDelay: { type: 'any' },
  ALPNProtocols: { type: 'any' },
  SNICallback: { type: 'any' },
  session: { type: 'any' },
  requestOCSP: { type: 'any' },
  localAddress: { type: 'any' },
  localPort: { type: 'any' },
  hints: { type: 'any' },
  lookup: { type: 'any' },
  ca: { type: 'any' },
  cert: { type: 'any' },
  ciphers: { type: 'any' },
  crl: { type: 'any' },
  ecdhCurve: { type: 'any' },
  key: { type: 'any' },
  passphrase: { type: 'any' },
  pfx: { type: 'any' },
  secureProtocol: { type: 'any' },
  index: { type: 'any' },
  // Legacy options from v3 era
  useNewUrlParser: {
    type: 'boolean',
    deprecated:
      'useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version'
  } as OptionDescriptor,
  useUnifiedTopology: {
    type: 'boolean',
    deprecated:
      'useUnifiedTopology has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version'
  } as OptionDescriptor,
  __skipPingOnConnect: { type: 'boolean' }
} as Record<keyof MongoClientOptions, OptionDescriptor>;

export const DEFAULT_OPTIONS = new CaseInsensitiveMap(
  Object.entries(OPTIONS)
    .filter(([, descriptor]) => descriptor.default != null)
    .map(([k, d]) => [k, d.default])
);
