import test from 'tape';

import flashToToast from './flash-to-toast';

test('client/utils/flash-to-toast.js', t => {
  t.test('should return an array', t => {
    t.plan(2);
    const toasts = flashToToast({});
    t.assert(Array.isArray(toasts), 'toasts was not an array');
    t.equal(toasts.length, 0, 'toasts should be empty');
  });
  t.test('should convert keyed messages to typed toasts', t => {
    t.plan(3);
    const expected = [{ message: 'foo', type: 'info' }];
    const actual = flashToToast({
      info: [{ msg: 'foo' }]
    });
    t.equal(
      expected.length,
      actual.length,
      'number of toasts does not match number of messages'
    );
    t.equal(
      expected[0].type,
      actual[0].type
    );
    t.equal(
      expected[0].message,
      actual[0].message
    );
  });
});
