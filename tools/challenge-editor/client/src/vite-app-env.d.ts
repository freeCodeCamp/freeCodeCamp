/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly CHALLENGE_EDITOR_LEARN_CLIENT_LOCATION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
