---
title: Nodejs- Buffer
localeTitle: Nodejs- Buffer
---
## Buffer

Binario es simplemente un conjunto o una colección de `1` y `0` . Cada número en un binario, cada 1 y 0 en un conjunto se denominan _bit_ . La computadora convierte los datos a este formato binario para almacenar y realizar operaciones. Por ejemplo, los siguientes son cinco binarios diferentes:

`10, 01, 001, 1110, 00101011`

JavaScript no tiene datos de tipo byte en su API central. Para manejar datos binarios, Node.js incluye una implementación de búfer binario con un módulo global llamado `Buffer` .

### Creando un Buffer

Hay diferentes formas de crear un búfer en Node.js. Puede crear un búfer vacío con un tamaño de 10 bytes.

```javascript
const buf1 = Buffer.alloc(10); 
```

A partir de cadenas codificadas en UTF-8, la creación es así:

```javascript
const buf2 = Buffer.from('Hello World!'); 
```

Hay diferentes codificaciones aceptadas al crear un Buffer:

*   ascii
*   utf-8
*   base64:
*   latin1
*   binario
*   maleficio

Hay tres funciones separadas asignadas en la API de Buffer para usar y crear nuevos buffers. En los ejemplos anteriores hemos visto `alloc()` y `from()` . El tercero es `allocUnsafe()` .

```javascript
const buf3 = Buffer.allocUnsafe(10); 
```

Cuando se devuelve, esta función puede contener datos antiguos que deben sobrescribirse.

### Interacciones con Buffer

Hay diferentes interacciones que se pueden hacer con la API de Buffer. Vamos a cubrir la mayoría de ellos aquí. Comencemos con la conversión de un búfer a JSON.

```javascript
let bufferOne = Buffer.from('This is a buffer example.'); 
 console.log(bufferOne); 
 
 // Output: <Buffer 54 68 69 73 20 69 73 20 61 20 62 75 66 66 65 72 20 65 78 61 6d 70 6c 65 2e> 
 
 let json = JSON.stringify(bufferOne); 
 console.log(json); 
 
 // Output: {"type": "Buffer", "data": [84,104,105,115,32,105,115,32,97,32,98,117,102,102,101,114,32,101,120,97,109,112,108,101,46]} 
```

El JSON especifica que el tipo de objeto que se transforma es un búfer y sus datos. Convertir un búfer vacío a JSON nos mostrará que no contiene más que ceros.

```javascript
const emptyBuf = Buffer.alloc(10); 
 
 emptyBuf.toJSON(); 
 
 // Output: { "type": "Buffer", "data": [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] } 
```

Tenga en cuenta que la API de búfer también proporciona una función directa a JSON `toJSON()` para convertir un búfer en un objeto JSON. Para examinar el tamaño de un búfer, podemos usar el método de `length` .

```javascript
emptyBuf.length; 
 // Output: 10 
```

Ahora vamos a convertir el búfer en una cadena legible, en nuestro caso, el utf-8 codificado.

```javascript
console.log(bufferOne.toString('utf8')); 
 
 // Output: This is a buffer example. 
```

`.toString()` convierte de forma predeterminada un búfer a una cadena de formato utf-8. Así es como se decodifica un búfer. Si especifica una codificación, puede convertir el búfer a otra codificación.

```javascript
console.log(bufferOne.toString('base64')); 

```