---
title: Create an Npm Module
localeTitle: Crear un módulo Npm
---
Un módulo NPM es un conjunto de funciones de Javascript agrupadas en un paquete distribuible. [NPM](http://www.npmjs.com) mantiene el registro de todos los paquetes disponibles y también es la herramienta utilizada para instalar paquetes desde su registro.

La belleza de NPM es que puedes armar paquetes que otras personas han creado para crear algo nuevo, y alguien más adelante podría usar el paquete que crees. Si tiene algún código que desea compartir con el mundo, publicar un módulo en NPM es fácil.

## Paso 1: Crea tu guión

He creado esta sencilla utilidad como `index.js` :
```
var time = new Date().toTimeString(); 
 console.log(time); 
```

## Paso 2: Crear información del paquete

El siguiente paso es crear la información para publicar con su paquete, almacenada en `package.json` . NPM proporciona un asistente para facilitar la creación de este archivo.

Simplemente ejecute `npm init` y responda las preguntas.

Su `package.json` debe verse algo como esto:
```
{ 
  "name": "whattimeisit", 
  "version": "1.0.0", 
  "description": "accurate time retrieval", 
  "main": "index.js", 
  "author": "HoursAndMinutes", 
  "license": "ISC" 
 } 
```

¡No olvide incluir el enlace del repositorio de GitHub si el código está en GitHub!

## Paso 3: Crea una cuenta de usuario en NPM

Para publicar un paquete en NPM, necesita tener una cuenta registrada. Para hacer eso, ejecute `npm adduser` . Puede verificar la cuenta actualmente en uso con `npm config ls` .

## Paso 4: Publicar en NPM

Antes de publicar su paquete en NPM, verifique si el directorio contiene algún archivo que no quiera hacer público (por ejemplo, contraseñas, claves privadas, etc.). Puede agregarlos a un archivo llamado `.npmignore` para excluirlos de la publicación de paquetes. NPM también honrará a `.gitignore` si tienes eso.

Una vez que haya finalizado el contenido de su paquete, ejecute `npm publish` . Puede confirmar los detalles de su paquete en [https://npmjs.com/package/yourpackagename](https://npmjs.com/package/yourpackagename) .

### Más información:

Creando módulos Node.js [npm](https://docs.npmjs.com/getting-started/creating-node-modules)