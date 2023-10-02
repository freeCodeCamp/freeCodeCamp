---
id: 59637c4d89f6786115efd814
title: Sequência Q de Hofstadter
challengeType: 1
forumTopicId: 302287
dashedName: hofstadter-q-sequence
---

# --description--

A sequência de Hofstadter Q é definida como:

$Q(1)=Q(2)=1, \\\\ Q(n)=Q\\big(n-Q(n-1)\\big)+Q\\big(n-Q(n-2)), \\quad n>2.$

Ela é definida como a sequência de Fibonacci, mas enquanto o próximo termo na sequência de Fibonacci é a soma dos dois termos anteriores, na sequência Q, os dois termos anteriores dizer a distância a retornar na sequência Q para encontrar os dois números somados para fazer o próximo termo da sequência.

# --instructions--

Implementar a equação da sequência Q de Hofstadter como uma função. A função deve aceitar o número, `n`, e retornar um inteiro.

# --hints--

`hofstadterQ` deve ser uma função.

```js
assert(typeof hofstadterQ === 'function');
```

`hofstadterQ()` deve retornar um `integer`

```js
assert(Number.isInteger(hofstadterQ(1000)));
```

`hofstadterQ(1000)` deve retornar `502`

```js
assert.equal(hofstadterQ(testCase[0]), res[0]);
```

`hofstadterQ(1500)` deve retornar `755`

```js
assert.equal(hofstadterQ(testCase[1]), res[1]);
```

`hofstadterQ(2000)` deve retornar `1005`

```js
assert.equal(hofstadterQ(testCase[2]), res[2]);
```

`hofstadterQ(2500)` deve retornar `1261`

```js
assert.equal(hofstadterQ(testCase[3]), res[3]);
```

# --seed--

## --after-user-code--

```js
const testCase = [1000, 1500, 2000, 2500];
const res = [502, 755, 1005, 1261];
```

## --seed-contents--

```js
function hofstadterQ(n) {

  return n;
}
```

# --solutions--

```js
function hofstadterQ (n) {
  const memo = [1, 1, 1];
  const Q = function (i) {
    let result = memo[i];
    if (typeof result !== 'number') {
      result = Q(i - Q(i - 1)) + Q(i - Q(i - 2));
      memo[i] = result;
    }
    return result;
  };
  return Q(n);
}
```
