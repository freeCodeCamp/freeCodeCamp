---
id: 587d7da9367417b2b2512b66
title: Combinar dois arrays usando o método concat
challengeType: 1
forumTopicId: 301229
dashedName: combine-two-arrays-using-the-concat-method
---

# --description--

<dfn>Concatenação</dfn> significa juntar itens de ponta a ponta. Em JavaScript, strings e arrays possuem o método `concat` e ele funciona igualmente para os dois. Para arrays, o método é chamado em uma instância e um segundo array é passado como argumento. `concat` então junta os dois arrays em um só. O método retorna um novo array e deixa os dois originais intactos. Exemplo:

```js
[1, 2, 3].concat([4, 5, 6]);
```

`[1, 2, 3, 4, 5, 6]` é o array retornado.

# --instructions--

Use o método `concat` na função `nonMutatingConcat` para concatenar `attach` ao final de `original`. A função deve retornar o array concatenado.

# --hints--

Você deve usar o método `concat`.

```js
assert(code.match(/\.concat/g));
```

O primeiro array, `first`, não deve ser alterado.

```js
assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
```

O segundo array, `second`, não deve ser alterado.

```js
assert(JSON.stringify(second) === JSON.stringify([4, 5]));
```

`nonMutatingConcat([1, 2, 3], [4, 5])` deve retornar `[1, 2, 3, 4, 5]`.

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
