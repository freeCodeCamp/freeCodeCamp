---
id: 56533eb9ac21ba0edf2244c7
title: Acessar propriedades de objetos com notação de pontos
challengeType: 1
videoUrl: 'https://scrimba.com/c/cGryJs8'
forumTopicId: 16164
dashedName: accessing-object-properties-with-dot-notation
---

# --description--

Existem duas formas para acessar as propriedades de um objeto: notação de ponto (`.`) e notação de colchetes (`[]`), de forma similar a um array.

Notação de ponto é o que você utiliza quando você sabe o nome da propriedade que você está tentando acessar antecipadamente.

Aqui está um exemplo usando notação de ponto (`.`) para ler uma propriedade do objeto:

```js
const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
```

`prop1val` teria o valor `val1` e `prop2val` teria o valor `val2`.

# --instructions--

Leia os valores de propriedade de `testObj` usando a notação de ponto. Defina a variável `hatValue` igual à propriedade `hat` do objeto e defina a variável `shirtValue` igual à propriedade `shirt` do objeto.

# --hints--

`hatValue` deve ser uma string

```js
assert(typeof hatValue === 'string');
```

O valor de `hatValue` deve ser a string `ballcap`

```js
assert(hatValue === 'ballcap');
```

`shirtValue` deve ser a string

```js
assert(typeof shirtValue === 'string');
```

O valor de `shirtValue` deve ser a string `jersey`

```js
assert(shirtValue === 'jersey');
```

Você deve usar notação de ponto duas vezes

```js
assert(code.match(/testObj\.\w+/g).length > 1);
```

# --seed--

## --after-user-code--

```js
(function(a,b) { return "hatValue = '" + a + "', shirtValue = '" + b + "'"; })(hatValue,shirtValue);
```

## --seed-contents--

```js
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj;      // Change this line
const shirtValue = testObj;    // Change this line
```

# --solutions--

```js
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;
```
