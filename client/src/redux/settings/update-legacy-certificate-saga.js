import { takeEvery, select, call, put } from 'redux-saga/effects';

import { putUpdateLegacyCertificate } from '../../utils/ajax';
import { completedChallengesSelector, submitComplete } from '../';
import { legacyProjectMap } from '../../resources/certProjectMap';
import { createFlashMessage } from '../../components/Flash/redux';
import standardErrorMessage from '../../utils/reallyWeirdErrorMessage';
import { updateLegacyCertificateError } from './';

const completedChallenges = state => completedChallengesSelector(state);

function* updateLegacyCertificateSaga({ payload }) {
  // find which certificate the challenges belong to
  let legacyCert;
  let certs = Object.keys(legacyProjectMap);
  let loopBreak = false;
  for (let i of certs) {
    for (let j of legacyProjectMap[i]) {
      if (j.title === Object.keys(payload)[0]) {
        console.log(j.title);
        loopBreak = true;
        legacyCert = i;
        break;
      }
    }
    if (loopBreak) {
      break;
    }
  }

  // make an object with keys as challenge ids and values as solutions
  let idsToSolutions = {};
  for (let i of Object.keys(payload)) {
    for (let j of legacyProjectMap[legacyCert]) {
      if (i === j.title) {
        console.log(payload[i]);
        idsToSolutions[j.id] = payload[i];
        break;
      }
    }
  }

  // find how many challnegs have been updated and how many are new
  let completed = yield select(completedChallenges);
  let challengesToUpdate = {};
  let newChalleneFound = true;
  for (let j of Object.keys(idsToSolutions)) {
    for (let i of completed) {
      if (i.id === j) {
        if (idsToSolutions[j] !== i.solution) {
          challengesToUpdate[j] = idsToSolutions[j];
        }
        newChalleneFound = false;
        break;
      }
    }
    if (newChalleneFound && idsToSolutions[j] !== '') {
      challengesToUpdate[j] = idsToSolutions[j];
    }
    newChalleneFound = true;
  }

  // shape the body of the http call so it is consumable by api
  const body = {
    projects: {
      [legacyCert]: challengesToUpdate
    }
  };

  // shape to update completed  challenges
  let reduxShape = [];
  for (let obj in challengesToUpdate) {
    if (challengesToUpdate.hasOwnProperty(obj)) {
      reduxShape.push({ id: obj, solution: challengesToUpdate[obj] });
    }
  }

  try {
    const { data: response } = yield call(putUpdateLegacyCertificate, body);
    yield put(submitComplete({ challArray: reduxShape }));
    yield put(createFlashMessage(response));
  } catch (e) {
    yield put(updateLegacyCertificateError(e));
    yield put(createFlashMessage(standardErrorMessage));
  }
}

export function createUpdateLegacyCertificateSaga(types) {
  return [
    takeEvery(types.updateLegacyCertificate, updateLegacyCertificateSaga)
  ];
}
