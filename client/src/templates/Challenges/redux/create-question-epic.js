import dedent from 'dedent';
import i18next from 'i18next';
import { ofType } from 'redux-observable';
import { tap, mapTo } from 'rxjs/operators';
import envData from '../../../../../config/env.json';
import {
  closeModal,
  challengeFilesSelector,
  challengeMetaSelector,
  projectFormValuesSelector
} from '../redux';
import { transformEditorLink } from '../utils';
import { actionTypes } from './action-types';

const { forumLocation } = envData;

function filesToMarkdown(challengeFiles = {}) {
  const moreThanOneFile = challengeFiles?.length > 1;
  return challengeFiles.reduce((fileString, challengeFile) => {
    if (!challengeFile) {
      return fileString;
    }
    const fileName = moreThanOneFile
      ? `\\ file: ${challengeFile.name}.${challengeFile.ext}\n`
      : '';
    const fileType = challengeFile.ext;
    return `${fileString}\`\`\`${fileType}\n${fileName}${challengeFile.contents}\n\`\`\`\n\n`;
  }, '\n');
}

function createQuestionEpic(action$, state$, { window }) {
  return action$.pipe(
    ofType(actionTypes.createQuestion),
    tap(() => {
      const state = state$.value;
      const challengeFiles = challengeFilesSelector(state);
      const { title: challengeTitle, helpCategory } =
        challengeMetaSelector(state);
      const {
        navigator: { userAgent },
        location: { pathname, origin }
      } = window;
      // Removes query params
      const challengeUrl = new URL(pathname, origin).href;
      const projectFormValues = Object.entries(
        projectFormValuesSelector(state)
      );
      const endingText = dedent(
        `${i18next.t('forum-help.browser-info')}\n\n${i18next.t(
          'forum-help.user-agent',
          { userAgent }
        )}\n\n${i18next.t(
          'forum-help.challenge'
        )} ${challengeTitle}\n\n${i18next.t(
          'forum-help.challenge-link'
        )}\n${challengeUrl}`
      );

      let textMessage = dedent(`${i18next.t(
        'forum-help.whats-happening'
      )}\n${i18next.t('forum-help.describe')}\n\n
        ${
          projectFormValues.length
            ? `${i18next.t('forum-help.camper-project')}\n`
            : i18next.t('forum-help.camper-code')
        }
        ${
          projectFormValues
            ?.map(([key, val]) => `${key}: ${transformEditorLink(val)}\n`)
            ?.join('') || filesToMarkdown(challengeFiles)
        }\n\n
        ${endingText}`);

      const altTextMessage = dedent(
        `${i18next.t('forum-help.whats-happening')}\n\n\n\n${i18next.t(
          'forum-help.camper-code'
        )}\n\n${i18next.t('forum-help.warning')}\n\n${i18next.t(
          'forum-help.too-long-one'
        )}\n\n${i18next.t('forum-help.too-long-two')}\n\n${i18next.t(
          'forum-help.too-long-three'
        )}\n\n\`\`\`\n${i18next.t('forum-help.add-code-one')}\n${i18next.t(
          'forum-help.add-code-two'
        )}\n${i18next.t('forum-help.add-code-three')}\n\n\`\`\`\n${endingText}`
      );

      const category = window.encodeURIComponent(
        i18next.t('links:help.' + helpCategory || 'Help')
      );

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
