import {
  Button,
  DropdownButton,
  MenuItem
} from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { CompletedChallenge } from '../../redux/prop-types';
import { getSolutionDisplayType } from '../../utils/solution-display-type';

interface Props {
  completedChallenge: CompletedChallenge;
  projectTitle?: string;
  showFilesSolution: () => void;
  displayContext: 'timeline' | 'settings' | 'certification';
}

export function SolutionDisplayWidget({
  completedChallenge,
  projectTitle,
  showFilesSolution,
  displayContext
}: Props) {
  const { id, solution, githubLink } = completedChallenge;
  const { t } = useTranslation();

  const dropdownTitle =
    displayContext === 'settings' ? 'Show Solutions' : 'View';
  const projectLinkText =
    displayContext === 'settings'
      ? t('buttons.show-solution')
      : t('buttons.view');

  const ShowFilesSolutionForCertification = (
    <button
      className='project-link-button-override'
      data-cy={`${projectTitle ?? ''} solution`}
      onClick={showFilesSolution}
    >
      {t('certification.project.solution')}
    </button>
  );
  const ShowProjectAndGithubLinkForCertification = (
    <>
      <a href={solution ?? ''} rel='noopener noreferrer' target='_blank'>
        {t('certification.project.solution')}
      </a>
      ,{' '}
      <a href={githubLink} rel='noopener noreferrer' target='_blank'>
        {t('certification.project.source')}
      </a>
    </>
  );
  const ShowProjectLinkForCertification = (
    <a
      className='btn-invert'
      href={solution ?? ''}
      rel='noopener noreferrer'
      target='_blank'
    >
      {t('certification.project.solution')}
    </a>
  );
  const MissingSolutionComponentForCertification = (
    <>{t('certification.project.no-solution')}</>
  );
  const ShowFilesSolution = (
    <Button
      block={true}
      bsStyle='primary'
      className='btn-invert'
      data-cy={projectTitle}
      id={`btn-for-${id}`}
      onClick={showFilesSolution}
    >
      {t('buttons.show-code')}
    </Button>
  );
  const ShowProjectAndGithubLinks = (
    <div className='solutions-dropdown'>
      <DropdownButton
        block={true}
        bsStyle='primary'
        className='btn-invert'
        id={`dropdown-for-${id}`}
        title={dropdownTitle}
      >
        <MenuItem
          bsStyle='primary'
          href={solution}
          rel='noopener noreferrer'
          target='_blank'
        >
          {t('buttons.frontend')}
        </MenuItem>
        <MenuItem
          bsStyle='primary'
          href={githubLink}
          rel='noopener noreferrer'
          target='_blank'
        >
          {t('buttons.backend')}
        </MenuItem>
      </DropdownButton>
    </div>
  );
  const ShowProjectLink = (
    <Button
      block={true}
      bsStyle='primary'
      className='btn-invert'
      href={solution}
      id={`btn-for-${id}`}
      rel='noopener noreferrer'
      target='_blank'
    >
      {projectLinkText}
    </Button>
  );
  const MissingSolutionComponent =
    displayContext === 'settings' ? (
      <>{t('certification.project.no-solution')}</>
    ) : null;

  const displayComponents =
    displayContext === 'certification'
      ? {
          showFilesSolution: ShowFilesSolutionForCertification,
          showProjectAndGitHubLinks: ShowProjectAndGithubLinkForCertification,
          showProjectLink: ShowProjectLinkForCertification,
          none: MissingSolutionComponentForCertification
        }
      : {
          showFilesSolution: ShowFilesSolution,
          showProjectAndGitHubLinks: ShowProjectAndGithubLinks,
          showProjectLink: ShowProjectLink,
          none: MissingSolutionComponent
        };

  return displayComponents[getSolutionDisplayType(completedChallenge)];
}
