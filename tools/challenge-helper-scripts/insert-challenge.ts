import { ObjectId } from 'bson';
import { prompt } from 'inquirer';
import { getTemplate } from './helpers/get-challenge-template.js';
import { newChallengePrompts } from './helpers/new-challenge-prompts.js';
import { getProjectPath } from './helpers/get-project-info.js';
import { getMetaData, updateMetaData } from './helpers/project-metadata.js';
import { createChallengeFile } from './utils.js';

const insertChallenge = async () => {
  const path = getProjectPath();

  const options = await newChallengePrompts();

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
  const indexToInsert = challenges.findIndex(
    ({ id }) => id === challengeAfter.id
  );

  const template = getTemplate(options.challengeType);
  const challengeId = new ObjectId();
  const challengeText = template({ ...options, challengeId });
  createChallengeFile(options.dashedName, challengeText, path);

  const meta = getMetaData();
  meta.challengeOrder.splice(indexToInsert, 0, {
    id: challengeId.toString(),
    title: options.title
  });
  await updateMetaData(meta);
};

void insertChallenge();
