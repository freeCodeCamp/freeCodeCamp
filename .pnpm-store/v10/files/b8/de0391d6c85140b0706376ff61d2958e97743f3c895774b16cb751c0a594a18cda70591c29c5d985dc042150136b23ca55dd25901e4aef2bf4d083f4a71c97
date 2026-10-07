import 'vitest'
import {type TestingLibraryMatchers} from './matchers'

declare module 'vitest' {
  interface Assertion<T = any>
    extends TestingLibraryMatchers<
      any,
      T
    > {}
  interface AsymmetricMatchersContaining
    extends TestingLibraryMatchers<
      any,
      any
    > {}
}
