require('babel-core/register');
var gulp = require('gulp'),
  path = require('path'),

  // utils
  notify = require('gulp-notify'),
  debug = require('debug')('freecc:gulp'),
  bower = require('bower-main-files'),

  // loopback client
  browserify = require('browserify'),
  boot = require('loopback-boot'),
  envify = require('envify/custom'),
  toVinylWithName = require('vinyl-source-stream'),

  // react app
  webpack = require('gulp-webpack'),
  webpackConfig = require('./webpack.config.js'),
  webpackConfigNode = require('./webpack.config.node.js'),

  // server process
  nodemon = require('gulp-nodemon'),
  sync = require('browser-sync'),

  inject = require('gulp-inject'),
  // css
  less = require('gulp-less'),

  // lint
  eslint = require('gulp-eslint');


var reloadDelay = 1000;
var reload = sync.reload;
var paths = {
  server: './server/server.js',
  serverIgnore: [
    'gulpfile.js',
    'public/',
    'node_modules/'
  ],
  publicJs: './public/js',

  loopback: {
    client: './client/loopbackClient',
    root: path.join(__dirname, 'client/'),
    clientName: 'lbApp'
  },

  client: {
    src: './client',
    dest: 'public/js'
  },

  node: {
    src: './client',
    dest: 'common/app'
  },

  syncWatch: [
    'public/**/*.*'
  ]
};

gulp.task('inject', function() {
  gulp.src('views/home.jade')
    .pipe(inject(gulp.src(bower()), {
      //ignorePath: '/public'
    }))
    .pipe(gulp.dest('views'));
});

// NOTE(berks): not using this for now as loopback client is just too large
gulp.task('loopback', function() {
  var config = {
    basedir: __dirname,
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true,
    standalone: paths.loopback.clientName
  };

  var b = browserify(config);

  // compile loopback for the client
  b.require(paths.loopback.client);

  boot.compileToBrowserify(paths.loopback.root, b);

  // sub process.env for proper strings
  b.transform(envify({
    NODE_ENV: 'development'
  }));

  return b.bundle()
    .on('error', errorNotifier)
    .pipe(toVinylWithName(paths.loopback.clientName + '.js'))
    .pipe(gulp.dest(paths.publicJs));
});

gulp.task('pack-client', function() {
  return gulp.src(webpackConfig.entry)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(webpackConfig.output.path));
});

gulp.task('pack-node', function() {
  return gulp.src(webpackConfigNode.entry)
    .pipe(webpack(webpackConfigNode))
    .pipe(gulp.dest(webpackConfigNode.output.path));
});

gulp.task('pack', ['pack-client', 'pack-node']);

gulp.task('serve', function(cb) {
  var called = false;
  nodemon({
    script: paths.server,
    ext: '.js',
    ignore: paths.serverIgnore,
    exec: './node_modules/.bin/babel-node',
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

gulp.task('sync', ['serve'], function() {
  sync.init(null, {
    proxy: 'http://localhost:3000',
    logLeval: 'debug',
    files: paths.syncWatch,
    port: 3001,
    open: false,
    reloadDelay: reloadDelay
  });
});

gulp.task('lint', function() {
  return gulp.src(['public/js/lib/**/*'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('less', function() {
  return gulp.src('./public/css/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('build', ['less']);

gulp.task('watch', ['less', 'serve', 'sync'], function() {
  gulp.watch('./public/css/*.less', ['less']);
});

gulp.task('default', ['less', 'serve', 'sync', 'watch']);

function errorNotifier() {
  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error %>'
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
}
