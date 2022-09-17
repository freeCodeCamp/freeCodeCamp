---
id: a97fd23d9b809dac9921074f
title: Argumentos opcionales
challengeType: 1
forumTopicId: 14271
dashedName: arguments-optional
---

# --description--

Crea una función que sume dos argumentos. Si sólo se proporciona un argumento, entonces devuelve una función que espera un argumento y devuelve la suma.

Por ejemplo, `addTogether(2, 3)` debe devolver `5` y `addTogether(2)` debe devolver una función.

Si se llama a esta función devuelta con un solo argumento, se obtendrá la suma:

```js
var sumTwoAnd = addTogether(2);
```

`sumTwoAnd(3)` devuelve `5`.

Si cualquiera de los dos argumentos no es un número válido, devuelve undefined.

# --hints--

`addTogether(2, 3)` debe devolver 5.

```js
assert.deepEqual(addTogether(2, 3), 5);
```

`addTogether(23, 30)` debe devolver 53.

```js
assert.deepEqual(addTogether(23, 30), 53);
```

`addTogether(5)(7)` debe devolver 12.

```js
assert.deepEqual(addTogether(5)(7), 12);
```

`addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")` debe devolver `undefined`.

```js
assert.isUndefined(addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
```

`addTogether(2, "3")` debe devolver `undefined`.

```js
assert.isUndefined(addTogether(2, '3'));
```

`addTogether(2)([3])` debe devolver `undefined`.

```js
assert.isUndefined(addTogether(2)([3]));
```

`addTogether("2", 3)` debe devolver `undefined`.

```js
assert.isUndefined(addTogether('2', 3));
```

`addTogether(5, undefined)` Debería devolver `undefined`.

```js
assert.isUndefined(addTogether(5, undefined));
```

# --seed--

## --seed-contents--

```js
function addTogether() {
  return false;
}

addTogether(2,3);
```

# --solutions--

```js
function addTogether() {
  var a = arguments[0];
  if (toString.call(a) !== '[object Number]') return;
  if (arguments.length === 1) {
    return function(b) {
      if (toString.call(b) !== '[object Number]') return;
      return a + b;
    };
  }
  var b = arguments[1];
  if (toString.call(b) !== '[object Number]') return;
  return a + arguments[1];
}
```
