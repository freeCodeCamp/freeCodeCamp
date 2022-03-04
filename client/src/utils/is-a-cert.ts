import { SuperBlocks } from '../../../config/certification-settings';

export function IsNewRespCert(superBlock: string): boolean {
  return superBlock === SuperBlocks.RespWebDesignNew;
}

export function IsRelationalDbCert(superBlock: string): boolean {
  return superBlock === SuperBlocks.RelationalDb;
}
