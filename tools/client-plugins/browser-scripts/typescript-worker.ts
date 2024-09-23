import { type VirtualTypeScriptEnvironment } from '@typescript/vfs';
import type { CompilerOptions, CompilerHost } from 'typescript';

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

let tsEnv: VirtualTypeScriptEnvironment | null = null;
let compilerHost: CompilerHost | null = null;

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

interface InitRequestEvent extends MessageEvent {
  data: {
    type: 'init';
  };
}

interface CancelEvent extends MessageEvent {
  data: {
    type: 'cancel';
    value: number;
  };
}

let cachedVersion: string | null = null;

async function setupTypeScript(version: string) {
  // TODO: make sure no racing happens if multiple inits arrive at once.
  if (cachedVersion == version) return tsEnv;

  importScripts('https://unpkg.com/typescript@' + version);
  importScripts('https://unpkg.com/@typescript/vfs@1.6.0/dist/vfs.globals.js');

  const compilerOptions: CompilerOptions = {
    target: ts.ScriptTarget.ES2015,
    skipLibCheck: true // TODO: look into why this is needed. Are we doing something wrong? Could it be that it's not "synced"  with this TS version?
    // from the docs: "Note: it's possible for this list to get out of
    // sync with TypeScript over time. It was last synced with TypeScript
    // 3.8.0-rc."
  };
  const fsMap = await createDefaultMapFromCDN(
    compilerOptions,
    ts.version,
    false, // TODO: cache this. It needs a store that's available to workers and implements https://github.com/microsoft/TypeScript-Website/blob/ac68b8b8e4a621113c4ee45c4051002fd55ede24/packages/typescript-vfs/src/index.ts#L11
    ts
  );

  const system = tsvfs.createSystem(fsMap);
  // TODO: if passed an invalid compiler options object (e.g. { module:
  // ts.ModuleKind.CommonJS, moduleResolution: ts.ModuleResolutionKind.NodeNext
  // }), this will throw. When we allow users to set compiler options, we should
  // show them the diagnostics from this function.
  const env = tsvfs.createVirtualTypeScriptEnvironment(
    system,
    [],
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

  cachedVersion = version;
  return env;
}

// TODO: figure out how to start setting up TS in the background, but allow the
// client to wait for it to be ready. Currently the waiting works, but the setup
// is done on demand.
// void setupTypeScript('5');

ctx.onmessage = (e: TSCompileEvent | InitRequestEvent | CancelEvent) => {
  const { data, ports } = e;
  if (data.type === 'init') {
    void handleInitRequest(ports[0]);
  } else if (data.type === 'cancel') {
    handleCancelRequest(data);
  } else {
    handleCompileRequest(data, ports[0]);
  }
};

// This lets the client know that there is nothing to cancel.
function handleCancelRequest({ value }: { value: number }) {
  postMessage({ type: 'is-alive', text: value });
}

async function handleInitRequest(port: MessagePort) {
  await setupTypeScript('5');
  port.postMessage({ type: 'ready' });
}

function handleCompileRequest(data: TSCompileEvent['data'], port: MessagePort) {
  // If we try to update or create an empty file, the environment will become
  // permanently unable to interact with that file. The workaround is to create
  // a file with a single newline character.
  const code = (data.code || '').slice() || '\n';

  // TODO: If creating the file fresh each time is too slow, we can try checking
  // if the file exists and updating it if it does.
  tsEnv?.createFile('index.ts', code);

  const program = tsEnv!.languageService.getProgram()!;

  const emitOutput = tsEnv!.languageService.getEmitOutput('index.ts');
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
