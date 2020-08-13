import React from 'react';
import PropTypes from 'prop-types';
import { Link, Spacer, Loader, FullWidthRow } from '../helpers';
import { Row, Col } from '@freecodecamp/react-bootstrap';
import { apiLocation, forumLocation } from '../../../config/env.json';
import { randomQuote } from '../../utils/get-words';
import CurrentChallengeLink from '../helpers/CurrentChallengeLink';

import './intro.css';

const propTypes = {
  complete: PropTypes.bool,
  completedChallengeCount: PropTypes.number,
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
  completedChallengeCount,
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
          {completedChallengeCount > 0 ? (
            <CurrentChallengeLink isLargeBtn={true}>
              Go to current challenge
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
                If you are new to coding, we recommend you{' '}
                <Link to={slug}>start at the beginning</Link>.
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
        <Row className='intro-description'>
          <Col sm={10} smOffset={1} xs={12}>
            <Spacer />
            <h1 className='big-heading text-center'>
              Welcome to freeCodeCamp's curriculum.
            </h1>
          </Col>
          <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
            <Spacer size={2} />
            <strong>Please slow down and read this.</strong>
            <Spacer />
            <p>
              freeCodeCamp is a proven path to your first software developer
              job.
            </p>
            <p>
              More than 40,000 people have gotten developer jobs after
              completing this – including at big companies like Google and
              Microsoft.
            </p>
            <p>
              If you are new to programming, we recommend you start at the
              beginning and earn these certifications in order.
            </p>
            <p>
              To earn each certification, build its 5 required projects and get
              all their tests to pass.
            </p>
            <p>
              You can add these certifications to your résumé or LinkedIn. But
              more important than the certifications is the practice you get
              along the way.
            </p>
            <p>If you feel overwhelmed, that is normal. Programming is hard.</p>
            <p>Practice is the key. Practice, practice, practice.</p>
            <p>
              And this curriculum will give you thousands of hours of hands-on
              programming practice.
            </p>
            <p>
              And if you want to learn more math and computer science theory, we
              also have thousands of hours of video courses on{' '}
              <Link className='inline' to='https://youtube.com/freecodecamp'>
                freeCodeCamp's YouTube channel
              </Link>
              .
            </p>
            <p>
              If you want to get a developer job or freelance clients,
              programming skills will be just part of the puzzle. You also need
              to build your personal network and your reputation as a developer.
            </p>
            <p>
              You can do this on Twitter and GitHub, and also on{' '}
              <Link className='inline' to={forumLocation}>
                the freeCodeCamp forum
              </Link>
              .
            </p>
            <p>Happy coding.</p>
            <Spacer />
          </Col>

          <Col sm={8} smOffset={2} xs={12}>
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
