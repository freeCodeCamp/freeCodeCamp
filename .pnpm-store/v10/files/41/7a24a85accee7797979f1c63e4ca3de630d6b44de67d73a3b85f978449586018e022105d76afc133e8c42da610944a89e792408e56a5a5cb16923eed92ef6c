/**
 * @license
 * Copyright 2026 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {Protocol} from 'devtools-protocol';

import type {Issue} from '../api/Issue.js';

/**
 * @internal
 */
export class CdpIssue implements Issue {
  #code: Protocol.Audits.InspectorIssueCode;
  #details: Protocol.Audits.InspectorIssueDetails;

  constructor(issue: Protocol.Audits.InspectorIssue) {
    this.#code = issue.code;
    this.#details = issue.details;
  }

  get code(): Protocol.Audits.InspectorIssueCode {
    return this.#code;
  }

  get details(): Protocol.Audits.InspectorIssueDetails {
    return this.#details;
  }
}
