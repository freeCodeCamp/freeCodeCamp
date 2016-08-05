import { CompositeDisposable } from 'rx';

import React, { PropTypes } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PureComponent from 'react-pure-render/component';

import UpdateCampsiteForm from '../components/UpdateCampsiteForm.jsx';

import {
  addEditingCampsite,
  editExistingCampsite,
  editPendingCampsite,
  fetchCampsites,
  updateCampsite} from '../redux/actions';

import { updateTitle } from '../../../redux/actions';

import { scrollToTopOfWindow } from '../utils';

const mapStateToProps = createSelector(
  state => state.app,
  state => state.campsitesApp,
  ( { isCampsiteModerator },
    { approvedCampsites,
      editingCampsites,
      pendingCampsites }) => ({
    isCampsiteModerator,
    approvedCampsites,
    editingCampsites,
    pendingCampsites
  })
);

export class CampsitesAdminReview extends PureComponent {
  constructor(...args) {
    super(...args);
    this._subscriptions = new CompositeDisposable();
  }

  static displayName = 'Campsites Admin Reivew';

  static propTypes = {
    approvedCampsites: PropTypes.array,
    addEditingCampsite: PropTypes.func,
    editExistingCampsite: PropTypes.func,
    editPendingCampsite: PropTypes.func,
    fetchCampsites: PropTypes.func,
    editingCampsites: PropTypes.array,
    isCampsiteModerator: PropTypes.bool,
    pendingCampsites: PropTypes.array,
    updateCampsite: PropTypes.func,
    updateTitle: PropTypes.func
  };

  componentWillMount() {
    const { updateTitle } = this.props;
    updateTitle('Campsites');
  }

  componentDidMount() {
    const { isCampsiteModerator, history } = this.props;
    // redirect to campsites home if not admin
    (() => !isCampsiteModerator ? history.push('/campsites') : null )();
    scrollToTopOfWindow();
    // set editing campsites to id in route
    if (!this.approvingContext()) {
      const { addEditingCampsite, approvedCampsites, routeParams } = this.props;
      const campsite = approvedCampsites.filter(campsite =>
        campsite.id === routeParams.id
      )[0];
      addEditingCampsite({ campsite });
    }
  }

  componentWillUnmount() {
    this._subscriptions.dispose();
  }

  componentWillUpdate(nextProps) {
    const { history } = this.props;
    // redirect to campsites home if no pending campsites or after editing
    if (this.approvingContext() && nextProps.pendingCampsites.length === 0 ||
      !this.approvingContext() && nextProps.editingCampsites.length === 0 ) {
      // TODO: this is throwing warnings, but don't see context.router in
      // react dev tools :/ http://tiny.cc/router-contextchanges
      history.push('/campsites');
    }
  }

  approvingContext() {
    const { location } = this.props;
    return location.pathname === '/campsites/admin/approve';
  }

  handleCampsiteDelete(campsite) {
    const { updateCampsite } = this.props;
    // set isDeleted to true then update
    campsite.isDeleted = true;
    const subscription = updateCampsite(campsite).subscribe();
    this._subscriptions.add(subscription);
  }

  handleCampsiteApprove(campsite) {
    const { updateCampsite } = this.props;
    // set isApproved to true then update
    campsite.isApproved = true;
    const subscription = updateCampsite(campsite).subscribe();
    this._subscriptions.add(subscription);
  }

  handleCampsiteEdit(campsiteID, value, approvingContext) {
    const { editExistingCampsite, editPendingCampsite } = this.props;
    if (approvingContext) {
      editPendingCampsite({campsiteID, value});
    } else {
      editExistingCampsite({campsiteID, value});
    }
  }

  render() {
    const {
      approvedCampsites,
      editingCampsites,
      pendingCampsites
    } = this.props;

    const campsites = this.approvingContext() ? pendingCampsites
      : editingCampsites;
    return (
      <UpdateCampsiteForm
        approvedCampsites={approvedCampsites}
        approvingContext={this.approvingContext()}
        campsites={campsites}
        onCampsiteApprove={this.handleCampsiteApprove.bind(this)}
        onCampsiteDelete={this.handleCampsiteDelete.bind(this)}
        onCampsiteEdit={this.handleCampsiteEdit.bind(this)}
      />
    );
  }
}

// export redux aware component
export default compose(
  connect(mapStateToProps, {
    addEditingCampsite,
    editExistingCampsite,
    editPendingCampsite,
    fetchCampsites,
    updateCampsite,
    updateTitle
  })
)(CampsitesAdminReview);
