// redux-observable compatible operator
export function ofType(...keys) {
  return this.filter(({ type }) => {
    const len = keys.length;
    if (len === 1) {
      return type === keys[0];
    } else {
      for (let i = 0; i < len; i++) {
        if (keys[i] === type) {
          return true;
        }
      }
    }
    return false;
  });
}

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
