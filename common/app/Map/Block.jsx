import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import FA from 'react-fontawesome';
import { Panel } from 'react-bootstrap';

import ns from './ns.json';
import Challenges from './Challenges.jsx';
import {
  toggleThisPanel,
  makePanelOpenSelector
} from './redux';
import { fetchNewBlock } from '../redux';

import { makeBlockSelector } from '../entities';

const mapDispatchToProps = {
  fetchNewBlock,
  toggleThisPanel
};
function makeMapStateToProps(_, { dashedName }) {
  return createSelector(
    makeBlockSelector(dashedName),
    makePanelOpenSelector(dashedName),
    (block, isOpen) => {
      return {
        isOpen,
        dashedName,
        title: block.title,
        time: block.time,
        challenges: block.challenges || []
      };
    }
  );
}
const propTypes = {
  challenges: PropTypes.array,
  dashedName: PropTypes.string,
  fetchNewBlock: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  time: PropTypes.string,
  title: PropTypes.string,
  toggleThisPanel: PropTypes.func
};

export class Block extends PureComponent {
  constructor(...props) {
    super(...props);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey, e) {
    e.preventDefault();
    this.props.toggleThisPanel(eventKey);
  }

  renderHeader(isOpen, title, time, isCompleted) {
    return (
      <div className={ isCompleted ? 'faded' : '' }>
        <FA
          className='map-caret'
          name={ isOpen ? 'caret-down' : 'caret-right' }
          size='lg'
        />
        <span>
        { title }
        </span>
        {
          time && <span className={ `${ns}-block-time` }>({ time })</span>
        }
      </div>
    );
  }

  render() {
    const {
      title,
      time,
      dashedName,
      isOpen,
      challenges,
      fetchNewBlock
    } = this.props;
    return (
      <Panel
        bsClass={ `${ns}-accordion-panel` }
        collapsible={ true }
        eventKey={ dashedName || title }
        expanded={ isOpen }
        header={ this.renderHeader(isOpen, title, time) }
        id={ title }
        key={ title }
        onClick={ () => fetchNewBlock(dashedName) }
        onSelect={ this.handleSelect }
        >
        { isOpen && <Challenges challenges={ challenges } /> }
      </Panel>
    );
  }
}

Block.displayName = 'Block';
Block.propTypes = propTypes;

export default connect(makeMapStateToProps, mapDispatchToProps)(Block);
