export default function getActionsOfType(actions, ...types) {
  const length = types.length;
  return actions
    .filter(({ type }) => {
      if (length === 1) {
        return type === types[0];
      }
      return types.some(_type => _type === type);
    });
}
