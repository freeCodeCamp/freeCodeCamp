// enable debug for gulp
process.env.DEBUG = process.env.DEBUG || 'fcc:*';

require('babel-core/register');
var Rx = require('rx'),
  gulp = require('gulp'),
  path = require('path'),
  debug = require('debug')('fcc:gulp'),
  yargs = require('yargs'),
  sortKeys = require('sort-keys'),
  del = require('del'),

  // utils
  plumber = require('gulp-plumber'),
  notify = require('gulp-notify'),
  gutil = require('gulp-util'),
  reduce = require('gulp-reduce-file'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  merge = require('merge-stream'),
  babel = require('gulp-babel'),
  sourcemaps = require('gulp-sourcemaps'),
  gulpif = require('gulp-if'),

  // react app
  webpack = require('webpack'),
  webpackStream = require('webpack-stream'),
  webpackDevMiddleware = require('webpack-dev-middleware'),
  webpackHotMiddleware = require('webpack-hot-middleware'),
  webpackConfig = require('./webpack.config.js'),

  // server process
  nodemon = require('gulp-nodemon'),
  browserSync = require('browser-sync'),

  // css
  less = require('gulp-less'),

  // rev
  rev = require('gulp-rev'),
  revDel = require('rev-del'),

  // lint
  jsonlint = require('gulp-jsonlint'),
  eslint = require('gulp-eslint'),

  // unit-tests
  tape = require('gulp-tape'),
  tapSpec = require('tap-spec');

Rx.config.longStackSupport = true;
var sync = browserSync.create('fcc-sync-server');
var reload = sync.reload.bind(sync);

// user definable
var __DEV__ = !yargs.argv.p;
var port = yargs.argv.port || process.env.PORT || '3001';
var syncPort = yargs.argv['sync-port'] || process.env.SYNC_PORT || '3000';
// make sure sync ui port does not interfere with proxy port
var syncUIPort = yargs.argv['sync-ui-port'] ||
  process.env.SYNC_UI_PORT ||
  parseInt(syncPort, 10) + 2;

var paths = {
  server: './server/server.js',
  serverIgnore: [
    'gulpfile.js',
    'public/',
    'node_modules/',
    'client/',
    'seed',
    'server/manifests/*.json',
    'server/rev-manifest.json'
  ],

  publicJs: './public/js',
  css: 'public/css',

  loopback: {
    client: './client/loopbackClient',
    root: path.join(__dirname, 'client/'),
    clientName: 'lbApp'
  },

  client: {
    src: './client',
    dest: 'public/js'
  },

  vendorChallenges: [
    'public/bower_components/jshint/dist/jshint.js',
    'public/bower_components/chai/chai.js',
    'public/bower_components/CodeMirror/lib/codemirror.js',
    'public/bower_components/CodeMirror/addon/comment/comment.js',
    'public/bower_components/CodeMirror/addon/edit/closebrackets.js',
    'public/bower_components/CodeMirror/addon/edit/matchbrackets.js',
    'public/bower_components/CodeMirror/addon/lint/lint.js',
    'public/bower_components/CodeMirror/addon/lint/javascript-lint.js',
    'public/bower_components/CodeMirror/mode/javascript/javascript.js',
    'public/bower_components/CodeMirror/mode/xml/xml.js',
    'public/bower_components/CodeMirror/mode/css/css.js',
    'public/bower_components/CodeMirror/mode/htmlmixed/htmlmixed.js',
    'node_modules/emmet-codemirror/dist/emmet.js',
    'public/js/lib/loop-protect/loop-protect.js'
  ],

  vendorMain: [
    'public/bower_components/jquery/dist/jquery.min.js',
    'public/bower_components/bootstrap/dist/js/bootstrap.min.js',
    'public/bower_components/d3/d3.min.js',
    'public/bower_components/moment/min/moment.min.js',

    'public/bower_components/' +
      'moment-timezone/builds/moment-timezone-with-data.min.js',

    'public/bower_components/mousetrap/mousetrap.min.js',
    'public/bower_components/lightbox2/dist/js/lightbox.min.js',
    'public/bower_components/rxjs/dist/rx.all.min.js'
  ],

  js: [
    'client/main.js',
    'client/frame-runner.js',
    'client/plugin.js'
  ],

  less: './client/less/main.less',
  lessFiles: './client/less/**/*.less',

  manifest: 'server/manifests/',

  node: {
    src: './client',
    dest: 'common/app'
  },

  syncWatch: [
    'public/**/*.*'
  ],

  challenges: [
    'seed/challenges/*/*.json'
  ]
};

var webpackOptions = {
  devtool: 'inline-source-map'
};

function errorHandler() {
  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error %>'
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
}

function delRev(dest, manifestName) {
  // in production do not delete old revisions
  if (!__DEV__) {
    return gutil.noop();
  }
  return revDel({
    oldManifest: path.join(paths.manifest, manifestName),
    dest: dest
  });
}

gulp.task('serve', function(cb) {
  var called = false;
  nodemon({
    script: paths.server,
    ext: '.jsx .js .json',
    ignore: paths.serverIgnore,
    exec: path.normalize('node_modules/.bin/babel-node'),
    env: {
      NODE_ENV: process.env.NODE_ENV || 'development',
      DEBUG: process.env.DEBUG || 'fcc:*',
      PORT: port
    }
  })
    .on('start', function() {
      if (!called) {
        called = true;
        cb();
      }
    })
    .on('restart', function(files) {
      if (files) {
        debug('Nodemon will restart due to changes in: ', files);
      }
    });
});

var syncDepenedents = [
  'serve',
  'js',
  'less'
];

gulp.task('dev-server', syncDepenedents, function() {
  webpackConfig.entry.bundle = [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client'
  ].concat(webpackConfig.entry.bundle);

  var bundler = webpack(webpackConfig);
  sync.init(null, {
    ui: {
      port: syncUIPort
    },
    proxy: {
      target: `http://localhost:${port}`,
      reqHeaders: ({ url: { hostname } }) => ({
        host: `${hostname}:${syncPort}`
      })
    },
    logLeval: 'debug',
    files: paths.syncWatch,
    port: syncPort,
    open: false,
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        stats: 'errors-only'
      }),
      webpackHotMiddleware(bundler)
    ]
  });
});

