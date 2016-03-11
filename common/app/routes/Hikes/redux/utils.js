import debug from 'debug';
import _ from 'lodash';

const log = debug('fcc:hikes:utils');

function getFirstHike(hikes) {
  return hikes[0];
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
//   hikes: String[],
//   dashedName: String
// ) => String
export function findNextHikeName(hikes, dashedName) {
  if (!dashedName) {
    log('find next hike no dashedName provided');
    return hikes[0];
  }
  const currentIndex = _.findIndex(
    hikes,
    _dashedName => _dashedName === dashedName
  );

  if (currentIndex >= hikes.length) {
    return '';
  }
  return hikes[currentIndex + 1];
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
