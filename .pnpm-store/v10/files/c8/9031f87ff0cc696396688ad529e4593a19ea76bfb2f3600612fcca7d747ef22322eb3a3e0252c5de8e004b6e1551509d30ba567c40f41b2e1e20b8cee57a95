// @flow strict-local

import assert from 'assert';
import sinon from 'sinon';
import Logger from '../src/Logger';

describe('Logger', () => {
  let onLog;
  let logDisposable;
  beforeEach(() => {
    onLog = sinon.spy();
    logDisposable = Logger.onLog(onLog);
  });

  afterEach(() => {
    logDisposable.dispose();
  });

  it('emits log diagnostics with info level', () => {
    let diagnostic = {
      message: 'hello',
      origin: 'logger',
    };

    Logger.log(diagnostic);

    assert(
      onLog.calledWith({
        level: 'info',
        diagnostics: [diagnostic],
        type: 'log',
      }),
    );
  });

  it('emits warn diagnostic with warn level', () => {
    let diagnostic = {
      message: 'zomg',
      origin: 'logger',
    };

    Logger.warn(diagnostic);

    assert(
      onLog.calledWith({level: 'warn', diagnostics: [diagnostic], type: 'log'}),
    );
  });

  it('emits error messages with error level', () => {
    let diagnostic = {
      message: 'oh noes',
      origin: 'logger',
    };

    Logger.error(diagnostic);

    assert(
      onLog.calledWith({
        level: 'error',
        diagnostics: [diagnostic],
        type: 'log',
      }),
    );
  });

  it('emits progress messages with progress level', () => {
    Logger.progress('update');
    assert(
      onLog.calledWith({level: 'progress', message: 'update', type: 'log'}),
    );
  });
});
