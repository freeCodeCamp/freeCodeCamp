'use strict';

exports.__esModule = true;

const fs = require('fs');
const pkgUp = require('./pkgUp').default;

/** @type {(str: string) => string} */
function stripBOM(str) {
  return str.replace(/^\uFEFF/, '');
}

/**
 * Derived significantly from read-pkg-up@2.0.0. See license below.
 *
 * @copyright Sindre Sorhus
 * MIT License
 *
 * Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/** @type {import('./readPkgUp').default} */
exports.default = function readPkgUp(opts) {
  const fp = pkgUp(opts);

  if (!fp) {
    return {};
  }

  try {
    return {
      pkg: JSON.parse(stripBOM(fs.readFileSync(fp, { encoding: 'utf-8' }))),
      path: fp,
    };
  } catch (e) {
    return {};
  }
};
