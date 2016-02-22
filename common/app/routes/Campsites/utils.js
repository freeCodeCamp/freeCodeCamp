// Some helper functions

var _ = require('lodash');

// group by country, then group by subdivision, then sort by city
// if a country doesn't have more than 1 subdivisions, ignore that level
export function groupCampsites(campsites) {
  const subdivCutoff = 1;
  function sortByCity(campsites) {
    return _.sortBy(campsites, 'city');
  }
  return _(campsites)
    // group by country
    .groupBy('country')
    // for each country, group by subdivision
    .mapValues(function(country) {
      // group by subdivision
      var groupedBySubdivision = _(country)
        .groupBy('subdivision')
        .value();
      if (Object.keys(groupedBySubdivision).length > subdivCutoff) {
        // sort by city and return
        return _.mapValues(groupedBySubdivision, sortByCity);
      } else {
        var sortedCities = sortByCity(country);
        return {noSubdiv: sortedCities};
      }
    })
    .value();
}
// used to reset scroll position to top of window on page (container) changes
export function scrollToTopOfWindow() {
  window.scrollTo(0, 0);
}

// for parsing the location object passed to the saveCampsiteToDb action
// NOTE: the structure of address_components is not consistent accross
// countries and this could be handled better
export function parseGoogleLocation(loc) {

  // helper function for parsing location info
  function addAddressComponent(loc, partName) {
    try {
      return loc.address_components.filter(
        function(part) { return part.types[0] === partName; })[0].long_name;
    } catch (e) {
      // handle special case for when locality is missing but
      // sublocality_level_1 has similar info
      if (partName === 'locality') {
        return addAddressComponent(loc, 'sublocality_level_1');
      } else {
        return 'none';
      }
    }
  }
  return {
     city: addAddressComponent(loc, 'locality'),
     subdivision:
      addAddressComponent(loc, 'administrative_area_level_1'),
     country: addAddressComponent(loc, 'country'),
     // formatting as 'lat,lng'
     location: loc.geometry.location.lat() + ',' +
      loc.geometry.location.lng(),
     googleId: loc.id,
     mapURL: loc.url
  };
}

// from: http://stackoverflow.com/questions/4817029/
// whats-the-best-way-to-detect-a-touch-screen-device-using-javascript
export function isTouchDevice() {
  if (typeof window !== 'undefined') {
    return 'ontouchstart' in window ||
      navigator.maxTouchPoints;
  } else {
    return false;
  }
}
