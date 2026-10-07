// packages/react/direction/src/direction.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var DirectionContext = React.createContext(void 0);
var DirectionProvider = (props) => {
  const { dir, children } = props;
  return /* @__PURE__ */ jsx(DirectionContext.Provider, { value: dir, children });
};
function useDirection(localDir) {
  const globalDir = React.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}
var Provider = DirectionProvider;
export {
  DirectionProvider,
  Provider,
  useDirection
};
//# sourceMappingURL=index.mjs.map
