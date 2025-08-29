import { getArgValue } from './helpers/get-arg-value';
import { createEmptySteps } from './commands';

void createEmptySteps(getArgValue(process.argv));
