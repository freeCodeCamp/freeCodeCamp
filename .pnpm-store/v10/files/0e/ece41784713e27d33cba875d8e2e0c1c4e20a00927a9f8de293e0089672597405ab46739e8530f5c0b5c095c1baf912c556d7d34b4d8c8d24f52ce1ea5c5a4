// @flow strict-local

import type {
  IDisposable,
  LogEvent,
  PluginLogger as IPluginLogger,
} from '@parcel/types';
import type {
  Diagnostic,
  Diagnostifiable,
  DiagnosticWithoutOrigin,
} from '@parcel/diagnostic';

import {ValueEmitter} from '@parcel/events';
import {inspect} from 'util';
import {errorToDiagnostic, anyToDiagnostic} from '@parcel/diagnostic';

class Logger {
  #logEmitter /*: ValueEmitter<LogEvent> */ = new ValueEmitter();

  onLog(cb: (event: LogEvent) => mixed): IDisposable {
    return this.#logEmitter.addListener(cb);
  }

  verbose(diagnostic: Diagnostic | Array<Diagnostic>): void {
    this.#logEmitter.emit({
      type: 'log',
      level: 'verbose',
      diagnostics: Array.isArray(diagnostic) ? diagnostic : [diagnostic],
    });
  }

  info(diagnostic: Diagnostic | Array<Diagnostic>): void {
    this.log(diagnostic);
  }

  log(diagnostic: Diagnostic | Array<Diagnostic>): void {
    this.#logEmitter.emit({
      type: 'log',
      level: 'info',
      diagnostics: Array.isArray(diagnostic) ? diagnostic : [diagnostic],
    });
  }

  warn(diagnostic: Diagnostic | Array<Diagnostic>): void {
    this.#logEmitter.emit({
      type: 'log',
      level: 'warn',
      diagnostics: Array.isArray(diagnostic) ? diagnostic : [diagnostic],
    });
  }

  error(input: Diagnostifiable, realOrigin?: string): void {
    let diagnostic = anyToDiagnostic(input);
    if (typeof realOrigin === 'string') {
      diagnostic = Array.isArray(diagnostic)
        ? diagnostic.map(d => {
            return {...d, origin: realOrigin};
          })
        : {
            ...diagnostic,
            origin: realOrigin,
          };
    }

    this.#logEmitter.emit({
      type: 'log',
      level: 'error',
      diagnostics: Array.isArray(diagnostic) ? diagnostic : [diagnostic],
    });
  }

  progress(message: string): void {
    this.#logEmitter.emit({
      type: 'log',
      level: 'progress',
      message,
    });
  }
}

const logger: Logger = new Logger();
export default logger;

/** @private */
export type PluginLoggerOpts = {|
  origin: string,
|};

export class PluginLogger implements IPluginLogger {
  /** @private */
  origin: string;

  /** @private */
  constructor(opts: PluginLoggerOpts) {
    this.origin = opts.origin;
  }

  /** @private */
  updateOrigin(
    diagnostic: DiagnosticWithoutOrigin | Array<DiagnosticWithoutOrigin>,
  ): Diagnostic | Array<Diagnostic> {
    return Array.isArray(diagnostic)
      ? diagnostic.map(d => {
          return {...d, origin: this.origin};
        })
      : {...diagnostic, origin: this.origin};
  }

  verbose(
    diagnostic: DiagnosticWithoutOrigin | Array<DiagnosticWithoutOrigin>,
  ): void {
    logger.verbose(this.updateOrigin(diagnostic));
  }

  info(
    diagnostic: DiagnosticWithoutOrigin | Array<DiagnosticWithoutOrigin>,
  ): void {
    logger.info(this.updateOrigin(diagnostic));
  }

  log(
    diagnostic: DiagnosticWithoutOrigin | Array<DiagnosticWithoutOrigin>,
  ): void {
    logger.log(this.updateOrigin(diagnostic));
  }

  warn(
    diagnostic: DiagnosticWithoutOrigin | Array<DiagnosticWithoutOrigin>,
  ): void {
    logger.warn(this.updateOrigin(diagnostic));
  }

  error(
    input:
      | Diagnostifiable
      | DiagnosticWithoutOrigin
      | Array<DiagnosticWithoutOrigin>,
  ): void {
    logger.error(input, this.origin);
  }

  /** @private */
  progress(message: string): void {
    logger.progress(message);
  }
}

/** @private */
export const INTERNAL_ORIGINAL_CONSOLE = {...console};
let consolePatched = false;

/**
 * Patch `console` APIs within workers to forward their messages to the Logger
 * at the appropriate levels.
 * @private
 */
export function patchConsole() {
  // Skip if console is already patched...
  if (consolePatched) return;

  /* eslint-disable no-console */
  // $FlowFixMe
  console.log = console.info = (...messages: Array<mixed>) => {
    logger.info(messagesToDiagnostic(messages));
  };

  // $FlowFixMe
  console.debug = (...messages: Array<mixed>) => {
    // TODO: dedicated debug level?
    logger.verbose(messagesToDiagnostic(messages));
  };

  // $FlowFixMe
  console.warn = (...messages: Array<mixed>) => {
    logger.warn(messagesToDiagnostic(messages));
  };

  // $FlowFixMe
  console.error = (...messages: Array<mixed>) => {
    logger.error(messagesToDiagnostic(messages));
  };

  /* eslint-enable no-console */
  consolePatched = true;
}

/** @private */
export function unpatchConsole() {
  // Skip if console isn't patched...
  if (!consolePatched) return;

  /* eslint-disable no-console */
  // $FlowFixMe
  console.log = INTERNAL_ORIGINAL_CONSOLE.log;

  // $FlowFixMe
  console.info = INTERNAL_ORIGINAL_CONSOLE.info;

  // $FlowFixMe
  console.debug = INTERNAL_ORIGINAL_CONSOLE.debug;

  // $FlowFixMe
  console.warn = INTERNAL_ORIGINAL_CONSOLE.warn;

  // $FlowFixMe
  console.error = INTERNAL_ORIGINAL_CONSOLE.error;

  /* eslint-enable no-console */
  consolePatched = false;
}

function messagesToDiagnostic(
  messages: Array<mixed>,
): Diagnostic | Array<Diagnostic> {
  if (messages.length === 1 && messages[0] instanceof Error) {
    let error: Error = messages[0];
    let diagnostic = errorToDiagnostic(error);

    if (Array.isArray(diagnostic)) {
      return diagnostic.map(d => {
        return {
          ...d,
          skipFormatting: true,
        };
      });
    } else {
      return {
        ...diagnostic,
        skipFormatting: true,
      };
    }
  } else {
    return {
      message: joinLogMessages(messages),
      origin: 'console',
      skipFormatting: true,
    };
  }
}

function joinLogMessages(messages: Array<mixed>): string {
  return messages.map(m => (typeof m === 'string' ? m : inspect(m))).join(' ');
}
