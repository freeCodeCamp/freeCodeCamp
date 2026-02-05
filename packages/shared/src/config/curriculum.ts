// TODO: eventually this should all flow from the curriculum service, since it
// defines the top-level structure of the curriculum.
import { Languages } from './i18n.js';

// all superblocks
export enum SuperBlocks {
  RespWebDesignNew = '2022/responsive-web-design',
  RespWebDesign = 'responsive-web-design',
  JsAlgoDataStruct = 'javascript-algorithms-and-data-structures',
  JsAlgoDataStructNew = 'javascript-algorithms-and-data-structures-v8',
  FrontEndDevLibs = 'front-end-development-libraries',
  DataVis = 'data-visualization',
  RelationalDb = 'relational-database',
  BackEndDevApis = 'back-end-development-and-apis',
  QualityAssurance = 'quality-assurance',
  SciCompPy = 'scientific-computing-with-python',
  DataAnalysisPy = 'data-analysis-with-python',
  InfoSec = 'information-security',
  MachineLearningPy = 'machine-learning-with-python',
  CodingInterviewPrep = 'coding-interview-prep',
  TheOdinProject = 'the-odin-project',
  ProjectEuler = 'project-euler',
  CollegeAlgebraPy = 'college-algebra-with-python',
  FoundationalCSharp = 'foundational-c-sharp-with-microsoft',
  A2English = 'a2-english-for-developers',
  B1English = 'b1-english-for-developers',
  A1Spanish = 'a1-professional-spanish',
  A2Spanish = 'a2-professional-spanish',
  A2Chinese = 'a2-professional-chinese',
  A1Chinese = 'a1-professional-chinese',
  RosettaCode = 'rosetta-code',
  PythonForEverybody = 'python-for-everybody',
  BasicHtml = 'basic-html',
  SemanticHtml = 'semantic-html',
  DevPlayground = 'dev-playground',
  FullStackOpen = 'full-stack-open',
  RespWebDesignV9 = 'responsive-web-design-v9',
  JsV9 = 'javascript-v9',
  FrontEndDevLibsV9 = 'front-end-development-libraries-v9',
  PythonV9 = 'python-v9',
  RelationalDbV9 = 'relational-databases-v9',
  BackEndDevApisV9 = 'back-end-development-and-apis-v9',
  FullStackDeveloperV9 = 'full-stack-developer-v9',
  HtmlFormsAndTables = 'html-forms-and-tables',
  LabSurveyForm = 'lab-survey-form',
  HtmlAndAccessibility = 'html-and-accessibility',
  ComputerBasics = 'computer-basics',
  BasicCss = 'basic-css',
  DesignForDevelopers = 'design-for-developers',
  AbsoluteAndRelativeUnits = 'absolute-and-relative-units',
  PseudoClassesAndElements = 'pseudo-classes-and-elements',
  CssColors = 'css-colors',
  StylingForms = 'styling-forms',
  CssBoxModel = 'css-box-model',
  CssFlexbox = 'css-flexbox',
  LabPageOfPlayingCards = 'lab-page-of-playing-cards',
  CssTypography = 'css-typography',
  CssAndAccessibility = 'css-and-accessibility',
  CssPositioning = 'css-positioning',
  AttributeSelectors = 'attribute-selectors',
  LabBookInventoryApp = 'lab-book-inventory-app',
  ResponsiveDesign = 'responsive-design',
  LabTechnicalDocumentationPage = 'lab-technical-documentation-page',
  CssVariables = 'css-variables',
  CssGrid = 'css-grid',
  LabProductLandingPage = 'lab-product-landing-page',
  CssAnimations = 'css-animations',
  LearnPythonForBeginners = 'learn-python-for-beginners'
}

export const languageSuperBlocks = [
  SuperBlocks.A2English,
  SuperBlocks.B1English,
  SuperBlocks.A1Spanish,
  SuperBlocks.A2Spanish,
  SuperBlocks.A1Chinese,
  SuperBlocks.A2Chinese
];

export enum ChallengeLang {
  English = 'en-US',
  Spanish = 'es',
  Chinese = 'zh-CN'
}

// Mapping from superblock to a speech recognition language (BCP-47)
export const superBlockToSpeechLang: Partial<
  Record<SuperBlocks, ChallengeLang>
