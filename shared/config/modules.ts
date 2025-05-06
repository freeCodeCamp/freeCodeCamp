export interface Module {
  dashedName: string;
  comingSoon?: boolean;
  blocks: {
    dashedName: string;
  }[];
  moduleType?: string;
}
