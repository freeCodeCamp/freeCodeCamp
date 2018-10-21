---
title: Learn Some Gulp Basics
---
Gulp can do **a lot**. This is just an overview of the basics. Once you understand this, then you can add more to Gulp on your own. The documentation for different packages I have used has been great and we also have a great community on FreeCodeCamp ready to help with any project.

![Gulp logo](https://raw.githubusercontent.com/gulpjs/artwork/master/gulp.png)

## What is Gulp?

Gulp is a JavaScript build/task runner. Are you using Jade, but need HTML? Sass, but need CSS? CoffeeScript, but need JavaScript? Or maybe you just want to concatenate and/or minify what you already have? Gulp can do all of this for you easily, so you do not have to keep going back to your terminal after every little change.

## Why use Gulp?

We use a lot of CodePen on FreeCodeCamp. CodePen allows the use of preprocessors without having to do anything else. You can view the compiled version if a preprocessor was used. It looks a lot different. You can make a project in React on CodePen, choose Babel as the JavaScript preprocessor and everything will work. If you were to do this same project locally without processing everything, then you would not get what you expected. This is where Gulp comes in.

## How do I use Gulp?

Again, this is just an overview of the basics. The overview is going to be processing Sass to CSS, concatenating and minifying stylesheets and scripts, and implementing Gulp watch. You need Node and NPM installed on your computer before doing anything though. You most likely have this already, but enter `node -v` and `npm -v` in your terminal to check.

*   Change to the project directory and run `npm init` in the terminal.
    *   This creates the `package.json` file in the working directory.

    *   This would also be a good time to run `touch .gitignore` in the terminal and add `node_modules/` to the file, so you will not be pushing all of those packages to GitHub.
*   Run `npm install --save-dev gulp gulp-concat gulp-minify-css gulp-rename gulp-sass gulp-uglify` in the terminal. This may take a couple of minutes to finish.

    *   This is installing 6 different `node_modules`. You can take a look at the `package.json` file and see all of these listed under `devDependencies` and at the `node_modules` folder and see every package you installed.

    *   `gulp-concat` is for concatenating stylesheets and scripts, `gulp-minify-css` is for minifying CSS, `gulp-rename` is for renaming the file, `gulp-sass` is for Sass to CSS, and `gulp-uglify` is for minifying JS.
*   Run `touch gulpfile.js` in the terminal.

    *   You are now ready to start.

*   You are going to need to require all of the files you just saved. You do this in `gulpfile.js`.
```javascript
    'use strict';

    var gulp = require('gulp');
    var concat = require('gulp-concat');
    var minifyCss = require('gulp-minify-css');
    var rename = require('gulp-rename');
    var sass = require('gulp-sass');
    var uglify = require('gulp-uglify');
```
*   We need to start somewhere, so Sass to CSS first? Here we are going to process Sass to CSS, minify the CSS, and rename the file.
    *   The name of the task `sass` (more on that later).

    *   In the current directory we are looking for a folder named `assets`, then a folder named `scss`, then a file named `main.scss`.
    *   We are processing the Sass to CSS and logging if an error occurs.
    *   The CSS is then minified. This is just getting rid of all those extra lines and spaces. The computer does not need those to read the file and it drastically reduces the file size.
    *   Since the file is now minified it makes sense to rename it `.min.css`.
    *   The last step is saving the `main.min.css` file somewhere and it is going in the current directory to a folder named `public`, then a folder named `css`.
```javascript
    gulp.task('sass', function() {
        return gulp.src('./assets/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('./public/css'));
    });
```
*   Now we can get a little more into Gulp and try concatenating and minifying all of the script files. What if you only have one script now, so you do not have anything to concatenate? Maybe get rid of some of the CDNs you have and make them scripts. But you will get to bigger projects that have several scripts.
    *   Please note that I am not covering source maps. I think that is the next step after this basic overview, so look over that once you understand what you are doing here.

    *   The current tasks are named `concatScripts` and `minifyScripts`.
    *   This is the same basic structure as `sass`. All of the files are added to `gulp.src`, but we first have to save that concatenated file before it can be minified.
    *   The JavaScript minifying is called `uglify`.
    *   Do you notice `['concatScripts]` after `minifyScripts`? That means `concatScripts` will actually run first every time we try to run `minifyScripts`.
```javascript
    gulp.task('concatScripts', function() {
        return gulp.src([
            './assets/js/script-1.js',
            './assets/js/script-2.js',
            './assets/js/script-3.js'
        ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./assets/js'));
    });

    gulp.task('minifyScripts', ['concatScripts'], function() {
        return gulp.src('assets/js/app.js')
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('public/app/js'));
    });
```
*   You can now go to the terminal and type in `gulp sass` and/or `gulp minifyScripts`. This will run each one, but we want to make it easier on us. We are going to make a default build, so we can just enter `gulp` into the terminal. We are also going to add `gulp watch`, so whenever you save a file that is listed in the watch it will run what you have told it to run.
    *   We made a task called `build`. This is very similar to `minifyScripts` since there is an array in it. Whenever we enter `gulp build` into the terminal it will run `sass` and `minifyScripts` (which actually runs `concatScripts` first).

    *   We also made a task called `watch`. This is the time saver task. In the terminal you run `gulp watch`. Gulp will stay open on the terminal, so you probably want to run it in another tab. Whenever a file is updated and saved in the `scss` folder with a `.scss` extension the `sass` task will be run. And the same thing for a file in the `js` folder with a `.js` extension, but `concatScripts` and `minifyScripts` will run.
    *   The last task is `default`. You can just run `gulp` in the terminal and it will run the `default` task. The `default` task here is calling the `build` task, which just runs all the tasks we have on the page.
```javascript
    gulp.task('build', ['sass', 'minifyScripts']);

    gulp.task('watch', function() {
        gulp.watch('./assets/scss/**/*.scss', ['sass']);
        gulp.watch('./assets/js/**/*.js', ['minifyScripts']);
    });

    gulp.task('default', ['build']);
```
This is what your final `gulpfile.js` file should look like:
```javascript
    'use strict';

    var gulp = require('gulp');
    var concat = require('gulp-concat');
    var minifyCss = require('gulp-minify-css');
    var rename = require('gulp-rename');
    var sass = require('gulp-sass');
    var uglify = require('gulp-uglify');

    gulp.task('sass', function() {
        return gulp.src('./assets/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('./public/css'));
    });

    gulp.task('concatScripts', function() {
        return gulp.src([
            './assets/js/script-1.js',
            './assets/js/script-2.js',
            './assets/js/script-3.js'
        ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./assets/js'));
    });

    gulp.task('minifyScripts', ['concatScripts'], function() {
        return gulp.src('assets/js/app.js')
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('public/app/js'));
    });

    gulp.task('build', ['sass', 'minifyScripts']);

    gulp.task('watch', function() {
        gulp.watch('./assets/scss/**/*.scss', ['sass']);
        gulp.watch('./assets/js/**/*.js', ['minifyScripts']);
    });

    gulp.task('default', ['build']);
```
