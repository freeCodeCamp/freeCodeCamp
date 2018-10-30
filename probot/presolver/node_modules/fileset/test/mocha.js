var assert       = require('assert');
var fileset      = require('..');
var EventEmitter = require('events').EventEmitter;

describe('Sync API - Given a **.md pattern', function() {
  it('returns the list of matching file in this repo', function() {
    var results = fileset.sync('*.md', 'test/fixtures/**/*.md');
    assert.ok(Array.isArray(results), 'should be an array');
    assert.ok(results.length, 'should return at least one element');
    assert.equal(results.length, 1, 'actually, should return only one');
  });
});

describe('Sync API - Given a *.md and **.js pattern, and two exclude', function() {
  it('returns the list of matching file in this repo', function() {
    var results = fileset.sync('*.md *.js', 'CHANGELOG.md test/fixtures/**/*.md test/fixtures/**/*.js');

    assert.ok(Array.isArray(results), 'should be an array');
    assert.ok(results.length, 'should return at least one element');
    assert.equal(results.length, 3, 'actually, should return only 3');
  });
});

// Given a **.md pattern
describe('Given a **.md pattern', function() {
  it('returns the list of matching file in this repo', function(done) {
    fileset('*.js', function(err, results) {
      if(err) return done(err);
      assert.ok(Array.isArray(results), 'should be an array');
      assert.ok(results.length, 'should return at least one element');
      assert.equal(results.length, 1, 'actually, should return only two');
      done();
    });
  });
});

describe('Say we want the **.js files, but not those in node_modules', function() {
  it('recursively walks the dir and returns the matching list', function(done) {
    fileset('**/*.js', '', function(err, results) {
      if(err) return done(err);
      assert.ok(Array.isArray(results), 'should be an array');
      assert.equal(results.length, 2);
      done();
    });
  });

  it('recursively walks the dir and returns the matching list', function(done) {
    fileset('**/*.js', function(err, results) {
      if(err) return done(err);
      assert.ok(Array.isArray(results), 'should be an array');
      assert.equal(results.length, 2);
      done();
    });
  });

  it('supports multiple paths at once', function(done) {
    fileset('**/*.js *.md', 'node_modules/**', function(err, results) {
      if(err) return done(err);

      assert.ok(Array.isArray(results), 'should be an array');
      assert.equal(results.length, 2);

      assert.deepEqual(results, [
        'fixtures/an (odd) filename.js',
        'mocha.js'
      ]);

      done();
    });
  });

  it('Should support multiple paths for excludes as well', function(done) {
    fileset('**/*.js *.md', 'node_modules/** **.md tests/*.js', function(err, results) {
      if(err) return done(err);
      assert.ok(Array.isArray(results), 'should be an array');
      assert.equal(results.length, 2);

      assert.deepEqual(results, [
        'fixtures/an (odd) filename.js',
        'mocha.js'
      ]);

      done();
    });
  });
});

describe('Testing out emmited events', function() {
  it('recursively walk the dir and return the matching list', function(done) {
    fileset('**/*.js', 'node_modules/**')
      .on('error', done)
      .on('end', function(results) {
        assert.ok(Array.isArray(results), 'should be an array');
        assert.equal(results.length, 2);
        done();
      });
  });

  it('support multiple paths at once', function(done) {
    fileset('**/*.js *.md', 'node_modules/**')
      .on('error', done)
      .on('end', function(results) {
        assert.ok(Array.isArray(results), 'should be an array');
        assert.equal(results.length, 2);

        assert.deepEqual(results, [
          'fixtures/an (odd) filename.js',
          'mocha.js'
        ]);

        done();
      });
  });
});

describe('Testing patterns passed as arrays', function() {
  it('match files passed as an array with odd filenames', function(done) {
    fileset(['fixtures/*.md', 'fixtures/an (odd) filename.js'], ['*.md'])
      .on('error', done)
      .on('end', function(results) {
        assert.ok(Array.isArray(results), 'should be an array');
        assert.equal(results.length, 1);
        assert.deepEqual(results, [
          'fixtures/an (odd) filename.js',
        ]);

        done();
      });
  });
});
