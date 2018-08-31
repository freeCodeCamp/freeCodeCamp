import { ofType } from 'redux-epic';
import { types, titleSelector } from '../../common/app/redux';

export default function titleSage(actions, { getState }, { document }) {
  return actions::ofType(types.updateTitle)
    .do(() => {
      document.title = titleSelector(getState());
    })
    .ignoreElements();
}
