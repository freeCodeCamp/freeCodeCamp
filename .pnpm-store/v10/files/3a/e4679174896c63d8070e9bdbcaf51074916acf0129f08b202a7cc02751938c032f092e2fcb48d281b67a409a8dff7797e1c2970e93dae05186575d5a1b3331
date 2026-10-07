// import path from 'path';
import createDebug from 'debug';
import fs from 'fs';
import { pathForDomain, withDomainSigningRequestConfig, withDomainCertificateConfig } from './constants';
import { openssl } from './utils';
import { withCertificateAuthorityCredentials } from './certificate-authority';

const debug = createDebug('devcert:certificates');

/**
 * Generate a domain certificate signed by the devcert root CA. Domain
 * certificates are cached in their own directories under
 * CONFIG_ROOT/domains/<domain>, and reused on subsequent requests. Because the
 * individual domain certificates are signed by the devcert root CA (which was
 * added to the OS/browser trust stores), they are trusted.
 */
export default async function generateDomainCertificate(domain: string): Promise<void> {
  await fs.promises.mkdir(pathForDomain(domain), { recursive: true });

  debug(`Generating private key for ${ domain }`);
  let domainKeyPath = pathForDomain(domain, 'private-key.key');
  generateKey(domainKeyPath);

  debug(`Generating certificate signing request for ${ domain }`);
  let csrFile = pathForDomain(domain, `certificate-signing-request.csr`);
  withDomainSigningRequestConfig(domain, (configpath) => {
    openssl(['req', '-new', '-config', configpath, '-key', domainKeyPath, '-out', csrFile]);
  });

  debug(`Generating certificate for ${ domain } from signing request and signing with root CA`);
  let domainCertPath = pathForDomain(domain, `certificate.crt`);

  await withCertificateAuthorityCredentials(({ caKeyPath, caCertPath }) => {
    withDomainCertificateConfig(domain, (domainCertConfigPath) => {
      openssl(['ca', '-config', domainCertConfigPath, '-in', csrFile, '-out', domainCertPath, '-keyfile', caKeyPath, '-cert', caCertPath, '-days', '825', '-batch'])
    });
  });
}

// Generate a cryptographic key, used to sign certificates or certificate signing requests.
export function generateKey(filename: string): void {
  debug(`generateKey: ${ filename }`);
  openssl(['genrsa', '-out', filename, '2048']);
  fs.chmodSync(filename, 400);
}
