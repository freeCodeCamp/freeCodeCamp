import { Observable } from 'rx';
import { Schema, valuesOf, arrayOf, normalize } from 'normalizr';
import { nameify, dasherize } from '../utils';

const challenge = new Schema('challenge', { idAttribute: 'dashedName' });
const block = new Schema('block', { idAttribute: 'dashedName' });
const superBlock = new Schema('superBlock', { idAttribute: 'dashedName' });

block.define({
  challenges: arrayOf(challenge)
});

superBlock.define({
  blocks: arrayOf(block)
});

const mapSchema = valuesOf(superBlock);

/*
 * interface ChallengeMap {
 *   result: [superBlockDashedName: String]
 *   entities: {
 *     superBlock: {
 *       [superBlockDashedName: String]: {
 *          blocks: [blockDashedName: String]
 *        }
 *     },
 *     block: {
 *       [blockDashedName: String]: {
 *         challenges: [challengeDashedName: String]
 *       }
 *     },
 *     challenge: {
 *       [challengeDashedName: String]: Challenge
 *     }
 *   }
 * }
 */
function cachedMap(Block) {
  const query = {
    include: 'challenges',
    order: ['superOrder ASC', 'order ASC']
  };
  return Block.find$(query)
    .flatMap(blocks => Observable.from(blocks.map(block => block.toJSON())))
    .reduce((map, block) => {
      if (map[block.superBlock]) {
        map[block.superBlock].blocks.push(block);
      } else {
        map[block.superBlock] = {
          title: block.superBlock,
          order: block.superOrder,
          name: nameify(block.superBlock),
          dashedName: dasherize(block.superBlock),
          blocks: [block]
        };
      }
      return map;
    }, {})
    .map(map => normalize(map, mapSchema))
    .map(map => {
      const result = Object.keys(map.result).reduce((result, supName) => {
        const index = map.entities.superBlock[supName].order;
        result[index] = supName;
        return result;
      }, []);
      return {
        ...map,
        result
      };
    })
    .shareReplay();
}

export default function mapService(app) {
  const Block = app.models.Block;
  const challengeMap$ = cachedMap(Block);
  return {
    name: 'map',
    read: (req, resource, params, config, cb) => {
      return challengeMap$.subscribe(map => cb(null, map), cb);
    }
  };
}
