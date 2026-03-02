import { last } from 'lodash';
import { getMetaData } from './project-metadata.js';

function getLastStep(): { stepNum: number } {
  const meta = getMetaData();
  const challengeOrder = meta.challengeOrder;
  const step = last(challengeOrder);
  if (!step) throw new Error('No steps found');

  return { stepNum: challengeOrder.length };
}

export { getLastStep };
