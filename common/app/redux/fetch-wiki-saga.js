import { Observable } from 'rx';

import { dashify } from '../../utils';
import { get$ } from '../../utils/ajax-stream';
import {
  createErrorObservable,
  updateBlock,
  updateSuperBlock,
  updateWiki
} from './actions';
import {
  initMap
} from '../routes/challenges/redux/actions';
import {
  createMapUi,
  searchableChallengeTitles
} from '../routes/challenges/utils';
import types from './types';

const { fetchWiki } = types;
export default function fetchWikiSaga(action$, getState) {
  return action$
    .filter(action => action.type === fetchWiki)
    .flatMap(() => {
      const url = 'https://glitter-organisation.gomix.me/api/v1/wiki';
      return get$(url)
        .flatMap(result => {
          const {
            category_map: categories,
            topics
          } = JSON.parse(result.response);
          const wikiTopics = Object.keys(categories)
            .reduce((accu, current) => {
              const currentTopics = topics
                .map(topic => ({
                  ...topic,
                  dashedName: dashify(topic.title)
                }))
                .filter(topic => topic.category_id === parseInt(current, 10));
              const dashedName = dashify(categories[current]);
              return {
                ...accu,
                [dashedName]: [ ...currentTopics ]
              };
            }, {});
            const wikiMap = Object.keys(categories)
              .map(category => categories[category])
              .sort()
              .reduce((accu, current) => {
                const title = current.slice(0);
                const dashedName = dashify(current);
                return {
                  ...accu,
                  [dashedName]: { title, dashedName }
                };
              }, {});
              const store = getState();
              const { entities } = store;
              const { superBlock, block } = entities;
              const superBlockWithWiki = {
                ...superBlock,
                'forum-wiki': {
                  blocks: Object.keys(wikiMap),
                  dashedName: 'forum-wiki',
                  name: 'Forum Wiki',
                  order: 8,
                  title: 'Forum Wiki'
                }
              };
              // using the prop name 'challenges' to conform with the mapUI
              const wikiBlocks = Object.keys(wikiMap)
                .reduce((accu, current) => {
                  const topicsForBlock = wikiTopics[current]
                    .map(topic => topic.dashedName);
                  return {
                    ...accu,
                    [current]: {
                      challenges: topicsForBlock
                    }
                  };
                }, {});
              const blockWithWiki = {
                ...block,
                ...wikiBlocks
              };
              const updatedEntities = {
                ...entities,
                block: blockWithWiki,
                superBlock: superBlockWithWiki
              };
          return Observable.of(
            updateBlock(blockWithWiki),
            updateSuperBlock(superBlockWithWiki),
            updateWiki({ wikiMap, wikiTopics }),
            initMap(
              createMapUi(
                updatedEntities,
                Object.keys(superBlockWithWiki),
                searchableChallengeTitles(updatedEntities)
              )
            )
          );
        })
        .catch(createErrorObservable);
    });
}
