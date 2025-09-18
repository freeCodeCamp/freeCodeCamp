export interface Block {
  name: string;
  path: string;
}

export interface BlocksWithSuperBlock {
  blocks: Block[];
  currentSuperBlock: string;
}

export interface BlocksWithModule {
  blocks: Block[];
  currentModule: string;
  currentChapter: string;
}
