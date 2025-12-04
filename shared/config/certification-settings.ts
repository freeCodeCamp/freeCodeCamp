import { SuperBlocks } from '../config/curriculum.js';

/**
 * Certifications are not equivalent to superblocks. Each superblock corresponds
 * to 0 or 1 certifications, but a certification may not correspond to a
 * superblock.
 *
 * As an example of the former: the CodingInterviewPrep superblock does not
 * correspond to a certification. As an example of the latter: the legacy
 * front-end certification no longer has a corresponding superblock.
 *
 * The value of each enum member is the slug of the corresponding certification.
 */
export enum Certification {
  RespWebDesign = 'responsive-web-design',
  JsAlgoDataStructNew = 'javascript-algorithms-and-data-structures-v8',
  FrontEndDevLibs = 'front-end-development-libraries',
  DataVis = 'data-visualization',
  RelationalDb = 'relational-database-v8',
  BackEndDevApis = 'back-end-development-and-apis',
  QualityAssurance = 'quality-assurance-v7',
  SciCompPy = 'scientific-computing-with-python-v7',
  DataAnalysisPy = 'data-analysis-with-python-v7',
  InfoSec = 'information-security-v7',
  MachineLearningPy = 'machine-learning-with-python-v7',
  CollegeAlgebraPy = 'college-algebra-with-python-v8',
  FoundationalCSharp = 'foundational-c-sharp-with-microsoft',
  // Upcoming certifications
  RespWebDesignV9 = 'responsive-web-design-v9',
  JsV9 = 'javascript-v9',
  FrontEndDevLibsV9 = 'front-end-development-libraries-v9',
  PythonV9 = 'python-v9',
  RelationalDbV9 = 'relational-databases-v9',
  BackEndDevApisV9 = 'back-end-development-and-apis-v9',
  A2English = 'a2-english-for-developers',
  FullStackDeveloperV9 = 'full-stack-developer-v9',
  B1English = 'b1-english-for-developers-v8',
  A2Spanish = 'a2-professional-spanish-v8',
  A2Chinese = 'a2-professional-chinese-v8',
  A1Chinese = 'a1-professional-chinese-v8',
  // Legacy certifications
  LegacyFrontEnd = 'legacy-front-end',
  JsAlgoDataStruct = 'javascript-algorithms-and-data-structures',
  LegacyBackEnd = 'legacy-back-end',
  LegacyDataVis = 'legacy-data-visualization',
  LegacyInfoSecQa = 'information-security-and-quality-assurance',
  LegacyFullStack = 'full-stack'
}

export function isCertification(x: string): x is Certification {
  return Object.values(Certification).includes(x as Certification);
}

// "Current" certifications are the subset of standard certifications that are
// live and not legacy.
export const currentCertifications = [
  Certification.RespWebDesignV9,
  Certification.JsV9,
  Certification.A2English,
  Certification.FoundationalCSharp
] as const;

// "Legacy" certifications are another class of standard certifications. They're
// still live and claimable, but some parts of the UI handle them differently.
export const legacyCertifications = [
  Certification.RespWebDesign,
  Certification.JsAlgoDataStruct,
  Certification.FrontEndDevLibs,
  Certification.DataVis,
  Certification.BackEndDevApis,
  Certification.LegacyInfoSecQa,
  Certification.LegacyFrontEnd,
  Certification.JsAlgoDataStructNew,
  Certification.LegacyBackEnd,
  Certification.LegacyDataVis,
  Certification.RelationalDb,
  Certification.QualityAssurance,
  Certification.SciCompPy,
  Certification.DataAnalysisPy,
  Certification.InfoSec,
  Certification.MachineLearningPy,
  Certification.CollegeAlgebraPy
] as const;

// The Legacy Full Stack certification can only be claimed when specific
// "current" and "legacy" certifications have been claimed.
export const legacyFullStackCertification = [
  Certification.LegacyFullStack
] as const;

// "Upcoming" certifications are standard certifications that are not live unless
// showUpcomingChanges is true.
export const upcomingCertifications = [
  Certification.FrontEndDevLibsV9,
  Certification.PythonV9,
  Certification.RelationalDbV9,
  Certification.BackEndDevApisV9,
  Certification.FullStackDeveloperV9,
  Certification.B1English,
  Certification.A2Spanish,
  Certification.A2Chinese,
  Certification.A1Chinese
] as const;

