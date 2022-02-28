import { SuperBlocks } from '../../../config/certification-settings';

export default function IsNewRespCert(superBlock: string): boolean {
  return superBlock === SuperBlocks.RespWebDesignNew;
}
