---
id: 587d7b87367417b2b2512b42
title: Modificar um array declarado com const
challengeType: 1
forumTopicId: 301206
dashedName: mutate-an-array-declared-with-const
---

# --description--

Se você não estiver familiarizado com `const`, confira <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-a-read-only-variable-with-the-const-keyword" target="_blank" rel="noopener noreferrer nofollow">este desafio sobre a palavra-chave <code>const</code></a>.

Variáveis declaradas com `const` têm muitos casos de uso no JavaScript moderno.

Alguns desenvolvedores preferem criar todas suas variáveis usando `const`, a menos que eles saibam que vão precisar reatribuir o valor. Apenas nesse caso, eles usam `let`.

No entanto, é importante entender que objetos (incluindo arrays e funções) atribuídos a uma variável usando `const` ainda são mutáveis. Usar a declaração `const` só impede a reatribuição do identificador (nome) da variável.

```js
const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
```

`s = [1, 2, 3]` resultará em um erro. Depois de comentar essa linha, o `console.log` exibirá o valor `[5, 6, 45]`.

Como você pode ver, você pode alterar o objeto `[5, 6, 7]` e a variável `s` ainda apontará para o array alterado `[5, 6, 45]`. Assim como em qualquer outro array, os elementos dentro de `s` também são mutáveis. Mas como `const` foi usado, você não pode usar o identificador da variável `s` para apontar para uma matriz diferente (ou qualquer outro valor) usando o operador de atribuição.

# --instructions--

Um array é declarado: `const s = [5, 7, 2]`. Modifique o array para `[2, 5, 7]` usando várias atribuições de elementos.

# --hints--

Você não deve substituir a palavra-chave `const`.

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`s` deve ser uma variável constante (use `const`).

```js
(getUserInput) => assert(getUserInput('index').match(/const\s+s/g));
```

Você não deve alterar modificar o array original manualmente.

```js
(getUserInput) =>
  assert(
    getUserInput('index').match(
      /const\s+s\s*=\s*\[\s*5\s*,\s*7\s*,\s*2\s*\]\s*;?/g
    )
  );
```

A variável `s` deve ser igual a `[2, 5, 7]`.

```js
assert.deepEqual(s, [2, 5, 7]);
```

# --seed--

## --seed-contents--

```js
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();
```

# --solutions--

```js
const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
```
