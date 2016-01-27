//   (doc: Object) =>
//     () =>
//     (next: (action: Action) => Object) =>
//     titleSage(action: Action) => Object|Void
export default (doc) => () => next => {
  return function titleSage(action) {
    // get next state
    const result = next(action);
    if (action !== 'updateTitle') {
      return result;
    }
    const newTitle = result.app.title;
    doc.title = newTitle;
    return result;
  };
};
