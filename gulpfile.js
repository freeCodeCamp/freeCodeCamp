var gulp = require('gulp'),
  debug = require('debug')('freecc:gulp'),
  bower = require('bower-main-files'),
  nodemon = require('gulp-nodemon'),
  sync = require('browser-sync'),
  reload = sync.reload,
  inject = require('gulp-inject'),
  reloadDelay = 1000,
  less = require('gulp-less'),
  path = require('path'),
  eslint = require('gulp-eslint');

var paths = {
  server: './server/server.js',
  serverIgnore: []
};

gulp.task('inject', function() {
  gulp.src('views/home.jade')
    .pipe(inject(gulp.src(bower()), {
      //ignorePath: '/public'
    }))
    .pipe(gulp.dest('views'));
});

gulp.task('serve', function(cb) {
  var called = false;
  nodemon({
    script: paths.server,
    ext: '.js',
    ignore: paths.serverIgnore,
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
    files: ['public/js/lib/*/*.{js, jsx}'],
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

gulp.task('watch', ['less', 'serve', 'sync'], function() {
  gulp.watch('./public/css/*.less', ['less']);
});

gulp.task('default', ['less', 'serve', 'sync', 'watch']);
