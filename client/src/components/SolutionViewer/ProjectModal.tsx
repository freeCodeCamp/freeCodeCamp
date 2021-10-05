/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Button, Modal } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChallengeFiles } from '../../redux/prop-types';
import SolutionViewer from './SolutionViewer';

type ProjectModalProps = {
  challengeFiles: ChallengeFiles;
  // TODO: removed once refactored to TS
  //   PropTypes.shape({
  //     contents: PropTypes.string,
  //     ext: PropTypes.string,
  //     key: PropTypes.string,
  //     name: PropTypes.string,
  //     path: PropTypes.string
  //   })
  // ),
  handleSolutionModalHide: () => void;
  isOpen: boolean;
  projectTitle: string;
  solution: string | null | undefined;
};

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  projectTitle,
  challengeFiles,
  solution,
  handleSolutionModalHide
}: ProjectModalProps) => {
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
        <SolutionViewer challengeFiles={challengeFiles} solution={String(solution)} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSolutionModalHide}>{t('buttons.close')}</Button>
      </Modal.Footer>
    </Modal>
  );
};

ProjectModal.displayName = 'ProjectModal';

export default ProjectModal;
