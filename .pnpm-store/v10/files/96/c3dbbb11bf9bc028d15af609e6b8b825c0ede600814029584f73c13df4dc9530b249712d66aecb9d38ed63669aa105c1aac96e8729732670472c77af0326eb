/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import {Deferred} from '../util/Deferred.js';
import {createFunction} from '../util/Function.js';

import * as ARIAQuerySelector from './ARIAQuerySelector.js';
import * as CSSSelector from './CSSSelector.js';
import * as CustomQuerySelectors from './CustomQuerySelector.js';
import * as PierceQuerySelector from './PierceQuerySelector.js';
import {IntervalPoller, MutationPoller, RAFPoller} from './Poller.js';
import * as PQuerySelector from './PQuerySelector.js';
import {
  createTextContent,
  isSuitableNodeForTextMatching,
} from './TextContent.js';
import * as TextQuerySelector from './TextQuerySelector.js';
import * as util from './util.js';
import * as XPathQuerySelector from './XPathQuerySelector.js';

/**
 * @internal
 */
const PuppeteerUtil = Object.freeze({
  ...ARIAQuerySelector,
  ...CustomQuerySelectors,
  ...PierceQuerySelector,
  ...PQuerySelector,
  ...TextQuerySelector,
  ...util,
  ...XPathQuerySelector,
  ...CSSSelector,
  Deferred,
  createFunction,
  createTextContent,
  IntervalPoller,
  isSuitableNodeForTextMatching,
  MutationPoller,
  RAFPoller,
});

/**
 * @internal
 */
export type PuppeteerInjectedUtil = typeof PuppeteerUtil;

/**
 * @internal
 */
export default PuppeteerUtil;
