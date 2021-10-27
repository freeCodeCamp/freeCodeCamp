---
id: 56533eb9ac21ba0edf2244c8
title: Accede a propiedades de objetos con notación de corchete
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBvmEHP'
forumTopicId: 16163
dashedName: accessing-object-properties-with-bracket-notation
---

# --description--

La segunda manera de acceder a las propiedades de un objeto es con la notación de corchetes (`[]`). Si la propiedad del objeto al que intentas acceder tiene un espacio en el nombre, necesitarás usar notación de corchetes.

Sin embargo, también puedes utilizar la notación de corchetes en las propiedades de objeto sin espacios.

Aquí hay un ejemplo de cómo usar la notación de corchetes para leer la propiedad de un objeto:

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

`myObj["Space Name"]` sería la cadena `Kirk`, `myObj['More Space']` sería la cadena `Spock`, y `myObj["NoSpace"]` sería la cadena `USS Enterprise`.

Ten en cuenta que los nombres de las propiedades con espacios deben estar entre comillas (simples o dobles).

# --instructions--

Lee los valores de las propiedades `an entree` y `the drink` de `testObj` usando la notación de corchetes y asígnalos a `entreeValue` y `drinkValue` respectivamente.

# --hints--

`entreeValue` debe ser una cadena de texto

```js
assert(typeof entreeValue === 'string');
```

El valor de `entreeValue` debe ser la cadena `hamburger`

```js
assert(entreeValue === 'hamburger');
```

`drinkValue` debe ser una cadena

```js
assert(typeof drinkValue === 'string');
```

El valor de `drinkValue` debe ser la cadena `water`

```js
assert(drinkValue === 'water');
```

Debes usar la notación de corchetes dos veces

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
