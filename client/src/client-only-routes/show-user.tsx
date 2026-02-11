import React, { useState } from 'react';
import type { TFunction } from 'i18next';
import { Trans, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Panel,
  Col,
  Row,
  Button,
  Spacer
} from '@freecodecamp/ui';

import Login from '../components/Header/components/login';
import { Loader, FullWidthRow } from '../components/helpers';
import { reportUser } from '../redux/actions';
import { userFetchStateSelector, userSelector } from '../redux/selectors';
import { UserFetchState } from '../redux/prop-types';

type User = { email: string } | null;

interface ShowUserProps {
  user: User;
  reportUser: (payload: {
    username: string;
    reportDescription: string;
  }) => void;
  t: TFunction;
  userFetchState: UserFetchState;
  username: string;
}

const mapStateToProps = createSelector(
  userFetchStateSelector,
  userSelector,
  (userFetchState: UserFetchState, user: User) => ({
    userFetchState,
    user
  })
);

const mapDispatchToProps = {
  reportUser
};

export function ShowUser({
  user,
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

  if (errored || !user) {
    return (
      <main>
        <FullWidthRow>
          <Spacer size='l' />
          <Panel variant='primary' className='text-center'>
            <Panel.Heading>
              <Panel.Title>{t('report.sign-in')}</Panel.Title>
            </Panel.Heading>
            <Panel.Body className='text-center'>
              <Spacer size='l' />
              <Col md={6} mdOffset={3} sm={8} smOffset={2} xs={12}>
                <Login block={true}>{t('buttons.click-here')}</Login>
              </Col>
              <Spacer size='xl' />
            </Panel.Body>
          </Panel>
        </FullWidthRow>
      </main>
    );
  }

  return (
    <>
      <Spacer size='l' />
      <Row className='text-center overflow-fix'>
        <Col sm={8} smOffset={2} xs={12}>
          <h2>{t('report.portfolio-2', { username: username })}</h2>
        </Col>
      </Row>
      <Row className='overflow-fix'>
        <Col sm={6} smOffset={3} xs={12}>
          <p>
            <Trans i18nKey='report.notify-1' values={{ email: user.email }}>
              <strong>{'{{email}}'}</strong>
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
            <Button block={true} variant='primary' type='submit'>
              {t('report.submit')}
            </Button>
            <Spacer size='m' />
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
