import * as React from 'react';

type PossibleRef<T> = React.Ref<T> | undefined;
/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */
declare function composeRefs<T>(...refs: PossibleRef<T>[]): React.RefCallback<T>;
/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */
declare function useComposedRefs<T>(...refs: PossibleRef<T>[]): React.RefCallback<T>;

export { composeRefs, useComposedRefs };
