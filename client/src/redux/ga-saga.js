import { takeEvery, call, all } from 'redux-saga/effects';
import ga from '../analytics';

const GaTypes = { event: ga.event, page: ga.pageview, modal: ga.modalview };

function* callGaType({ payload: { type, data } }) {
  yield call(GaTypes[type], data);
}

export function* createGaSaga(types) {
  yield all([takeEvery(types.executeGA, callGaType)]);
}
