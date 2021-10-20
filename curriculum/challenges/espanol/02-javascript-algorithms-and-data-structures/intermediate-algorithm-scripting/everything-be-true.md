---
id: a10d2431ad0c6a099a4b8b52
title: Todo sea verdad
challengeType: 5
forumTopicId: 16011
dashedName: everything-be-true
---

# --description--

Comprueba si el predicado (segundo argumento) es <dfn>truthy</dfn> en todos los elementos de una colección (primer argumento).

En otras palabras, se te da una colección de arreglos de objetos. El predicado `pre` será una propiedad del objeto y debe devolver `true` si su valor es `truthy`. De lo contrario, devuelve `false`.

En JavaScript, los valores `truthy` son valores que se traducen en `true` cuando se evalúan en un contexto booleano.

Recuerda, puedes acceder a las propiedades del objeto mediante la notación de puntos o la notación de corchetes `[]`.

# --hints--

`truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")` debe devolver `true`.

```js
assert.strictEqual(
  truthCheck(
    [
      { user: 'Tinky-Winky', sex: 'male' },
      { user: 'Dipsy', sex: 'male' },
      { user: 'Laa-Laa', sex: 'female' },
      { user: 'Po', sex: 'female' }
    ],
    'sex'
  ),
  true
);
```

`truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")` debe devolver `false`.

```js
assert.strictEqual(
  truthCheck(
    [
      { user: 'Tinky-Winky', sex: 'male' },
      { user: 'Dipsy' },
      { user: 'Laa-Laa', sex: 'female' },
      { user: 'Po', sex: 'female' }
    ],
    'sex'
  ),
  false
);
```

`truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")` debe devolver `false`.

```js
assert.strictEqual(
  truthCheck(
    [
      { user: 'Tinky-Winky', sex: 'male', age: 2 },
      { user: 'Dipsy', sex: 'male', age: 0 },
      { user: 'Laa-Laa', sex: 'female', age: 5 },
      { user: 'Po', sex: 'female', age: 4 }
    ],
    'age'
  ),
  false
);
```

`truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat")` debe devolver `false`.

```js
assert.strictEqual(
  truthCheck(
    [
      { name: 'Pete', onBoat: true },
      { name: 'Repeat', onBoat: true },
      { name: 'FastForward', onBoat: null }
    ],
    'onBoat'
  ),
  false
);
```

`truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat")` debe devolver `true`.

```js
assert.strictEqual(
  truthCheck(
    [
      { name: 'Pete', onBoat: true },
      { name: 'Repeat', onBoat: true, alias: 'Repete' },
      { name: 'FastForward', onBoat: true }
    ],
    'onBoat'
  ),
  true
);
```

`truthCheck([{"single": "yes"}], "single")` debe devolver `true`.

```js
assert.strictEqual(truthCheck([{ single: 'yes' }], 'single'), true);
```

`truthCheck([{"single": ""}, {"single": "double"}], "single")` debe devolver `false`.

```js
assert.strictEqual(
  truthCheck([{ single: '' }, { single: 'double' }], 'single'),
  false
);
```

`truthCheck([{"single": "double"}, {"single": undefined}], "single")` debe devolver `false`.

```js
assert.strictEqual(
  truthCheck([{ single: 'double' }, { single: undefined }], 'single'),
  false
);
```

`truthCheck([{"single": "double"}, {"single": NaN}], "single")` debe devolver `false`.

```js
assert.strictEqual(
  truthCheck([{ single: 'double' }, { single: NaN }], 'single'),
  false
);
```

# --seed--

## --seed-contents--

```js
function truthCheck(collection, pre) {
  return pre;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
```

# --solutions--

```js
function truthCheck(collection, pre) {
  return collection.every(function(e) { return e[pre]; });
}
```
