/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Button } from '@freecodecamp/react-bootstrap';
import React, { Component } from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import {
  postWebhookToken,
  deleteWebhookToken,
  webhookTokenSelector
} from '../../redux';
import { ButtonSpacer } from '../helpers';
import WebhookGenerateModal from './webhook-generate-modal';
import WebhookRevokeModal from './webhook-revoke-modal';

import './webhook-token.css';

type WebhookTokenProps = {
  postWebhookToken: () => void;
  deleteWebhookToken: () => void;
  t: TFunction;
  webhookToken: string;
};

type WebhookTokenState = {
  webhookGenerateModal: boolean;
  webhookRevokeModal: boolean;
};

const mapStateToProps = createSelector(
  webhookTokenSelector,
  (webhookToken: string) => ({
    webhookToken
  })
);

const mapDispatchToProps = {
  postWebhookToken,
  deleteWebhookToken
};

class WebhookToken extends Component<WebhookTokenProps, WebhookTokenState> {
  static displayName: string;
  private tokenElRef = React.createRef<HTMLInputElement>();
  constructor(props: WebhookTokenProps) {
    super(props);

    this.state = {
      webhookGenerateModal: false,
      webhookRevokeModal: false
    };

    this.generateToken = this.generateToken.bind(this);
    this.revokeToken = this.revokeToken.bind(this);
  }

  generateToken = (toggleModal = true) => {
    this.props.postWebhookToken();
    if (toggleModal) this.toggleWebhookGenerateModal();
  };

  revokeToken = () => {
    this.props.deleteWebhookToken();
    this.toggleWebhookRevokeModal();
  };

  copyTokenToClipboard = () => {
    this.tokenElRef?.current?.select();
    document.execCommand('copy');
  };

  toggleWebhookGenerateModal = () => {
    return this.setState(state => ({
      ...state,
      webhookGenerateModal: !state.webhookGenerateModal
    }));
  };

  toggleWebhookRevokeModal = () => {
    return this.setState(state => ({
      ...state,
      webhookRevokeModal: !state.webhookRevokeModal
    }));
  };

  render() {
    const { webhookToken = '', t } = this.props;
    return (
      <div className='light-palette'>
        {t('webhook-token.copy-text')}
        <div className='webhook-button-row'>
          <input
            aria-label={webhookToken}
            className='webhook-token-input'
            data-autoselect=''
            readOnly={true}
            ref={this.tokenElRef}
            type='text'
            value={webhookToken}
          />
          <Button
            bsSize='sm'
            className='webhook-copy-btn'
            onClick={() => this.copyTokenToClipboard()}
            type='button'
          >
            {t('webhook-token.copy')}
          </Button>
        </div>
        <div className='webhook-button-row'>
          <Button
            bsSize='sm'
            className='webhook-generate-btn'
            onClick={
              webhookToken === ''
                ? () => this.generateToken(false)
                : () => this.toggleWebhookGenerateModal()
            }
            type='button'
            variant='outline-dark'
          >
            {t('webhook-token.generate')}
          </Button>
          <ButtonSpacer />
          <Button
            bsSize='sm'
            className='webhook-revoke-btn'
            onClick={
              webhookToken !== '' ? () => this.toggleWebhookRevokeModal() : null
            }
            type='button'
          >
            {t('webhook-token.revoke')}
          </Button>
        </div>

        <WebhookGenerateModal
          generate={() => this.generateToken()}
          onHide={() => this.toggleWebhookGenerateModal()}
          show={this.state.webhookGenerateModal}
        />

        <WebhookRevokeModal
          onHide={() => this.toggleWebhookRevokeModal()}
          revoke={() => this.revokeToken()}
          show={this.state.webhookRevokeModal}
        />
      </div>
    );
  }
}

WebhookToken.displayName = 'WebhookToken';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(WebhookToken));
