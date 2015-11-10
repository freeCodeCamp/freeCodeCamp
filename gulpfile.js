// enable debug for gulp
process.env.DEBUG = process.env.DEBUG || 'freecc:*';

require('babel-core/register');
var Rx = require('rx'),
  gulp = require('gulp'),
  path = require('path'),

  // utils
  plumber = require('gulp-plumber'),
  notify = require('gulp-notify'),
  gutil = require('gulp-util'),
  reduce = require('gulp-reduce-file'),
  sortKeys = require('sort-keys'),
  debug = require('debug')('freecc:gulp'),

  // react app
  webpack = require('gulp-webpack'),
  webpackConfig = require('./webpack.config.js'),
  webpackConfigNode = require('./webpack.config.node.js'),

  // server process
  nodemon = require('gulp-nodemon'),
  sync = require('browser-sync'),

  // css
  less = require('gulp-less'),

  // rev
  rev = require('gulp-rev'),
  revReplace = require('gulp-rev-replace'),
  revDel = require('rev-del'),

  // lint
  jsonlint = require('gulp-jsonlint'),
  eslint = require('gulp-eslint');


Rx.config.longStackSupport = true;

var __DEV__ = process.env.NODE_ENV !== 'production';
var reloadDelay = 1000;
var reload = sync.reload;
var paths = {
  server: './server/server.js',
  serverIgnore: [
    'gulpfile.js',
    'public/',
    '!public/js/bundle*',
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

  js: [
    'client/main.js',
    'client/iFrameScripts.js',
    'client/plugin.js'
  ],

  dependents: [
    'client/commonFramework.js'
  ],

  less: './client/less/main.less',
  lessFiles: './client/less/*.less',

  manifest: 'server/manifests/',

  node: {
    src: './client',
    dest: 'common/app'
  },

  syncWatch: [
    'public/**/*.*'
  ],

  challenges: [
    'seed/challenges/*.json'
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
    exec: path.join(__dirname, 'node_modules/.bin/babel-node'),
    env: {
      'NODE_ENV': 'development',
      'DEBUG': process.env.DEBUG || 'freecc:*'
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
      setTimeout(function() {
        debug('Restarting browsers');
        reload();
      }, reloadDelay);
    });
});

var syncDepenedents = [
  'serve',
  'js',
  'less',
  'dependents',
  'pack-watch',
  'build-manifest'
];

