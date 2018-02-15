import React from 'react';
// import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const propTypes = {};

export default function NotFound() {
  return (
    <Alert bsStyle='danger'>
<<<<<<< 410bda2394575f78f8fd0e3405c10e013544425a
      <h4>We couldn't find a page for that address.</h4>
      <p>
        Head back to &thinsp;
        <a href='/challenges/current-challenge'>
            your current challenge
        </a>
        .
      </p>
=======
      <h4>Oh snap! Page not found!</h4>
      <p>
        Head back to
      </p>
        <a href='/challenges/current-challenge'>
            your current challenge
        </a>
>>>>>>> fix(challenges): Created a NotFound react component, added a redux
    </Alert>
  );
}

NotFound.displayName = 'NotFound';
NotFound.propTypes = propTypes;
