import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  Panel,
  FormControl,
  FormGroup,
  ControlLabel,
  Button,
  Col,
  Row
} from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';
import { TFunction, Trans, withTranslation } from 'react-i18next';

import Login from '../components/Header/components/Login';

import {
  isSignedInSelector,
  userFetchStateSelector,
  userSelector,
  reportUser
} from '../redux';
import { Spacer, Loader, FullWidthRow } from '../components/helpers';

interface IShowUserProps {
  email: string;
  isSignedIn: boolean;
  reportUser: (payload: {
    username: string;
    reportDescription: string;
  }) => void;
  t: TFunction;
  userFetchState: {
    pending: boolean;
    complete: boolean;
    errored: boolean;
  };
  username: string;
}

const mapStateToProps = createSelector(
  isSignedInSelector,
  userFetchStateSelector,
  userSelector,
  (
    isSignedIn,
    userFetchState: IShowUserProps['userFetchState'],
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

class ShowUser extends Component<IShowUserProps> {
  state: {
    textarea: string;
  };
  constructor(props: IShowUserProps) {
    super(props);

    this.state = {
      textarea: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const textarea = e.target.value.slice();
    return this.setState({
      textarea
    });
  }

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { textarea: reportDescription } = this.state;
    const { username, reportUser } = this.props;
    return reportUser({ username, reportDescription });
  }

  render() {
    const { username, isSignedIn, userFetchState, email, t } = this.props;
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

    const { textarea } = this.state;
    const placeholderText = t('report.details');
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
            {/* eslint-disable @typescript-eslint/unbound-method */}
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId='report-user-textarea'>
                <ControlLabel>{t('report.what')}</ControlLabel>
                <FormControl
                  componentClass='textarea'
                  onChange={this.handleChange}
                  placeholder={placeholderText}
                  value={textarea}
                />
              </FormGroup>
              <Button block={true} bsStyle='primary' type='submit'>
                {t('report.submit')}
              </Button>
              <Spacer />
            </form>
            {/* eslint-disable @typescript-eslint/unbound-method */}
          </Col>
        </Row>
      </>
    );
  }
}

// @ts-expect-error Config might need to be remedied, or component transformed into F.C.
ShowUser.displayName = 'ShowUser';

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(ShowUser)
);
