/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Button, Panel } from '@freecodecamp/react-bootstrap';
import React, { Component } from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { deleteWebhookToken } from '../../redux';
import { ButtonSpacer, FullWidthRow, Spacer } from '../helpers';

import './webhook-token.css';

type WebhookTokenProps = {
  deleteWebhookToken: () => void;
  t: TFunction;
};

const mapDispatchToProps = {
  deleteWebhookToken
};

class WebhookToken extends Component<WebhookTokenProps> {
  static displayName: string;

  deleteToken = () => {
    this.props.deleteWebhookToken();
  };

  render() {
    const { t } = this.props;

    return (
      <div className='webhook-token text-center'>
        <FullWidthRow>
          <Panel className='webhook-panel'>
            <Panel.Heading>{t('webhook-token.title')}</Panel.Heading>
            <Spacer />
            <p>{t('webhook-token.delete-p1')}</p>
            <FullWidthRow>
              <ButtonSpacer />
              <Button
                block={true}
                bsSize='lg'
                bsStyle='danger'
                className='btn-info'
                onClick={this.deleteToken}
                type='button'
              >
                {t('webhook-token.delete')}
              </Button>
              <Spacer />
            </FullWidthRow>
          </Panel>
        </FullWidthRow>
      </div>
    );
  }
}

WebhookToken.displayName = 'WebhookToken';

export default connect(
  null,
  mapDispatchToProps
)(withTranslation()(WebhookToken));
