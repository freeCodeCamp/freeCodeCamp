import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from '@freecodecamp/ui';

import type { ChallengeData } from '../../../redux/prop-types';
import {
  closeModal,
  setEditorFocusability,
  projectPreviewMounted
} from '../redux/actions';
import {
  isProjectPreviewModalOpenSelector,
  isProjectPreviewLoadingSelector
} from '../redux/selectors';
import { projectPreviewId } from '../utils/frame';
import Loader from '../../../components/helpers/loader';
import Preview from './preview';

import './project-preview-modal.css';

interface ProjectPreviewMountedPayload {
  challengeData: ChallengeData | null;
}

interface Props {
  closeModal: (arg: string) => void;
  isOpen: boolean;
  projectPreviewMounted: (payload: ProjectPreviewMountedPayload) => void;
  challengeData?: ChallengeData | null;
  setEditorFocusability: (focusability: boolean) => void;
  previewTitle: string;
  closeText: string;
  isProjectPreviewLoading: boolean;
}

const mapStateToProps = (state: unknown) => ({
  isOpen: isProjectPreviewModalOpenSelector(state) as boolean,
  isProjectPreviewLoading: isProjectPreviewLoadingSelector(state) as boolean
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
  challengeData = null,
  setEditorFocusability,
  previewTitle,
  closeText,
  isProjectPreviewLoading
}: Props): JSX.Element {
  useEffect(() => {
    if (isOpen) setEditorFocusability(false);
  });

  return (
    <Modal
      size='large'
      onClose={() => {
        closeModal('projectPreview');
        setEditorFocusability(true);
      }}
      open={isOpen}
    >
      <Modal.Header closeButtonClassNames='close'>{previewTitle}</Modal.Header>
      <Modal.Body className='project-preview-modal-body'>
        <Preview
          previewId={projectPreviewId}
          previewMounted={() => projectPreviewMounted({ challengeData })}
        />
        {isProjectPreviewLoading && (
          <div className='project-preview-loader'>
            <Loader />
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          block={true}
          size='large'
          variant='primary'
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
