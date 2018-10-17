---
title: Grunt
localeTitle: chão
---
## Grunhido

`Grunt` é um executor de tarefas JavaScript que você pode usar para automatizar tarefas repetitivas.

### Por que usar o grunhido?

Existem muitas tarefas repetitivas no desenvolvimento web. Por exemplo: compilar, minimizar e copiar arquivos. Realizar essas tarefas manualmente exige muito esforço e tempo.

Você tornará seu trabalho mais fácil com o Grunt. Você só precisa configurar as tarefas através de um [Gruntfile](https://gruntjs.com/sample-gruntfile) .

### Começando

1.  Instale o [npm](https://www.npmjs.org/) .
2.  Instale a interface de linha de comando (CLI) do Grunt globalmente com o `npm install -g grunt-cli` .
3.  Listar Grunt e os plugins Grunt como devDependencies em um arquivo `package.json` .
4.  Instale os plugins Grunt e Grunt com `npm i` .
5.  Configure tarefas em um arquivo `Gruntfile.js` .
6.  Corra Grunt com `grunt` .

### Exemplo

Abaixo está um exemplo de um `package.json` e `Gruntfile.js` para `Gruntfile.js` as seguintes tarefas:

1.  Minimize arquivos HTML.
2.  Adicione os prefixos do fornecedor e diminua o arquivo CSS.
3.  Concatene e diminua os arquivos JavaScript.
4.  Minimize imagens.

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

#### Mais Informações:

Documentação do Grunt: [Começando](https://gruntjs.com/getting-started)