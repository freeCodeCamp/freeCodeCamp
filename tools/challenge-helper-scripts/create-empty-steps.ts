import { getArgValues } from './helpers/get-arg-values';
import { createEmptySteps } from './commands';

const args = getArgValues(process.argv);

const { num: numString } = args;

if (!numString) {
  throw `No steps created. num arg val must be specified.`;
}
const num = parseInt(numString, 10);

createEmptySteps(num);
