import React from 'react';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Button, Spacer } from '@freecodecamp/ui';

import { openModal } from '../redux/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      openHelpModal: () => openModal('help')
    },
    dispatch
  );

interface ToolPanelProps {
  guideUrl?: string;
  forumTopicId?: number;
  openHelpModal: () => void;
  t: TFunction;
}

function ToolPanel({
  guideUrl,
  forumTopicId,
  openHelpModal,
  t
}: ToolPanelProps): JSX.Element {
  const hintText = forumTopicId
    ? t('buttons.get-hint')
    : t('buttons.search-the-forum');

  return (
    <div>
      {guideUrl && (
        <>
          <Button
            block={true}
            variant='primary'
            href={guideUrl}
            target='_blank'
          >
            {hintText}
          </Button>
          <Spacer size='xxs' />
        </>
      )}
      <Button block={true} variant='primary' onClick={openHelpModal}>
        {t('buttons.ask-for-help')}
      </Button>
    </div>
  );
}

ToolPanel.displayName = 'ProjectToolPanel';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ToolPanel));
