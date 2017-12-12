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
        // @TEMPORARY remove lines 46 - 55
        if (action.payload) {
          if (files.indexjsx) {
            if (action.payload.head && action.payload.tail) {
              files.indexjsx.head = action.payload.head.join('\n');
              files.indexjsx.tail = action.payload.tail.join('\n');
            }
          }
        }
        console.warn(action);
        console.warn(files);
        return _.reduce(files, (files, file) => {
          files[file.key] = createPoly(file);
          return files;
        }, { ...state });
      }
    }
    return state;
  }
);
