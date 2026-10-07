/*!
 * is-valid-path <https://github.com/jonschlinkert/is-valid-path>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps: mocha */
require('should');
var isValid = require('./');

describe('isValid', function () {
  it('should return `true` if the path is valid:', function () {
    isValid('.').should.be.true;
    isValid('aa').should.be.true;
    isValid('abc.js').should.be.true;
    isValid('abc/def/ghi.js').should.be.true;
  });

  it('should return `false` if it is a glob pattern:', function () {
    isValid('*.js').should.be.false;
    isValid('!*.js').should.be.false;
    isValid('!foo').should.be.false;
    isValid('!foo.js').should.be.false;
    isValid('**/abc.js').should.be.false;
    isValid('abc/*.js').should.be.false;
  });

  it('should return `false` if the path has brace characters:', function () {
    isValid('abc/{a,b}.js').should.be.false;
    isValid('abc/{a..z}.js').should.be.false;
    isValid('abc/{a..z..2}.js').should.be.false;
  });

  it('should return `false` if it has an extglob:', function () {
    isValid('abc/@(a).js').should.be.false;
    isValid('abc/!(a).js').should.be.false;
    isValid('abc/+(a).js').should.be.false;
    isValid('abc/*(a).js').should.be.false;
    isValid('abc/?(a).js').should.be.false;
  });

  it('should return `false` if it has extglob characters:', function () {
    isValid('abc/@.js').should.be.false;
    isValid('abc/!.js').should.be.false;
    isValid('abc/+.js').should.be.false;
    isValid('abc/*.js').should.be.false;
    isValid('abc/?.js').should.be.false;
  });

  it('should return `false` if the path has regex characters:', function () {
    isValid('abc/(aaa|bbb).js').should.be.false;
    isValid('abc/?.js').should.be.false;
    isValid('?.js').should.be.false;
    isValid('[abc].js').should.be.false;
    isValid('[^abc].js').should.be.false;
    isValid('a/b/c/[a-z].js').should.be.false;
    isValid('[a-j]*[^c]b/c').should.be.false;
  });

  it('should return `false` if it is not a string:', function () {
    isValid().should.be.false;
    isValid({}).should.be.false;
    isValid(null).should.be.false;
    isValid(['**/*.js']).should.be.false;
    isValid(['foo.js']).should.be.false;
  });
});

