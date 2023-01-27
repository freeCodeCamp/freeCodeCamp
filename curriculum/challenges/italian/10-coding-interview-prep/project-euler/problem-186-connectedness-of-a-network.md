---
id: 5900f4281000cf542c50ff39
title: 'Problema 186: Collegamento di una rete'
challengeType: 1
forumTopicId: 301822
dashedName: problem-186-connectedness-of-a-network
---

# --description--

Ecco i dati da un sistema telefonico molto usato con un milione di utenti:

| RecNr | Chiamante | Chiamato |
| ----- | --------- | -------- |
| 1     | 200007    | 100053   |
| 2     | 600183    | 500439   |
| 3     | 600863    | 701497   |
| ...   | ...       | ...      |

Il numero di telefono del chiamante e il numero chiamato nel record $n$ sono $Caller(n) = S_{2n - 1}$ e $Called(n) = S_{2n}$ dove ${S}_{1,, 3,\ldots}$ provengono dal "Lagged Fibonacci Generator":

Per $1 ≤ k ≤ 55$, $S_k = [100003 - 200003k + 300007{k}^3]\\;(\text{modulo}\\;1000000)$

Per $56 ≤ k$, $S_k = [S_{k - 24} + S_{k - 55}]\\;(\text{modulo}\\;1000000)$

Se $Caller(n) = Called(n)$ allora si presume che l'utente abbia sbagliato e la chiamata fallisce; altrimenti la chiamata è riuscita.

Dall'inizio delle registrazioni, diciamo che qualsiasi coppia di utenti $X$ e $Y$ sono amici se $X$ chiama $Y$ o viceversa. Allo stesso modo, $X$ è un amico di un amico di $Z$ se $X$ è un amico di $Y$ e $Y$ è un amico di $Z$; e così via per catene più lunghe.

Il numero di telefono del Primo Ministro è 524287. Dopo quante chiamate di successo, senza contare gli errori, il 99% degli utenti (compreso il PM) sarà un amico, o un amico di un amico ecc. del Primo Ministro?

# --hints--

`connectednessOfANetwork()` dovrebbe restituire `2325629`.

```js
assert.strictEqual(connectednessOfANetwork(), 2325629);
```

# --seed--

## --seed-contents--

```js
function connectednessOfANetwork() {

  return true;
}

connectednessOfANetwork();
```

# --solutions--

```js
// solution required
```
