---
title: Object Values
localeTitle: Valores de Objeto
---
O método `Object.values()` retorna uma matriz dos próprios valores de propriedade enumeráveis ​​de um determinado objeto, na mesma ordem fornecida por um loop for… in (a diferença é que um loop for-in enumera propriedades na cadeia de protótipos, bem ).

## Sintaxe
```
Object.values(obj) 
```

### Parâmetros

**obj**

O objeto cujas propriedades próprias enumeráveis ​​devem ser retornadas.

[Ligação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

## Descrição

`Object.values()` retorna uma matriz cujos elementos são os valores de propriedade enumeráveis ​​encontrados no objeto. A ordenação das propriedades é a mesma que a dada pelo looping dos valores das propriedades do objeto manualmente. Em outras palavras, um objeto tem chave: pares de valor e esse método retorna todos os _valores_ desse objeto em um objeto semelhante a matriz.

Consulte [Object.keys](https://guide.freecodecamp.org/javascript/standard-objects/object/object-keys/) , que retorna todas as _chaves_ desse objeto em um objeto semelhante a uma matriz.

## Exemplos
```
var obj = { foo: 'bar', baz: 42 }; 
 console.log(Object.values(obj)); // ['bar', 42] 
 
 // array like object 
 var obj = { 0: 'a', 1: 'b', 2: 'c' }; 
 console.log(Object.values(obj)); // ['a', 'b', 'c'] 
 
 // array like object with random key ordering 
 var an_obj = { 100: 'a', 2: 'b', 7: 'c' }; 
 console.log(Object.values(an_obj)); // ['b', 'c', 'a'] 
 
 // getFoo is property which isn't enumerable 
 var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } }); 
 my_obj.foo = 'bar'; 
 console.log(Object.values(my_obj)); // ['bar'] 
 
 // non-object argument will be coerced to an object 
 console.log(Object.values('foo')); // ['f', 'o', 'o'] 
```

\* _não funciona no Internet Explorer_