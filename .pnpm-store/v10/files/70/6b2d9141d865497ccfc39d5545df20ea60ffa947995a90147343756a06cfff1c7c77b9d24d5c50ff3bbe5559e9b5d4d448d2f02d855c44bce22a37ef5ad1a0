import path from 'path';
import fs from 'fs';
import { mktmp } from './utils';

function applicationConfigPath(name: string): string {
  switch (process.platform) {
    case 'darwin':
      return path.join(process.env.HOME, 'Library', 'Application Support', name);
    case 'win32':
      return process.env.LOCALAPPDATA
        ? path.join(process.env.LOCALAPPDATA, name)
        : path.join(process.env.USERPROFILE, 'Local Settings', 'Application Data', name);
    case 'linux':
    default:
      return process.env.XDG_CONFIG_HOME
        ? path.join(process.env.XDG_CONFIG_HOME, name)
        : path.join(process.env.HOME, '.config', name);
  }
}

export const VALID_IP = /(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}/;
export const VALID_DOMAIN = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.?)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/i;

// Platform shortcuts
export const isMac = process.platform === 'darwin';
export const isLinux = process.platform === 'linux';
export const isWindows = process.platform === 'win32';

// Common paths
export const configDir = applicationConfigPath('devcert');
export const configPath: (...pathSegments: string[]) => string = path.join.bind(path, configDir);

export const domainsDir = configPath('domains');
export const pathForDomain: (domain: string, ...pathSegments: string[]) => string = path.join.bind(path, domainsDir)

export const caVersionFile = configPath('devcert-ca-version');
export const opensslSerialFilePath = configPath('certificate-authority', 'serial');
export const opensslDatabaseFilePath = configPath('certificate-authority', 'index.txt');
export const caSelfSignConfig = path.join(__dirname, '../openssl-configurations/certificate-authority-self-signing.conf');

function eolAuto(str: string): string {
  return str.replace(/\r?\n|\r/g, isWindows ? '\r\n' : '\n');
}

export function withDomainSigningRequestConfig(domain: string, cb: (filepath: string) => void) {
  let tmpFile = mktmp();
  let source = fs.readFileSync(path.join(__dirname, '../openssl-configurations/domain-certificate-signing-requests.conf'), 'utf-8');
  let result = source.replace(/%DOMAIN%/g, domain);
  fs.writeFileSync(tmpFile, eolAuto(result));
  cb(tmpFile);
  fs.rmSync(tmpFile);
}

export function withDomainCertificateConfig(domain: string, cb: (filepath: string) => void) {
  let tmpFile = mktmp();
  let source = fs.readFileSync(path.join(__dirname, '../openssl-configurations/domain-certificates.conf'), 'utf-8');
  let result = source
    .replace(/%DOMAIN%/g, domain)
    .replace(/%SERIALFILE%/g, opensslSerialFilePath.replace(/\\/g, '\\\\'))
    .replace(/%DATABASEFILE%/g, opensslDatabaseFilePath.replace(/\\/g, '\\\\'))
    .replace(/%DOMAINDIR%/g, pathForDomain(domain).replace(/\\/g, '\\\\'))
  fs.writeFileSync(tmpFile, eolAuto(result));
  cb(tmpFile);
  fs.rmSync(tmpFile);
}

  // confTemplate = confTemplate.replace(/DATABASE_PATH/, configPath('index.txt').replace(/\\/g, '\\\\'));
  // confTemplate = confTemplate.replace(/SERIAL_PATH/, configPath('serial').replace(/\\/g, '\\\\'));
  // confTemplate = eolAuto(confTemplate);

export const rootCADir = configPath('certificate-authority');
export const rootCAKeyPath = configPath('certificate-authority', 'private-key.key');
export const rootCACertPath = configPath('certificate-authority', 'certificate.cert');



// Exposed for uninstallation purposes.
export function getLegacyConfigDir(): string {
  if (isWindows && process.env.LOCALAPPDATA) {
    return path.join(process.env.LOCALAPPDATA, 'devcert', 'config');
  } else {
    let uid = process.getuid && process.getuid();
    let userHome = (isLinux && uid === 0) ? path.resolve('/usr/local/share') : require('os').homedir();
    return path.join(userHome, '.config', 'devcert');
  }
}

export function ensureConfigDirs() {
  fs.mkdirSync(configDir, { recursive: true });
  fs.mkdirSync(domainsDir, { recursive: true });
  fs.mkdirSync(rootCADir, { recursive: true });
}

ensureConfigDirs();
