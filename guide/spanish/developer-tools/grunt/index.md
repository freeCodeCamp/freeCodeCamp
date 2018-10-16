---
title: Grunt
localeTitle: terreno
---
## Gruñido

`Grunt` es un Task Runner de JavaScript que puede utilizar para automatizar tareas repetitivas.

### ¿Por qué usar Grunt?

Hay muchas tareas repetitivas en el desarrollo web. Por ejemplo: compilar, minimizar y copiar archivos. Hacer estas tareas manualmente requiere mucho esfuerzo y tiempo.

Harás tu trabajo más fácil con Grunt. Solo necesitas configurar las tareas a través de un [Gruntfile](https://gruntjs.com/sample-gruntfile) .

### Empezando

1.  Instala [npm](https://www.npmjs.org/) .
2.  Instale la interfaz de línea de comandos (CLI) de Grunt globalmente con `npm install -g grunt-cli` .
3.  Listar Grunt y los complementos de Grunt como devDependencies en un archivo `package.json` .
4.  Instale los complementos Grunt y Grunt con `npm i` .
5.  Configurar tareas en un archivo `Gruntfile.js` .
6.  Ejecutar Grunt con `grunt` .

### Ejemplo

A continuación se muestra un ejemplo de `package.json` y `Gruntfile.js` para realizar las siguientes tareas:

1.  Minimizar archivos HTML.
2.  Agregue los prefijos de los proveedores y minimice el archivo CSS.
3.  Concatenar y minimizar archivos JavaScript.
4.  Minimizar imágenes.

#### paquete.json

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

#### Más información:

Documentación Grunt: [Primeros pasos](https://gruntjs.com/getting-started)