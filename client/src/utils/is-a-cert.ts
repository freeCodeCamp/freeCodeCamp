import { SuperBlocks } from '../../../shared/config/superblocks';

export function isNewRespCert(superBlock: string): boolean {
  return superBlock === String(SuperBlocks.RespWebDesignNew);
}

export function isOldRespCert(superBlock: string): boolean {
  return superBlock === String(SuperBlocks.RespWebDesign);
}

export function isNewJsCert(superBlock: string): boolean {
  return superBlock === String(SuperBlocks.JsAlgoDataStructNew);
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
