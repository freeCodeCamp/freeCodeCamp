---
id: 56533eb9ac21ba0edf2244ca
title: Usa objetos para hacer búsquedas
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBk8sM'
forumTopicId: 18373
dashedName: using-objects-for-lookups
---

# --description--

Los objetos pueden ser considerados como un almacenamiento clave/valor, como un diccionario. Si tienes datos tabulares, puedes utilizar un objeto para hacer una búsqueda de valores en lugar de una declaración `switch` o encadenar `if/else`. Esto es de mucha utilidad cuando se sabe que los datos de entrada están limitados a un cierto rango.

Aquí hay un ejemplo de una simple búsqueda de alfabeto inverso:

```js
var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2];
alpha[24];

var value = 2;
alpha[value];
```

`alpha[2]` es la cadena `Y`, `alpha[24]` es la cadena `C`, y `alpha[value]` es la cadena `Y`.

# --instructions--

Convierte la declaración switch en un objeto llamado `lookup`. Úsalo para buscar `val` y asignar la cadena asociada a la variable `result`.

# --hints--

`phoneticLookup("alpha")` debe ser igual a la cadena `Adams`

```js
assert(phoneticLookup('alpha') === 'Adams');
```

`phoneticLookup("bravo")` debe ser igual a la cadena `Boston`

```js
assert(phoneticLookup('bravo') === 'Boston');
```

`phoneticLookup("charlie")` debe ser igual a la cadena `Chicago`

```js
assert(phoneticLookup('charlie') === 'Chicago');
```

`phoneticLookup("delta")` debe ser igual a la cadena `Denver`

```js
assert(phoneticLookup('delta') === 'Denver');
```

`phoneticLookup("echo")` debe ser igual a la cadena `Easy`

```js
assert(phoneticLookup('echo') === 'Easy');
```

`phoneticLookup("foxtrot")` debe ser igual a la cadena `Frank`

```js
assert(phoneticLookup('foxtrot') === 'Frank');
```

`phoneticLookup("")` debe ser igual a `undefined`

```js
assert(typeof phoneticLookup('') === 'undefined');
```

No debes modificar la sentencia `return`

```js
assert(code.match(/return\sresult;/));
```

No debes usar sentencias `case`, `switch`o `if`

```js
assert(
  !/case|switch|if/g.test(code.replace(/([/]{2}.*)|([/][*][^/*]*[*][/])/g, ''))
);
```

# --seed--

## --seed-contents--

```js
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
```

# --solutions--

```js
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };

  result = lookup[val];

  return result;
}
```
