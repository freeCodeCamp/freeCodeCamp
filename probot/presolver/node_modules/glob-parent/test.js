'use strict';

var gp = require('./');
var assert = require('assert');

describe('glob-parent', function() {
  it('should strip glob magic to return parent path', function() {
    assert.equal(gp('path/to/*.js'), 'path/to');
    assert.equal(gp('/root/path/to/*.js'), '/root/path/to');
    assert.equal(gp('/*.js'), '/');
    assert.equal(gp('*.js'), '.');
    assert.equal(gp('**/*.js'), '.');
    assert.equal(gp('path/{to,from}'), 'path');
    assert.equal(gp('path/!(to|from)'), 'path');
    assert.equal(gp('path/?(to|from)'), 'path');
    assert.equal(gp('path/+(to|from)'), 'path');
    assert.equal(gp('path/*(to|from)'), 'path');
    assert.equal(gp('path/@(to|from)'), 'path');
    assert.equal(gp('path/**/*'), 'path');
    assert.equal(gp('path/**/subdir/foo.*'), 'path');
  });

  it('should return parent dirname from non-glob paths', function() {
    assert.equal(gp('path/foo/bar.js'), 'path/foo');
    assert.equal(gp('path/foo/'), 'path/foo');
    assert.equal(gp('path/foo'), 'path');
  });
});