> = {
  [SuperBlocks.A1Chinese]: ChallengeLang.Chinese,
  [SuperBlocks.A2Chinese]: ChallengeLang.Chinese,
  [SuperBlocks.A2English]: ChallengeLang.English,
  [SuperBlocks.B1English]: ChallengeLang.English,
  [SuperBlocks.A1Spanish]: ChallengeLang.Spanish,
  [SuperBlocks.A2Spanish]: ChallengeLang.Spanish
};

/*
 * SuperBlockStages.Upcoming = SHOW_UPCOMING_CHANGES === 'true'
 * 'Upcoming' is for development -> not shown on stag or prod anywhere
 *
 * SuperBlockStages.Next = deployed, but only shown if the Growthbook feature
 * is enabled.
 *
 */
export enum SuperBlockStage {
  Core,
  English,
  Spanish,
  Chinese,
  Professional,
  Extra,
  Legacy,
  Upcoming,
  Next,
  Catalog
}

const defaultStageOrder = [
  SuperBlockStage.Core,
  SuperBlockStage.English,
  SuperBlockStage.Spanish,
  SuperBlockStage.Chinese,
  SuperBlockStage.Extra,
  SuperBlockStage.Legacy,
  SuperBlockStage.Professional,
  SuperBlockStage.Next
];

export function getStageOrder({
  showUpcomingChanges
}: Config): SuperBlockStage[] {
  const stageOrder = [...defaultStageOrder];

  if (showUpcomingChanges) {
    stageOrder.push(SuperBlockStage.Upcoming, SuperBlockStage.Catalog);
  }
  return stageOrder;
}

export type StageMap = {
  [key in SuperBlockStage]: SuperBlocks[];
};

// Groups of superblocks in learn map. This should include all superblocks.
export const superBlockStages: StageMap = {
  [SuperBlockStage.Core]: [
    SuperBlocks.RespWebDesignV9,
    SuperBlocks.JsV9,
    SuperBlocks.FrontEndDevLibsV9,
    SuperBlocks.PythonV9,
    SuperBlocks.RelationalDbV9,
    SuperBlocks.BackEndDevApisV9,
    SuperBlocks.FullStackDeveloperV9
  ],
  [SuperBlockStage.English]: [SuperBlocks.A2English, SuperBlocks.B1English],
  [SuperBlockStage.Spanish]: [SuperBlocks.A1Spanish],
  [SuperBlockStage.Chinese]: [SuperBlocks.A1Chinese],
  [SuperBlockStage.Professional]: [SuperBlocks.FoundationalCSharp],
  [SuperBlockStage.Extra]: [
    SuperBlocks.TheOdinProject,
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.RosettaCode
  ],
  [SuperBlockStage.Legacy]: [
    SuperBlocks.RespWebDesignNew,
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.FrontEndDevLibs,
    SuperBlocks.DataVis,
    SuperBlocks.RelationalDb,
    SuperBlocks.BackEndDevApis,
    SuperBlocks.QualityAssurance,
    SuperBlocks.SciCompPy,
    SuperBlocks.DataAnalysisPy,
    SuperBlocks.InfoSec,
    SuperBlocks.MachineLearningPy,
    SuperBlocks.CollegeAlgebraPy,
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.PythonForEverybody
  ],
  [SuperBlockStage.Next]: [],
  [SuperBlockStage.Upcoming]: [
    SuperBlocks.FullStackOpen,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.DevPlayground
  ],
  // Catalog is treated like upcoming for now
  // Add catalog superBlocks to catalog.ts when adding new superBlocks
  [SuperBlockStage.Catalog]: [
    SuperBlocks.HtmlFormsAndTables,
    SuperBlocks.BasicHtml,
    SuperBlocks.SemanticHtml,
    SuperBlocks.LabSurveyForm,
    SuperBlocks.HtmlAndAccessibility,
    SuperBlocks.ComputerBasics,
    SuperBlocks.BasicCss,
    SuperBlocks.DesignForDevelopers,
    SuperBlocks.AbsoluteAndRelativeUnits,
    SuperBlocks.PseudoClassesAndElements,
    SuperBlocks.CssColors,
    SuperBlocks.StylingForms,
    SuperBlocks.CssBoxModel,
    SuperBlocks.CssFlexbox,
    SuperBlocks.LabPageOfPlayingCards,
    SuperBlocks.CssTypography,
    SuperBlocks.CssAndAccessibility,
    SuperBlocks.CssPositioning,
    SuperBlocks.AttributeSelectors,
    SuperBlocks.LabBookInventoryApp,
    SuperBlocks.ResponsiveDesign,
    SuperBlocks.LabTechnicalDocumentationPage,
    SuperBlocks.CssVariables,
    SuperBlocks.CssGrid,
    SuperBlocks.LabProductLandingPage,
    SuperBlocks.CssAnimations,
    SuperBlocks.LearnPythonForBeginners
  ]
};

