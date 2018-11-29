import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, ProgressBar } from '@freecodecamp/react-bootstrap';

import FullWidthRow from '../components/helpers/FullWidthRow';

import './supporters.css';

const propTypes = {
  activeDonations: PropTypes.number.isRequired,
  isDonating: PropTypes.bool.isRequired
};

function Supporters({ isDonating, activeDonations }) {
  return (
    <Fragment>
      <FullWidthRow>
        <h2>Support an open future.</h2>
      </FullWidthRow>
      <FullWidthRow>
        <div id='supporter-progress-wrapper'>
          <ProgressBar max={10000} now={activeDonations} />
          <div id='progress-label-wrapper'>
            <span className='progress-label'>
              {activeDonations} supporters out of 10,000 goal
            </span>
          </div>
        </div>
      </FullWidthRow>
      <FullWidthRow>
        <b>
          <p>
            freeCodeCamp.org is a tiny non-profit that's helping millions of
            people learn to code for free. <br />
            {isDonating
              ? 'Thank you for supporting freeCodeCamp.org'
              : 'Join 4,000 supporters. Your $5 / month donation will help ' +
                'keep tech education free and open.'}
          </p>
        </b>
      </FullWidthRow>
      {isDonating ? null : (
        <FullWidthRow>
          <Button
            bsSize='lg'
            bsStyle='primary'
            href='https://donate.freecodecamp.org'
            target='_blank'
            >
            Click here to become a Supporter
          </Button>
        </FullWidthRow>
      )}
    </Fragment>
  );
}

Supporters.displayName = 'Supporters';
Supporters.propTypes = propTypes;

export default Supporters;
