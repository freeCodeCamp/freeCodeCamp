import React, { Fragment } from 'react';
import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { Spacer, Link } from '../helpers';
import { randomQuote } from '../../utils/get-words';

import './welcome.css';

function Welcome({ name }) {
  const { quote, author } = randomQuote();
  return (
    <Fragment>
      <Helmet>
        <title>Welcome | freeCodeCamp.org</title>
      </Helmet>
      <main>
        <Grid>
          <Row>
            <Col sm={10} smOffset={1} xs={12}>
              <Spacer />
              <h1 className='text-center big-heading'>
                Welcome {name ? name : 'Camper'}!
              </h1>
            </Col>
          </Row>
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
              <h2 className='text-center medium-heading'>
                What would you like to do today?
              </h2>
            </Col>
          </Row>
          <Spacer />
          <Row>
            <Col sm={10} smOffset={1} xs={12}>
              <Link className='btn btn-lg btn-primary btn-block' to='/learn'>
                Build Projects and Earn Certifications
              </Link>
              <Link className='btn btn-lg btn-primary btn-block' to='/settings'>
                Update Your Developer Portfolio
              </Link>
              <Link
                className='btn btn-lg btn-primary btn-block'
                external={true}
                to='/news'
              >
                Read Developer News
              </Link>
              <Link
                className='btn btn-lg btn-primary btn-block'
                external={true}
                to='/forum'
              >
                Help Developers on the Forum
              </Link>
            </Col>
          </Row>
          <Spacer size={4} />
        </Grid>
      </main>
    </Fragment>
  );
}

const propTypes = {
  name: PropTypes.string
};

Welcome.propTypes = propTypes;
Welcome.displayName = 'Welcome';

export default Welcome;
