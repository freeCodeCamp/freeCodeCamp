const { getAuditedSuperBlocks } = require('../config/superblock-order');

function isAuditedCert(language, superblock) {
  if (!language || !superblock)
    throw Error('Both arguments must be provided for auditing');

  const auditedSuperBlocks = getAuditedSuperBlocks({ language });
  return auditedSuperBlocks.includes(superblock);
}

exports.isAuditedCert = isAuditedCert;
