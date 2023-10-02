---
id: 56533eb9ac21ba0edf2244c8
title: Acessar propriedades de objeto com notação de colchetes
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBvmEHP'
forumTopicId: 16163
dashedName: accessing-object-properties-with-bracket-notation
---

# --description--

A segunda forma para acessar as propriedades de um objeto é a notação de colchetes (`[]`). Se a propriedade do objeto que você está tentando acessar possui um espaço no seu nome, você precisará usar a notação de colchetes.

No entanto, você ainda pode usar a notação de colchetes nas propriedades dos objetos sem espaços.

Aqui está um exemplo usando a notação de colchetes para ler uma propriedade de um objeto:

```js
const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
```

`myObj["Space Name"]` seria a string `Kirk`, `myObj['More Space']` seria a string `Spock` e `myObj["NoSpace"]` seria a string `USS Enterprise`.

Note que os nomes das propriedades com espaços neles precisam estar entre aspas (simples ou duplas).

# --instructions--

Leia os valores das propriedades `an entree` e `the drink` de `testObj` usando notação de colchetes e atribua-os a `entreeValue` e `drinkValue` respectivamente.

# --hints--

`entreeValue` devem ser uma string

```js
assert(typeof entreeValue === 'string');
```

O valor de `entreeValue` deve ser a string `hamburger`

```js
assert(entreeValue === 'hamburger');
```

`drinkValue` deve ser uma string

```js
assert(typeof drinkValue === 'string');
```

O valor de `drinkValue` deve ser a string `water`

```js
assert(drinkValue === 'water');
```

Você deve usar a notação de colchetes duas vezes

```js
assert(code.match(/testObj\s*?\[('|")[^'"]+\1\]/g).length > 1);
```

# --seed--

## --after-user-code--

```js
(function(a,b) { return "entreeValue = '" + a + "', drinkValue = '" + b + "'"; })(entreeValue,drinkValue);
```

## --seed-contents--

```js
// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj;   // Change this line
const drinkValue = testObj;    // Change this line
```

# --solutions--

```js
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
const entreeValue = testObj["an entree"];
const drinkValue = testObj['the drink'];
```
