import { CompositeDisposable } from 'rx';

import React, { PropTypes } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PureComponent from 'react-pure-render/component';

import CampsitesMap from '../components/CampsitesMap.jsx';
import CampsitesList from '../components/CampsitesList.jsx';
import CampsiteNavButtons from '../components/CampsiteNavButtons.jsx';

import {
  fetchCampsites } from '../redux/actions';

import { updateTitle } from '../../../redux/actions';

import { isTouchDevice, scrollToTopOfWindow } from '../utils';

const mapStateToProps = createSelector(
  state => state.app,
  state => state.campsitesApp,
  ( { isCampsiteModerator },
    { approvedCampsites,
      pendingCampsites }) => ({
    isCampsiteModerator,
    approvedCampsites,
    pendingCampsites
  })
);

export class Campsites extends PureComponent {
  constructor(...args) {
    super(...args);
    this._subscriptions = new CompositeDisposable();
  }

  static displayName = 'Campsites';

  static propTypes = {
    approvedCampsites: PropTypes.array,
    fetchCampsites: PropTypes.func,
    isCampsiteModerator: PropTypes.bool,
    pendingCampsites: PropTypes.array,
    updateTitle: PropTypes.func
  };

  componentWillMount() {
    const { updateTitle } = this.props;
    updateTitle('Campsites');
  }

  componentDidMount() {
    scrollToTopOfWindow();
  }

  componentWillUnmount() {
    this._subscriptions.dispose();
  }

  render() {
    const {
      approvedCampsites,
      isCampsiteModerator,
      pendingCampsites
    } = this.props;
    return (
      <div>
        <CampsitesMap campsites={approvedCampsites} />
        {!isTouchDevice() || isCampsiteModerator ? <CampsiteNavButtons
          numPendingCampsites={pendingCampsites.length}
          showLinkToAdminPage={isCampsiteModerator}
          /> : null }
        <h4>Find a campsite near you - scroll down to see all campsites</h4>
        <CampsitesList
          campsites={approvedCampsites}
          showEditButton={false}
          />
      </div>
    );
  }
}

// export redux aware component
export default compose(
  connect(mapStateToProps, {
    fetchCampsites,
    updateTitle
  })
)(Campsites);
