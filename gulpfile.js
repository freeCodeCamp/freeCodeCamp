process.env.DEBUG = process.env.DEBUG || 'freecc:*';
var _ = require('lodash'),
  gulp = require('gulp'),

  // ## debug
  bundleLogger = require('./gulpUtils/bundleLogger'),
  handleErrors = require('./gulpUtils/handleErrors'),

  // ## bundle
  bundleName = require('vinyl-source-stream'),
  browserify = require('browserify'),
  watchify = require('watchify'),
  envify = require('envify/custom'),
  babelify = require('babelify'),
  boot = require('loopback-boot'),

  // ## util
  // watch = require('gulp-watch'),
  // plumber = require('gulp-plumber'),
  path = require('path'),
  debug = require('debug')('freecc:gulp'),

  // ## serve
  nodemon = require('gulp-nodemon'),
  sync = require('browser-sync'),
  reload = sync.reload;

var reloadDelay = 3200;
var timer;

var paths = {
  main: './client/client.js',
  loopbackClient: './client/loopbackClient',
  loopbackRoot: path.join(__dirname, 'client/'),
  jsx: './common/components/**/*.jsx',
  publicJs: './public/js',
  server: './server/server.js',
  serverIgnore: [
    'gulpfile.js',
    'public/',
    'components/**/*.styl',
    'bower_components/',
    'node_modules/'
  ],
  syncWatch: [
    'public/**/*.*',
    '!public/js/bundle.js'
  ]
};

gulp.task('serve', function(cb) {
  var called = false;
  nodemon({
    script: paths.server,
    ext: '.js',
    ignore: paths.serverIgnore,
    env: {
      'NODE_ENV': 'development',
      'DEBUG': 'freecc:*'
    }
  })
    .on('start', function() {
      if (!called) {
        called = true;
        setTimeout(function() {
          cb();
        }, reloadDelay);
      }
    })
    .on('restart', function(files) {
      var componentsChanged = false;
      if (files) {
        debug('Files that changes: ', files);
        componentsChanged = files.reduce(function(bool, file) {
          return file.indexOf('components') !== -1 ? true : false || bool;
        }, false);
      }
      if (timer) {
        clearTimeout(timer);
      }
      if (!componentsChanged) {
        timer = setTimeout(function() {
          debug('Restarting browsers');
          reload();
        }, reloadDelay);
      } else {
        debug('component changed, not reloading server until bundle complete');
      }
    });
});

gulp.task('sync', ['serve'], function() {
  sync.init(null, {
    proxy: 'http://localhost:3000',
    logLeval: 'debug',
    files: paths.syncWatch,
    port: 3001,
    open: true,
    reloadDelay: reloadDelay
  });
});

gulp.task('bundle', function(cb) {
  debug('in bundle task');
  browserifyCommon(cb);
});

gulp.task('default', ['bundle', 'serve', 'sync']);

function browserifyCommon(cb) {
  cb = cb || noop;
  var called = false;
  var _reload = _.debounce(reload, reloadDelay);

  var config = {
    basedir: __dirname,
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: false
  };

  var b = browserify(config);

  // compile loopback for the client
  b.require(paths.loopbackClient, { expose: 'lb' });

  boot.compileToBrowserify(paths.loopbackRoot, b);

  bundleLogger.start('bundle.js');

  b.ignore('../../server/server.js');

  // transform es6/jsx into js
  b.transform(babelify.configure({
    sourceMapRelative: __dirname
  }));

  // sub process.env for proper strings
  b.transform(envify({
    NODE_ENV: 'development'
  }));

  b = watchify(b);

  b.on('time', function(time) {
    if (!called) {
      called = true;
      cb();
    }
    debug('bundle completed in %s ms', time);
    _reload();
  });

  b.on('update', function(ids) {
    debug('update found', ids);
    bundleItUp(b);
  });

  b.add(paths.main);
  bundleItUp(b);
}

function bundleItUp(b) {
  debug('Bundling');
  return b.bundle()
    .on('error', handleErrors)
    .pipe(bundleName('bundle.js'))
    .pipe(gulp.dest(paths.publicJs));
}

function noop() { }
