import type { DevModeChecks } from '../types'

/**
 * Global configuration for development mode checks. This specifies the default
 * frequency at which each development mode check should be performed.
 *
 * @since 5.0.0
 * @internal
 */
export const globalDevModeChecks: DevModeChecks = {
  inputStabilityCheck: 'once',
  identityFunctionCheck: 'once'
}

/**
 * Overrides the development mode checks settings for all selectors.
 *
 * Reselect performs additional checks in development mode to help identify and
 * warn about potential issues in selector behavior. This function allows you to
 * customize the behavior of these checks across all selectors in your application.
 *
 * **Note**: This setting can still be overridden per selector inside `createSelector`'s `options` object.
 * See {@link https://github.com/reduxjs/reselect#2-per-selector-by-passing-an-identityfunctioncheck-option-directly-to-createselector per-selector-configuration}
 * and {@linkcode CreateSelectorOptions.identityFunctionCheck identityFunctionCheck} for more details.
 *
 * _The development mode checks do not run in production builds._
 *
 * @param devModeChecks - An object specifying the desired settings for development mode checks. You can provide partial overrides. Unspecified settings will retain their current values.
 *
 * @example
 * ```ts
 * import { setGlobalDevModeChecks } from 'reselect'
 * import { DevModeChecks } from '../types'
 *
 * // Run only the first time the selector is called. (default)
 * setGlobalDevModeChecks({ inputStabilityCheck: 'once' })
 *
 * // Run every time the selector is called.
 * setGlobalDevModeChecks({ inputStabilityCheck: 'always' })
 *
 * // Never run the input stability check.
 * setGlobalDevModeChecks({ inputStabilityCheck: 'never' })
 *
 * // Run only the first time the selector is called. (default)
 * setGlobalDevModeChecks({ identityFunctionCheck: 'once' })
 *
 * // Run every time the selector is called.
 * setGlobalDevModeChecks({ identityFunctionCheck: 'always' })
 *
 * // Never run the identity function check.
 * setGlobalDevModeChecks({ identityFunctionCheck: 'never' })
 * ```
 * @see {@link https://reselect.js.org/api/development-only-stability-checks Development-Only Stability Checks}
 * @see {@link https://reselect.js.org/api/development-only-stability-checks#1-globally-through-setglobaldevmodechecks global-configuration}
 *
 * @since 5.0.0
 * @public
 */
export const setGlobalDevModeChecks = (
  devModeChecks: Partial<DevModeChecks>
) => {
  Object.assign(globalDevModeChecks, devModeChecks)
}
