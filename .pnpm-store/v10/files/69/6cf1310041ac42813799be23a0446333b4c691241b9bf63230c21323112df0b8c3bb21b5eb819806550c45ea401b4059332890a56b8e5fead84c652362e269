// The "alternate renderers" entry point is primarily here to fall back on a no-op
// version of `unstable_batchedUpdates`, for use with renderers other than ReactDOM/RN.
// Examples include React-Three-Fiber, Ink, etc.
// Because of that, we'll also assume the useSyncExternalStore compat shim is needed.
import { useSyncExternalStore } from 'use-sync-external-store/shim';
import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/shim/with-selector';
import { initializeUseSelector } from './hooks/useSelector';
import { initializeConnect } from './components/connect';
initializeUseSelector(useSyncExternalStoreWithSelector);
initializeConnect(useSyncExternalStore);
import { getBatch } from './utils/batch'; // For other renderers besides ReactDOM and React Native,
// use the default noop batch function

const batch = getBatch();
export { batch };
export * from './exports';