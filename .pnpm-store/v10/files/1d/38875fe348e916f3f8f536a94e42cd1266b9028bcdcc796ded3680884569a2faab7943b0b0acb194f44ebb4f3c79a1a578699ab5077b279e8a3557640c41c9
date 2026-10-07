'use strict'

const os = require('node:os')
const forge = require('node-forge')

// from self-cert module
function selfCert (opts) {
  const options = opts || {}
  const log = opts.logger || require('abstract-logging')
  const now = new Date()

  if (!options.attrs) options.attrs = {}
  if (!options.expires) {
    options.expires = new Date(
      now.getFullYear() + 5, now.getMonth() + 1, now.getDate()
    )
  }

  log.debug('generating key pair')
  const keys = forge.pki.rsa.generateKeyPair(options.bits || 2048)
  log.debug('key pair generated')

  log.debug('generating self-signed certificate')
  const cert = forge.pki.createCertificate()
  cert.publicKey = keys.publicKey
  cert.serialNumber = '01'
  cert.validity.notBefore = now
  cert.validity.notAfter = options.expires

  const attrs = [
    { name: 'commonName', value: options.attrs.commonName || os.hostname() },
    { name: 'countryName', value: options.attrs.countryName || 'US' },
    { name: 'stateOrProvinceName', value: options.attrs.stateName || 'Georgia' },
    { name: 'localityName', value: options.attrs.locality || 'Atlanta' },
    { name: 'organizationName', value: options.attrs.orgName || 'None' },
    { shortName: 'OU', value: options.attrs.shortName || 'example' }
  ]
  cert.setSubject(attrs)
  cert.setIssuer(attrs)

  cert.setExtensions([
    { name: 'basicConstraints', cA: true },
    {
      name: 'keyUsage',
      keyCertSign: true,
      digitalSignature: true,
      nonRepudiation: true,
      keyEncipherment: true,
      dataEncipherment: true
    },
    {
      name: 'extKeyUsage',
      serverAuth: true,
      clientAuth: true,
      codeSigning: true,
      emailProtection: true,
      timeStamping: true
    },
    {
      name: 'nsCertType',
      client: true,
      server: true,
      email: true,
      objsign: true,
      sslCA: true,
      emailCA: true,
      objCA: true
    },
    { name: 'subjectKeyIdentifier' },
    {
      name: 'subjectAltName',
      altNames: [{ type: 6 /* URI */, value: 'DNS: ' + attrs[0].value }].concat((function () {
        const interfaces = os.networkInterfaces()

        // fix citgm: skip invalid ips (aix72-ppc64)
        const ips = Object.values(interfaces).flat()
          .filter(i => !!forge.util.bytesFromIP(i.address))
          .map(i => ({ type: 7 /* IP */, ip: i.address }))

        return ips
      }()))
    }
  ])

  cert.sign(keys.privateKey)
  log.debug('certificate generated')
  return {
    privateKey: forge.pki.privateKeyToPem(keys.privateKey),
    publicKey: forge.pki.publicKeyToPem(keys.publicKey),
    certificate: forge.pki.certificateToPem(cert)
  }
}

function buildCertificate () {
  // "global" is used in here because "t.context" is only supported by "t.beforeEach" and "t.afterEach"
  // For the test case which execute this code which will be using `t.before` and it can reduce the
  // number of times executing it.
  if (!global.context || !global.context.cert || !global.context.key) {
    const certs = selfCert({
      expires: new Date(Date.now() + 86400000)
    })
    global.context = {
      cert: certs.certificate,
      key: certs.privateKey
    }
  }
}

module.exports = { buildCertificate }
