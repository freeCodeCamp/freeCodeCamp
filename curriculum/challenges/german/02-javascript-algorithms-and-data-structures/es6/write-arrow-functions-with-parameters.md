---
id: 587d7b88367417b2b2512b44
title: Pfeilfunktionen mit Parametern schreiben
challengeType: 1
forumTopicId: 301223
dashedName: write-arrow-functions-with-parameters
---

# --description--

Genau wie bei einer normalen Funktion kannst du einer Pfeilfunktion Argumente übergeben.

```js
const doubler = (item) => item * 2;
doubler(4);
```

`doubler(4)` würde den Wert `8` zurückgeben.

Wenn eine Pfeilfunktion einen einzigen Parameter hat, können die Klammern, die den Parameter einschließen, weggelassen werden.

```js
const doubler = item => item * 2;
```

Es ist möglich, mehr als ein Argument an eine Pfeilfunktion zu übergeben.

```js
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```

`multiplier(4, 2)` würde den Wert `8` zurückgeben.

# --instructions--

Schreibe die Funktion `myConcat`, die den Inhalt von `arr2` an `arr1` anhängt, so um, dass die Funktion die Syntax der Pfeilfunktion verwendet.

# --hints--

Du solltest das Schlüsselwort `var` ersetzen.

```js
assert.notMatch(code, /var/g);
```

`myConcat` sollte eine konstante Variable sein (durch Verwendung von `const`).

```js
assert.match(code, /const\s+myConcat/g);
```

`myConcat` sollte eine Pfeilfunktion mit zwei Parametern sein

```js
assert(
  /myConcat=\(\w+,\w+\)=>/.test(code.replace(/\s/g, '')) &&
    typeof myConcat === 'function'
);
```

`myConcat()` sollte `[1, 2, 3, 4, 5]` zurückgeben.

```js
assert.deepEqual(myConcat([1, 2], [3, 4, 5]), [1, 2, 3, 4, 5]);
```

Das Schlüsselwort `function` sollte nicht verwendet werden.

```js
assert.notMatch(code, /function/g);
```

# --seed--

## --seed-contents--

```js
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
```

# --solutions--

```js
const myConcat = (arr1, arr2) =>  {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
```
