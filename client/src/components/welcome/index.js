import React, { Fragment } from 'react';
import { Row, Col } from '@freecodecamp/react-bootstrap';
import PropTypes from 'prop-types';

import { Spacer } from '../helpers';
import { randomQuote } from '../../utils/get-words';

import './welcome.css';

// created outside the function, so that the quotes don't change unless the
// page is reloaded.

const { quote, author } = randomQuote();

function Welcome({ name }) {
  return (
    <Fragment>
      <Row>
        <Col sm={10} smOffset={1} xs={12}>
          <Spacer />
          <h1 className='text-center big-heading'>
            {name
              ? 'Welcome back, ' + name + '.'
              : 'Welcome to freeCodeCamp.org'}
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
    </Fragment>
  );
}

const propTypes = {
  name: PropTypes.string
};

Welcome.propTypes = propTypes;
Welcome.displayName = 'Welcome';

export default Welcome;
