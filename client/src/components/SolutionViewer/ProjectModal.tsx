import React from 'react';
import SolutionViewer from './SolutionViewer';
import { Button, Modal } from '@freecodecamp/react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FileType } from '../../redux/propTypes';

type PropTypes = {
  files: FileType[];
  handleSolutionModalHide: () => void;
  isOpen: boolean;
  projectTitle: string;
  solution: string;
};

const ProjectModal = (props: PropTypes): JSX.Element => {
  const { isOpen, projectTitle, files, solution, handleSolutionModalHide } =
    props;
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
        <SolutionViewer files={files} solution={solution} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSolutionModalHide}>{t('buttons.close')}</Button>
      </Modal.Footer>
    </Modal>
  );
};

ProjectModal.displayName = 'ProjectModal';

export default ProjectModal;
