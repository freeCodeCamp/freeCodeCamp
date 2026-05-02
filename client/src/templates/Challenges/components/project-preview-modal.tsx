import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from '@freecodecamp/ui';

import { Loader } from '../../../components/helpers';
import type { ChallengeData } from '../../../redux/prop-types';
import {
  closeModal,
  setEditorFocusability,
  projectPreviewMounted
} from '../redux/actions';
import {
  isProjectPreviewLoadingSelector,
  isProjectPreviewModalOpenSelector
} from '../redux/selectors';
import { projectPreviewId } from '../utils/frame';
import Preview from './preview';

import './project-preview-modal.css';

interface ProjectPreviewMountedPayload {
  challengeData: ChallengeData | null;
}

interface Props {
  closeModal: (arg: string) => void;
  isOpen: boolean;
  isLoading: boolean;
  projectPreviewMounted: (payload: ProjectPreviewMountedPayload) => void;
  challengeData?: ChallengeData | null;
  setEditorFocusability: (focusability: boolean) => void;
  previewTitle: string;
  closeText: string;
}

const mapStateToProps = (state: unknown) => ({
  isOpen: isProjectPreviewModalOpenSelector(state) as boolean,
  isLoading: isProjectPreviewLoadingSelector(state) as boolean
});
const mapDispatchToProps = {
  closeModal,
  setEditorFocusability,
  projectPreviewMounted
};

function ProjectPreviewModal({
  closeModal,
  isOpen,
  isLoading,
  projectPreviewMounted,
  challengeData = null,
  setEditorFocusability,
  previewTitle,
  closeText
}: Props): JSX.Element {
  useEffect(() => {
    if (isOpen) setEditorFocusability(false);
  }, [isOpen, setEditorFocusability]);

  const handlePreviewMounted = useCallback(() => {
    projectPreviewMounted({ challengeData });
  }, [projectPreviewMounted, challengeData]);

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
        {isLoading ? (
          <div className='project-preview-modal-loader'>
            <Loader />
          </div>
        ) : null}
        <div
          className={`project-preview-modal-content ${
            isLoading ? 'is-loading' : ''
          }`}
        >
          <Preview
            previewId={projectPreviewId}
            previewMounted={handlePreviewMounted}
          />
        </div>
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
