import { CompositeDisposable } from 'rx';

import React, { PropTypes } from 'react';
import { Well } from 'react-bootstrap';

import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PureComponent from 'react-pure-render/component';

import {
  saveCampsite,
  setSearchMapAttribute,
  updateCreateForm } from '../redux/actions';

import { updateTitle } from '../../../redux/actions';

import CreateCampsiteMap from '../components/CreateCampsiteMap.jsx';
import CreateCampsiteForm from '../components/CreateCampsiteForm.jsx';

import { uriInSingleQuotedAttr } from 'xss-filters';

import { isTouchDevice, scrollToTopOfWindow } from '../utils';

const mapStateToProps = createSelector(
  state => state.app,
  state => state.campsitesApp,
  ({ username }, { campsite, searchMap }) => ({
    username,
    campsite,
    searchMap
  })
);

export class CreateCampsite extends PureComponent {
  constructor(...args) {
    super(...args);
    this._subscriptions = new CompositeDisposable();
  }

  static displayName = 'Create Campsite';

  static propTypes = {
    campsite: PropTypes.object,
    saveCampsite: PropTypes.func,
    searchMap: PropTypes.object,
    setSearchMapAttribute: PropTypes.func,
    updateCreateForm: PropTypes.func,
    updateTitle: PropTypes.func,
    username: PropTypes.string
  };
  componentWillMount() {
    const { updateTitle } = this.props;
    updateTitle('Create Campsite');
  }

  componentDidMount() {
    const { history, username } = this.props;
    // redirect to sign in if not logged in
    (() => !username ? history.push('/signin') : null )();
    scrollToTopOfWindow();
  }
  componentWillUnmount() {
    this._subscriptions.dispose();
  }

  submitCampsite() {
    const { campsite, saveCampsite, searchMap, username } = this.props;
    const mapObj = searchMap.markers[0];
    const subscription = saveCampsite({
      googleMapObject: mapObj,
      // sanitize user input
      url: uriInSingleQuotedAttr(campsite.campsiteURL.value),
      username
    }).subscribe();
    this._subscriptions.add(subscription);
  }

  render() {
    const {
      campsite,
      searchMap,
      setSearchMapAttribute,
      updateCreateForm } = this.props;
    return (
      <div>
        <Well>
          <h4>{
            // message for people on a touch screen
            isTouchDevice() ? (<b>It looks like you are on a touch device.
            This map probably won't work.
            Please try on a computer with a mouse.</b>) : (
            <b>Select a location for your campsite by using the searchbox.</b>
          )}</h4>
          <p>This could be the specific location where your campsite is held,
          &nbsp;or the city if your campsite is held at multiple locations. If
          &nbsp;your campsite is held in multiple cities, it is okay to select
          &nbsp;one of them. Please ensure only one location is marked on the
          &nbsp;map. If the map is showing multiple red pins, make the query
          &nbsp;more specific.</p>
        </Well>
        <div>
          <div>{
            // only try to render the map when window is defined
            typeof window !== 'undefined' ?
              <CreateCampsiteMap
                searchMap={searchMap}
                setSearchMapAttribute={setSearchMapAttribute}
              />
            : null
          }</div>
          <CreateCampsiteForm
            campsite={campsite}
            searchMap={searchMap}
            submitCampsite={this.submitCampsite.bind(this)}
            updateCreateForm={updateCreateForm}
          />
        </div>
      </div>
    );
  }
}

// export redux aware component
export default connect(mapStateToProps, {
  saveCampsite,
  setSearchMapAttribute,
  updateCreateForm,
  updateTitle
})(CreateCampsite);
