// @flow strict-local

import assert from 'assert';
import sinon from 'sinon';
import throttle from '../src/throttle';

describe('throttle', () => {
  it("doesn't invoke a function more than once in a given interval", () => {
    let spy = sinon.spy();
    let throttled = throttle(spy, 100);

    throttled(1);
    throttled(2);
    throttled(3);

    assert(spy.calledOnceWithExactly(1));
  });

  it('calls the underlying function again once the interval has passed', () => {
    let time = sinon.useFakeTimers();
    let spy = sinon.spy();
    let throttled = throttle(spy, 100);

    throttled(1);
    throttled(2);
    throttled(3);

    time.tick(100);
    throttled(4);
    assert.deepEqual(spy.args, [[1], [4]]);

    time.restore();
  });

  it('preserves the `this` when throttled functions are invoked', () => {
    let result;
    let throttled = throttle(function () {
      result = this.bar;
    }, 100);

    throttled.call({bar: 'baz'});
    assert(result === 'baz');
  });
});
