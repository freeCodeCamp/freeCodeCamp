export default function titleSage(action$, getState, { document }) {
  return action$
    .filter(action => action.type === 'app.updateTitle')
    .map(() => {
      const state = getState();
      const newTitle = state.app.title;
      document.title = newTitle;
      return null;
    });
}
