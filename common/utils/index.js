export function nameSpacedTransformer(ns, transformer) {
  if (!transformer) {
    return nameSpacedTransformer.bind(null, ns);
  }
  return (state) => {
    const newState = transformer(state[ns]);
    // nothing has changed
    if (newState === state[ns]) {
      return state;
    }
    return { ...state, [ns]: newState };
  };
}
