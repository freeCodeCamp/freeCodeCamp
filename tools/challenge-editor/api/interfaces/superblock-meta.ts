export interface SuperBlockModule {
  dashedName: string;
  blocks?: string[];
}

export interface SuperBlockChapter {
  dashedName: string;
  modules: SuperBlockModule[];
}

export interface SuperBlockMeta {
  blocks?: string[];
  chapters?: SuperBlockChapter[];
}
