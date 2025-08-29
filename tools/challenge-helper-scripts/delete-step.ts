import { deleteStep } from './commands';
import { getArgValue } from './helpers/get-arg-value';

void deleteStep(getArgValue(process.argv));
