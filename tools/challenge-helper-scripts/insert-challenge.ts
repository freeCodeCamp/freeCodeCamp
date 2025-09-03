import ObjectID from 'bson-objectid';
import { select } from '@inquirer/prompts';
import { getTemplate } from './helpers/get-challenge-template';
import { newChallengePrompts } from './helpers/new-challenge-prompts';
import { getProjectPath } from './helpers/get-project-info';
import { getMetaData, updateMetaData } from './helpers/project-metadata';
import { createChallengeFile } from './utils';

const insertChallenge = async () => {
  const path = getProjectPath();

  const options = await newChallengePrompts();

  const challenges = getMetaData().challengeOrder;

  const challengeAfter = await select({
    message: 'Which challenge should come AFTER this new one?',
    choices: challenges.map(({ id, title }) => ({
      name: title,
      value: id
    }))
  });
  const indexToInsert = challenges.findIndex(({ id }) => id === challengeAfter);

  const template = getTemplate(options.challengeType);
  const challengeId = new ObjectID();
  const challengeText = template({ ...options, challengeId });
  createChallengeFile(options.dashedName, challengeText, path);

  const meta = getMetaData();
  meta.challengeOrder.splice(indexToInsert, 0, {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    id: challengeId.toString(),
    title: options.title
  });
  await updateMetaData(meta);
};

void insertChallenge();
