import React from 'react';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Button, Spacer } from '@freecodecamp/ui';

import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';

import ChallengeHelp from '../../../components/challenge-help';

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
  superBlock: SuperBlocks;
  openHelpModal: () => void;
  t: TFunction;
}

function ToolPanel({
  guideUrl,
  superBlock,
  openHelpModal,
  t
}: ToolPanelProps): JSX.Element {
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
            {t('buttons.get-hint')}
          </Button>
          <Spacer size='xxs' />
        </>
      )}
      <ChallengeHelp superBlock={superBlock} onAskForHelp={openHelpModal} />
    </div>
  );
}

ToolPanel.displayName = 'ProjectToolPanel';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ToolPanel));
