Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const requestLayerStore = /* @__PURE__ */ new WeakMap();
const storeLayer = (req, layer) => {
  const store = requestLayerStore.get(req);
  if (!store) {
    requestLayerStore.set(req, [layer]);
  } else {
    store.push(layer);
  }
};
const getStoredLayers = (req) => {
  let store = requestLayerStore.get(req);
  if (!store) {
    store = [];
    requestLayerStore.set(req, store);
  }
  return store;
};

exports.getStoredLayers = getStoredLayers;
exports.storeLayer = storeLayer;
//# sourceMappingURL=request-layer-store.js.map
