import path from 'path';
import { getProjectName, getProjectPath } from './get-project-info';

const getProjectMetaPath = (): string => {
  return path.join(
    getProjectPath(),
    '../../..',
    '_meta',
    getProjectName(),
    'meta.json'
  );
};

export { getProjectMetaPath };
