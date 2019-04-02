---
title: Learn About Currying
localeTitle: Aprende sobre el curry
---
Es el acto de tomar una función con más de un argumento y convertirla en una función equivalente que toma un solo argumento. Esto se basa en devolver funciones parcialmente aplicadas.

**Original**
```
function add (verb, a, b) { 
   return "The " + verb + " of " + a + ' and ' + b + ' is ' + (a + b) 
 } 
 
 add('sum', 5, '6') 
   //=> 'The sum of 5 and 6 is 11' 
```

**Versión al curry**
```
function addCurried (verb) { 
    return function (a) { 
      return function (b) { 
        return "The " + verb + " of " + a + ' and ' + b + ' is ' + (a + b) 
      } 
    } 
  } 
 
  addCurried('total')(6)(5) 
   //=> 'The total of 6 and 5 is 11' 
```

Realizar un curry a mano sería un esfuerzo increíble, pero su estrecha relación con la aplicación parcial significa que si ha dejado la aplicación parcial, puede derivar el curry. O si tiene curry, puede derivar la aplicación parcial izquierda.

Aquí hay una función que curriza cualquier función con dos argumentos:
```
  function curryTwo (fn) { 
    return function (x) { 
      return callFirst(fn, x) 
    } 
  } 
 
  function add2 (a, b) { return a + b } 
 
  curryTwo(add2)(5)(6) 
   //=> 11 

```