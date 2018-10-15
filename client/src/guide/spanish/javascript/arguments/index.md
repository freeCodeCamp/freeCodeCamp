---
title: Arguments
localeTitle: Argumentos
---
El objeto argumentos es un **objeto de matriz similar** _(porque la estructura del objeto es similar a la de una matriz sin embargo, no debe considerarse como una matriz, ya que tiene toda la funcionalidad de un objeto)_ que almacena todos los argumentos que se Pasado a una función y es propietario de esa función en particular. Si pasara 3 argumentos a una función, digamos `storeNames()` , esos 3 argumentos serían almacenados dentro de un objeto llamado **argumentos** y se vería así cuando pasamos los argumentos `storeNames("Mulder", "Scully", "Alex Krycek")` a nuestra función:

*   Primero, declaramos una función y hacemos que devuelva el objeto de argumentos.

\`\` \`javascript  
function storeNames () {devolver argumentos; }
```
*   Then, when we execute that function with **n arguments**, 3 in this case, it will return the object to us and it will **look like** an array. We can convert it to an array, but more on that later... 
```

javascript // Si ejecutamos la siguiente línea en la consola: storeNames ("Mulder", "Scully", "Alex Kryceck"); // La salida será {'0': 'Mulder', '1': 'Scully', '2': 'Alex Kryceck'}
```
If you want to know more about this, such as converting it to an array or the optimization problem that comes with using the _slice(_) method and how to solve it, click on **read more** (Gitter Chat Only). 
 
 ## Treat it as an array 
 
 You can invoke arguments by using `arguments[n]` (where _n_ is the index of the argument in the array-like object) but if you want to use it as an array for iteration purposes or applying array methods to it, you need to _convert it to an array_ by declaring a variable and using the Array.prototype.slice.call method (because _arguments_ is not an array): 
```

javascript var args = Array.prototype.slice.call (argumentos);

// o la forma es6: var args = Array.from (argumentos)
```
Since **slice()** has two (the parameter **end** is optional) parameters, you can grab a certain portion of the arguments by specifying (using the _slice.call()_ method renders these two parameters optional, not just _end_) the beginning and the ending of your portion; check out the following code: 
```

javascript función getGrades () { var args = Array.prototype.slice.call (argumentos, 1, 3); devuelve args; }

// ¡Vamos a sacar esto! console.log (getGrades (90, 100, 75, 40, 89, 95));

// LA SALIDA DEBE SER: // // \[100, 75\] <- ¿Por qué? Porque comenzó desde el índice 1 y se detuvo en el índice 3 // entonces, el índice 3 (40) no fue tomado en consideración. // // Si eliminamos el parámetro '3', dejando solo (argumentos, 1) obtendríamos // cada argumento del índice 1: \[100, 75, 40, 89, 95\].
```
### Optimization issues with Array.slice() 
 
 There is a little problem, it's not recommended to use slice in the arguments object (optimization reasons)... 
 
 > **Important**: You should not slice on arguments because it prevents optimizations in JavaScript engines (V8 for example). Instead, try constructing a new array by iterating through the arguments object. 
 > 
 > _by_ **_Mozilla Developer Network_** <a href='https://developer.mozilla.org/ca/docs/Web/JavaScript/Reference/Functions/arguments' target='_blank' rel='nofollow'>(reference)<a> 
 
 
 
 So, what other method is available to convert _arguments_ to an array? I recommend the for-loop (not the for-in loop), you can do it like this: 
```

javascript var args = \[\]; // Arreglo vacío, al principio. para (var i = 0; i <argumentos.longitud; i ++) { args.push (argumentos \[i\]) } // Ahora 'args' es una matriz que contiene tus argumentos. \`\` \`

Para más información sobre los problemas de optimización:  
Asesinos de optimización: la [gestión de argumentos](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments)

### Parámetro de descanso ES6 como una forma de eludir el objeto de argumentos

En ES2015 / ES6 es posible usar el parámetro de descanso ( `...` ) en lugar del objeto de argumentos en la mayoría de los lugares. Digamos que tenemos la siguiente función (no ES6):
```
function getIntoAnArgument() { 
    var args = arguments.slice(); 
    args.forEach(function(arg) { 
        console.log(arg); 
    }); 
 } 
```

Esa función puede ser reemplazada en ES6 por:
```
function getIntoAnArgument(...args) { 
    args.forEach(arg => console.log(arg)); 
 } 
```

tenga en cuenta que también usamos una función de flecha para acortar la devolución de llamada forEach!

El objeto de argumentos no está disponible dentro del cuerpo de una función de flecha.

El resto del parámetro siempre debe aparecer como el último argumento en la definición de su función.  
`function getIntoAnArgument(arg1, arg2, arg3, ...restOfArgs /*no more arguments allowed here*/) { //function body }`