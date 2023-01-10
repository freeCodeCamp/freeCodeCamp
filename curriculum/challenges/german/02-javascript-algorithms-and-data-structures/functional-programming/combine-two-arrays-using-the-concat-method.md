---
id: 587d7da9367417b2b2512b66
title: Kombiniere zwei Arrays mit der concat-Methode
challengeType: 1
forumTopicId: 301229
dashedName: combine-two-arrays-using-the-concat-method
---

# --description--

<dfn>Concatenation</dfn> bedeutet, dass man Elemente miteinander verbindet. JavaScript bietet die `concat` Methode für Strings und Arrays, die auf die gleiche Weise funktionieren. Bei Arrays wird diese Methode mit einem aufgerufen, dann wird ein weiteres Array als Argument an `concat` übergeben, das an das Ende des ersten Arrays angehängt wird. Sie gibt ein neues Array zurück und verändert keines der ursprünglichen Arrays. Hier ist ein Beispiel:

```js
[1, 2, 3].concat([4, 5, 6]);
```

Das zurückgegebene Array wäre `[1, 2, 3, 4, 5, 6]`.

# --instructions--

Verwende die `concat` Methode in der `nonMutatingConcat` Funktion, um `attach` an das Ende von `original` zu verknüpfen. Die Funktion sollte das verkettete Array zurückgeben.

# --hints--

Dein Code sollte die `concat` Methode verwenden.

```js
assert(code.match(/\.concat/g));
```

Das `first` Array sollte sich nicht ändern.

```js
assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
```

Das `second` Array sollte sich nicht ändern.

```js
assert(JSON.stringify(second) === JSON.stringify([4, 5]));
```

`nonMutatingConcat([1, 2, 3], [4, 5])` sollte `[1, 2, 3, 4, 5]` zurückgeben.

```js
assert(
  JSON.stringify(nonMutatingConcat([1, 2, 3], [4, 5])) ===
    JSON.stringify([1, 2, 3, 4, 5])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingConcat(original, attach) {
  // Only change code below this line


  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);
```

# --solutions--

```js
function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}
const first = [1, 2, 3];
const second = [4, 5];
```
