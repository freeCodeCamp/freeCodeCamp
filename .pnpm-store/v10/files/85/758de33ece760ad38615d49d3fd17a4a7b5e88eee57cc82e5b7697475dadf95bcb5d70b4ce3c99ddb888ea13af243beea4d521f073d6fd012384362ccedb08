// Copyright 2017 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0

'use strict';

const isLinux = () => process.platform === 'linux';

let report = null;
const getReport = () => {
  if (!report) {
    /* istanbul ignore next */
    if (isLinux() && process.report) {
      const orig = process.report.excludeNetwork;
      process.report.excludeNetwork = true;
      report = process.report.getReport();
      process.report.excludeNetwork = orig;
    } else {
      report = {};
    }
  }
  return report;
};

module.exports = { isLinux, getReport };
