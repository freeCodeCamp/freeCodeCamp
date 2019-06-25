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
        'User Agent is: <code>',
        userAgent,
        '</code>.\n\n',
        '**Challenge:**\n',
        challengeTitle,
        '\n**Link to the challenge:**\n',
        href
      ].join('');

      const altTextMessage = [
        "**Tell us what's happening:**\n\n\n\n",
        '**Your code so far**\n\n',
        'WARNING\n\n',
        'The challenge seed code and/or your solution exceeded the maximum',
        ' length we can port over from the challenge.\n\n',
        'You will need to take an additional step here so the code you wrote',
        'presents in an easy to read format.\n\n',
        'Please copy/paste all the editor code showing in the challenge ',
        'from where you just linked.\n\n',
        '```js\n\n',
        'Replace these two sentences with your copied code. \n',
        'Please leave the ```js line above and the ``` line below, ',
        'because they allow your code to properly format in the post.\n\n',
        '```\n\n',
        '**Your browser information:**\n\n',
        'User Agent is: <code>',
        userAgent,
        '</code>.\n\n',
        '**Challenge:**\n',
        challengeTitle,
        '\n\n**Link to the challenge:**\n',
        href
      ].join('');

      const category = window.encodeURIComponent(
        helpCategory[challengeType] || 'Help'
      );

      const studentCode = window.encodeURIComponent(textMessage);
      const altStudentCode = window.encodeURIComponent(altTextMessage);

      const defaultURI = `https://forum.freecodecamp.org/new-topic?category=${category}
                          &title=&body=${studentCode}`;
      const altURI = `https://forum.freecodecamp.org/new-topic?category=${category}
      &title=&body=${altStudentCode}`;

      if (defaultURI.length < 8000) {
        window.open(defaultURI, '_blank');
      } else {
        window.open(altURI, '_blank');
      }
    }),
    mapTo(closeModal('help'))
  );
}

export default createQuestionEpic;
