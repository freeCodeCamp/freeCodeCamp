import fs from 'fs';
import { Meta } from '../create-project';
import { getProjectMetaPath } from './get-project-meta-path';

function getMetaData(): Meta {
  try {
    const metaData = fs.readFileSync(getProjectMetaPath(), 'utf8');
    return JSON.parse(metaData) as Meta;
  } catch (err) {
    throw `No _meta.json file exists at ${getProjectMetaPath()}`;
  }
}

function updateMetaData(
  projectName: string,
  newMetaData: Record<string, unknown>
): void {
  fs.writeFileSync(getProjectMetaPath(), JSON.stringify(newMetaData, null, 2));
}

export { getMetaData, updateMetaData };
