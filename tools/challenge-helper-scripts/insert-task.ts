import ObjectID from 'bson-objectid';
import { prompt } from 'inquirer';
import { getTemplate } from './helpers/get-challenge-template';
import { newTaskPrompts } from './helpers/new-task-prompts';
import { getProjectPath } from './helpers/get-project-info';
import { validateMetaData } from './helpers/project-metadata';
import {
  createChallengeFile,
  insertChallengeIntoMeta,
  updateTaskMeta,
  updateTaskMarkdownFiles
} from './utils';
import { getChallengeOrderFromMeta } from './helpers/get-challenge-order';

const insertChallenge = async () => {
  validateMetaData();

  const challenges = getChallengeOrderFromMeta();
  const challengeAfter = await prompt<{ id: string }>({
    name: 'id',
    message: 'Which challenge should come AFTER this new one?',
    type: 'list',
    choices: challenges.map(({ id, title }) => ({
      name: title,
      value: id
    }))
  });

  const indexToInsert = challenges.findIndex(
    ({ id }) => id === challengeAfter.id
  );

  const newTaskTitle = 'Task 0';

  const { challengeType } = await newTaskPrompts();

  const options = {
    title: newTaskTitle,
    dashedName: 'task-0',
    challengeType
  };

  const path = getProjectPath();
  const template = getTemplate(challengeType);
  const challengeId = new ObjectID();
  const challengeText = template({ ...options, challengeId });
  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  const challengeIdString = challengeId.toString();

  createChallengeFile(challengeIdString, challengeText, path);
  console.log('Finished creating new task markdown file.');

  insertChallengeIntoMeta({
    index: indexToInsert,
    id: challengeId,
    title: newTaskTitle
  });
  console.log(`Finished inserting task into 'meta.json' file.`);

  updateTaskMeta();
  console.log("Finished updating tasks in 'meta.json'.");

  updateTaskMarkdownFiles();
  console.log('Finished updating task markdown files.');
};

void insertChallenge();
