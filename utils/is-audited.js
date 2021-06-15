// this can go once all certs have been audited.

// Currently the auditing is going through Crowdin, so once a cert has been 100%
// proofread, we can add it in here. That means that translations can come
// through from Crowdin whenever they are done, but we don't show them on the
// client until we decide the entire cert is ready.

// NOTE: certificates themselves (.yml files) are not currently being
// translated, but when they are they can be included by adding 'certificates'
// to the arrays below

const { auditedCerts } = require('../config/i18n/all-langs');

function isAuditedCert(lang, cert) {
  if (!lang || !cert)
    throw Error('Both arguments must be provided for auditing');
  return lang === 'english' || auditedCerts[lang].includes(cert);
}

exports.isAuditedCert = isAuditedCert;
