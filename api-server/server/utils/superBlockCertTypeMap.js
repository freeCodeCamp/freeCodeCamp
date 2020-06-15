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
  '2020-quality-assurance': certTypes.qa2020,
  '2020-information-security': certTypes.infosec2020,
  '2020-scientific-computing-with-python': certTypes.sciCompPy2020,
  '2020-data-analysis-with-python': certTypes.dataAnalysisPy2020,
  '2020-machine-learning-with-python': certTypes.machineLearningPy2020
};

export default superBlockCertTypeMap;
