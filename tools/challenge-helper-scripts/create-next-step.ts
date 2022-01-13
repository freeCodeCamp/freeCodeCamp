import { getLastStep } from './helpers/get-last-step-file-number';
import { insertStep } from './commands';

insertStep(getLastStep().stepNum + 1);
