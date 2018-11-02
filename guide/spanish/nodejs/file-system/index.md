---
title: File System
localeTitle: Sistema de archivos
---
## Sistema de archivos

El módulo del sistema de archivos Node.js le permite trabajar con el sistema de archivos en su computadora.

Node.js tiene un conjunto de módulos incorporados que puede utilizar sin ninguna otra instalación. De manera similar **, el módulo del sistema de archivos** contiene un conjunto de funciones que se requieren para realizar diferentes operaciones en archivos, como la lectura y la escritura.

Para incluir un módulo, use la función `require()` con el nombre del módulo.

```javascript
const fs = require('fs');
```

Uso común para el módulo del sistema de archivos:

*   Leer archivos
*   Crear archivos
*   Actualizar archivos
*   Borrar archivos
*   Renombrar archivos

## Leyendo un archivo

El método `fs.readFile()` se usa para leer archivos en su computadora. Toma tres argumentos: nombre de archivo, codificación y una función de devolución de llamada.

Código Node.js para leer el archivo de su computadora y devolver el contenido a la consola.

```javascript
const fs = require('fs');
 fs.readFile('input.txt', 'utf-8', (err, data) => {
  if(err){
  console.log(err);
  }
  else{
  console.log("Content present in input.txt file : " + data.toString());
  }
 });
```

El código anterior lee un archivo _input.txt_ de su computadora y devuelve el contenido a la consola.

### Pasos para la ejecución:

*   Deberías tener instalado Node.js en tu computadora.
*   Crea un archivo _app.js_ y pega el código anterior.
*   Cree un archivo _input.txt_ y escriba algo de contenido en él.
*   Ahora abra su consola en el directorio de trabajo y ejecute el comando `node app.js`

_Nota_ : el archivo input.txt debe estar presente en el mismo directorio donde está presente el archivo de código Node.js, de lo contrario, generará un error.

## Escribiendo en un archivo

El método `fs.writeFile()` toma tres argumentos: nombre de archivo, contenido y una función de devolución de llamada.

Código Node.js para escribir contenido en el archivo.

```javascript
const fs = require('fs');
 fs.writeFile('output.txt', "New content added", (err, data) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("The file is saved");
    }
 });
```

El código anterior crea un archivo _output.txt_ y agrega contenido. Se agrega contenido _nuevo_ .

### Pasos para la ejecución:

*   Deberías tener instalado Node.js en tu computadora.
*   Crea un archivo _app.js_ y pega el código anterior.
*   Ahora abra su consola en el directorio de trabajo y ejecute el comando `node app.js`

_Nota_ : si el archivo no existe, el método `fs.writeFile()` crea un archivo y escribe el contenido en él. Por el contrario, si el archivo existe, sobrescribe el contenido del archivo.

## Recursos

*   [API Node.js](https://nodejs.org/api/fs.html#fs_file_system)
*   [Escuelas w3](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)