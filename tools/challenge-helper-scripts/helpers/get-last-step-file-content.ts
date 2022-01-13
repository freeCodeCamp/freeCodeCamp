import { last } from 'lodash';
import { getMetaData } from './project-metadata';

function getLastStep(): { stepId: string; stepNum: number } {
  const meta = getMetaData();
  const challengeOrder: string[][] = meta.challengeOrder;
  const step = last(challengeOrder);
  if (!step) throw new Error('No steps found');

  return { stepId: step[0], stepNum: challengeOrder.length };
}

export { getLastStep };
