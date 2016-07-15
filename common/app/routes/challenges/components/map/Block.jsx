import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import FA from 'react-fontawesome';
import PureComponent from 'react-pure-render/component';
import { Panel } from 'react-bootstrap';

import Challenge from './Challenge.jsx';
import { toggleThisPanel } from '../../redux/actions';
import {
  makePanelOpenSelector,
  makePanelHiddenSelector
} from '../../redux/selectors';

const dispatchActions = { toggleThisPanel };
const makeMapStateToProps = () => createSelector(
  (_, props) => props.dashedName,
  (state, props) => state.entities.block[props.dashedName],
  makePanelOpenSelector(),
  makePanelHiddenSelector(),
  (dashedName, block, isOpen, isHidden) => {
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
export class Block extends PureComponent {
  constructor(...props) {
    super(...props);
    this.handleSelect = this.handleSelect.bind(this);
  }
  static displayName = 'Block';
  static propTypes = {
    title: PropTypes.string,
    dashedName: PropTypes.string,
    time: PropTypes.string,
    isOpen: PropTypes.bool,
    isHidden: PropTypes.bool,
    challenges: PropTypes.array,
    toggleThisPanel: PropTypes.func
  };

  handleSelect(eventKey, e) {
    e.preventDefault();
    this.props.toggleThisPanel(eventKey);
  }

  renderHeader(isOpen, title, time, isCompleted) {
    return (
      <div>
        <h3 className={ isCompleted ? 'faded clear-fix' : 'clear-fix' }>
          <FA
            className='no-link-underline'
            name={ isOpen ? 'caret-down' : 'caret-right' }
          />
          <span>
            { title }
          </span>
          <span className='challenge-block-time'>({ time })</span>
        </h3>
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
        bsClass='map-accordion-panel-nested'
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

export default connect(makeMapStateToProps, dispatchActions)(Block);
