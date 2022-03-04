/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Button, Panel } from '@freecodecamp/react-bootstrap';
import React, { Component } from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import {
  postWebhookToken,
  deleteWebhookToken,
  webhookTokenSelector
} from '../../redux';
import { ButtonSpacer, FullWidthRow, Spacer } from '../helpers';
import WebhookDeleteModal from './webhook-delete-modal';

import './webhook-token.css';

type WebhookTokenProps = {
  deleteWebhookToken: () => void;
  isChallengePage?: boolean;
  postWebhookToken: () => void;
  t: TFunction;
  webhookToken: string | null;
};

type WebhookTokenState = {
  webhookDeleteModal: boolean;
};

const mapStateToProps = createSelector(
  webhookTokenSelector,
  (webhookToken: string | null) => ({
    webhookToken
  })
);

const mapDispatchToProps = {
  postWebhookToken,
  deleteWebhookToken
};

class WebhookToken extends Component<WebhookTokenProps, WebhookTokenState> {
  static displayName: string;
  constructor(props: WebhookTokenProps) {
    super(props);

    this.state = {
      webhookDeleteModal: false
    };

    this.createToken = this.createToken.bind(this);
    this.deleteToken = this.deleteToken.bind(this);
  }

  createToken = () => {
    this.props.postWebhookToken();
  };

  deleteToken = () => {
    this.props.deleteWebhookToken();
    this.toggleWebhookDeleteModal();
  };

  toggleWebhookDeleteModal = () => {
    return this.setState(state => ({
      ...state,
      webhookDeleteModal: !state.webhookDeleteModal
    }));
  };

  render() {
    const { isChallengePage = false, t, webhookToken = null } = this.props;

    return isChallengePage ? (
      <>
        {!webhookToken && (
          <div className='alert alert-info'>
            <p>{t('webhook-token.create-p1')}</p>
            <Spacer />
            <Button
              block={true}
              bsSize='lg'
              onClick={() => this.createToken()}
              type='button'
            >
              {t('webhook-token.create')}
            </Button>
          </div>
        )}
      </>
    ) : (
      <div className='webhook-token text-center'>
        <FullWidthRow>
          <Panel className='webhook-panel'>
            <Panel.Heading>{t('webhook-token.title')}</Panel.Heading>
            <Spacer />
            {!webhookToken ? (
              <p>{t('webhook-token.create-p2')}</p>
            ) : (
              <p>{t('webhook-token.delete-p1')}</p>
            )}
            <FullWidthRow>
              <input
                aria-label='Webhook token'
                className='webhook-token-input'
                readOnly={true}
                type='text'
                value={webhookToken || ''}
              />
              <ButtonSpacer />
              {!webhookToken ? (
                <Button
                  block={true}
                  bsSize='lg'
                  bsStyle='danger'
                  className='btn-info'
                  onClick={() => this.createToken()}
                  type='button'
                >
                  {t('webhook-token.create')}
                </Button>
              ) : (
                <Button
                  block={true}
                  bsSize='lg'
                  bsStyle='danger'
                  className='btn-info'
                  onClick={() => this.toggleWebhookDeleteModal()}
                  type='button'
                >
                  {t('webhook-token.delete')}
                </Button>
              )}
              <Spacer />
            </FullWidthRow>
          </Panel>

          <WebhookDeleteModal
            deleteFunction={() => this.deleteToken()}
            onHide={() => this.toggleWebhookDeleteModal()}
            show={this.state.webhookDeleteModal}
          />
        </FullWidthRow>
      </div>
    );
  }
}

WebhookToken.displayName = 'WebhookToken';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(WebhookToken));
