---
title: Object Keys
localeTitle: Chaves de Objeto
---
O método `Object.keys()` retorna uma matriz das próprias propriedades enumeráveis ​​de um determinado objeto, na mesma ordem fornecida por um loop `for...in` (a diferença é que um loop `for-in` enumera propriedades na cadeia de protótipos como bem).

## Sintaxe
```
Object.keys(obj) 
```

### Parâmetros

**obj**

O objeto cujas propriedades próprias enumeráveis ​​devem ser retornadas.

[Ligação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) | [Link do MSDN](https://msdn.microsoft.com/en-us/LIBRary/ff688127%28v=vs.94%29.aspx)

## Descrição

`Object.keys()` retorna um array cujos elementos são strings correspondentes às propriedades enumeráveis ​​encontradas diretamente no objeto. A ordenação das propriedades é a mesma que a dada pelo looping sobre as propriedades do objeto manualmente.

## Exemplos
```
var arr = ['a', 'b', 'c']; 
 console.log(Object.keys(arr)); // console: ['0', '1', '2'] 
 
 // array like object 
 var obj = { 0: 'a', 1: 'b', 2: 'c' }; 
 console.log(Object.keys(obj)); // console: ['0', '1', '2'] 
 
 // array like object with random key ordering 
 var an_obj = { 100: 'a', 2: 'b', 7: 'c' }; 
 console.log(Object.keys(an_obj)); // console: ['2', '7', '100'] 
 
 // getFoo is property which isn't enumerable 
 var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } }); 
 my_obj.foo = 1; 
 
 console.log(Object.keys(my_obj)); // console: ['foo'] 
 
 // Create a constructor function. 
 function Pasta(grain, width, shape) { 
    this.grain = grain; 
    this.width = width; 
    this.shape = shape; 
 
    // Define a method. 
    this.toString = function () { 
        return (this.grain + ", " + this.width + ", " + this.shape); 
    } 
 } 
 
 // Create an object. 
 var spaghetti = new Pasta("wheat", 0.2, "circle"); 
 
 // Put the enumerable properties and methods of the object in an array. 
 var arr = Object.keys(spaghetti); 
 document.write (arr); 
 
 // Output: 
 // grain,width,shape,toString 

```