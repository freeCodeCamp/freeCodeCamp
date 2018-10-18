---
title: Process Object
localeTitle: Objeto de proceso
---
## Objeto de proceso

El objeto de `process` en Node.js es un objeto global al que se puede acceder desde cualquier módulo sin necesidad de requerirlo. Hay muy pocos objetos o propiedades globales proporcionados en Node.js y el `process` es uno de ellos. Es un componente esencial en el ecosistema Node.js ya que proporciona varios conjuntos de información sobre el tiempo de ejecución de un programa. Para explorar usaremos una de sus propiedades que se llama `process.versions` . Esta propiedad nos dice la información sobre la versión de Node.js que hemos instalado. Tiene que ser usado con la bandera `-p` .

```shell
$ node  -p "process.versions" 
 
 # output 
 { http_parser: '2.8.0', 
  node: '8.11.2', 
  v8: '6.2.414.54', 
  uv: '1.19.1', 
  zlib: '1.2.11', 
  ares: '1.10.1-DEV', 
  modules: '57', 
  nghttp2: '1.29.0', 
  napi: '3', 
  openssl: '1.0.2o', 
  icu: '60.1', 
  unicode: '10.0', 
  cldr: '32.0', 
  tz: '2017c' } 
```

Otra propiedad que puede verificar es `process.release` que es igual al comando `$ node --version` que usamos cuando instalamos Node.js, pero el resultado esta vez será más detallado.

```shell
node -p "process.release" 
 
 # output 
 { name: 'node', 
  lts: 'Carbon', 
  sourceUrl: 'https://nodejs.org/download/release/v8.11.2/node-v8.11.2.tar.gz', 
  headersUrl: 'https://nodejs.org/download/release/v8.11.2/node-v8.11.2-headers.tar.gz' } 
```

Estos son algunos de los diferentes comandos que podemos usar en una línea de comandos para acceder a la información, de lo contrario, ningún módulo puede proporcionar. Este objeto de `process` es una instancia de la clase EventEmitter y contiene sus propios eventos predefinidos, como `exit` que se puede usar para saber cuándo un programa en Node.js ha completado su ejecución. Ejecute el siguiente programa y podrá observar que el resultado aparece con el código de estado `0`. En Node.js, este código de estado significa que un programa se ha ejecutado correctamente.

```js
process.on('exit', code => { 
    setTimeout(() => { 
        console.log('Will not get displayed'); 
    }, 0); 
 
    console.log('Exited with status code:', code); 
 }); 
 console.log('Execution Completed'); 
```

Salida del programa anterior:

```shell
Execution Completed 
 Exited with status code: 0 
```

`Process` también proporciona varias propiedades para interactuar. Algunos de ellos se pueden usar en una aplicación Node para proporcionar una puerta de enlace para comunicarse entre la aplicación Node y cualquier interfaz de línea de comandos. Esto es muy útil si está creando una aplicación o utilidad de línea de comandos usando Node.js

*   process.stdin: un flujo legible
*   process.stdout: un flujo grabable
*   process.stderr: un flujo grabable para reconocer errores

Usando `argv` siempre puede acceder a los argumentos que se pasan en una línea de comando. `argv` es una matriz que tiene el propio Node como primer elemento y la ruta absoluta del archivo como segundo elemento. A partir del tercer elemento puede tener tantos argumentos.

Pruebe el siguiente programa para obtener más información sobre cómo puede usar estas diversas propiedades y funciones.

```js
process.stdout.write('Hello World!' + '\n'); 
 
 process.argv.forEach(function(val, index, array) { 
    console.log(index + ': ' + val); 
 }); 
```

Si ejecuta el código anterior con el siguiente comando, obtendrá el resultado y se imprimirán los dos primeros elementos de `argv` .

```shell
$ node test.js 
 
 # output 
 Hello World! 
 0: /usr/local/bin/node 
 1: /Users/amanhimself/Desktop/articles/nodejs-text-tuts/test.js 

```
