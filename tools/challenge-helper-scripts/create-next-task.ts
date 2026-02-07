import { ObjectId } from 'bson';
import { getTemplate } from './helpers/get-challenge-template.js';
import { newTaskPrompts } from './helpers/new-task-prompts.js';
import { getProjectPath } from './helpers/get-project-info.js';
import { getMetaData, updateMetaData } from './helpers/project-metadata.js';
import {
  createChallengeFile,
  getChallenge,
  updateTaskMeta,
  updateTaskMarkdownFiles
} from './utils.js';
import { getInputType } from './helpers/get-input-type.js';

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
  const challengeId = new ObjectId();
  const challengeText = template({ ...options, challengeId });

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
