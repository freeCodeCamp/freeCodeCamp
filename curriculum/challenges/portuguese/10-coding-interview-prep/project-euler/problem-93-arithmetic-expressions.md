---
id: 5900f3ca1000cf542c50fedc
title: 'Problema 93: Expressões aritméticas'
challengeType: 1
forumTopicId: 302210
dashedName: problem-93-arithmetic-expressions
---

# --description--

Usando cada um dos algarismos do conjunto {1, 2, 3, 4} exatamente uma vez e fazendo uso das quatro operações aritméticas (+, –, \*, /) e parênteses, é possível formar resultados inteiros positivos diferentes.

Por exemplo:

<div style='margin-left: 4em;'>
  8 = (4 * (1 + 3)) / 2<br>
  14 = 4 (3 + 1 / 2)<br>
  19 = 4 * (2 + 3) - 1<br>
  36 = 3 * 4 (2 + 1)
</div>

Observe que as concatenações de algarismos, como 12 + 34, não são permitidas.

Usando o conjunto {1, 2, 3, 4}, é possível obter trinta e um resultados numéricos diferentes, dos quais 36 é o máximo. Cada um dos números, de 1 a 28, pode ser obtido antes de encontrar o primeiro número não expressivo.

Encontre o conjunto de quatro algarismos distintos, `a` &lt; `b` &lt; `c` &lt; `d`, para os quais o maior conjunto de inteiros positivos consecutivos, de 1 a `n`, pode ser obtido, dando sua resposta como uma string: `abcd`.

# --hints--

`arithmeticExpressions()` deve retornar um número.

```js
assert(typeof arithmeticExpressions() === 'number');
```

`arithmeticExpressions()` deve retornar 1258.

```js
assert.strictEqual(arithmeticExpressions(), 1258);
```

# --seed--

## --seed-contents--

```js
function arithmeticExpressions() {

  return true;
}

arithmeticExpressions();
```

# --solutions--

```js
// solution required
```
