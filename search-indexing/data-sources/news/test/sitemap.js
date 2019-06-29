'use strict';

const sitemap = require('../lib/sitemap');
const test = require('tape').test;

const config = {
  sitemaps: [{ url: 'https://www.sitemaps.org/sitemap.xml', lang: 'en' }]
};

test('Parse sitemap', t => {
  // Test sitemap parsing
  sitemap(config, function(sitemap, urls) {
    t.ok(urls.length > 1, 'more than one url');
    t.end();
  });
});
