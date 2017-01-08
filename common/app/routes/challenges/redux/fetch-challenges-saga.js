import { Observable } from 'rx';
import debug from 'debug';

import { challengeSelector } from './selectors';
import types from './types';
import {
  fetchChallengeCompleted,
  fetchChallengesCompleted,
  updateCurrentChallenge,
  initMap
} from './actions';
import {
  createMapUi,
  filterComingSoonBetaFromEntities,
  searchableChallengeTitles
} from '../utils';
import {
  delayedRedirect,
  createErrorObservable
} from '../../../redux/actions';
import createNameIdMap from '../../../../utils/create-name-id-map';

const isDev = debug.enabled('fcc:*');

const { fetchChallenge, fetchChallenges, replaceChallenge } = types;

export default function fetchChallengesSaga(action$, getState, { services }) {
  return action$
    .filter(({ type }) => (
      type === fetchChallenges ||
      type === fetchChallenge ||
      type === replaceChallenge
    ))
    .flatMap(({ type, payload: { dashedName, block } = {} }) => {
      const state = getState();
      const lang = state.app.lang;
      if (type === replaceChallenge) {
        const { challenge: newChallenge } = challengeSelector({
          ...state,
          challengesApp: {
            ...state.challengesApp,
            challenge: dashedName
          }
        });
        if (state.challengesApp.challenge !== newChallenge.dashedName) {
          return Observable.just(updateCurrentChallenge(newChallenge));
        }
        return Observable.just(null);
      }
      const options = { service: 'map' };
      options.params = { lang };
      if (type === fetchChallenge) {
        options.params.dashedName = dashedName;
        options.params.block = block;
      }
      return services.readService$(options)
        .retry(3)
        .flatMap(({ entities, result, redirect } = {}) => {
          if (type === fetchChallenge) {
            return Observable.of(
              fetchChallengeCompleted(
                createNameIdMap(entities),
                result
              ),
              updateCurrentChallenge(entities.challenge[result.challenge]),
              redirect ? delayedRedirect(redirect) : null
            );
          }
          const filteredEntities = filterComingSoonBetaFromEntities(
            entities,
            isDev
          );
          const searchNames = searchableChallengeTitles(filteredEntities);
          return Observable.of(
            fetchChallengesCompleted(
              createNameIdMap(filteredEntities),
              result
            ),
            initMap(
              createMapUi(
                filteredEntities,
                result,
                searchNames
              )),
          );
        })
        .catch(createErrorObservable);
    });
}
