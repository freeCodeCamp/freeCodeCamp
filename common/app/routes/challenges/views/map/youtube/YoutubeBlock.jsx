import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import FA from 'react-fontawesome';
import PureComponent from 'react-pure-render/component';
import { Panel } from 'react-bootstrap';

import YoutubeVideo from './YoutubeVideo.jsx';

import { toggleThisPanel } from '../../../redux/actions';
import {
  makePanelOpenSelector,
  makePanelHiddenSelector
} from '../../../redux/selectors';

const mapStateToProps = () => createSelector(
  makePanelOpenSelector(),
  makePanelHiddenSelector(),
  (isOpen, isHidden) => {
    return {
      isOpen,
      isHidden
    };
  }
);

const mapDispatchToProps = {
  toggleThisPanel
};

const propTypes = {
  dashedName: PropTypes.string,
  isHidden: PropTypes.bool,
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  toggleThisPanel: PropTypes.func.isRequired,
  videos: PropTypes.object
};

export class YoutubeBlock extends PureComponent {
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

  renderVideos(options) {
    const { videos, dashedName: block } = options;
    const videosArray = Object.keys(videos).map(video => videos[video]);
    if (!videosArray.length) {
      return (<p>No videos found for this playlist</p>);
    }
    return videosArray
      .map((video, i) => (
        <YoutubeVideo
          block={ block }
          dashedName={ video.dashedName }
          key={ video.dashedName + i }
          title={ video.title }
        />
    ));
  }

  render() {
    const {
      dashedName,
      isOpen,
      isHidden,
      title,
      videos
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
        { this.renderVideos({ videos, dashedName }) }
      </Panel>
    );
  }
}

YoutubeBlock.displayName = 'YoutubeBlock';
YoutubeBlock.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YoutubeBlock);