Object.freeze(superBlockStages);

export const archivedSuperBlocks = superBlockStages[SuperBlockStage.Legacy];

type NotAuditedSuperBlocks = {
  [key in Languages]: SuperBlocks[];
};

// when a superBlock is audited, remove it from its language below
// when adding a new language, add all (not audited) superblocks to the object
export const notAuditedSuperBlocks: NotAuditedSuperBlocks = {
  [Languages.English]: [],
  [Languages.Espanol]: [],
  [Languages.Chinese]: [
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.TheOdinProject,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A1Spanish,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.A1Chinese,
    SuperBlocks.PythonForEverybody,
    SuperBlocks.BasicHtml,
    SuperBlocks.SemanticHtml,
    SuperBlocks.DevPlayground,
    SuperBlocks.RespWebDesignV9,
    SuperBlocks.JsV9,
    SuperBlocks.FrontEndDevLibsV9,
    SuperBlocks.PythonV9,
    SuperBlocks.RelationalDbV9,
    SuperBlocks.BackEndDevApisV9,
    SuperBlocks.FullStackDeveloperV9
  ],
  [Languages.ChineseTraditional]: [
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.TheOdinProject,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A1Spanish,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.A1Chinese,
    SuperBlocks.PythonForEverybody,
    SuperBlocks.BasicHtml,
    SuperBlocks.SemanticHtml,
    SuperBlocks.DevPlayground,
    SuperBlocks.RespWebDesignV9,
    SuperBlocks.JsV9,
    SuperBlocks.FrontEndDevLibsV9,
    SuperBlocks.PythonV9,
    SuperBlocks.RelationalDbV9,
    SuperBlocks.BackEndDevApisV9,
    SuperBlocks.FullStackDeveloperV9
  ],
  [Languages.Italian]: [
    SuperBlocks.FoundationalCSharp,
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.TheOdinProject,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A1Spanish,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.A1Chinese,
    SuperBlocks.PythonForEverybody,
    SuperBlocks.BasicHtml,
    SuperBlocks.SemanticHtml,
    SuperBlocks.DevPlayground,
    SuperBlocks.RespWebDesignV9,
    SuperBlocks.JsV9,
    SuperBlocks.FrontEndDevLibsV9,
    SuperBlocks.PythonV9,
    SuperBlocks.RelationalDbV9,
    SuperBlocks.BackEndDevApisV9,
    SuperBlocks.FullStackDeveloperV9
  ],
  [Languages.Portuguese]: [],
  [Languages.Ukrainian]: [
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A1Spanish,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.A1Chinese,
    SuperBlocks.BasicHtml,
    SuperBlocks.SemanticHtml,
    SuperBlocks.DevPlayground,
    SuperBlocks.RespWebDesignV9,
    SuperBlocks.JsV9,
    SuperBlocks.FrontEndDevLibsV9,
    SuperBlocks.PythonV9,
    SuperBlocks.RelationalDbV9,
    SuperBlocks.BackEndDevApisV9,
    SuperBlocks.FullStackDeveloperV9
  ],
  [Languages.Japanese]: [
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.TheOdinProject,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A1Spanish,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.A1Chinese,
    SuperBlocks.BasicHtml,
    SuperBlocks.SemanticHtml,
    SuperBlocks.DevPlayground,
    SuperBlocks.RespWebDesignV9,
    SuperBlocks.JsV9,
    SuperBlocks.FrontEndDevLibsV9,
    SuperBlocks.PythonV9,
    SuperBlocks.RelationalDbV9,
    SuperBlocks.BackEndDevApisV9,
    SuperBlocks.FullStackDeveloperV9
  ],
  [Languages.German]: [
    SuperBlocks.RelationalDb,
    SuperBlocks.QualityAssurance,
    SuperBlocks.InfoSec,
    SuperBlocks.MachineLearningPy,
    SuperBlocks.CollegeAlgebraPy,
    SuperBlocks.FoundationalCSharp,
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.TheOdinProject,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A1Spanish,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.A1Chinese,
    SuperBlocks.PythonForEverybody,
    SuperBlocks.BasicHtml,
    SuperBlocks.SemanticHtml,
    SuperBlocks.DevPlayground,
    SuperBlocks.RespWebDesignV9,
    SuperBlocks.JsV9,
    SuperBlocks.FrontEndDevLibsV9,
    SuperBlocks.PythonV9,
    SuperBlocks.RelationalDbV9,
    SuperBlocks.BackEndDevApisV9,
    SuperBlocks.FullStackDeveloperV9
  ],
  [Languages.Swahili]: [
    SuperBlocks.DataVis,
    SuperBlocks.RelationalDb,
    SuperBlocks.BackEndDevApis,
    SuperBlocks.QualityAssurance,
    SuperBlocks.SciCompPy,
    SuperBlocks.DataAnalysisPy,
    SuperBlocks.InfoSec,
    SuperBlocks.MachineLearningPy,
    SuperBlocks.CollegeAlgebraPy,
    SuperBlocks.FoundationalCSharp,
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.TheOdinProject,
    SuperBlocks.RespWebDesign,
    SuperBlocks.FrontEndDevLibs,
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A1Spanish,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.A1Chinese,
    SuperBlocks.PythonForEverybody,
    SuperBlocks.BasicHtml,
    SuperBlocks.SemanticHtml,
    SuperBlocks.DevPlayground,
    SuperBlocks.RespWebDesignV9,
    SuperBlocks.JsV9,
    SuperBlocks.FrontEndDevLibsV9,
    SuperBlocks.PythonV9,
    SuperBlocks.RelationalDbV9,
    SuperBlocks.BackEndDevApisV9,
    SuperBlocks.FullStackDeveloperV9
  ],
  [Languages.Korean]: [
    SuperBlocks.RespWebDesignNew,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.BackEndDevApis,
    SuperBlocks.QualityAssurance,
    SuperBlocks.SciCompPy,
    SuperBlocks.DataAnalysisPy,
    SuperBlocks.InfoSec,
    SuperBlocks.MachineLearningPy,
    SuperBlocks.CollegeAlgebraPy,
    SuperBlocks.FoundationalCSharp,
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.TheOdinProject,
    SuperBlocks.FrontEndDevLibs,
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A1Spanish,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.A1Chinese,
    SuperBlocks.PythonForEverybody,
    SuperBlocks.DataVis,
    SuperBlocks.RelationalDb,
    SuperBlocks.RosettaCode,
    SuperBlocks.BasicHtml,
    SuperBlocks.SemanticHtml,
    SuperBlocks.DevPlayground,
    SuperBlocks.RespWebDesignV9,
    SuperBlocks.JsV9,
    SuperBlocks.FrontEndDevLibsV9,
    SuperBlocks.PythonV9,
    SuperBlocks.RelationalDbV9,
    SuperBlocks.BackEndDevApisV9,
    SuperBlocks.FullStackDeveloperV9
  ]
};

