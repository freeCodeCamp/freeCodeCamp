import flowRight from 'lodash/flowRight';
import { createNameIdMap } from '../../utils/map.js';

export const shapeChallenges = flowRight(
  entities => ({
    ...entities,
    ...createNameIdMap(entities)
  })
);
