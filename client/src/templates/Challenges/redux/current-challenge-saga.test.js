/* global  expect */
import { allowDonationRequestsSaga } from './current-challenge-saga';
import { types as appTypes } from '../../../redux';

describe('allowDonationRequestsSaga', () => {
  it('should call allowDonationRequests', () => {
    const gen = allowDonationRequestsSaga();
    expect(gen.next().value.payload.action.type).toEqual(
      appTypes.allowDonationRequests
    );
  });
});
