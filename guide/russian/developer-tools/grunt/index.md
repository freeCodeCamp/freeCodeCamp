---
title: Grunt
localeTitle: земля
---
## хрюкать

`Grunt` - это бегущая задача JavaScript, которую вы можете использовать для автоматизации повторяющихся задач.

### Зачем использовать Grunt?

В веб-разработке много повторяющихся задач. Например: компиляция, удаление и копирование файлов. Выполнение этих задач вручную требует больших усилий и времени.

С Грунтом вы облегчите свою работу. Вам нужно только настроить задачи через [Gruntfile](https://gruntjs.com/sample-gruntfile) .

### Начиная

1.  Установите [npm](https://www.npmjs.org/) .
2.  Установите интерфейс командной строки Grunt (CLI) в глобальном масштабе с `npm install -g grunt-cli` .
3.  Список Grunt и плагины Grunt как devDependencies в файле `package.json` .
4.  Установите плагины Grunt и Grunt с `npm i` .
5.  Настройте задачи в файле `Gruntfile.js` .
6.  Запустите Grunt с `grunt` .

### пример

Ниже приведен пример `package.json` и `Gruntfile.js` для выполнения следующих задач:

1.  Минимизировать HTML-файлы.
2.  Добавьте префиксы поставщиков и уменьшите CSS-файл.
3.  Объединение и минимизация файлов JavaScript.
4.  Минимизировать изображения.

#### package.json

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

#### Дополнительная информация:

Грунтовая документация: [Начало работы](https://gruntjs.com/getting-started)