---
title: RegExp prototype exec
localeTitle: RegExp prototipo exec
---
## RegExp prototipo exec

El método **`exec()`** ejecuta una búsqueda de una coincidencia en una cadena especificada. Devuelve una matriz de resultados, o [`null`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "El valor nulo representa la ausencia intencional de cualquier valor de objeto. Es uno de los valores primitivos de JavaScript.") .

Si está ejecutando una coincidencia simplemente para encontrar verdadero o falso, use el método [`RegExp.prototype.test()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test "El método test () ejecuta una búsqueda de una coincidencia entre una expresión regular y una cadena especificada. Devuelve verdadero o falso.") o el método [`String.prototype.search()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search "El método search () ejecuta una búsqueda de una coincidencia entre una expresión regular y este objeto String.") .

### Sintaxis
```
regexObj.exec(str) 
```

### Parámetros

`str`

La cadena con la que coincidir con la expresión regular.

### Valor de retorno

Si la coincidencia tiene éxito, el método `exec()` devuelve una matriz y actualiza las propiedades del objeto de expresión regular. La matriz devuelta tiene el texto coincidente como el primer elemento, y luego un elemento para cada paréntesis de captura que coincida con el texto capturado.

Si la coincidencia falla, el método `exec()` devuelve un [`null`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "El valor nulo representa la ausencia intencional de cualquier valor de objeto. Es uno de los valores primitivos de JavaScript.") .

### Descripción

Considere el siguiente ejemplo:
```
// Match "quick brown" followed by "jumps", ignoring characters in between 
 // Remember "brown" and "jumps" 
 // Ignore case 
 var re = /quick\s(brown).+?(jumps)/ig; 
 var result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog'); 
```

La siguiente tabla muestra los resultados de este script:

### Ejemplos

#### Encontrar coincidencias sucesivas

Si su expresión regular usa el indicador " `g` ", puede usar el método `exec()` varias veces para encontrar coincidencias sucesivas en la misma cadena. Al hacerlo, la búsqueda comienza en la subcadena de `str` especificada por la propiedad [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "El último índice es una propiedad entera de lectura / escritura de instancias de expresiones regulares que especifica el índice en el que se inicia la siguiente coincidencia.") la expresión regular ( [`test()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test "El método test () ejecuta una búsqueda de una coincidencia entre una expresión regular y una cadena especificada. Devuelve verdadero o falso.") también avanzará la propiedad [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "El último índice es una propiedad entera de lectura / escritura de instancias de expresiones regulares que especifica el índice en el que se inicia la siguiente coincidencia.") ). Por ejemplo, suponga que tiene este script:
```
var myRe = /ab*/g; 
 var str = 'abbcdefabh'; 
 var myArray; 
 while ((myArray = myRe.exec(str)) !== null) { 
  var msg = 'Found ' + myArray[0] + '. '; 
  msg += 'Next match starts at ' + myRe.lastIndex; 
  console.log(msg); 
 } 
```

Este script muestra el siguiente texto:
```
Found abb. Next match starts at 3 
 Found ab. Next match starts at 9 
```

Nota: No coloque el literal de expresión regular (o el constructor [`RegExp`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "El constructor RegExp crea un objeto de expresión regular para hacer coincidir el texto con un patrón.") ) dentro de la condición `while` o creará un bucle infinito si hay una coincidencia debido a que la propiedad [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "El último índice es una propiedad entera de lectura / escritura de instancias de expresiones regulares que especifica el índice en el que se inicia la siguiente coincidencia.") se restablece en cada iteración. También asegúrese de que la bandera global esté establecida o de que se produzca un bucle aquí también.

#### Usando `exec()` con literales `RegExp`

También puede usar `exec()` sin crear un objeto [`RegExp`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "El constructor RegExp crea un objeto de expresión regular para hacer coincidir el texto con un patrón.") :
```
var matches = /(hello \S+)/.exec('This is a hello world!'); 
 console.log(matches[1]); 
```

Esto registrará un mensaje que contiene 'hola mundo!'.