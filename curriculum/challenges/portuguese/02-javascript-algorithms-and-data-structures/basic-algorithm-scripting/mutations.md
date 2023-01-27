---
id: af2170cad53daa0770fabdea
title: Identificar mutações
challengeType: 1
forumTopicId: 16025
dashedName: mutations
---

# --description--

Retorne `true` se a string no primeiro elemento do array contém todas as letras da string no segundo elemento do array.

Por exemplo, `["hello", "Hello"]`, deve retornar `true` porque todas as letras na segunda string estão presentes no primeiro, ignorando diferenças entre maiúsculos e minúsculos.

Os argumentos `["hello","hey"]` deve retornar `false` porque a string `hello` não contém o caracter `y`.

Por último, `["Alien", "line"]`, deve retornar `true` porque todas as letras em `line` estão presente em `Alien`.

# --hints--

`mutation(["hello", "hey"])` deve retornar `false`.

```js
assert(mutation(['hello', 'hey']) === false);
```

`mutation(["hello","Hello"])` deve retornar `true`.

```js
assert(mutation(['hello', 'Hello']) === true);
```

`mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])` deve retornar `true`.

```js
assert(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']) === true);
```

`mutation(["Mary", "Army"])` deve retornar `true`.

```js
assert(mutation(['Mary', 'Army']) === true);
```

`mutation(["Mary", "Aarmy"])` deve retornar `true`.

```js
assert(mutation(['Mary', 'Aarmy']) === true);
```

`mutation(["Alien", "line"])` deve retornar `true`.

```js
assert(mutation(['Alien', 'line']) === true);
```

`mutation(["floor", "for"])` deve retornar `true`.

```js
assert(mutation(['floor', 'for']) === true);
```

`mutation(["hello", "neo"])` deve retornar `false`.

```js
assert(mutation(['hello', 'neo']) === false);
```

`mutation(["voodoo", "no"])` deve retornar `false`.

```js
assert(mutation(['voodoo', 'no']) === false);
```

`mutation(["ate", "date"])` deve retornar `false`.

```js
assert(mutation(['ate', 'date']) === false);
```

`mutation(["Tiger", "Zebra"])` deve retornar `false`.

```js
assert(mutation(['Tiger', 'Zebra']) === false);
```

`mutation(["Noel", "Ole"])` deve retornar `true`.

```js
assert(mutation(['Noel', 'Ole']) === true);
```

# --seed--

## --seed-contents--

```js
function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);
```

# --solutions--

```js
function mutation(arr) {
  let hash = Object.create(null);

  arr[0].toLowerCase().split('').forEach(c => hash[c] = true);

  return !arr[1].toLowerCase().split('').filter(c => !hash[c]).length;
}

mutation(["hello", "hey"]);
```
