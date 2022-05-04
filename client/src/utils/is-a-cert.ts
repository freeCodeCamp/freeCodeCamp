import { SuperBlocks } from '../../../config/certification-settings';

export function isNewRespCert(superBlock: string): boolean {
  return superBlock === SuperBlocks.RespWebDesignNew;
}

export function isOldRespCert(superBlock: string): boolean {
  return superBlock === SuperBlocks.RespWebDesign;
}

export function isRelationalDbCert(superBlock: string): boolean {
  return superBlock === SuperBlocks.RelationalDb;
}
