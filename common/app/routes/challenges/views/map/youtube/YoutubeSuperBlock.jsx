import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PureComponent from 'react-pure-render/component';
import FA from 'react-fontawesome';
import { Panel } from 'react-bootstrap';

import YoutubeBlock from './YoutubeBlock.jsx';

import { toggleThisPanel } from '../../../redux/actions';
import {
  makePanelOpenSelector,
  makePanelHiddenSelector
} from '../../../redux/selectors';

const mapDispatchToProps = {
  toggleThisPanel
};
const mapStateToProps = () => {
  const panelOpenSelector = makePanelOpenSelector();
  const panelHiddenSelector = makePanelHiddenSelector();
  return createSelector(
    (_, props) => props.dashedName,
    state => state.entities.youtube,
    panelOpenSelector,
    panelHiddenSelector,
    (dashedName, youtube, isOpen, isHidden) => ({
      dashedName,
      isOpen,
      isHidden,
      youtube
    })
  );
};
const propTypes = {
  dashedName: PropTypes.string,
  isHidden: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggleThisPanel: PropTypes.func.isRequired,
  youtube: PropTypes.object
};

export class YoutubeSuperBlock extends PureComponent {
  constructor(...props) {
    super(...props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey, e) {
    e.preventDefault();
    this.props.toggleThisPanel(eventKey.slice(0).toLowerCase());
  }

  renderHeader(isOpen, title) {
    return (
      <h2>
        <FA
          className='no-link-underline'
          name={ isOpen ? 'caret-down' : 'caret-right' }
        />
        { title }
      </h2>
    );
  }

  renderPlaylists(playlists) {
    return Object.keys(playlists).map((playlist) => {
      const { dashedName, title, videos } = playlists[playlist];
      return (
        <YoutubeBlock
          dashedName={ dashedName }
          key={ dashedName }
          title= { title }
          videos={ videos }
        />
      );
    });
  }

  render() {
    const {
      isOpen,
      isHidden,
      youtube
    } = this.props;
    const title = 'YouTube';
    if (isHidden) {
      return null;
    }
    return (
      <Panel
        bsClass='map-accordion-panel'
        collapsible={ true }
        eventKey={ title }
        expanded={ isOpen }
        header={ this.renderHeader(isOpen, title) }
        id={ title }
        key={ title }
        onSelect={ this.handleSelect }
        >
        <div
          className='map-accordion-block'
          >
          { this.renderPlaylists(youtube) }
        </div>
      </Panel>
    );
  }
}

YoutubeSuperBlock.dsiplayName = 'YoutubeSuperBlock';
YoutubeSuperBlock.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YoutubeSuperBlock);
