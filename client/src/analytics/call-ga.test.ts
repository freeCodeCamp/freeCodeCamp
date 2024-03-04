import callGA, { GAevent } from './call-ga';
import TagManager from '.';

jest.mock('.', () => ({
  dataLayer: jest.fn()
}));

describe('callGA function', () => {
  it('calls TagManager dataLayer with the same arguments', () => {
    const eventDataMock: GAevent = {
      event: 'donation',
      action: 'Donate Page Stripe Payment Submission',
      duration: 'month',
      amount: 500,
      completed_challenges: 100,
      completed_challenges_session: 10,
      isSignedIn: true
    };
    callGA(eventDataMock);
    expect(TagManager.dataLayer).toHaveBeenCalledWith({
      dataLayer: eventDataMock
    });
  });
});
