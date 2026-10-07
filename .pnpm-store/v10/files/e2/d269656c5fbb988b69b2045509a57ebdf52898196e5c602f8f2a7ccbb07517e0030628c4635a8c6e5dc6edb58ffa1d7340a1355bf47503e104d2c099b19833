function toPublicUrl(url) {
  const urlInstance = url instanceof URL ? url : new URL(url);
  if (typeof location !== "undefined" && urlInstance.origin === location.origin) {
    return urlInstance.pathname;
  }
  return urlInstance.origin + urlInstance.pathname;
}
export {
  toPublicUrl
};
//# sourceMappingURL=toPublicUrl.mjs.map