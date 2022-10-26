import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  dataCy?: string;
  showUserCode: () => void;
  showProjectPreview?: () => void;
  displayContext: 'timeline' | 'settings' | 'certification';
}

export function SolutionDisplayWidget({
  completedChallenge,
  dataCy,
  showUserCode,
  showProjectPreview,
  displayContext
}: Props) {
  const { id, solution, githubLink } = completedChallenge;
  const { t } = useTranslation();
  const viewText = t('buttons.view');
  const viewCode = t('buttons.view-code');
  const viewProject = t('buttons.view-project');

  const ShowFilesSolutionForCertification = (
    <button
      className='project-link-button-override'
      data-cy={dataCy}
      onClick={showUserCode}
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
  const ShowUserCode = (
    <Button
      block={true}
      bsStyle='primary'
      className='btn-invert'
      data-cy={dataCy}
      id={`btn-for-${id}`}
      onClick={showUserCode}
    >
      {viewText} <FontAwesomeIcon icon={faExternalLinkAlt} />
    </Button>
  );
  const ShowMultifileProjectSolution = (
    <div className='solutions-dropdown'>
      <DropdownButton
        block={true}
        bsStyle='primary'
        className='btn-invert'
        id={`dropdown-for-${id}`}
        title={t('buttons.view')}
      >
        <MenuItem bsStyle='primary' onClick={showUserCode}>
          {viewCode}
        </MenuItem>
        <MenuItem bsStyle='primary' onClick={showProjectPreview}>
          {viewProject}
        </MenuItem>
      </DropdownButton>
    </div>
  );

  const ShowProjectAndGithubLinks = (
    <div className='solutions-dropdown'>
      <DropdownButton
        block={true}
        bsStyle='primary'
        className='btn-invert'
        id={`dropdown-for-${id}`}
        title={viewText}
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
      {viewText} <FontAwesomeIcon icon={faExternalLinkAlt} />
    </Button>
  );
  const MissingSolutionComponent =
    displayContext === 'settings' ? (
      <>{t('certification.project.no-solution')}</>
    ) : null;

  const displayComponents =
    displayContext === 'certification'
      ? {
          showUserCode: ShowFilesSolutionForCertification,
          showMultifileProjectSolution: ShowMultifileProjectSolution,
          showProjectAndGithubLinks: ShowProjectAndGithubLinkForCertification,
          showProjectLink: ShowProjectLinkForCertification,
          none: MissingSolutionComponentForCertification
        }
      : {
          showUserCode: ShowUserCode,
          showMultifileProjectSolution: ShowMultifileProjectSolution,
          showProjectAndGithubLinks: ShowProjectAndGithubLinks,
          showProjectLink: ShowProjectLink,
          none: MissingSolutionComponent
        };

  return displayComponents[getSolutionDisplayType(completedChallenge)];
}
