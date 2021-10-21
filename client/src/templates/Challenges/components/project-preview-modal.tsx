import { Button, Modal } from '@freecodecamp/react-bootstrap';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import type { ChallengeFile, Required } from '../../../redux/prop-types';
import {
  closeModal,
  setEditorFocusability,
  isProjectPreviewModalOpenSelector,
  projectPreviewMounted
} from '../redux';
import { projectPreviewId } from '../utils/frame';
import Preview from './preview';

export interface PreviewConfig {
  challengeType: boolean;
  challengeFiles: ChallengeFile[];
  required: Required;
  template: string;
}

interface Props {
  closeModal: () => void;
  isOpen: boolean;
  projectPreviewMounted: (previewConfig: PreviewConfig) => void;
  previewConfig: PreviewConfig;
  setEditorFocusability: (focusability: boolean) => void;
}

const mapStateToProps = (state: unknown) => ({
  isOpen: isProjectPreviewModalOpenSelector(state) as boolean
});
const mapDispatchToProps = {
  closeModal: () => closeModal('projectPreview'),
  setEditorFocusability,
  projectPreviewMounted
};

export function ProjectPreviewModal({
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
      dialogClassName='project-preview-modal'
      onHide={() => {
        closeModal();
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
        <Button
          block={true}
          bsSize='lg'
          bsStyle='primary'
          onClick={() => {
            closeModal();
            setEditorFocusability(true);
          }}
        >
          {t('buttons.hide-project-preview')}
        </Button>
      </Modal.Body>
    </Modal>
  );
}

ProjectPreviewModal.displayName = 'ProjectPreviewModal';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectPreviewModal);
