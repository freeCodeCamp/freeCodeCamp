import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PureComponent from 'react-pure-render/component';
import FA from 'react-fontawesome';
import { Panel } from 'react-bootstrap';

import Block from './Block.jsx';
import { toggleThisPanel } from '../../redux/actions';

const dispatchActions = { toggleThisPanel };
const mapStateToProps = createSelector(
  (_, props) => props.dashedName,
  (state, props) => state.entities.superBlock[props.dashedName],
  (state, props) => state.challengesApp.mapUi[props.dashedName],
  (dashedName, superBlock, isOpen) => ({
    isOpen,
    dashedName,
    title: superBlock.title,
    blocks: superBlock.blocks,
    message: superBlock.message
  })
);
export class SuperBlock extends PureComponent {
  constructor(...props) {
    super(...props);
    this.handleSelect = this.handleSelect.bind(this);
  }
  static displayName = 'SuperBlock';
  static propTypes = {
    title: PropTypes.string,
    dashedName: PropTypes.string,
    blocks: PropTypes.array,
    isOpen: PropTypes.bool,
    message: PropTypes.string,
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
    return blocks.map(dashedName => (
      <Block
        dashedName={ dashedName }
        key={ dashedName }
      />
    ));
  }

  renderMessage(message) {
    if (!message) {
      return null;
    }
    return (
      <div className='challenge-block-description'>
        { message }
      </div>
    );
  }

  renderHeader(isOpen, title, isCompleted) {
    return (
      <h2 className={ isCompleted ? 'faded' : '' }>
        <FA
          className='no-link-underline'
          name={ isOpen ? 'caret-down' : 'caret-right' }
        />
        { title }
      </h2>
    );
  }

  render() {
    const {
      title,
      dashedName,
      blocks,
      message,
      isOpen
    } = this.props;
    return (
      <Panel
        bsClass='map-accordion-panel'
        collapsible={ true }
        eventKey={ dashedName || title }
        expanded={ isOpen }
        header={ this.renderHeader(isOpen, title) }
        id={ title }
        key={ dashedName || title }
        onSelect={ this.handleSelect }
        >
        { this.renderMessage(message) }
        <div
          className='map-accordion-block'
          >
          { this.renderBlocks(blocks) }
        </div>
      </Panel>
    );
  }
}

export default connect(
  mapStateToProps,
  dispatchActions
)(SuperBlock);