gulp.task('lint-js', function() {
  return gulp.src([
    'common/**/*.js',
    'common/**/*.jsx',
    'client/**/*.js',
    'client/**/*.jsx',
    'server/**/*.js',
    'config/**/*.js'
  ])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint-json', function() {
  return gulp.src(paths.challenges)
    .pipe(jsonlint())
    .pipe(jsonlint.reporter());
});

gulp.task('test-challenges', ['lint-json']);

gulp.task('pack-client', function() {
  if (!__DEV__) { console.log('\n\nbundling production\n\n'); }

  function condition(file) {
    var filepath = file.relative;
    return __DEV__ || (/json$/).test('' + filepath);
  }

  var dest = webpackConfig.output.path;

  return gulp.src(webpackConfig.entry.bundle)
    .pipe(plumber({ errorHandler: errorHandler }))
    .pipe(webpackStream(Object.assign(
      {},
      webpackConfig,
      webpackOptions
    )))
    .pipe(gulpif(condition, gutil.noop(), uglify()))
    .pipe(gulp.dest(dest));
});

var webpackManifestFiles = [ 'react-manifest.json', 'chunk-manifest.json' ];
gulp.task('move-webpack-manifest', ['pack-client'], function() {
  var files = webpackManifestFiles.map(function(filename) {
    return path.join(webpackConfig.output.path, filename);
  });
  return gulp.src(files).pipe(gulp.dest(paths.manifest));
});

var cleanDeps = ['pack-client', 'move-webpack-manifest'];
gulp.task('clean-webpack-manifest', cleanDeps, function() {
  return del(webpackManifestFiles.map(function(filename) {
    return path.join(webpackConfig.output.path, filename);
  }))
    .then(function(pathsDeleted) {
      gutil.log('[clean-webpack-manifest]', 'paths deleted' + pathsDeleted);
    })
    .catch(function(err) {
      throw new gutil.PluginError('clean-webpack-manifest', err);
    });
});

