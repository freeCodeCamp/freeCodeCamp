// Renders a list of approved campsites, grouped and sorted by country

import React, { PropTypes } from 'react';
import { groupCampsites } from '../utils';
import CampsiteListSubdiv from './CampsiteListSubdiv.jsx';

export default React.createClass({
  displayName: 'Campsites List',

  propTypes: {
    campsites: PropTypes.array,
    showEditButton: PropTypes.bool
  },

  // Takes grouped campsites, and sorts by country, then subdivision, then city
  // NOTE: the sorts in this function will put 'Z' before 'a' which may not be
  // desirable
  generateList(formattedCampsites) {
    const {
      showEditButton
    } = this.props;
    return Object.keys(formattedCampsites).sort().map(function(countryKey) {
      return [(<li key={'country-' + countryKey}><h3>{countryKey}:</h3></li>)]
        .concat(Object.keys(formattedCampsites[countryKey])
          .sort()
          .map(function(subdivKey, i, arr) {
            return (<CampsiteListSubdiv
              cities={formattedCampsites[countryKey][subdivKey]}
              numSubdivisions={arr.length}
              showEditButton={showEditButton}
              subdivKey={subdivKey}
           />);
        })
      );
    });
  },

  render() {
    const { campsites } = this.props;
    const formattedCampsites = groupCampsites(campsites);
    return (
      <div>
        { campsites.length === 0 ? (<h4>Campsites Loading</h4>) : (
        <div className='text-left'>
          <ul>
            {this.generateList(formattedCampsites)}
          </ul>
        </div>)}
      </div>
    );
  }
});
