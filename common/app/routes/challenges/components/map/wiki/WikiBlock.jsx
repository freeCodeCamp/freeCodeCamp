import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import FA from 'react-fontawesome';
import PureComponent from 'react-pure-render/component';
import { Panel } from 'react-bootstrap';

import WikiTopic from './WikiTopic.jsx';

import { toggleThisPanel } from '../../../redux/actions';
import {
  makePanelOpenSelector,
  makePanelHiddenSelector
} from '../../../redux/selectors';

const mapStateToProps = () => createSelector(
  (_, props) => props.dashedName,
  (state, props) => state.entities.wiki.wikiTopics[props.dashedName],
  makePanelOpenSelector(),
  makePanelHiddenSelector(),
  (dashedName, topics, isOpen, isHidden) => {
    return {
      isOpen,
      isHidden,
      dashedName,
      topics
    };
  }
);

const mapDispatchToProps = {
  toggleThisPanel
};

const propTypes = {
  dashedName: PropTypes.string,
  isOpen: PropTypes.bool,
  isHidden: PropTypes.bool,
  title: PropTypes.string,
  toggleThisPanel: PropTypes.func.isRequired,
  topics: PropTypes.arrayOf(PropTypes.object)
};

export class WikiBlock extends PureComponent {
  constructor(...props) {
    super(...props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey, e) {
    e.preventDefault();
    this.props.toggleThisPanel(eventKey);
  }

  renderHeader(isOpen, title) {
    return (
      <div>
        <h3>
          <FA
            className='no-link-underline'
            name={ isOpen ? 'caret-down' : 'caret-right' }
          />
          <span>
            { title }
          </span>
        </h3>
      </div>
    );
  }

  renderTopics(options) {
    const { topics, dashedName: block } = options;
    if (!Array.isArray(topics) || !topics.length) {
      return (<div>
                <p>No Topics Found. Would you like to
                  <a
                    href='https://forum.freeCodeCamp.com/c/wiki'
                    target='_blank'
                    > write one?
                  </a>
                </p>
              </div>);
    }
    return topics.map((topic, i) => (
      <WikiTopic
        block={ block }
        dashedName={ topic.dashedName }
        key={ topic.dashedName + i }
        title={ topic.title }
      />
    ));
  }

  render() {
    const {
      dashedName,
      isOpen,
      isHidden,
      title,
      topics
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
        header={ this.renderHeader(isOpen, title) }
        id={ title }
        key={ title }
        onSelect={ this.handleSelect }
        >
        { this.renderTopics({ topics, dashedName }) }
      </Panel>
    );
  }
}

WikiBlock.displayName = 'WikiBlock';
WikiBlock.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WikiBlock);
