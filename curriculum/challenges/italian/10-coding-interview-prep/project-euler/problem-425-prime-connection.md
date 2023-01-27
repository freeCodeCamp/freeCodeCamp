---
id: 5900f5151000cf542c510028
title: 'Problema 425: Connessione prima'
challengeType: 1
forumTopicId: 302095
dashedName: problem-425-prime-connection
---

# --description--

Si dice che due numeri positivi $A$ e $B$ sono connessi (indicati da "$A ↔ B$") se una di queste condizioni è soddisfatta:

1. $A$ e $B$ hanno la stessa lunghezza e differiscono in una cifra esatta; per esempio, $123 ↔ 173$.
2. Aggiungendo una cifra alla sinistra di $A$ (o $B$) si ottiene $B$ (o $A$); per esempio, $23 ↔ 223$ e $123 ↔ 23$.

Chiamiamo un primo $P$ un parente di 2 se esiste una catena di primi connessi tra 2 e $P$ e nessun primo nella catena supera $P$.

Ad esempio, 127 è un parente di 2. Una delle catene possibili è mostrata di seguito:

$$2 ↔ 3 ↔ 13 ↔ 113 ↔ 103 ↔ 107 ↔ 127$$

Tuttavia, 11 e 103 non sono parenti di 2.

Sia $F(N)$ la somma dei primi $≤ N$ che non sono parenti di 2. Possiamo verificare che $F({10}^3) = 431$ e $F({10}^4) = 78\\,728$.

Trova $F({10}^7)$.

# --hints--

`primeConnection()` dovrebbe restituire `46479497324`.

```js
assert.strictEqual(primeConnection(), 46479497324);
```

# --seed--

## --seed-contents--

```js
function primeConnection() {

  return true;
}

primeConnection();
```

# --solutions--

```js
// solution required
```
