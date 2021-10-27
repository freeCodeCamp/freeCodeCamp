import { Button } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { openModal } from '../redux';

import './tool-panel.css';

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

export function ToolPanel({
  guideUrl,
  openHelpModal,
  t
}: ToolPanelProps): JSX.Element {
  return (
    <div className='tool-panel-group project-tool-panel'>
      {guideUrl && (
        <Button
          block={true}
          bsStyle='primary'
          className='btn-invert'
          href={guideUrl}
          target='_blank'
        >
          {t('buttons.get-hint')}
        </Button>
      )}
      <Button
        block={true}
        bsStyle='primary'
        className='btn-invert'
        onClick={openHelpModal}
      >
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
