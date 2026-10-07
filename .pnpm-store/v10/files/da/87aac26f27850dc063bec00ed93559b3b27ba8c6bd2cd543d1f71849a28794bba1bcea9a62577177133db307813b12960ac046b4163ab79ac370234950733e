import curry from 'just-curry-it';
import createAction from './createAction';
export default (function (type, payloadCreator) {
  return curry(createAction(type, payloadCreator), payloadCreator.length);
});