export const certTypes = {
  frontEnd: 'isFrontEndCert',
  backEnd: 'isBackEndCert',
  dataVis: 'isDataVisCert',
  respWebDesign: 'isRespWebDesignCert',
  respWebDesignV9: 'isRespWebDesignCertV9',
  frontEndDevLibs: 'isFrontEndLibsCert',
  dataVis2018: 'is2018DataVisCert',
  jsAlgoDataStruct: 'isJsAlgoDataStructCert',
  apisMicroservices: 'isApisMicroservicesCert',
  infosecQa: 'isInfosecQaCert',
  qaV7: 'isQaCertV7',
  infosecV7: 'isInfosecCertV7',
  sciCompPyV7: 'isSciCompPyCertV7',
  dataAnalysisPyV7: 'isDataAnalysisPyCertV7',
  machineLearningPyV7: 'isMachineLearningPyCertV7',
  fullStack: 'isFullStackCert',
  relationalDatabaseV8: 'isRelationalDatabaseCertV8',
  collegeAlgebraPyV8: 'isCollegeAlgebraPyCertV8',
  foundationalCSharpV8: 'isFoundationalCSharpCertV8',
  jsAlgoDataStructV8: 'isJsAlgoDataStructCertV8',
  javascriptV9: 'isJavascriptCertV9',
  a2English: 'isA2EnglishCert'
} as const;

export const certToIdMap: Record<Certification, string> = {
  // Legacy certifications
  [Certification.LegacyFrontEnd]: '561add10cb82ac38a17513be',
  [Certification.JsAlgoDataStruct]: '561abd10cb81ac38a17513bc',
  [Certification.LegacyBackEnd]: '660add10cb82ac38a17513be',
  [Certification.LegacyDataVis]: '561add10cb82ac39a17513bc',
  [Certification.LegacyInfoSecQa]: '561add10cb82ac38a17213bc',
  [Certification.LegacyFullStack]: '561add10cb82ac38a17213bd',

  // Current certifications
  [Certification.RespWebDesign]: '561add10cb82ac38a17513bc',
  [Certification.JsAlgoDataStructNew]: '658180220947283cdc0689ce',
  [Certification.FrontEndDevLibs]: '561acd10cb82ac38a17513bc',
  [Certification.DataVis]: '5a553ca864b52e1d8bceea14',
  [Certification.BackEndDevApis]: '561add10cb82ac38a17523bc',
  [Certification.QualityAssurance]: '5e611829481575a52dc59c0e',
  [Certification.InfoSec]: '5e6021435ac9d0ecd8b94b00',
  [Certification.SciCompPy]: '5e44431b903586ffb414c951',
  [Certification.DataAnalysisPy]: '5e46fc95ac417301a38fb934',
  [Certification.MachineLearningPy]: '5e46fc95ac417301a38fb935',
  [Certification.RelationalDb]: '606243f50267e718b1e755f4',
  [Certification.CollegeAlgebraPy]: '61531b20cc9dfa2741a5b800',
  [Certification.FoundationalCSharp]: '647f7da207d29547b3bee1ba',
  [Certification.A2English]: '651dd7e01d697d0aab7833b7',

  // Upcoming certifications
  [Certification.RespWebDesignV9]: '68db314d3c11a8bff07c7535',
  [Certification.JsV9]: '68c4069c1ef859270e17c495',
  [Certification.FrontEndDevLibsV9]: '68e008aa5f80c6099d47b3a2',
  [Certification.PythonV9]: '68e6bd5020effa1586e79855',
  [Certification.RelationalDbV9]: '68e6bd5120effa1586e79856',
  [Certification.BackEndDevApisV9]: '68e6bd5120effa1586e79857',
  [Certification.FullStackDeveloperV9]: '64514fda6c245de4d11eb7bb',
  [Certification.B1English]: '66607e53317411dd5e8aae21',
  [Certification.A2Spanish]: '681a6b22e5a782fe3459984a',
  [Certification.A2Chinese]: '682c3153086dd7cabe7f48bc',
  [Certification.A1Chinese]: '68f1268149f045a650d4229e'
};

