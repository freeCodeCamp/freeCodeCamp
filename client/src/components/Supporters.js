import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, ProgressBar } from '@freecodecamp/react-bootstrap';

import FullWidthRow from '../components/helpers/FullWidthRow';
import Spacer from '../components/helpers/Spacer';

import './supporters.css';

const propTypes = {
  activeDonations: PropTypes.number.isRequired,
  isDonating: PropTypes.bool.isRequired
};

const supporterGoal = 10000;
const supportersLocale = supporterGoal.toLocaleString();

function Supporters({ isDonating, activeDonations }) {
  const donationsLocale = activeDonations.toLocaleString();
  const isGoalReached = activeDonations >= supporterGoal;
  return (
    <Fragment>
      <FullWidthRow>
        <h2>Support an open future.</h2>
      </FullWidthRow>
      {isGoalReached ? (
        <FullWidthRow>
          <Spacer />
          <p>
            <span aria-label='Tada!' role='img'>
              🎉
            </span>{' '}
            {donationsLocale} supporters help keep freeCodeCamp.org free to use
          </p>
        </FullWidthRow>
      ) : (
        <FullWidthRow>
          <div id='supporter-progress-wrapper'>
            <ProgressBar max={supporterGoal} now={activeDonations} />
            <div id='progress-label-wrapper'>
              <span className='progress-label'>
                {donationsLocale} supporters out of {supportersLocale} supporter
                goal
              </span>
            </div>
          </div>
        </FullWidthRow>
      )}
      <Spacer />
      <FullWidthRow>
        <b>
          <p>
            freeCodeCamp.org is a tiny non-profit that's helping millions of
            people learn to code for free. <br />
            <br />
            {isDonating ? (
              <Fragment>
                Thanks for being a supporter!
                <br />
                <br />
                Do you know anyone who's interested in technology? Encourage
                them to join the community.
              </Fragment>
            ) : (
              `Join ${donationsLocale} supporters. Your $5 / month donation will help ` +
              'keep tech education free and open.'
            )}
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
