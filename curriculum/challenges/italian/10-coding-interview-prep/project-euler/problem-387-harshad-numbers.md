---
id: 5900f4f11000cf542c510003
title: 'Problema 387: Numeri di Harshad'
challengeType: 1
forumTopicId: 302051
dashedName: problem-387-harshad-numbers
---

# --description--

Un numero di Harshad o di Niven è un numero che è divisibile dalla somma delle sue cifre.

201 è un numero di Harshad perché è divisibile per 3 (la somma delle sue cifre).

Quando tronchiamo l'ultima cifra dal 201, otteniamo 20, che è un numero Harshad.

Quando tronchiamo l'ultima cifra da 20, otteniamo 2, che è anche un numero Harshad.

Sia un numero di Harshard troncabile a destra un numero di Harshard che troncando ricorsivamente l'ultima cifra risulta sempre in un numero di Harshard.

Inoltre:

$\frac{201}{3} = 67$ che è primo.

Sia un numero di Harshard forte un numero che quando diviso dalla somma delle sue cifre restituisce un numero primo.

Ora prendi il numero 2011, che è primo. Quando tronchiamo l'ultima cifra da esso otteniamo 201, un forte numero di Harshad che è anche troncabile a destra. Chiamiamo tali numeri primi, numeri primi di Harshad forti troncabili a destra.

Ti è dato che la somma dei numeri primi di Harshad forti troncabili a destra inferiori a 10000 è 90619.

Trova la somma dei numeri primi di Harshad forti troncabili a destra a ${10}^{14}$.

# --hints--

`harshadNumbers()` dovrebbe restituire `696067597313468`.

```js
assert.strictEqual(harshadNumbers(), 696067597313468);
```

# --seed--

## --seed-contents--

```js
function harshadNumbers() {

  return true;
}

harshadNumbers();
```

# --solutions--

```js
// solution required
```
