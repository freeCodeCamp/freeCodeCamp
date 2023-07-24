/* eslint-disable @typescript-eslint/naming-convention */
// TODO: probably want a 'python' document that extends FrameDocument, since

import { PyodideInterface } from 'pyodide';

// __runPython is only available in the python iframe.
export interface FrameDocument extends Document {
  __initTestFrame: (e: InitTestFrameArg) => Promise<void>;
  __runTest: (
    testString: string
  ) => Promise<
    { pass: boolean } | { err: { message: string; stack?: string } }
  >;
  __initPythonFrame: () => Promise<void>;
  __runPython: (code: string) => Promise<PyodideInterface>;
}

export interface InitTestFrameArg {
  code: {
    contents?: string;
    editableContents?: string;
    original?: { [id: string]: string };
  };
  getUserInput?: (fileName: string) => string;
  loadEnzyme?: () => void;
}

export type FrameWindow = Window &
  typeof globalThis & {
    $: typeof $;
  };
