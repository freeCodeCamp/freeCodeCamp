// packages/react/id/src/id.tsx
import * as React from "react";
import { useLayoutEffect } from "@radix-ui/react-use-layout-effect";
var useReactId = React[" useId ".trim().toString()] || (() => void 0);
var count = 0;
function useId(deterministicId) {
  const [id, setId] = React.useState(useReactId());
  useLayoutEffect(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}
export {
  useId
};
//# sourceMappingURL=index.mjs.map
