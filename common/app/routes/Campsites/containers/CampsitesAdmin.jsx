import React, { PropTypes } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PureComponent from 'react-pure-render/component';

import CampsitesList from '../components/CampsitesList.jsx';
import CampsiteNavButtons from '../components/CampsiteNavButtons.jsx';

import { fetchCampsites } from '../redux/actions';
import { updateTitle } from '../../../redux/actions';
import contain from '../../../utils/professor-x';

import { scrollToTopOfWindow } from '../utils';

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

const fetchOptions = {
  fetchAction: 'fetchCampsites'
};

export class CampsitesAdmin extends PureComponent {

  static displayName = 'Campsites Admin';

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
    const { isCampsiteModerator, history } = this.props;
    // redirect to campsites home if not admin
    (() => !isCampsiteModerator ? history.push('/campsites') : null )();
    scrollToTopOfWindow();
  }

  render() {
    const {
      approvedCampsites,
      pendingCampsites
    } = this.props;
    return (
      <div>
        <CampsiteNavButtons
          numPendingCampsites={pendingCampsites.length}
          showLinkToAdminPage={false}
          showLinkToApprove={true}
          showLinkToHomepage={true}/>
        <CampsitesList
          campsites={approvedCampsites}
          showEditButton={true}
          />
      </div>
    );
  }
}

// export redux and fetch aware component
export default compose(
  connect(mapStateToProps, {
    fetchCampsites,
    updateTitle
  }),
  contain(fetchOptions)
)(CampsitesAdmin);
