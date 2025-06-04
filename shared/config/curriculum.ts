// TODO: eventually this should all flow from the curriculum service, since it
// defines the top-level structure of the curriculum.
import { Languages } from './i18n';

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
  FullStackDeveloper = 'full-stack-developer',
  A2English = 'a2-english-for-developers',
  B1English = 'b1-english-for-developers',
  A2Spanish = 'a2-professional-spanish',
  A2Chinese = 'a2-professional-chinese',
  RosettaCode = 'rosetta-code',
  PythonForEverybody = 'python-for-everybody',
  DevPlayground = 'dev-playground'
}

// Note that this object is used to create folderToSuperBlockMap object
export const superBlockToFolderMap = {
  [SuperBlocks.RespWebDesign]: '01-responsive-web-design',
  [SuperBlocks.JsAlgoDataStruct]:
    '02-javascript-algorithms-and-data-structures',
  [SuperBlocks.FrontEndDevLibs]: '03-front-end-development-libraries',
  [SuperBlocks.DataVis]: '04-data-visualization',
  [SuperBlocks.BackEndDevApis]: '05-back-end-development-and-apis',
  [SuperBlocks.QualityAssurance]: '06-quality-assurance',
  [SuperBlocks.SciCompPy]: '07-scientific-computing-with-python',
  [SuperBlocks.DataAnalysisPy]: '08-data-analysis-with-python',
  [SuperBlocks.InfoSec]: '09-information-security',
  [SuperBlocks.CodingInterviewPrep]: '10-coding-interview-prep',
  [SuperBlocks.MachineLearningPy]: '11-machine-learning-with-python',
  [SuperBlocks.RelationalDb]: '13-relational-databases',
  [SuperBlocks.RespWebDesignNew]: '14-responsive-web-design-22',
  [SuperBlocks.JsAlgoDataStructNew]:
    '15-javascript-algorithms-and-data-structures-22',
  [SuperBlocks.TheOdinProject]: '16-the-odin-project',
  [SuperBlocks.CollegeAlgebraPy]: '17-college-algebra-with-python',
  [SuperBlocks.ProjectEuler]: '18-project-euler',
  [SuperBlocks.FoundationalCSharp]: '19-foundational-c-sharp-with-microsoft',
  [SuperBlocks.A2English]: '21-a2-english-for-developers',
  [SuperBlocks.RosettaCode]: '22-rosetta-code',
  [SuperBlocks.PythonForEverybody]: '23-python-for-everybody',
  [SuperBlocks.B1English]: '24-b1-english-for-developers',
  [SuperBlocks.FullStackDeveloper]: '25-front-end-development',
  [SuperBlocks.A2Spanish]: '26-a2-professional-spanish',
  [SuperBlocks.A2Chinese]: '27-a2-professional-chinese',
  [SuperBlocks.DevPlayground]: '99-dev-playground'
};

// Same as superBlockToFolderMap but with the keys and values reversed
export const folderToSuperBlockMap = Object.fromEntries(
  Object.entries(superBlockToFolderMap).map(([key, value]) => [value, key])
);

export const languageSuperBlocks = [
  SuperBlocks.A2English,
  SuperBlocks.B1English,
  SuperBlocks.A2Spanish
];

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
  Professional,
  Extra,
  Legacy,
  Upcoming,
  Next
}

const defaultStageOrder = [
  SuperBlockStage.Core,
  SuperBlockStage.English,
  SuperBlockStage.Extra,
  SuperBlockStage.Legacy,
  SuperBlockStage.Professional,
  SuperBlockStage.Next
];

export function getStageOrder({
  showUpcomingChanges
}: Config): SuperBlockStage[] {
  const stageOrder = [...defaultStageOrder];

  if (showUpcomingChanges) stageOrder.push(SuperBlockStage.Upcoming);
  return stageOrder;
}

export type StageMap = {
  [key in SuperBlockStage]: SuperBlocks[];
};

// Groups of superblocks in learn map. This should include all superblocks.
export const superBlockStages: StageMap = {
  [SuperBlockStage.Core]: [SuperBlocks.FullStackDeveloper],

  [SuperBlockStage.English]: [SuperBlocks.A2English, SuperBlocks.B1English],
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
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.DevPlayground
  ]
};

Object.freeze(superBlockStages);

type NotAuditedSuperBlocks = {
  [key in Languages]: SuperBlocks[];
};

// when a superBlock is audited, remove it from its language below
// when adding a new language, add all (not audited) superblocks to the object
export const notAuditedSuperBlocks: NotAuditedSuperBlocks = {
  [Languages.English]: [],
  [Languages.Espanol]: [
    SuperBlocks.InfoSec,
    SuperBlocks.MachineLearningPy,
    SuperBlocks.CollegeAlgebraPy,
    SuperBlocks.FoundationalCSharp,
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.TheOdinProject,
    SuperBlocks.FullStackDeveloper,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.PythonForEverybody,
    SuperBlocks.DevPlayground
  ],
  [Languages.Chinese]: [
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.TheOdinProject,
    SuperBlocks.FullStackDeveloper,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.PythonForEverybody,
    SuperBlocks.DevPlayground
  ],
  [Languages.ChineseTraditional]: [
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.TheOdinProject,
    SuperBlocks.FullStackDeveloper,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.PythonForEverybody,
    SuperBlocks.DevPlayground
  ],
  [Languages.Italian]: [
    SuperBlocks.FoundationalCSharp,
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.TheOdinProject,
    SuperBlocks.FullStackDeveloper,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.PythonForEverybody,
    SuperBlocks.DevPlayground
  ],
  [Languages.Portuguese]: [
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.FullStackDeveloper,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.PythonForEverybody,
    SuperBlocks.DevPlayground
  ],
  [Languages.Ukrainian]: [
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.FullStackDeveloper,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.DevPlayground
  ],
  [Languages.Japanese]: [
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.TheOdinProject,
    SuperBlocks.FullStackDeveloper,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.DevPlayground
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
    SuperBlocks.FullStackDeveloper,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.PythonForEverybody,
    SuperBlocks.DevPlayground
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
    SuperBlocks.FullStackDeveloper,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.PythonForEverybody,
    SuperBlocks.DevPlayground
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
    SuperBlocks.FullStackDeveloper,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.PythonForEverybody,
    SuperBlocks.DataVis,
    SuperBlocks.RelationalDb,
    SuperBlocks.RosettaCode,
    SuperBlocks.DevPlayground
  ]
};

Object.freeze(notAuditedSuperBlocks);

export const chapterBasedSuperBlocks = [SuperBlocks.FullStackDeveloper];
Object.freeze(chapterBasedSuperBlocks);

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
