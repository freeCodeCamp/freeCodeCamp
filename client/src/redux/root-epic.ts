import { combineEpics } from 'redux-observable';

import { epics as challengeEpics } from '../templates/Challenges/redux';
import { epics as appEpics } from '.';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const rootEpic = combineEpics(...appEpics, ...challengeEpics);

export default rootEpic;
