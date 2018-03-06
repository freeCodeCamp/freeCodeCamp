import React from 'react';
// import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const propTypes = {};

export default function NotFound() {
  return (
    <Alert bsStyle='danger'>
      <h4>Oh snap! Page not found!</h4>
      <p>
        Head back to
      </p>
        <a href='/challenges/current-challenge'>
            your current challenge
        </a>
    </Alert>
  );
}

NotFound.displayName = 'NotFound';
NotFound.propTypes = propTypes;
