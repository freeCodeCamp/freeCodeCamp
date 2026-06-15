import { put, takeEvery } from 'redux-saga/effects';
import { createFlashMessage } from '../components/Flash/redux';

function* parseMessagesSaga() {
  const search = window.location.search;
  // TODO(Bouncey): Find a way to clear the search with causing a re-render
  if (search) {
    const params = new URLSearchParams(search);
    const messages = params.get('messages');
    if (messages) {
      try {
        const flashMap = JSON.parse(messages);
        const flash = Object.keys(flashMap).reduce(
          (acc, type) => [
            ...acc,
            ...flashMap[type].map(message => ({ type, message }))
          ],
          []
        );
        for (let i = 0; i < flash.length; i++) {
          yield put(createFlashMessage(flash[i]));
        }
      } catch (e) {
        console.error('Failed to parse redirect flash messages', e);
      }
    }
  }
}

export function createAppMountSaga(types) {
  return [takeEvery(types.appMount, parseMessagesSaga)];
}
