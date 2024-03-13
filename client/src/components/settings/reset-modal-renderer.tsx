import React from 'react';
import i18n from 'i18next';
import NewResetModal from './new-reset-modal';
import OldResetModal from './old-reset-modal';

type ResetModalProps = {
  onHide: () => void;
  reset: () => void;
  show: boolean;
};

function ResetModalRenderer(props: ResetModalProps): JSX.Element {
  const isNewModalAvailable = i18n.exists('settings.danger.new-reset-version');

  return (
    <>
      {isNewModalAvailable ? (
        <NewResetModal {...props} />
      ) : (
        <OldResetModal {...props} />
      )}
    </>
  );
}

ResetModalRenderer.displayName = 'ResetModalRenderer';

export default ResetModalRenderer;
