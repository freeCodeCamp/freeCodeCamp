import { Observable } from 'rx';
import MouseTrap from 'mousetrap';
import { push } from 'react-router-redux';

import {
  toggleNightMode,
  hardGoTo
} from '../../common/app/redux/actions';

import { step } from '../../common/app/utils/challengeTypes';
import {
  stepForward,
  stepBackward
} from '../../common/app/routes/challenges/redux/actions';

function bindKey(key, actionCreator, direction) {
  return Observable.fromEventPattern(
    h => MouseTrap.bind(key, h, direction),
    h => MouseTrap.unbind(key, h, direction)
  )
    .map(actionCreator);
}

const softRedirects = {
  'g n n': '/challenges/next-challenge',
  'g n a': '/about',
  'g n m': '/map',
  'g n s': '/shop',
  'g n o': '/settings'
};

export default function mouseTrapSaga(actions$, getState) {
  const {
    challengesApp: { challenge },
    entities: {
      challenge: challengeMap
    }
  } = getState();
  const challengeType =
    challenge ?
      challengeMap[challenge].challengeType :
      null;

  const traps$ = [
    ...Object.keys(softRedirects)
      .map(key => bindKey(key, () => push(softRedirects[key]))),
    bindKey(
      'g n r',
      () => hardGoTo('https://github.com/freecodecamp/freecodecamp')
    ),
    bindKey(
      'g n w',
      () => hardGoTo('http://forum.freecodecamp.com')
    ),
    bindKey('g t n', toggleNightMode)
  ];

  if (challengeType === step) {
    const stepTraps$ = [
      bindKey('right', stepForward, 'keyup'),
      bindKey('left', stepBackward, 'keyup')
    ].concat(traps$);
    return Observable.merge(stepTraps$).takeUntil(actions$.last());
  }
  return Observable.merge(traps$).takeUntil(actions$.last());
}
