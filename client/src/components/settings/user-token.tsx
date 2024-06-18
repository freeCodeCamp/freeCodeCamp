import React, { Component } from 'react';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Panel, Button } from '@freecodecamp/ui';

import { deleteUserToken } from '../../redux/actions';
import { FullWidthRow, Spacer } from '../helpers';

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
      <FullWidthRow>
        <Panel variant='info' className='text-center'>
          <Panel.Heading>{t('user-token.title')}</Panel.Heading>
          <Spacer size='medium' />
          <Panel.Body>
            <p>{t('user-token.delete-p1')}</p>
            <FullWidthRow>
              <Spacer size='small' />
              <Button
                block={true}
                size='large'
                variant='info'
                onClick={this.deleteToken}
                type='button'
              >
                {t('user-token.delete')}
              </Button>
              <Spacer size='medium' />
            </FullWidthRow>
          </Panel.Body>
        </Panel>
      </FullWidthRow>
    );
  }
}

UserToken.displayName = 'UserToken';

export default connect(null, mapDispatchToProps)(withTranslation()(UserToken));
