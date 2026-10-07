'use strict';

var data = {
	anchor: { arg: 'bar"baz"', expected: '<a name="bar&quot;baz&quot;">foo</a>' },
	big: '<big>foo</big>',
	blink: '<blink>foo</blink>',
	bold: '<b>foo</b>',
	fixed: '<tt>foo</tt>',
	fontcolor: { arg: 'blue"red"green', expected: '<font color="blue&quot;red&quot;green">foo</font>' },
	fontsize: { arg: '10"large"small', expected: '<font size="10&quot;large&quot;small">foo</font>' },
	italics: '<i>foo</i>',
	link: { arg: 'url"http://"', expected: '<a href="url&quot;http://&quot;">foo</a>' },
	small: '<small>foo</small>',
	strike: '<strike>foo</strike>',
	sub: '<sub>foo</sub>',
	sup: '<sup>foo</sup>'
};

module.exports = function (method, name, t) {
	var result = data[name] || {};
	var expected = typeof result === 'string' ? result : result.expected;
	var actual = typeof result === 'string' ? method('foo') : method('foo', result.arg);

	t.equal(actual, expected, name + ': got expected result');
};
