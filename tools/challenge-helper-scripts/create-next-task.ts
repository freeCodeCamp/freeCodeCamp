import ObjectID from 'bson-objectid';
import { getTemplate } from './helpers/get-challenge-template';
import { newTaskPrompts } from './helpers/new-task-prompts';
import { getProjectPath } from './helpers/get-project-info';
import { getMetaData, updateMetaData } from './helpers/project-metadata';
import {
  createChallengeFile,
  getChallenge,
  updateTaskMeta,
  updateTaskMarkdownFiles
} from './utils';
import { getInputType } from './helpers/get-input-type';

const createNextTask = async () => {
  const { challengeType } = await newTaskPrompts();
  const meta = getMetaData();

  const prevChallengeId =
    meta.challengeOrder[meta.challengeOrder.length - 1]?.id;
  const challengeLang = prevChallengeId && getChallenge(prevChallengeId)?.lang;

  const inputType = await getInputType(challengeType, challengeLang);

  // Placeholder title, to be replaced by updateTaskMarkdownFiles
  const options = {
    title: `Task 0`,
    dashedName: 'task-0',
    challengeType,
    ...{ ...(challengeLang && { challengeLang }) },
    ...{ ...(inputType && { inputType }) }
  };

  const path = getProjectPath();
  const template = getTemplate(options.challengeType);
  const challengeId = new ObjectID();
  const challengeText = template({ ...options, challengeId });
  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  const challengeIdString = challengeId.toString();

  createChallengeFile(challengeIdString, challengeText, path);
  console.log('Finished creating new task markdown file.');

  meta.challengeOrder.push({
    id: challengeIdString,
    title: options.title
  });
  await updateMetaData(meta);
  console.log(`Finished inserting task into 'meta.json' file.`);

  await updateTaskMeta();
  console.log("Finished updating tasks in 'meta.json'.");

  updateTaskMarkdownFiles();
  console.log('Finished updating task markdown files.');
};

void createNextTask();
