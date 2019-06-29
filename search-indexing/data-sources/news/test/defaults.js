'use strict';

const _ = require('lodash');
const parse = require('../lib/process').parse;
const test = require('tape').test;

const now = new Date();
const config = {
  selectors: [
    { key: 'title', selector: 'title' },
    { key: 'false', selector: 'false' }
  ],
  defaults: {
    title: 'value from default!',
    false: false
  }
};

test('No defaults', t => {
  const rec = {
    date: now,
    timestamp: now.getTime()
  };
  const c = _.cloneDeep(config);
  c.defaults = undefined;
  const data = `<html></html>`;
  parse(rec, data, c);
  t.equal(rec.title, null);
  t.equal(rec.false, null);
  t.end();
});

test('With defaults', t => {
  const rec = {
    date: now,
    timestamp: now.getTime()
  };
  const c = _.cloneDeep(config);
  const data = `<html></html>`;
  parse(rec, data, c);
  t.equal(rec.title, c.defaults.title);
  t.equal(rec.false, c.defaults.false);
  t.end();
});
