import {
  Panel,
  FormControl,
  FormGroup,
  ControlLabel,
  Button,
  Col,
  Row
} from '@freecodecamp/react-bootstrap';
import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { TFunction, Trans, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Login from '../components/Header/components/Login';

import { Spacer, Loader, FullWidthRow } from '../components/helpers';
import {
  isSignedInSelector,
  userFetchStateSelector,
  userSelector,
  reportUser
} from '../redux';
import { UserFetchState } from '../redux/prop-types';

interface ShowUserProps {
  email: string;
  isSignedIn: boolean;
  reportUser: (payload: {
    username: string;
    reportDescription: string;
  }) => void;
  t: TFunction;
  userFetchState: UserFetchState;
  username: string;
}

const mapStateToProps = createSelector(
  isSignedInSelector,
  userFetchStateSelector,
  userSelector,
  (
    isSignedIn,
    userFetchState: UserFetchState,
    { email }: { email: string }
  ) => ({
    isSignedIn,
    userFetchState,
    email
  })
);

const mapDispatchToProps = {
  reportUser
};

function ShowUser({
  email,
  isSignedIn,
  reportUser,
  t,
  userFetchState,
  username
}: ShowUserProps) {
  const [textarea, setTextarea] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setTextarea(e.target.value.slice());
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    reportUser({ username, reportDescription: textarea });
  }

  const { pending, complete, errored } = userFetchState;
  if (pending && !complete) {
    return <Loader fullScreen={true} />;
  }

  if ((complete || errored) && !isSignedIn) {
    return (
      <main>
        <FullWidthRow>
          <Spacer size={2} />
          <Panel bsStyle='info' className='text-center'>
            <Panel.Heading>
              <Panel.Title componentClass='h3'>
                {t('report.sign-in')}
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body className='text-center'>
              <Spacer size={2} />
              <Col md={6} mdOffset={3} sm={8} smOffset={2} xs={12}>
                <Login block={true}>{t('buttons.click-here')}</Login>
              </Col>
              <Spacer size={3} />
            </Panel.Body>
          </Panel>
        </FullWidthRow>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>{t('report.portfolio')} | freeCodeCamp.org</title>
      </Helmet>
      <Spacer size={2} />
      <Row className='text-center overflow-fix'>
        <Col sm={8} smOffset={2} xs={12}>
          <h2>{t('report.portfolio-2', { username: username })}</h2>
        </Col>
      </Row>
      <Row className='overflow-fix'>
        <Col sm={6} smOffset={3} xs={12}>
          <p>
            <Trans i18nKey='report.notify-1'>
              <strong>{{ email }}</strong>
            </Trans>
          </p>
          <p>{t('report.notify-2')}</p>
          <form onSubmit={handleSubmit}>
            <FormGroup controlId='report-user-textarea'>
              <ControlLabel>{t('report.what')}</ControlLabel>
              <FormControl
                componentClass='textarea'
                onChange={handleChange}
                placeholder={t('report.details')}
                value={textarea}
              />
            </FormGroup>
            <Button block={true} bsStyle='primary' type='submit'>
              {t('report.submit')}
            </Button>
            <Spacer />
          </form>
        </Col>
      </Row>
    </>
  );
}

ShowUser.displayName = 'ShowUser';

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(ShowUser)
);
