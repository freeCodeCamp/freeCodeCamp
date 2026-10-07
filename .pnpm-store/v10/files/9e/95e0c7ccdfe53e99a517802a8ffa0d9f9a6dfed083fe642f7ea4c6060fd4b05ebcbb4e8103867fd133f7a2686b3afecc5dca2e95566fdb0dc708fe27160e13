// packages/react/use-callback-ref/src/use-callback-ref.tsx
import * as React from "react";
function useCallbackRef(callback) {
  const callbackRef = React.useRef(callback);
  React.useEffect(() => {
    callbackRef.current = callback;
  });
  return React.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}
export {
  useCallbackRef
};
//# sourceMappingURL=index.mjs.map
