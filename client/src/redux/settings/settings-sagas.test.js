import { put } from 'redux-saga/effects';
import store from 'store';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

import {
  updateMyAmbientSoundComplete,
  updateMyAmbientSoundError
} from './actions';
import { createSettingsSagas } from './settings-sagas';

// We need to extract the actual generator function to test it
// It's not exported directly, but we can find it in the createSettingsSagas array
const sagas = createSettingsSagas({
  updateMySocials: 'updateMySocials',
  updateMyHonesty: 'updateMyHonesty',
  updateMySound: 'updateMySound',
  updateMyAmbientSound: 'updateMyAmbientSound',
  resetMyEditorLayout: 'resetMyEditorLayout',
  updateMyKeyboardShortcuts: 'updateMyKeyboardShortcuts',
  updateMyQuincyEmail: 'updateMyQuincyEmail',
  updateMyPortfolio: 'updateMyPortfolio',
  updateMyExperience: 'updateMyExperience',
  submitNewAbout: 'submitNewAbout',
  submitNewUsername: 'submitNewUsername',
  validateUsername: 'validateUsername',
  submitProfileUI: 'submitProfileUI',
  verifyCert: 'verifyCert'
});

const updateMyAmbientSoundSagaWatcher = sagas.find(
  s => s.payload.args?.[0] === 'updateMyAmbientSound'
);
const updateMyAmbientSoundSaga =
  updateMyAmbientSoundSagaWatcher.payload.args[1];

describe('settingsSagas', () => {
  describe('updateMyAmbientSoundSaga', () => {
    let mockStoreSet;

    beforeEach(() => {
      mockStoreSet = vi.spyOn(store, 'set').mockImplementation(() => {});
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('should set ambient sound to true, dispatch complete action, and create flash message', () => {
      const payload = { ambientSound: true };
      const iterator = updateMyAmbientSoundSaga({ payload });

      const data = {
        message: 'flash.updated-sound',
        type: 'success'
      };

      // 1. Should put updateMyAmbientSoundComplete
      expect(iterator.next().value).toEqual(
        put(updateMyAmbientSoundComplete({ ...data, payload }))
      );

      // Also verify local storage was updated
      expect(mockStoreSet).toHaveBeenCalledWith('fcc-ambient-sound', true);

      // 2. Should put createFlashMessage (ignore dynamic ID)
      const flashAction = iterator.next().value;
      expect(flashAction.payload.action.type).toBe('createFlashMessage');
      expect(flashAction.payload.action.payload).toMatchObject(data);

      // 3. Should be done
      expect(iterator.next().done).toBe(true);
    });

    it('should set ambient sound to false, dispatch complete action, and create flash message', () => {
      const payload = { ambientSound: false };
      const iterator = updateMyAmbientSoundSaga({ payload });

      const data = {
        message: 'flash.updated-sound',
        type: 'success'
      };

      // 1. Should put updateMyAmbientSoundComplete
      expect(iterator.next().value).toEqual(
        put(updateMyAmbientSoundComplete({ ...data, payload }))
      );

      // Also verify local storage was updated
      expect(mockStoreSet).toHaveBeenCalledWith('fcc-ambient-sound', false);

      // 2. Should put createFlashMessage (ignore dynamic ID)
      const flashAction = iterator.next().value;
      expect(flashAction.payload.action.type).toBe('createFlashMessage');
      expect(flashAction.payload.action.payload).toMatchObject(data);

      // 3. Should be done
      expect(iterator.next().done).toBe(true);
    });

    it('should dispatch an error if something throws', () => {
      // Force store.set to throw to simulate an error
      mockStoreSet.mockImplementationOnce(() => {
        throw new Error('Local storage error');
      });

      const payload = { ambientSound: true };
      const iterator = updateMyAmbientSoundSaga({ payload });

      // Should catch the error and dispatch updateMyAmbientSoundError()
      expect(iterator.next().value).toEqual(put(updateMyAmbientSoundError()));

      expect(iterator.next().done).toBe(true);
    });
  });
});
