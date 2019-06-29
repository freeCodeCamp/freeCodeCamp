'use strict';

const _ = require('lodash');
const process = require('../lib/process');
const test = require('tape').test;

const config = {
  maxRecordSize: 100
};

test('maxRecordSize', t => {
  const rec = {
    text: new Array(100).fill('aaaaaaaaaa')
  };
  t.equal(rec.text.length, 100);
  const c = _.clone(config);
  process.trimmer(rec, c);
  t.equal(rec.text.length, 6);
  t.end();
});

test('custom popped attribute', t => {
  const rec = {
    text: new Array(5).fill('aaaaaaaaaa'),
    text2: new Array(100).fill('aaaaaaaaaa')
  };
  t.equal(rec.text.length, 5);
  t.equal(rec.text2.length, 100);
  const c = _.clone(config);
  c.attributesToPop = ['text2'];
  process.trimmer(rec, c);
  t.equal(rec.text.length, 5);
  t.equal(rec.text2.length, 1);
  t.end();
});

test('custom popped attributes', t => {
  const rec = {
    text: new Array(5).fill('aaaaaaaaaa'),
    text2: new Array(100).fill('aaaaaaaaaa')
  };
  t.equal(rec.text.length, 5);
  t.equal(rec.text2.length, 100);
  const c = _.clone(config);
  c.attributesToPop = ['text2', 'text'];
  process.trimmer(rec, c);
  t.equal(rec.text.length, 3);
  t.equal(rec.text2.length, 3);
  t.end();
});