gulp.task('less', function() {
  var manifestName = 'css-manifest.json';
  var dest = paths.css;
  return gulp.src(paths.less)
    .pipe(plumber({ errorHandler: errorHandler }))
    .pipe(__DEV__ ? sourcemaps.init() : gutil.noop())
    // compile
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(__DEV__ ?
      sourcemaps.write({ sourceRoot: '/less' }) :
      gutil.noop()
    )
    .pipe(gulp.dest(dest))
    // add revision
    .pipe(__DEV__ ? gutil.noop() : rev())
    // copy files to public
    .pipe(__DEV__ ? gutil.noop() : gulp.dest(dest))
    // create and merge manifest
    .pipe(__DEV__ ? gutil.noop() : rev.manifest(manifestName))
    .pipe(__DEV__ ? gutil.noop() : delRev(
      dest,
      manifestName
    ))
    .pipe(__DEV__ ? gutil.noop() : gulp.dest(paths.manifest));
});

function getFilesGlob(files) {
  if (!__DEV__) {
    return files;
  }
  return files.map(function(file) {
    return file
      .replace('.min.', '.')
      // moment breaks the pattern
      .replace('/min/', '/');
  });
}

gulp.task('js', function() {
  var manifestName = 'js-manifest.json';
  var dest = paths.publicJs;

  var jsFiles = merge(

    gulp.src(getFilesGlob(paths.vendorMain))
      .pipe(__DEV__ ? sourcemaps.init() : gutil.noop())
      .pipe(concat('vendor-main.js'))
      .pipe(
        __DEV__ ?
          sourcemaps.write({ sourceRoot: '/vendor' }) :
          gutil.noop()
      ),

    gulp.src(paths.vendorChallenges)
      .pipe(__DEV__ ? sourcemaps.init() : gutil.noop())
      .pipe(__DEV__ ? gutil.noop() : uglify())
      .pipe(concat('vendor-challenges.js'))
      .pipe(
        __DEV__ ?
          sourcemaps.write({ sourceRoot: '/vendor' }) :
          gutil.noop()
      ),

    gulp.src(paths.js)
      .pipe(plumber({ errorHandler: errorHandler }))
      .pipe(babel())
      .pipe(__DEV__ ? gutil.noop() : uglify())
  );

  return jsFiles
    .pipe(gulp.dest(dest))
    // create registry file
    .pipe(__DEV__ ? gutil.noop() : rev())
    // copy revisioned assets to dest
    .pipe(__DEV__ ? gutil.noop() : gulp.dest(dest))
    // create manifest file
    .pipe(__DEV__ ? gutil.noop() : rev.manifest(manifestName))
    .pipe(__DEV__ ? gutil.noop() : delRev(
      dest,
      manifestName
    ))
    // copy manifest file to dest
    .pipe(__DEV__ ? gutil.noop() : gulp.dest(paths.manifest));
});


function collector(file, memo) {
  return Object.assign({}, JSON.parse(file.contents), memo);
}

function done(manifest) {
  return sortKeys(manifest);
}

var buildDependents = [
  'less',
  'js',
  'pack-client',
  'move-webpack-manifest'
];

gulp.task('build-manifest', buildDependents, function() {
  return gulp.src(paths.manifest + '*.json')
    .pipe(reduce('rev-manifest.json', collector, done, {}))
    .pipe(gulp.dest('server/'));
});

gulp.task('build', [
  'less',
  'js',
  'pack-client',
  'move-webpack-manifest',
  'clean-webpack-manifest',
  'build-manifest'
]);

var watchDependents = [
  'less',
  'js',
  'serve',
  'dev-server'
];

gulp.task('watch', watchDependents, function() {
  gulp.watch(paths.lessFiles, ['less']);
  gulp.watch(paths.js.concat(paths.vendorChallenges), ['js']);
  gulp.watch(paths.js, ['js']);
});

gulp.task('default', [
  'less',
  'serve',
  'watch',
  'dev-server'
]);

gulp.task('test', function() {
  return gulp.src('test/**/*.js')
    .pipe(tape({
      reporter: tapSpec()
    }));
});
