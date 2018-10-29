---
title: Spread syntax
localeTitle: Sintaxis extendida
---
## Sintaxis extendida

La sintaxis de propagación permite que una iterable, como una expresión de matriz o cadena, se expanda en lugares donde se esperan cero o más argumentos (para llamadas a funciones) o elementos (para literales de matriz), o una expresión de objeto para expandirse en lugares donde se espera cero .

### Sintaxis

Para llamadas a funciones:
```
myFunction(...iterableObj); 
```

Para matrices literales o cadenas:
```
[...iterableObj, '4', 'five', 6]; 
```

### Ejemplos

#### Difundir en llamadas de función

#### Reemplazar aplicar

Es común utilizar `Function.prototype.apply` en los casos en los que desee utilizar los elementos de una matriz como argumentos para una función.
```
function myFunction(x, y, z) { } 
 var args = [0, 1, 2]; 
 myFunction.apply(null, args); 
```

Con la sintaxis de propagación lo anterior se puede escribir como:
```
function myFunction(x, y, z) { } 
 var args = [0, 1, 2]; 
 myFunction(...args); 
```

Cualquier argumento en la lista de argumentos puede usar la sintaxis de propagación y puede usarse varias veces.
```
function myFunction(v, w, x, y, z) { } 
 var args = [0, 1]; 
 myFunction(-1, ...args, 2, ...[3]); 
```

### Solicitar nuevos

Cuando se llama a un constructor con un `new` , no es posible usar **directamente** una matriz y `apply` ( `apply` hace un `[[Call]]` y no un `[[Construct]]` ). Sin embargo, una matriz se puede utilizar fácilmente con nuevos gracias a la sintaxis de difusión:
```
var dateFields = [1970, 0, 1];  // 1 Jan 1970 
 var d = new Date(...dateFields); 
```

Para usar nuevo con una matriz de parámetros sin sintaxis de propagación, tendría que hacerlo **indirectamente a** través de una aplicación parcial:
```
function applyAndNew(constructor, args) { 
   function partial () { 
      return constructor.apply(this, args); 
   }; 
   if (typeof constructor.prototype === "object") { 
      partial.prototype = Object.create(constructor.prototype); 
   } 
   return partial; 
 } 
 
 
 function myConstructor () { 
   console.log("arguments.length: " + arguments.length); 
   console.log(arguments); 
   this.prop1="val1"; 
   this.prop2="val2"; 
 }; 
 
 var myArguments = ["hi", "how", "are", "you", "mr", null]; 
 var myConstructorWithArguments = applyAndNew(myConstructor, myArguments); 
 
 console.log(new myConstructorWithArguments); 
 // (internal log of myConstructor):           arguments.length: 6 
 // (internal log of myConstructor):           ["hi", "how", "are", "you", "mr", null] 
 // (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"} 
```

### Difundir en matrices literales

#### Un literal de matriz más potente.

Sin la sintaxis de propagación, para crear una nueva matriz utilizando una matriz existente como una parte de la misma, la sintaxis literal de la matriz ya no es suficiente y el código imperativo debe usarse en su lugar utilizando una combinación de empuje, empalme, concat, etc. Con la sintaxis de difusión esto se vuelve mucho más sucinto:
```
var parts = ['shoulders', 'knees']; 
 var lyrics = ['head', ...parts, 'and', 'toes']; 
 // ["head", "shoulders", "knees", "and", "toes"] 
```

Al igual que la propagación de listas de argumentos, `...` se puede usar en cualquier lugar del literal de la matriz y se puede usar varias veces.

### Copiar una matriz
```
var arr = [1, 2, 3]; 
 var arr2 = [...arr]; // like arr.slice() 
 arr2.push(4); 
 
 // arr2 becomes [1, 2, 3, 4] 
 // arr remains unaffected 
```

> **Nota** : la sintaxis de propagación llega a un nivel de profundidad al copiar una matriz. Por lo tanto, puede no ser adecuado para copiar matrices multidimensionales, como muestra el siguiente ejemplo (es lo mismo con Object.assign () y la sintaxis de propagación).
```
var a = [[1], [2], [3]]; 
 var b = [...a]; 
 b.shift().shift(); // 1 
 // Now array a is affected as well: [[], [2], [3]] 
```

### Una mejor manera de concatenar matrices.

`Array.concat` se usa a menudo para concatenar una matriz hasta el final de una matriz existente. Sin la sintaxis extendida esto se hace como:
```
var arr1 = [0, 1, 2]; 
 var arr2 = [3, 4, 5]; 
 // Append all items from arr2 onto arr1 
 arr1 = arr1.concat(arr2); 
```

Con la sintaxis extendida esto se convierte en:
```
var arr1 = [0, 1, 2]; 
 var arr2 = [3, 4, 5]; 
 arr1 = [...arr1, ...arr2]; 
```

`Array.unshift` se usa a menudo para insertar una matriz de valores al inicio de una matriz existente. Sin la sintaxis extendida esto se hace como:
```
var arr1 = [0, 1, 2]; 
 var arr2 = [3, 4, 5]; 
 // Prepend all items from arr2 onto arr1 
 Array.prototype.unshift.apply(arr1, arr2) // arr1 is now [3, 4, 5, 0, 1, 2] 
```

Con la sintaxis extendida esto se convierte en:
```
var arr1 = [0, 1, 2]; 
 var arr2 = [3, 4, 5]; 
 arr1 = [...arr2, ...arr1]; // arr1 is now [3, 4, 5, 0, 1, 2] 

```