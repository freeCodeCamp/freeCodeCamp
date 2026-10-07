// @flow strict-local

import invariant from 'assert';
import nullthrows from 'nullthrows';
import {parse, type Mapping} from '@mischnic/json-sourcemap';

/** These positions are 1-based (so <code>1</code> is the first line/column) */
export type DiagnosticHighlightLocation = {|
  +line: number,
  +column: number,
|};

export type DiagnosticSeverity = 'error' | 'warn' | 'info';

/**
 * Note: A tab character is always counted as a single character
 * This is to prevent any mismatch of highlighting across machines
 */
export type DiagnosticCodeHighlight = {|
  /** Location of the first character that should get highlighted for this highlight. */
  start: DiagnosticHighlightLocation,
  /** Location of the last character that should get highlighted for this highlight. */
  end: DiagnosticHighlightLocation,
  /** A message that should be displayed at this location in the code (optional). */
  message?: string,
|};

/**
 * Describes how to format a code frame.
 * A code frame is a visualization of a piece of code with a certain amount of
 * code highlights that point to certain chunk(s) inside the code.
 */
export type DiagnosticCodeFrame = {|
  /**
   * The contents of the source file.
   *
   * If no code is passed, it will be read in from filePath, remember that
   * the asset's current code could be different from the input contents.
   *
   */
  code?: string,
  /** Path to the file this code frame is about (optional, absolute or relative to the project root) */
  filePath?: string,
  /** Language of the file this code frame is about (optional) */
  language?: string,
  codeHighlights: Array<DiagnosticCodeHighlight>,
|};

/**
 * A style agnostic way of emitting errors, warnings and info.
 * Reporters are responsible for rendering the message, codeframes, hints, ...
 */
export type Diagnostic = {|
  /** This is the message you want to log. */
  message: string,
  /** Name of plugin or file that threw this error */
  origin?: string,

  /** A stacktrace of the error (optional) */
  stack?: string,
  /** Name of the error (optional) */
  name?: string,

  /** A code frame points to a certain location(s) in the file this diagnostic is linked to (optional) */
  codeFrames?: ?Array<DiagnosticCodeFrame>,

  /** An optional list of strings that suggest ways to resolve this issue */
  hints?: Array<string>,

  /** @private */
  skipFormatting?: boolean,

  /** A URL to documentation to learn more about the diagnostic. */
  documentationURL?: string,
|};

// This type should represent all error formats Parcel can encounter...
export interface PrintableError extends Error {
  fileName?: string;
  filePath?: string;
  codeFrame?: string;
  highlightedCodeFrame?: string;
  loc?: ?{
    column: number,
    line: number,
    ...
  };
  source?: string;
}

export type DiagnosticWithoutOrigin = {|
  ...Diagnostic,
  origin?: string,
|};

/** Something that can be turned into a diagnostic. */
export type Diagnostifiable =
  | Diagnostic
  | Array<Diagnostic>
  | ThrowableDiagnostic
  | PrintableError
  | Error
  | string;

/** Normalize the given value into a diagnostic. */
export function anyToDiagnostic(input: Diagnostifiable): Array<Diagnostic> {
  if (Array.isArray(input)) {
    return input;
  } else if (input instanceof ThrowableDiagnostic) {
    return input.diagnostics;
  } else if (input instanceof Error) {
    return errorToDiagnostic(input);
  } else if (typeof input === 'string') {
    return [{message: input}];
  } else if (typeof input === 'object') {
    return [input];
  } else {
    return errorToDiagnostic(input);
  }
}

/** Normalize the given error into a diagnostic. */
export function errorToDiagnostic(
  error: ThrowableDiagnostic | PrintableError | string,
  defaultValues?: {|
    origin?: ?string,
    filePath?: ?string,
  |},
): Array<Diagnostic> {
  let codeFrames: ?Array<DiagnosticCodeFrame> = undefined;

  if (typeof error === 'string') {
    return [
      {
        origin: defaultValues?.origin ?? 'Error',
        message: escapeMarkdown(error),
      },
    ];
  }

  if (error instanceof ThrowableDiagnostic) {
    return error.diagnostics.map(d => {
      return {
        ...d,
        origin: d.origin ?? defaultValues?.origin ?? 'unknown',
      };
    });
  }

  if (error.loc && error.source != null) {
    codeFrames = [
      {
        filePath:
          error.filePath ??
          error.fileName ??
          defaultValues?.filePath ??
          undefined,
        code: error.source,
        codeHighlights: [
          {
            start: {
              line: error.loc.line,
              column: error.loc.column,
            },
            end: {
              line: error.loc.line,
              column: error.loc.column,
            },
          },
        ],
      },
    ];
  }

  return [
    {
      origin: defaultValues?.origin ?? 'Error',
      message: escapeMarkdown(error.message),
      name: error.name,
      stack:
        codeFrames == null
          ? error.highlightedCodeFrame ?? error.codeFrame ?? error.stack
          : undefined,
      codeFrames,
    },
  ];
}

type ThrowableDiagnosticOpts = {
  diagnostic: Diagnostic | Array<Diagnostic>,
  ...
};

