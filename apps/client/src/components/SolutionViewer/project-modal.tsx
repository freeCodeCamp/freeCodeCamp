import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Modal } from '@freecodecamp/ui';

import { CompletedChallenge } from '../../redux/prop-types';
import SolutionViewer from './solution-viewer';

type ProjectModalProps = {
  challengeFiles: CompletedChallenge['challengeFiles'] | null;
  handleSolutionModalHide: () => void;
  isOpen: boolean;
  projectTitle: string;
  solution?: string;
};

const ProjectModal = ({
  isOpen,
  projectTitle,
  challengeFiles,
  solution,
  handleSolutionModalHide
}: ProjectModalProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Modal onClose={handleSolutionModalHide} open={isOpen} size='large'>
      <Modal.Header showCloseButton={true} closeButtonClassNames='close'>
        {t('settings.labels.solution-for', { projectTitle })}
      </Modal.Header>
      <Modal.Body alignment='left'>
        <SolutionViewer challengeFiles={challengeFiles} solution={solution} />
      </Modal.Body>
      <Modal.Footer alignment='end'>
        <Button onClick={handleSolutionModalHide}>{t('buttons.close')}</Button>
      </Modal.Footer>
    </Modal>
  );
};

ProjectModal.displayName = 'ProjectModal';

export default ProjectModal;
