---
title: Grunt
localeTitle: 地面
---
## 咕噜

`Grunt`是一个JavaScript任务运行器，可用于自动执行重复性任务。

### 为什么要使用Grunt？

Web开发中有许多重复的任务。例如：编译，缩小和复制文件。手动完成这些任务需要花费很多精力和时间。

Grunt可以让您的工作更轻松。您只需要通过[Gruntfile](https://gruntjs.com/sample-gruntfile)配置任务。

### 入门

1.  安装[npm](https://www.npmjs.org/) 。
2.  使用`npm install -g grunt-cli`全局安装Grunt的命令行界面（CLI）。
3.  将Grunt和Grunt插件列为`package.json`文件中的devDependencies。
4.  用`npm i`安装Grunt和Grunt插件。
5.  在`Gruntfile.js`文件中配置任务。
6.  用`grunt`跑Grunt。

### 例

下面是`package.json`和`Gruntfile.js`的示例，用于执行以下任务：

1.  缩小HTML文件。
2.  添加供应商前缀并缩小CSS文件。
3.  连接和缩小JavaScript文件。
4.  缩小图像。

#### 的package.json

```json
{ 
  "name": "project-name", 
  "version": "0.1.0", 
  "devDependencies": { 
    "grunt": "latest", 
    "grunt-contrib-htmlmin": "latest", 
    "grunt-postcss": "latest", 
    "autoprefixer": "latest", 
    "cssnano": "latest", 
    "grunt-contrib-uglify": "latest", 
    "grunt-contrib-imagemin": "latest", 
  } 
 } 
```

#### Gruntfile.js

```javascript
module.exports = function(grunt) { 
 
  grunt.initConfig({ 
    htmlmin: { 
      options: { 
        removeComments: true, 
        collapseWhitespace: true 
      }, 
      html: { 
        files: [{ 
          expand: true, 
          cwd: "src/", 
          src: "**/*.html", 
          dest: "dest/" 
        }] 
      } 
    }, 
 
    postcss: { 
      options: { 
        processors: [ 
          require("autoprefixer")(), 
          require("cssnano")() 
        ] 
      }, 
      css: { 
        src: "dest/css/*.css" 
      } 
    }, 
 
     uglify: { 
      js: { 
        files: { 
          "dest/js/main.js": "src/js/*.js" 
        } 
      }, 
    }, 
 
    imagemin: { 
      img: { 
        options: { 
          optimizationLevel: 5, 
          quality: 75 
        }, 
        files: [{ 
          expand: true, 
          cwd: "src/img/", 
          src: "**", 
          dest: "dest/img/" 
        }] 
      } 
    }, 
  }); 
 
  grunt.loadNpmTasks("grunt-contrib-htmlmin"); 
  grunt.loadNpmTasks("grunt-postcss"); 
  grunt.loadNpmTasks("grunt-contrib-uglify"); 
  grunt.loadNpmTasks("grunt-contrib-imagemin"); 
 
  grunt.registerTask("default", ["htmlmin", "postcss", "uglify, imagemin"]); 
 }; 
```

#### 更多信息：

Grunt文档： [入门](https://gruntjs.com/getting-started)