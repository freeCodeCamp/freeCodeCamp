---
title: Learn Some Gulp Basics
localeTitle: 学习一些Gulp基础知识
---
Gulp可以做**很多事情** 。这只是基础知识的概述。一旦你理解了这一点，那么你可以自己添加更多给Gulp。我使用的不同软件包的文档非常好，我们在FreeCodeCamp上也有一个很好的社区，随时可以帮助完成任何项目。

![Gulp标志](https://raw.githubusercontent.com/gulpjs/artwork/master/gulp.png)

## 什么是Gulp？

Gulp是一个JavaScript构建/任务运行器。你在使用Jade，但需要HTML吗？ Sass，但需要CSS吗？ CoffeeScript，但需要JavaScript吗？或者您可能只想连接和/或缩小已有的内容？ Gulp可以轻松地为您完成所有这些工作，因此您不必在每次变化后都回到终端。

## 为什么要用Gulp？

我们在FreeCodeCamp上使用了很多CodePen。 CodePen允许使用预处理器而无需执行任何其他操作。如果使用预处理器，则可以查看已编译的版本。它看起来很不一样。你可以在CodePen上的React中创建一个项目，选择Babel作为JavaScript预处理器，一切都会起作用。如果你在本地做同样的项目而不处理所有事情，那么你就不会得到你所期望的。这是Gulp进来的地方。

## 我如何使用Gulp？

同样，这只是基础知识的概述。概述将是将Sass处理为CSS，连接和缩小样式表和脚本，以及实现Gulp手表。在执行任何操作之前，您需要在计算机上安装Node和NPM。您很可能已经拥有此功能，但在终端中输入`node -v`和`npm -v`进行检查。

*   切换到项目目录并在终端中运行`npm init` 。
    
    *   这将在工作目录中创建`package.json`文件。
        
    *   这也是在终端中运行`touch .gitignore`并将`node_modules/`添加到文件的好时机，因此您不会将所有这些包推送到GitHub。
        
*   在终端中运行`npm install --save-dev gulp gulp-concat gulp-minify-css gulp-rename gulp-sass gulp-uglify` 。这可能需要几分钟才能完成。
    
    *   这是安装6个不同的`node_modules` 。您可以查看`package.json`文件并查看`devDependencies`下列出的所有这些文件以及`node_modules`文件夹，并查看您安装的每个软件包。
        
    *   `gulp-concat`用于连接样式表和脚本， `gulp-minify-css`用于缩小CSS， `gulp-rename`用于重命名文件， `gulp-sass`用于Sass到CSS， `gulp-uglify`用于缩小JS。
        
*   在终端中运行`touch gulpfile.js` 。
    
    *   你现在准备开始了。
*   您将需要需要保存的所有文件。你在`gulpfile.js`这样做。
    

```javascript
    'use strict'; 
 
    var gulp = require('gulp'); 
    var concat = require('gulp-concat'); 
    var minifyCss = require('gulp-minify-css'); 
    var rename = require('gulp-rename'); 
    var sass = require('gulp-sass'); 
    var uglify = require('gulp-uglify'); 
```

*   我们需要从某个地方开始，所以Sass首先要使用CSS吗？这里我们将把Sass处理成CSS，缩小CSS并重命名文件。
    
    *   任务的名称`sass` （稍后会详细介绍）。
        
    *   在当前目录中，我们要查找名为`assets`的文件夹，然后是名为`scss`的文件夹，然后是名为`main.scss`的文件。
        
    *   我们正在处理Sass到CSS并在发生错误时进行记录。
        
    *   然后缩小CSS。这只是摆脱所有额外的线条和空间。计算机不需要那些读取文件，它大大减少了文件大小。
        
    *   由于文件现在已缩小，因此将其重命名为`.min.css` 。
        
    *   最后一步是将`main.min.css`文件保存在某处，它将在当前目录中进入名为`public`的文件夹，然后是名为`css`的文件夹。
        

```javascript
    gulp.task('sass', function() { 
        return gulp.src('./assets/scss/main.scss') 
        .pipe(sass().on('error', sass.logError)) 
        .pipe(minifyCss({compatibility: 'ie8'})) 
        .pipe(rename('main.min.css')) 
        .pipe(gulp.dest('./public/css')); 
    }); 
```

*   现在我们可以更多地了解Gulp并尝试连接和缩小所有脚本文件。如果你现在只有一个脚本怎么办，所以你没有连接的东西呢？也许摆脱一些你拥有的CDN并制作脚本。但是你会得到更多有多个脚本的项目。
    
    *   请注意，我没有介绍源地图。我认为这是在这个基本概述之后的下一步，所以一旦你理解了你在这里做了什么就看看。
        
    *   当前任务名为`concatScripts`和`minifyScripts` 。
        
    *   这与`sass`基本结构相同。所有文件都添加到`gulp.src` ，但我们首先必须保存该连接文件，然后才能缩小它。
        
    *   JavaScript缩小称为`uglify` 。
        
    *   你在`minifyScripts`之后注意到了`['concatScripts]`吗？这意味着每次我们尝试运行`minifyScripts`时， `concatScripts`都会首先运行。
        

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

*   您现在可以转到终端并输入`gulp minifyScripts` `gulp sass`和/或`gulp minifyScripts` 。这将运行每一个，但我们希望让我们更容易。我们将进行默认构建，因此我们可以直接输入`gulp`到终端。我们还将添加`gulp watch` ，因此每当您保存手表中列出的文件时，它将运行您告诉它运行的内容。
    
    *   我们做了一个名为`build`的任务。这与`minifyScripts`非常相似，因为它中有一个数组。每当我们在终端中输入`gulp build` ，它将运行`sass`和`minifyScripts` （实际上首先运行`concatScripts` ）。
        
    *   我们还做了一项名为`watch`的任务。这是节省时间的任务。在终端你运行`gulp watch` 。 Gulp将在终端上保持打开状态，因此您可能希望在另一个选项卡中运行它。每当一个文件被更新，并保存在`scss`文件夹用`.scss`扩展`sass`任务将会运行。对于扩展名为`.js`的`js`文件夹中的文件也是如此，但是`concatScripts`和`minifyScripts`将会运行。
        
    *   最后一项任务是`default` 。您可以在终端中运行`gulp` ，它将运行`default`任务。这里的`default`任务是调用`build`任务，它只运行我们在页面上的所有任务。
        

```javascript
    gulp.task('build', ['sass', 'minifyScripts']); 
 
    gulp.task('watch', function() { 
        gulp.watch('./assets/scss/**/*.scss', ['sass']); 
        gulp.watch('./assets/js/**/*.js', ['minifyScripts']); 
    }); 
 
    gulp.task('default', ['build']); 
```

这是你的最终`gulpfile.js`文件应该是这样的：

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