"use strict";
var _a, _b, _c, _d, _e;
exports.__esModule = true;
exports.oldDataVizId = exports.certTypeTitleMap = exports.certTypeIdMap = exports.superBlockCertTypeMap = exports.certSlugTypeMap = exports.completionHours = exports.certIds = exports.SuperBlocks = exports.certTypes = void 0;
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
    relationalDatabasesV8: 'isRelationalDatabasesCertV8'
};
var SuperBlocks;
(function (SuperBlocks) {
    SuperBlocks["RespWebDesignNew"] = "2022/responsive-web-design";
    SuperBlocks["RespWebDesign"] = "responsive-web-design";
    SuperBlocks["JsAlgoDataStruct"] = "javascript-algorithms-and-data-structures";
    SuperBlocks["FrontEndDevLibs"] = "front-end-development-libraries";
    SuperBlocks["DataVis"] = "data-visualization";
    SuperBlocks["RelationalDb"] = "relational-databases";
    SuperBlocks["BackEndDevApis"] = "back-end-development-and-apis";
    SuperBlocks["QualityAssurance"] = "quality-assurance";
    SuperBlocks["SciCompPy"] = "scientific-computing-with-python";
    SuperBlocks["DataAnalysisPy"] = "data-analysis-with-python";
    SuperBlocks["InfoSec"] = "information-security";
    SuperBlocks["MachineLearningPy"] = "machine-learning-with-python";
    SuperBlocks["CodingInterviewPrep"] = "coding-interview-prep";
})(SuperBlocks = exports.SuperBlocks || (exports.SuperBlocks = {}));
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
    relationalDatabasesV8Id: '606243f50267e718b1e755f4'
};
exports.completionHours = (_a = {},
    _a[exports.certTypes.frontEnd] = 400,
    _a[exports.certTypes.backEnd] = 400,
    _a[exports.certTypes.dataVis] = 400,
    _a[exports.certTypes.infosecQa] = 300,
    _a[exports.certTypes.fullStack] = 1800,
    _a[exports.certTypes.respWebDesign] = 300,
    _a[exports.certTypes.frontEndDevLibs] = 300,
    _a[exports.certTypes.jsAlgoDataStruct] = 300,
    _a[exports.certTypes.dataVis2018] = 300,
    _a[exports.certTypes.apisMicroservices] = 300,
    _a[exports.certTypes.qaV7] = 300,
    _a[exports.certTypes.infosecV7] = 300,
    _a[exports.certTypes.sciCompPyV7] = 300,
    _a[exports.certTypes.dataAnalysisPyV7] = 300,
    _a[exports.certTypes.machineLearningPyV7] = 300,
    _a[exports.certTypes.relationalDatabasesV8] = 300,
    _a);
exports.certSlugTypeMap = (_b = {
        // legacy
        'legacy-front-end': exports.certTypes.frontEnd,
        'legacy-back-end': exports.certTypes.backEnd,
        'legacy-data-visualization': exports.certTypes.dataVis,
        // Keep these slugs the same so we don't
        // break existing links
        'information-security-and-quality-assurance': exports.certTypes.infosecQa,
        'full-stack': exports.certTypes.fullStack
    },
    // modern
    _b[SuperBlocks.RespWebDesign] = exports.certTypes.respWebDesign,
    _b[SuperBlocks.JsAlgoDataStruct] = exports.certTypes.jsAlgoDataStruct,
    _b[SuperBlocks.FrontEndDevLibs] = exports.certTypes.frontEndDevLibs,
    _b[SuperBlocks.DataVis] = exports.certTypes.dataVis2018,
    _b[SuperBlocks.BackEndDevApis] = exports.certTypes.apisMicroservices,
    _b['quality-assurance-v7'] = exports.certTypes.qaV7,
    _b['information-security-v7'] = exports.certTypes.infosecV7,
    _b['scientific-computing-with-python-v7'] = exports.certTypes.sciCompPyV7,
    _b['data-analysis-with-python-v7'] = exports.certTypes.dataAnalysisPyV7,
    _b['machine-learning-with-python-v7'] = exports.certTypes.machineLearningPyV7,
    _b['relational-databases-v8'] = exports.certTypes.relationalDatabasesV8,
    _b);
