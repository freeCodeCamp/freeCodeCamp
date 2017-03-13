import { Observable } from 'rx';
import MouseTrap from 'mousetrap';
import { push } from 'react-router-redux';

import {
  toggleNightMode,
  hardGoTo
} from '../../common/app/redux/actions';
import {
  challengeSelector
} from '../../common/app/routes/challenges/redux/selectors';
import {
  stepBackward,
  stepForward,
  submitChallenge
} from '../../common/app/routes/challenges/redux/actions';
import types from '../../common/app/routes/challenges/redux/types';
import combineSagas from '../../common/utils/combine-sagas';


function bindKey(key, actionCreator, eventTrigger) {
  return Observable.fromEventPattern(
    h => MouseTrap.bind(key, h, eventTrigger),
    h => MouseTrap.unbind(key, h, eventTrigger)

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

function mouseTrapSaga(actions$) {
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

const {
  bindStepKeys,
  unbindStepKeys
} = types;

function noop() {
  return null;
}

function modifiedStepForward(getState) {
  const state = getState();
  const { challenge: { description = [] } } = challengeSelector(state);
  const { challengesApp: { currentIndex } } = state;
  const isLastStep = description.length >= currentIndex + 1;

  if (isLastStep) {
    return submitChallenge();
  }
  return stepForward();
}

function stepTrapSaga(actions$) {
  return actions$
  .filter(({ type }) => (
    type === bindStepKeys ||
    type === unbindStepKeys
    ))
  .selectMany(({ type }) => {
    if (type === bindStepKeys) {
      const stepTraps = [
      bindKey('right', stepForward, 'keydown'),
      bindKey('left', stepBackward, 'keydown')
      ];
      return Observable.merge(stepTraps).takeUntil(actions$.last());
    }
    if (type === unbindStepKeys) {
      const stepTraps = [
      bindKey('right', noop),
      bindKey('left', noop)
      ];
      return Observable.merge(stepTraps).takeUntil(actions$.last());
    }
    return Observable.of(null);
  });
}

function devLog(actions$) {
  return actions$.selectMany(({ type }) => {
    console.info(type);
    return Observable.of(null);
  });
}

export default combineSagas(mouseTrapSaga, stepTrapSaga, devLog);
