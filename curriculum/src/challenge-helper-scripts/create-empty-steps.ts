import { getArgValue } from './helpers/get-arg-value.js';
import { createEmptySteps } from './commands.js';

void createEmptySteps(getArgValue(process.argv));
