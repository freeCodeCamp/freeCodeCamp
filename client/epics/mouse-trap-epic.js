import { Observable } from 'rx';
import MouseTrap from 'mousetrap';
import { push } from 'react-router-redux';
import {
  toggleNightMode,
  hardGoTo
} from '../../common/app/redux';
import {
  aboutUrl,
  donateUrl,
  forumUrl,
  githubUrl
} from '../../common/utils/constantStrings.json';

function bindKey(key, actionCreator) {
  return Observable.fromEventPattern(
    h => MouseTrap.bind(key, h),
    h => MouseTrap.unbind(key, h)
  )
    .map(actionCreator);
}

const softRedirects = {
  'g n n': '/challenges/next-challenge',
  'g n m': '/map',
  'g n o': '/settings'
};

export default function mouseTrapSaga(actions) {
  const traps = [
    ...Object.keys(softRedirects)
      .map(key => bindKey(key, () => push(softRedirects[key]))),
    bindKey(
      'g n a',
      () => hardGoTo(aboutUrl)
    ),
    bindKey(
      'g n r',
      () => hardGoTo(githubUrl)
    ),
    bindKey(
      'g n d',
      () => hardGoTo(donateUrl)
    ),
    bindKey(
      'g n w',
      () => hardGoTo(forumUrl)
    ),
    bindKey('g t n', toggleNightMode)
  ];
  return Observable.merge(traps).takeUntil(actions.last());
}
