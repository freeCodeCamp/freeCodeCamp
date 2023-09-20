---
id: a97fd23d9b809dac9921074f
title: Argomenti facoltativi
challengeType: 1
forumTopicId: 14271
dashedName: arguments-optional
---

# --description--

Crea una funzione che somma due argomenti. Se viene fornito un solo argomento, restituisci una funzione che si aspetta un argomento e restituisce la somma.

Ad esempio, `addTogether(2, 3)` dovrebbe restituire `5`e `addTogether(2)` dovrebbe restituire una funzione.

Chiamando questa funzione restituita con un singolo argomento essa restituirà la somma:

```js
var sumTwoAnd = addTogether(2);
```

`sumTwoAnd(3)` restituisce `5`.

Se uno dei due argomenti non è un numero valido, restituisce undefined.

# --hints--

`addTogether(2, 3)` dovrebbe restituire 5.

```js
assert.deepEqual(addTogether(2, 3), 5);
```

`addTogether(23.4, 30)` should return 53.4.

```js
assert.deepEqual(addTogether(23.4, 30), 53.4);
```

`addTogether("2", 3)` dovrebbe restituire `undefined`.

```js
assert.isUndefined(addTogether('2', 3));
```

`addTogether(5, undefined)` dovrebbe restituire `undefined`.

```js
assert.isUndefined(addTogether(5, undefined));
```

`addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")` dovrebbe restituire `undefined`.

```js
assert.isUndefined(addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
```

`addTogether(5)` dovrebbe restituire una funzione.

```js
assert.deepEqual(typeof(addTogether(5)), 'function');
```

`addTogether(5)(7)` dovrebbe restituire 12.

```js
assert.deepEqual(addTogether(5)(7), 12);
```

`addTogether(2)([3])` dovrebbe restituire `undefined`.

```js
assert.isUndefined(addTogether(2)([3]));
```

`addTogether(2, "3")` dovrebbe restituire `undefined`.

```js
assert.isUndefined(addTogether(2, '3'));
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
  const first = arguments[0];
  if (typeof(first) !== 'number') {
    return undefined;
  }
  if (arguments.length === 1) {
    return function(second) {
      if (typeof(second) !== 'number') {
        return undefined;
      }
      return first + second;
    };
  }
  const second = arguments[1];
  if (typeof(second) !== 'number') {
    return undefined;
  }
  return first + second;
}
```
