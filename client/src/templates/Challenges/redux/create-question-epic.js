import { ofType } from 'redux-observable';
import {
  types,
  closeModal,
  challengeFilesSelector,
  challengeMetaSelector,
  projectFormValuesSelector
} from '../redux';
import { tap, mapTo } from 'rxjs/operators';
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
      const { title: challengeTitle, helpCategory } = challengeMetaSelector(
        state
      );
      const {
        navigator: { userAgent },
        location: { href }
      } = window;
      const projectFormValues = Object.entries(
        projectFormValuesSelector(state)
      );
      const endingText = `**Your browser information:**\n
      \nUser Agent is: <code>${userAgent}</code>.\n
      \n**Challenge:** ${challengeTitle}\n
      \n**Link to the challenge:**\n\n${href}`;

      let textMessage = `**Tell us what's happening:**\n\n${
        projectFormValues.length
          ? `**Your project link(s)**\n`
          : `**Your code so far**`
      }${projectFormValues?.map(([key, val]) => `${key}: ${val}\n`)?.join('') ||
        filesToMarkdown(files)}${endingText}`;

      const altTextMessage = `**Tell us what's happening:**\n
      \n**Your code so far**\n\nWARNING\n
      \nThe challenge seed code and/or your solution exceeded the maximum length we can port over from the challenge.\n
      \nYou will need to take an additional step here so the code you wrote presents in an easy to read format.\n
      \nPlease copy/paste all the editor code showing in the challenge from where you just linked.\n\`\`\`\nReplace these two sentences with your copied code.\n
      \nPlease leave the \`\`\` line above and the \`\`\` line below,\nbecause they allow your code to properly format in the post.\n\`\`\`\n${endingText}`;

      const category = window.encodeURIComponent(helpCategory || 'Help');

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
