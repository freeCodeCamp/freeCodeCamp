import React from 'react';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Button, Spacer } from '@freecodecamp/ui';

import { openModal } from '../redux/actions';
import { generateSearchLink } from '../components/help-modal';

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
  challengeTitle?: string;
  challengeBlock?: string;
  superBlock?: string;
  openHelpModal: () => void;
  t: TFunction;
}

function ToolPanel({
  guideUrl,
  challengeTitle,
  challengeBlock,
  superBlock,
  openHelpModal,
  t
}: ToolPanelProps): JSX.Element {
  const hintUrl = guideUrl
    ? guideUrl
    : challengeTitle && challengeBlock && superBlock
      ? generateSearchLink(challengeTitle, challengeBlock, superBlock)
      : '';
  return (
    <div>
      {hintUrl && (
        <>
          <Button
            block={true}
            variant='primary'
            href={hintUrl}
            target='_blank'
          >
            {t('buttons.get-hint')}
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
