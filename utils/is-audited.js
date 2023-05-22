const { getAuditedSuperBlocks } = require('../config/superblock-order');
const { Languages } = require('../config/i18n');

function isAuditedCert(language, superblock) {
  if (!language || !superblock)
    throw Error('Both arguments must be provided for auditing');

  if (language === Languages.English) {
    return true;
  }

  const auditedSuperBlocks = getAuditedSuperBlocks({ language });
  return auditedSuperBlocks.includes(superblock);
}

exports.isAuditedCert = isAuditedCert;
