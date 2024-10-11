import { SuperBlocks } from '../../shared/config/curriculum';

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
  FrontEndDevelopment = 'front-end-development-v9',
  UpcomingPython = 'upcoming-python-v8',
  A2English = 'a2-english-for-developers-v8',
  B1English = 'b1-english-for-developers-v8',
  // Legacy certifications
  LegacyFrontEnd = 'legacy-front-end',
  JsAlgoDataStruct = 'javascript-algorithms-and-data-structures',
  LegacyBackEnd = 'legacy-back-end',
  LegacyDataVis = 'legacy-data-visualization',
  LegacyInfoSecQa = 'information-security-and-quality-assurance',
  LegacyFullStack = 'full-stack'
}

// "Current" certifications are the subset of standard certifications that are
// live and not legacy.
export const currentCertifications = [
  Certification.RespWebDesign,
  Certification.JsAlgoDataStructNew,
  Certification.FrontEndDevLibs,
  Certification.DataVis,
  Certification.RelationalDb,
  Certification.BackEndDevApis,
  Certification.QualityAssurance,
  Certification.SciCompPy,
  Certification.DataAnalysisPy,
  Certification.InfoSec,
  Certification.MachineLearningPy,
  Certification.CollegeAlgebraPy,
  Certification.FoundationalCSharp
] as const;

// "Legacy" certifications are another class of standard certifications. They're
// still live and claimable, but some parts of the UI handle them differently.
export const legacyCertifications = [
  Certification.LegacyFrontEnd,
  Certification.JsAlgoDataStruct,
  Certification.LegacyBackEnd,
  Certification.LegacyDataVis,
  Certification.LegacyInfoSecQa
] as const;

// The Legacy Full Stack certification can only be claimed when specific
// "current" and "legacy" certifications have been claimed.
export const legacyFullStackCertification = [
  Certification.LegacyFullStack
] as const;

// "Upcoming" certifications are standard certifications that are not live unless
// showUpcomingChanges is true.
export const upcomingCertifications = [
  Certification.FrontEndDevelopment,
  Certification.UpcomingPython,
  Certification.A2English,
  Certification.B1English
] as const;

export const certTypes = {
  frontEnd: 'isFrontEndCert',
  backEnd: 'isBackEndCert',
  dataVis: 'isDataVisCert',
  respWebDesign: 'isRespWebDesignCert',
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
  upcomingPythonV8: 'isUpcomingPythonCertV8',
  jsAlgoDataStructV8: 'isJsAlgoDataStructCertV8'
} as const;

export const certIds = {
  legacyFrontEndChallengeId: '561add10cb82ac38a17513be',
  legacyBackEndChallengeId: '660add10cb82ac38a17513be',
  legacyDataVisId: '561add10cb82ac39a17513bc',
  legacyInfosecQaId: '561add10cb82ac38a17213bc',
  legacyFullStackId: '561add10cb82ac38a17213bd',
  respWebDesignId: '561add10cb82ac38a17513bc',
  frontEndDevLibsId: '561acd10cb82ac38a17513bc',
  dataVis2018Id: '5a553ca864b52e1d8bceea14',
  jsAlgoDataStructId: '561abd10cb81ac38a17513bc',
  apisMicroservicesId: '561add10cb82ac38a17523bc',
  qaV7Id: '5e611829481575a52dc59c0e',
  infosecV7Id: '5e6021435ac9d0ecd8b94b00',
  sciCompPyV7Id: '5e44431b903586ffb414c951',
  dataAnalysisPyV7Id: '5e46fc95ac417301a38fb934',
  machineLearningPyV7Id: '5e46fc95ac417301a38fb935',
  relationalDatabaseV8Id: '606243f50267e718b1e755f4',
  collegeAlgebraPyV8Id: '61531b20cc9dfa2741a5b800',
  foundationalCSharpV8Id: '647f7da207d29547b3bee1ba',
  upcomingPythonV8Id: '64afc4e8f3b37856e035b85f',
  jsAlgoDataStructV8Id: '658180220947283cdc0689ce'
};

