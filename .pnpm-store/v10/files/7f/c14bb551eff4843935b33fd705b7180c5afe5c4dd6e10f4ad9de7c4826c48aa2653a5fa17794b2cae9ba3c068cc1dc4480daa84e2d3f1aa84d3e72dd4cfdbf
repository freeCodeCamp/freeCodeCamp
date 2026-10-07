// @flow strict-local

// $FlowFixMe
import {version} from '../package.json';

export const PARCEL_VERSION = version;
export const HASH_REF_PREFIX = 'HASH_REF_';
export const HASH_REF_REGEX: RegExp = new RegExp(
  `${HASH_REF_PREFIX}\\w{16}`,
  'g',
);

export const VALID = 0;
export const INITIAL_BUILD = 1 << 0;
export const FILE_CREATE = 1 << 1;
export const FILE_UPDATE = 1 << 2;
export const FILE_DELETE = 1 << 3;
export const ENV_CHANGE = 1 << 4;
export const OPTION_CHANGE = 1 << 5;
export const STARTUP = 1 << 6;
export const ERROR = 1 << 7;
