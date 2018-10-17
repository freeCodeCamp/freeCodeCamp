---
title: Event Emitters
localeTitle: Emisores de eventos
---
## Eventos y Streams

Tradicionalmente, en un servidor web, para procesar datos en forma de un archivo mediante la lectura y la escritura se consume mucha más memoria, ya que estos métodos de procesamiento necesitan cargar el archivo cada vez que tiene que leer o escribir ese archivo. Esto se considera un desperdicio de recursos. Piénselo, en términos de escalabilidad y Big Data, si estamos desperdiciando recursos, vamos a comprometernos mucho. La naturaleza asíncrona de Node.js proporciona dos opciones adecuadas con las que podemos trabajar y proporcionar un flujo de datos que consume menos recursos, ya que Node.js se basa en un modelo asíncrono sin bloqueo. Están emitiendo eventos y corrientes. En esta sección, vamos a echar un vistazo a los dos.

## Clase EventEmitter

Los EventEmitters son una de las ideas centrales detrás de la arquitectura de la programación dirigida por eventos o la programación asíncrona en Node.js. Un EventEmitter es un objeto y en Node.js cualquier objeto que emita un evento es una instancia de la clase EventEmitter. ¿Qué es un evento? Cada acción llevada a cabo por el programa Node.js, como iniciar el servidor web y cerrar el programa de terminación cuando ya no queda ninguna solicitud por cumplir, se considera como dos eventos separados.

Para acceder a la clase EventEmitter en un programa Node.js, debe requerir el módulo de `events` de la API Node.js. Para crear el objeto, creamos una instancia de la clase EventEmitter llamando a su función constructora.

```js
const events = require('events'); 
 
 const eventEmitter = new events.EventEmitter(); 
```

O puede solicitar directamente el acceso a la subclase EventEmitter de la siguiente manera:

```js
const EventEmitter = require('events'); 
 
 const eventEmitter = new EventEmitter(); 
```

Una clase EventEmitter proporciona varios métodos predefinidos para trabajar con eventos. Estos métodos son `.on` , `.emit` y `.error` . Se puede emitir un evento desde una función activando una función de devolución de llamada a la que se puede acceder mediante cualquier otra función de JavaScript. Esto es como la transmisión.

La capacidad de desencadenar un evento se puede hacer mediante la siguiente sintaxis:

```js
eventEmitter.emit(eventName, optionalData); 
```

Y la capacidad de adjuntar una función de escucha y definir el nombre de un evento específico se realiza mediante `.on` .

```js
eventEmitter.emit(eventName, callback); 
```

Imitaremos las nuevas funciones que acabamos de aprender con un ejemplo. Cree un nuevo archivo llamado `eventemitter.js` y pegue el siguiente código:

```js
const EventEmitter = require('events'); 
 
 const eventEmitter = new EventEmitter(); 
 
 const callback = () => { 
    console.log('callback runs'); 
 }; 
 
 eventEmitter.on('invoke', callback); 
 
 eventEmitter.emit('invoke'); 
 eventEmitter.emit('invoke'); 
```

Ahora ejecute el ejemplo anterior usando el comando de `node` y debe obtener el siguiente resultado.

```shell
callback runs 
 callback runs 
```

Comenzamos creando una instancia de eventEmitter a través de la cual obtenemos acceso a `.on` el método. El método `.on` agrega el evento definiendo el nombre de `invoke` que usaremos más adelante en `.emit` para activar la función de devolución de llamada asociada con él.

Hay otra función que proporciona la clase EventEmitter que se llama `.once` . Este método solo invoca la función de devolución de llamada asociada con un evento por primera vez cuando se emite un evento. Considere el siguiente ejemplo.

```js
const EventEmitter = require('events'); 
 
 const eventEmitter = new EventEmitter(); 
 
 const callback = () => { 
    console.log('callback runs'); 
 }; 
 
 eventEmitter.once('invoke', callback); 
 
 eventEmitter.emit('invoke'); 
 eventEmitter.emit('invoke'); 
```

Salida

```shell
callback runs 
```

`.once` mantiene un seguimiento de los eventos en cuanto a cuándo se activan y cuántas veces se activan, a diferencia del método `.on` , que no realiza un seguimiento de este tipo. Esta es una gran diferencia entre los dos.

## Entendiendo corrientes

