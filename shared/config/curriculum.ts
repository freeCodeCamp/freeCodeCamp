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
  FrontEndDevelopment = 'front-end-development',
  UpcomingPython = 'upcoming-python',
  A2English = 'a2-english-for-developers',
  B1English = 'b1-english-for-developers',
  RosettaCode = 'rosetta-code',
  PythonForEverybody = 'python-for-everybody'
}

/*
 * SuperBlockStages.New = SHOW_NEW_CURRICULUM === 'true'
 * 'New' -> shown only on english staging at the moment
 *
 * SuperBlockStages.Upcoming = SHOW_UPCOMING_CHANGES === 'true'
 * 'Upcoming' is for development -> not shown on stag or prod anywhere
 */
export enum SuperBlockStage {
  Core,
  English,
  Professional,
  Extra,
  Legacy,
  New,
  Upcoming
}

const defaultStageOrder = [
  SuperBlockStage.Core,
  SuperBlockStage.English,
  SuperBlockStage.Professional,
  SuperBlockStage.Extra,
  SuperBlockStage.Legacy
];

export function getStageOrder({
  showNewCurriculum,
  showUpcomingChanges
}: Config): SuperBlockStage[] {
  const stageOrder = [...defaultStageOrder];

  if (showNewCurriculum) stageOrder.push(SuperBlockStage.New);
  if (showUpcomingChanges) stageOrder.push(SuperBlockStage.Upcoming);
  return stageOrder;
}

export type StageMap = {
  [key in SuperBlockStage]: SuperBlocks[];
};

// Groups of superblocks in learn map. This should include all superblocks.
export const superBlockStages: StageMap = {
  [SuperBlockStage.Core]: [
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
    SuperBlocks.CollegeAlgebraPy
  ],
  [SuperBlockStage.English]: [SuperBlocks.A2English],
  [SuperBlockStage.Professional]: [SuperBlocks.FoundationalCSharp],
  [SuperBlockStage.Extra]: [
    SuperBlocks.TheOdinProject,
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.RosettaCode
  ],
  [SuperBlockStage.Legacy]: [
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.PythonForEverybody
  ],
  [SuperBlockStage.New]: [],
  [SuperBlockStage.Upcoming]: [
    SuperBlocks.B1English,
    SuperBlocks.FrontEndDevelopment,
    SuperBlocks.UpcomingPython
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
    SuperBlocks.FrontEndDevelopment,
    SuperBlocks.UpcomingPython,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.PythonForEverybody
  ],
  [Languages.Chinese]: [
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.TheOdinProject,
    SuperBlocks.FrontEndDevelopment,
    SuperBlocks.UpcomingPython,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.PythonForEverybody
  ],
  [Languages.ChineseTraditional]: [
    SuperBlocks.FoundationalCSharp,
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.TheOdinProject,
    SuperBlocks.FrontEndDevelopment,
    SuperBlocks.UpcomingPython,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.PythonForEverybody
  ],
  [Languages.Italian]: [
    SuperBlocks.FoundationalCSharp,
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.TheOdinProject,
    SuperBlocks.FrontEndDevelopment,
    SuperBlocks.UpcomingPython,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.PythonForEverybody
  ],
  [Languages.Portuguese]: [
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.FrontEndDevelopment,
    SuperBlocks.UpcomingPython,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.PythonForEverybody
  ],
  [Languages.Ukrainian]: [
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.FrontEndDevelopment,
    SuperBlocks.UpcomingPython,
    SuperBlocks.A2English,
    SuperBlocks.B1English
  ],
  [Languages.Japanese]: [
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.TheOdinProject,
    SuperBlocks.FrontEndDevelopment,
    SuperBlocks.UpcomingPython,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.PythonForEverybody
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
    SuperBlocks.FrontEndDevelopment,
    SuperBlocks.UpcomingPython,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.PythonForEverybody
  ],
  [Languages.Arabic]: [
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
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.TheOdinProject,
    SuperBlocks.FrontEndDevelopment,
    SuperBlocks.UpcomingPython,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.PythonForEverybody
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
    SuperBlocks.FrontEndDevelopment,
    SuperBlocks.UpcomingPython,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.PythonForEverybody
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
    SuperBlocks.FrontEndDevelopment,
    SuperBlocks.UpcomingPython,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.PythonForEverybody,
    SuperBlocks.DataVis,
    SuperBlocks.RelationalDb,
    SuperBlocks.RosettaCode
  ]
};

Object.freeze(notAuditedSuperBlocks);

type Config = {
  showNewCurriculum: boolean;
  showUpcomingChanges: boolean;
};

type LanguagesConfig = Config & {
  language: string;
};

export function createFlatSuperBlockMap(config: Config): SuperBlocks[] {
  return getStageOrder(config)
    .map(stage => superBlockStages[stage])
    .flat();
}

export function getAuditedSuperBlocks({
  language = 'english',
  showNewCurriculum,
  showUpcomingChanges
}: LanguagesConfig): SuperBlocks[] {
  if (!Object.prototype.hasOwnProperty.call(notAuditedSuperBlocks, language)) {
    throw Error(`'${language}' key not found in 'notAuditedSuperBlocks'`);
  }

  const flatSuperBlockMap = createFlatSuperBlockMap({
    showNewCurriculum,
    showUpcomingChanges
  });
  const auditedSuperBlocks = flatSuperBlockMap.filter(
    superBlock =>
      !notAuditedSuperBlocks[language as Languages].includes(superBlock)
  );
  return auditedSuperBlocks;
}
