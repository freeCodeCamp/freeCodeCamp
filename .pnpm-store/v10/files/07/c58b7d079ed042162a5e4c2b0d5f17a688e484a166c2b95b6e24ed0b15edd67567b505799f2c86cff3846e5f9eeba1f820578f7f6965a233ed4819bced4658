import type { InternalHandlerBuilder } from './types'

export const buildDevCheckHandler: InternalHandlerBuilder = ({
  api,
  context: { apiUid },
  reducerPath,
}) => {
  return (action, mwApi) => {
    if (api.util.resetApiState.match(action)) {
      // dispatch after api reset
      mwApi.dispatch(api.internalActions.middlewareRegistered(apiUid))
    }

    if (
      typeof process !== 'undefined' &&
      process.env.NODE_ENV === 'development'
    ) {
      if (
        api.internalActions.middlewareRegistered.match(action) &&
        action.payload === apiUid &&
        mwApi.getState()[reducerPath]?.config?.middlewareRegistered ===
          'conflict'
      ) {
        console.warn(`There is a mismatch between slice and middleware for the reducerPath "${reducerPath}".
You can only have one api per reducer path, this will lead to crashes in various situations!${
          reducerPath === 'api'
            ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!`
            : ''
        }`)
      }
    }
  }
}
