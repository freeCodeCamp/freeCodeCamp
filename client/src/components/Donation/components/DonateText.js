import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Row, Col } from '@freecodecamp/react-bootstrap';

import { activeDonationsSelector } from '../../../redux';

const propTypes = {
  activeDonations: PropTypes.number
};

const mapStateToProps = createSelector(
  activeDonationsSelector,
  activeDonations => ({ activeDonations })
);

const DonateText = ({ activeDonations }) => {
  const donationsLocale = activeDonations.toLocaleString();
  return (
    <Row>
      <Col sm={10} smOffset={1} xs={12}>
        <p>
          freeCodeCamp.org is a tiny nonprofit that's helping millions of people
          learn to code for free.
        </p>
        <p>
          Join <strong>{donationsLocale}</strong> supporters.
        </p>
        <p>
          Your $5 / month donation will help keep tech education free and open.
        </p>
      </Col>
    </Row>
  );
};

DonateText.displayName = 'DonateText';
DonateText.propTypes = propTypes;

export default connect(mapStateToProps)(DonateText);
