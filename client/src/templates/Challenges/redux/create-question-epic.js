import { ofType } from 'redux-observable';
import {
  types,
  closeModal,
  challengeFilesSelector,
  challengeMetaSelector
} from '../redux';
import { tap, mapTo } from 'rxjs/operators';
import { helpCategory } from '../../../../utils/challengeTypes';

function filesToMarkdown(files = {}) {
  const moreThenOneFile = Object.keys(files).length > 1;
  return Object.keys(files).reduce((fileString, key) => {
    const file = files[key];
    if (!file) {
      return fileString;
    }
    const fileName = moreThenOneFile ? `\\ file: ${file.contents}` : '';
    const fileType = file.ext;
    return (
      fileString +
      '```' +
      fileType +
      '\n' +
      fileName +
      '\n' +
      file.contents +
      '\n' +
      '```\n\n'
    );
  }, '\n');
}

function createQuestionEpic(action$, state$, { window }) {
  return action$.pipe(
    ofType(types.createQuestion),
    tap(() => {
      const state = state$.value;
      const files = challengeFilesSelector(state);
      const { title: challengeTitle, challengeType } = challengeMetaSelector(
        state
      );
      const {
        navigator: { userAgent },
        location: { href }
      } = window;
      const textMessage = [
        "**Tell us what's happening:**\n\n\n\n",
        '**Your code so far**\n',
        filesToMarkdown(files),
        '**Your browser information:**\n\n',
        'User Agent is: `',
        userAgent,
        '`.\n\n',
        '**Challenge:**\n',
        challengeTitle,
        '\n**Link to the challenge:**\n',
        href
      ].join('');
      window.open(
        'https://forum.freecodecamp.org/new-topic' +
          '?category=' +
          window.encodeURIComponent(helpCategory[challengeType] || 'Help') +
          '&title=' +
          '&body=' +
          window.encodeURIComponent(textMessage),
        '_blank'
      );
    }),
    mapTo(closeModal('help'))
  );
}

export default createQuestionEpic;
