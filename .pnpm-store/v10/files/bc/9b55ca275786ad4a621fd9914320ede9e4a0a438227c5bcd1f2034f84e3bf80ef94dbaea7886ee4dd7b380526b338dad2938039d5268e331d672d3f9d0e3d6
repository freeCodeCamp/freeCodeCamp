// @flow
import type {FileSystem} from '@parcel/fs';
import forge from 'node-forge';
import path from 'path';
import logger from '@parcel/logger';

export default async function generateCertificate(
  fs: FileSystem,
  cacheDir: string,
  host: ?string,
): Promise<{|cert: Buffer, key: Buffer|}> {
  let certDirectory = cacheDir;

  const privateKeyPath = path.join(certDirectory, 'private.pem');
  const certPath = path.join(certDirectory, 'primary.crt');
  const cachedKey =
    (await fs.exists(privateKeyPath)) && (await fs.readFile(privateKeyPath));
  const cachedCert =
    (await fs.exists(certPath)) && (await fs.readFile(certPath));

  if (cachedKey && cachedCert) {
    return {
      key: cachedKey,
      cert: cachedCert,
    };
  }

  logger.progress('Generating SSL Certificate...');

  const pki = forge.pki;
  const keys = pki.rsa.generateKeyPair(2048);
  const cert = pki.createCertificate();

  cert.publicKey = keys.publicKey;
  cert.serialNumber = Date.now().toString();
  cert.validity.notBefore = new Date();
  cert.validity.notAfter = new Date();
  cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 1);

  const attrs = [
    {
      name: 'commonName',
      value: 'parceljs.org',
    },
    {
      name: 'countryName',
      value: 'US',
    },
    {
      shortName: 'ST',
      value: 'Virginia',
    },
    {
      name: 'localityName',
      value: 'Blacksburg',
    },
    {
      name: 'organizationName',
      value: 'parcelBundler',
    },
    {
      shortName: 'OU',
      value: 'Test',
    },
  ];

  let altNames = [
    {
      type: 2, // DNS
      value: 'localhost',
    },
    {
      type: 7, // IP
      ip: '127.0.0.1',
    },
  ];

  if (host) {
    altNames.push({
      type: 2, // DNS
      value: host,
    });
  }

  cert.setSubject(attrs);
  cert.setIssuer(attrs);
  cert.setExtensions([
    {
      name: 'basicConstraints',
      cA: false,
    },
    {
      name: 'keyUsage',
      keyCertSign: true,
      digitalSignature: true,
      nonRepudiation: true,
      keyEncipherment: true,
      dataEncipherment: true,
    },
    {
      name: 'extKeyUsage',
      serverAuth: true,
      clientAuth: true,
      codeSigning: true,
      emailProtection: true,
      timeStamping: true,
    },
    {
      name: 'nsCertType',
      client: true,
      server: true,
      email: true,
      objsign: true,
      sslCA: true,
      emailCA: true,
      objCA: true,
    },
    {
      name: 'subjectAltName',
      altNames,
    },
    {
      name: 'subjectKeyIdentifier',
    },
  ]);

  cert.sign(keys.privateKey, forge.md.sha256.create());

  const privPem = pki.privateKeyToPem(keys.privateKey);
  const certPem = pki.certificateToPem(cert);

  await fs.mkdirp(certDirectory);
  await fs.writeFile(privateKeyPath, privPem);
  await fs.writeFile(certPath, certPem);

  return {
    key: privPem,
    cert: certPem,
  };
}
