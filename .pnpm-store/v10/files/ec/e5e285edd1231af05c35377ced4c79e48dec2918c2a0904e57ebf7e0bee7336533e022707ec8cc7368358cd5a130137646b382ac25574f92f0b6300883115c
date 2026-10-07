import curry from 'just-curry-it';
import createAction from './createAction';

export default (type, payloadCreator) =>
  curry(createAction(type, payloadCreator), payloadCreator.length);
