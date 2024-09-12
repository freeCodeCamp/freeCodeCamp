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

// We _may_ not run the TS code in the worker, so we probably don't want a Run
// event.

interface TSCompileEvent extends MessageEvent {
  data: {
    type: 'compile';
    code: { contents: string }; // TODO: just a string, rather than an object?
  };
}

interface ListenRequestEvent extends MessageEvent {
  data: {
    type: 'listen';
  };
}

interface CancelEvent extends MessageEvent {
  data: {
    type: 'cancel';
    value: number;
  };
}

// TODO: consider if this is necessary. Can we prevent messages queueing up
// without relying on global state?
//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let ignoreRunMessages = true;
let cachedVersion: string | null = null;

async function setupTypeScript(version: string) {
  if (cachedVersion == version) return tsEnv;
  cachedVersion = version;

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

  console.log('env', env);

  tsEnv = env;

  console.log('tsEnv', tsEnv);

  // We freeze this to prevent learners from getting the worker into a
  // weird state.
  Object.freeze(self);

  // ignoreRunMessages = true;
  postMessage({ type: 'stopped' });
  return env;
}

void setupTypeScript('5');

ctx.onmessage = (e: TSCompileEvent | ListenRequestEvent | CancelEvent) => {
  const { data, ports } = e;
  console.log('data:', data);
  if (data.type === 'listen') {
    handleListenRequest();
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

function handleListenRequest() {
  ignoreRunMessages = false;
}

function handleCompileRequest(data: TSCompileEvent['data'], port: MessagePort) {
  // if (ignoreRunMessages) return;
  // If we try to update or create an empty file, the environment will become
  // permanently unable to interact with that file. The workaround is to create
  // a file with a single newline character.
  const code = (data.code.contents || '').slice() || '\n';
  console.log('code:', code);
  console.log('tsEnv:', tsEnv);
  console.log('tsEnv.languageService:', tsEnv?.languageService);
  // all files
  const allFiles = tsEnv?.languageService.getProgram()?.getSourceFiles();
  console.log('allFiles:', allFiles);

  // TODO: If creating the file fresh each time is too slow, we can try checking
  // if the file exists and updating it if it does.
  tsEnv?.createFile('index.ts', code);
  // TODO: do we need this message at all? It's terminal stuff, right?
  // postMessage({ type: 'reset' });

  const semanticDiagnostics =
    tsEnv?.languageService.getSemanticDiagnostics('index.ts');

  console.log('semanticDiagnostics:');

  // TODO: this formatting is a bit of a chore. Is there a utility function that
  // does this?
  semanticDiagnostics?.forEach(diagnostic => {
    console.log('diagnostic', diagnostic);
    const message = ts.flattenDiagnosticMessageText(
      diagnostic.messageText,
      '\n'
    );
    const start = diagnostic.start;
    if (start === undefined || !diagnostic.file) return;
    const { line, character: startCharacter } =
      diagnostic.file.getLineAndCharacterOfPosition(start);

    const end = startCharacter + (diagnostic.length ?? 0);

    console.log(
      `Semantic error in ${diagnostic.file.fileName} (line ${line + 1}, from ${start + 1} to ${end}): ${message}`
    );
    console.log(
      'ts formatDiagnostic',
      ts.formatDiagnostic(diagnostic, compilerHost!)
    );
  });

  if (!semanticDiagnostics || semanticDiagnostics.length === 0) {
    console.log('No semantic errors!');
  } else {
    // TODO: see if we can make use of this. Probably not. Instead, we can
    // create our own.
    console.log(
      'ts formatDiagnosticsWithColorAndContext',
      ts.formatDiagnosticsWithColorAndContext(
        semanticDiagnostics,
        compilerHost!
      )
    );
  }

  // TODO: Figure out how to actually get diagnostics. This function looks like
  // it should, but if you pass an invalid compiler options object to
  const globalDiagnostics =
    tsEnv?.languageService.getCompilerOptionsDiagnostics();

  console.log('globalDiagnostics:');
  console.log(globalDiagnostics);

  const getSyntacticDiagnostics =
    tsEnv?.languageService.getSyntacticDiagnostics('index.ts');

  console.log('getSyntacticDiagnostics:');
  console.log(getSyntacticDiagnostics);

  const otherDiagnostics =
    tsEnv?.languageService.getSuggestionDiagnostics('index.ts');

  console.log('otherDiagnostics:');
  console.log(otherDiagnostics);

  const emitOutput = tsEnv!.languageService.getEmitOutput('index.ts');
  const compiled = emitOutput.outputFiles[0].text;

  port.postMessage({ type: 'compiled', value: compiled });
}
