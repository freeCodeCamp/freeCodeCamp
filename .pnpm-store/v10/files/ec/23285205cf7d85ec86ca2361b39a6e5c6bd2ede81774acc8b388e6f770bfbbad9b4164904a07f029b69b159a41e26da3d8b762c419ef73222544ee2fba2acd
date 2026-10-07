Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const worldwide = require('./worldwide.js');

function makeWeakRef(value) {
  try {
    const WeakRefImpl = worldwide.GLOBAL_OBJ.WeakRef;
    if (typeof WeakRefImpl === "function") {
      return new WeakRefImpl(value);
    }
  } catch {
  }
  return value;
}
function derefWeakRef(ref) {
  if (!ref) {
    return void 0;
  }
  if (typeof ref === "object" && "deref" in ref && typeof ref.deref === "function") {
    try {
      return ref.deref();
    } catch {
      return void 0;
    }
  }
  return ref;
}

exports.derefWeakRef = derefWeakRef;
exports.makeWeakRef = makeWeakRef;
//# sourceMappingURL=weakRef.js.map
