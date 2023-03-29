/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Button, Panel } from '@freecodecamp/react-bootstrap';
import React, { Component } from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { deleteUserToken } from '../../redux/actions';
import { FullWidthRow, Spacer } from '../helpers';

import './user-token.css';

type UserTokenProps = {
  deleteUserToken: () => void;
  t: TFunction;
};

const mapDispatchToProps = {
  deleteUserToken
};

class UserToken extends Component<UserTokenProps> {
  static displayName: string;

  deleteToken = () => {
    this.props.deleteUserToken();
  };

  render() {
    const { t } = this.props;

    return (
      <div data-cy='user-token' className='user-token text-center'>
        <FullWidthRow>
          <Panel className='user-panel'>
            <Panel.Heading>{t('user-token.title')}</Panel.Heading>
            <Spacer size='medium' />
            <p>{t('user-token.delete-p1')}</p>
            <FullWidthRow>
              <Spacer size='small' />
              <Button
                block={true}
                bsSize='lg'
                bsStyle='danger'
                className='btn-info'
                data-cy='delete-user-token'
                onClick={this.deleteToken}
                type='button'
              >
                {t('user-token.delete')}
              </Button>
              <Spacer size='medium' />
            </FullWidthRow>
          </Panel>
        </FullWidthRow>
      </div>
    );
  }
}

UserToken.displayName = 'UserToken';

export default connect(null, mapDispatchToProps)(withTranslation()(UserToken));
