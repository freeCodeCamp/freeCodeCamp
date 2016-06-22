import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import FA from 'react-fontawesome';
import PureComponent from 'react-pure-render/component';
import { Panel } from 'react-bootstrap';

import Challenge from './Challenge.jsx';
import { toggleThisPanel } from '../../redux/actions';

const dispatchActions = { toggleThisPanel };
const mapStateToProps = createSelector(
  (_, props) => props.dashedName,
  state => state.entities.block,
  state => state.entities.challenge,
  (state, props) => state.challengesApp.mapUi[props.dashedName],
  (dashedName, blockMap, challengeMap, isOpen) => {
    const block = blockMap[dashedName];
    return {
      isOpen,
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
    challenges: PropTypes.array,
    toggleThisPanel: PropTypes.func
  };

  handleSelect(eventKey, e) {
    e.preventDefault();
    this.props.toggleThisPanel(eventKey);
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
      challenges
    } = this.props;
    return (
      <Panel
        bsClass='map-accordion-panel-nested'
        collapsible={ true }
        eventKey={ dashedName || title }
        expanded={ isOpen }
        header={
          <div>
            <h3><FA name='caret-right' />{ title }</h3>
            <span className='challenge-block-time'>({ time })</span>
          </div>
        }
        id={ title }
        key={ title }
        onSelect={ this.handleSelect }
        >
        { this.renderChallenges(challenges) }
      </Panel>
    );
  }
}

export default connect(mapStateToProps, dispatchActions)(Block);
