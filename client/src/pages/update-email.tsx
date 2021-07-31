import React, { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { Link } from 'gatsby';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Grid,
  Row,
  Col,
  Button
} from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';
import isEmail from 'validator/lib/isEmail';
import { isString } from 'lodash-es';
import { TFunction, withTranslation } from 'react-i18next';

import { Spacer } from '../components/helpers';
import './update-email.css';
import { userSelector } from '../redux';
import { updateMyEmail } from '../redux/settings';
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
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <Spacer />
      <h2 className='text-center'>{t('misc.update-email-2')}</h2>
      <Grid>
        <Row>
          <Col sm={6} smOffset={3}>
            <Row>
              <Form horizontal={true} onSubmit={handleSubmit}>
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
              </Form>
              <p className='text-center'>
                <Link to='/signout'>{t('buttons.sign-out')}</Link>
              </p>
            </Row>
          </Col>
        </Row>
      </Grid>
    </>
  );
}

UpdateEmail.displayName = 'Update-Email';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(UpdateEmail));
