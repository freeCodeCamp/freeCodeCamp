import { takeEvery } from 'redux-saga/effects';
import ga from '../analytics';

function* callGaType({ payload: { type, data } }) {
  const GaTypes = { event: ga.event, page: ga.pageview, modal: ga.modalview };
  GaTypes[type](data);
}

export function createGaSaga(types) {
  return [takeEvery(types.executeGA, callGaType)];
}
