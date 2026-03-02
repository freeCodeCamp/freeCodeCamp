import { ObjectId } from 'bson';
import { getTemplate } from './helpers/get-challenge-template.js';
import { newChallengePrompts } from './helpers/new-challenge-prompts.js';
import { getProjectPath } from './helpers/get-project-info.js';
import { getMetaData, updateMetaData } from './helpers/project-metadata.js';
import { createChallengeFile } from './utils.js';

const createNextChallenge = async () => {
  const path = getProjectPath();

  const options = await newChallengePrompts();
  const template = getTemplate(options.challengeType);

  const challengeId = new ObjectId();
  const challengeText = template({ ...options, challengeId });

  createChallengeFile(options.dashedName, challengeText, path);

  const meta = getMetaData();
  meta.challengeOrder.push({
    id: challengeId.toString(),
    title: options.title
  });
  await updateMetaData(meta);
};

void createNextChallenge();
