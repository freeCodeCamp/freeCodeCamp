import { SuperBlocks } from '../../../shared-dist/config/curriculum';

export function isRelationalDbCert(superBlock: string): boolean {
  return superBlock === String(SuperBlocks.RelationalDb);
}

export function isExamCert(superBlock: string): boolean {
  return superBlock === String(SuperBlocks.FoundationalCSharp);
}
