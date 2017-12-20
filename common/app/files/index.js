import _ from 'lodash';
import {
  addNS,
  createTypes
} from 'berkeleys-redux-utils';

import { createPoly, setContent } from '../../utils/polyvinyl.js';

const ns = 'files';

export const types = createTypes([
  'updateFile',
  'createFiles'
], ns);

export const updateFileMetaCreator = (key, content)=> ({
  file: { type: types.updateFile, payload: { key, content } }
});
export const createFilesMetaCreator = payload => ({
  file: { type: types.createFiles, payload }
});

export const filesSelector = state => state[ns];
export const createFileSelector = keySelector => (state, props) => {
  const files = filesSelector(state);
  return files[keySelector(state, props)] || {};
};

const getFileAction = _.property('meta.file.type');
const getFilePayload = _.property('meta.file.payload');

export default addNS(
  ns,
  function reducer(state = {}, action) {
    if (getFileAction(action)) {
      if (getFileAction(action) === types.updateFile) {
        const { key, content } = getFilePayload(action);
        return {
          ...state,
          [key]: setContent(content, state[key])
        };
      }
      if (getFileAction(action) === types.createFiles) {
        const files = getFilePayload(action);
        return _.reduce(files, (files, file) => {
          files[file.key] = createPoly(file);
          return files;
        }, {});
      }
    }
    return state;
  }
);
