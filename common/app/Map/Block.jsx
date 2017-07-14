import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import FA from 'react-fontawesome';
import PureComponent from 'react-pure-render/component';
import { Panel } from 'react-bootstrap';

import ns from './ns.json';
import Challenge from './Challenge.jsx';
import {
  toggleThisPanel,

  makePanelOpenSelector,
  makePanelHiddenSelector
} from './redux';

import { makeBlockSelector } from '../entities';

const dispatchActions = { toggleThisPanel };
function makeMapStateToProps(_, { dashedName }) {
  return createSelector(
    makeBlockSelector(dashedName),
    makePanelOpenSelector(dashedName),
    makePanelHiddenSelector(dashedName),
    (block, isOpen, isHidden) => {
      return {
        isOpen,
        isHidden,
        dashedName,
        title: block.title,
        time: block.time,
        challenges: block.challenges
      };
    }
  );
}
const propTypes = {
  challenges: PropTypes.array,
  dashedName: PropTypes.string,
  isHidden: PropTypes.bool,
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
        <span className={ `${ns}-block-time` }>({ time })</span>
      </div>
    );
  }

  renderChallenges(challenges) {
    if (!Array.isArray(challenges) || !challenges.length) {
      return <div>No Challenges Found</div>;
    }
    return challenges.map(dashedName => (
      <Challenge
        dashedName={ dashedName }
        key={ dashedName }
      />
    ));
  }

  render() {
    const {
      title,
      time,
      dashedName,
      isOpen,
      isHidden,
      challenges
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
        header={ this.renderHeader(isOpen, title, time) }
        id={ title }
        key={ title }
        onSelect={ this.handleSelect }
        >
        { this.renderChallenges(challenges) }
      </Panel>
    );
  }
}

Block.displayName = 'Block';
Block.propTypes = propTypes;

export default connect(makeMapStateToProps, dispatchActions)(Block);