export const completionHours = {
  [certTypes.frontEnd]: 300,
  [certTypes.backEnd]: 300,
  [certTypes.dataVis]: 300,
  [certTypes.infosecQa]: 300,
  [certTypes.fullStack]: 1800,
  [certTypes.respWebDesign]: 300,
  [certTypes.respWebDesignV9]: 300,
  [certTypes.frontEndDevLibs]: 300,
  [certTypes.jsAlgoDataStruct]: 300,
  [certTypes.dataVis2018]: 300,
  [certTypes.apisMicroservices]: 300,
  [certTypes.qaV7]: 300,
  [certTypes.infosecV7]: 300,
  [certTypes.sciCompPyV7]: 300,
  [certTypes.dataAnalysisPyV7]: 300,
  [certTypes.machineLearningPyV7]: 300,
  [certTypes.relationalDatabaseV8]: 300,
  [certTypes.collegeAlgebraPyV8]: 300,
  [certTypes.foundationalCSharpV8]: 300,
  [certTypes.jsAlgoDataStructV8]: 300,
  [certTypes.javascriptV9]: 300,
  [certTypes.a2English]: 300
};

export const certSlugTypeMap = {
  // legacy
  [Certification.LegacyFrontEnd]: certTypes.frontEnd,
  [Certification.JsAlgoDataStruct]: certTypes.jsAlgoDataStruct,
  [Certification.LegacyBackEnd]: certTypes.backEnd,
  [Certification.LegacyDataVis]: certTypes.dataVis,
  [Certification.LegacyInfoSecQa]: certTypes.infosecQa,
  [Certification.LegacyFullStack]: certTypes.fullStack,

  // modern
  [Certification.RespWebDesign]: certTypes.respWebDesign,
  [Certification.JsAlgoDataStructNew]: certTypes.jsAlgoDataStructV8,
  [Certification.FrontEndDevLibs]: certTypes.frontEndDevLibs,
  [Certification.DataVis]: certTypes.dataVis2018,
  [Certification.BackEndDevApis]: certTypes.apisMicroservices,
  [Certification.QualityAssurance]: certTypes.qaV7,
  [Certification.InfoSec]: certTypes.infosecV7,
  [Certification.SciCompPy]: certTypes.sciCompPyV7,
  [Certification.DataAnalysisPy]: certTypes.dataAnalysisPyV7,
  [Certification.MachineLearningPy]: certTypes.machineLearningPyV7,
  [Certification.RelationalDb]: certTypes.relationalDatabaseV8,
  [Certification.CollegeAlgebraPy]: certTypes.collegeAlgebraPyV8,
  [Certification.FoundationalCSharp]: certTypes.foundationalCSharpV8,
  [Certification.A2English]: certTypes.a2English,

  // upcoming
  [Certification.RespWebDesignV9]: certTypes.respWebDesignV9,
  [Certification.JsV9]: certTypes.javascriptV9
};

export const superBlockCertTypeMap = {
  // legacy
  'legacy-front-end': certTypes.frontEnd,
  [SuperBlocks.JsAlgoDataStruct]: certTypes.jsAlgoDataStruct,
  'legacy-back-end': certTypes.backEnd,
  'legacy-data-visualization': certTypes.dataVis,
  'information-security-and-quality-assurance': certTypes.infosecQa,
  'full-stack': certTypes.fullStack,

  // modern
  [SuperBlocks.RespWebDesign]: certTypes.respWebDesign,
  [SuperBlocks.JsAlgoDataStructNew]: certTypes.jsAlgoDataStructV8,
  [SuperBlocks.FrontEndDevLibs]: certTypes.frontEndDevLibs,
  [SuperBlocks.DataVis]: certTypes.dataVis2018,
  [SuperBlocks.BackEndDevApis]: certTypes.apisMicroservices,
  [SuperBlocks.QualityAssurance]: certTypes.qaV7,
  [SuperBlocks.InfoSec]: certTypes.infosecV7,
  [SuperBlocks.SciCompPy]: certTypes.sciCompPyV7,
  [SuperBlocks.DataAnalysisPy]: certTypes.dataAnalysisPyV7,
  [SuperBlocks.MachineLearningPy]: certTypes.machineLearningPyV7,
  [SuperBlocks.RelationalDb]: certTypes.relationalDatabaseV8,
  [SuperBlocks.CollegeAlgebraPy]: certTypes.collegeAlgebraPyV8,
  [SuperBlocks.FoundationalCSharp]: certTypes.foundationalCSharpV8,

  // post-modern
  // TODO: use enum
  [SuperBlocks.RespWebDesignNew]: certTypes.respWebDesign,

  // upcoming
  [SuperBlocks.A2English]: certTypes.a2English
};

