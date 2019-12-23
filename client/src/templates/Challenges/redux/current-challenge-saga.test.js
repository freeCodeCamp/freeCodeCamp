/* global  expect */
import { allowBlockDonationRequestsSaga } from './current-challenge-saga';
import { types as appTypes } from '../../../redux';

describe('allowBlockDonationRequestsSaga', () => {
  it('should call allowBlockDonationRequests', () => {
    const gen = allowBlockDonationRequestsSaga();
    expect(gen.next().value.payload.action.type).toEqual(
      appTypes.allowBlockDonationRequests
    );
  });
});
