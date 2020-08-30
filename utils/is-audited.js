// this can go once all certs have been audited.
function isAuditedCert(lang, cert) {
  if (!lang || !cert)
    throw Error('Both arguments must be provided for auditing');
  // in order to see the challenges in the client, add the certification that
  // contains those challenges to this array:
  const auditedCerts = [
    'responsive-web-design',
    'javascript-algorithms-and-data-structures',
    'certificates'
  ];
  return lang === 'english' || auditedCerts.includes(cert);
}

exports.isAuditedCert = isAuditedCert;
