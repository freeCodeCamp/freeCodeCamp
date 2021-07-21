---
id: 587d7b89367417b2b2512b4b
title: Usar atribuição de desestruturação para atribuir variáveis a partir de arrays
challengeType: 1
forumTopicId: 301213
dashedName: use-destructuring-assignment-to-assign-variables-from-arrays
---

# --description--

ES6 torna desestruturar arrays tão fácil quanto desestruturar objetos.

Uma diferença chave entre o operador spread (...) e a desestruturação de array é que o operador spread retira todos os conteúdos de um array e coloca em uma lista com elementos separados por vírgula. Consequentemente, você não pode pegar ou escolher quais elementos você quer atribuir a variáveis.

Desestruturar um array nos permite fazer exatamente isso:

```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
```

O console exibirá os valores de `a` e `b` como `1, 2`.

É atribuída à variável `a` o primeiro valor do array, e à variável `b` é atribuído o segundo valor do array. Nós também podemos acessar o valor em qualquer índice de um array com desestruturação ao usar vírgulas para alcançar o índice desejado:

```js
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
```

O console exibirá os valores de `a`, `b` e `c` como `1, 2, 5`.

# --instructions--

Use atribuição de desestruturação para trocar os valores de `a` e `b` para que `a` receba os valores armazenados em `b` e `b` recebe os valores armazenados em `a`.

# --hints--

O valor de `a` deve ser `6`, após a troca.

```js
assert(a === 6);
```

O valor de `b` deve ser `8`, após a troca.

```js
assert(b === 8);
```

Você deve usar desestruturação de array para trocar `a` e `b`.

```js
assert(/\[\s*(\w)\s*,\s*(\w)\s*\]\s*=\s*\[\s*\2\s*,\s*\1\s*\]/g.test(code));
```

# --seed--

## --seed-contents--

```js
let a = 8, b = 6;
// Only change code below this line
```

# --solutions--

```js
let a = 8, b = 6;
[a, b] = [b, a];
```
