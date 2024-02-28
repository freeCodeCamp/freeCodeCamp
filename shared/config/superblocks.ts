import { Languages } from '../config/i18n';

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
  ExampleCertification = 'example-certification',
  UpcomingPython = 'upcoming-python',
  A2English = 'a2-english-for-developers',
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
export enum SuperBlockStages {
  FrontEnd,
  Backend,
  Python,
  English,
  Professional,
  Extra,
  Legacy,
  New,
  Upcoming
}

export type SuperBlockOrder = {
  [key in SuperBlockStages]: SuperBlocks[];
};

// order of buttons on map, this should include all superblocks
// new and upcoming superblocks are removed below
export const superBlockOrder: SuperBlockOrder = {
  [SuperBlockStages.FrontEnd]: [
    SuperBlocks.RespWebDesignNew,
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.FrontEndDevLibs,
    SuperBlocks.DataVis
  ],
  [SuperBlockStages.Backend]: [
    SuperBlocks.RelationalDb,
    SuperBlocks.BackEndDevApis,
    SuperBlocks.QualityAssurance
  ],
  [SuperBlockStages.Python]: [
    SuperBlocks.SciCompPy,
    SuperBlocks.DataAnalysisPy,
    SuperBlocks.InfoSec,
    SuperBlocks.MachineLearningPy,
    SuperBlocks.CollegeAlgebraPy
  ],
  [SuperBlockStages.English]: [SuperBlocks.A2English],
  [SuperBlockStages.Professional]: [SuperBlocks.FoundationalCSharp],
  [SuperBlockStages.Extra]: [
    SuperBlocks.TheOdinProject,
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.RosettaCode
  ],
  [SuperBlockStages.Legacy]: [
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.PythonForEverybody
  ],
  [SuperBlockStages.New]: [],
  [SuperBlockStages.Upcoming]: [
    SuperBlocks.ExampleCertification,
    SuperBlocks.UpcomingPython
  ]
};

Object.freeze(superBlockOrder);

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
    SuperBlocks.UpcomingPython,
    SuperBlocks.A2English,
    SuperBlocks.PythonForEverybody
  ],
  [Languages.Chinese]: [
    SuperBlocks.FoundationalCSharp,
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.TheOdinProject,
    SuperBlocks.UpcomingPython,
    SuperBlocks.A2English,
    SuperBlocks.PythonForEverybody
  ],
  [Languages.ChineseTraditional]: [
    SuperBlocks.FoundationalCSharp,
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.TheOdinProject,
    SuperBlocks.UpcomingPython,
    SuperBlocks.A2English,
    SuperBlocks.PythonForEverybody
  ],
  [Languages.Italian]: [
    SuperBlocks.FoundationalCSharp,
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.TheOdinProject,
    SuperBlocks.UpcomingPython,
    SuperBlocks.A2English,
    SuperBlocks.PythonForEverybody
  ],
  [Languages.Portuguese]: [
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.UpcomingPython,
    SuperBlocks.A2English,
    SuperBlocks.PythonForEverybody
  ],
  [Languages.Ukrainian]: [
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.UpcomingPython,
    SuperBlocks.A2English,
    SuperBlocks.PythonForEverybody
  ],
  [Languages.Japanese]: [
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.TheOdinProject,
    SuperBlocks.UpcomingPython,
    SuperBlocks.A2English,
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
    SuperBlocks.UpcomingPython,
    SuperBlocks.A2English,
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
    SuperBlocks.UpcomingPython,
    SuperBlocks.A2English,
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
    SuperBlocks.UpcomingPython,
    SuperBlocks.A2English,
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
    SuperBlocks.UpcomingPython,
    SuperBlocks.A2English,
    SuperBlocks.PythonForEverybody,
    SuperBlocks.DataVis,
    SuperBlocks.RelationalDb,
    SuperBlocks.ExampleCertification,
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

// removes new and upcoming from superBlockOrder
// not used yet, will be used when adding progress indicators to map
export function createSuperBlockMap({
  showNewCurriculum,
  showUpcomingChanges
}: Config): SuperBlockOrder {
  const superBlockMap = { ...superBlockOrder };
  if (!showNewCurriculum) {
    superBlockMap[SuperBlockStages.New] = [];
  }
  if (!showUpcomingChanges) {
    superBlockMap[SuperBlockStages.Upcoming] = [];
  }
  return superBlockMap;
}

export function createFlatSuperBlockMap({
  showNewCurriculum,
  showUpcomingChanges
}: Config): SuperBlocks[] {
  const superBlockMap = { ...superBlockOrder };
  if (!showNewCurriculum) {
    superBlockMap[SuperBlockStages.New] = [];
  }
  if (!showUpcomingChanges) {
    superBlockMap[SuperBlockStages.Upcoming] = [];
  }
  return Object.values(superBlockMap).flat();
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
