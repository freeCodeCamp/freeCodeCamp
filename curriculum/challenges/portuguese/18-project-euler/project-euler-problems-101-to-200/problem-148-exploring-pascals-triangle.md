---
id: 5900f4021000cf542c50ff14
title: 'Problema 148: Explorando o triângulo de Pascal'
challengeType: 1
forumTopicId: 301777
dashedName: problem-148-exploring-pascals-triangle
---

# --description--

Podemos facilmente verificar que nenhuma das entradas das primeiras sete linhas do triângulo Pascal é divisível por 7:

```markup
            1
          1   1
        1   2   1
      1   3   3   1
    1   4   6   4   1
  1   5   10  10  5   1
1   6   15  20  15  6   1
```

No entanto, se verificarmos as primeiras cem linhas, descobriremos que apenas 2361 das 5050 entradas não são divisíveis por 7.

# --instructions--

Encontre o número de entradas que não são divisíveis por 7 no primeiro bilhão (${10}^9$) de linhas do triângulo de Pascal.

# --hints--

`entriesOfPascalsTriangle()` deve retornar `2129970655314432`.

```js
assert.strictEqual(entriesOfPascalsTriangle(), 2129970655314432);
```

# --seed--

## --seed-contents--

```js
function entriesOfPascalsTriangle() {

  return true;
}

entriesOfPascalsTriangle();
```

# --solutions--

```js
// solution required
```
