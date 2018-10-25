---
title: Gulp
localeTitle: 吞
---
## 吞

`Gulp`是一个JavaScript任务运行器，用于自动执行作为JavaScript开发工作流程一部分的各种任务。 它用于运行已编程的任务，其主要用例是执行重复操作，这些操作用作JavaScript项目的构建过程的路径。

### 为什么Gulp是有用的

这些任务通常包括`code minification` （从html文件中删除空格和缩短变量名称以缩小文件大小）和`css bundling` （将多个CSS文件转换为一个用于与应用程序一起分发），这些都是优化代码加载所需的在网络浏览器中快速。

`Gulp`在上述情况下有用的原因是缩小和捆绑过程需要在每次更改时发生。每次更改手动执行此操作都不会有效，这是`Gulp`这样的工具自动执行此操作对于JavaScript开发人员来说是一个很好的工具。

除了上面相对简单的例子， `Gulp`还有数百个插件，可以自动执行更复杂的任务。这些任务可以包括以下内容：

*   运行单元测试以测试代码是否正常工作。
*   每次保存文件时刷新Web浏览器，即可立即查看更改。
*   将`SASS` / `LESS`转换为`CSS` ，以便可以在浏览器中使用。
*   优化图像以创建具有较低文件大小的`web friendly`版本以提高速度。

### 如何使用Gulp

要开始使用`Gulp` ，第一步是使用`npm`安装它。安装后，必须创建`gulpfile.js` 。此`gulpfile`是一个文件，其中包含应作为自动化过程的一部分运行的所有`Gulp`任务。任务是用JavaScript编写的。下面是一个非常简单的`gulpfile`示例，它从`client/templates`文件夹中获取任何`CSS`文件，缩小它们并将缩小的文件放在`build/css`文件夹中。

```javascript
var gulp = require('gulp'); 
 var minifyCSS = require('gulp-csso'); 
 
 gulp.task('css', function(){ 
  return gulp.src('client/templates/*.css') 
    .pipe(minifyCSS()) 
    .pipe(gulp.dest('build/css')) 
 }); 
```

要运行此gulp任务，您只需在项目根目录中的终端中键入`gulp css` 。

要查看CSS文件以进行任何更改，请在保存后运行“css”任务。

```javascript
gulp.watch('css') 
  .on('change', ['css']); 
```

### 任务依赖项

默认情况下，gulp将同时运行所有定义的任务并等待一切。要以正确的顺序运行多个任务，您可以将任务作为依赖项添加到另一个任务。

```javascript
gulp.task('two', ['one'], function() { 
    // task 'one' is done now 
 }); 
```

使用上面的代码片段，任务`two`将仅在任务`one`完成后运行。

Gulpfiles每个文件可以有多个任务，任务也可以分成多个文件供组织使用。这与100个可用的插件一起使它成为JavaScript开发人员非常灵活和有用的框架。

#### 更多信息：

[Gulp网站](https://gulpjs.com/)

[Gulp github存储库](https://github.com/gulpjs/gulp)

[Gulp begginers指南](https://css-tricks.com/gulp-for-beginners/)