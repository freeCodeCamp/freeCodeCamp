import fs from 'fs';
import { Meta } from '../create-project';
import { getProjectMetaPath } from './get-project-meta-path';

// Process the contents of a argument (json) to an Object
function getMetaData(projectName: string): Meta {
  const projectMetaPath = getProjectMetaPath(projectName);

  try {
    const metaData = fs.readFileSync(projectMetaPath, 'utf8');
    return JSON.parse(metaData) as Meta;
  } catch (err) {
    throw `No _meta.json file exists at ${projectMetaPath}`;
  }
}

function updateMetaData(
  projectName: string,
  newMetaData: Record<string, unknown>
): void {
  const projectMetaPath = getProjectMetaPath(projectName);
  fs.writeFileSync(projectMetaPath, JSON.stringify(newMetaData, null, 2));
}

export { getMetaData, updateMetaData };
