import { takeEvery } from 'redux-saga/effects';
import ga from '../analytics';

function* callGaEvent({ payload: { type, data } }) {
  const GaTypes = { event: ga.event, page: ga.pageview, modal: ga.modalview };
  console.log('hello');
  GaTypes[type](data);
}

export function createGaSaga(types) {
  return [takeEvery(types.executeGA, callGaEvent)];
}
