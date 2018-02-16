import certTypes from './certTypes.json';

const superBlockCertTypeMap = {
  // legacy
  'front-end': certTypes.frontEnd,
  'back-end': certTypes.backEnd,
  'data-visualization': certTypes.dataVis,
  'full-stack': certTypes.fullStack,

  // modern
  'responsive-web-design': certTypes.respWebDesign,
  'javascript-algorithms-and-data-structures': certTypes.jsAlgoDataStruct,
  'front-end-libraries': certTypes.frontEndLibs,
  'data-visualization-2018': certTypes.dataVis2018,
  'apis-and-microservices': certTypes.apisMicroservices,
  'information-security-and-quality-assurance': certTypes.infosecQa
};

export default superBlockCertTypeMap;
