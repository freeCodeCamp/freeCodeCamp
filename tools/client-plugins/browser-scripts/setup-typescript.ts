import type { CompilerOptions } from 'typescript';
import reactTypes from './react-types.json';

export async function setupTypeScript(
  ts: typeof import('typescript'),
  tsvfs: typeof import('@typescript/vfs')
) {
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

  const fsMap = await tsvfs.createDefaultMapFromCDN(
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
  const tsEnv = tsvfs.createVirtualTypeScriptEnvironment(
    system,
    [reactTypesPath],
    ts,
    compilerOptions
  );
  const compilerHost = tsvfs.createVirtualCompilerHost(
    system,
    compilerOptions,
    ts
  ).compilerHost;

  return { tsEnv, compilerHost };
}