export const completionHours = {
  [certTypes.frontEnd]: 300,
  [certTypes.backEnd]: 300,
  [certTypes.dataVis]: 300,
  [certTypes.infosecQa]: 300,
  [certTypes.fullStack]: 1800,
  [certTypes.respWebDesign]: 300,
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
  [certTypes.upcomingPythonV8]: 300,
  [certTypes.jsAlgoDataStructV8]: 300
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

  // upcoming
  [Certification.UpcomingPython]: certTypes.upcomingPythonV8
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
  [SuperBlocks.UpcomingPython]: certTypes.upcomingPythonV8
};

export const certTypeIdMap = {
  [certTypes.frontEnd]: certIds.legacyFrontEndChallengeId,
  [certTypes.backEnd]: certIds.legacyBackEndChallengeId,
  [certTypes.dataVis]: certIds.legacyDataVisId,
  [certTypes.infosecQa]: certIds.legacyInfosecQaId,
  [certTypes.fullStack]: certIds.legacyFullStackId,
  [certTypes.respWebDesign]: certIds.respWebDesignId,
  [certTypes.frontEndDevLibs]: certIds.frontEndDevLibsId,
  [certTypes.jsAlgoDataStruct]: certIds.jsAlgoDataStructId,
  [certTypes.dataVis2018]: certIds.dataVis2018Id,
  [certTypes.apisMicroservices]: certIds.apisMicroservicesId,
  [certTypes.qaV7]: certIds.qaV7Id,
  [certTypes.infosecV7]: certIds.infosecV7Id,
  [certTypes.sciCompPyV7]: certIds.sciCompPyV7Id,
  [certTypes.dataAnalysisPyV7]: certIds.dataAnalysisPyV7Id,
  [certTypes.machineLearningPyV7]: certIds.machineLearningPyV7Id,
  [certTypes.relationalDatabaseV8]: certIds.relationalDatabaseV8Id,
  [certTypes.collegeAlgebraPyV8]: certIds.collegeAlgebraPyV8Id,
  [certTypes.foundationalCSharpV8]: certIds.foundationalCSharpV8Id,
  [certTypes.upcomingPythonV8]: certIds.upcomingPythonV8Id,
  [certTypes.jsAlgoDataStructV8]: certIds.jsAlgoDataStructV8Id
};

export const certTypeTitleMap = {
  [certTypes.frontEnd]: 'Legacy Front End',
  [certTypes.backEnd]: 'Legacy Back End',
  [certTypes.dataVis]: 'Legacy Data Visualization',
  [certTypes.infosecQa]: 'Legacy Information Security and Quality Assurance',
  [certTypes.fullStack]: 'Legacy Full Stack',
  [certTypes.respWebDesign]: 'Responsive Web Design',
  [certTypes.frontEndDevLibs]: 'Front End Development Libraries',
  [certTypes.jsAlgoDataStruct]:
    'Legacy JavaScript Algorithms and Data Structures',
  [certTypes.dataVis2018]: 'Data Visualization',
  [certTypes.apisMicroservices]: 'Back End Development and APIs',
  [certTypes.qaV7]: 'Quality Assurance',
  [certTypes.infosecV7]: 'Information Security',
  [certTypes.sciCompPyV7]: 'Scientific Computing with Python',
  [certTypes.dataAnalysisPyV7]: 'Data Analysis with Python',
  [certTypes.machineLearningPyV7]: 'Machine Learning with Python',
  [certTypes.relationalDatabaseV8]: 'Relational Database',
  [certTypes.collegeAlgebraPyV8]: 'College Algebra with Python',
  [certTypes.foundationalCSharpV8]: 'Foundational C# with Microsoft',
  [certTypes.upcomingPythonV8]: 'Upcoming Python',
  [certTypes.jsAlgoDataStructV8]:
    'JavaScript Algorithms and Data Structures (Beta)'
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
  [Certification.FrontEndDevelopment]: 'fed',
  [Certification.UpcomingPython]: 'up',
  [Certification.JsAlgoDataStructNew]: 'jaads',
  [Certification.A2English]: 'a2efd',
  [Certification.B1English]: 'b1efd'
};

export const oldDataVizId = '561add10cb82ac38a17513b3';
