import { ObjectId } from 'bson';
import { prompt } from 'inquirer';
import { getTemplate } from './helpers/get-challenge-template.js';
import { newTaskPrompts } from './helpers/new-task-prompts.js';
import { getProjectPath } from './helpers/get-project-info.js';
import {
  createChallengeFile,
  getChallenge,
  insertChallengeIntoMeta,
  updateTaskMeta,
  updateTaskMarkdownFiles
} from './utils.js';
import { getMetaData } from './helpers/project-metadata.js';
import { getInputType } from './helpers/get-input-type.js';

const insertChallenge = async () => {
  const challenges = getMetaData().challengeOrder;
  const challengeAfter = await prompt<{ id: string }>({
    name: 'id',
    message: 'Which challenge should come AFTER this new one?',
    type: 'list',
    choices: challenges.map(({ id, title }) => ({
      name: title,
      value: id
    }))
  });
  const challengeLang = getChallenge(challengeAfter.id)?.lang;

  const indexToInsert = challenges.findIndex(
    ({ id }) => id === challengeAfter.id
  );

  const newTaskTitle = 'Task 0';

  const { challengeType } = await newTaskPrompts();

  const inputType = await getInputType(challengeType, challengeLang);
  const options = {
    title: newTaskTitle,
    dashedName: 'task-0',
    challengeType,
    ...{ ...(challengeLang && { challengeLang }) },
    ...{ ...(inputType && { inputType }) }
  };

  const path = getProjectPath();
  const template = getTemplate(challengeType);
  const challengeId = new ObjectId();
  const challengeText = template({ ...options, challengeId });

  const challengeIdString = challengeId.toString();

  createChallengeFile(challengeIdString, challengeText, path);
  console.log('Finished creating new task markdown file.');

  await insertChallengeIntoMeta({
    index: indexToInsert,
    id: challengeId,
    title: newTaskTitle
  });
  console.log(`Finished inserting task into 'meta.json' file.`);

  await updateTaskMeta();
  console.log("Finished updating tasks in 'meta.json'.");

  updateTaskMarkdownFiles();
  console.log('Finished updating task markdown files.');
};

void insertChallenge();
