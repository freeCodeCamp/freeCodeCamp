import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { apiLocation } from '../../../config/env.json';

import { hardGoTo } from '../../redux';

const currentChallengeApi = '/challenges/current-challenge';

const propTypes = {
  children: PropTypes.any,
  hardGoTo: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ hardGoTo }, dispatch);

const createClickHandler = hardGoTo => e => {
  e.preventDefault();
  return hardGoTo(`${apiLocation}${currentChallengeApi}`);
};

function CurrentChallengeLink({ children, hardGoTo }) {
  return (
    <a href={currentChallengeApi} onClick={createClickHandler(hardGoTo)}>
      {children}
    </a>
  );
}

CurrentChallengeLink.displayName = 'CurrentChallengeLink';
CurrentChallengeLink.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentChallengeLink);
