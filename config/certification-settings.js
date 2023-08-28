"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oldDataVizId = exports.certTypeTitleMap = exports.certTypeIdMap = exports.superBlockCertTypeMap = exports.certSlugTypeMap = exports.completionHours = exports.certIds = exports.certTypes = exports.upcomingCertifications = exports.legacyCertifications = exports.currentCertifications = exports.Certification = void 0;
const superblocks_1 = require("./superblocks");
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
var Certification;
(function (Certification) {
    Certification["RespWebDesign"] = "responsive-web-design";
    Certification["JsAlgoDataStruct"] = "javascript-algorithms-and-data-structures";
    Certification["FrontEndDevLibs"] = "front-end-development-libraries";
    Certification["DataVis"] = "data-visualization";
    Certification["RelationalDb"] = "relational-database-v8";
    Certification["BackEndDevApis"] = "back-end-development-and-apis";
    Certification["QualityAssurance"] = "quality-assurance-v7";
    Certification["SciCompPy"] = "scientific-computing-with-python-v7";
    Certification["DataAnalysisPy"] = "data-analysis-with-python-v7";
    Certification["InfoSec"] = "information-security-v7";
    Certification["MachineLearningPy"] = "machine-learning-with-python-v7";
    Certification["CollegeAlgebraPy"] = "college-algebra-with-python-v8";
    // Upcoming certifications
    Certification["FoundationalCSharp"] = "foundational-c-sharp-with-microsoft";
    Certification["UpcomingPython"] = "upcoming-python-v8";
    // Legacy certifications
    Certification["LegacyFrontEnd"] = "legacy-front-end";
    Certification["LegacyBackEnd"] = "legacy-back-end";
    Certification["LegacyDataVis"] = "legacy-data-visualization";
    Certification["LegacyInfoSecQa"] = "information-security-and-quality-assurance";
    Certification["LegacyFullStack"] = "full-stack";
})(Certification = exports.Certification || (exports.Certification = {}));
// "Current" certifications are the subset of standard certifications that are
// live and not legacy.
exports.currentCertifications = [
    Certification.RespWebDesign,
    Certification.JsAlgoDataStruct,
    Certification.FrontEndDevLibs,
    Certification.DataVis,
    Certification.RelationalDb,
    Certification.BackEndDevApis,
    Certification.QualityAssurance,
    Certification.SciCompPy,
    Certification.DataAnalysisPy,
    Certification.InfoSec,
    Certification.MachineLearningPy,
    Certification.CollegeAlgebraPy
];
// "Legacy" certifications are another class of standard certifications. They're
// still live and claimable, but some parts of the UI handle them differently.
exports.legacyCertifications = [
    Certification.LegacyFrontEnd,
    Certification.LegacyBackEnd,
    Certification.LegacyDataVis,
    Certification.LegacyInfoSecQa
];
// "Upcoming" certifications are standard certifications that are not live unless
// showUpcomingChanges is true.
exports.upcomingCertifications = [
    Certification.UpcomingPython,
    Certification.FoundationalCSharp
];
exports.certTypes = {
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
    foundationalCSharp: 'isFoundationalCSharpCertV8'
};
exports.certIds = {
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
    foundationalCSharpId: '647f7da207d29547b3bee1ba'
};
exports.completionHours = {
    [exports.certTypes.frontEnd]: 300,
    [exports.certTypes.backEnd]: 300,
    [exports.certTypes.dataVis]: 300,
    [exports.certTypes.infosecQa]: 300,
    [exports.certTypes.fullStack]: 1800,
    [exports.certTypes.respWebDesign]: 300,
    [exports.certTypes.frontEndDevLibs]: 300,
    [exports.certTypes.jsAlgoDataStruct]: 300,
    [exports.certTypes.dataVis2018]: 300,
    [exports.certTypes.apisMicroservices]: 300,
    [exports.certTypes.qaV7]: 300,
    [exports.certTypes.infosecV7]: 300,
    [exports.certTypes.sciCompPyV7]: 300,
    [exports.certTypes.dataAnalysisPyV7]: 300,
    [exports.certTypes.machineLearningPyV7]: 300,
    [exports.certTypes.relationalDatabaseV8]: 300,
    [exports.certTypes.collegeAlgebraPyV8]: 300,
    [exports.certTypes.foundationalCSharp]: 300
};
exports.certSlugTypeMap = {
    // legacy
    [Certification.LegacyFrontEnd]: exports.certTypes.frontEnd,
    [Certification.LegacyBackEnd]: exports.certTypes.backEnd,
    [Certification.LegacyDataVis]: exports.certTypes.dataVis,
    [Certification.LegacyInfoSecQa]: exports.certTypes.infosecQa,
    [Certification.LegacyFullStack]: exports.certTypes.fullStack,
    // modern
    [Certification.RespWebDesign]: exports.certTypes.respWebDesign,
    [Certification.JsAlgoDataStruct]: exports.certTypes.jsAlgoDataStruct,
    [Certification.FrontEndDevLibs]: exports.certTypes.frontEndDevLibs,
    [Certification.DataVis]: exports.certTypes.dataVis2018,
    [Certification.BackEndDevApis]: exports.certTypes.apisMicroservices,
    [Certification.QualityAssurance]: exports.certTypes.qaV7,
    [Certification.InfoSec]: exports.certTypes.infosecV7,
    [Certification.SciCompPy]: exports.certTypes.sciCompPyV7,
    [Certification.DataAnalysisPy]: exports.certTypes.dataAnalysisPyV7,
    [Certification.MachineLearningPy]: exports.certTypes.machineLearningPyV7,
    [Certification.RelationalDb]: exports.certTypes.relationalDatabaseV8,
    [Certification.CollegeAlgebraPy]: exports.certTypes.collegeAlgebraPyV8,
    [Certification.FoundationalCSharp]: exports.certTypes.foundationalCSharp
};
exports.superBlockCertTypeMap = {
    // legacy
    'legacy-front-end': exports.certTypes.frontEnd,
    'legacy-back-end': exports.certTypes.backEnd,
    'legacy-data-visualization': exports.certTypes.dataVis,
    'information-security-and-quality-assurance': exports.certTypes.infosecQa,
    'full-stack': exports.certTypes.fullStack,
    // modern
    [superblocks_1.SuperBlocks.RespWebDesign]: exports.certTypes.respWebDesign,
    [superblocks_1.SuperBlocks.JsAlgoDataStruct]: exports.certTypes.jsAlgoDataStruct,
    [superblocks_1.SuperBlocks.FrontEndDevLibs]: exports.certTypes.frontEndDevLibs,
    [superblocks_1.SuperBlocks.DataVis]: exports.certTypes.dataVis2018,
    [superblocks_1.SuperBlocks.BackEndDevApis]: exports.certTypes.apisMicroservices,
    [superblocks_1.SuperBlocks.QualityAssurance]: exports.certTypes.qaV7,
    [superblocks_1.SuperBlocks.InfoSec]: exports.certTypes.infosecV7,
    [superblocks_1.SuperBlocks.SciCompPy]: exports.certTypes.sciCompPyV7,
    [superblocks_1.SuperBlocks.DataAnalysisPy]: exports.certTypes.dataAnalysisPyV7,
    [superblocks_1.SuperBlocks.MachineLearningPy]: exports.certTypes.machineLearningPyV7,
    [superblocks_1.SuperBlocks.RelationalDb]: exports.certTypes.relationalDatabaseV8,
    [superblocks_1.SuperBlocks.CollegeAlgebraPy]: exports.certTypes.collegeAlgebraPyV8,
    [superblocks_1.SuperBlocks.FoundationalCSharp]: exports.certTypes.foundationalCSharp,
    // post-modern
    // TODO: use enum
    [superblocks_1.SuperBlocks.RespWebDesignNew]: exports.certTypes.respWebDesign,
    [superblocks_1.SuperBlocks.JsAlgoDataStructNew]: exports.certTypes.jsAlgoDataStruct
};
exports.certTypeIdMap = {
    [exports.certTypes.frontEnd]: exports.certIds.legacyFrontEndChallengeId,
    [exports.certTypes.backEnd]: exports.certIds.legacyBackEndChallengeId,
    [exports.certTypes.dataVis]: exports.certIds.legacyDataVisId,
    [exports.certTypes.infosecQa]: exports.certIds.legacyInfosecQaId,
    [exports.certTypes.fullStack]: exports.certIds.legacyFullStackId,
    [exports.certTypes.respWebDesign]: exports.certIds.respWebDesignId,
    [exports.certTypes.frontEndDevLibs]: exports.certIds.frontEndDevLibsId,
    [exports.certTypes.jsAlgoDataStruct]: exports.certIds.jsAlgoDataStructId,
    [exports.certTypes.dataVis2018]: exports.certIds.dataVis2018Id,
    [exports.certTypes.apisMicroservices]: exports.certIds.apisMicroservicesId,
    [exports.certTypes.qaV7]: exports.certIds.qaV7Id,
    [exports.certTypes.infosecV7]: exports.certIds.infosecV7Id,
    [exports.certTypes.sciCompPyV7]: exports.certIds.sciCompPyV7Id,
    [exports.certTypes.dataAnalysisPyV7]: exports.certIds.dataAnalysisPyV7Id,
    [exports.certTypes.machineLearningPyV7]: exports.certIds.machineLearningPyV7Id,
    [exports.certTypes.relationalDatabaseV8]: exports.certIds.relationalDatabaseV8Id,
    [exports.certTypes.collegeAlgebraPyV8]: exports.certIds.collegeAlgebraPyV8Id,
    [exports.certTypes.foundationalCSharp]: exports.certIds.foundationalCSharpId
};
exports.certTypeTitleMap = {
    [exports.certTypes.frontEnd]: 'Legacy Front End',
    [exports.certTypes.backEnd]: 'Legacy Back End',
    [exports.certTypes.dataVis]: 'Legacy Data Visualization',
    [exports.certTypes.infosecQa]: 'Legacy Information Security and Quality Assurance',
    [exports.certTypes.fullStack]: 'Legacy Full Stack',
    [exports.certTypes.respWebDesign]: 'Responsive Web Design',
    [exports.certTypes.frontEndDevLibs]: 'Front End Development Libraries',
    [exports.certTypes.jsAlgoDataStruct]: 'JavaScript Algorithms and Data Structures',
    [exports.certTypes.dataVis2018]: 'Data Visualization',
    [exports.certTypes.apisMicroservices]: 'Back End Development and APIs',
    [exports.certTypes.qaV7]: 'Quality Assurance',
    [exports.certTypes.infosecV7]: 'Information Security',
    [exports.certTypes.sciCompPyV7]: 'Scientific Computing with Python',
    [exports.certTypes.dataAnalysisPyV7]: 'Data Analysis with Python',
    [exports.certTypes.machineLearningPyV7]: 'Machine Learning with Python',
    [exports.certTypes.relationalDatabaseV8]: 'Relational Database',
    [exports.certTypes.collegeAlgebraPyV8]: 'College Algebra with Python',
    [exports.certTypes.foundationalCSharp]: 'Foundational C# with Microsoft'
};
exports.oldDataVizId = '561add10cb82ac38a17513b3';
