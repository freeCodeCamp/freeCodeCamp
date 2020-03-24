import React from 'react';
import PropTypes from 'prop-types';
import { Link, Spacer, Loader, FullWidthRow } from '../helpers';
import { Row, Col } from '@freecodecamp/react-bootstrap';
import { apiLocation } from '../../../config/env.json';
import { randomQuote } from '../../utils/get-words';

import './intro.css';

const propTypes = {
  complete: PropTypes.bool,
  isSignedIn: PropTypes.bool,
  name: PropTypes.string,
  navigate: PropTypes.func,
  pending: PropTypes.bool,
  slug: PropTypes.string,
  username: PropTypes.string
};

function Intro({
  isSignedIn,
  username,
  name,
  navigate,
  pending,
  complete,
  slug
}) {
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
            <h1 className='text-center big-heading'>
              {name ? `Welcome back, ${name}.` : `Welcome to freeCodeCamp.org`}
            </h1>
            <Spacer />
          </Col>
        </Row>
        <FullWidthRow className='button-group'>
          <Link
            className='btn btn-lg btn-primary btn-block'
            to={`/${username}`}
          >
            View my Portfolio
          </Link>
          <Link className='btn btn-lg btn-primary btn-block' to='/settings'>
            Update my account settings
          </Link>
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
          <Col sm={10} smOffset={1} xs={12}>
            <Spacer />
            <h4>
              If you are new to coding, we recommend you{' '}
              <Link to={slug}>start at the beginning</Link>.
            </h4>
          </Col>
        </Row>
      </>
    );
  } else {
    return (
      <>
        <Row>
          <Col sm={10} smOffset={1} xs={12}>
            <Spacer />
            <h1 className='big-heading text-center'>
              Welcome to freeCodeCamp.org
            </h1>
            <Spacer />
            <h2 className='medium-heading'>Learn to code.</h2>
            <h2 className='medium-heading'>Build projects.</h2>
            <h2 className='medium-heading'>Earn certifications.</h2>
            <h2 className='medium-heading'>
              Since 2014, more than 40,000 freeCodeCamp.org graduates have
              gotten jobs at tech companies including:
            </h2>
            <div className='logo-row'>
              <h2 className='medium-heading'>Apple</h2>
              <h2 className='medium-heading'>Google</h2>
              <h2 className='medium-heading'>Amazon</h2>
              <h2 className='medium-heading'>Microsoft</h2>
              <h2 className='medium-heading'>Spotify</h2>
            </div>
          </Col>
          <Col md={6} mdOffset={3} sm={8} smOffset={2} xs={12}>
            <button
              className={'btn-cta-big signup-btn btn-cta center-block'}
              onClick={() => {
                navigate(`${apiLocation}/signin`);
              }}
            >
              Sign in to save your progress (it's free)
            </button>
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
