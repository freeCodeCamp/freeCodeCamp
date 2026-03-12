import { SuperBlocks } from './curriculum';

enum Levels {
  Beginner = 'beginner',
  Intermediate = 'intermediate',
  Advanced = 'advanced'
}

enum Topic {
  Html = 'html',
  CSS = 'css',
  Js = 'js',
  React = 'react',
  Python = 'python',
  DataAnalysis = 'data-analysis',
  MachineLearning = 'machine-learning',
  D3 = 'd3',
  Api = 'api',
  InformationSecurity = 'information-security',
  ComputerFundamentals = 'computer-fundamentals',
  ComputerScience = 'computer-science',
  Math = 'math',
  Databases = 'databases',
  Bash = 'bash',
  Git = 'git',
  Editors = 'editors',
  AI = 'ai'
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
    hours: 5,
    topic: Topic.Python
  },
  {
    superBlock: SuperBlocks.LabSurveyForm,
    level: Levels.Beginner,
    hours: 2,
    topic: Topic.Html
  },
  {
    superBlock: SuperBlocks.HtmlAndAccessibility,
    level: Levels.Beginner,
    hours: 2,
    topic: Topic.Html
  },
  {
    superBlock: SuperBlocks.ComputerBasics,
    level: Levels.Beginner,
    hours: 2,
    topic: Topic.ComputerFundamentals
  },
  {
    superBlock: SuperBlocks.BasicCss,
    level: Levels.Beginner,
    hours: 3,
    topic: Topic.CSS
  },
  {
    superBlock: SuperBlocks.DesignForDevelopers,
    level: Levels.Beginner,
    hours: 2,
    topic: Topic.CSS
  },
  {
    superBlock: SuperBlocks.AbsoluteAndRelativeUnits,
    level: Levels.Intermediate,
    hours: 2,
    topic: Topic.CSS
  },
  {
    superBlock: SuperBlocks.PseudoClassesAndElements,
    level: Levels.Intermediate,
    hours: 1,
    topic: Topic.CSS
  },
  {
    superBlock: SuperBlocks.CssColors,
    level: Levels.Intermediate,
    hours: 2,
    topic: Topic.CSS
  },
  {
    superBlock: SuperBlocks.StylingForms,
    level: Levels.Intermediate,
    hours: 1,
    topic: Topic.CSS
  },
  {
    superBlock: SuperBlocks.CssBoxModel,
    level: Levels.Intermediate,
    hours: 2,
    topic: Topic.CSS
  },
  {
    superBlock: SuperBlocks.CssFlexbox,
    level: Levels.Intermediate,
    hours: 2,
    topic: Topic.CSS
  },
  {
    superBlock: SuperBlocks.LabPageOfPlayingCards,
    level: Levels.Intermediate,
    hours: 2,
    topic: Topic.CSS
  },
  {
    superBlock: SuperBlocks.CssTypography,
    level: Levels.Intermediate,
    hours: 1,
    topic: Topic.CSS
  },
  {
    superBlock: SuperBlocks.CssAndAccessibility,
    level: Levels.Intermediate,
    hours: 2,
    topic: Topic.CSS
  },
  {
    superBlock: SuperBlocks.CssPositioning,
    level: Levels.Intermediate,
    hours: 2,
    topic: Topic.CSS
  },
  {
    superBlock: SuperBlocks.AttributeSelectors,
    level: Levels.Intermediate,
    hours: 2,
    topic: Topic.CSS
  },
  {
    superBlock: SuperBlocks.LabBookInventoryApp,
    level: Levels.Beginner,
    hours: 2,
    topic: Topic.CSS
  },
  {
    superBlock: SuperBlocks.ResponsiveDesign,
    level: Levels.Intermediate,
    hours: 2,
    topic: Topic.CSS
  },
  {
    superBlock: SuperBlocks.LabTechnicalDocumentationPage,
    level: Levels.Advanced,
    hours: 1,
    topic: Topic.CSS
  },
  {
    superBlock: SuperBlocks.CssVariables,
    level: Levels.Intermediate,
    hours: 2,
    topic: Topic.CSS
  },
  {
    superBlock: SuperBlocks.CssGrid,
    level: Levels.Intermediate,
    hours: 2,
    topic: Topic.CSS
  },
  {
    superBlock: SuperBlocks.LabProductLandingPage,
    level: Levels.Beginner,
    hours: 2,
    topic: Topic.CSS
  },
  {
    superBlock: SuperBlocks.CssAnimations,
    level: Levels.Advanced,
    hours: 2,
    topic: Topic.CSS
  },
  {
    superBlock: SuperBlocks.IntroductionToAlgorithmsAndDataStructures,
    level: Levels.Intermediate,
    hours: 6,
    topic: Topic.ComputerScience
  },
  {
    superBlock: SuperBlocks.IntroductionToPrecalculus,
    level: Levels.Intermediate,
    hours: 6,
    topic: Topic.Math
  },
  {
    superBlock: SuperBlocks.IntroductionToBash,
    level: Levels.Intermediate,
    hours: 20,
    topic: Topic.Bash
  },
  {
    superBlock: SuperBlocks.IntroductionToSQLAndPostgreSQL,
    level: Levels.Intermediate,
    hours: 30,
    topic: Topic.Databases
  },
  {
    superBlock: SuperBlocks.LearnBashScripting,
    level: Levels.Intermediate,
    hours: 20,
    topic: Topic.Bash
  },
  {
    superBlock: SuperBlocks.LearnSQLAndBash,
    level: Levels.Intermediate,
    hours: 30,
    topic: Topic.Databases
  },
  {
    superBlock: SuperBlocks.IntroductionToNano,
    level: Levels.Intermediate,
    hours: 10,
    topic: Topic.Editors
  },
  {
    superBlock: SuperBlocks.IntroductionToGitAndGithub,
    level: Levels.Intermediate,
    hours: 20,
    topic: Topic.Git
  },
  {
    superBlock: SuperBlocks.LearnPromptingFundamentals,
    level: Levels.Beginner,
    hours: 1,
    topic: Topic.AI
  },
  {
    superBlock: SuperBlocks.IntroductionToPythonBasics,
    level: Levels.Intermediate,
    hours: 40,
    topic: Topic.Python
  },
  {
    superBlock: SuperBlocks.LearnPythonLoopsAndSequences,
    level: Levels.Intermediate,
    hours: 40,
    topic: Topic.Python
  },
  {
    superBlock: SuperBlocks.LearnPythonDictionariesAndSets,
    level: Levels.Intermediate,
    hours: 40,
    topic: Topic.Python
  },
  {
    superBlock: SuperBlocks.LearnErrorHandlingInPython,
    level: Levels.Intermediate,
    hours: 40,
    topic: Topic.Python
  },
  {
    superBlock: SuperBlocks.LearnPythonClassesAndObjects,
    level: Levels.Intermediate,
    hours: 40,
    topic: Topic.Python
  },
  {
    superBlock: SuperBlocks.IntroductionToOOPInPython,
    level: Levels.Intermediate,
    hours: 40,
    topic: Topic.Python
  },
  {
    superBlock: SuperBlocks.IntroductionToLinearDataStructuresInPython,
    level: Levels.Intermediate,
    hours: 40,
    topic: Topic.Python
  },
  {
    superBlock: SuperBlocks.LearnAlgorithmsInPython,
    level: Levels.Intermediate,
    hours: 40,
    topic: Topic.Python
  },
  {
    superBlock: SuperBlocks.LearnGraphsAndTreesInPython,
    level: Levels.Intermediate,
    hours: 40,
    topic: Topic.Python
  },
  {
    superBlock: SuperBlocks.LearnDynamicProgrammingInPython,
    level: Levels.Intermediate,
    hours: 40,
    topic: Topic.Python
  }
];
