import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { NavItem } from 'react-bootstrap';

import { clickOnMap } from './redux';

const mapStateToProps = null;
const mapDispatchToProps = {
  clickOnMap
};
const propTypes = {
  clickOnMap: PropTypes.func.isRequired
};

export function BinButton({ clickOnMap }) {
  return (
    <NavItem
      onClick={ clickOnMap }
      >
      Map
    </NavItem>
  );
}
BinButton.displayName = 'BinButton';
BinButton.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BinButton);
