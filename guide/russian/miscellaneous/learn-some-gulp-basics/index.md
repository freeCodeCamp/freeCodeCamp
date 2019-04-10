---
title: Learn Some Gulp Basics
localeTitle: Изучите некоторые основы глотки
---
Гальп может **многое** сделать. Это всего лишь общий обзор основ. Как только вы это поймете, вы можете добавить больше к Gulp самостоятельно. Документация для разных пакетов, которые я использовал, была отличной, и у нас также есть отличное сообщество FreeCodeCamp, готовое помочь с любым проектом.

![Логотип Gulp](https://raw.githubusercontent.com/gulpjs/artwork/master/gulp.png)

## Что такое глоток?

Gulp - это бегун для сборки / задания JavaScript. Вы используете Jade, но нужен HTML? Сасс, но нужен CSS? CoffeeScript, но нужен JavaScript? Или, может быть, вы просто хотите объединить и / или минимизировать то, что у вас уже есть? Gulp может сделать все это для вас легко, поэтому вам не нужно постоянно возвращаться к вашему терминалу после каждого небольшого изменения.

## Зачем использовать Gulp?

Мы используем много CodePen на FreeCodeCamp. CodePen позволяет использовать препроцессоры без необходимости делать что-либо еще. Вы можете просмотреть скомпилированную версию, если был использован препроцессор. Это выглядит совсем по-другому. Вы можете сделать проект в React on CodePen, выбрать Babel в качестве препроцессора JavaScript, и все будет работать. Если бы вы делали этот же проект локально, не обрабатывая все, то вы не получили бы то, что ожидали. Здесь появляется Gulp.

## Как использовать Gulp?

Опять же, это всего лишь обзор основ. Обзор будет обрабатывать Sass для CSS, конкатенировать и минимизировать таблицы стилей и скриптов и внедрять Gulp watch. Вам нужно, чтобы Node и NPM были установлены на вашем компьютере, прежде чем что-либо делать. Скорее всего, у вас есть это, но введите `node -v` и `npm -v` в свой терминал, чтобы проверить.

*   Перейдите в каталог проекта и запустите `npm init` в терминале.
    
    *   Это создает файл `package.json` в рабочем каталоге.
        
    *   Это также было бы хорошим временем для запуска `touch .gitignore` в терминале и добавления `node_modules/` в файл, поэтому вы не будете нажимать все эти пакеты на GitHub.
        
*   Запустите `npm install --save-dev gulp gulp-concat gulp-minify-css gulp-rename gulp-sass gulp-uglify` в терминале. Это может занять пару минут.
    
    *   Это устанавливает 6 различных `node_modules` . Вы можете посмотреть файл `package.json` и просмотреть все перечисленные ниже в `devDependencies` и в папке `node_modules` и посмотреть все установленные вами пакеты.
        
    *   `gulp-concat` для конкатенирования таблиц стилей и скриптов, gulp-minify `gulp-minify-css` предназначен для минимизации CSS, gulp `gulp-rename` - для переименования файла, `gulp-sass` - для Sass для CSS, а `gulp-uglify` - для минимизации JS.
        
*   Запустите `touch gulpfile.js` в терминале.
    
    *   Теперь вы готовы начать.
*   Вам нужно будет потребовать все файлы, которые вы только что сохранили. Вы делаете это в `gulpfile.js` .
    

```javascript
    'use strict'; 
 
    var gulp = require('gulp'); 
    var concat = require('gulp-concat'); 
    var minifyCss = require('gulp-minify-css'); 
    var rename = require('gulp-rename'); 
    var sass = require('gulp-sass'); 
    var uglify = require('gulp-uglify'); 
```

*   Нам нужно начать где-то, так что Sass для CSS сначала? Здесь мы собираемся обрабатывать Sass для CSS, минимизировать CSS и переименовывать файл.
    
    *   Имя задачи `sass` (подробнее об этом позже).
        
    *   В текущем каталоге мы ищем папку с именем `assets` , затем папку с именем `scss` , затем файл с именем `main.scss` .
        
    *   Мы обрабатываем Sass для CSS и регистрируем, если возникает ошибка.
        
    *   Затем CSS затем оценивается. Это просто избавляет от лишних линий и пробелов. Компьютер не нуждается в том, чтобы читать файл, и он резко уменьшает размер файла.
        
    *   Поскольку файл теперь минимизирован, имеет смысл переименовать его `.min.css` .
        
    *   Последний шаг - сохранить файл `main.min.css` где-нибудь, и он идет в текущем каталоге в папку с именем `public` , а затем в папку `css` .
        

```javascript
    gulp.task('sass', function() { 
        return gulp.src('./assets/scss/main.scss') 
        .pipe(sass().on('error', sass.logError)) 
        .pipe(minifyCss({compatibility: 'ie8'})) 
        .pipe(rename('main.min.css')) 
        .pipe(gulp.dest('./public/css')); 
    }); 
```

*   Теперь мы можем получить немного больше в Gulp и попытаться объединить и уменьшить все файлы сценариев. Что делать, если у вас есть только один скрипт, так что вам нечего конкатенации? Может быть, избавиться от некоторых CDN, которые у вас есть, и сделать их сценариями. Но вы получите более крупные проекты с несколькими сценариями.
    
    *   Обратите внимание, что я не рассматриваю исходные карты. Я думаю, что это следующий шаг после этого основного обзора, поэтому посмотрите, как только вы поймете, что вы здесь делаете.
        
    *   Текущие задачи называются `concatScripts` и `minifyScripts` .
        
    *   Это та же основная структура, что и `sass` . Все файлы добавляются в `gulp.src` , но сначала мы должны сохранить этот конкатенированный файл, прежде чем его можно будет минимизировать.
        
    *   Минимизация JavaScript называется `uglify` .
        
    *   Вы заметили `['concatScripts]` после `minifyScripts` ? Это означает, что `concatScripts` будут запускаться сначала каждый раз, когда мы пытаемся запустить `minifyScripts` .
        

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

*   Теперь вы можете перейти в терминал и введите в `gulp sass` и / или `gulp minifyScripts` . Это будет работать каждый, но мы хотим сделать это проще для нас. Мы собираемся создать сборку по умолчанию, поэтому мы можем просто ввести `gulp` в терминал. Мы также собираемся добавить `gulp watch` , поэтому всякий раз, когда вы сохраняете файл, который указан в часах, он будет запускать то, что вы сказали ему запустить.
    
    *   Мы сделали задачу под названием `build` . Это очень похоже на `minifyScripts` поскольку в нем есть массив. Всякий раз , когда мы вступаем `gulp build` в терминал будет работать `sass` и `minifyScripts` (который на самом деле работает `concatScripts` первый).
        
    *   Мы также поставили задачу под названием `watch` . Это задача сохранения времени. В терминале вы запускаете `gulp watch` . Gulp останется открытым на терминале, поэтому вы, вероятно, захотите запустить его на другой вкладке. Всякий раз , когда файл обновляется и сохраняется в `scss` папке с `.scss` расширения `sass` задача будет выполнена. И то же самое для файла в папке `js` с расширением `.js` , но будут выполняться `concatScripts` и `minifyScripts` .
        
    *   Последняя задача - по `default` . Вы можете просто запустить `gulp` в терминале, и он выполнит задание по `default` . Задача по `default` здесь - вызов задачи `build` , которая просто запускает все задачи, которые у нас есть на странице.
        

```javascript
    gulp.task('build', ['sass', 'minifyScripts']); 
 
    gulp.task('watch', function() { 
        gulp.watch('./assets/scss/**/*.scss', ['sass']); 
        gulp.watch('./assets/js/**/*.js', ['minifyScripts']); 
    }); 
 
    gulp.task('default', ['build']); 
```

Вот как выглядит ваш последний файл `gulpfile.js` :

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