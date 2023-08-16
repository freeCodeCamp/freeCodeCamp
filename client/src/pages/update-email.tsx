import {
  FormGroup,
  FormControl,
  ControlLabel,
  Row,
  Col,
  Button
} from '@freecodecamp/react-bootstrap';
import { Link } from 'gatsby';
import { isString } from 'lodash-es';
import React, { useState, type FormEvent, type ChangeEvent } from 'react';
import Helmet from 'react-helmet';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import isEmail from 'validator/lib/isEmail';

import { Container } from '@freecodecamp/ui';
import { Spacer } from '../components/helpers';
import './update-email.css';
import { userSelector } from '../redux/selectors';
import { updateMyEmail } from '../redux/settings/actions';
import { maybeEmailRE } from '../utils';

interface UpdateEmailProps {
  isNewEmail: boolean;
  t: TFunction;
  updateMyEmail: (e: string) => void;
}

const mapStateToProps = createSelector(
  userSelector,
  ({ email, emailVerified }: { email: string; emailVerified: boolean }) => ({
    isNewEmail: !email || emailVerified
  })
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ updateMyEmail }, dispatch);

function UpdateEmail({ isNewEmail, t, updateMyEmail }: UpdateEmailProps) {
  const [emailValue, setEmailValue] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    updateMyEmail(emailValue);
  }

  function onChange(event: ChangeEvent) {
    const change = (event.target as HTMLInputElement).value;
    if (!isString(change)) {
      return null;
    }
    setEmailValue(change);
    return null;
  }

  function getEmailValidationState() {
    if (maybeEmailRE.test(emailValue)) {
      return isEmail(emailValue) ? 'success' : 'error';
    }
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{t('misc.update-email-1')} | freeCodeCamp.org</title>
      </Helmet>
      <Container>
        <Spacer size='medium' />
        <h2 className='text-center'>{t('misc.update-email-2')}</h2>
        <Row>
          <Col sm={6} smOffset={3}>
            <Row>
              <form onSubmit={handleSubmit}>
                <FormGroup
                  controlId='emailInput'
                  validationState={getEmailValidationState()}
                >
                  <Col
                    className='email-label'
                    // TODO
                    componentClass={ControlLabel as unknown}
                    sm={2}
                  >
                    {t('misc.email')}
                  </Col>
                  <Col sm={10}>
                    <FormControl
                      onChange={onChange}
                      placeholder='camperbot@example.com'
                      required={true}
                      type='email'
                    />
                  </Col>
                </FormGroup>
                <Button
                  block={true}
                  bsSize='lg'
                  bsStyle='primary'
                  disabled={getEmailValidationState() !== 'success'}
                  type='submit'
                >
                  {isNewEmail
                    ? t('buttons.update-email')
                    : t('buttons.verify-email')}
                </Button>
              </form>
              <p className='text-center'>
                <Link to='/signout'>{t('buttons.sign-out')}</Link>
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

UpdateEmail.displayName = 'Update-Email';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(UpdateEmail));
