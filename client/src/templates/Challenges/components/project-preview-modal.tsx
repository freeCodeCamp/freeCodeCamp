import { Button, Modal } from '@freecodecamp/react-bootstrap';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import type { CompletedChallenge } from '../../../redux/prop-types';
import {
  closeModal,
  setEditorFocusability,
  projectPreviewMounted
} from '../redux/actions';
import { isProjectPreviewModalOpenSelector } from '../redux/selectors';
import { projectPreviewId } from '../utils/frame';
import Preview from './preview';

import './project-preview-modal.css';

interface ProjectPreviewMountedPayload {
  challengeData: CompletedChallenge | null;
  showProjectPreview: boolean;
}

interface Props {
  closeModal: (arg: string) => void;
  isOpen: boolean;
  projectPreviewMounted: (payload: ProjectPreviewMountedPayload) => void;
  challengeData: CompletedChallenge | null;
  setEditorFocusability: (focusability: boolean) => void;
  showProjectPreview: boolean;
  previewTitle: string;
  closeText: string;
}

const mapStateToProps = (state: unknown) => ({
  isOpen: isProjectPreviewModalOpenSelector(state) as boolean
});
const mapDispatchToProps = {
  closeModal,
  setEditorFocusability,
  projectPreviewMounted
};

function ProjectPreviewModal({
  closeModal,
  isOpen,
  projectPreviewMounted,
  challengeData,
  setEditorFocusability,
  showProjectPreview,
  previewTitle,
  closeText
}: Props): JSX.Element {
  useEffect(() => {
    if (isOpen) setEditorFocusability(false);
  });

  return (
    <Modal
      bsSize='lg'
      data-cy='project-preview-modal'
      dialogClassName='project-preview-modal'
      onHide={() => {
        closeModal('projectPreview');
        setEditorFocusability(true);
      }}
      show={isOpen}
    >
      <Modal.Header
        className='project-preview-modal-header fcc-modal'
        closeButton={true}
      >
        <Modal.Title className='text-center'>{previewTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='project-preview-modal-body text-center'>
        {/* remove type assertion once frame.js has been migrated to TS */}
        <Preview
          previewId={projectPreviewId as string}
          previewMounted={() =>
            projectPreviewMounted({ challengeData, showProjectPreview })
          }
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          block={true}
          bsSize='lg'
          bsStyle='primary'
          onClick={() => {
            closeModal('projectPreview');
            setEditorFocusability(true);
          }}
        >
          {closeText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ProjectPreviewModal.displayName = 'ProjectPreviewModal';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectPreviewModal);
