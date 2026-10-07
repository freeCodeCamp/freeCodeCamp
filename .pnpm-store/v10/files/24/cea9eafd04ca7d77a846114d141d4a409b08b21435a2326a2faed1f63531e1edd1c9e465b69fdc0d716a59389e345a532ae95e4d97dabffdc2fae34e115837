var gulp = require('gulp');
var ts = require('gulp-typescript');


gulp.task('build-ts', function () {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            "target": "es5",
            "module": "commonjs",
            "removeComments": false,
            "noImplicitAny": false,
            "sourceMap": false,
        }))
        .pipe(gulp.dest('lib'));
});