Node.js proporciona otra forma de trabajar con datos en lugar de consumir una gran cantidad de recursos de memoria y hacerlo más rentable. Esto es lo que hacen las corrientes. Básicamente, las transmisiones le permiten leer datos de una fuente y colocarlos en el destino. Los flujos procesan datos en trozos en lugar de todos a la vez, lo que los hace adecuados para trabajar con grandes conjuntos de datos. Muchos módulos incorporados de Node.js usan flujos bajo el capó. Por ejemplo, solicitud y respuesta HTTP, sockets TCP, zlib, crypto, fs flujos de lectura y escritura, etc.

### Tipo de arroyos

En Node.js hay cuatro tipos de flujos:

*   Legible
*   Se puede escribir
*   Dúplex
*   Transformar

Los más comunes de estos son las secuencias de lectura y escritura. Las secuencias legibles se utilizan para leer los datos del origen y las secuencias grabables se utilizan para realizar la operación de escritura de esos datos en el destino. Los flujos dúplex se pueden utilizar para realizar operaciones de lectura y escritura. Transform es un superconjunto de flujos dúplex, con la única diferencia de que, en este caso, los datos pueden modificarse al leer o escribir.

### Tipo de Eventos Stream

Todos estos tipos de flujo son instancias de la clase EventEmitter, lo que significa que emiten eventos de lectura y escritura. Cada tipo de flujo puede emitir los siguientes eventos.

*   datos: este evento se activa cuando los datos están disponibles para ser leídos por el flujo legible
*   error: este evento se activa cuando hay un error al leer o escribir los datos
*   final: este evento se activa cuando no hay datos para leer

## Corrientes legibles

Una secuencia legible le permite leer los datos de la fuente. Esta fuente puede ser cualquier cosa, desde un búfer, un archivo, etc. Primero, cree un archivo de texto simple desde el cual leeremos los datos usando la secuencia.

```text
I am Text file that contains data. 
```

Ahora, cree un nuevo archivo llamado read.js que implementará la funcionalidad de lectura de datos de este archivo de texto usando una secuencia legible.

```js
const fs = require('fs'); 
 const readableStream = fs.createReadStream('abc.txt'); 
 let data = ''; 
 
 readableStream.on('data', function(chunk) { 
    data += chunk; 
 }); 
 
 readableStream.on('end', function() { 
    console.log(data); 
 }); 
```

Si ejecuta el programa anterior, obtendrá el siguiente resultado:

```shell
 $ node test.js 
 I am Text file that contains data. 
```

Que es lo que escribimos dentro del archivo de texto. Para leer los datos usando la transmisión, usamos una función llamada `createReadStream()` del módulo del sistema de archivos `fs` .

Cuando no queda ningún dato por leer por el flujo legible, finaliza automáticamente la función de devolución de llamada. El método `.on` es lo que aprendimos en la sección anterior de la clase EventEmitter. Esto significa que las transmisiones usan la clase EventEmitter detrás de escena.

## Secuencia de escritura

Las secuencias grabables se utilizan para escribir, insertar o anexar datos a un destino. Al igual que las secuencias legibles, también son proporcionadas por el módulo `fs` . Cree un nuevo archivo llamado `wrtte.js` en el que vaya a utilizar un flujo legible para leer datos del origen y escribirlos en un destino creando un nuevo archivo `.txt` .

```js
const fs = require('fs'); 
 const readableStream = fs.createReadStream('./abc.txt'); 
 const writeableStream = fs.createWriteStream('./dest.txt'); 
 let data = ''; 
 
 readableStream.on('data', function(chunk) { 
    writeableStream.write(chunk); 
 }); 
```

Cuando ejecute este programa, la secuencia de escritura podrá crear un nuevo archivo, ya que tiene acceso al módulo del sistema de archivos. La secuencia de `.write()` utiliza el método `.write()` para generar los datos en el destino. En el ejemplo anterior, estamos creando un nuevo archivo llamado `dest.txt` que contendrá los mismos datos que `abc.txt` .

## Tubería

La canalización es un mecanismo mediante el cual puede leer datos del origen y escribirlos en el destino sin escribir tanto código como hicimos anteriormente y no utiliza los métodos `.on` o `.write` .

Si vamos a escribir el ejemplo anterior usando pipe, escribiremos como a continuación:

```js
const fs = require('fs'); 
 const readableStream = fs.createReadStream('./abc.txt'); 
 const writeableStream = fs.createWriteStream('./dest.txt'); 
 
 readableStream.pipe(writeableStream); 
```

Observe cuántas líneas de código hemos eliminado. Además, ahora solo necesitamos las rutas de los archivos de origen y destino, y para leer y escribir datos estamos usando el método `.pipe()` .