// TODO: use i18n keys instead of hardcoded titles
export const certToTitleMap: Record<Certification, string> = {
  // Legacy certifications
  [Certification.LegacyFrontEnd]: 'Legacy Front End',
  [Certification.JsAlgoDataStruct]:
    'Legacy JavaScript Algorithms and Data Structures V7',
  [Certification.LegacyBackEnd]: 'Legacy Back End',
  [Certification.LegacyDataVis]: 'Legacy Data Visualization',
  [Certification.LegacyInfoSecQa]:
    'Legacy Information Security and Quality Assurance',
  [Certification.LegacyFullStack]: 'Legacy Full Stack',

  // Current certifications
  [Certification.RespWebDesign]: 'Legacy Responsive Web Design V8',
  [Certification.JsAlgoDataStructNew]:
    'Legacy JavaScript Algorithms and Data Structures V8',
  [Certification.FrontEndDevLibs]: 'Front End Development Libraries V8',
  [Certification.DataVis]: 'Data Visualization V8',
  [Certification.BackEndDevApis]: 'Back End Development and APIs V8',
  [Certification.QualityAssurance]: 'Quality Assurance',
  [Certification.InfoSec]: 'Information Security',
  [Certification.SciCompPy]: 'Scientific Computing with Python',
  [Certification.DataAnalysisPy]: 'Data Analysis with Python',
  [Certification.MachineLearningPy]: 'Machine Learning with Python',
  [Certification.RelationalDb]: 'Relational Database V8',
  [Certification.CollegeAlgebraPy]: 'College Algebra with Python',
  [Certification.FoundationalCSharp]: 'Foundational C# with Microsoft',
  [Certification.A2English]: 'A2 English for Developers',

  // Upcoming certifications
  [Certification.RespWebDesignV9]: 'Responsive Web Design',
  [Certification.JsV9]: 'JavaScript',
  [Certification.FrontEndDevLibsV9]: 'Front End Development Libraries',
  [Certification.PythonV9]: 'Python',
  [Certification.RelationalDbV9]: 'Relational Database',
  [Certification.BackEndDevApisV9]: 'Back End Development and APIs',
  [Certification.FullStackDeveloperV9]: 'Full Stack Developer',
  [Certification.B1English]: 'B1 English for Developers',
  [Certification.A2Spanish]: 'A2 Professional Spanish',
  [Certification.A2Chinese]: 'A2 Professional Chinese',
  [Certification.A1Chinese]: 'A1 Professional Chinese'
};

