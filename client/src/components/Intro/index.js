import React from 'react';
import PropTypes from 'prop-types';
import { Link, Spacer, Loader, FullWidthRow } from '../helpers';
import { Row, Col } from '@freecodecamp/react-bootstrap';
import { randomQuote } from '../../utils/get-words';
import CurrentChallengeLink from '../helpers/CurrentChallengeLink';
import IntroDescription from './components/IntroDescription';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

import './intro.css';
import Login from '../Header/components/Login';

const propTypes = {
  complete: PropTypes.bool,
  completedChallengeCount: PropTypes.number,
  isSignedIn: PropTypes.bool,
  name: PropTypes.string,
  pending: PropTypes.bool,
  slug: PropTypes.string,
  username: PropTypes.string
};

function Intro({
  isSignedIn,
  name,
  pending,
  complete,
  completedChallengeCount,
  slug
}) {
  const { t } = useTranslation();
  if (pending && !complete) {
    return (
      <>
        <Spacer />
        <Loader />
        <Spacer />
      </>
    );
  } else if (isSignedIn) {
    const { quote, author } = randomQuote();
    return (
      <>
        <Row>
          <Col sm={10} smOffset={1} xs={12}>
            <Spacer />
            <h1 className='text-center '>
              {name
                ? `${t('learn.welcome-1')} ${name}.`
                : `${t('learn.welcome-2')}`}
            </h1>
            <Spacer />
          </Col>
        </Row>
        <FullWidthRow>
          <Link className='btn btn-lg btn-primary btn-block' to='/settings'>
            <Trans>buttons.update-settings</Trans>
          </Link>
          {completedChallengeCount > 0 ? (
            <CurrentChallengeLink isLargeBtn={true}>
              <Trans>buttons.current-challenge</Trans>
            </CurrentChallengeLink>
          ) : (
            ''
          )}
        </FullWidthRow>
        <Spacer />
        <Row className='text-center quote-partial'>
          <Col sm={10} smOffset={1} xs={12}>
            <blockquote className='blockquote'>
              <span>
                <q>{quote}</q>
                <footer className='quote-author blockquote-footer'>
                  <cite>{author}</cite>
                </footer>
              </span>
            </blockquote>
          </Col>
        </Row>
        <Row>
          {completedChallengeCount < 15 ? (
            <Col sm={10} smOffset={1} xs={12}>
              <Spacer />
              <h4>
                <Trans>buttons.start-at-beginning-text</Trans>
                <Link to={slug}>
                  <Trans>buttons.start-at-beginning-link</Trans>
                </Link>
                .
              </h4>
            </Col>
          ) : (
            ''
          )}
        </Row>
      </>
    );
  } else {
    return (
      <>
        <Row>
          <Col sm={8} smOffset={2} xs={12}>
            <Spacer />
            <h1>
              <Trans>learn.heading</Trans>
            </h1>
            <Spacer size={1} />
          </Col>
          <IntroDescription />
          <Col sm={8} smOffset={2} xs={12}>
            <Spacer />
            <Login block={true}>
              <Trans>buttons.logged-out-cta-btn</Trans>
            </Login>
          </Col>
        </Row>
        <Spacer />
      </>
    );
  }
}

Intro.propTypes = propTypes;
Intro.displayName = 'Intro';

export default Intro;
