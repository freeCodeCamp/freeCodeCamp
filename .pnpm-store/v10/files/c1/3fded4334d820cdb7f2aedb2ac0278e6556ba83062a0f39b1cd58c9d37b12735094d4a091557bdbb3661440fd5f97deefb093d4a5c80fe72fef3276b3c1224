import { rmSync as rm, readFileSync as readFile, readdirSync as readdir, existsSync as exists } from 'fs';
import createDebug from 'debug';
import {
  isMac,
  isLinux,
  isWindows,
  pathForDomain,
  domainsDir,
  rootCAKeyPath,
  rootCACertPath,
  VALID_DOMAIN,
  VALID_IP
} from './constants';
import currentPlatform from './platforms';
import { commandExists } from './utils';
import installCertificateAuthority, { ensureCACertReadable, uninstall } from './certificate-authority';
import generateDomainCertificate from './certificates';
import UI, { UserInterface } from './user-interface';
export { uninstall };

const debug = createDebug('devcert');

export interface Options /* extends Partial<ICaBufferOpts & ICaPathOpts>  */{
  /** Return the CA certificate data? */
  getCaBuffer?: boolean;
  /** Return the path to the CA certificate? */
  getCaPath?: boolean;
  /** If `certutil` is not installed already (for updating nss databases; e.g. firefox), do not attempt to install it */
  skipCertutilInstall?: boolean,
  /** Do not update your systems host file with the domain name of the certificate */
  skipHostsFile?: boolean,
  /** User interface hooks */
  ui?: UserInterface
}

interface ICaBuffer {
  ca: Buffer;
}
interface ICaPath {
  caPath: string;
}
interface IDomainData {
  key: Buffer;
  cert: Buffer;
}
type IReturnCa<O extends Options> = O['getCaBuffer'] extends true ? ICaBuffer : false;
type IReturnCaPath<O extends Options> = O['getCaPath'] extends true ? ICaPath : false;
type IReturnData<O extends Options = {}> = (IDomainData) & (IReturnCa<O>) & (IReturnCaPath<O>);

/**
 * Request an SSL certificate for the given app name signed by the devcert root
 * certificate authority. If devcert has previously generated a certificate for
 * that app name on this machine, it will reuse that certificate.
 *
 * If this is the first time devcert is being run on this machine, it will
 * generate and attempt to install a root certificate authority.
 *
 * Returns a promise that resolves with { key, cert }, where `key` and `cert`
 * are Buffers with the contents of the certificate private key and certificate
 * file, respectively
 * 
 * If `options.getCaBuffer` is true, return value will include the ca certificate data
 * as { ca: Buffer }
 * 
 * If `options.getCaPath` is true, return value will include the ca certificate path
 * as { caPath: string }
 */
export async function certificateFor<O extends Options>(domain: string, options: O = {} as O): Promise<IReturnData<O>> {
  if (VALID_IP.test(domain)) {
    throw new Error('IP addresses are not supported currently');
  }
  if (!VALID_DOMAIN.test(domain)) {
    throw new Error(`"${domain}" is not a valid domain name.`);
  }
  debug(`Certificate requested for ${ domain }. Skipping certutil install: ${ Boolean(options.skipCertutilInstall) }. Skipping hosts file: ${ Boolean(options.skipHostsFile) }`);

  if (options.ui) {
    Object.assign(UI, options.ui);
  }

  if (!isMac && !isLinux && !isWindows) {
    throw new Error(`Platform not supported: "${ process.platform }"`);
  }

  if (!commandExists('openssl')) {
    throw new Error('OpenSSL not found: OpenSSL is required to generate SSL certificates - make sure it is installed and available in your PATH');
  }

  let domainKeyPath = pathForDomain(domain, `private-key.key`);
  let domainCertPath = pathForDomain(domain, `certificate.crt`);

  if (!exists(rootCAKeyPath)) {
    debug('Root CA is not installed yet, so it must be our first run. Installing root CA ...');
    await installCertificateAuthority(options);
  } else if (options.getCaBuffer || options.getCaPath) {
    debug('Root CA is not readable, but it probably is because an earlier version of devcert locked it. Trying to fix...');
    await ensureCACertReadable(options);
  }

  if (!exists(pathForDomain(domain, `certificate.crt`))) {
    debug(`Can't find certificate file for ${ domain }, so it must be the first request for ${ domain }. Generating and caching ...`);
    await generateDomainCertificate(domain);
  }

  if (!options.skipHostsFile) {
    await currentPlatform.addDomainToHostFileIfMissing(domain);
  }

  debug(`Returning domain certificate`);

  const ret = {
    key: readFile(domainKeyPath),
    cert: readFile(domainCertPath)
  } as IReturnData<O>;
  if (options.getCaBuffer) (ret as ICaBuffer).ca = readFile(rootCACertPath);
  if (options.getCaPath) (ret as ICaPath).caPath = rootCACertPath;

  return ret;
}

export function hasCertificateFor(domain: string) {
  return exists(pathForDomain(domain, `certificate.crt`));
}

export function configuredDomains() {
  return readdir(domainsDir);
}

export function removeDomain(domain: string) {
  return rm(pathForDomain(domain), { force: true, recursive: true });
}
