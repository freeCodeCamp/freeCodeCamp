import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { apiLocation } from '../../../config/env.json';

import { hardGoTo } from '../../redux';

const currentChallengeApi = '/challenges/current-challenge';

const propTypes = {
  children: PropTypes.any,
  hardGoTo: PropTypes.func.isRequired,
  isLargeBtn: PropTypes.bool
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ hardGoTo }, dispatch);

const createClickHandler = hardGoTo => e => {
  e.preventDefault();
  return hardGoTo(`${apiLocation}${currentChallengeApi}`);
};

function CurrentChallengeLink({ children, hardGoTo, isLargeBtn }) {
  let classNames;
  if (isLargeBtn) {
    classNames = 'btn btn-lg btn-primary btn-block';
  } else {
    classNames = 'btn btn-cta-big btn-primary btn-block';
  }
  return (
    <a
      className={classNames}
      href={currentChallengeApi}
      onClick={createClickHandler(hardGoTo)}
    >
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
