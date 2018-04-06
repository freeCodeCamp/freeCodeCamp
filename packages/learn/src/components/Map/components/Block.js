import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Link from 'gatsby-link';

import { makeExpandedBlockSelector, toggleBlock } from '../redux';
import Caret from '../../icons/Caret';

const mapStateToProps = (state, ownProps) => {
  const expandedSelector = makeExpandedBlockSelector(ownProps.blockDashedName);

  return createSelector(expandedSelector, isExpanded => ({ isExpanded }))(
    state
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleBlock }, dispatch);

const propTypes = {
  blockDashedName: PropTypes.string,
  challenges: PropTypes.array,
  isExpanded: PropTypes.bool,
  toggleBlock: PropTypes.func.isRequired
};

class Block extends PureComponent {
  renderChallenges = challenges =>
    challenges.map(challenge => (
      <li className='map-challenge-title' key={challenge.dashedName}>
        <Link to={challenge.fields.slug}>{challenge.title}</Link>
      </li>
    ));

  render() {
    const { blockDashedName, challenges, isExpanded, toggleBlock } = this.props;
    const { blockName } = challenges[0].fields;
    return (
      <li className={`block ${isExpanded ? 'open' : ''}`}>
        <div className='map-title' onClick={() => toggleBlock(blockDashedName)}>
          <Caret />
          <h5>{blockName}</h5>
        </div>
        <ul>{isExpanded ? this.renderChallenges(challenges) : null}</ul>
      </li>
    );
  }
}

Block.displayName = 'Block';
Block.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Block);
