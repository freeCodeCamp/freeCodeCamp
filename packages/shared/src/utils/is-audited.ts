import { type SuperBlocks, getAuditedSuperBlocks } from '../config/curriculum';

export function isAuditedSuperBlock(language: string, superblock: SuperBlocks) {
  const auditedSuperBlocks = getAuditedSuperBlocks({
    language
  });
  return auditedSuperBlocks.includes(superblock);
}
