---
title: Spread syntax
localeTitle: Espalhe a sintaxe
---
## Espalhe a sintaxe

A sintaxe de propagação permite que uma iterável, como uma expressão de matriz ou cadeia, seja expandida em locais onde zero ou mais argumentos (para chamadas de função) ou elementos (para literais de matriz) sejam esperados ou uma expressão de objeto seja expandida em locais onde zero é esperado .

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

#### Espalhe em chamadas de função

#### Substituir aplicar

É comum usar o `Function.prototype.apply` nos casos em que você deseja usar os elementos de um array como argumentos para uma função.
```
function myFunction(x, y, z) { } 
 var args = [0, 1, 2]; 
 myFunction.apply(null, args); 
```

Com a sintaxe de propagação, o acima pode ser escrito como:
```
function myFunction(x, y, z) { } 
 var args = [0, 1, 2]; 
 myFunction(...args); 
```

Qualquer argumento na lista de argumentos pode usar a sintaxe de propagação e pode ser usado várias vezes.
```
function myFunction(v, w, x, y, z) { } 
 var args = [0, 1]; 
 myFunction(-1, ...args, 2, ...[3]); 
```

### Inscreva-se para novos

Ao chamar um construtor com `new` , não é possível usar **diretamente** um array e `apply` ( `apply` faz um `[[Call]]` e não um `[[Construct]]` ). No entanto, um array pode ser facilmente usado com novos agradecimentos à sintaxe de propagação:
```
var dateFields = [1970, 0, 1];  // 1 Jan 1970 
 var d = new Date(...dateFields); 
```

Para usar o novo com uma matriz de parâmetros sem sintaxe de propagação, você teria que fazê-lo **indiretamente** através da aplicação parcial:
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

### Espalhar em literais de array

#### Um literal de array mais poderoso

Sem a sintaxe de propagação, para criar uma nova matriz usando uma matriz existente como uma parte dela, a sintaxe literal da matriz não é mais suficiente e um código imperativo deve ser usado usando uma combinação de push, splice, concat, etc. torna-se muito mais sucinto:
```
var parts = ['shoulders', 'knees']; 
 var lyrics = ['head', ...parts, 'and', 'toes']; 
 // ["head", "shoulders", "knees", "and", "toes"] 
```

Assim como o spread para listas de argumentos, `...` pode ser usado em qualquer lugar no literal da matriz e pode ser usado várias vezes.

### Copie uma matriz
```
var arr = [1, 2, 3]; 
 var arr2 = [...arr]; // like arr.slice() 
 arr2.push(4); 
 
 // arr2 becomes [1, 2, 3, 4] 
 // arr remains unaffected 
```

> **Nota** : A sintaxe de propagação atinge um nível de profundidade enquanto copia uma matriz. Portanto, pode ser inadequado para copiar matrizes multidimensionais como mostra o exemplo a seguir (é o mesmo com Object.assign () e sintaxe de propagação).
```
var a = [[1], [2], [3]]; 
 var b = [...a]; 
 b.shift().shift(); // 1 
 // Now array a is affected as well: [[], [2], [3]] 
```

### Uma maneira melhor de concatenar matrizes

`Array.concat` é freqüentemente usado para concatenar uma matriz ao final de uma matriz existente. Sem a sintaxe de propagação, isso é feito como:
```
var arr1 = [0, 1, 2]; 
 var arr2 = [3, 4, 5]; 
 // Append all items from arr2 onto arr1 
 arr1 = arr1.concat(arr2); 
```

Com a sintaxe de propagação, isso se torna:
```
var arr1 = [0, 1, 2]; 
 var arr2 = [3, 4, 5]; 
 arr1 = [...arr1, ...arr2]; 
```

`Array.unshift` é frequentemente usado para inserir uma matriz de valores no início de um array existente. Sem a sintaxe de propagação, isso é feito como:
```
var arr1 = [0, 1, 2]; 
 var arr2 = [3, 4, 5]; 
 // Prepend all items from arr2 onto arr1 
 Array.prototype.unshift.apply(arr1, arr2) // arr1 is now [3, 4, 5, 0, 1, 2] 
```

Com a sintaxe de propagação, isso se torna:
```
var arr1 = [0, 1, 2]; 
 var arr2 = [3, 4, 5]; 
 arr1 = [...arr2, ...arr1]; // arr1 is now [3, 4, 5, 0, 1, 2] 

```