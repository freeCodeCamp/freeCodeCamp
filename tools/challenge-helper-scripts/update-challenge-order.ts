import { readdir } from 'fs/promises';
import { join } from 'path';

import * as matter from 'gray-matter';
import { prompt } from 'inquirer';

import { getProjectPath } from './helpers/get-project-info';
import { getMetaData, updateMetaData } from './helpers/project-metadata';

const updateChallengeOrder = async () => {
  const path = getProjectPath();
  const fileList = await readdir(path);
  // [id, title]
  const oldChallengeOrder = fileList
    .map(file => matter.read(join(path, file)))
    .map(({ data }) => [data.id, data.title] as [string, string]);

  console.log('Current challenge order is: ');
  console.table(oldChallengeOrder.map(([_id, title]) => ({ title })));

  const newChallengeOrder: [string, string][] = [];

  while (oldChallengeOrder.length) {
    const nextChallenge = (await prompt({
      name: 'id',
      message: newChallengeOrder.length
        ? `What challenge comes after ${
            newChallengeOrder[newChallengeOrder.length - 1][1]
          }?`
        : 'What is the first challenge?',
      type: 'list',
      choices: oldChallengeOrder.map(([id, title]) => ({
        name: title,
        value: id
      }))
    })) as { id: string };
    const nextChallengeIndex = oldChallengeOrder.findIndex(
      ([id]) => id === nextChallenge.id
    );
    const targetChallenge = oldChallengeOrder[nextChallengeIndex];
    oldChallengeOrder.splice(nextChallengeIndex, 1);
    newChallengeOrder.push(targetChallenge);
  }

  console.log('New challenge order is: ');
  console.table(newChallengeOrder.map(([_id, title]) => ({ title })));

  const confirm = await prompt({
    name: 'correct',
    message: 'Is this correct?',
    type: 'confirm',
    default: false
  });

  if (!confirm.correct) {
    console.error('Aborting.');
    return;
  }

  const meta = getMetaData();
  meta.challengeOrder = newChallengeOrder;
  updateMetaData(meta);
};

void (async () => await updateChallengeOrder())();
