---
title: Grunt
localeTitle: أرض
---
## الناخر

`Grunt` هو برنامج JavaScript Task Runner يمكنك استخدامه لأتمتة المهام المتكررة.

### لماذا استخدام Grunt؟

هناك العديد من المهام المتكررة في تطوير الويب. على سبيل المثال: ترجمة ، وتقليل ، ونسخ الملفات. يستغرق تنفيذ هذه المهام يدويًا الكثير من الجهد والوقت.

سوف تجعل عملك أسهل مع Grunt. تحتاج فقط إلى تكوين المهام من خلال [Gruntfile](https://gruntjs.com/sample-gruntfile) .

### ابدء

1.  تثبيت [npm](https://www.npmjs.org/) .
2.  تثبيت واجهة سطر الأوامر Grunt (CLI) على الصعيد العالمي مع `npm install -g grunt-cli` .
3.  قائمة Grunt ومكونات Grunt مثل devDependencies في ملف `package.json` .
4.  تثبيت Grunt والمكونات Grunt مع `npm i` .
5.  قم بتكوين المهام في ملف `Gruntfile.js` .
6.  تشغيل جرانت مع `grunt` .

### مثال

في ما يلي مثال على `package.json` و `Gruntfile.js` للقيام بالمهام التالية:

1.  تصغير ملفات HTML.
2.  إضافة بادئات بائع وتقليص ملف CSS.
3.  سلسل وتقصير ملفات جافا سكريبت.
4.  تصغير الصور.

#### package.json

 `{ 
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
` 

#### Gruntfile.js

 `module.exports = function(grunt) { 
 
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
` 

#### معلومات اكثر:

وثائق الناخر: [الابتداء](https://gruntjs.com/getting-started)