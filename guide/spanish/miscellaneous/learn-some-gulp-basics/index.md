---
title: Learn Some Gulp Basics
localeTitle: Aprender algunos conceptos básicos de Gulp
---
Gulp puede hacer **mucho** . Esto es sólo una visión general de los conceptos básicos. Una vez que entiendas esto, entonces puedes agregar más a Gulp por tu cuenta. La documentación de los diferentes paquetes que he usado ha sido excelente y también tenemos una gran comunidad en FreeCodeCamp lista para ayudar con cualquier proyecto.

![Logo de Gulp](https://raw.githubusercontent.com/gulpjs/artwork/master/gulp.png)

## ¿Qué es Gulp?

Gulp es un compilador de JavaScript / tarea de ejecución. ¿Estás usando Jade, pero necesitas HTML? Sass, pero necesita CSS? CoffeeScript, pero necesita JavaScript? ¿O tal vez solo quieres concatenar y / o minimizar lo que ya tienes? Gulp puede hacer todo esto por usted fácilmente, para que no tenga que volver a su terminal después de cada pequeño cambio.

## ¿Por qué usar Gulp?

Usamos mucho CodePen en FreeCodeCamp. CodePen permite el uso de preprocesadores sin tener que hacer nada más. Puede ver la versión compilada si se usó un preprocesador. Se ve muy diferente. Puedes hacer un proyecto en React en CodePen, elige a Babel como el preprocesador de JavaScript y todo funcionará. Si tuviera que realizar este mismo proyecto localmente sin procesar todo, entonces no obtendría lo que esperaba. Aquí es donde entra Gulp.

## ¿Cómo uso Gulp?

De nuevo, esto es solo una descripción general de los conceptos básicos. La descripción general será el procesamiento de Sass to CSS, la concatenación y la reducción de las hojas de estilo y los scripts, y la implementación del reloj Gulp. Sin embargo, necesitas Node y NPM instalados en tu computadora antes de hacer algo. Lo más probable es que ya tengas esto, pero ingresa el `node -v` y `npm -v` en tu terminal para verificarlo.

*   Cambie al directorio del proyecto y ejecute `npm init` en el terminal.
    
    *   Esto crea el archivo `package.json` en el directorio de trabajo.
        
    *   Este también sería un buen momento para ejecutar `touch .gitignore` en el terminal y agregar `node_modules/` al archivo, por lo que no enviará todos esos paquetes a GitHub.
        
*   Ejecute `npm install --save-dev gulp gulp-concat gulp-minify-css gulp-rename gulp-sass gulp-uglify` en el terminal. Esto puede tomar un par de minutos para terminar.
    
    *   Esto está instalando 6 diferentes `node_modules` . Puede echar un vistazo al archivo `package.json` y ver todos estos listados en `devDependencies` y en la carpeta `node_modules` y ver cada paquete que instaló.
        
    *   `gulp-concat` es para concatenar hojas de estilo y scripts, `gulp-minify-css` es para minificar CSS, `gulp-rename` es para renombrar el archivo, `gulp-sass` es para Sass a CSS, y `gulp-uglify` es para minificar JS.
        
*   Ejecutar `touch gulpfile.js` en la terminal.
    
    *   Ya estás listo para empezar.
*   Deberá requerir todos los archivos que acaba de guardar. Haces esto en `gulpfile.js` .
    

```javascript
    'use strict'; 
 
    var gulp = require('gulp'); 
    var concat = require('gulp-concat'); 
    var minifyCss = require('gulp-minify-css'); 
    var rename = require('gulp-rename'); 
    var sass = require('gulp-sass'); 
    var uglify = require('gulp-uglify'); 
```

*   Tenemos que empezar en algún lugar, así que primero sass a CSS? Aquí vamos a procesar Sass to CSS, minimizar el CSS y cambiar el nombre del archivo.
    
    *   El nombre de la tarea `sass` (más sobre esto más adelante).
        
    *   En el directorio actual, estamos buscando una carpeta con el nombre de `assets` , luego una carpeta llamada `scss` , luego un archivo llamado `main.scss` .
        
    *   Estamos procesando Sass to CSS y registrando si se produce un error.
        
    *   El CSS se reduce a continuación. Esto es simplemente deshacerse de todas esas líneas y espacios adicionales. La computadora no los necesita para leer el archivo y reduce drásticamente el tamaño del archivo.
        
    *   Como el archivo ahora está reducido, tiene sentido cambiarle el nombre a `.min.css` .
        
    *   El último paso es guardar el archivo `main.min.css` algún lugar y va en el directorio actual a una carpeta llamada `public` , luego a una carpeta llamada `css` .
        

```javascript
    gulp.task('sass', function() { 
        return gulp.src('./assets/scss/main.scss') 
        .pipe(sass().on('error', sass.logError)) 
        .pipe(minifyCss({compatibility: 'ie8'})) 
        .pipe(rename('main.min.css')) 
        .pipe(gulp.dest('./public/css')); 
    }); 
```

*   Ahora podemos obtener un poco más de Gulp y tratar de concatenar y minimizar todos los archivos de script. ¿Qué pasa si solo tiene un script ahora, por lo que no tiene nada que concatenar? Tal vez deshacerse de algunos de los CDN que tienes y hacerlos scripts. Pero llegarás a proyectos más grandes que tienen varios scripts.
    
    *   Tenga en cuenta que no estoy cubriendo mapas de origen. Creo que ese es el siguiente paso después de esta descripción básica, así que analice eso una vez que entienda lo que está haciendo aquí.
        
    *   Las tareas actuales se denominan `concatScripts` y `minifyScripts` .
        
    *   Esta es la misma estructura básica que `sass` . Todos los archivos se agregan a `gulp.src` , pero primero tenemos que guardar ese archivo concatenado antes de poder minimizarlo.
        
    *   La reducción de JavaScript se llama `uglify` .
        
    *   ¿Notan `['concatScripts]` después de `minifyScripts` ? Eso significa que `concatScripts` realmente se ejecutará primero cada vez que intentemos ejecutar `minifyScripts` .
        

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

*   Ahora puede ir a la terminal y escribir `gulp sass` y / o `gulp minifyScripts` . Esto ejecutará cada uno, pero queremos hacerlo más fácil para nosotros. Vamos a hacer una compilación por defecto, por lo que sólo pueden introducir `gulp` en el terminal. También agregaremos `gulp watch` , por lo que cada vez que guarde un archivo que se encuentra en la lista del reloj, ejecutará lo que usted le indicó que ejecute.
    
    *   Hicimos una tarea llamada `build` . Esto es muy similar a `minifyScripts` ya que hay una matriz en él. Cada vez que `minifyScripts` `gulp build` en el terminal ejecutará `sass` y `minifyScripts` (que en realidad ejecuta `concatScripts` primero).
        
    *   También hicimos una tarea llamada `watch` . Esta es la tarea de ahorro de tiempo. En la terminal se ejecuta `gulp watch` . Gulp permanecerá abierto en el terminal, por lo que probablemente querrás ejecutarlo en otra pestaña. Cada vez que se actualiza un archivo y se guarda en la carpeta `scss` con una extensión `.scss` , se ejecutará la tarea de `sass` . Y lo mismo para un archivo en la carpeta `js` con una extensión `.js` , pero se ejecutarán `concatScripts` y `minifyScripts` .
        
    *   La última tarea es por `default` . Simplemente puede ejecutar `gulp` en el terminal y ejecutará la tarea `default` . La tarea `default` aquí es llamar a la tarea de `build` , que simplemente ejecuta todas las tareas que tenemos en la página.
        

```javascript
    gulp.task('build', ['sass', 'minifyScripts']); 
 
    gulp.task('watch', function() { 
        gulp.watch('./assets/scss/**/*.scss', ['sass']); 
        gulp.watch('./assets/js/**/*.js', ['minifyScripts']); 
    }); 
 
    gulp.task('default', ['build']); 
```

Este es el `gulpfile.js` que debería tener su archivo `gulpfile.js` final:

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