---
id: 5900f4291000cf542c50ff3b
title: 'Problema 188: A hiperexponenciação de um número'
challengeType: 1
forumTopicId: 301824
dashedName: problem-188-the-hyperexponentiation-of-a-number
---

# --description--

A hiperexponenciação ou tetração de um número $a$ por um número inteiro positivo $b$, denotada por $a↑↑b$ ou ${}^ba$, é recursivamente definida por:

$a↑↑1 = a$,

$a↑↑(k+1) = a^{(a↑↑k)}$.

Assim, temos, por exemplo, que $3↑↑2 = 3^3 = 27$. Portanto $3↑↑3 = 3^{27} = 7625597484987$ e $3↑↑4$ é aproximadamente ${10}^{3.6383346400240996 \times {10}^{12}}$. Encontre os últimos 8 algarismos de $1777↑↑1855$.

# --hints--

`hyperexponentation()` deve retornar `95962097`.

```js
assert.strictEqual(hyperexponentation(), 95962097);
```

# --seed--

## --seed-contents--

```js
function hyperexponentation() {

  return true;
}

hyperexponentation();
```

# --solutions--

```js
// solution required
```
