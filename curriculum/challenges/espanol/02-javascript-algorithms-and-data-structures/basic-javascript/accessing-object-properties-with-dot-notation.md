---
id: 56533eb9ac21ba0edf2244c7
title: Accede a propiedades de objetos con notación de puntos
challengeType: 1
videoUrl: 'https://scrimba.com/c/cGryJs8'
forumTopicId: 16164
dashedName: accessing-object-properties-with-dot-notation
---

# --description--

Hay dos maneras de acceder a las propiedades de un objeto: notación de puntos (`.`) y notación de corchetes (`[]`), similar a un arreglo.

La notación de puntos es lo que se usa cuando conoces el nombre de la propiedad a la que intentas acceder con antelación.

Aquí hay un ejemplo de cómo usar la notación de puntos (`.`) para leer la propiedad de un objeto:

```js
const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
```

`prop1val` tendrá una cadena con valor `val1` y `prop2val` tendrá una cadena con valor `val2`.

# --instructions--

Lee los valores de las propiedades de `testObj` utilizando la notación de puntos. Asigna la variable `hatValue` igual a la propiedad `hat` del objeto y asigna la variable `shirtValue` igual a la propiedad `shirt` del objeto.

# --hints--

`hatValue` debe ser una cadena

```js
assert(typeof hatValue === 'string');
```

El valor de `hatValue` debe ser la cadena `ballcap`

```js
assert(hatValue === 'ballcap');
```

`shirtValue` debe ser una cadena

```js
assert(typeof shirtValue === 'string');
```

El valor de `shirtValue` debe ser la cadena `jersey`

```js
assert(shirtValue === 'jersey');
```

Debes usar la notación de puntos dos veces

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
