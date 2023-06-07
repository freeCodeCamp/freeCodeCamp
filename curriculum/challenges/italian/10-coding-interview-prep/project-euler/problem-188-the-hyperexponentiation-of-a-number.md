---
id: 5900f4291000cf542c50ff3b
title: 'Problema 188: L''iperesponenziazione di un numero'
challengeType: 1
forumTopicId: 301824
dashedName: problem-188-the-hyperexponentiation-of-a-number
---

# --description--

L'iperesponenziazione o tetrazione di un numero $a$ di un numero intero positivo $b$, denotata da $a↑b$ o ${}^ba$, è definita ricorsivamente da:

$a↑↑1 = a$,

$a↑↑(k+1) = a^{(a↑↑k)}$.

Così abbiamo ad esempio $3↑↑2 = 3^3 = 27$, quindi $3↑↑3 = 3^{27} = 7625597484987$ e $3↑↑4$ è approssimativamente ${10}^{3. 383346400240996 \tvolte {10}^{12}}$. Trova le ultime 8 cifre di $1777↑↑1855$.

# --hints--

`hyperexponentation()` dovrebbe restituire `95962097`.

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
