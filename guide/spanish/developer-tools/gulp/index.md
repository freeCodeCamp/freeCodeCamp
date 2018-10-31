---
title: Gulp
localeTitle: Trago
---
## Trago

`Gulp` es un corredor de tareas de JavaScript que se utiliza para automatizar varias tareas que forman parte de un flujo de trabajo de desarrollo de JavaScript. Se utiliza para ejecutar tareas que ha programado, y su caso de uso principal es realizar acciones repetitivas que se utilizan como una ruta del proceso de construcción para un proyecto de JavaScript.

### Por qué Gulp es útil

Estas tareas a menudo incluyen cosas como la reducción de `code minification` (eliminar espacios en blanco de los archivos html y acortar los nombres de las variables para hacer que el tamaño del archivo sea más pequeño) y el `css bundling` (convertir varios archivos CSS en uno para distribuirlos con su aplicación), que son necesarios para optimizar el código para cargar rápido en un navegador web.

La razón por la que `Gulp` es útil en las situaciones anteriores es que el proceso de agrupación y agrupación debe ocurrir con cada cambio. No sería eficiente hacer esto manualmente con cada cambio, que es donde una herramienta como `Gulp` , que hace esto automáticamente, es una gran herramienta para los desarrolladores de JavaScript.

Además de los ejemplos relativamente simples anteriores, `Gulp` tiene cientos de complementos que le permiten automatizar tareas más complejas. Estas tareas pueden incluir cosas como:

*   Ejecutar pruebas unitarias para probar su código está funcionando correctamente.
*   Actualice su navegador web cada vez que se guarde un archivo, permitiendo que sus cambios se vean al instante.
*   Conversión de `SASS` / `LESS` a `CSS` , para que se pueda utilizar en un navegador.
*   Optimización de imágenes para crear versiones compatibles con la `web friendly` con tamaños de archivo más bajos para la velocidad.

### Cómo usar Gulp

Para comenzar a usar `Gulp` , el primer paso es instalarlo usando `npm` . Una vez instalado, se debe crear un `gulpfile.js` . Este `gulpfile` es un archivo que contiene todas las tareas de `Gulp` que deben ejecutarse como parte de su proceso automatizado. Las tareas están escritas en JavaScript. A continuación se muestra un ejemplo muy simple de `gulpfile` , que toma cualquier archivo `CSS` de la carpeta `client/templates` , los minimiza y coloca el archivo minificado en la carpeta `build/css` .

```javascript
var gulp = require('gulp'); 
 var minifyCSS = require('gulp-csso'); 
 
 gulp.task('css', function(){ 
  return gulp.src('client/templates/*.css') 
    .pipe(minifyCSS()) 
    .pipe(gulp.dest('build/css')) 
 }); 
```

Para ejecutar esta tarea truculenta, todo lo que debería hacer es escribir `gulp css` en un terminal en la raíz de su proyecto.

Para ver los archivos CSS en busca de cambios y ejecutar la tarea "css" después de guardarla.

```javascript
gulp.watch('css') 
  .on('change', ['css']); 
```

### Dependencias de la tarea

Por defecto gulp ejecutará todas las tareas definidas al mismo tiempo y no esperará nada. Para ejecutar varias tareas en el orden correcto, puede agregar una tarea como dependencias a otra tarea.

```javascript
gulp.task('two', ['one'], function() { 
    // task 'one' is done now 
 }); 
```

Con el fragmento de código anterior, la tarea `two` solo se ejecutará después de `one` se complete la tarea `one` .

Gulpfiles puede tener múltiples tareas por archivo, y las tareas también pueden dividirse en múltiples archivos para una organización. Esto, junto con los cientos de complementos disponibles, lo convierten en un marco muy flexible y útil para los desarrolladores de JavaScript.

#### Más información:

[Sitio web de Gulp](https://gulpjs.com/)

[Gulp repositorio github](https://github.com/gulpjs/gulp)

[Gulp principiantes guia](https://css-tricks.com/gulp-for-beginners/)