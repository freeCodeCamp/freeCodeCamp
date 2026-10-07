/**
 * Copyright (c) 2019 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { Disposable } from 'vs/base/common/lifecycle';
import { ILogService, IOptionsService, LogLevelEnum } from 'common/services/Services';

type LogType = (message?: any, ...optionalParams: any[]) => void;

interface IConsole {
  log: LogType;
  error: LogType;
  info: LogType;
  trace: LogType;
  warn: LogType;
}

// console is available on both node.js and browser contexts but the common
// module doesn't depend on them so we need to explicitly declare it.
declare const console: IConsole;

const optionsKeyToLogLevel: { [key: string]: LogLevelEnum } = {
  trace: LogLevelEnum.TRACE,
  debug: LogLevelEnum.DEBUG,
  info: LogLevelEnum.INFO,
  warn: LogLevelEnum.WARN,
  error: LogLevelEnum.ERROR,
  off: LogLevelEnum.OFF
};

const LOG_PREFIX = 'xterm.js: ';

export class LogService extends Disposable implements ILogService {
  public serviceBrand: any;

  private _logLevel: LogLevelEnum = LogLevelEnum.OFF;
  public get logLevel(): LogLevelEnum { return this._logLevel; }

  constructor(
    @IOptionsService private readonly _optionsService: IOptionsService
  ) {
    super();
    this._updateLogLevel();
    this._register(this._optionsService.onSpecificOptionChange('logLevel', () => this._updateLogLevel()));

    // For trace logging, assume the latest created log service is valid
    traceLogger = this;
  }

  private _updateLogLevel(): void {
    this._logLevel = optionsKeyToLogLevel[this._optionsService.rawOptions.logLevel];
  }

  private _evalLazyOptionalParams(optionalParams: any[]): void {
    for (let i = 0; i < optionalParams.length; i++) {
      if (typeof optionalParams[i] === 'function') {
        optionalParams[i] = optionalParams[i]();
      }
    }
  }

  private _log(type: LogType, message: string, optionalParams: any[]): void {
    this._evalLazyOptionalParams(optionalParams);
    type.call(console, (this._optionsService.options.logger ? '' : LOG_PREFIX) + message, ...optionalParams);
  }

  public trace(message: string, ...optionalParams: any[]): void {
    if (this._logLevel <= LogLevelEnum.TRACE) {
      this._log(this._optionsService.options.logger?.trace.bind(this._optionsService.options.logger) ?? console.log, message, optionalParams);
    }
  }

  public debug(message: string, ...optionalParams: any[]): void {
    if (this._logLevel <= LogLevelEnum.DEBUG) {
      this._log(this._optionsService.options.logger?.debug.bind(this._optionsService.options.logger) ?? console.log, message, optionalParams);
    }
  }

  public info(message: string, ...optionalParams: any[]): void {
    if (this._logLevel <= LogLevelEnum.INFO) {
      this._log(this._optionsService.options.logger?.info.bind(this._optionsService.options.logger) ?? console.info, message, optionalParams);
    }
  }

  public warn(message: string, ...optionalParams: any[]): void {
    if (this._logLevel <= LogLevelEnum.WARN) {
      this._log(this._optionsService.options.logger?.warn.bind(this._optionsService.options.logger) ?? console.warn, message, optionalParams);
    }
  }

  public error(message: string, ...optionalParams: any[]): void {
    if (this._logLevel <= LogLevelEnum.ERROR) {
      this._log(this._optionsService.options.logger?.error.bind(this._optionsService.options.logger) ?? console.error, message, optionalParams);
    }
  }
}

let traceLogger: ILogService;
export function setTraceLogger(logger: ILogService): void {
  traceLogger = logger;
}

/**
 * A decorator that can be used to automatically log trace calls to the decorated function.
 */
export function traceCall(_target: any, key: string, descriptor: any): any {
  if (typeof descriptor.value !== 'function') {
    throw new Error('not supported');
  }
  const fnKey = 'value';
  const fn = descriptor.value;
  descriptor[fnKey] = function (...args: any[]) {
    // Early exit
    if (traceLogger.logLevel !== LogLevelEnum.TRACE) {
      return fn.apply(this, args);
    }

    traceLogger.trace(`GlyphRenderer#${fn.name}(${args.map(e => JSON.stringify(e)).join(', ')})`);
    const result = fn.apply(this, args);
    traceLogger.trace(`GlyphRenderer#${fn.name} return`, result);
    return result;
  };
}
