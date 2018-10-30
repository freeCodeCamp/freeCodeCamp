var template, expect, examples;

if (typeof require !== 'undefined') {
  template = require('../lib/url-template.js');
  expect = require("expect.js");
  examples = require('../uritemplate-test/spec-examples-by-section.json');
} else {
  template = window.urltemplate;
  expect = window.expect;
  examples = window.examples;
}

function createTestContext(c) {
  return function (t, r) {
    if (typeof r === 'string') {
      expect(template.parse(t).expand(c)).to.eql(r);
    } else {
      expect(r.indexOf(template.parse(t).expand(c)) >= 0).to.be.ok();
    }
  };
}

describe('spec-examples', function () {
  Object.keys(examples).forEach(function (section) {
    var assert = createTestContext(examples[section].variables);
    examples[section].testcases.forEach(function (testcase) {
      it(section + ' ' + testcase[0], function () {
        assert(testcase[0], testcase[1]);
      });
    });
  });
});
