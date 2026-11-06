import { testSaga } from 'redux-saga-test-plan';
import { describe, expect, it } from 'vitest';

import {
  putUpdateMyClassroomMode,
  putUpdateMyExperience,
  putUpdateMyHonesty,
  putUpdateMyKeyboardShortcuts,
  putUpdateMyPortfolio,
  putUpdateMyProfileUI,
  putUpdateMyQuincyEmail,
  putUpdateMySocials,
  putUpdateMySocrates
} from '../../utils/ajax';
import {
  submitProfileUIError,
  updateMyClassroomModeError,
  updateMyExperienceError,
  updateMyHonestyError,
  updateMyKeyboardShortcutsError,
  updateMyPortfolioError,
  updateMyQuincyEmailError,
  updateMySocialsError,
  updateMySocratesError
} from './actions';
import {
  submitProfileUISaga,
  updateMyClassroomModeSaga,
  updateMyExperienceSaga,
  updateMyHonestySaga,
  updateMyKeyboardShortcutsSaga,
  updateMyPortfolioSaga,
  updateMyQuincyEmailSaga,
  updateMySocialsSaga,
  updateMySocratesSaga
} from './settings-sagas';

describe('settings-sagas error handling', () => {
  const err = new Error('Network error');

  it('dispatches submitProfileUIError on failure', () => {
    expect(() => {
      testSaga(submitProfileUISaga, { payload: {} })
        .next()
        .call(putUpdateMyProfileUI, {})
        .throw(err)
        .put(submitProfileUIError(err))
        .next()
        .isDone();
    }).not.toThrow();
  });

  it('dispatches updateMySocialsError on failure', () => {
    expect(() => {
      testSaga(updateMySocialsSaga, { payload: {} })
        .next()
        .call(putUpdateMySocials, {})
        .throw(err)
        .put(updateMySocialsError(err))
        .next()
        .isDone();
    }).not.toThrow();
  });

  it('dispatches updateMyClassroomModeError on failure', () => {
    expect(() => {
      testSaga(updateMyClassroomModeSaga, { payload: {} })
        .next()
        .call(putUpdateMyClassroomMode, {})
        .throw(err)
        .put(updateMyClassroomModeError(err))
        .next()
        .isDone();
    }).not.toThrow();
  });

  it('dispatches updateMyHonestyError on failure', () => {
    expect(() => {
      testSaga(updateMyHonestySaga, { payload: {} })
        .next()
        .call(putUpdateMyHonesty, {})
        .throw(err)
        .put(updateMyHonestyError(err))
        .next()
        .isDone();
    }).not.toThrow();
  });

  it('dispatches updateMyKeyboardShortcutsError on failure', () => {
    expect(() => {
      testSaga(updateMyKeyboardShortcutsSaga, { payload: {} })
        .next()
        .call(putUpdateMyKeyboardShortcuts, {})
        .throw(err)
        .put(updateMyKeyboardShortcutsError(err))
        .next()
        .isDone();
    }).not.toThrow();
  });

  it('dispatches updateMyQuincyEmailError on failure', () => {
    expect(() => {
      testSaga(updateMyQuincyEmailSaga, { payload: {} })
        .next()
        .call(putUpdateMyQuincyEmail, {})
        .throw(err)
        .put(updateMyQuincyEmailError(err))
        .next()
        .isDone();
    }).not.toThrow();
  });

  it('dispatches updateMySocratesError on failure', () => {
    expect(() => {
      testSaga(updateMySocratesSaga, { payload: {} })
        .next()
        .call(putUpdateMySocrates, {})
        .throw(err)
        .put(updateMySocratesError(err))
        .next()
        .isDone();
    }).not.toThrow();
  });

  it('dispatches updateMyPortfolioError on failure', () => {
    expect(() => {
      testSaga(updateMyPortfolioSaga, { payload: {} })
        .next()
        .call(putUpdateMyPortfolio, {})
        .throw(err)
        .put(updateMyPortfolioError(err))
        .next()
        .isDone();
    }).not.toThrow();
  });

  it('dispatches updateMyExperienceError on failure', () => {
    expect(() => {
      testSaga(updateMyExperienceSaga, { payload: {} })
        .next()
        .call(putUpdateMyExperience, {})
        .throw(err)
        .put(updateMyExperienceError(err))
        .next()
        .isDone();
    }).not.toThrow();
  });
});
