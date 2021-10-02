import { Button, Modal } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChallengeFile } from '../../redux/prop-types';
import SolutionViewer from './SolutionViewer';

interface Props {
  challengeFiles: ChallengeFile[];
  handleSolutionModalHide: () => void;
  isOpen: boolean;
  projectTitle: string;
  solution: string;
}

const ProjectModal = ({
  isOpen,
  projectTitle,
  challengeFiles,
  solution,
  handleSolutionModalHide
}: Props): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Modal
      aria-labelledby='solution-viewer-modal-title'
      bsSize='large'
      onHide={handleSolutionModalHide}
      show={isOpen}
    >
      <Modal.Header className='this-one?' closeButton={true}>
        <Modal.Title id='solution-viewer-modal-title'>
          {t('settings.labels.solution-for', {
            projectTitle: projectTitle
          })}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SolutionViewer challengeFiles={challengeFiles} solution={solution} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSolutionModalHide}>{t('buttons.close')}</Button>
      </Modal.Footer>
    </Modal>
  );
};

ProjectModal.displayName = 'ProjectModal';

export default ProjectModal;
