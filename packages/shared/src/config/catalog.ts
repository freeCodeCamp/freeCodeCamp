import { SuperBlocks } from './curriculum';

enum Levels {
  Beginner = 'beginner',
  Intermediate = 'intermediate',
  Advanced = 'advanced'
}

enum Topic {
  Html = 'html',
  Css = 'css',
  Js = 'js',
  React = 'react',
  Python = 'python',
  DataAnalysis = 'data-analysis',
  MachineLearning = 'machine-learning',
  D3 = 'd3',
  Api = 'api',
  InformationSecurity = 'information-security',
  ComputerFundamentals = 'computer-fundamentals'
}

interface Catalog {
  superBlock: SuperBlocks;
  level: Levels;
  hours: number;
  topic: Topic;
}

export const catalog: Catalog[] = [
  {
    superBlock: SuperBlocks.HtmlFormsAndTables,
    level: Levels.Beginner,
    hours: 2,
    topic: Topic.Html
  },
  {
    superBlock: SuperBlocks.SemanticHtml,
    level: Levels.Beginner,
    hours: 2,
    topic: Topic.Html
  },
  {
    superBlock: SuperBlocks.BasicHtml,
    level: Levels.Beginner,
    hours: 3,
    topic: Topic.Html
  },
  {
    superBlock: SuperBlocks.LearnPythonForBeginners,
    level: Levels.Beginner,
    hours: 3,
    topic: Topic.Python
  }
];
