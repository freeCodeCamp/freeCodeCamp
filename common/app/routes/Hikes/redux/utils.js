import debug from 'debug';
import _ from 'lodash';

const log = debug('fcc:hikes:utils');

function getFirstHike(hikes) {
  return hikes.results[0];
}

// interface Hikes {
//   results: String[],
//   entities: {
//     hikeId: Challenge
//   }
// }
//
// findCurrentHike({
//   hikes: Hikes,
//   dashedName: String
// }) => String
export function findCurrentHike(hikes, dashedName) {
  if (!dashedName) {
    return getFirstHike(hikes) || {};
  }

  const filterRegex = new RegExp(dashedName, 'i');

  return hikes
    .results
    .filter(dashedName => {
      return filterRegex.test(dashedName);
    })
    .reduce((throwAway, hike) => {
      return hike;
    }, '');
}

export function getCurrentHike(hikes = {}, dashedName) {
  if (!dashedName) {
    return getFirstHike(hikes) || {};
  }
  return hikes.entities[dashedName];
}

// findNextHikeName(
//   hikes: { results: String[] },
//   dashedName: String
// ) => String
export function findNextHikeName({ results }, dashedName) {
  if (!dashedName) {
    log('find next hike no id provided');
    return results[0];
  }
  const currentIndex = _.findIndex(
    results,
    _dashedName => _dashedName === dashedName
  );

  if (currentIndex >= results.length) {
    return '';
  }
  return results[currentIndex + 1];
}


export function getMouse(e, [dx, dy]) {
  let { pageX, pageY, touches, changedTouches } = e;

  // touches can be empty on touchend
  if (touches || changedTouches) {
    e.preventDefault();
    // these re-assigns the values of pageX, pageY from touches
    ({ pageX, pageY } = touches[0] || changedTouches[0]);
  }

  return [pageX - dx, pageY - dy];
}
