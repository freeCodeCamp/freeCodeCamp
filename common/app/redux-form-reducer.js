import { composeReducers } from 'berkeleys-redux-utils';
import { reducer as formReducer } from 'redux-form';

import {
  projectNormalizer,
  types as challenge
} from './routes/Challenges/redux';

const normailizedFormReducer = formReducer.normalize({ ...projectNormalizer });

const pluggedInFormReducer = formReducer.plugin({
  NewFrontEndProject: (state, action) => {
    if (action.type === challenge.moveToNextChallenge) {
      return {
        ...state,
        solution: {}
      };
    }
    return state;
  },
  NewBackEndProject: (state, action) => {
    if (action.type === challenge.moveToNextChallenge) {
      return {
        ...state,
        solution: {},
        githubLink: {}
      };
    }
    return state;
  }
});

export default composeReducers(
  'form',
  normailizedFormReducer,
  pluggedInFormReducer
);
