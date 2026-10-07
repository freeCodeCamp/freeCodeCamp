/**
 * @license
 * Copyright 2026 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import assert from 'node:assert';

import {Browser, BrowserPlatform, DefaultProvider} from './main.js';

describe('DefaultProvider', () => {
  let provider: DefaultProvider;

  beforeEach(() => {
    provider = new DefaultProvider();
  });

  describe('constructor', () => {
    it('should create provider with default base URL', () => {
      const defaultProvider = new DefaultProvider();
      assert(defaultProvider instanceof DefaultProvider);
    });

    it('should create provider with custom base URL', () => {
      const customBaseUrl = 'https://custom.example.com/';
      const customProvider = new DefaultProvider(customBaseUrl);
      assert(customProvider instanceof DefaultProvider);
    });
  });

  describe('BrowserProvider interface compliance', () => {
    it('should implement supports method', () => {
      assert.strictEqual(typeof provider.supports, 'function');
    });

    it('should implement getDownloadUrl method', () => {
      assert.strictEqual(typeof provider.getDownloadUrl, 'function');
    });

    it('should implement getExecutablePath method', () => {
      assert.strictEqual(typeof provider.getExecutablePath, 'function');
    });
  });

  describe('basic functionality', () => {
    it('should handle different browsers', () => {
      // Test with a known build ID that should exist
      const result = provider.supports({
        browser: Browser.CHROME,
        platform: BrowserPlatform.LINUX,
        buildId: '120.0.6099.109',
      });

      // Chrome for Testing supports all browsers
      assert.strictEqual(result, true);
    });

    it('should handle different platforms', () => {
      const result = provider.supports({
        browser: Browser.CHROME,
        platform: BrowserPlatform.MAC,
        buildId: '120.0.6099.109',
      });

      // Chrome for Testing supports all platforms
      assert.strictEqual(result, true);
    });

    it('should handle ChromeDriver', () => {
      const result = provider.supports({
        browser: Browser.CHROMEDRIVER,
        platform: BrowserPlatform.LINUX,
        buildId: '120.0.6099.109',
      });

      // Chrome for Testing supports all browsers
      assert.strictEqual(result, true);
    });

    it('should return URL for valid build', () => {
      const result = provider.getDownloadUrl({
        browser: Browser.CHROME,
        platform: BrowserPlatform.LINUX,
        buildId: '120.0.6099.109',
      });

      assert(result instanceof URL);
      assert(result.toString().includes('120.0.6099.109'));
    });
  });
});
