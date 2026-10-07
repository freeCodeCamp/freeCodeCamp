// Copyright 2013 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0

'use strict';

const libvips = require('../lib/libvips');

try {
  if (!(libvips.useGlobalLibvips() || libvips.hasVendoredLibvips())) {
    process.exitCode = 1;
  }
} catch (err) {
  process.exitCode = 1;
}
