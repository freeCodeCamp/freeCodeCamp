---
title: Yarn
localeTitle: Hilo
---
## Hilo

Yarn es un gestor de paquetes para su código. Le permite usar y compartir código con otros desarrolladores de todo el mundo. Yarn hace esto de manera rápida, segura y confiable para que nunca tenga que preocuparse por las dependencias de un proyecto.

Yarn le permite utilizar las soluciones de otros desarrolladores para diferentes problemas, facilitándole el desarrollo de su software. Si tiene problemas, puede informar sobre problemas o contribuir, y cuando se solucione el problema, puede usar Yarn para mantenerlo actualizado.

El código se comparte a través de algo llamado paquete (a veces denominado módulo). Un paquete contiene todo el código que se comparte, así como un archivo package.json que describe el paquete.

Para usar hilo debes instalarlo primero en tu sistema. Hay enlaces al final de este artículo para ayudarlo a hacerlo en cualquier sistema operativo.

Cuando tengas Yarn instalado, puedes comenzar a usarlo. Estos son algunos de los comandos más comunes que necesitarás.

### uso del hilo

**Comenzando un nuevo proyecto**
```
yarn init 
```

El comando `yarn init` abrirá un formulario interactivo para crear un proyecto de hilo. `yarn init` crea un archivo `package.json` que almacena la información sobre su proyecto. Este formulario interactivo se abrirá con las siguientes preguntas:
```
name (your-project): 
 version (1.0.0): 
 description: 
 entry point (index.js): 
 git repository: 
 author: 
 license (MIT): 
```

Puede escribir las respuestas para cada opción o simplemente pulsar Intro sin escribir nada para usar el valor predeterminado o dejar en blanco. Siempre puede ingresar a su editor de texto favorito para cambiar su archivo `package.json` , si es necesario.

Su archivo `package.json` debería verse similar a esto:
```
{ 
  "name": "your-new-project", 
  "version": "1.0.0", 
  "description": "A description of your new project.", 
  "main": "index.js", 
  "repository": { 
    "url": "https://github.com/your-username/your-new-project", 
    "type": "git" 
  }, 
  "author": "Your Name <your_name@example.com>", 
  "license": "MIT" 
 } 
```

**Añadiendo una dependencia**
```
yarn add [package] 
```

**Actualizar una dependencia**
```
yarn upgrade [package] 
```

**Eliminando una dependencia**
```
yarn remove [package] 
```

**Instalación de todas las dependencias del proyecto.**
```
yarn install 
```

#### Más información:

*   [Sitio web de hilo](https://yarnpkg.com)
*   [Documentación de hilo](https://yarnpkg.com/en/docs)
*   [Instalación de hilo](https://yarnpkg.com/en/docs/install)
*   [Yarn vs npm](https://www.pluralsight.com/guides/node-js/yarn-a-package-manager-for-node-js)