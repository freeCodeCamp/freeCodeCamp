import { type VirtualTypeScriptEnvironment } from '@typescript/vfs';
import type { CompilerOptions, CompilerHost } from 'typescript';
import reactTypes from './react-types.json';

// Most of the ts types are only a guideline. This is because we're not bundling
// TS in this worker. The specific TS version is going to be determined by the
// challenge (in general - it will be hardcoded in the MVP). So, the vfs types
// should be correct, but ts may not be.
declare const tsvfs: typeof import('@typescript/vfs');
declare const createDefaultMapFromCDN: typeof import('@typescript/vfs').createDefaultMapFromCDN;
declare const createVirtualCompilerHost: typeof import('@typescript/vfs').createVirtualCompilerHost;
declare const ts: typeof import('typescript');

const ctx: Worker & typeof globalThis = self as unknown as Worker &
  typeof globalThis;

interface TSCompileEvent extends MessageEvent {
  data: {
    type: 'compile';
    code: string;
  };
}

interface TSCompiledMessage {
  type: 'compiled';
  value: string;
  error: string;
}

interface CheckIsReadyRequestEvent extends MessageEvent {
  data: {
    type: 'check-is-ready';
  };
}

interface CancelEvent extends MessageEvent {
  data: {
    type: 'cancel';
    value: number;
  };
}

// Pin at the latest TS version available as cdnjs doesn't support version range.
const TS_VERSION = '5.9.2';

let tsEnv: VirtualTypeScriptEnvironment | null = null;
let compilerHost: CompilerHost | null = null;
let cachedVersion: string | null = null;

// NOTE: vfs.globals must only be imported once, otherwise it will throw.
importScripts(
  'https://cdn.jsdelivr.net/npm/@typescript/vfs@1.6.0/dist/vfs.globals.js'
);

function importTS(version: string) {
  if (cachedVersion == version) return;
  importScripts(
    /*  typescript.min.js fails with

    typescript.min.js:320 Uncaught TypeError: Class constructors cannot be invoked without 'new'

    so we're using the non-minified version for now. */
    `https://cdnjs.cloudflare.com/ajax/libs/typescript/${version}/typescript.js`
  );
  cachedVersion = version;
}

async function setupTypeScript() {
  importTS(TS_VERSION);
  const compilerOptions: CompilerOptions = {
    target: ts.ScriptTarget.ES2015,
    module: ts.ModuleKind.Preserve, // Babel is handling module transformation, so TS should leave them alone.
    skipLibCheck: true, // TODO: look into why this is needed. Are we doing something wrong? Could it be that it's not "synced"  with this TS version?
    // from the docs: "Note: it's possible for this list to get out of
    // sync with TypeScript over time. It was last synced with TypeScript
    // 3.8.0-rc."
    jsx: ts.JsxEmit.Preserve, // Babel will handle JSX,
    allowUmdGlobalAccess: true // Necessary because React is loaded via a UMD script.
  };
  const fsMap = await createDefaultMapFromCDN(
    compilerOptions,
    ts.version,
    false, // TODO: cache this. It needs a store that's available to workers and implements https://github.com/microsoft/TypeScript-Website/blob/ac68b8b8e4a621113c4ee45c4051002fd55ede24/packages/typescript-vfs/src/index.ts#L11
    ts
  );

  // This can be any path, but doing this means import React from 'react' works, if we ever need it.
  const reactTypesPath = `/node_modules/@types/react/index.d.ts`;

  // It may be necessary to get all the types (global.d.ts etc)
  fsMap.set(reactTypesPath, reactTypes['react-18'] || '');

  const system = tsvfs.createSystem(fsMap);
  // TODO: if passed an invalid compiler options object (e.g. { module:
  // ts.ModuleKind.CommonJS, moduleResolution: ts.ModuleResolutionKind.NodeNext
  // }), this will throw. When we allow users to set compiler options, we should
  // show them the diagnostics from this function.
  const env = tsvfs.createVirtualTypeScriptEnvironment(
    system,
    [reactTypesPath],
    ts,
    compilerOptions
  );

  compilerHost = createVirtualCompilerHost(
    system,
    compilerOptions,
    ts
  ).compilerHost;

  tsEnv = env;

  // We freeze this to prevent learners from getting the worker into a
  // weird state.
  Object.freeze(self);
  return env;
}

ctx.onmessage = (
  e: TSCompileEvent | CheckIsReadyRequestEvent | CancelEvent
) => {
  const { data, ports } = e;
  if (data.type === 'check-is-ready') {
    void handleCheckIsReadyRequest(ports[0]);
  } else if (data.type === 'cancel') {
    handleCancelRequest(data);
  } else {
    handleCompileRequest(data, ports[0]);
  }
};

const isTSSetup = setupTypeScript();

// This lets the client know that there is nothing to cancel.
function handleCancelRequest({ value }: { value: number }) {
  postMessage({ type: 'is-alive', text: value });
}

async function handleCheckIsReadyRequest(port: MessagePort) {
  await isTSSetup;
  port.postMessage({ type: 'ready' });
}

function handleCompileRequest(data: TSCompileEvent['data'], port: MessagePort) {
  // If we try to update or create an empty file, the environment will become
  // permanently unable to interact with that file. The workaround is to create
  // a file with a single newline character.
  const code = (data.code || '').slice() || '\n';

  // TODO: If creating the file fresh each time is too slow, we can try checking
  // if the file exists and updating it if it does.
  // TODO: make sure the .tsx extension doesn't cause issues with vanilla TS.
  tsEnv?.createFile('/index.tsx', code);

  const program = tsEnv!.languageService.getProgram()!;

  const emitOutput = tsEnv!.languageService.getEmitOutput('index.tsx');
  const compiled = emitOutput.outputFiles[0].text;

  const message: TSCompiledMessage = {
    type: 'compiled',
    value: compiled,
    // TODO: stop forcing the non-null assertions here.
    error: ts.formatDiagnostics(
      ts.getPreEmitDiagnostics(program),
      compilerHost!
    )
  };

  port.postMessage(message);
}