Object.freeze(notAuditedSuperBlocks);

export const chapterBasedSuperBlocks = [
  SuperBlocks.FullStackOpen,
  SuperBlocks.A1Spanish,
  SuperBlocks.RespWebDesignV9,
  SuperBlocks.JsV9,
  SuperBlocks.FrontEndDevLibsV9,
  SuperBlocks.PythonV9,
  SuperBlocks.RelationalDbV9,
  SuperBlocks.BackEndDevApisV9,
  SuperBlocks.FullStackDeveloperV9,
  SuperBlocks.A1Chinese
];
Object.freeze(chapterBasedSuperBlocks);

export const certificationCollectionSuperBlocks = [
  SuperBlocks.FullStackDeveloperV9
];
Object.freeze(certificationCollectionSuperBlocks);

type Config = {
  showUpcomingChanges: boolean;
};

export function generateSuperBlockList(config: Config): SuperBlocks[] {
  return getStageOrder(config)
    .map(stage => superBlockStages[stage])
    .flat();
}

export function getAuditedSuperBlocks({
  language = 'english'
}: {
  language: string;
}): SuperBlocks[] {
  if (!Object.prototype.hasOwnProperty.call(notAuditedSuperBlocks, language)) {
    throw Error(`'${language}' key not found in 'notAuditedSuperBlocks'`);
  }

  // To find the audited superblocks, we need to start with all superblocks.
  const flatSuperBlockMap = generateSuperBlockList({
    showUpcomingChanges: true
  });
  const auditedSuperBlocks = flatSuperBlockMap.filter(
    superBlock =>
      !notAuditedSuperBlocks[language as Languages].includes(superBlock)
  );
  return auditedSuperBlocks;
}
