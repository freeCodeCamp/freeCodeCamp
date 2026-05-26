import { testSaga } from 'redux-saga-test-plan';
import { describe, expect, it, vi } from 'vitest';

vi.mock('nanoid', () => ({
  nanoid: () => 'flash-id'
}));

import { createFlashMessage } from '../../components/Flash/redux';
import { FlashMessages } from '../../components/Flash/redux/flash-messages';
import { postDeleteAccount } from '../../utils/ajax';
import { hardGoTo, resetUserData } from '../actions';
import { userIdSelector } from '../selectors';
import { deleteAccountSaga } from './danger-zone-saga';

describe('deleteAccountSaga', () => {
  it('redirects to learn before clearing user data', () => {
    const userId = '5fa2db00a25c1c1fa49ce067';

    expect(() => {
      testSaga(deleteAccountSaga)
        .next()
        .select(userIdSelector)
        .next(userId)
        .call(postDeleteAccount, userId)
        .next()
        .put(
          createFlashMessage({
            type: 'info',
            message: FlashMessages.AccountDeleted
          })
        )
        .next()
        .put(hardGoTo('/learn'))
        .next()
        .put(resetUserData())
        .next()
        .isDone();
    }).not.toThrow();
  });
});
