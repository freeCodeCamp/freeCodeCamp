import { SuperBlocks } from '../../../shared/config/superblocks';

export function isOldRespCert(superBlock: string): boolean {
  return superBlock === String(SuperBlocks.RespWebDesign);
}

export function isRelationalDbCert(superBlock: string): boolean {
  return superBlock === String(SuperBlocks.RelationalDb);
}

export function isCollegeAlgebraPyCert(superBlock: string): boolean {
  return superBlock === String(SuperBlocks.CollegeAlgebraPy);
}

export function isSciCompPyCert(superBlock: string): boolean {
  return superBlock === String(SuperBlocks.SciCompPy);
}
