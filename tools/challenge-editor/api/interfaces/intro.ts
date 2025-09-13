interface SuperBlock {
  title: string;
  intro: string[];
  blocks: string[];
  modules?: string[];
  chapters?: string[];
}

export interface Intro {
  [key: string]: SuperBlock;
}
