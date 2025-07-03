import {
  type SuperBlocks,
  getAuditedSuperBlocks
} from '../../shared/config/curriculum';

export function isAuditedSuperBlock(language: string, superblock: SuperBlocks) {
  // TODO: when all the consumers of this function use TypeScript we can remove
  // this check
  if (!language || !superblock)
    throw Error('Both arguments must be provided for auditing');

  const auditedSuperBlocks = getAuditedSuperBlocks({
    language
  });
  return auditedSuperBlocks.includes(superblock);
}
