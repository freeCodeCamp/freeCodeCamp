declare global {
  interface SymbolConstructor {
    readonly observable: symbol
  }
}

const $$observable = /* #__PURE__ */ (() =>
  (typeof Symbol === 'function' && Symbol.observable) || '@@observable')()

export default $$observable
