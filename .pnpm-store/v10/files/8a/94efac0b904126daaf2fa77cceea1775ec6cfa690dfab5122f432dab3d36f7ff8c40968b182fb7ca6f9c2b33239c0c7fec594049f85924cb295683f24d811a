import { invariant } from 'outvariant'
import { devUtils } from './devUtils'

export function checkGlobals() {
  /**
   * MSW expects the "URL" constructor to be defined.
   * It's not present in React Native so suggest a polyfill
   * instead of failing silently.
   * @see https://github.com/mswjs/msw/issues/1408
   */
  invariant(
    typeof URL !== 'undefined',
    devUtils.formatMessage(
      `Global "URL" class is not defined. This likely means that you're running MSW in an environment that doesn't support all Node.js standard API (e.g. React Native). If that's the case, please use an appropriate polyfill for the "URL" class, like "react-native-url-polyfill".`,
    ),
  )
}
