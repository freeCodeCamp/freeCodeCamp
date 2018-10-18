---
title: Destructuring Assignment
localeTitle: Atribuição de Destruturação
---
## Atribuição de Destruturação

A sintaxe Destructuring Assignment é uma expressão em JavaScript que permite descompactar valores ou propriedades de arrays ou objetos.

Digamos que você tenha uma matriz que contenha um nome e sobrenome como dois valores, mas você deseja reatribuir esses valores a algo mais descritivo. Você pode usar Destructuring para conseguir isso.

**Destruturação ES5**

```js
var fullName = ["John", "Smith"]; 
 var firstName = fullName[0]; 
 var lastName = fullName[1]; 
 
 console.log(firstName, lastName); // John Smith 
```

**ES6 Destructuring**

```js
const fullName = ["John", "Smith"]; 
 const [firstName, lastName] = fullName; 
 
 console.log(firstName, lastName); // John Smith 
```

Os exemplos acima mostram o benefício de usar a Atribuição de Destruturação do ES6.

Você também pode usar Destructuring em objetos usando uma sintaxe semelhante

```js
const fullName = { first: "John", last: "Smith"}; 
 const {first, last} = fullName; 
 
 console.log(first, last); // John Smith 
```

A Destructuring Assignment é um pouco diferente porque o objeto deve ter propriedades com os nomes que você está atribuindo. Portanto, o código abaixo não funcionaria como pretendido.

```js
const fullName = { first: "John", last: "Smith"}; 
 const {firstName, lastName} = fullName; 
 
 console.log(firstName, lastName); // undefined undefined 
```

Você ainda pode conseguir o resultado desejado usando a seguinte sintaxe.

```js
const obj = {propertyName: value} 
 {propertyName: desiredVariableName} = obj 
```

Nosso exemplo anterior seria reescrito da seguinte forma:

```js
const fullName = { first: "John", last: "Smith"}; 
 const {first: firstName, last: lastName} = fullName; 
 
 console.log(firstName, lastName); // John Smith 

```