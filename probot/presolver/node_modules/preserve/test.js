/*!
 * preserve <https://github.com/jonschlinkert/preserve>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var tokens = require('./');

var re = /<%=\s*[^>]+%>/g;
var pretty = function(str) {
  return require('js-beautify').html(str, {
    indent_char: ' ',
    indent_size: 2,
  });
};

describe('preserve tokens', function () {
  var testRe = /__ID.{5}__\n__ID.{5}__\n__ID.{5}__/;
  var re = /<%=\s*[^>]+%>/g;

  it('should (e.g. shouldn\'t, but will) mangle tokens in the given string', function () {
    var html = pretty('<ul><li><%= name %></li></ul>');
    html.should.equal('<ul>\n  <li>\n    <%=n ame %>\n  </li>\n</ul>');
  });

  it('should preserve tokens in the given string', function () {
    var html = tokens.after(pretty(tokens.before('<ul><li><%= name %></li></ul>', re)));
    html.should.equal('<ul>\n  <li><%= name %></li>\n</ul>');
  });

  describe('.before()', function () {
    it('should replace matches with placeholder tokens:', function () {
      tokens.before('<%= a %>\n<%= b %>\n<%= c %>', re).should.match(testRe);
    });
  });

  describe('tokens.after()', function () {
    it('should replace placeholder tokens with original values:', function () {
      var before = tokens.before('<%= a %>\n<%= b %>\n<%= c %>', re);
      before.should.match(testRe);
      tokens.after(before).should.equal('<%= a %>\n<%= b %>\n<%= c %>');
    });
  });
});
