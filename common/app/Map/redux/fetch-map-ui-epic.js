import { ofType } from 'redux-epic';
import debug from 'debug';

import {
  types as appTypes,
  createErrorObservable
} from '../../redux';
import { types, fetchMapUiComplete } from './';
import { shapeChallenges } from '../../redux/utils';

const isDev = debug.enabled('fcc:*');

export default function fetchMapUiEpic(
  actions,
  _,
  { services }
) {
  return actions.do(console.log)::ofType(
    appTypes.appMounted,
    types.fetchMapUi.start
  )
    .flatMapLatest(() => {
      const options = {
        service: 'map-ui'
      };
      return services.readService$(options)
        .retry(3)
        .do(console.info)
        .map(({ entities, ...res }) => ({
          entities: shapeChallenges(
            entities,
            isDev
          ),
          ...res
        }))
        .map(fetchMapUiComplete)
        .catch(createErrorObservable);
    });
  }
