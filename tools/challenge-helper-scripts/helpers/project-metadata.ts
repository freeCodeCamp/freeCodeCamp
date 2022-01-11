import fs from 'fs';
import path from 'path';
import { getProjectMetaPath } from './get-project-meta-path';

const curriculumPath = process.env.CALLING_DIR
  ? ''
  : path.join(__dirname, '../');

// Process the contents of a argument (json) to an Object
function getMetaData(projectName: string): Record<string, unknown> {
  const projectMetaPath = getProjectMetaPath(curriculumPath, projectName);

  try {
    const metaData = fs.readFileSync(projectMetaPath, 'utf8');
    return JSON.parse(metaData) as Record<string, unknown>;
  } catch (err) {
    throw `No _meta.json file exists at ${projectMetaPath}`;
  }
}

function updateMetaData(
  projectName: string,
  newMetaData: Record<string, unknown>
): void {
  const projectMetaPath = getProjectMetaPath(curriculumPath, projectName);
  fs.writeFileSync(projectMetaPath, JSON.stringify(newMetaData, null, 2));
}

export { getMetaData, updateMetaData };
