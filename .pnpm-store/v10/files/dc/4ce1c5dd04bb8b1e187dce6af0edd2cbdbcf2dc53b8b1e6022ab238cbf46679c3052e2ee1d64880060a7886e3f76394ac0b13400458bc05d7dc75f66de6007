'use strict';

const assert = require('assert');
const normalize = require('normalize-path');
const mock = require('..');

describe('Mock Require', () => {
  afterEach(() => {
    mock.stopAll();
  });

  it('should mock a required function', () => {
    mock('./exported-fn', () => {
      return 'mocked fn';
    });

    assert.equal(require('./exported-fn')(), 'mocked fn');
  });

  it('should mock a required object', () => {
    mock('./exported-obj', {
      mocked: true,
      fn: function() {
        return 'mocked obj';
      }
    });

    let obj = require('./exported-obj');
    assert.equal(obj.fn(), 'mocked obj');
    assert.equal(obj.mocked, true);

    mock.stop('./exported-obj');

    obj = require('./exported-obj');
    assert.equal(obj.fn(), 'exported object');
    assert.equal(obj.mocked, false);
  });

  it('should unmock', () => {
    mock('./exported-fn', () => {
      return 'mocked fn';
    });

    mock.stop('./exported-fn');

    const fn = require('./exported-fn');
    assert.equal(fn(), 'exported function');
  });

  it('should mock a root file', () => {
    mock('.', { mocked: true });
    assert.equal(require('.').mocked, true);
  });

  it('should mock a standard lib', () => {
    mock('fs', { mocked: true });

    const fs = require('fs');
    assert.equal(fs.mocked, true);
  });

  it('should mock an external lib', () => {
    mock('mocha', { mocked: true });

    const mocha = require('mocha');
    assert.equal(mocha.mocked, true);
  });

  it('should one lib with another', () => {
    mock('fs', 'path');
    assert.equal(require('fs'), require('path'));

    mock('./exported-fn', './exported-obj');
    assert.equal(require('./exported-fn'), require('./exported-obj'));
  });

  it('should support re-requiring', () => {
    assert.equal(mock.reRequire('.'), 'root');
  });

  it('should cascade mocks', () => {
    mock('path', { mocked: true });
    mock('fs', 'path');

    const fs = require('fs');
    assert.equal(fs.mocked, true);
  });

  it('should never require the real lib when mocking it', () => {
    mock('./throw-exception', {});
    require('./throw-exception');
  });

  it('should mock libs required elsewhere', () => {
    mock('./throw-exception', {});
    require('./throw-exception-runner');
  });

  it('should only load the mocked lib when it is required', () => {
    mock('./throw-exception', './throw-exception-when-required');
    try {
      require('./throw-exception-runner');
      throw new Error('this line should never be executed.');
    } catch (error) {
      assert.equal(error.message, 'this should run when required');
    }
  });

  it('should stop all mocks', () => {
    mock('fs', {});
    mock('path', {});
    const fsMock = require('fs');
    const pathMock = require('path');

    mock.stopAll();

    assert.notEqual(require('fs'), fsMock);
    assert.notEqual(require('path'), pathMock);
  });

  it('should mock a module that does not exist', () => {
    mock('a', { id: 'a' });

    assert.equal(require('a').id, 'a');
  });

  it('should mock multiple modules that do not exist', () => {
    mock('a', { id: 'a' });
    mock('b', { id: 'b' });
    mock('c', { id: 'c' });

    assert.equal(require('a').id, 'a');
    assert.equal(require('b').id, 'b');
    assert.equal(require('c').id, 'c');
  });

  it('should mock a local file that does not exist', () => {
    mock('./a', { id: 'a' });
    assert.equal(require('./a').id, 'a');

    mock('../a', { id: 'a' });
    assert.equal(require('../a').id, 'a');
  });

  it('should mock a local file required elsewhere', () => {
    mock('./x', { id: 'x' });
    assert.equal(require('./nested/module-c').dependentOn.id, 'x');
  });

  it('should mock multiple local files that do not exist', () => {
    mock('./a', { id: 'a' });
    mock('./b', { id: 'b' });
    mock('./c', { id: 'c' });

    assert.equal(require('./a').id, 'a');
    assert.equal(require('./b').id, 'b');
    assert.equal(require('./c').id, 'c');
  });

  it('should unmock a module that is not found', () => {
    const moduleName = 'module-that-is-not-installed';

    mock(moduleName, { mocked: true });
    mock.stop(moduleName);

    try {
      require(moduleName);
      throw new Error('this line should never be executed.');
    } catch (e) {
      assert.equal(e.code, 'MODULE_NOT_FOUND');
    }
  });

  it('should differentiate between local files and external modules with the same name', () => {
    mock('module-a', { id: 'external-module-a' });

    const b = require('./module-b');

    assert.equal(b.dependentOn.id, 'local-module-a');
    assert.equal(b.dependentOn.dependentOn.id, 'external-module-a');
  });

  it('should mock files in the node path by the full path', () => {
    assert.equal(normalize(process.env.NODE_PATH), 'test/node-path');

    mock('in-node-path', { id: 'in-node-path' });

    const b = require('in-node-path');
    const c = require('./node-path/in-node-path');

    assert.equal(b.id, 'in-node-path');
    assert.equal(c.id, 'in-node-path');

    assert.equal(b, c);
  });
});
