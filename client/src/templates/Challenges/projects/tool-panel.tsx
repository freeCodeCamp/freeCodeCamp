import React from 'react';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Button } from '@freecodecamp/ui';

import { openModal } from '../redux/actions';
import { ButtonLink, Spacer } from '../../../components/helpers';

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
  openHelpModal: () => void;
  t: TFunction;
}

function ToolPanel({
  guideUrl,
  openHelpModal,
  t
}: ToolPanelProps): JSX.Element {
  return (
    <div>
      {guideUrl && (
        <>
          <ButtonLink block={true} href={guideUrl} target='_blank'>
            {t('buttons.get-hint')}
          </ButtonLink>
          <Spacer size='xxSmall' />
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
