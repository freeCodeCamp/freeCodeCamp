import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import FA from 'react-fontawesome';
import { Panel } from 'react-bootstrap';

import Block from './Block.jsx';

export default class SuperBlock extends PureComponent {
   constructor(...props) {
     super(...props);
     this.handleSelect = this.handleSelect.bind(this);
  }
  static displayName = 'SuperBlock';
  static propTypes = {
    title: PropTypes.string,
    dashedName: PropTypes.string,
    message: PropTypes.string,
    blocks: PropTypes.array,
    mapUi: PropTypes.object,
    toggleThisPanl: PropTypes.func
  };

  handleSelect(eventKey, e) {
    e.preventDefault();
    this.props.toggleThisPanel(eventKey);
  }

  renderBlocks(blocks) {
    if (!Array.isArray(blocks) || !blocks.length) {
      return <div>No Blocks Found</div>;
    }
    return blocks.map(block => {
      return (
        <Block
          key={ block.title }
          { ...block }
        />
      );
    });
  }

  render() {
    const { title, dashedName, blocks, message, mapUi = {} } = this.props;
    return (
      <Panel
        bsClass='map-accordion-panel'
        collapsible={ true }
        eventKey={ dashedName || title }
        expanded={ dashedName ? mapUi[dashedName] : true }
        header={ <h2><FA name='caret-right' />{ title }</h2> }
        id={ title }
        key={ dashedName || title }
        onSelect={ this.handleSelect }
        >
        {
          message ?
            <div className='challenge-block-description'>
              { message }
            </div> :
            ''
        }
        <div
          className='map-accordion-block'
          >
          { this.renderBlocks(blocks) }
        </div>
      </Panel>
    );
  }
}
