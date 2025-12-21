import type { Hit as InstantSearchHit } from 'instantsearch.js';

export interface Hit extends InstantSearchHit {
  url: string;
  title?: string;
}
