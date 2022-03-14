import { last } from 'lodash';
import { getMetaData } from './project-metadata';

function getLastStep(): { stepNum: number } {
  const meta = getMetaData();
  const challengeOrder: string[][] = meta.challengeOrder;
  const step = last(challengeOrder);
  if (!step) throw new Error('No steps found');

  return { stepNum: challengeOrder.length };
}

export { getLastStep };
