---
id: 595668ca4cfe1af2fb9818d4
title: Séries de Harshad ou de Niven
challengeType: 1
forumTopicId: 302281
dashedName: harshad-or-niven-series
---

# --description--

Os números de Harshad ou de Niven são inteiros positivos ≥ 1 que são divisíveis pela soma de seus dígitos.

Por exemplo, `42` é um número de Harshad, pois `42` é divisível por `(4 + 2)` sem resto.

Considere que as séries são definidas como números em ordem crescente.

# --instructions--

Implemente uma função para gerar membros sucessivos da sequência de Harshad.

Use-a para retornar um array com dez membros da sequência, começando com o primeiro número de Harshad maior que `n`.

# --hints--

`isHarshadOrNiven` deve ser uma função.

```js
assert(typeof isHarshadOrNiven === 'function');
```

`isHarshadOrNiven(10)` deve retornar `[12, 18, 20, 21, 24, 27, 30, 36, 40, 42]`

```js
assert.deepEqual(isHarshadOrNiven(10), [12, 18, 20, 21, 24, 27, 30, 36, 40, 42]);
```

`isHarshadOrNiven(400)` deve retornar `[402, 405, 407, 408, 410, 414, 420, 423, 432, 440]`

```js
assert.deepEqual(isHarshadOrNiven(400), [402, 405, 407, 408, 410, 414, 420, 423, 432, 440]);
```

`isHarshadOrNiven(1000)` deve retornar `[1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020]`

```js
assert.deepEqual(isHarshadOrNiven(1000), [1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020]);
```

# --seed--

## --seed-contents--

```js
function isHarshadOrNiven(n) {
  const res = [];

  return res;
}
```

# --solutions--

```js
function isHarshadOrNiven(n) {
  function isHarshad(num) {
    let s = 0;
    const nStr = num.toString();
    for (let i = 0; i < nStr.length; ++i) {
      s += parseInt(nStr.charAt(i), 10);
    }
    return n % s === 0;
  }

  const res = [];
  let count = 0;

  while (count < 10) {
    n++;
    if (isHarshad(n)) {
      count++;
      res.push(n);
    }
  }

  return res;
}
```
