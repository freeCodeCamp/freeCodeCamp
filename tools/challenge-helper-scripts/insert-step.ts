import { getArgValue } from './helpers/get-arg-value.js';
import { insertStep } from './commands.js';

void insertStep(getArgValue(process.argv));
