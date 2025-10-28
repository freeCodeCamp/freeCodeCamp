import React from 'react';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, MenuItem, Button } from '@freecodecamp/ui';
import { useTranslation } from 'react-i18next';

import { CompletedChallenge } from '../../redux/prop-types';
import { getSolutionDisplayType } from '../../utils/solution-display-type';

interface Props {
  completedChallenge: CompletedChallenge;
  projectTitle: string;
  showUserCode: () => void;
  showProjectPreview?: () => void;
  showExamResults?: () => void;
  displayContext: 'timeline' | 'settings' | 'certification';
}

export function SolutionDisplayWidget({
  completedChallenge,
  projectTitle,
  showUserCode,
  showProjectPreview,
  showExamResults,
  displayContext
}: Props): JSX.Element | null {
  const { id, solution, githubLink } = completedChallenge;
  const { t } = useTranslation();
  const viewText = t('buttons.view');
  const viewCode = t('buttons.view-code');
  const viewProject = t('buttons.view-project');
  // We need to add a random number for dropdown button id's since there may be
  // two dropdowns for the same project on the page.
  const randomIdSuffix = Math.floor(Math.random() * 1_000_000);
  const ShowFilesSolutionForCertification = (
    <Button block={true} onClick={showUserCode}>
      {viewText}{' '}
      <span className='sr-only'>
        {t('settings.labels.solution-for', { projectTitle })}
      </span>
    </Button>
  );
  const ShowProjectAndGithubLinkForCertification = (
    <Dropdown id={`dropdown-for-${id}-${randomIdSuffix}`}>
      <Dropdown.Toggle>
        {viewText}{' '}
        <span className='sr-only'>
          {t('settings.labels.solution-for', { projectTitle })}
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <MenuItem
          variant='primary'
          // This expression is only to resolve TypeScript error.
          // There won't be a case where the link has an invalid `href`
          // as this component is only rendered if `solution` is truthy.
          href={solution ?? undefined}
          rel='noopener noreferrer'
          target='_blank'
        >
          {t('certification.project.solution')}{' '}
          <span className='sr-only'>({t('aria.opens-new-window')})</span>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </MenuItem>
        <MenuItem
          variant='primary'
          href={githubLink}
          rel='noopener noreferrer'
          target='_blank'
        >
          {t('certification.project.source')}{' '}
          <span className='sr-only'>({t('aria.opens-new-window')})</span>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
  const ShowProjectLinkForCertification = (
    <Button
      block={true}
      // This expression is only to resolve TypeScript error.
      // There won't be a case where the link has an invalid `href`
      // as this component is only rendered if `solution` is truthy.
      href={solution ?? undefined}
      rel='noopener noreferrer'
      target='_blank'
    >
      {viewText}{' '}
      <span className='sr-only'>
        {t('settings.labels.solution-for', { projectTitle })} (
        {t('aria.opens-new-window')})
      </span>
      <FontAwesomeIcon icon={faExternalLinkAlt} />
    </Button>
  );
  const MissingSolutionComponentForCertification = (
    <>{t('certification.project.no-solution')}</>
  );
  const ShowUserCode = (
    <Button block={true} variant='primary' onClick={showUserCode}>
      {viewText}{' '}
      <span className='sr-only'>
        {t('settings.labels.solution-for', { projectTitle })}
      </span>
    </Button>
  );
  const ShowMultifileProjectSolution = (
    <div>
      <Dropdown id={`dropdown-for-${id}-${randomIdSuffix}`}>
        <Dropdown.Toggle>
          {viewText}{' '}
          <span className='sr-only'>
            {t('settings.labels.solution-for', { projectTitle })}
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <MenuItem variant='primary' onClick={showUserCode}>
            {viewCode}
          </MenuItem>
          <MenuItem variant='primary' onClick={showProjectPreview}>
            {viewProject}
          </MenuItem>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );

  const ShowProjectAndGithubLinks = (
    <div>
      <Dropdown id={`dropdown-for-${id}-${randomIdSuffix}`}>
        <Dropdown.Toggle>
          {viewText}{' '}
          <span className='sr-only'>
            {t('settings.labels.solution-for', { projectTitle })}
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <MenuItem
            variant='primary'
            // This expression is only to resolve TypeScript error.
            // There won't be a case where the link has an invalid `href`
            // as this component is only rendered if `solution` is truthy.
            href={solution ?? undefined}
            rel='noopener noreferrer'
            target='_blank'
          >
            {t('certification.project.solution')}{' '}
            <span className='sr-only'>({t('aria.opens-new-window')})</span>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </MenuItem>
          <MenuItem
            variant='primary'
            href={githubLink}
            rel='noopener noreferrer'
            target='_blank'
          >
            {t('certification.project.source')}{' '}
            <span className='sr-only'>({t('aria.opens-new-window')})</span>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </MenuItem>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
  const ShowProjectLink = (
    <Button
      block={true}
      variant='primary'
      // This expression is only to resolve TypeScript error.
      // There won't be a case where the link has an invalid `href`
      // as this component is only rendered if `solution` is truthy.
      href={solution ?? undefined}
      rel='noopener noreferrer'
      target='_blank'
    >
      {viewText}{' '}
      <span className='sr-only'>
        {t('settings.labels.solution-for', { projectTitle })} (
        {t('aria.opens-new-window')})
      </span>
      <FontAwesomeIcon icon={faExternalLinkAlt} />
    </Button>
  );
  const ShowExamResults = (
    <Button block={true} variant='primary' onClick={showExamResults}>
      {viewText}{' '}
      <span className='sr-only'>
        {t('settings.labels.results-for', { projectTitle })}
      </span>
    </Button>
  );
  const MissingSolutionComponent =
    displayContext === 'settings' ? (
      <>{t('certification.project.no-solution')}</>
    ) : null;

  const NoSolutionToDisplay = (
    <> {t('certification.project.no-solution-to-display')} </>
  );

  const displayComponents =
    displayContext === 'certification'
      ? {
          showUserCode: ShowFilesSolutionForCertification,
          showMultifileProjectSolution: ShowMultifileProjectSolution,
          showProjectAndGithubLinks: ShowProjectAndGithubLinkForCertification,
          showProjectLink: ShowProjectLinkForCertification,
          showExamResults: ShowExamResults,
          none: MissingSolutionComponentForCertification,
          noSolutionToDisplay: NoSolutionToDisplay
        }
      : {
          showUserCode: ShowUserCode,
          showMultifileProjectSolution: ShowMultifileProjectSolution,
          showProjectAndGithubLinks: ShowProjectAndGithubLinks,
          showProjectLink: ShowProjectLink,
          showExamResults: ShowExamResults,
          none: MissingSolutionComponent,
          noSolutionToDisplay: NoSolutionToDisplay
        };

  return displayComponents[getSolutionDisplayType(completedChallenge)];
}