/**
 * An error wrapper around a diagnostic that can be <code>throw</code>n (e.g. to signal a
 * build error).
 */
export default class ThrowableDiagnostic extends Error {
  diagnostics: Array<Diagnostic>;

  constructor(opts: ThrowableDiagnosticOpts) {
    let diagnostics = Array.isArray(opts.diagnostic)
      ? opts.diagnostic
      : [opts.diagnostic];

    // Construct error from diagnostics
    super(diagnostics[0].message);
    // @ts-ignore
    this.stack = diagnostics[0].stack ?? super.stack;
    // @ts-ignore
    this.name = diagnostics[0].name ?? super.name;

    this.diagnostics = diagnostics;
  }
}

/**
 * Turns a list of positions in a JSON5 file with messages into a list of diagnostics.
 * Uses <a href="https://github.com/mischnic/json-sourcemap">@mischnic/json-sourcemap</a>.
 *
 * @param code the JSON code
 * @param ids A list of JSON keypaths (<code>key: "/some/parent/child"</code>) with corresponding messages, \
 * <code>type</code> signifies whether the key of the value in a JSON object should be highlighted.
 */
export function generateJSONCodeHighlights(
  data:
    | string
    | {|
        data: mixed,
        pointers: {|[key: string]: Mapping|},
      |},
  ids: Array<{|key: string, type?: ?'key' | 'value', message?: string|}>,
): Array<DiagnosticCodeHighlight> {
  let map =
    typeof data == 'string'
      ? parse(data, undefined, {dialect: 'JSON5', tabWidth: 1})
      : data;
  return ids.map(({key, type, message}) => {
    let pos = nullthrows(map.pointers[key]);
    return {
      ...getJSONSourceLocation(pos, type),
      message,
    };
  });
}

/**
 * Converts entries in <a href="https://github.com/mischnic/json-sourcemap">@mischnic/json-sourcemap</a>'s
 * <code>result.pointers</code> array.
 */
export function getJSONSourceLocation(
  pos: Mapping,
  type?: ?'key' | 'value',
): {|
  start: DiagnosticHighlightLocation,
  end: DiagnosticHighlightLocation,
|} {
  let key = 'key' in pos ? pos.key : undefined;
  let keyEnd = 'keyEnd' in pos ? pos.keyEnd : undefined;
  if (!type && key && pos.value) {
    // key and value
    return {
      start: {line: key.line + 1, column: key.column + 1},
      end: {line: pos.valueEnd.line + 1, column: pos.valueEnd.column},
    };
  } else if (type == 'key' || !pos.value) {
    invariant(key && keyEnd);
    return {
      start: {line: key.line + 1, column: key.column + 1},
      end: {line: keyEnd.line + 1, column: keyEnd.column},
    };
  } else {
    return {
      start: {line: pos.value.line + 1, column: pos.value.column + 1},
      end: {line: pos.valueEnd.line + 1, column: pos.valueEnd.column},
    };
  }
}

/** Sanitizes object keys before using them as <code>key</code> in generateJSONCodeHighlights */
export function encodeJSONKeyComponent(component: string): string {
  return component.replace(/~/g, '~0').replace(/\//g, '~1');
}

const escapeCharacters = ['\\', '*', '_', '~'];

export function escapeMarkdown(s: string): string {
  let result = s;
  for (const char of escapeCharacters) {
    result = result.replace(new RegExp(`\\${char}`, 'g'), `\\${char}`);
  }

  return result;
}

type TemplateInput = $FlowFixMe;

const mdVerbatim = Symbol();
export function md(
  strings: Array<string>,
  ...params: Array<TemplateInput>
): string {
  let result = [];
  for (let i = 0; i < params.length; i++) {
    result.push(strings[i]);

    let param = params[i];
    if (Array.isArray(param)) {
      for (let j = 0; j < param.length; j++) {
        result.push(param[j]?.[mdVerbatim] ?? escapeMarkdown(`${param[j]}`));
        if (j < param.length - 1) {
          result.push(', ');
        }
      }
    } else {
      result.push(param?.[mdVerbatim] ?? escapeMarkdown(`${param}`));
    }
  }
  return result.join('') + strings[strings.length - 1];
}

md.bold = function (s: TemplateInput): TemplateInput {
  // $FlowFixMe[invalid-computed-prop]
  return {[mdVerbatim]: '**' + escapeMarkdown(`${s}`) + '**'};
};

md.italic = function (s: TemplateInput): TemplateInput {
  // $FlowFixMe[invalid-computed-prop]
  return {[mdVerbatim]: '_' + escapeMarkdown(`${s}`) + '_'};
};

md.underline = function (s: TemplateInput): TemplateInput {
  // $FlowFixMe[invalid-computed-prop]
  return {[mdVerbatim]: '__' + escapeMarkdown(`${s}`) + '__'};
};

md.strikethrough = function (s: TemplateInput): TemplateInput {
  // $FlowFixMe[invalid-computed-prop]
  return {[mdVerbatim]: '~~' + escapeMarkdown(`${s}`) + '~~'};
};
