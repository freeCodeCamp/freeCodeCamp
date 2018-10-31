---
title: Streams
localeTitle: Corrientes
---
## Corrientes

Las secuencias están disponibles en la API central de Node.js como objetos que permiten que los datos se lean o escriban de forma continua. Básicamente, una secuencia hace eso en trozos en comparación con el búfer que hace su bit a bit, por lo que es un proceso lento.

Hay cuatro tipos de flujos disponibles:

*   Legible (flujos desde los cuales se leen los datos)
*   Escritable (flujos en los que se escriben los datos)
*   Dúplex (secuencias que se pueden leer y escribir)
*   Transformar (transmisiones dúplex que pueden modificar datos a medida que se leen y escriben)

Cada tipo disponible tiene varios métodos asociados. Algunos de los más comunes son:

*   datos (esto se ejecuta cuando los datos están disponibles)
*   final (esto se activa cuando no hay datos para leer)
*   error (esto se ejecuta cuando hay un error al recibir o escribir datos)

### Tubo

En programación, el concepto de `pipe` no es nuevo. Los sistemas basados ​​en Unix han estado usándolo pragmáticamente desde la década de 1970. ¿Qué hace un tubo? Una `pipe` generalmente conecta la fuente y el destino. Pasa la salida de una función como la entrada de otra función.

En Node.js, la `pipe` se usa de la misma manera, para emparejar entradas y salidas de diferentes operaciones. `pipe()` está disponible como una función que toma un flujo de origen legible y adjunta la salida a un flujo de destino. La sintaxis general se puede representar como:

```javascript
src.pipe(dest); 
```

Múltiples funciones `pipe()` también pueden ser encadenadas juntas.

```javascript
a.pipe(b).pipe(c); 
 
 // which is equivalent to 
 
 a.pipe(b); 
 b.pipe(c); 
```

### Corrientes legibles

Los flujos que producen datos que se pueden adjuntar como entrada a un flujo grabable se conocen como flujo legible. Para crear un flujo legible:

```javascript
const { Readable } = require('stream'); 
 
 const readable = new Readable(); 
 
 readable.on('data', chunk => { 
  console.log(`Received ${chunk.length} bytes of data.`); 
 }); 
 readable.on('end', () => { 
  console.log('There will be no more data.'); 
 }); 
```

### Secuencia de escritura

Este es el tipo de flujo al que puede `pipe()` los datos desde una fuente legible. Para crear un flujo de escritura, tenemos un enfoque de constructor. Creamos un objeto a partir de él y pasamos una serie de opciones. El método toma tres argumentos:

*   chunk: un buffer
*   codificación: para convertir datos a un formato legible por humanos
*   devolución de llamada: una función que se llama cuando los datos se procesan desde el fragmento

```javascript
const { Writable } = require('stream'); 
 const writable = new Writable({ 
  write(chunk, encoding, callback) { 
    console.log(chunk.toString()); 
    callback(); 
  } 
 }); 
 
 process.stdin.pipe(writable); 
```

### Streams Duplex

Los flujos dúplex nos ayudan a implementar flujos legibles y grabables al mismo tiempo.

```javascript
const { Duplex } = require('stream'); 
 
 const inoutStream = new Duplex({ 
  write(chunk, encoding, callback) { 
    console.log(chunk.toString()); 
    callback(); 
  }, 
 
  read(size) { 
    this.push(String.fromCharCode(this.currentCharCode++)); 
    if (this.currentCharCode > 90) { 
      this.push(null); 
    } 
  } 
 }); 
 
 inoutStream.currentCharCode = 65; 
 process.stdin.pipe(inoutStream).pipe(process.stdout); 
```

El flujo `stdin` canaliza los datos legibles en el flujo dúplex. El `stdout` nos ayuda a ver los datos. Las partes legibles y grabables de un flujo dúplex operan completamente independientes entre sí.

### Corriente de transformación

Este tipo de flujo es más una versión avanzada del flujo dúplex.

```javascript
const { Transform } = require('stream'); 
 
 const upperCaseTr = new Transform({ 
  transform(chunk, encoding, callback) { 
    this.push(chunk.toString().toUpperCase()); 
    callback(); 
  } 
 }); 
 
 process.stdin.pipe(upperCaseTr).pipe(process.stdout); 
```

Los datos que estamos consumiendo son los mismos que en el ejemplo anterior de la transmisión dúplex. Lo que hay que notar aquí es que `transform()` no requiere la implementación de métodos de `read` o `write` . Combina ambos métodos en sí.

### ¿Por qué usar Streams?

Dado que Node.js es asíncrono, interactúa pasando devoluciones de llamada a funciones con disco y red. Un ejemplo dado a continuación lee los datos de un archivo en el disco y los responde a través de la solicitud de red del cliente.

```javascript
const http = require('http'); 
 const fs = require('fs'); 
 
 const server = http.createServer((req, res) => { 
  fs.readFile('data.txt', (err, data) => { 
    res.end(data); 
  }); 
 }); 
 server.listen(8000); 
```

El fragmento de código anterior funcionará, pero todos los datos del archivo irán primero a la memoria para cada solicitud antes de volver a escribir el resultado en la solicitud del cliente. Si el archivo que estamos leyendo es demasiado grande, esto puede convertirse en una llamada de servidor muy pesada y costosa, ya que consumirá una gran cantidad de memoria para que el proceso avance. La experiencia del usuario en el lado del cliente también sufrirá demora.

En este caso, si utilizamos secuencias, los datos se enviarán a la solicitud del cliente como una parte a la vez, tan pronto como se reciban del disco.

```javascript
const http = require('http'); 
 const fs = require('fs'); 
 
 const server = http.createServer((req, res) => { 
  const stream = fs.createReadStream('data.txt'); 
  stream.pipe(res); 
 }); 
 server.listen(8000); 
```

El `pipe()` aquí se ocupa de la escritura o, en nuestro caso, el envío de los datos con el objeto de respuesta y una vez que se leen todos los datos del archivo, para cerrar la conexión.

Nota: `process.stdin` y `process.stdout` se crean en secuencias en el objeto de `process` global proporcionado por la API Node.js.