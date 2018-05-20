import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import {
  Alert,
  Button,
  Col,
  ControlLabel,
  HelpBlock,
  Row
} from 'react-bootstrap';

import TB from '../Toggle-Button';
// import EmailForm from './EmailForm.jsx';
import { Link } from '../../../Router';
import { FullWidthRow } from '../../../helperComponents';
import SectionHeader from './SectionHeader.jsx';
import { userSelector } from '../../../redux';
import { onRouteUpdateEmail, updateMyEmail, updateUserBackend } from '../redux';

/**
  Removed functionality until we can update auth0 at the same time

  <FullWidthRow>
    <UpdateEmailButton />
  </FullWidthRow>


  <FullWidthRow>
    <EmailForm
      initialValues={{ email, confrimEmail: ''}}
    />
  </FullWidthRow>
  <Spacer />
 */

const mapStateToProps = createSelector(
  userSelector,
  ({
    email,
    isEmailVerified,
    sendQuincyEmail
  }) => ({
    email,
    initialValues: { email },
    isEmailVerified,
    sendQuincyEmail
  })
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateMyEmail,
    updateUserBackend
  }, dispatch);
}

const propTypes = {
  email: PropTypes.string,
  isEmailVerified: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      flag: PropTypes.string,
      label: PropTypes.string,
      bool: PropTypes.bool
    })
  ),
  sendQuincyEmail: PropTypes.bool,
  updateMyEmail: PropTypes.func.isRequired,
  updateUserBackend: PropTypes.func.isRequired
};

export function UpdateEmailButton() {
  return (
    <Link
      style={{ textDecoration: 'none' }}
      to={ onRouteUpdateEmail() }
      >
      <Button
        block={ true }
        bsSize='lg'
        bsStyle='primary'
        className='btn-link-social'
        >
        Edit
      </Button>
    </Link>
  );
}

class EmailSettings extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ email }) {

    this.props.updateMyEmail(email);
  }

  render() {
    const {
      email,
      isEmailVerified,
      sendQuincyEmail,
      updateUserBackend
    } = this.props;
    if (!email) {
      return (
        <div>
          <FullWidthRow>
            <p className='large-p text-center'>
              You do not have an email associated with this account.
            </p>
          </FullWidthRow>


        </div>
      );
    }
    return (
      <div className='email-settings'>
        <SectionHeader>
          Email Settings
        </SectionHeader>
        {
          isEmailVerified ? null :
          <FullWidthRow>
            <HelpBlock>
              <Alert bsStyle='info'>
              A change of email address has not been verified.
              To use your new email, you must verify it first using the link
              we sent you.
              </Alert>
            </HelpBlock>
          </FullWidthRow>
        }


        <FullWidthRow>
          <Row className='inline-form-field' key='sendQuincyEmail'>
            <Col sm={ 8 }>
              <ControlLabel htmlFor='sendQuincyEmail'>
                Send me Quincy&apos;s weekly email
              </ControlLabel>
            </Col>
            <Col sm={ 4 }>
              <TB
                id='sendQuincyEmail'
                name='sendQuincyEmail'
                onChange={
                  () => updateUserBackend({
                    sendQuincyEmail: !sendQuincyEmail
                  })
                }
                value={ sendQuincyEmail }
              />
            </Col>
          </Row>
        </FullWidthRow>
      </div>
    );
  }
}

EmailSettings.displayName = 'EmailSettings';
EmailSettings.propTypes = propTypes;

export default reduxForm(
  {
    form: 'email-settings',
    fields: [ 'email' ]
  },
  mapStateToProps,
  mapDispatchToProps
)(EmailSettings);
