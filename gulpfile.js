// enable debug for gulp
process.env.DEBUG = process.env.DEBUG || 'fcc:*';
require('dotenv').load();

require('babel-core/register');
const Rx = require('rx'),
  gulp = require('gulp'),
  path = require('path'),
  debug = require('debug')('fcc:gulp'),
  yargs = require('yargs'),
  sortKeys = require('sort-keys'),
  del = require('del'),
  // utils
  plumber = require('gulp-plumber'),
  named = require('vinyl-named'),
  notify = require('gulp-notify'),
  gutil = require('gulp-util'),
  reduce = require('gulp-reduce-file'),
  sourcemaps = require('gulp-sourcemaps'),
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
  { createPathMigrationMap } = require('./seed/createPathMigrationMap');

Rx.config.longStackSupport = true;
const sync = browserSync.create('fcc-sync-server');

// user definable
const __DEV__ = !yargs.argv.p;
const host = process.env.HOST || 'localhost';
const port = yargs.argv.port || process.env.PORT || '3001';
const syncPort = yargs.argv['sync-port'] || process.env.SYNC_PORT || '3000';

// make sure sync ui port does not interfere with proxy port
const syncUIPort =
  yargs.argv['sync-ui-port'] ||
  process.env.SYNC_UI_PORT ||
  parseInt(syncPort, 10) + 2;

const paths = {
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

  client: {
    src: './client',
    dest: 'public/js'
  },

  less: './client/less/main.less',
  lessFiles: ['./client/**/*.less', './common/**/*.less'],

  manifest: 'server/manifests/',

  node: {
    src: './client',
    dest: 'common/app'
  },

  reactFiles: ['./client/**/*.js', './news/**/*.js', 'common/**/*.js'],

  syncWatch: ['public/**/*.*']
};

const errorNotifier = notify.onError({
  title: 'Compile Error',
  message: '<%= error %>'
});

function errorHandler(...args) {
  // Send error to notification center with gulp-notify
  errorNotifier.apply(this, args);
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
  let called = false;
  let execParams = path.normalize('node_modules/.bin/babel-node');
  // When in development we can spawn a node debugger
  // https://nodejs.org/en/docs/inspector/
  if (__DEV__) {
    execParams = execParams + ' --inspect';
  }
  const monitor = nodemon({
    script: paths.server,
    ext: '.jsx .js .json',
    ignore: paths.serverIgnore,
    exec: execParams,
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

  process.once('SIGINT', () => {
    monitor.once('exit', () => {
      /* eslint-disable no-process-exit */
      process.exit(0);
      /* eslint-enable no-process-exit */
    });
  });
});

const syncDepenedents = ['serve', 'less'];

gulp.task('dev-server', syncDepenedents, function() {
  const devMiddleware = [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client'
  ];
  Object.keys(webpackConfig.entry).forEach(key => {
    webpackConfig.entry[key] = [webpackConfig.entry[key]].concat(devMiddleware);
  });

  const bundler = webpack(webpackConfig);
  sync.init(null, {
    ui: {
      port: syncUIPort
    },
    proxy: {
      target: `http://${host}:${port}`,
      reqHeaders: ({ url: { hostname } }) => ({
        host: `${hostname}:${syncPort}`
      })
    },
    logLevel: 'info',
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

gulp.task('pack-apps', function() {
  if (!__DEV__) {
    console.log('\n\nbundling apps - production\n\n');
  }

  const dest = webpackConfig.output.path;
  const sources = Object.keys(webpackConfig.entry).map(
    key => webpackConfig.entry[key]
  );

  return gulp
    .src(sources)
    .pipe(named())
    .pipe(plumber({ errorHandler }))
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest(dest));
});

const webpackManifestFiles = ['react-manifest.json', 'chunk-manifest.json'];
gulp.task('move-webpack-manifest', ['pack-apps'], function() {
  const files = webpackManifestFiles.map(function(filename) {
    return path.join(webpackConfig.output.path, filename);
  });
  return gulp.src(files).pipe(gulp.dest(paths.manifest));
});

const cleanDeps = ['pack-apps', 'move-webpack-manifest'];
gulp.task('clean-webpack-manifest', cleanDeps, function() {
  return del(
    webpackManifestFiles.map(function(filename) {
      return path.join(webpackConfig.output.path, filename);
    })
  )
    .then(function(pathsDeleted) {
      gutil.log('[clean-webpack-manifest]', 'paths deleted' + pathsDeleted);
    })
    .catch(function(err) {
      throw new gutil.PluginError('clean-webpack-manifest', err);
    });
});

gulp.task('less', function() {
  const manifestName = 'css-manifest.json';
  const dest = paths.css;
  return (
    gulp
      .src(paths.less)
      .pipe(plumber({ errorHandler }))
      .pipe(__DEV__ ? sourcemaps.init() : gutil.noop())
      // compile
      .pipe(
        less({
          paths: [
            path.join(__dirname, 'client', 'less'),
            path.join(__dirname, 'common')
          ]
        })
      )
      .pipe(__DEV__ ? sourcemaps.write({ sourceRoot: '/less' }) : gutil.noop())
      .pipe(gulp.dest(dest))
      // add revision
      .pipe(__DEV__ ? gutil.noop() : rev())
      // copy files to public
      .pipe(__DEV__ ? gutil.noop() : gulp.dest(dest))
      // create and merge manifest
      .pipe(__DEV__ ? gutil.noop() : rev.manifest(manifestName))
      .pipe(__DEV__ ? gutil.noop() : delRev(dest, manifestName))
      .pipe(__DEV__ ? gutil.noop() : gulp.dest(paths.manifest))
  );
});

const collector = (file, memo) =>
  Object.assign(memo, JSON.parse(file.contents));

function done(manifest) {
  return sortKeys(manifest);
}

const buildDependents = ['less', 'pack-apps', 'move-webpack-manifest'];

gulp.task('build-manifest', buildDependents, function() {
  return gulp
    .src(paths.manifest + '*.json')
    .pipe(reduce('rev-manifest.json', collector, done, {}))
    .pipe(gulp.dest('server/'));
});

gulp.task('generate-migration-map', done => {
  createPathMigrationMap().then(done);
});

gulp.task('build', [
  'less',
  'pack-apps',
  'move-webpack-manifest',
  'clean-webpack-manifest',
  'build-manifest',
  'generate-migration-map'
]);

const watchDependents = ['less', 'serve', 'dev-server'];

gulp.task('watch', watchDependents, function() {
  gulp.watch(paths.lessFiles, ['less']);
});

gulp.task('default', [
  'less',
  'serve',
  'watch',
  'dev-server',
  'generate-migration-map'
]);
