const certKeys = {
  frontEnd: 'isFrontEndCert',
  backEnd: 'isBackEndCert',
  dataVis: 'isDataVisCert',
  respWebDesign: 'isRespWebDesignCert',
  frontEndLibs: 'isFrontEndLibsCert',
  dataVis2018: 'is2018DataVisCert',
  jsAlgoDataStruct: 'isJsAlgoDataStructCert',
  apisMicroservices: 'isApisMicroservicesCert',
  infosecQa: 'isInfosecQaCert',
  qaV7: 'isQaCertV7',
  infosecV7: 'isInfosecCertV7',
  sciCompPyV7: 'isSciCompPyCertV7',
  dataAnalysisPyV7: 'isDataAnalysisPyCertV7',
  machineLearningPyV7: 'isMachineLearningPyCertV7',
  fullStack: 'isFullStackCert'
};

const certIds = {
  legacyFrontEndChallengeId: '561add10cb82ac38a17513be',
  legacyBackEndChallengeId: '660add10cb82ac38a17513be',
  legacyDataVisId: '561add10cb82ac39a17513bc',
  legacyInfosecQaId: '561add10cb82ac38a17213bc',
  legacyFullStackId: '561add10cb82ac38a17213bd',
  respWebDesignId: '561add10cb82ac38a17513bc',
  frontEndLibsId: '561acd10cb82ac38a17513bc',
  dataVis2018Id: '5a553ca864b52e1d8bceea14',
  jsAlgoDataStructId: '561abd10cb81ac38a17513bc',
  apisMicroservicesId: '561add10cb82ac38a17523bc',
  qaV7Id: '5e611829481575a52dc59c0e',
  infosecV7Id: '5e6021435ac9d0ecd8b94b00',
  sciCompPyV7Id: '5e44431b903586ffb414c951',
  dataAnalysisPyV7Id: '5e46fc95ac417301a38fb934',
  machineLearningPyV7Id: '5e46fc95ac417301a38fb935'
};

const completionHours = {
  [certKeys.frontEnd]: 400,
  [certKeys.backEnd]: 400,
  [certKeys.dataVis]: 400,
  [certKeys.infosecQa]: 300,
  [certKeys.fullStack]: 1800,
  [certKeys.respWebDesign]: 300,
  [certKeys.frontEndLibs]: 300,
  [certKeys.jsAlgoDataStruct]: 300,
  [certKeys.dataVis2018]: 300,
  [certKeys.apisMicroservices]: 300,
  [certKeys.qaV7]: 300,
  [certKeys.infosecV7]: 300,
  [certKeys.sciCompPyV7]: 300,
  [certKeys.dataAnalysisPyV7]: 300,
  [certKeys.machineLearningPyV7]: 300
};

const superBlockCertTypeMap = {
  // legacy
  'legacy-front-end': certKeys.frontEnd,
  'legacy-back-end': certKeys.backEnd,
  'legacy-data-visualization': certKeys.dataVis,
  // Keep these slugs the same so we don't
  // break existing links
  'information-security-and-quality-assurance': certKeys.infosecQa,
  'full-stack': certKeys.fullStack,

  // modern
  'responsive-web-design': certKeys.respWebDesign,
  'javascript-algorithms-and-data-structures': certKeys.jsAlgoDataStruct,
  'front-end-libraries': certKeys.frontEndLibs,
  'data-visualization': certKeys.dataVis2018,
  'apis-and-microservices': certKeys.apisMicroservices,
  'quality-assurance-v7': certKeys.qaV7,
  'information-security-v7': certKeys.infosecV7,
  'scientific-computing-with-python-v7': certKeys.sciCompPyV7,
  'data-analysis-with-python-v7': certKeys.dataAnalysisPyV7,
  'machine-learning-with-python-v7': certKeys.machineLearningPyV7
};

const certKeyToId = {
  [certKeys.frontEnd]: certIds.legacyFrontEndChallengeId,
  [certKeys.backEnd]: certIds.legacyBackEndChallengeId,
  [certKeys.dataVis]: certIds.legacyDataVisId,
  [certKeys.infosecQa]: certIds.legacyInfosecQaId,
  [certKeys.fullStack]: certIds.legacyFullStackId,
  [certKeys.respWebDesign]: certIds.respWebDesignId,
  [certKeys.frontEndLibs]: certIds.frontEndLibsId,
  [certKeys.jsAlgoDataStruct]: certIds.jsAlgoDataStructId,
  [certKeys.dataVis2018]: certIds.dataVis2018Id,
  [certKeys.apisMicroservices]: certIds.apisMicroservicesId,
  [certKeys.qaV7]: certIds.qaV7Id,
  [certKeys.infosecV7]: certIds.infosecV7Id,
  [certKeys.sciCompPyV7]: certIds.sciCompPyV7Id,
  [certKeys.dataAnalysisPyV7]: certIds.dataAnalysisPyV7Id,
  [certKeys.machineLearningPyV7]: certIds.machineLearningPyV7Id
};

const certKeyToText = {
  [certKeys.frontEnd]: 'Legacy Front End',
  [certKeys.backEnd]: 'Legacy Back End',
  [certKeys.dataVis]: 'Legacy Data Visualization',
  [certKeys.infosecQa]: 'Legacy Information Security and Quality Assurance',
  [certKeys.fullStack]: 'Legacy Full Stack',
  [certKeys.respWebDesign]: 'Responsive Web Design',
  [certKeys.frontEndLibs]: 'Front End Libraries',
  [certKeys.jsAlgoDataStruct]: 'JavaScript Algorithms and Data Structures',
  [certKeys.dataVis2018]: 'Data Visualization',
  [certKeys.apisMicroservices]: 'APIs and Microservices',
  [certKeys.qaV7]: 'Quality Assurance',
  [certKeys.infosecV7]: 'Information Security',
  [certKeys.sciCompPyV7]: 'Scientific Computing with Python',
  [certKeys.dataAnalysisPyV7]: 'Data Analysis with Python',
  [certKeys.machineLearningPyV7]: 'Machine Learning with Python'
};

const constantStrings = {
  gitHubUserAgent:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
};

exports.completionHours = completionHours;
exports.certKeys = certKeys;
exports.superBlockCertTypeMap = superBlockCertTypeMap;
exports.certIds = certIds;
exports.certKeyToId = certKeyToId;
exports.certKeyToText = certKeyToText;
exports.constantStrings = constantStrings;
