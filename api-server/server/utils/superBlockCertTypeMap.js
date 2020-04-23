import certTypes from './certTypes.json';

const superBlockCertTypeMap = {
  // legacy
  'legacy-front-end': certTypes.frontEnd,
  'legacy-back-end': certTypes.backEnd,
  'legacy-data-visualization': certTypes.dataVis,
  'legacy-information-security-and-quality-assurance': certTypes.infosecQa,

  // modern
  'responsive-web-design': certTypes.respWebDesign,
  'javascript-algorithms-and-data-structures': certTypes.jsAlgoDataStruct,
  'front-end-libraries': certTypes.frontEndLibs,
  'data-visualization': certTypes.dataVis2018,
  'apis-and-microservices': certTypes.apisMicroservices,
  'quality-assurance': certTypes.qa,
  'information-security': certTypes.infosec,
  'full-stack': certTypes.fullStack,
  'scientific-computing-with-python': certTypes.sciCompPy,
  'data-analysis-with-python': certTypes.dataAnalysisPy,
  'machine-learning-with-python': certTypes.machineLearningPy
};

export default superBlockCertTypeMap;
