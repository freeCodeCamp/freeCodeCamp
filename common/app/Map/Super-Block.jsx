import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PureComponent from 'react-pure-render/component';
import FA from 'react-fontawesome';
import { Panel } from 'react-bootstrap';

import ns from './ns.json';
import Block from './Block.jsx';
import {
  toggleThisPanel,

  makePanelOpenSelector,
  makePanelHiddenSelector
} from './redux';
import { makeSuperBlockSelector } from '../entities';

const dispatchActions = { toggleThisPanel };
// make selectors unique to each component
// see
// reactjs/reselect
// sharing-selectors-with-props-across-multiple-components
function makeMapStateToProps(_, { dashedName }) {
  return createSelector(
    makeSuperBlockSelector(dashedName),
    makePanelOpenSelector(dashedName),
    makePanelHiddenSelector(dashedName),
    (superBlock, isOpen, isHidden) => ({
      isOpen,
      isHidden,
      dashedName,
      title: superBlock.title || dashedName,
      blocks: superBlock.blocks || [],
      message: superBlock.message
    })
  );
}

const propTypes = {
  blocks: PropTypes.array,
  dashedName: PropTypes.string,
  isHidden: PropTypes.bool,
  isOpen: PropTypes.bool,
  message: PropTypes.string,
  title: PropTypes.string,
  toggleThisPanel: PropTypes.func
};

export class SuperBlock extends PureComponent {
  constructor(...props) {
    super(...props);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey, e) {
    e.preventDefault();
    this.props.toggleThisPanel(eventKey);
  }

  renderBlocks(blocks) {
    if (!Array.isArray(blocks) || !blocks.length) {
      return null;
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
      <div className={ `${ns}-block-description` }>
        { message }
      </div>
    );
  }

  renderHeader(isOpen, title, isCompleted) {
    return (
      <div className={ isCompleted ? 'faded' : '' }>
        <FA
          className={ `${ns}-caret` }
          name={ isOpen ? 'caret-down' : 'caret-right' }
          size='lg'
        />
        { title }
      </div>
    );
  }

  render() {
    const {
      title,
      dashedName,
      blocks,
      message,
      isOpen,
      isHidden
    } = this.props;
    if (isHidden) {
      return null;
    }
    return (
      <Panel
        bsClass={ `${ns}-accordion-panel` }
        collapsible={ true }
        eventKey={ dashedName || title }
        expanded={ isOpen }
        header={ this.renderHeader(isOpen, title) }
        id={ title }
        key={ dashedName || title }
        onSelect={ this.handleSelect }
        >
        { this.renderMessage(message) }
        <div className={ `${ns}-accordion-block` }>
          { this.renderBlocks(blocks) }
        </div>
      </Panel>
    );
  }
}

SuperBlock.displayName = 'SuperBlock';
SuperBlock.propTypes = propTypes;

export default connect(
  makeMapStateToProps,
  dispatchActions
)(SuperBlock);
