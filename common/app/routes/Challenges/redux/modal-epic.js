import { combineEpics, ofType } from 'redux-epic';
import {
  types,
  chatRoomSelector,
  closeBugModal,
  closeHelpModal
} from '../redux';

import { filesSelector } from '../../../files';
import { currentChallengeSelector } from '../../../redux';

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

export function openIssueSearchEpic(actions, { getState }, { window }) {
  return actions::ofType(types.openIssueSearch).map(() => {
    const state = getState();
    const challengeName = currentChallengeSelector(state);

    window.open(
      'https://forum.freecodecamp.org/search?q=' +
      window.encodeURIComponent(challengeName)
    );

    return closeBugModal();
  });
}

export function createIssueEpic(actions, { getState }, { window }) {
  return actions::ofType(types.createIssue).map(() => {
    const state = getState();
    const files = filesSelector(state);
    const challengeName = currentChallengeSelector(state);
    const {
      navigator: { userAgent },
      location: { href }
    } = window;
    const titleText = 'Need assistance in ' + challengeName;
    let textMessage = [
      '#### Challenge Name\n',
      '[',
      challengeName,
      '](',
      href,
      ') has an issue.\n',
      '#### Issue Description\n',
      '<!-- Describe below when the issue happens and how to ',
      'reproduce it -->\n\n\n',
      '#### Browser Information\n',
      '<!-- Describe your workspace in which you are having issues-->\n',
      'User Agent is: <code>',
      userAgent,
      '</code>.\n\n',
      '#### Screenshot\n',
      '<!-- Add a screenshot of your issue -->\n\n\n',
      '#### Your Code'
    ].join('');

    const body = filesToMarkdown(files);
    if (body.length > 10) {
      textMessage += body;
    }

    window.open(
      'https://forum.freecodecamp.org/new-topic'
      + '?category=General'
      + '&title=' + window.encodeURIComponent(titleText)
      + '&body=' + window.encodeURIComponent(textMessage),
      '_blank'
    );

    return closeBugModal();
  });
}

export function openHelpChatRoomEpic(actions, { getState }, { window }) {
  return actions::ofType(types.openHelpChatRoom).map(() => {
    const state = getState();
    const helpChatRoom = chatRoomSelector(state);

    window.open(
      'https://gitter.im/freecodecamp/' +
      window.encodeURIComponent(helpChatRoom)
    );

    return closeHelpModal();
  });
}

export function createQuestionEpic(actions, { getState }, { window }) {
  return actions::ofType(types.createQuestion).map(() => {
    const state = getState();
    const files = filesSelector(state);
    const challengeName = currentChallengeSelector(state);
    const {
      navigator: { userAgent },
      location: { href }
    } = window;
    const textMessage = [
      '**Tell us what\'s happening:**\n\n\n\n',
      '**Your code so far**\n',
      filesToMarkdown(files),
      '**Your browser information:**\n\n',
      'User Agent is: <code>',
      userAgent,
      '</code>.\n\n',
      '**Link to the challenge:**\n',
      href
    ].join('');

    window.open(
      'https://forum.freecodecamp.org/new-topic'
      + '?category=help'
      + '&title=' + window.encodeURIComponent(challengeName)
      + '&body=' + window.encodeURIComponent(textMessage),
      '_blank'
    );

    return closeHelpModal();
  });
}

export default combineEpics(
  openIssueSearchEpic,
  createIssueEpic,
  openHelpChatRoomEpic,
  createQuestionEpic
);
