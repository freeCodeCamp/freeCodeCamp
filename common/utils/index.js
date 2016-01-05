export function nameSpacedTransformer(ns, transformer) {
  if (!transformer) {
    return nameSpacedTransformer.bind(null, ns);
  }
  return (state) => {
    const newState = transformer(state[ns]);

    // nothing has changed
    // noop
    if (!newState || newState === state[ns]) {
      return null;
    }

    return { ...state, [ns]: newState };
  };
}
