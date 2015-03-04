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
  react = require('gulp-react'),

  // ## util
  watch = require('gulp-watch'),
  plumber = require('gulp-plumber'),
  debug = require('debug')('freecc:gulp'),

  // ## serve
  nodemon = require('gulp-nodemon'),
  sync = require('browser-sync'),
  reload = sync.reload;

var reloadDelay = 3200;
var bundleReloadDelay = 40000;
var timer;

var paths = {
  main: './client/client.js',
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

gulp.task('jsx', function() {
  debug('in jsx');
  return gulp.src(paths.jsx)
    .pipe(plumber())
    .pipe(react({
      harmony: true
    }))
    .pipe(gulp.dest('./common/components'));
});

gulp.task('jsx-watch', function() {
  debug('in jsx watch');
  return gulp.src(paths.jsx)
    .pipe(watch(paths.jsx, function(file) {
      debug('jsx file changed', file.path);
    }))
    .pipe(plumber())
    .pipe(react({
      harmony: true
    }))
    .pipe(gulp.dest('./common/components'));
});

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
      if (files) {
        debug('Files that changes: ', files);
      }
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(function() {
        debug('Restarting browsers');
        reload();
      }, reloadDelay);
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

gulp.task('default', ['jsx-watch', 'bundle', 'serve', 'sync']);

function browserifyCommon(cb) {
  cb = cb || noop;
  var called = false;
  var _reload = _.debounce(reload, bundleReloadDelay);

  var config = {
    basedir: __dirname,
    debug: true,
    cache: {},
    packageCache: {}
  };

  var b = browserify(config);
  bundleLogger.start('bundle.js');

  b.transform(envify({
    NODE_ENV: 'development'
  }));

  b = watchify(b);
  b.on('update', function() {
    debug('update found');
    bundleItUp(b);
  });

  b.on('time', function(time) {
    if (!called) {
      called = true;
      cb();
    }
    debug('bundle completed in %s ms', time);
    _reload();
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
