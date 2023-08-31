import React from 'react';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Button } from '@freecodecamp/ui';

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
  openHelpModal: () => void;
  t: TFunction;
}

function ToolPanel({
  guideUrl,
  openHelpModal,
  t
}: ToolPanelProps): JSX.Element {
  return (
    <>
      {guideUrl && (
        <Button
          block={true}
          variant='primary'
          className='btn-invert'
          href={guideUrl}
          target='_blank'
        >
          {t('buttons.get-hint')}
        </Button>
      )}
      <Button
        block={true}
        variant='primary'
        className='btn-invert'
        onClick={openHelpModal}
        style={{ marginTop: '5px' }}
      >
        {t('buttons.ask-for-help')}
      </Button>
    </>
  );
}

ToolPanel.displayName = 'ProjectToolPanel';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ToolPanel));
