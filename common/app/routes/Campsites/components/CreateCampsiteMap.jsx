// Map used to select the location of a new campsite

import React, { PropTypes } from 'react';
import { GoogleMap, Marker, SearchBox } from 'react-google-maps';
import { default as ScriptjsLoader }
  from 'react-google-maps/lib/async/ScriptjsLoader';

// default location to center map
// NOTE: hello New York
const DEFAULT_MAP_SETTINGS = {
  lat: 40.748817,
  lng: -73.985428,
  zoom: 14
};

// NOTE: wasn't able to get this style to work when moving to less file
const searchInputStyle = {
  'border': '1px solid transparent',
  'borderRadius': '1px',
  'boxShadow': '0 2px 6px rgba(0, 0, 0, 0.3)',
  'boxSizing': 'border-box',
  'MozBoxSizing': 'border-box',
  'fontSize': '14px',
  'height': '32px',
  'marginTop': '27px',
  'outline': 'none',
  'padding': '0 12px',
  'textOverflow': 'ellipses',
  'width': '400px'
};

export default React.createClass({
  displayName: 'Create Campsite Map',

  propTypes: {
    searchMap: PropTypes.object,
    setSearchMapAttribute: PropTypes.func
  },

  handleBoundsChanged() {
    const { setSearchMapAttribute } = this.props;
    const componentContext = this;
    setSearchMapAttribute({name: 'center',
      value: componentContext.refs.map.getCenter()});
    setSearchMapAttribute({name: 'bounds',
      value: componentContext.refs.map.getBounds()});
  },

  handlePlacesChanged() {
    const { setSearchMapAttribute } = this.props;
    const componentContext = this;
    const places = componentContext.refs.searchBox.getPlaces();
    // set map center to first search result
    const mapCenter = places.length > 0 ? {
      lat: places[0].geometry.location.lat(),
      lng: places[0].geometry.location.lng()
    } : DEFAULT_MAP_SETTINGS;
    setSearchMapAttribute({name: 'center', value: mapCenter});
    setSearchMapAttribute({name: 'markers', value: places});
  },

  render() {

    const { searchMap } = this.props;
    const componentContext = this;
    // set center to default if search hasn't found anything
    const mapCenterSet = searchMap.markers.length > 0;
    const center = mapCenterSet ?
      searchMap.center : DEFAULT_MAP_SETTINGS;
    return (
      <section className='campsites-search-map'>
        <ScriptjsLoader
          containerElement={
            <div style={{ height: '100%' }} />
          }
          googleMapElement={
            <GoogleMap
              center={center}
              defaultCenter={DEFAULT_MAP_SETTINGS}
              defaultZoom={DEFAULT_MAP_SETTINGS.zoom}
              onBoundsChanged={
                componentContext.handleBoundsChanged}
              ref='map'>
              {
                // NOTE: only try to render this if google is defined
                // was getting some weird errors :/
                typeof window.google !== 'undefined' ? <SearchBox
                // bounds={searchMap.bounds}
                controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
                onPlacesChanged={
                  componentContext.handlePlacesChanged}
                placeholder='Search for your campsite location'
                ref='searchBox'
                style={searchInputStyle}
              /> : null}
              {searchMap.markers
                .map((place, index) => (
                  <Marker key={index} position={{
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                  }} />
              ))}
            </GoogleMap>
          }
          hostname={"maps.googleapis.com"}
          loadingElement={
            <div style={{ height: '100%' }}>
              <h3>Hold tight, a map is loading</h3>
            </div>
          }
          pathname={"/maps/api/js"}
          query={
            {
              v: '3',
              libraries: 'places'
            }
          }
        />
      </section>
    );
  }
});
