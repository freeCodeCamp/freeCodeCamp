function getTimestamp(options) {
  const now = /* @__PURE__ */ new Date();
  const timestamp = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
  if (options?.milliseconds) {
    return `${timestamp}.${now.getMilliseconds().toString().padStart(3, "0")}`;
  }
  return timestamp;
}
export {
  getTimestamp
};
//# sourceMappingURL=getTimestamp.mjs.map