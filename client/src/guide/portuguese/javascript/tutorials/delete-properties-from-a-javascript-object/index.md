---
title: Delete Properties from a JavaScript Object
localeTitle: Excluir propriedades de um objeto JavaScript
---
Também podemos excluir propriedades de objetos como este:
```
delete ourDog.bark; 
```

O **operador delete** remove uma propriedade de um objeto.

## Sintaxe

`delete expression` onde a expressão deve ser avaliada para uma referência de propriedade, por exemplo:
```
delete object.property 
 delete object['property'] 
```

## Parâmetros

**objeto**  
O nome de um objeto ou uma expressão avaliada para um objeto.

**propriedade**  
A propriedade a ser excluída.

## Exemplo

```js
var person = {name:'Jay', age:'52'}; 
 delete person['age']; 
 
 console.log(person); //{name:'Jay'} 
```

## Valor de retorno

Lança o modo estrito se a propriedade for uma propriedade não configurável própria (retorna falso em não-estrito). Retorna true em todos os outros casos.

[Consulte Mais informação](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)