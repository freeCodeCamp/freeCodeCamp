import { SuperBlocks } from '../../../config/certification-settings';

export function IsNewRespCert(superBlock: string): boolean {
  return superBlock === SuperBlocks.RespWebDesignNew;
}

export function IsRelationadDbCert(superBlock: string): boolean {
  return superBlock === SuperBlocks.RelationalDb;
}
