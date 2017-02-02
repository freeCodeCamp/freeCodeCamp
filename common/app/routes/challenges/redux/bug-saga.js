import types from '../redux/types';
import { closeBugModal } from '../redux/actions';

function filesToMarkdown(files = {}) {
  const moreThenOneFile = Object.keys(files).length > 1;
  return Object.keys(files).reduce((fileString, key) => {
    const file = files[key];
    if (!file) {
      return fileString;
    }
    const fileName = moreThenOneFile ? `\\ file: ${file.contents}` : '';
    const fileType = file.ext;
    return fileString +
      '\`\`\`' +
      fileType +
      '\n' +
      fileName +
      '\n' +
      file.contents +
      '\n' +
      '\`\`\`\n\n';
  }, '\n');
}

export default function bugSaga(actions$, getState, { window }) {
  return actions$
    .filter(({ type }) => (
      type === types.openIssueSearch ||
      type === types.createIssue
    ))
    .map(({ type }) => {
      const {
        challengesApp: {
          challenge: challengeName,
          files
        }
      } = getState();
      const {
        navigator: { userAgent },
        location: { href }
      } = window;
      if (type === types.openIssueSearch) {
        window.open(
          'https://github.com/freeCodeCamp/freeCodeCamp/issues?q=' +
          'is:issue is:all ' +
          challengeName
        );
      }
      let textMessage = [
        'Challenge [',
        challengeName,
        '](',
        href,
        ') has an issue.\n',
        'User Agent is: <code>',
        userAgent,
        '</code>.\n',
        'Please describe how to reproduce this issue, and include ',
        'links to screenshots if possible.\n\n'
      ].join('');
      const body = filesToMarkdown(files);
      if (body.length > 10) {
        textMessage = textMessage + body;
      }
      window.open(
        'https://github.com/freecodecamp/freecodecamp/issues/new?&body=' +
        window.encodeURIComponent(textMessage),
        '_blank'
      );
      return closeBugModal();
    });
}
