---
id: 59d9c6bc214c613ba73ff012
title: SEDOLs
challengeType: 1
forumTopicId: 302305
dashedName: sedols
---

# --description--

A <abbr title="Stock Exchange Daily Official List">SEDOL</abbr> é uma lista de números de identificação de segurança emitidos pela Bolsa de Valores de Londres.

Para cada lista de números de 6 algarismos da <abbr title="Stock Exchange Daily Official List">SEDOL</abbr>, calcule e acrescente o algarismo da soma de verificação. Ou seja, dada a string de entrada à esquerda, sua função deve retornar a string correspondente à direita:

<pre>
710889 => 7108899
B0YBKJ => B0YBKJ7
406566 => 4065663
B0YBLH => B0YBLH2
228276 => 2282765
B0YBKL => B0YBKL9
557910 => 5579107
B0YBKR => B0YBKR5
585284 => 5852842
B0YBKT => B0YBKT7
B00030 => B000300
</pre>

Verifique se cada entrada é formada corretamente, especialmente em relação a caracteres válidos permitidos em uma string SEDOL. A função deve retornar `null` quando a entrada for inválida.

# --hints--

`sedol` deve ser uma função.

```js
assert(typeof sedol === 'function');
```

`sedol('a')` deve retornar null.

```js
assert(sedol('a') === null);
```

`sedol('710889')` deve retornar '7108899'.

```js
assert(sedol('710889') === '7108899');
```

`sedol('BOATER')` deve retornar null.

```js
assert(sedol('BOATER') === null);
```

`sedol('228276')` deve retornar '2282765'.

```js
assert(sedol('228276') === '2282765');
```

# --seed--

## --seed-contents--

```js
function sedol(input) {
  const checkSum = 0

  return checkSum;
}
```

# --solutions--

```js
function sedol(input) {
  const checkDigit = sedolCheckDigit(input);
  if (checkDigit !== null) {
    return input + checkDigit;
  }
  return null;
}

const weight = [1, 3, 1, 7, 3, 9, 1];
function sedolCheckDigit(char6) {
  if (char6.search(/^[0-9BCDFGHJKLMNPQRSTVWXYZ]{6}$/) === -1) {
    return null;
  }

  let sum = 0;
  for (let i = 0; i < char6.length; i++) {
    sum += weight[i] * parseInt(char6.charAt(i), 36);
  }
  const checkSum = (10 - (sum % 10)) % 10;
  return checkSum.toString();
}
```
