'use strict';

const _ = require('lodash');
const parse = require('../lib/process').parse;
const test = require('tape').test;

const now = new Date();
const config = {
  selectors: [
    { key: 'json', selector: 'json' },
    { key: 'integer', selector: 'integer' },
    { key: 'boolean', selector: 'boolean' },
    { key: 'float', selector: 'float' }
  ],
  types: {
    json: 'json',
    integer: 'integer',
    boolean: 'boolean',
    float: 'float'
  }
};

test('JSON formatter simple', t => {
  const rec = {
    date: now,
    timestamp: now.getTime()
  };
  const c = _.cloneDeep(config);
  const data = `<html><head>
	<json>{"test": true}</json>
<head></html>`;
  parse(rec, data, c);
  t.equal(rec.date, now);
  t.equal(rec.timestamp, now.getTime());
  t.equal(rec.json.test, true);
  t.end();
});

test('JSON formatter', t => {
  const rec = {};
  const c = _.cloneDeep(config);
  const data = `<html>
	<meta content='{"test":"1","tes2":0.4, "o": {"o":"O"}}'>
</html>`;
  c.selectors[0] = { key: 'json', selector: 'meta' };
  parse(rec, data, c);
  t.equal(rec.json.test, '1');
  t.equal(rec.json.tes2, 0.4);
  t.equal(rec.json.o.o, 'O');
  t.end();
});

test('Integer formatter', t => {
  const rec = {
    date: now,
    timestamp: now.getTime()
  };
  const c = _.cloneDeep(config);
  const data = `<html><head>
	<integer>99</integer>
<head></html>`;
  parse(rec, data, c);
  t.equal(rec.date, now);
  t.equal(rec.timestamp, now.getTime());
  t.equal(rec.integer, 99);
  t.end();
});

test('Integer formatter wrong', t => {
  const rec = {
    date: now,
    timestamp: now.getTime()
  };
  const c = _.cloneDeep(config);
  const data = `<html><head>
	<integer>uhgd</integer>
<head></html>`;
  parse(rec, data, c);
  t.equal(rec.date, now);
  t.equal(rec.timestamp, now.getTime());
  t.ok(isNaN(rec.integer));
  t.end();
});

test('Float formatter', t => {
  const rec = {
    date: now,
    timestamp: now.getTime()
  };
  const c = _.cloneDeep(config);
  const data = `<html><head>
	<float>99.06</float>
<head></html>`;
  parse(rec, data, c);
  t.equal(rec.date, now);
  t.equal(rec.timestamp, now.getTime());
  t.equal(rec.float, 99.06);
  t.end();
});

test('Float formatter wrong', t => {
  const rec = {
    date: now,
    timestamp: now.getTime()
  };
  const c = _.cloneDeep(config);
  const data = `<html><head>
	<float>uhgd</float>
<head></html>`;
  parse(rec, data, c);
  t.equal(rec.date, now);
  t.equal(rec.timestamp, now.getTime());
  t.ok(isNaN(rec.float));
  t.end();
});

test('Boolean formatter yes', t => {
  const rec = {
    date: now,
    timestamp: now.getTime()
  };
  const c = _.cloneDeep(config);
  const data = `<html><head>
	<boolean>yes</boolean>
<head></html>`;
  parse(rec, data, c);
  t.equal(rec.date, now);
  t.equal(rec.timestamp, now.getTime());
  t.equal(rec.boolean, true);
  t.end();
});

test('Boolean formatter no', t => {
  const rec = {
    date: now,
    timestamp: now.getTime()
  };
  const c = _.cloneDeep(config);
  const data = `<html><head>
	<boolean>no</boolean>
<head></html>`;
  parse(rec, data, c);
  t.equal(rec.date, now);
  t.equal(rec.timestamp, now.getTime());
  t.equal(rec.boolean, false);
  t.end();
});

test('Boolean formatter false', t => {
  const rec = {
    date: now,
    timestamp: now.getTime()
  };
  const c = _.cloneDeep(config);
  const data = `<html><head>
	<boolean>false</boolean>
<head></html>`;
  parse(rec, data, c);
  t.equal(rec.date, now);
  t.equal(rec.timestamp, now.getTime());
  t.equal(rec.boolean, false);
  t.end();
});

test('Boolean formatter wrong', t => {
  const rec = {
    date: now,
    timestamp: now.getTime()
  };
  const c = _.cloneDeep(config);
  const data = `<html><head>
	<boolean>uhgd</boolean>
<head></html>`;
  parse(rec, data, c);
  t.equal(rec.date, now);
  t.equal(rec.timestamp, now.getTime());
  t.ok(rec.boolean);
  t.end();
});
