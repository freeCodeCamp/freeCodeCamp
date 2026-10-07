/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {ElementHandle} from '../api/ElementHandle.js';
import {assert} from '../util/assert.js';
import {AsyncIterableUtil} from '../util/AsyncIterableUtil.js';

import {QueryHandler, type QuerySelector} from './QueryHandler.js';
import type {AwaitableIterable} from './types.js';

interface ARIASelector {
  name?: string;
  role?: string;
}

const isKnownAttribute = (
  attribute: string,
): attribute is keyof ARIASelector => {
  return ['name', 'role'].includes(attribute);
};

/**
 * The selectors consist of an accessible name to query for and optionally
 * further aria attributes on the form `[<attribute>=<value>]`.
 * Currently, we only support the `name` and `role` attribute.
 * The following examples showcase how the syntax works wrt. querying:
 *
 * - 'title[role="heading"]' queries for elements with name 'title' and role 'heading'.
 * - '[role="image"]' queries for elements with role 'image' and any name.
 * - 'label' queries for elements with name 'label' and any role.
 * - '[name=""][role="button"]' queries for elements with no name and role 'button'.
 */
const ATTRIBUTE_REGEXP =
  /\[\s*(?<attribute>\w+)\s*=\s*(?<quote>"|')(?<value>\\.|.*?(?=\k<quote>))\k<quote>\s*\]/g;
const parseARIASelector = (selector: string): ARIASelector => {
  if (selector.length > 10_000) {
    throw new Error(`Selector ${selector} is too long`);
  }

  const queryOptions: ARIASelector = {};
  const defaultName = selector.replace(
    ATTRIBUTE_REGEXP,
    (_, attribute, __, value) => {
      assert(
        isKnownAttribute(attribute),
        `Unknown aria attribute "${attribute}" in selector`,
      );
      queryOptions[attribute] = value;
      return '';
    },
  );
  if (defaultName && !queryOptions.name) {
    queryOptions.name = defaultName;
  }
  return queryOptions;
};

/**
 * @internal
 */
export class ARIAQueryHandler extends QueryHandler {
  static override querySelector: QuerySelector = async (
    node,
    selector,
    {ariaQuerySelector},
  ) => {
    return await ariaQuerySelector(node, selector);
  };

  static override async *queryAll(
    element: ElementHandle<Node>,
    selector: string,
  ): AwaitableIterable<ElementHandle<Node>> {
    const {name, role} = parseARIASelector(selector);
    yield* element.queryAXTree(name, role);
  }

  static override queryOne = async (
    element: ElementHandle<Node>,
    selector: string,
  ): Promise<ElementHandle<Node> | null> => {
    return (
      (await AsyncIterableUtil.first(this.queryAll(element, selector))) ?? null
    );
  };
}
