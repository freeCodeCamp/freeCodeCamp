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
  yargs = require('yargs'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  merge = require('merge-stream'),
  babel = require('gulp-babel'),

  // react app
  webpack = require('webpack-stream'),
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

var __DEV__ = !yargs.argv.p;
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

  vendorChallenges: [
    'public/bower_components/jshint/dist/jshint.js',
    'public/bower_components/chai/chai.js',
    'public/bower_components/CodeMirror/lib/codemirror.js',
    'public/bower_components/CodeMirror/addon/edit/closebrackets.js',
    'public/bower_components/CodeMirror/addon/edit/matchbrackets.js',
    'public/bower_components/CodeMirror/addon/lint/lint.js',
    'public/bower_components/CodeMirror/addon/lint/javascript-lint.js',
    'public/bower_components/CodeMirror/mode/javascript/javascript.js',
    'public/bower_components/CodeMirror/mode/xml/xml.js',
    'public/bower_components/CodeMirror/mode/css/css.js',
    'public/bower_components/CodeMirror/mode/htmlmixed/htmlmixed.js',
    'public/bower_components/CodeMirror/addon/emmet/emmet.js'
  ],

  vendorMain: [
    'public/bower_components/jquery/dist/jquery.min.js',
    'public/bower_components/bootstrap/dist/js/bootstrap.min.js',
    'public/bower_components/angular/angular.min.js',
    'public/bower_components/angular-bootstrap/ui-bootstrap.min.js',
    'public/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
    'public/bower_components/d3/d3.min.js',
    'public/bower_components/moment/min/moment.min.js',
    'public/bower_components/lightbox2/dist/js/lightbox.min.js',
    'public/bower_components/rxjs/dist/rx.all.min.js'
  ],

  js: [
    'client/main.js',
    'client/iFrameScripts.js',
    'client/plugin.js',
    'client/faux.js'
  ],

  commonFramework: [
    'init',
    'bindings',
    'add-test-to-string',
    'add-faux-stream',
    'code-storage',
    'code-uri',
    'create-editor',
    'detect-unsafe-code-stream',
    'detect-loops-stream',
    'display-test-results',
    'execute-challenge-stream',
    'output-display',
    'phone-scroll-lock',
    'report-issue',
    'run-tests-stream',
    'show-completion',
    'step-challenge',
    'update-preview',
    'end'
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

function formatCommonFrameworkPaths() {
  return this.map(function(script) {
    return 'client/commonFramework/' + script + '.js';
  });
}

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
  if (!__DEV__) { console.log('\n\nbundling production\n\n'); }

  var manifestName = 'react-manifest.json';
  var dest = webpackConfig.output.path;

  return gulp.src(webpackConfig.entry)
    .pipe(plumber({ errorHandler: errorHandler }))
    .pipe(webpack(Object.assign(
      {},
      webpackConfig,
      webpackOptions
    )))
    .pipe(__DEV__ ? gutil.noop() : uglify())
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

var webpackCalled = false;
gulp.task('pack-watch', function(cb) {
  if (webpackCalled) {
    console.log('webpack watching already runnning');
    return cb();
  }
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

      if (!webpackCalled) {
        debug('webpack init completed');
        webpackCalled = true;
        cb();
      }

    }))
    .pipe(gulp.dest(webpackConfig.output.path));
});

gulp.task('pack-watch-manifest', ['pack-watch'], function() {
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
    // compile
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
      .pipe(concat('vendor-main.js')),

    gulp.src(paths.vendorChallenges)
      .pipe(__DEV__ ? gutil.noop() : uglify())
      .pipe(concat('vendor-challenges.js')),

    gulp.src(paths.js)
      .pipe(plumber({ errorHandler: errorHandler }))
      .pipe(babel())
      .pipe(__DEV__ ? gutil.noop() : uglify())
  );

  return jsFiles
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
// and faux.js
gulp.task('dependents', ['js'], function() {
  var manifestName = 'dependents-manifest.json';
  var dest = paths.publicJs;

  var manifest = gulp.src(
    path.join(__dirname, paths.manifest, 'js-manifest.json')
  );

  return gulp.src(formatCommonFrameworkPaths.call(paths.commonFramework))
    .pipe(plumber({ errorHandler: errorHandler }))
    .pipe(babel())
    .pipe(concat('commonFramework.js'))
    .pipe(__DEV__ ? gutil.noop() : uglify())
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

gulp.task('reload', function() {
  notify({ message: 'test changed' });
  reload();
});

gulp.task('watch', watchDependents, function() {
  gulp.watch(paths.lessFiles, ['less']);
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.challenges, ['test-challenges', 'reload']);
  gulp.watch(paths.js, ['js', 'dependents']);
  gulp.watch(
    formatCommonFrameworkPaths.call(paths.commonFramework),
    ['dependents']
  );
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

