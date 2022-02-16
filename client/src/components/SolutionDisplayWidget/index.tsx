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
  const missingSolutionComponent =
    displayContext === 'settings' ? (
      <>{t('certification.project.no-solution')}</>
    ) : null;

  const displayComponents = {
    showFilesSolution: (
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
    ),
    showProjectAndGitHubLinks: (
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
    ),
    showProjectLink: (
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
    ),
    none: missingSolutionComponent
  };

  return displayComponents[getSolutionDisplayType(completedChallenge)];
}
