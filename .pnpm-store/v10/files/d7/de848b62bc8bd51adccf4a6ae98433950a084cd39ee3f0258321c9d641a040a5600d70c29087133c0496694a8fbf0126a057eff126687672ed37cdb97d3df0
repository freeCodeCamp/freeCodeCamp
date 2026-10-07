// src/use-effect-event.tsx
import { useLayoutEffect } from "@radix-ui/react-use-layout-effect";
import * as React from "react";
var useReactEffectEvent = React[" useEffectEvent ".trim().toString()];
var useReactInsertionEffect = React[" useInsertionEffect ".trim().toString()];
function useEffectEvent(callback) {
  if (typeof useReactEffectEvent === "function") {
    return useReactEffectEvent(callback);
  }
  const ref = React.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  if (typeof useReactInsertionEffect === "function") {
    useReactInsertionEffect(() => {
      ref.current = callback;
    });
  } else {
    useLayoutEffect(() => {
      ref.current = callback;
    });
  }
  return React.useMemo(() => (...args) => ref.current?.(...args), []);
}
export {
  useEffectEvent
};
//# sourceMappingURL=index.mjs.map
