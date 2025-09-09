export interface Module {
  name: string;
  path: string;
}

export interface ChaptersWithLocation {
  modules: Module[];
  currentSuperBlock: string;
  currentChapter: string;
}
