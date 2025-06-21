import { SuperBlocks } from './curriculum';

enum Levels {
  Beginner = 'beginner',
  Intermediate = 'intermediate',
  Advanced = 'advanced'
}

interface Catalog {
  superBlock: SuperBlocks;
  level: Levels;
  hours: number;
}

export const catalog: Catalog[] = [
  {
    superBlock: SuperBlocks.BasicHtml,
    level: Levels.Beginner,
    hours: 2
  },
  {
    superBlock: SuperBlocks.SemanticHtml,
    level: Levels.Beginner,
    hours: 2
  }
];
