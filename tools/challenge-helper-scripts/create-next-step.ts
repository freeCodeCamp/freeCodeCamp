import { getLastStep } from './helpers/get-last-step-file-number';
import { insertStep } from './commands';

void insertStep(getLastStep().stepNum + 1);
