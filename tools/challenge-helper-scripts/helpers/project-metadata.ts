import path from 'path';

import {
  getBlockStructure,
  writeBlockStructure
} from '../../../curriculum/file-handler';
import { getProjectPath } from './get-project-info';

export type Meta = {
  name: string;
  blockLayout: string;
  blockType: string;
  isUpcomingChange: boolean;
  dashedName: string;
  helpCategory: string;
  order: number;
  time: string;
  template: string;
  required: string[];
  superBlock: string;
  challengeOrder: { id: string; title: string }[];
};

function getMetaData() {
  const block = getBlock(getProjectPath());
  return getBlockStructure(block) as Meta;
}

function getBlock(filePath: string) {
  return path.basename(filePath);
}

async function updateMetaData(newMetaData: Record<string, unknown>) {
  const block = getBlock(getProjectPath());
  await writeBlockStructure(block, newMetaData);
}

export { getMetaData, updateMetaData, getBlock };
