---
title: Spread syntax
localeTitle: Espalhe a sintaxe
---
## Operador Spread

O conceito de spread é permitir que um iterável, como um array ou string seja expandida em locais onde zero ou mais argumentos (para chamadas de função) ou elementos (para arrays) sejam esperados ou uma expressão de objeto seja expandida em locais onde zero é esperado.

### Sintaxe

Para chamadas de função:
```
myFunction(...iterableObj); 
```

Para literais ou strings de array:
```
[...iterableObj, '4', 'five', 6]; 
```

### Exemplos

#### Spread em chamadas de função

#### Substituir aplicar

É comum usar o `Function.prototype.apply` nos casos em que você deseja usar os elementos de um array como argumentos para uma função.
```js
function myFunction(x, y, z) { } 
 var args = [0, 1, 2]; 
 myFunction.apply(null, args); 
```

Com a operador spread, o exemplo acima pode ser escrito como:
```js
function myFunction(x, y, z) { } 
 var args = [0, 1, 2]; 
 myFunction(...args); 
```

Qualquer argumento na lista de argumentos pode usar a operador spread e pode ser usado várias vezes.
```js
function myFunction(v, w, x, y, z) { } 
 var args = [0, 1]; 
 myFunction(-1, ...args, 2, ...[3]); 
```

### Apply e New

Ao chamar um construtor com `new` , não é possível usar **diretamente** um array e `apply` ( `apply` faz um `[[Call]]` e não um `[[Construct]]` ). No entanto, um array pode ser facilmente usado com `new` graças à operador spread:
```js
var dateFields = [1970, 0, 1];  // 1 Jan 1970 
 var d = new Date(...dateFields); 
```

Para usar `new` com um array de parâmetros sem operador spread, você teria que fazê-lo **indiretamente** através da aplicação parcial:
```js
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

### Spread em literais de array

#### Um literal de array mais poderoso

Sem a sintaxe de propagação, para criar um novo array usando um array existente como uma parte dela, a sintaxe literal de array não é mais suficiente e um código imperativo deve ser usado ao invez de uma combinação de push, splice, concat, etc. torna-se muito mais sucinto:
```js
var parts = ['shoulders', 'knees']; 
 var lyrics = ['head', ...parts, 'and', 'toes']; 
 // ["head", "shoulders", "knees", "and", "toes"] 
```

Assim como o spread para listas de argumentos, `...` pode ser usado em qualquer lugar em um array e pode ser usado várias vezes.

### Copie um array
```js
var arr = [1, 2, 3]; 
 var arr2 = [...arr]; // like arr.slice() 
 arr2.push(4); 
 
 // arr2 becomes [1, 2, 3, 4] 
 // arr remains unaffected 
```

> **Nota** : A operador spread atinge um nível de profundidade enquanto copia um array. Portanto, pode ser inadequado para copiar arrays multidimensionais como mostra o exemplo a seguir (é o mesmo com Object.assign () e operador spread).
```js
var a = [[1], [2], [3]]; 
 var b = [...a]; 
 b.shift().shift(); // 1 
 // Now array a is affected as well: [[], [2], [3]] 
```

### Uma maneira melhor de concatenar arrays

`Array.concat` é freqüentemente usado para concatenar um array ao final de um array existente. Sem a operador spread, isso é feito como:
```js
var arr1 = [0, 1, 2]; 
 var arr2 = [3, 4, 5]; 
 // Append all items from arr2 onto arr1 
 arr1 = arr1.concat(arr2); 
```

Com a operador spread, isso se torna:
```js
var arr1 = [0, 1, 2]; 
var arr2 = [3, 4, 5]; 
arr1 = [...arr1, ...arr2]; 
```

`Array.unshift` é frequentemente usado para inserir um array de valores no início de um array existente. Sem a operador spread, isso é feito como:
```js
var arr1 = [0, 1, 2]; 
var arr2 = [3, 4, 5]; 
// Prepend all items from arr2 onto arr1 
Array.prototype.unshift.apply(arr1, arr2) // arr1 is now [3, 4, 5, 0, 1, 2] 
```

Com a operador spread, isso se torna:
```js
var arr1 = [0, 1, 2]; 
var arr2 = [3, 4, 5]; 
arr1 = [...arr2, ...arr1]; // arr1 is now [3, 4, 5, 0, 1, 2] 
```
