'use strict';

const _ = require('lodash');
const parse = require('../lib/process').parse;
const test = require('tape').test;

const now = new Date();
const config = {
  selectors: [{ key: 'title', selector: 'title' }]
};

test('Simple parse', t => {
  const rec = {
    date: now,
    timestamp: now.getTime()
  };
  const c = _.cloneDeep(config);
  const data = `<html><head>
	<title>test</title>
<head></html>`;
  parse(rec, data, c);
  t.equal(rec.date, now);
  t.equal(rec.timestamp, now.getTime());
  t.equal(rec.title, 'test');
  t.end();
});

test('Parse with html comments', t => {
  const rec = {
    date: now,
    timestamp: now.getTime()
  };
  const c = _.cloneDeep(config);
  c.selectors.push({ key: 'p', selector: 'p' });
  const data = `<html><head>
	<title>test</title>
	<head>
	<body>
		<p>This is the content <!-- This is a comment --></p>
</body></html>`;
  parse(rec, data, c);
  t.equal(rec.date, now);
  t.equal(rec.timestamp, now.getTime());
  t.equal(rec.title, 'test');
  t.equal(rec.p, 'This is the content');
  t.end();
});

test('Custom selector parse', t => {
  const rec = {};
  const c = _.cloneDeep(config);
  const data = `<html>
	<a class="test">test</a>
	<a class="no-ok">not-ok</a>
</html>`;
  c.selectors.push({ key: 'custom', selector: 'a.test' });
  parse(rec, data, c);
  t.equal(rec.custom, 'test');
  t.end();
});

test('Selector exclusion parse', t => {
  const rec = {};
  const c = _.cloneDeep(config);
  const data = `<html><body>
	<a>test</a>
	<footer><a class="no-ok">not-ok</a></footer>
</body></html>`;
  c.selectors.push({ key: 'links', selector: 'a', exclude: 'footer' });
  parse(rec, data, c);
  t.equal(rec.links, 'test');
  t.end();
});

test('Selector exclusion by data-attribute parse', t => {
  const rec = {};
  const c = _.cloneDeep(config);
  const data = `<html><body>
	<a>test</a>
	<footer data-exclude><a class="no-ok">not-ok</a></footer>
</body></html>`;
  c.selectors.push({ key: 'links', selector: 'a', exclude: '[data-exclude]' });
  parse(rec, data, c);
  t.equal(rec.links, 'test');
  t.end();
});

test('Simple parse no spaces', t => {
  const rec = {
    date: now,
    timestamp: now.getTime()
  };
  const c = _.cloneDeep(config);
  const data = `<html><head>
	<title>test-test-test-test</title>
<head></html>`;
  parse(rec, data, c);
  t.equal(rec.date, now);
  t.equal(rec.timestamp, now.getTime());
  t.equal(rec.title, 'test-test-test-test');
  t.end();
});

test('Parse with limit', t => {
  const rec = {
    date: now,
    timestamp: now.getTime()
  };
  const c = _.cloneDeep(config);
  const data = `<html><head>
	<title>test-1</title>
	<title>test-2</title>
	<title>test-3</title>
	<title>test-4</title>
	<title>test-5</title>
<head></html>`;
  parse(rec, data, c);
  t.equal(rec.title.length, 5);
  delete rec.title;
  c.selectors[0].limit = 3;
  parse(rec, data, c);
  t.equal(rec.date, now);
  t.equal(rec.timestamp, now.getTime());
  t.equal(rec.title.length, 3);
  t.end();
});

test('Parse no min char', t => {
  const rec = {
    date: now,
    timestamp: now.getTime()
  };
  const c = _.cloneDeep(config);
  const data = `<html><head>
	<title>test</title>
	<title>t</title>
	<title>test2</title>
<head></html>`;
  parse(rec, data, c);
  t.equal(rec.date, now);
  t.equal(rec.timestamp, now.getTime());
  t.equal(rec.title.length, 2);
  t.equal(rec.title[0], 'test');
  t.equal(rec.title[1], 'test2');
  t.end();
});
