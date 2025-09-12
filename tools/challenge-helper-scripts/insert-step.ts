import { getArgValue } from './helpers/get-arg-value';
import { insertStep } from './commands';

void insertStep(getArgValue(process.argv));
