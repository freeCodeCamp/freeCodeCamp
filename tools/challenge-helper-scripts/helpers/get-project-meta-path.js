const path = require('path');

// Returns the path of the meta file associated to arguments provided.
const getProjectMetaPath = (curriculumPath, projectName) => {
  if (typeof curriculumPath !== 'string' || typeof projectName !== 'string') {
    throw `${curriculumPath} and ${projectName} should be of type string`;
  }

  if (!projectName) {
    throw `${projectName} can't be an empty string`;
  }

  return path.resolve(
    curriculumPath,
    'challenges',
    '_meta',
    projectName,
    'meta.json'
  );
};

exports.getProjectMetaPath = getProjectMetaPath;
