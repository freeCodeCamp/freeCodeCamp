// This file is an augmentation to the built-in ImportMeta interface
// Thus cannot contain any top-level imports
// <https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation>

// This is tested in `packages/vite/src/node/__tests_dts__/typeOptions.ts`
// eslint-disable-next-line @typescript-eslint/no-empty-object-type -- to allow extending by users
interface ViteTypeOptions {
  // strictImportMetaEnv: unknown
}

type ImportMetaEnvFallbackKey =
  'strictImportMetaEnv' extends keyof ViteTypeOptions ? never : string

interface ImportMetaEnv extends Record<ImportMetaEnvFallbackKey, any> {
  BASE_URL: string
  MODE: string
  DEV: boolean
  PROD: boolean
  SSR: boolean
}

interface ImportMeta {
  url: string

  readonly hot?: import('./hot').ViteHotContext

  readonly env: ImportMetaEnv

  glob: import('./importGlob').ImportGlobFunction
}
