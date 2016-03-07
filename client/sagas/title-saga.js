//   (doc: Object) =>
//     () =>
//     (next: (action: Action) => Object) =>
//     titleSage(action: Action) => Object|Void
export default ({ doc }) => ({ getState }) => next => {
  return function titleSage(action) {
    // get next state
    const result = next(action);
    if (action.type !== 'app.updateTitle') {
      return result;
    }
    const state = getState();
    const newTitle = state.app.title;
    doc.title = newTitle;
    return result;
  };
};
