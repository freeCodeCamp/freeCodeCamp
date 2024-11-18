import type { PyodideInterface } from 'pyodide';

export interface FrameDocument extends Document {
  __initTestFrame: (e: InitTestFrameArg) => Promise<void>;
  __runTest: (
    testString: string
  ) => Promise<
    { pass: boolean } | { err: { message: string; stack?: string } }
  >;
}

export interface PythonDocument extends FrameDocument {
  __initPythonFrame: () => Promise<void>;
  __runPython: (code: string) => Promise<PyodideInterface>;
}

export interface InitTestFrameArg {
  code: {
    contents?: string;
    editableContents?: string;
    original?: { [id: string]: string | null };
  };
  getUserInput?: (fileName: string) => string;
  loadEnzyme?: () => void;
}

export type FrameWindow = Window &
  typeof globalThis & {
    $: typeof $;
  };
