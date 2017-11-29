import _ from 'lodash';
import {
  combineActions,
  createAction,
  createTypes,
  handleActions
} from 'berkeleys-redux-utils';

import { bonfire, html, js } from '../utils/challengeTypes.js';
import { createPoly, setContent } from '../../utils/polyvinyl.js';
import { arrayToString, buildSeed, getPreFile } from '../utils/classic-file.js';
import { types as app } from '../redux';
import { types as challenges } from '../routes/Challenges/redux';

const ns = 'files';

export const types = createTypes([
  'updateFile',
  'updateFiles',
  'savedCodeFound'
], ns);

export const updateFile = createAction(types.updateFile);
export const updateFiles = createAction(types.updateFiles);
export const savedCodeFound = createAction(
  types.savedCodeFound,
  (files, challenge) => ({ files, challenge })
);

export const filesSelector = state => state[ns];
export const createFileSelector = keySelector => (state, props) => {
  const files = filesSelector(state);
  return files[keySelector(state, props)] || {};
};

export default handleActions(
  () => ({
    [types.updateFile]: (state, { payload: { key, content }}) => ({
      ...state,
      [key]: setContent(content, state[key])
    }),
    [types.updateFiles]: (state, { payload: files }) => {
      return files
        .reduce((files, file) => {
          files[file.key] = file;
          return files;
        }, { ...state });
    },
    [types.savedCodeFound]: (state, { payload: { files, challenge } }) => {
      if (challenge.type === 'modern') {
        // this may need to change to update head/tail
        return _.reduce(files, (files, file) => {
          files[file.key] = createPoly(file);
          return files;
        }, {});
      }
      if (
        challenge.challengeType !== html &&
        challenge.challengeType !== js &&
        challenge.challengeType !== bonfire
      ) {
        return {};
      }
      // classic challenge to modern format
      const preFile = getPreFile(challenge);
      return {
        [preFile.key]: createPoly({
          ...files[preFile.key],
          // make sure head/tail are always fresh
          head: arrayToString(challenge.head),
          tail: arrayToString(challenge.tail)
        })
      };
    },
    [
      combineActions(
        challenges.challengeUpdated,
        app.fetchChallenge.complete
      )
    ]: (state, { payload: { challenge } }) => {
      if (challenge.type === 'modern') {
        return _.reduce(challenge.files, (files, file) => {
          files[file.key] = createPoly(file);
          return files;
        }, {});
      }
      if (
        challenge.challengeType !== html &&
        challenge.challengeType !== js &&
        challenge.challengeType !== bonfire
      ) {
        return {};
      }
      // classic challenge to modern format
      const preFile = getPreFile(challenge);
      return {
        [preFile.key]: createPoly({
          ...preFile,
          contents: buildSeed(challenge),
          head: arrayToString(challenge.head),
          tail: arrayToString(challenge.tail)
        })
      };
    }
  }),
  {},
  ns
);
