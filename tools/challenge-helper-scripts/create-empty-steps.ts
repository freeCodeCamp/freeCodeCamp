import { getArgValue } from './helpers/get-arg-value';
import { createEmptySteps } from './commands';

createEmptySteps(getArgValue(process.argv));
