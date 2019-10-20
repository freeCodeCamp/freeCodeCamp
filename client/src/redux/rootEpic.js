import { combineEpics } from 'redux-observable';

import { epics as appEpics } from './';
import { epics as challengeEpics } from '../templates/Challenges/redux';

const rootEpic = combineEpics(...appEpics, ...challengeEpics);

export default rootEpic;
