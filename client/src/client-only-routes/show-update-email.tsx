import { Link } from 'gatsby';
import { isString } from 'lodash-es';
import React, { useState, type FormEvent, type ChangeEvent } from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import isEmail from 'validator/lib/isEmail';
import {
  Container,
  FormGroup,
  FormControl,
  ControlLabel,
  Col,
  Row,
  Button
} from '@freecodecamp/ui';

import envData from '../../config/env.json';
import { Spacer, Loader } from '../components/helpers';
import './show-update-email.css';
import { isSignedInSelector, userSelector } from '../redux/selectors';
import { hardGoTo as navigate } from '../redux/actions';
import { updateMyEmail } from '../redux/settings/actions';
import { maybeEmailRE } from '../utils';

const { apiLocation } = envData;

interface ShowUpdateEmailProps {
  isNewEmail: boolean;
  updateMyEmail: (e: string) => void;
  path?: string;
  isSignedIn: boolean;
  navigate: (location: string) => void;
}

const mapStateToProps = createSelector(
  userSelector,
  isSignedInSelector,
  (
    { email, emailVerified }: { email: string; emailVerified: boolean },
    isSignedIn
  ) => ({
    isNewEmail: !email || emailVerified,
    isSignedIn
  })
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ updateMyEmail, navigate }, dispatch);

function ShowUpdateEmail({
  isNewEmail,
  updateMyEmail,
  isSignedIn,
  navigate
}: ShowUpdateEmailProps) {
  const { t } = useTranslation();
  const [emailValue, setEmailValue] = useState('');

  if (!isSignedIn) {
    navigate(`${apiLocation}/signin`);
    return <Loader fullScreen={true} />;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    updateMyEmail(emailValue);
  }

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const newEmailValue = event.target.value;
    if (!isString(newEmailValue)) {
      return null;
    }
    setEmailValue(newEmailValue);
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
        <h2
          className='text-center'
          data-playwright-test-label='update-email-heading'
        >
          {t('misc.update-email-2')}
        </h2>
        <Row>
          <Col sm={6} smOffset={3}>
            <Row>
              <form
                onSubmit={handleSubmit}
                data-playwright-test-label='update-email-form'
              >
                <FormGroup
                  className='update-email-field'
                  validationState={getEmailValidationState()}
                >
                  <ControlLabel htmlFor='emailInput'>
                    {t('misc.email')}
                  </ControlLabel>
                  <FormControl
                    id='emailInput'
                    onChange={onChange}
                    placeholder='camperbot@example.com'
                    required={true}
                    type='email'
                  />
                </FormGroup>
                <Button
                  block={true}
                  size='large'
                  variant='primary'
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

ShowUpdateEmail.displayName = 'ShowUpdateEmail';

export default connect(mapStateToProps, mapDispatchToProps)(ShowUpdateEmail);
