import { getLastStep } from './helpers/get-last-step-file-number.js';
import { insertStep } from './commands.js';

void insertStep(getLastStep().stepNum + 1);
