---
title: Object Assign
localeTitle: Atribuir Objeto
---
## Atribuir Objeto

Este é um esboço. [Ajude nossa comunidade a expandi-lo](https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/standard-objects/object/object-assign/index.md) .

[Este guia de estilo rápido ajudará a garantir que sua solicitação de recebimento seja aceita](https://github.com/freecodecamp/guides/blob/master/README.md) .

O método `Object.assign()` é usado para 1) adicionar propriedades e valores a um objeto existente, 2) criar uma nova cópia de um objeto existente ou 3) combinar vários objetos existentes em um único objeto. O método `Object.assign()` requer um targetObject como parâmetro e pode aceitar um número ilimitado de sourceObjects como parâmetros adicionais.

Importante notar aqui é que o parâmetro targetObject sempre será modificado. Se esse parâmetro apontar para um objeto existente, esse objeto será modificado e copiado. Se, no entanto, você deseja criar uma cópia de um objeto sem modificar esse objeto original, pode passar um objeto vazio `{}` como o primeiro parâmetro (ou targetObject) e o objeto a ser copiado como o segundo parâmetro (ou sourceObject).

Se os objetos passados ​​como parâmetros em `Object.assign()` compartilharem as mesmas propriedades (ou chaves), os valores de propriedade que vierem depois na lista de parâmetros sobrescreverão aqueles que vieram antes.

**Sintaxe**

```javascript
Object.assign(targetObject, ...sourceObject) 
```

**Valor de retorno**

`Object.assign()` retorna o targetObject.

**Exemplos**

_Modificando e copiando targetObject_

```javascript
let obj = {name: 'Dave', age: 30}; 
 
 let objCopy = Object.assign(obj, {coder: true}); 
 
 console.log(obj); // returns { name: 'Dave', age: 30, coder: true } 
 console.log(objCopy); // returns { name: 'Dave', age: 30, coder: true } 
```

_Copiando targetObject sem modificação_

```javascript
let obj = {name: 'Dave', age: 30}; 
 
 let objCopy = Object.assign({}, obj, {coder: true}); 
 
 console.log(obj); // returns { name: 'Dave', age: 30 } 
 console.log(objCopy); // returns { name: 'Dave', age: 30, coder: true } 
```

_Objetos com as mesmas propriedades_

```javascript
let obj = {name: 'Dave', age: 30, favoriteColor: 'blue'}; 
 
 let objCopy = Object.assign({}, obj, {coder: true, favoriteColor: 'red'}); 
 
 console.log(obj); // returns { name: 'Dave', age: 30, favoriteColor: 'blue' } 
 console.log(objCopy); // { name: 'Dave', age: 30, favoriteColor: 'red', coder: true } 
```

#### Mais Informações:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)  
[Introdução ao Object.assign no ES6 (Video)](https://youtu.be/vM7Tif98Dlo)