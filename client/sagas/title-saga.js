import { types } from '../../common/app/redux';

export default function titleSage(actions, getState, { document }) {
  return actions.ofType(types.updateTitle)
    .map(() => {
      const state = getState();
      const newTitle = state.app.title;
      document.title = newTitle;
      return null;
    });
}
