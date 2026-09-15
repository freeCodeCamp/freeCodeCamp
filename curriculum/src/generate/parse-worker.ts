import workerpool from 'workerpool';

import { parseMD } from '../../../tools/challenge-parser/parser';

workerpool.worker({ parseMD });
