import qs from 'query-string';
import { put, takeEvery } from 'redux-saga/effects';
import { createFlashMessage } from '../components/Flash/redux';

function clearSearchWithoutReRender() {
  // Clear the search without causing a re-render
  const newUrl = window.location.pathname;
  window.history.pushState({}, '', newUrl);
}

function* parseMessagesSaga() {
  const search = window.location.search.slice();
  if (search) {
    const { messages } = qs.parse(search, { arrayFormat: 'index' });
    if (messages) {
      const flashMap = qs.parse(messages, { arrayFormat: 'index' });
      const flash = Object.keys(flashMap).reduce(
        (acc, type) => [
          ...acc,
          ...flashMap[type].map(message => ({ type, message })),
        ],
        []
      );
      for (let i = 0; i < flash.length; i++) {
        yield put(createFlashMessage(flash[i]));
      }
      // After processing the flash messages, clear the search parameters without re-render
      yield clearSearchWithoutReRender();
    }
  }
}

export function createAppMountSaga(types) {
  return [takeEvery(types.appMount, parseMessagesSaga)];
}
