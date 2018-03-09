import React from 'react';
// import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const propTypes = {};

export default function NotFound() {
  return (
    <Alert bsStyle='danger'>
      <h4>We couldn't find a page for that address.</h4>
      <p>
        Head back to &thinsp;
        <a href='/challenges/current-challenge'>
            your current challenge
        </a>
        .
      </p>
    </Alert>
  );
}

NotFound.displayName = 'NotFound';
NotFound.propTypes = propTypes;