exports.superBlockCertTypeMap = (_c = {
        // legacy
        'legacy-front-end': exports.certTypes.frontEnd,
        'legacy-back-end': exports.certTypes.backEnd,
        'legacy-data-visualization': exports.certTypes.dataVis,
        'information-security-and-quality-assurance': exports.certTypes.infosecQa,
        'full-stack': exports.certTypes.fullStack
    },
    // modern
    _c[SuperBlocks.RespWebDesign] = exports.certTypes.respWebDesign,
    _c[SuperBlocks.JsAlgoDataStruct] = exports.certTypes.jsAlgoDataStruct,
    _c[SuperBlocks.FrontEndDevLibs] = exports.certTypes.frontEndDevLibs,
    _c[SuperBlocks.DataVis] = exports.certTypes.dataVis2018,
    _c[SuperBlocks.BackEndDevApis] = exports.certTypes.apisMicroservices,
    _c[SuperBlocks.QualityAssurance] = exports.certTypes.qaV7,
    _c[SuperBlocks.InfoSec] = exports.certTypes.infosecV7,
    _c[SuperBlocks.SciCompPy] = exports.certTypes.sciCompPyV7,
    _c[SuperBlocks.DataAnalysisPy] = exports.certTypes.dataAnalysisPyV7,
    _c[SuperBlocks.MachineLearningPy] = exports.certTypes.machineLearningPyV7,
    _c[SuperBlocks.RelationalDb] = exports.certTypes.relationalDatabasesV8,
    // post-modern
    // TODO: use enum
    _c['2022/responsive-web-design'] = exports.certTypes.respWebDesign,
    _c);
exports.certTypeIdMap = (_d = {},
    _d[exports.certTypes.frontEnd] = exports.certIds.legacyFrontEndChallengeId,
    _d[exports.certTypes.backEnd] = exports.certIds.legacyBackEndChallengeId,
    _d[exports.certTypes.dataVis] = exports.certIds.legacyDataVisId,
    _d[exports.certTypes.infosecQa] = exports.certIds.legacyInfosecQaId,
    _d[exports.certTypes.fullStack] = exports.certIds.legacyFullStackId,
    _d[exports.certTypes.respWebDesign] = exports.certIds.respWebDesignId,
    _d[exports.certTypes.frontEndDevLibs] = exports.certIds.frontEndDevLibsId,
    _d[exports.certTypes.jsAlgoDataStruct] = exports.certIds.jsAlgoDataStructId,
    _d[exports.certTypes.dataVis2018] = exports.certIds.dataVis2018Id,
    _d[exports.certTypes.apisMicroservices] = exports.certIds.apisMicroservicesId,
    _d[exports.certTypes.qaV7] = exports.certIds.qaV7Id,
    _d[exports.certTypes.infosecV7] = exports.certIds.infosecV7Id,
    _d[exports.certTypes.sciCompPyV7] = exports.certIds.sciCompPyV7Id,
    _d[exports.certTypes.dataAnalysisPyV7] = exports.certIds.dataAnalysisPyV7Id,
    _d[exports.certTypes.machineLearningPyV7] = exports.certIds.machineLearningPyV7Id,
    _d[exports.certTypes.relationalDatabasesV8] = exports.certIds.relationalDatabasesV8Id,
    _d);
exports.certTypeTitleMap = (_e = {},
    _e[exports.certTypes.frontEnd] = 'Legacy Front End',
    _e[exports.certTypes.backEnd] = 'Legacy Back End',
    _e[exports.certTypes.dataVis] = 'Legacy Data Visualization',
    _e[exports.certTypes.infosecQa] = 'Legacy Information Security and Quality Assurance',
    _e[exports.certTypes.fullStack] = 'Legacy Full Stack',
    _e[exports.certTypes.respWebDesign] = 'Responsive Web Design',
    _e[exports.certTypes.frontEndDevLibs] = 'Front End Development Libraries',
    _e[exports.certTypes.jsAlgoDataStruct] = 'JavaScript Algorithms and Data Structures',
    _e[exports.certTypes.dataVis2018] = 'Data Visualization',
    _e[exports.certTypes.apisMicroservices] = 'Back End Development and APIs',
    _e[exports.certTypes.qaV7] = 'Quality Assurance',
    _e[exports.certTypes.infosecV7] = 'Information Security',
    _e[exports.certTypes.sciCompPyV7] = 'Scientific Computing with Python',
    _e[exports.certTypes.dataAnalysisPyV7] = 'Data Analysis with Python',
    _e[exports.certTypes.machineLearningPyV7] = 'Machine Learning with Python',
    _e[exports.certTypes.relationalDatabasesV8] = 'Relational Databases',
    _e);
exports.oldDataVizId = '561add10cb82ac38a17513b3';
