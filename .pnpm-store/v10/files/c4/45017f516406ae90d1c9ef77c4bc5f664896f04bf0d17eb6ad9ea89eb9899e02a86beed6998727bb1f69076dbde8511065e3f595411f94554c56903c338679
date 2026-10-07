// @flow strict-local

import assert from 'assert';
import ValueEmitter from '../src/ValueEmitter';
import {AlreadyDisposedError} from '../src/errors';

describe('ValueEmitter', () => {
  let emitter: ValueEmitter<number>;
  let values: Array<number>;

  beforeEach(() => {
    emitter = new ValueEmitter();
    values = [];
  });

  afterEach(() => {
    emitter.dispose();
  });

  function numberListener(x: number): void {
    values.push(x);
  }

  it('registers new listeners and can dispose of them', () => {
    let disposable = emitter.addListener(numberListener);
    assert.deepEqual(emitter._listeners, [numberListener]);

    disposable.dispose();
    assert.deepEqual(emitter._listeners, []);
  });

  it('emits values to registered listeners', () => {
    let disposable = emitter.addListener(numberListener);
    emitter.emit(42);
    assert.deepEqual(values, [42]);

    disposable.dispose();
  });

  it('does not emit to listeners that were just registered', () => {
    let innerDisposable;
    let disposable = emitter.addListener(() => {
      innerDisposable = emitter.addListener(numberListener);
    });

    emitter.emit(42);
    assert.deepEqual(values, []);

    emitter.emit(27);
    assert.deepEqual(values, [27]);

    disposable.dispose();
    innerDisposable && innerDisposable.dispose();
  });

  it('finishes emitting even if a listener disposes of the emitter mid-emit', () => {
    let disposableA = emitter.addListener(() => {
      emitter.dispose();
    });

    let disposableB = emitter.addListener(numberListener);

    emitter.emit(42);
    assert.deepEqual(values, [42]);

    disposableA.dispose();
    disposableB.dispose();
  });

  it('clears listeners when disposed', () => {
    let disposable = emitter.addListener(numberListener);
    assert.deepEqual(emitter._listeners, [numberListener]);

    emitter.dispose();
    assert.deepEqual(emitter._listeners, []);

    disposable.dispose();
  });

  it('throws when adding a listener when already disposed', () => {
    emitter.dispose();
    assert.throws(() => {
      emitter.addListener(numberListener);
    }, AlreadyDisposedError);
  });

  it('throws when emitting when already disposed', () => {
    emitter.dispose();
    assert.throws(() => {
      emitter.emit(42);
    }, AlreadyDisposedError);
  });

  it('can be disposed multiple times', () => {
    emitter.dispose();
    assert.doesNotThrow(() => {
      emitter.dispose();
    });
  });
});
