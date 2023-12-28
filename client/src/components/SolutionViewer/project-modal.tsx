import React from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '@freecodecamp/react-bootstrap';
import { Button } from '@freecodecamp/ui';

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
    <Modal
      data-playwright-test-label='project-solution-viewer-modal'
      aria-labelledby='solution-viewer-modal-title'
      bsSize='large'
      onHide={handleSolutionModalHide}
      show={isOpen}
      size='lg'
    >
      <Modal.Header closeButton={true}>
        <Modal.Title id='solution-viewer-modal-title'>
          {t('settings.labels.solution-for', { projectTitle })}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SolutionViewer challengeFiles={challengeFiles} solution={solution} />
      </Modal.Body>
      <Modal.Footer>
        <Button
          data-cy='solution-viewer-close-btn'
          onClick={handleSolutionModalHide}
        >
          {t('buttons.close')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ProjectModal.displayName = 'ProjectModal';

export default ProjectModal;
