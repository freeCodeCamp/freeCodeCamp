import { readdir } from 'fs/promises';
import { join } from 'path';

import * as matter from 'gray-matter';

import { getProjectPath } from './helpers/get-project-info';
import { getMetaData, updateMetaData } from './helpers/project-metadata';

const sortByStepNum = (a: string, b: string) =>
  parseInt(a.split('-')[1]) - parseInt(b.split('-')[1]);

const repairMeta = async () => {
  const path = getProjectPath();
  const fileList = await readdir(path);
  // [id, title]
  const challengeOrder = fileList
    .map(file => matter.read(join(path, file)))
    .sort((a, b) =>
      sortByStepNum(a.data.dashedName as string, b.data.dashedName as string)
    )
    .map(({ data }) => [data.id, data.title] as [string, string]);
  if (!challengeOrder.every(([, step]) => /Step \d+/.test(step))) {
    throw new Error(
      'You can only run this command on project-based blocks with step files.'
    );
  }
  const meta = getMetaData();
  meta.challengeOrder = challengeOrder;
  updateMetaData(meta);
};

void (async () => await repairMeta())();
