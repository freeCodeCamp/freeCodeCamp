type SafeRegex2 = (re: string | RegExp, opts?: { limit?: number }) => boolean

declare namespace safeRegex {
  export const safeRegex: SafeRegex2
  export { safeRegex as default }
}

declare function safeRegex (...params: Parameters<SafeRegex2>): ReturnType<SafeRegex2>
export = safeRegex
