---
title: Boolean
localeTitle: Booleano
---
## Booleano

Los booleanos son un tipo de datos primitivo comúnmente usado en los lenguajes de programación de computadoras. Por definición, un booleano tiene dos valores posibles: `true` o `false` .

En Javascript, a menudo hay una coerción de tipo implícita al booleano. Si, por ejemplo, tiene una sentencia if que verifica una expresión determinada, esa expresión se convertirá en un booleano:

```javascript
var a = 'a string'; 
 if (a) { 
  console.log(a); // logs 'a string' 
 } 
```

Hay solo unos pocos valores que serán forzados a falso:

*   falso (no es realmente coaccionado como ya es falso)
*   nulo
*   indefinido
*   Yaya
*   0
*   '' (cuerda vacía)

Todos los demás valores serán obligados a ser verdaderos. Cuando un valor es forzado a un booleano, también lo llamamos "falsy" o "truthy".

Una forma en que se usa el tipo de coerción es con el uso de los operadores o ( `||` ) y ( `&&` ):

```javascript
var a = 'word'; 
 var b = false; 
 var c = true; 
 var d = 0 
 var e = 1 
 var f = 2 
 var g = null 
 
 console.log(a || b); // 'word' 
 console.log(c || a); // true 
 console.log(b || a); // 'word' 
 console.log(e || f); // 1 
 console.log(f || e); // 2 
 console.log(d || g); // null 
 console.log(g || d); // 0 
 console.log(a && c); // true 
 console.log(c && a); // 'word' 
```

Como puede ver, el operador _o_ comprueba el primer operando. Si esto es cierto o veraz, lo devuelve de inmediato (por lo que obtenemos 'palabra' en el primer caso y verdadero en el segundo caso). Si no es verdad o no es verdad, devuelve el segundo operando (por lo que obtenemos 'palabra' en el tercer caso).

Con el operador y funciona de una manera similar, pero para 'y' para ser verdad, ambos operandos deben ser sinceros. Por lo tanto, siempre devolverá el segundo operando si ambos son verdaderos / verdaderos, de lo contrario, devolverá falso. Es por eso que en el cuarto caso nos hacemos realidad y en el último caso recibimos 'word'.

## El objeto booleano

También hay un objeto JavaScript nativo que envuelve un valor. El valor pasado como primer parámetro se convierte en un valor booleano, si es necesario. Si se omite el valor, 0, -0, nulo, falso, NaN, indefinido o la cadena vacía (""), el objeto tiene un valor inicial de falso. Todos los demás valores, incluido cualquier objeto o la cadena "falsa", crean un objeto con un valor inicial de verdadero.

No confunda los valores booleanos primitivos verdaderos y falsos con los valores verdaderos y falsos del objeto booleano.

## Más detalles

Cualquier objeto cuyo valor no sea indefinido o nulo, incluido un objeto booleano cuyo valor es falso, se evalúa como verdadero cuando se pasa a una declaración condicional. Si es verdadero, esto ejecutará la función. Por ejemplo, la condición en la siguiente instrucción if se evalúa como verdadera:

```javascript
var x = new Boolean(false); 
 if (x) { 
  // this code is executed 
 } 
```

Este comportamiento no se aplica a los primitivos booleanos. Por ejemplo, la condición en la siguiente instrucción if se evalúa como falsa:

```javascript
var x = false; 
 if (x) { 
  // this code is not executed 
 } 
```

No utilice un objeto booleano para convertir un valor no booleano en un valor booleano. En su lugar, use Boolean como una función para realizar esta tarea:

```javascript
var x = Boolean(expression);     // preferred 
 var x = new Boolean(expression); // don't use 
```

Si especifica cualquier objeto, incluido un objeto booleano cuyo valor sea falso, como el valor inicial de un objeto booleano, el nuevo objeto booleano tiene un valor verdadero.

```javascript
var myFalse = new Boolean(false);   // initial value of false 
 var g = new Boolean(myFalse);       // initial value of true 
 var myString = new String('Hello'); // string object 
 var s = new Boolean(myString);      // initial value of true 
```

No utilice un objeto booleano en lugar de un primitivo booleano.

### Recursos

*   [Objeto booleano](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
*   [Objeto booleano](https://docs.oracle.com/javase/7/docs/api/java/lang/Boolean.html)