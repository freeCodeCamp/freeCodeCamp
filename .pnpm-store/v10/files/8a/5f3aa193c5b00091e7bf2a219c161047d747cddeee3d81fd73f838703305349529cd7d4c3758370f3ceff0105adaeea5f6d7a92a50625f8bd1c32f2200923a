/**
 * @import {Event} from 'micromark-util-types'
 */

import { subtokenize } from 'micromark-util-subtokenize';

/**
 * @param {Array<Event>} events
 *   Events.
 * @returns {Array<Event>}
 *   Events.
 */
export function postprocess(events) {
  while (!subtokenize(events)) {
    // Empty
  }
  return events;
}