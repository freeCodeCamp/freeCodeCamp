import { ofType } from 'redux-epic';
import debug from 'debug';

import {
  types as appTypes,
  createErrorObservable,
  currentChallengeSelector
} from '../../redux';
import { types, fetchMapUiComplete } from './';
import { langSelector } from '../../Router/redux';
import { shapeChallenges } from '../../redux/utils';

const isDev = debug.enabled('fcc:*');

export default function fetchMapUiEpic(
  actions,
  { getState },
  { services }
) {
  return actions::ofType(
    appTypes.appMounted,
    types.fetchMapUi.start
  )
    .flatMapLatest(() => {
      const lang = langSelector(getState());
      const options = {
        params: { lang },
        service: 'map-ui'
      };
      return services.readService$(options)
        .retry(3)
        .map(({ entities, ...res }) => ({
          entities: shapeChallenges(
            entities,
            isDev
          ),
          initialNode: currentChallengeSelector(getState()),
          ...res
        }))
        .map(fetchMapUiComplete)
        .catch(createErrorObservable);
    });
  }
