import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Link, { navigateTo } from 'gatsby-link';

import { makeExpandedBlockSelector, toggleBlock } from '../redux';
import { toggleMapModal } from '../../../redux/app';
import Caret from '../../icons/Caret';

const mapStateToProps = (state, ownProps) => {
  const expandedSelector = makeExpandedBlockSelector(ownProps.blockDashedName);

  return createSelector(expandedSelector, isExpanded => ({ isExpanded }))(
    state
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleBlock, toggleMapModal }, dispatch);

const propTypes = {
  blockDashedName: PropTypes.string,
  challenges: PropTypes.array,
  isExpanded: PropTypes.bool,
  toggleBlock: PropTypes.func.isRequired,
  toggleMapModal: PropTypes.func.isRequired
};

export class Block extends PureComponent {
  constructor(...props) {
    super(...props);

    this.handleBlockClick = this.handleBlockClick.bind(this);
    this.handleChallengeClick = this.handleChallengeClick.bind(this);
    this.renderChallenges = this.renderChallenges.bind(this);
  }

  handleBlockClick() {
    const { blockDashedName, challenges, toggleBlock } = this.props;
    const blockPath = challenges[0].fields.slug
      .split('/')
      .slice(0, -1)
      .join('/');
    toggleBlock(blockDashedName);
    return navigateTo(blockPath);
  }

  handleChallengeClick() {
    this.props.toggleMapModal();
  }

  renderChallenges(challenges) {
    // TODO: Split this into a Challenge Component and add tests
    return challenges.map(challenge => (
      <li className='map-challenge-title' key={challenge.dashedName}>
        <Link onClick={this.handleChallengeClick} to={challenge.fields.slug}>
          {challenge.title}
        </Link>
      </li>
    ));
  }

  render() {
    const { challenges, isExpanded } = this.props;
    const { blockName } = challenges[0].fields;
    return (
      <li className={`block ${isExpanded ? 'open' : ''}`}>
        <div className='map-title' onClick={this.handleBlockClick}>
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
