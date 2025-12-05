import { deleteStep } from './commands.js';
import { getArgValue } from './helpers/get-arg-value.js';

void deleteStep(getArgValue(process.argv));
