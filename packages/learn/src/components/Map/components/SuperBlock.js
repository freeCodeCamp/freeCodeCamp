import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import uniq from 'lodash/uniq';

import Block from './Block';

import { makeExpandedSuperBlockSelector, toggleSuperBlock } from '../redux';
import Caret from '../../icons/Caret';
import { ChallengeNode } from '../../../redux/propTypes';

const mapStateToProps = (state, ownProps) => {
  const expandedSelector = makeExpandedSuperBlockSelector(ownProps.superBlock);

  return createSelector(expandedSelector, isExpanded => ({ isExpanded }))(
    state
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toggleSuperBlock
    },
    dispatch
  );
}

const propTypes = {
  isExpanded: PropTypes.bool,
  nodes: PropTypes.arrayOf(ChallengeNode),
  superBlock: PropTypes.string,
  toggleSuperBlock: PropTypes.func.isRequired
};

class SuperBlock extends PureComponent {
  renderBlock = superBlock => {
    const { nodes } = this.props;
    const blocksForSuperBlock = nodes.filter(
      node => node.superBlock === superBlock
    );
    const blockDashedNames = uniq(
      blocksForSuperBlock.map(({ block }) => block)
    );

    return (
      <ul>
        {blockDashedNames.map(blockDashedName => (
          <Block
            blockDashedName={blockDashedName}
            challenges={blocksForSuperBlock.filter(
              node => node.block === blockDashedName
            )}
            key={blockDashedName}
          />
        ))}
      </ul>
    );
  };
  render() {
    const { superBlock, isExpanded, toggleSuperBlock } = this.props;
    return (
      <li className={`superblock ${isExpanded ? 'open' : ''}`}>
        <div className='map-title' onClick={() => toggleSuperBlock(superBlock)}>
          <Caret />
          <h4>{superBlock}</h4>
        </div>
        {isExpanded ? this.renderBlock(superBlock) : null}
      </li>
    );
  }
}

SuperBlock.displayName = 'SuperBlock';
SuperBlock.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(SuperBlock);
