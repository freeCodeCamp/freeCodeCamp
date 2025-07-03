import ObjectID from 'bson-objectid';
import { getTemplate } from './helpers/get-challenge-template';
import { newChallengePrompts } from './helpers/new-challenge-prompts';
import { getProjectPath } from './helpers/get-project-info';
import { getMetaData, updateMetaData } from './helpers/project-metadata';
import { createChallengeFile } from './utils';

const createNextChallenge = async () => {
  const path = getProjectPath();

  const options = await newChallengePrompts();
  const template = getTemplate(options.challengeType);

  const challengeId = new ObjectID();
  const challengeText = template({ ...options, challengeId });

  createChallengeFile(options.dashedName, challengeText, path);

  const meta = getMetaData();
  meta.challengeOrder.push({
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    id: challengeId.toString(),
    title: options.title
  });
  updateMetaData(meta);
};

void createNextChallenge();
