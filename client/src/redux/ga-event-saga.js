import { takeEvery } from 'redux-saga/effects';
import ga from '../analytics';

function* callGaEvent({ payload }) {
  ga.event(payload);
}

export function createGaEventSaga(types) {
  return [takeEvery(types.reportGaEvent, callGaEvent)];
}
