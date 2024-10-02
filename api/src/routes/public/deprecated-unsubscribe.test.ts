import { setupServer, superRequest } from '../../../jest.utils';

import { unsubscribeEndpoints } from './deprecated-unsubscribe';

const urlEncodedMessage =
  '?messages=info%5B0%5D%3DWe%2520are%2520no%2520longer%2520able%2520to%2520process%2520this%2520unsubscription%2520request.%2520Please%2520go%2520to%2520your%2520settings%2520to%2520update%2520your%2520email%2520preferences';

describe('Deprecated unsubscribeEndpoints', () => {
  setupServer();

  unsubscribeEndpoints.forEach(([endpoint, method]) => {
    test(`${method} ${endpoint} redirects to origin with "info" message`, async () => {
      const response = await superRequest(endpoint, { method }).set(
        'Referer',
        'https://www.freecodecamp.org/settings'
      );

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(response.headers.location).toStrictEqual(
        'https://www.freecodecamp.org' + urlEncodedMessage
      );
      expect(response.status).toBe(302);
    });
  });
});
