import path from 'path';
import { getProjectPath } from './get-project-info';

// Returns the path of the meta file associated to arguments provided.
const getProjectMetaPath = (projectName: string): string => {
  if (!projectName) {
    throw `${projectName} can't be an empty string`;
  }

  return path.resolve(
    getProjectPath(),
    '../../..',
    '_meta',
    projectName,
    'meta.json'
  );
};

export { getProjectMetaPath };
