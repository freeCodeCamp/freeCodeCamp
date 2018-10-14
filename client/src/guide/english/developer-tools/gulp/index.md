---
title: Gulp
---
## Gulp
`Gulp` is a JavaScript task runner that is used for automating various tasks that are parts of a JavaScript development workflow. 
It is used to run tasks that you have programmed, and its main use case is to perform repetitive actions that are used as a path of the build process for a JavaScript project. 

### Why Gulp is Useful
These tasks often include things like `code minification` (removing whitespace from html files and shortening variable names to make the file size smaller) and `css bundling` (Converting multiple CSS files into one for distribution with your app), which are needed to optimize code to load fast in a web browser. 

The reason that `Gulp` is useful in the above situations is that the minification and bundling process needs to potentially happen with every change. It would not be efficient to do this manually with every change, which is where a tool like `Gulp`, that does this automatically is a great tool for JavaScript developers.

As well as the relatively simple examples above, `Gulp` has hundreds of plugins to enable it to automate more complex tasks. These tasks can include things like:

- Running unit tests to test your code is working correctly.
- Refreshing your web browser any time a file is saved, allowing your changes to be viewed instantly.
- Conversion of `SASS` / `LESS` to `CSS`, so that it can be used in a browser.
- Optimising images to create `web friendly` versions with lower file sizes for speed.

### How to use Gulp
To start using `Gulp`, the first step is to install it using `npm`. After it is installed, a `gulpfile.js` has to be created. This `gulpfile` is a file that contains all the `Gulp` tasks that should run as part of your automated process. The tasks are written in JavaScript. Below is a very simple example of a `gulpfile`, which takes any `CSS` files from the `client/templates` folder, minifies them and puts the minified file in the `build/css` folder.

```javascript
var gulp = require('gulp');
var minifyCSS = require('gulp-csso');

gulp.task('css', function(){
  return gulp.src('client/templates/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'))
});
```

To run this gulp task, all you would have to do is type `gulp css` in a terminal in your project root. 

To watch the CSS files for any changes and run the "css" task after it is saved.
```javascript
gulp.watch('css')
  .on('change', ['css']);
```

### Task Dependencies
By default gulp will run all of the tasks defined at the same time and wait for nothing. To run multiple task in the correct order, you can add a task as a dependencies to another task.
```javascript
gulp.task('two', ['one'], function() {
    // task 'one' is done now
});
```
With the code snippet above, task `two` will only run after task `one` is completed.


Gulpfiles can have multiple tasks per file, and tasks can also be split up into multiple files for an organization. This, along with the 100's of plugins available make it a very flexible and useful framework for JavaScript developers.


#### More Information:

<a href="https://gulpjs.com/" target='blank' rel='nofollow'>Gulp website</a>

<a href="https://github.com/gulpjs/gulp" target='blank' rel='nofollow'>Gulp github repository</a>

<a href="https://css-tricks.com/gulp-for-beginners/" target='blank' rel='nofollow'>Gulp begginers guide</a>
  

