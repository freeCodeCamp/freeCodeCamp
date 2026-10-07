Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const bufferTextMapGetter = {
  get(carrier, key) {
    if (!carrier) {
      return void 0;
    }
    const keys = Object.keys(carrier);
    for (const carrierKey of keys) {
      if (carrierKey === key || carrierKey.toLowerCase() === key) {
        return carrier[carrierKey]?.toString();
      }
    }
    return void 0;
  },
  keys(carrier) {
    return carrier ? Object.keys(carrier) : [];
  }
};

exports.bufferTextMapGetter = bufferTextMapGetter;
//# sourceMappingURL=propagator.js.map
