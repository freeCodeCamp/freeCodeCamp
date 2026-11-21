import { testSaga } from 'redux-saga-test-plan';
import { describe, expect, it, vi } from 'vitest';

vi.mock('nanoid', () => ({
  nanoid: () => 'flash-id'
}));

vi.mock('store', () => ({
  default: {
    get: vi.fn(() => ({})),
    set: vi.fn(),
    remove: vi.fn()
  }
}));

import store from 'store';

import {
  putUpdateMyClassroomMode,
  putUpdateMyExperience,
  putUpdateMyHonesty,
  putUpdateMyKeyboardShortcuts,
  putUpdateMyPortfolio,
  putUpdateMyProfileUI,
  putUpdateMyQuincyEmail,
  putUpdateMySocrates,
  putUpdateMySocials
} from '../../utils/ajax';
import {
  resetMyEditorLayoutError,
  submitProfileUIError,
  updateMyClassroomModeError,
  updateMyExperienceError,
  updateMyHonestyError,
  updateMyKeyboardShortcutsError,
  updateMyPortfolioError,
  updateMyQuincyEmailError,
  updateMySocratesError,
  updateMySocialsError,
  updateMySoundError
} from './actions';
import {
  resetMyEditorLayoutSaga,
  submitProfileUISaga,
  updateMyClassroomModeSaga,
  updateMyExperienceSaga,
  updateMyHonestySaga,
  updateMyKeyboardShortcutsSaga,
  updateMyPortfolioSaga,
  updateMyQuincyEmailSaga,
  updateMySocratesSaga,
  updateMySocialsSaga,
  updateMySoundSaga
} from './settings-sagas';

const error = new Error('request failed');
const payload = { foo: 'bar' };

describe('settings sagas error handling', () => {
  it('dispatches submitProfileUIError with the error', () => {
    const run = () => {
      testSaga(submitProfileUISaga, { payload })
        .next()
        .call(putUpdateMyProfileUI, payload)
        .throw(error)
        .put(submitProfileUIError(error))
        .next()
        .isDone();
    };

    expect(run).not.toThrow();
  });

  it('dispatches updateMySocialsError with the error', () => {
    const run = () => {
      testSaga(updateMySocialsSaga, { payload })
        .next()
        .call(putUpdateMySocials, payload)
        .throw(error)
        .put(updateMySocialsError(error))
        .next()
        .isDone();
    };

    expect(run).not.toThrow();
  });

  it('dispatches updateMyKeyboardShortcutsError with the error', () => {
    const run = () => {
      testSaga(updateMyKeyboardShortcutsSaga, { payload })
        .next()
        .call(putUpdateMyKeyboardShortcuts, payload)
        .throw(error)
        .put(updateMyKeyboardShortcutsError(error))
        .next()
        .isDone();
    };

    expect(run).not.toThrow();
  });

  it('dispatches updateMyClassroomModeError with the error', () => {
    const run = () => {
      testSaga(updateMyClassroomModeSaga, { payload })
        .next()
        .call(putUpdateMyClassroomMode, payload)
        .throw(error)
        .put(updateMyClassroomModeError(error))
        .next()
        .isDone();
    };

    expect(run).not.toThrow();
  });

  it('dispatches updateMyHonestyError with the error', () => {
    const run = () => {
      testSaga(updateMyHonestySaga, { payload })
        .next()
        .call(putUpdateMyHonesty, payload)
        .throw(error)
        .put(updateMyHonestyError(error))
        .next()
        .isDone();
    };

    expect(run).not.toThrow();
  });

  it('dispatches updateMyQuincyEmailError with the error', () => {
    const run = () => {
      testSaga(updateMyQuincyEmailSaga, { payload })
        .next()
        .call(putUpdateMyQuincyEmail, payload)
        .throw(error)
        .put(updateMyQuincyEmailError(error))
        .next()
        .isDone();
    };

    expect(run).not.toThrow();
  });

  it('dispatches updateMySocratesError with the error', () => {
    const run = () => {
      testSaga(updateMySocratesSaga, { payload })
        .next()
        .call(putUpdateMySocrates, payload)
        .throw(error)
        .put(updateMySocratesError(error))
        .next()
        .isDone();
    };

    expect(run).not.toThrow();
  });

  it('dispatches updateMyPortfolioError with the error', () => {
    const run = () => {
      testSaga(updateMyPortfolioSaga, { payload })
        .next()
        .call(putUpdateMyPortfolio, payload)
        .throw(error)
        .put(updateMyPortfolioError(error))
        .next()
        .isDone();
    };

    expect(run).not.toThrow();
  });

  it('dispatches updateMyExperienceError with the error', () => {
    const run = () => {
      testSaga(updateMyExperienceSaga, { payload })
        .next()
        .call(putUpdateMyExperience, payload)
        .throw(error)
        .put(updateMyExperienceError(error))
        .next()
        .isDone();
    };

    expect(run).not.toThrow();
  });

  it('dispatches updateMySoundError when storing the preference fails', () => {
    vi.mocked(store.set).mockImplementationOnce(() => {
      throw error;
    });

    const run = () => {
      testSaga(updateMySoundSaga, { payload })
        .next()
        .put(updateMySoundError(error))
        .next()
        .isDone();
    };

    expect(run).not.toThrow();
  });

  it('dispatches resetMyEditorLayoutError when resetting the layout fails', () => {
    vi.mocked(store.remove).mockImplementationOnce(() => {
      throw error;
    });

    const run = () => {
      testSaga(resetMyEditorLayoutSaga)
        .next()
        .put(resetMyEditorLayoutError(error))
        .next()
        .isDone();
    };

    expect(run).not.toThrow();
  });
});
