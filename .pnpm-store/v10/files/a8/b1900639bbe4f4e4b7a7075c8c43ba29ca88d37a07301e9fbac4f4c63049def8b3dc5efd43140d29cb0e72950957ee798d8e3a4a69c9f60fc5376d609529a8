/// <reference path="./types/importMeta.d.ts" />

// CSS modules
type CSSModuleClasses = { readonly [key: string]: string }

declare module '*.module.css' {
  const classes: CSSModuleClasses
  export default classes
}
declare module '*.module.scss' {
  const classes: CSSModuleClasses
  export default classes
}
declare module '*.module.sass' {
  const classes: CSSModuleClasses
  export default classes
}
declare module '*.module.less' {
  const classes: CSSModuleClasses
  export default classes
}
declare module '*.module.styl' {
  const classes: CSSModuleClasses
  export default classes
}
declare module '*.module.stylus' {
  const classes: CSSModuleClasses
  export default classes
}
declare module '*.module.pcss' {
  const classes: CSSModuleClasses
  export default classes
}
declare module '*.module.sss' {
  const classes: CSSModuleClasses
  export default classes
}

// CSS
declare module '*.css' {}
declare module '*.scss' {}
declare module '*.sass' {}
declare module '*.less' {}
declare module '*.styl' {}
declare module '*.stylus' {}
declare module '*.pcss' {}
declare module '*.sss' {}

// Built-in asset types
// see `src/node/constants.ts`

// images
declare module '*.apng' {
  const src: string
  export default src
}
declare module '*.bmp' {
  const src: string
  export default src
}
declare module '*.png' {
  const src: string
  export default src
}
declare module '*.jpg' {
  const src: string
  export default src
}
declare module '*.jpeg' {
  const src: string
  export default src
}
declare module '*.jfif' {
  const src: string
  export default src
}
declare module '*.pjpeg' {
  const src: string
  export default src
}
declare module '*.pjp' {
  const src: string
  export default src
}
declare module '*.gif' {
  const src: string
  export default src
}
declare module '*.svg' {
  const src: string
  export default src
}
declare module '*.ico' {
  const src: string
  export default src
}
declare module '*.webp' {
  const src: string
  export default src
}
declare module '*.avif' {
  const src: string
  export default src
}
declare module '*.cur' {
  const src: string
  export default src
}
declare module '*.jxl' {
  const src: string
  export default src
}

// media
declare module '*.mp4' {
  const src: string
  export default src
}
declare module '*.webm' {
  const src: string
  export default src
}
declare module '*.ogg' {
  const src: string
  export default src
}
declare module '*.mp3' {
  const src: string
  export default src
}
declare module '*.wav' {
  const src: string
  export default src
}
declare module '*.flac' {
  const src: string
  export default src
}
declare module '*.aac' {
  const src: string
  export default src
}
declare module '*.opus' {
  const src: string
  export default src
}
declare module '*.mov' {
  const src: string
  export default src
}
declare module '*.m4a' {
  const src: string
  export default src
}
declare module '*.vtt' {
  const src: string
  export default src
}

// fonts
declare module '*.woff' {
  const src: string
  export default src
}
declare module '*.woff2' {
  const src: string
  export default src
}
declare module '*.eot' {
  const src: string
  export default src
}
declare module '*.ttf' {
  const src: string
  export default src
}
declare module '*.otf' {
  const src: string
  export default src
}

// other
declare module '*.webmanifest' {
  const src: string
  export default src
}
declare module '*.pdf' {
  const src: string
  export default src
}
declare module '*.txt' {
  const src: string
  export default src
}

// wasm?init
declare module '*.wasm?init' {
  const initWasm: (
    options?: WebAssembly.Imports,
  ) => Promise<WebAssembly.Instance>
  export default initWasm
}

// web worker
declare module '*?worker' {
  const workerConstructor: {
    new (options?: { name?: string }): Worker
  }
  export default workerConstructor
}

declare module '*?worker&inline' {
  const workerConstructor: {
    new (options?: { name?: string }): Worker
  }
  export default workerConstructor
}

declare module '*?worker&url' {
  const src: string
  export default src
}

declare module '*?sharedworker' {
  const sharedWorkerConstructor: {
    new (options?: { name?: string }): SharedWorker
  }
  export default sharedWorkerConstructor
}

declare module '*?sharedworker&inline' {
  const sharedWorkerConstructor: {
    new (options?: { name?: string }): SharedWorker
  }
  export default sharedWorkerConstructor
}

declare module '*?sharedworker&url' {
  const src: string
  export default src
}

declare module '*?raw' {
  const src: string
  export default src
}

declare module '*?url' {
  const src: string
  export default src
}

declare module '*?inline' {
  const src: string
  export default src
}

declare module '*?no-inline' {
  const src: string
  export default src
}

declare module '*?url&inline' {
  const src: string
  export default src
}

declare module '*?url&no-inline' {
  const src: string
  export default src
}

declare interface VitePreloadErrorEvent extends Event {
  payload: Error
}

declare interface WindowEventMap {
  'vite:preloadError': VitePreloadErrorEvent
}
