import { SuperBlocks } from '../../../config/certification-settings';

export function isNewRespCert(superBlock: string): boolean {
  return superBlock === SuperBlocks.RespWebDesignNew;
}

export function isOldRespCert(superBlock: string): boolean {
  return superBlock === SuperBlocks.RespWebDesign;
}

export function isNewJsCert(superBlock: string): boolean {
  return superBlock === SuperBlocks.JsAlgoDataStructNew;
}

export function isRelationalDbCert(superBlock: string): boolean {
  return superBlock === SuperBlocks.RelationalDb;
}

export function isCollegeAlgebraPyCert(superBlock: string): boolean {
  return superBlock === SuperBlocks.CollegeAlgebraPy;
}
