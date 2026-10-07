import { version } from "../package.json";

import type AlgoliaAnalytics from "./insights";

export const DEFAULT_ALGOLIA_AGENTS = [
  `insights-js (${version})`,
  `insights-js-${__FLAVOR__} (${version})`
];

export function addAlgoliaAgent(
  this: AlgoliaAnalytics,
  algoliaAgent: string
): void {
  if (this._ua.indexOf(algoliaAgent) === -1) {
    this._ua.push(algoliaAgent);
  }
}
