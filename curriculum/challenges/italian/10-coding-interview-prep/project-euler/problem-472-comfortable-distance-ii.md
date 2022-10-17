---
id: 5900f5451000cf542c510057
title: 'Problema 472: Distanza Comoda II'
challengeType: 1
forumTopicId: 302149
dashedName: problem-472-comfortable-distance-ii
---

# --description--

Ci sono $N$ posti in fila. $N$ persone vengono uno dopo l'altro a riempire i posti secondo le seguenti regole:

1. Nessuna persona si siede accanto ad un'altra.
1. La prima persona sceglie un posto qualsiasi.
1. Ogni persona successiva sceglie il posto più lontano da chiunque altro già seduto, purché non violi la regola 1. Se c'è più di una scelta che soddisfa questa condizione, allora la persona sceglie la scelta più a sinistra.

Si noti che a causa della regola 1, alcuni posti saranno sicuramente lasciati inoccupati, e il numero massimo di persone che possono essere sedute è inferiore a $N$ (per $N > 1$).

Ecco i possibili posti a sedere per $N = 15$:

<img class="img-responsive center-block" alt="posti a sedere per N = 15" src="https://cdn.freecodecamp.org/curriculum/project-euler/comfortable-distance-ii.png" style="background-color: white; padding: 10px;" />

Vediamo che se la prima persona sceglie correttamente, i 15 posti possono ospitare fino a 7 persone. Possiamo anche vedere che la prima persona ha 9 scelte per massimizzare il numero di persone che possono essere sedute.

Sia $f(N)$ il numero di scelte che la prima persona ha per massimizzare il numero di occupanti per $N$ posti di fila. Così, $f(1) = 1$, $f(15) = 9$, $f(20) = 6$, e $f(500) = 16$.

Inoltre, $\sum f(N) = 83$ per $1 ≤ N ≤ 20$ e $\sum f(N) = 13\\,343$ per $1 ≤ N ≤ 500$.

Trova $\sum f(N)$ per $1 ≤ N ≤ {10}^{12}$. Dai le ultime 8 cifre della tua risposta.

# --hints--

`comfortableDistanceTwo()` dovrebbe restituire `73811586`.

```js
assert.strictEqual(comfortableDistanceTwo(), 73811586);
```

# --seed--

## --seed-contents--

```js
function comfortableDistanceTwo() {

  return true;
}

comfortableDistanceTwo();
```

# --solutions--

```js
// solution required
```
