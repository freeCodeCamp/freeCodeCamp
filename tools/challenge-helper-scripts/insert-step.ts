import { getArgValues } from './helpers/get-arg-values';
import { insertStep } from './commands';

const args = getArgValues(process.argv);

const stepNum = parseInt(args.start, 10);

insertStep(stepNum);
