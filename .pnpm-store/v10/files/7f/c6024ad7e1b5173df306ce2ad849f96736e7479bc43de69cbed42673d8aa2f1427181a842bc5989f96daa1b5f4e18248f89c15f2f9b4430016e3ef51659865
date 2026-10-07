import _typeof from "./typeof.js";
function setFunctionName(e, t, n) {
  "symbol" == _typeof(t) && (t = (t = t.description) ? "[" + t + "]" : "");
  try {
    Object.defineProperty(e, "name", {
      configurable: !0,
      value: n ? n + " " + t : t
    });
  } catch (e) {}
  return e;
}
export { setFunctionName as default };