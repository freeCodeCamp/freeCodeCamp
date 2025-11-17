import { BlockLabel } from './blocks';

export interface Module {
  dashedName: string;
  comingSoon?: boolean;
  blocks: string[];
  moduleType?: BlockLabel;
}
