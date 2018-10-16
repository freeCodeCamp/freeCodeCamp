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

Hay solo unos pocos valores que serán forzados a false:

*   false (no es realmente forzado ya que es false)
*   null
*   undefined
*   NaN
*   0
*   '' (string vacío)

Todos los demás valores serán forzados a ser true. Cuando un valor es forzado a un booleano, también lo llamamos "falsy" o "truthy".

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

Como puede ver, el operador _o_ comprueba el primer operando. Si esto es true o truthy, lo devuelve de inmediato (por lo que obtenemos 'palabra' en el primer caso y verdadero en el segundo caso). Si no es verdad o no es verdad, devuelve el segundo operando (por lo que obtenemos 'word' en el tercer caso).

Con el operador y ocurre algo similar, pero para que 'y' sea true, ambos operandos deben ser truthy. Por lo tanto, siempre devolverá el segundo operando si ambos son true/truthy, de lo contrario, devolverá false. Es por eso que en el cuarto caso obtenemos true y en el último caso obtenemos 'word'.

## El objeto booleano

También hay un objeto JavaScript nativo que envuelve un valor. El valor pasado como primer parámetro se convierte en un valor booleano, si es necesario. Si se omite el valor, 0, -0, null, false, NaN, undefined o una cadena vacía (""), el objeto tiene como valor inicial false. Todos los demás valores, incluido cualquier objeto o la cadena "false", crean un objeto con un valor inicial true.

No confunda los valores booleanos primitivos true y false con los valores true y false del objeto booleano.

## Más detalles

Cualquier objeto cuyo valor no sea undefined o null, incluido un objeto booleano cuyo valor sea false, se evalúa como true cuando se pasa a una declaración condicional. Si es true, esto ejecutará la función. Por ejemplo, la condición en la siguiente instrucción if se evalúa como verdadera:

```javascript
var x = new Boolean(false); 
 if (x) { 
  // se ejecuta este código
 } 
```

Este comportamiento no se aplica a los primitivos booleanos. Por ejemplo, la condición en la siguiente instrucción if se evalúa como falsa:

```javascript
var x = false; 
 if (x) { 
  // se ejecuta este código
 } 
```

No utilice un objeto booleano para convertir un valor no booleano en un valor booleano. En su lugar, use Boolean como una función para realizar esta tarea:

```javascript
var x = Boolean(expression);     // recomendado 
 var x = new Boolean(expression); // no usar 
```

Si especifica cualquier objeto, incluido un objeto booleano cuyo valor sea false, como el valor inicial de un objeto booleano, el nuevo objeto booleano tiene un valor true.

```javascript
var myFalse = new Boolean(false);   // valor inicial false 
 var g = new Boolean(myFalse);       // valor inicial true 
 var myString = new String('Hello'); // objeto string 
 var s = new Boolean(myString);      // valor inicial true 
```

No utilice un objeto booleano en lugar de un primitivo booleano.

### Recursos

*   [Objeto booleano](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
*   [Objeto booleano](https://docs.oracle.com/javase/7/docs/api/java/lang/Boolean.html)
