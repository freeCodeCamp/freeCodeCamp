import { Compiler } from './modules/typescript-compiler';

// Most of the ts types are only a guideline. This is because we're not bundling
// TS in this worker. The specific TS version is going to be determined by the
// challenge (in general - it will be hardcoded in the MVP). So, the vfs types
// should be correct, but ts may not be.
declare const tsvfs: typeof import('@typescript/vfs');
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

let cachedVersion: string | null = null;

// NOTE: vfs.globals must only be imported once, otherwise it will throw.
importScripts(
  'https://cdnjs.cloudflare.com/ajax/libs/typescript-vfs/1.6.1/vfs.globals.js'
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

importTS(TS_VERSION);

const compiler = new Compiler(ts, tsvfs);
const isSetup = compiler.setup();

// This lets the client know that there is nothing to cancel.
function handleCancelRequest({ value }: { value: number }) {
  postMessage({ type: 'is-alive', text: value });
}

async function handleCheckIsReadyRequest(port: MessagePort) {
  await isSetup;
  // We freeze this to prevent learners from getting the worker into a weird
  // state.
  Object.freeze(self);

  port.postMessage({ type: 'ready' });
}

function handleCompileRequest(data: TSCompileEvent['data'], port: MessagePort) {
  const { result, error } = compiler.compile(data.code, 'index.tsx');
  const message: TSCompiledMessage = {
    type: 'compiled',
    value: result,
    error: error
  };

  port.postMessage(message);
}
