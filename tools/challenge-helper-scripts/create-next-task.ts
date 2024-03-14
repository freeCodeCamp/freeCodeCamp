import ObjectID from 'bson-objectid';
import { getTemplate } from './helpers/get-challenge-template';
import { newTaskPrompts } from './helpers/new-task-prompts';
import { getProjectPath } from './helpers/get-project-info';
import {
  getMetaData,
  updateMetaData,
  validateMetaData
} from './helpers/project-metadata';
import { createChallengeFile } from './utils';
import { getLastTaskNumber } from './helpers/task-helpers';

const createNextTask = async () => {
  validateMetaData();

  const lastTaskNumber = getLastTaskNumber();
  const nextTaskNumber = lastTaskNumber + 1;

  const msg =
    lastTaskNumber === 0
      ? `No task challenges have been created yet,`
      : `The last task challenge that exists is 'Task ${lastTaskNumber}',`;

  console.log(
    `${msg}\nthis will create a 'Task ${nextTaskNumber}' challenge at the end of this block.\n`
  );

  const { challengeType } = await newTaskPrompts();

  const options = {
    title: `Task ${nextTaskNumber}`,
    dashedName: `task-${nextTaskNumber}`,
    challengeType
  };

  const path = getProjectPath();
  const template = getTemplate(options.challengeType);
  const challengeId = new ObjectID();
  const challengeText = template({ ...options, challengeId });
  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  const challengeIdString = challengeId.toString();

  createChallengeFile(challengeIdString, challengeText, path);

  const meta = getMetaData();
  meta.challengeOrder.push({
    id: challengeIdString,
    title: options.title
  });
  updateMetaData(meta);

  console.log(`\n'${options.title}' successfully created.\n`);
};

void createNextTask();
