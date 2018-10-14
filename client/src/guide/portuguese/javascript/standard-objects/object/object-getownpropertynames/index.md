---
title: Object getOwnPropertyNames
localeTitle: Objeto getOwnPropertyNames
---
O método `Object.getOwnPropertyNames()` retorna uma matriz de todas as propriedades (enumeráveis ​​ou não) encontradas diretamente sobre um determinado objeto.

## Sintaxe
```
Object.getOwnPropertyNames(obj) 
```

### Parâmetros

**obj**

O objeto cujas propriedades próprias, enumeráveis _e não enumeráveis,_ devem ser retornadas.

[Ligação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) | [Link do MSDN](https://msdn.microsoft.com/en-us/LIBRary/ff688126%28v=vs.94%29.aspx)

## Descrição

`Object.getOwnPropertyNames()` retorna um array cujos elementos são strings correspondentes às propriedades enumeráveis _e não enumeráveis_ encontradas diretamente no objeto. A ordenação das propriedades enumeráveis ​​na matriz é consistente com a ordenação exposta por um loop `for...in` (ou por `Object.keys()` ) sobre as propriedades do objeto. A ordenação das propriedades não enumeráveis ​​na matriz e entre as propriedades enumeráveis ​​não está definida.

## Exemplos
```
var arr = ['a', 'b', 'c']; 
 console.log(Object.getOwnPropertyNames(arr).sort()); // logs '0,1,2,length' 
 
 // Array-like object 
 var obj = { 0: 'a', 1: 'b', 2: 'c' }; 
 console.log(Object.getOwnPropertyNames(obj).sort()); // logs '0,1,2' 
 
 // Logging property names and values using Array.forEach 
 Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) { 
  console.log(val + ' -> ' + obj[val]); 
 }); 
 // logs 
 // 0 -> a 
 // 1 -> b 
 // 2 -> c 
 
 // non-enumerable property 
 var my_obj = Object.create({}, { 
  getFoo: { 
    value: function() { return this.foo; }, 
    enumerable: false 
  } 
 }); 
 my_obj.foo = 1; 
 
 console.log(Object.getOwnPropertyNames(my_obj).sort()); // logs 'foo,getFoo' 
 
 function Pasta(grain, size, shape) { 
    this.grain = grain; 
    this.size = size; 
    this.shape = shape; 
 } 
 
 var spaghetti = new Pasta("wheat", 2, "circle"); 
 
 var names = Object.getOwnPropertyNames(spaghetti).filter(CheckKey); 
 document.write(names); 
 
 // Check whether the first character of a string is 's'. 
 function CheckKey(value) { 
    var firstChar = value.substr(0, 1); 
    if (firstChar.toLowerCase() == 's') 
        return true; 
    else 
         return false; 
 } 
 // Output: 
 // size,shape 

```