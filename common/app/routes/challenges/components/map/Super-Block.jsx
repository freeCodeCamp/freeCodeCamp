import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import FA from 'react-fontawesome';
import { Panel } from 'react-bootstrap';

import Block from './Block.jsx';

export default class SuperBlock extends PureComponent {
  static displayName = 'SuperBlock';
  static propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    blocks: PropTypes.array
  };

  renderBlocks(blocks) {
    if (!Array.isArray(blocks) || !blocks.length) {
      return <div>No Blocks Found</div>;
    }
    return blocks.map(block => {
      return (
        <Block
          key={ block.title }
          { ...block } />
      );
    });
  }

  render() {
    const { title, blocks, message } = this.props;
    return (
      <Panel
        bsClass='map-accordion-panel'
        collapsible={ true }
        expanded={ true }
        header={ <h2><FA name='caret-right' />{ title }</h2> }
        id={ title }
        key={ title }>
        {
          message ?
            <div className='challenge-block-description'>
              { message }
            </div> :
            ''
        }
        <div
          className='map-accordion-block'>
          { this.renderBlocks(blocks) }
        </div>
      </Panel>
    );
  }
}
