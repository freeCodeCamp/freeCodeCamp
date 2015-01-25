var gulp = require('gulp'),
    debug = require('debug')('freecc:gulp'),
    bower = require('bower-main-files'),
    nodemon = require('gulp-nodemon'),
    sync = require('browser-sync'),
    reload = sync.reload,
    inject = require('gulp-inject'),
    reloadDelay = 1000;

var paths = {
    server: './app.js',
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
      files: ['public/**/*'],
      port: 3001,
      open: true,
      reloadDelay: reloadDelay
    });
});

gulp.task('default', ['serve', 'sync']);
