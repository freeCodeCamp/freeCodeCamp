// A map with a pin for each approved campsite

import React, { PropTypes } from 'react';
import { GoogleMap, Marker } from 'react-google-maps';
import { default as ScriptjsLoader }
  from 'react-google-maps/lib/async/ScriptjsLoader';

// default location to center map
const DEFAULT_MAP_SETTINGS = {
  lat: 15,
  lng: 20,
  zoom: 2
};

export default React.createClass({
  displayName: 'Campsites Map',

  propTypes: {
    campsites: PropTypes.array
  },


// Take campsite returned from backend and parse into format for marker

// Example formatted campsite:
//    {
//      position: {
//        lat: 25.0112183,
//        lng: 121.52067570000001,
//      },
//      key: "unique-value-1",
//      url: "http://www.gohere.com"
//    }

  formatCampsitesForMarkers: function(campsite) {
    const latLongSplit = campsite
      .location.split(',')
      .map((l) => parseFloat(l));

    return {
      position: {
        lat: latLongSplit[0],
        lng: latLongSplit[1]
      },
      // Note: this key needs to be unique :)
      key: campsite.id,
      url: campsite.url
    };
  },

  // open a popup with campsite's FB group
  // NOTE: this could be done better, most browsers block popups by default!
  handlePinClick(marker) {
    window.open(marker.url);
  },

  renderHomepageMap: function(campsites) {
    return (
      <section className='campsites-home-map'>
         <ScriptjsLoader
          containerElement={
            <div style={{ height: '100%' }} />
          }
          googleMapElement={
            <GoogleMap
              defaultCenter={DEFAULT_MAP_SETTINGS}
              defaultZoom={DEFAULT_MAP_SETTINGS.zoom} >
            {typeof campsites !== 'undefined' && campsites.length > 0 ?
              campsites.map(this.formatCampsitesForMarkers).map((marker) => {
              return (
                <Marker {...marker}
                  onClick={this.handlePinClick.bind(null, marker)}/>
              );
            }) : null}
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
              // NOTE: the places library isn't needed here, but this caches
              // the request needed for the creating campsite map and prevents
              // the gmaps library from loading twice and throwing errors
              libraries: 'places'
            }
          }
        />
      </section>
    );
  },
  render() {
    const {
      campsites
    } = this.props;
    return (
      <div>
        {this.renderHomepageMap(campsites)}
      </div>
    );
  }
});
