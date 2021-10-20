---
id: 587d7db9367417b2b2512ba6
title: Especificar apenas o mínimo de capturas
challengeType: 1
forumTopicId: 301366
dashedName: specify-only-the-lower-number-of-matches
---

# --description--

Você pode especificar um número mínimo e um máximo de capturas com chaves. Haverá vezes que você precisará especificar um mínimo mas não um máximo.

Para fazer isso, apenas escreva o número seguido de uma vírgula dentro das chaves.

Por exemplo, para capturar pelo menos `3` vezes a letra `a` na string `hah` você pode escrever a regex `/ha{3,}h/`.

```js
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
```

As três chamadas a `test` acima retornam, na ordem, os valores: `true`, `false` e `true`.

# --instructions--

Modifique a regex `haRegex` para que capture quatro ou mais `z`s na string `Hazzah`.

# --hints--

A regex deve usar chaves.

```js
assert(haRegex.source.match(/{.*?}/).length > 0);
```

A regex não deve encontrar a string `Hazzah`

```js
haRegex.lastIndex = 0;
assert(!haRegex.test('Hazzah'));
```

A regex não deve encontrar a string `Hazzzah`

```js
haRegex.lastIndex = 0;
assert(!haRegex.test('Hazzzah'));
```

A regex deve encontrar a string `Hazzzzah`

```js
assert('Hazzzzah'.match(haRegex)[0].length === 8);
```

A regex deve encontrar a string `Hazzzzzah`

```js
assert('Hazzzzzah'.match(haRegex)[0].length === 9);
```

A regex deve encontrar a string `Hazzzzzzah`

```js
assert('Hazzzzzzah'.match(haRegex)[0].length === 10);
```

A regex deve capturar 30 `z`s, se presentes, na string `Hazzah`.

```js
assert('Hazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzah'.match(haRegex)[0].length === 34);
```

# --seed--

## --seed-contents--

```js
let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line
let result = haRegex.test(haStr);
```

# --solutions--

```js
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
```