export const superBlockToCertMap: {
  [key in SuperBlocks]: Certification | null;
} = {
  [SuperBlocks.RespWebDesign]: Certification.RespWebDesign,
  [SuperBlocks.JsAlgoDataStructNew]: Certification.JsAlgoDataStructNew,
  [SuperBlocks.FrontEndDevLibs]: Certification.FrontEndDevLibs,
  [SuperBlocks.DataVis]: Certification.DataVis,
  [SuperBlocks.RelationalDb]: Certification.RelationalDb,
  [SuperBlocks.BackEndDevApis]: Certification.BackEndDevApis,
  [SuperBlocks.QualityAssurance]: Certification.QualityAssurance,
  [SuperBlocks.SciCompPy]: Certification.SciCompPy,
  [SuperBlocks.DataAnalysisPy]: Certification.DataAnalysisPy,
  [SuperBlocks.InfoSec]: Certification.InfoSec,
  [SuperBlocks.MachineLearningPy]: Certification.MachineLearningPy,
  [SuperBlocks.CollegeAlgebraPy]: Certification.CollegeAlgebraPy,
  [SuperBlocks.FoundationalCSharp]: Certification.FoundationalCSharp,
  [SuperBlocks.RespWebDesignNew]: Certification.RespWebDesign,
  [SuperBlocks.JsAlgoDataStruct]: Certification.JsAlgoDataStruct,
  [SuperBlocks.RespWebDesignV9]: Certification.RespWebDesignV9,
  [SuperBlocks.JsV9]: Certification.JsV9,
  [SuperBlocks.FrontEndDevLibsV9]: Certification.FrontEndDevLibsV9,
  [SuperBlocks.PythonV9]: Certification.PythonV9,
  [SuperBlocks.RelationalDbV9]: Certification.RelationalDbV9,
  [SuperBlocks.BackEndDevApisV9]: Certification.BackEndDevApisV9,
  [SuperBlocks.FullStackDeveloperV9]: Certification.FullStackDeveloperV9,
  [SuperBlocks.A2English]: Certification.A2English,
  [SuperBlocks.B1English]: Certification.B1English,
  [SuperBlocks.A1Spanish]: null,
  [SuperBlocks.A2Spanish]: Certification.A2Spanish,
  [SuperBlocks.A2Chinese]: Certification.A2Chinese,
  [SuperBlocks.A1Chinese]: Certification.A1Chinese,
  [SuperBlocks.PythonForEverybody]: null,
  [SuperBlocks.CodingInterviewPrep]: null,
  [SuperBlocks.ProjectEuler]: null,
  [SuperBlocks.TheOdinProject]: null,
  [SuperBlocks.RosettaCode]: null,
  [SuperBlocks.BasicHtml]: null,
  [SuperBlocks.SemanticHtml]: null,
  [SuperBlocks.DevPlayground]: null,
  [SuperBlocks.FullStackOpen]: null,
  [SuperBlocks.FullStackDeveloper]: null
};

export const certificationRequirements: Partial<
  Record<Certification, SuperBlocks[]>
> = {
  [Certification.FullStackDeveloperV9]: [
    SuperBlocks.RespWebDesignV9,
    SuperBlocks.JsV9,
    SuperBlocks.FrontEndDevLibsV9,
    SuperBlocks.PythonV9,
    SuperBlocks.RelationalDbV9,
    SuperBlocks.BackEndDevApisV9
  ]
};

export type CertSlug = (typeof Certification)[keyof typeof Certification];

export const linkedInCredentialIds = {
  [Certification.LegacyFrontEnd]: 'lfe',
  [Certification.LegacyBackEnd]: 'lbe',
  [Certification.LegacyDataVis]: 'ldv',
  [Certification.LegacyInfoSecQa]: 'lisaqa',
  [Certification.LegacyFullStack]: 'lfs',
  [Certification.RespWebDesign]: 'rwd',
  [Certification.FrontEndDevLibs]: 'fedl',
  [Certification.JsAlgoDataStruct]: 'ljaads',
  [Certification.DataVis]: 'dv',
  [Certification.BackEndDevApis]: 'bedaa',
  [Certification.QualityAssurance]: 'qa',
  [Certification.InfoSec]: 'is',
  [Certification.SciCompPy]: 'scwp',
  [Certification.DataAnalysisPy]: 'dawp',
  [Certification.MachineLearningPy]: 'mlwp',
  [Certification.RelationalDb]: 'rd',
  [Certification.CollegeAlgebraPy]: 'cawp',
  [Certification.FoundationalCSharp]: 'fcswm',
  [Certification.RespWebDesignV9]: 'rwdv9',
  [Certification.JsV9]: 'jsv9',
  [Certification.FrontEndDevLibsV9]: 'felv9',
  [Certification.PythonV9]: 'pyv9',
  [Certification.RelationalDbV9]: 'rdv9',
  [Certification.BackEndDevApisV9]: 'bedv9',
  [Certification.FullStackDeveloperV9]: 'fsdv9',
  [Certification.JsAlgoDataStructNew]: 'jaads',
  [Certification.A2English]: 'a2efd',
  [Certification.B1English]: 'b1efd',
  [Certification.A2Spanish]: 'a2ps',
  [Certification.A2Chinese]: 'a2pc',
  [Certification.A1Chinese]: 'a1pc'
};

export const oldDataVizId = '561add10cb82ac38a17513b3';
