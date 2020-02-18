import dedent from 'dedent';
import { ofType } from 'redux-observable';
import {
  types,
  closeModal,
  challengeFilesSelector,
  challengeMetaSelector
} from '../redux';
import { tap, mapTo } from 'rxjs/operators';
import { helpCategory } from '../../../../utils/challengeTypes';
import { forumLocation } from '../../../../../config/env.json';

function filesToMarkdown(files = {}) {
  const moreThenOneFile = Object.keys(files).length > 1;
  return Object.keys(files).reduce((fileString, key) => {
    const file = files[key];
    if (!file) {
      return fileString;
    }
    const fileName = moreThenOneFile ? `\\ file: ${file.contents}` : '';
    const fileType = file.ext;
    return `${fileString}\`\`\`${fileType}\n${fileName}\n${file.contents}\n\`\`\`\n\n`;
  }, '\n');
}

function createQuestionEpic(action$, state$, { window }) {
  return action$.pipe(
    ofType(types.createQuestion),
    tap(() => {
      const state = state$.value;
      const files = challengeFilesSelector(state);
      const { block, title: challengeTitle } = challengeMetaSelector(state);
      const {
        navigator: { userAgent },
        location: { href }
      } = window;

      const endingText = dedent(
        `**Your browser information:**

        User Agent is: <code>${userAgent}</code>.

        **Challenge:** ${challengeTitle}

        **Link to the challenge:**
        ${href}`
      );

      let textMessage = dedent(
        `**Tell us what's happening:**\n\n\n\n**Your code so far**
        ${filesToMarkdown(files)}\n${endingText}`
      );

      const altTextMessage = dedent(
        `**Tell us what's happening:**



        **Your code so far**

        WARNING

        The challenge seed code and/or your solution exceeded the maximum length we can port over from the challenge.

        You will need to take an additional step here so the code you wrote presents in an easy to read format.

        Please copy/paste all the editor code showing in the challenge from where you just linked.

        \`\`\`

        Replace these two sentences with your copied code.
        Please leave the \`\`\` line above and the \`\`\` line below, 
        because they allow your code to properly format in the post.

        \`\`\`\n${endingText}`
      );

      const category = window.encodeURIComponent(helpCategory[block] || 'Help');

      const studentCode = window.encodeURIComponent(textMessage);
      const altStudentCode = window.encodeURIComponent(altTextMessage);

      const baseURI = `${forumLocation}/new-topic?category=${category}&title=&body=`;
      const defaultURI = `${baseURI}${studentCode}`;
      const altURI = `${baseURI}${altStudentCode}`;

      window.open(defaultURI.length < 8000 ? defaultURI : altURI, '_blank');
    }),
    mapTo(closeModal('help'))
  );
}

export default createQuestionEpic;
