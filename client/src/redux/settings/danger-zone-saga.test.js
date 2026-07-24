import { testSaga } from 'redux-saga-test-plan';
import { describe, expect, it, vi } from 'vitest';

vi.mock('nanoid', () => ({
  nanoid: () => 'flash-id'
}));

import { createFlashMessage } from '../../components/Flash/redux';
import { FlashMessages } from '../../components/Flash/redux/flash-messages';
import { getSignout, postDeleteAccount } from '../../utils/ajax';
import { hardGoTo } from '../actions';
import { userIdSelector } from '../selectors';
import { deleteAccountSaga } from './danger-zone-saga';

describe('deleteAccountSaga', () => {
  it('signs out before redirecting to learn', () => {
    const userId = '5fa2db00a25c1c1fa49ce067';

    expect(() => {
      testSaga(deleteAccountSaga)
        .next()
        .select(userIdSelector)
        .next(userId)
        .call(postDeleteAccount, userId)
        .next()
        .call(getSignout)
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
        .isDone();
    }).not.toThrow();
  });
});
