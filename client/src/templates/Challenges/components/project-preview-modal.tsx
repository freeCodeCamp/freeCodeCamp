import { Button, Modal } from '@freecodecamp/react-bootstrap';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import type { CompletedChallenge } from '../../../redux/prop-types';
import {
  closeModal,
  setEditorFocusability,
  isProjectPreviewModalOpenSelector,
  projectPreviewMounted
} from '../redux';
import { projectPreviewId } from '../utils/frame';
import Preview from './preview';

import './project-preview-modal.css';

export interface PreviewConfig {
  challengeType: number;
  challengeFiles: CompletedChallenge['challengeFiles'];
}

interface Props {
  closeModal: (arg: string) => void;
  isOpen: boolean;
  projectPreviewMounted: (previewConfig: PreviewConfig) => void;
  previewConfig: PreviewConfig;
  setEditorFocusability: (focusability: boolean) => void;
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
  previewConfig,
  setEditorFocusability
}: Props): JSX.Element {
  const { t } = useTranslation();
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
        <Modal.Title className='text-center'>
          {t('learn.project-preview-title')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='project-preview-modal-body text-center'>
        {/* remove type assertion once frame.js has been migrated to TS */}
        <Preview
          previewId={projectPreviewId as string}
          previewMounted={() => {
            projectPreviewMounted(previewConfig);
          }}
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
          {t('buttons.start-coding')}
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
