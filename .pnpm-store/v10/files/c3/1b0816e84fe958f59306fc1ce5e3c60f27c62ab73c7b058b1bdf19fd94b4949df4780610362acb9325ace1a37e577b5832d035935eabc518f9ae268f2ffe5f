// @flow strict-local
import type {Diagnostic} from '@parcel/diagnostic';
import type {PluginOptions} from '@parcel/types';

import formatCodeFrame from '@parcel/codeframe';
import mdAnsi from '@parcel/markdown-ansi';
import chalk from 'chalk';
import path from 'path';
// $FlowFixMe
import terminalLink from 'terminal-link';

export type FormattedCodeFrame = {|
  location: string,
  code: string,
|};

export type AnsiDiagnosticResult = {|
  message: string,
  stack: string,
  /** A formatted string containing all code frames, including their file locations. */
  codeframe: string,
  /** A list of code frames with highlighted code and file locations separately. */
  frames: Array<FormattedCodeFrame>,
  hints: Array<string>,
  documentation: string,
|};

export default async function prettyDiagnostic(
  diagnostic: Diagnostic,
  options?: PluginOptions,
  terminalWidth?: number,
): Promise<AnsiDiagnosticResult> {
  let {
    origin,
    message,
    stack,
    codeFrames,
    hints,
    skipFormatting,
    documentationURL,
  } = diagnostic;

  let result = {
    message:
      mdAnsi(`**${origin ?? 'unknown'}**: `) +
      (skipFormatting ? message : mdAnsi(message)),
    stack: '',
    codeframe: '',
    frames: [],
    hints: [],
    documentation: '',
  };

  if (codeFrames != null) {
    for (let codeFrame of codeFrames) {
      let filePath = codeFrame.filePath;
      if (filePath != null && options && !path.isAbsolute(filePath)) {
        filePath = path.join(options.projectRoot, filePath);
      }

      let highlights = codeFrame.codeHighlights;
      let code = codeFrame.code;
      if (code == null && options && filePath != null) {
        code = await options.inputFS.readFile(filePath, 'utf8');
      }

      let formattedCodeFrame = '';
      if (code != null) {
        formattedCodeFrame = formatCodeFrame(code, highlights, {
          useColor: true,
          syntaxHighlighting: true,
          language:
            // $FlowFixMe sketchy null checks do not matter here...
            codeFrame.language ||
            (filePath != null ? path.extname(filePath).substr(1) : undefined),
          terminalWidth,
        });
      }

      let location =
        typeof filePath !== 'string'
          ? ''
          : `${filePath}:${highlights[0].start.line}:${highlights[0].start.column}`;
      result.codeframe += location ? chalk.gray.underline(location) + '\n' : '';
      result.codeframe += formattedCodeFrame;
      if (codeFrame !== codeFrames[codeFrames.length - 1]) {
        result.codeframe += '\n\n';
      }

      result.frames.push({
        location,
        code: formattedCodeFrame,
      });
    }
  }

  if (stack != null) {
    result.stack = stack;
  }

  if (Array.isArray(hints) && hints.length) {
    result.hints = hints.map(h => {
      return mdAnsi(h);
    });
  }

  if (documentationURL != null) {
    result.documentation = terminalLink('Learn more', documentationURL, {
      fallback: (text, url) => `${text}: ${url}`,
    });
  }

  return result;
}
