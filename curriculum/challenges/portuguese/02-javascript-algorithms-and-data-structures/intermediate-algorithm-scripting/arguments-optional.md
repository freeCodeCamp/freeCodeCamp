---
id: a97fd23d9b809dac9921074f
title: Usar argumentos opcionais
challengeType: 1
forumTopicId: 14271
dashedName: arguments-optional
---

# --description--

Crie uma função que some dois argumentos juntos. Se apenas um argumento for fornecido, então retorne uma função que espera um argumento e retorna a sua soma.

Por exemplo, `addTogether(2, 3)` deve retornar `5` e `addTogether(2)` deve retornar uma função.

Chamar essa função retornada com um argumento retornará a soma:

```js
var sumTwoAnd = addTogether(2);
```

`sumTwoAnd(3)` retorna `5`.

Se algum argumento não for um número válido, retorne undefined.

# --hints--

`addTogether(2, 3)` deve retornar 5.

```js
assert.deepEqual(addTogether(2, 3), 5);
```

`addTogether(23, 30)` deve retornar 53.

```js
assert.deepEqual(addTogether(23, 30), 53);
```

`addTogether(5)(7)` deve retornar 12.

```js
assert.deepEqual(addTogether(5)(7), 12);
```

`addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")` deve retornar `undefined`.

```js
assert.isUndefined(addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
```

`addTogether(2, "3")` deve retornar `undefined`.

```js
assert.isUndefined(addTogether(2, '3'));
```

`addTogether(2)([3])` deve retornar `undefined`.

```js
assert.isUndefined(addTogether(2)([3]));
```

`addTogether("2", 3)` deve retornar `undefined`.

```js
assert.isUndefined(addTogether('2', 3));
```

`addTogether(5, undefined)` deve retornar `undefined`.

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