gulp.task('sync', syncDepenedents, function() {
  sync.init(null, {
    proxy: 'http://localhost:3000',
    logLeval: 'debug',
    files: paths.syncWatch,
    port: 3001,
    open: false,
    reloadDelay: reloadDelay
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
  var manifestName = 'react-manifest.json';
  var dest = webpackConfig.output.path;

  return gulp.src(webpackConfig.entry)
    .pipe(plumber({ errorHandler: errorHandler }))
    .pipe(webpack(Object.assign(
      {},
      webpackConfig,
      webpackOptions
    )))
    .pipe(gulp.dest(dest))
    .pipe(rev())
    // copy files to public
    .pipe(gulp.dest(dest))
    // create manifest
    .pipe(rev.manifest(manifestName))
    // delete old rev
    .pipe(delRev(
      dest,
      manifestName
    ))
    .pipe(gulp.dest(paths.manifest));
});

var defaultStatsOptions = {
  colors: gutil.colors.supportsColor,
  hash: false,
  timings: false,
  chunks: false,
  chunkModules: false,
  modules: false,
  children: true,
  version: true,
  cached: false,
  cachedAssets: false,
  reasons: false,
  source: false,
  errorDetails: false
};

gulp.task('pack-watch', function(cb) {
  var called = false;
  gulp.src(webpackConfig.entry)
    .pipe(plumber({ errorHandler: errorHandler }))
    .pipe(webpack(Object.assign(
      {},
      webpackConfig,
      webpackOptions,
      { watch: true }
    ), null, function(notUsed, stats) {
      if (stats) {
        gutil.log(stats.toString(defaultStatsOptions));
      }

      if (!called) {
        debug('webpack watch completed');
        called = true;
        cb();
      }

    }))
    .pipe(gulp.dest(webpackConfig.output.path));
});

gulp.task('pack-watch-manifest', function() {
  var manifestName = 'react-manifest.json';
  var dest = webpackConfig.output.path;
  return gulp.src(dest + '/bundle.js')
    .pipe(rev())
    // copy files to public
    .pipe(gulp.dest(dest))
    // create manifest
    .pipe(rev.manifest(manifestName))
    .pipe(delRev(
      dest,
      manifestName
    ))
    .pipe(gulp.dest(paths.manifest));
});

gulp.task('pack-node', function() {
  return gulp.src(webpackConfigNode.entry)
    .pipe(plumber({ errorHandler: errorHandler }))
    .pipe(webpack(webpackConfigNode))
    .pipe(gulp.dest(webpackConfigNode.output.path));
});

gulp.task('pack', ['pack-client', 'pack-node']);

gulp.task('less', function() {
  var manifestName = 'css-manifest.json';
  var dest = paths.css;
  return gulp.src(paths.less)
    .pipe(plumber({ errorHandler: errorHandler }))
    // copile
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest(dest))
    // add revision
    .pipe(rev())
    // copy files to public
    .pipe(gulp.dest(dest))
    // create and merge manifest
    .pipe(rev.manifest(manifestName))
    .pipe(delRev(
      dest,
      manifestName
    ))
    .pipe(gulp.dest(paths.manifest));
});

gulp.task('js', function() {
  var manifestName = 'js-manifest.json';
  var dest = paths.publicJs;

  return gulp.src(paths.js)
    .pipe(plumber({ errorHandler: errorHandler }))
    .pipe(gulp.dest(dest))
    // create registry file
    .pipe(rev())
    // copy revisioned assets to dest
    .pipe(gulp.dest(dest))
    // create manifest file
    .pipe(rev.manifest(manifestName))
    .pipe(delRev(
      dest,
      manifestName
    ))
    // copy manifest file to dest
    .pipe(gulp.dest(paths.manifest));
});

// commonFramework depend on iFrameScripts
// sandbox depends on plugin
gulp.task('dependents', ['js'], function() {
  var manifestName = 'dependents-manifest.json';
  var dest = paths.publicJs;

  var manifest = gulp.src(
    path.join(__dirname, paths.manifest, 'js-manifest.json')
  );

  return gulp.src(paths.dependents)
    .pipe(plumber({ errorHandler: errorHandler }))
    .pipe(revReplace({ manifest: manifest }))
    .pipe(gulp.dest(dest))
    .pipe(rev())
    .pipe(gulp.dest(dest))
    .pipe(rev.manifest(manifestName))
    .pipe(delRev(
      dest,
      manifestName
    ))
    .pipe(gulp.dest(paths.manifest));
});

function collector(file, memo) {
  return Object.assign({}, JSON.parse(file.contents), memo);
}

function done(manifest) {
  return sortKeys(manifest);
}

function buildManifest() {
  return gulp.src(paths.manifest + '*.json')
    .pipe(reduce('rev-manifest.json', collector, done, {}))
    .pipe(gulp.dest('server/'));
}

var buildDependents = ['less', 'js', 'dependents'];

gulp.task('build-manifest', buildDependents, function() {
  return buildManifest();
});

gulp.task('build-manifest-watch', function() {
  return buildManifest();
});

gulp.task('build', [
  'less',
  'js',
  'dependents',
  'pack-client',
  'build-manifest'
]);

var watchDependents = [
  'less',
  'js',
  'dependents',
  'serve',
  'sync',
  'build-manifest',
  'pack-watch',
  'pack-watch-manifest'
];

gulp.task('reload', () => {
  notify({ message: 'test changed' });
  reload();
});

gulp.task('watch', watchDependents, function() {
  gulp.watch(paths.lessFiles, ['less']);
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.challenges, ['test-challenges', 'reload']);
  gulp.watch(paths.js, ['js', 'dependents']);
  gulp.watch(paths.dependents, ['dependents']);
  gulp.watch(paths.manifest + '/*.json', ['build-manifest-watch']);
  gulp.watch(webpackConfig.output.path + '/bundle.js', ['pack-watch-manifest']);
});

gulp.task('default', [
  'less',
  'serve',
  'pack-watch',
  'pack-watch-manifest',
  'watch',
  'sync'
]);

