import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ns from './ns.json';
import Block from './Block.jsx';

const propTypes = {
  blocks: PropTypes.array.isRequired
};

export default class Blocks extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.blocks !== nextProps.blocks;
  }

  render() {
    const {
      blocks
    } = this.props;
    if (blocks.length <= 0) {
      return null;
    }
    return (
      <div className={ `${ns}-accordion-block` }>
        {
          blocks.map(dashedName => (
            <Block
              dashedName={ dashedName }
              key={ dashedName }
            />
          ))
        }
      </div>
    );
  }
}

Blocks.displayName = 'Blocks';
Blocks.propTypes = propTypes;
