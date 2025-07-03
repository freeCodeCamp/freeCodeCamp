import ObjectID from 'bson-objectid';
import { getTemplate } from './helpers/get-challenge-template';
import { newTaskPrompts } from './helpers/new-task-prompts';
import { getProjectPath } from './helpers/get-project-info';
import {
  getMetaData,
  updateMetaData,
  validateMetaData
} from './helpers/project-metadata';
import {
  createChallengeFile,
  updateTaskMeta,
  updateTaskMarkdownFiles
} from './utils';

const createNextTask = async () => {
  validateMetaData();

  const { challengeType } = await newTaskPrompts();

  // Placeholder title, to be replaced by updateTaskMarkdownFiles
  const options = {
    title: `Task 0`,
    dashedName: 'task-0',
    challengeType
  };

  const path = getProjectPath();
  const template = getTemplate(options.challengeType);
  const challengeId = new ObjectID();
  const challengeText = template({ ...options, challengeId });
  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  const challengeIdString = challengeId.toString();

  createChallengeFile(challengeIdString, challengeText, path);
  console.log('Finished creating new task markdown file.');

  const meta = getMetaData();
  meta.challengeOrder.push({
    id: challengeIdString,
    title: options.title
  });
  updateMetaData(meta);
  console.log(`Finished inserting task into 'meta.json' file.`);

  updateTaskMeta();
  console.log("Finished updating tasks in 'meta.json'.");

  updateTaskMarkdownFiles();
  console.log('Finished updating task markdown files.');
};

void createNextTask();
