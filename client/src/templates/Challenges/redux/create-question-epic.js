import i18next from 'i18next';
import { ofType } from 'redux-observable';
import { mapTo, tap } from 'rxjs/operators';

import envData from '../../../../../config/env.json';
import { transformEditorLink } from '../utils';
import { actionTypes } from './action-types';
import { closeModal } from './actions';
import {
  challengeFilesSelector,
  challengeMetaSelector,
  projectFormValuesSelector
} from './selectors';

const { forumLocation } = envData;

function filesToMarkdown(challengeFiles = []) {
  const moreThanOneFile = challengeFiles?.length > 1;
  return challengeFiles.reduce((fileString, challengeFile) => {
    if (!challengeFile) {
      return fileString;
    }

    const fileExtension = challengeFile.ext;
    const fileName = challengeFile.name;
    const fileType = fileExtension === 'js' ? 'javascript' : fileExtension;
    let fileDescription;

    if (!moreThanOneFile) {
      fileDescription = '';
    } else if (fileExtension === 'html') {
      fileDescription = `<!-- file: ${fileName}.${fileExtension} -->\n`;
    } else {
      fileDescription = `/* file: ${fileName}.${fileExtension} */\n`;
    }

    return `${fileString}\`\`\`${fileType}\n${fileDescription}${challengeFile.contents}\n\`\`\`\n\n`;
  }, '\n');
}

export function insertEditableRegions(challengeFiles = []) {
  if (challengeFiles?.some(file => file.editableRegionBoundaries?.length > 0)) {
    const editableRegionStrings = fileExtension => {
      const startComment = fileExtension === 'html' ? '<!--' : '/*';
      const endComment = fileExtension === 'html' ? '-->' : '*/';
      return `\n${startComment} User Editable Region ${endComment}\n`;
    };

    const filesWithEditableRegions = challengeFiles.map(file => {
      const { contents, editableRegionBoundaries, ext } = file;
      if (editableRegionBoundaries.length > 0) {
        const comment = editableRegionStrings(ext);
        const [start, end] = editableRegionBoundaries;
        const lines = contents.split('\n');
        lines.splice(start, 0, comment);
        lines.splice(end, 0, comment);
        return { ...file, contents: lines.join('\n') };
      }
      return file;
    });
    return filesWithEditableRegions;
  }
  return challengeFiles;
}

function createQuestionEpic(action$, state$, { window }) {
  return action$.pipe(
    ofType(actionTypes.createQuestion),
    tap(() => {
      const state = state$.value;
      let challengeFiles = challengeFilesSelector(state);
      const {
        title: challengeTitle,
        superBlock,
        block,
        helpCategory
      } = challengeMetaSelector(state);

      challengeFiles = insertEditableRegions(challengeFiles);

      const {
        navigator: { userAgent },
        location: { pathname, origin }
      } = window;
      // Removes query params
      const challengeUrl = new URL(pathname, origin).href;
      const projectFormValues = Object.entries(
        projectFormValuesSelector(state)
      );

      const browserInfoHeading = i18next.t('forum-help.browser-info');
      const userAgentHeading = i18next.t('forum-help.user-agent', {
        userAgent
      });
      const challengeHeading = i18next.t('forum-help.challenge');
      const blockTitle = i18next.t(`intro:${superBlock}.blocks.${block}.title`);
      const challengeLinkHeading = i18next.t('forum-help.challenge-link');
      const endingText = `${browserInfoHeading}\n\n${userAgentHeading}\n\n${challengeHeading} ${blockTitle} - ${challengeTitle}\n\n${challengeLinkHeading}\n${challengeUrl}`;

      const camperCodeHeading = i18next.t('forum-help.camper-code');

      const whatsHappeningHeading = i18next.t('forum-help.whats-happening');
      const describe = i18next.t('forum-help.describe');
      const projectOrCodeHeading = projectFormValues.length
        ? `${i18next.t('forum-help.camper-project')}\n`
        : camperCodeHeading;
      const markdownCodeOrLinks =
        projectFormValues
          ?.map(([key, val]) => `${key}: ${transformEditorLink(val)}\n\n`)
          ?.join('') || filesToMarkdown(challengeFiles);
      const textMessage = `${whatsHappeningHeading}\n${describe}\n\n${projectOrCodeHeading}\n\n${markdownCodeOrLinks}${endingText}`;

      const warning = i18next.t('forum-help.warning');
      const tooLongOne = i18next.t('forum-help.too-long-one');
      const tooLongTwo = i18next.t('forum-help.too-long-two');
      const tooLongThree = i18next.t('forum-help.too-long-three');
      const addCodeOne = i18next.t('forum-help.add-code-one');
      const addCodeTwo = i18next.t('forum-help.add-code-two');
      const addCodeThree = i18next.t('forum-help.add-code-three');
      const altTextMessage = `${whatsHappeningHeading}\n\n${camperCodeHeading}\n\n${warning}\n\n${tooLongOne}\n\n${tooLongTwo}\n\n${tooLongThree}\n\n\`\`\`text\n${addCodeOne}\n${addCodeTwo}\n${addCodeThree}\n\`\`\`\n\n${endingText}`;

      const titleText = `${i18next.t(
        `intro:${superBlock}.blocks.${block}.title`
      )} - ${challengeTitle}`;

      const category = window.encodeURIComponent(
        i18next.t('links:help.' + helpCategory || 'Help')
      );

      const studentCode = window.encodeURIComponent(textMessage);
      const altStudentCode = window.encodeURIComponent(altTextMessage);

      const baseURI = `${forumLocation}/new-topic?category=${category}&title=${titleText}&body=`;
      const defaultURI = `${baseURI}${studentCode}`;
      const altURI = `${baseURI}${altStudentCode}`;

      window.open(defaultURI.length < 8000 ? defaultURI : altURI, '_blank');
    }),
    mapTo(closeModal('help'))
  );
}

export default createQuestionEpic;
