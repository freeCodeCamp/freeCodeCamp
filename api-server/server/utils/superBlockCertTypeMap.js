import certTypes from './certTypes.json';

const superBlockCertTypeMap = {
  // legacy
  'legacy-front-end': certTypes.frontEnd,
  'legacy-back-end': certTypes.backEnd,
  'legacy-data-visualization': certTypes.dataVis,
  // Keep these slugs the same so we don't
  // break existing links
  'information-security-and-quality-assurance': certTypes.infosecQa,
  'full-stack': certTypes.fullStack,

  // modern
  'responsive-web-design': certTypes.respWebDesign,
  'javascript-algorithms-and-data-structures': certTypes.jsAlgoDataStruct,
  'front-end-libraries': certTypes.frontEndLibs,
  'data-visualization': certTypes.dataVis2018,
  'apis-and-microservices': certTypes.apisMicroservices,
  'quality-assurance-v7': certTypes.qaV7,
  'information-security-v7': certTypes.infosecV7,
  'scientific-computing-with-python-v7': certTypes.sciCompPyV7,
  'data-analysis-with-python-v7': certTypes.dataAnalysisPyV7,
  'machine-learning-with-python-v7': certTypes.machineLearningPyV7
};

export default superBlockCertTypeMap;
