---
id: 5900f4fc1000cf542c51000e
title: 'Problema 399: Numeri di Fibonacci senza quadrati'
challengeType: 1
forumTopicId: 302064
dashedName: problem-399-squarefree-fibonacci-numbers
---

# --description--

I primi 15 numeri di Fibonacci sono:

$$1,1,2,3,5,8,13,21,34,55,89,144,233,377,610.$$

Si può notare che 8 e 144 non sono senza quadrati: 8 è divisibile per 4 e 144 è divisibile per 4 e per 9.

Quindi i primi 13 numeri di fibonacci senza quadrati sono:

$$1,1,2,3,5,13,21,34,55,89,233,377 \text{ e } 610.$$

Il $200$° numero di fibonacci senza quadrati è: 971183874599339129547649988289594072811608739584170445. Le ultime sedici cifre di questo numero sono: 1608739584170445 e nella notazione scientifica questo numero può essere scritto come `9.7e53`.

Trova il $100\\,000\\,000$-mo numero di fibonacci senza quadrati. Fornisci come risposta una stringa con le sue ultime sedici cifre seguite da una virgola seguita dal numero in notazione scientifica (arrotondato a una cifra dopo il punto decimale). Per il $200$° numero senza quadrati la risposta sarebbe stata: `1608739584170445,9.7e53`

**Nota:** Per questo problema, assumi che per ogni primo $p$, il primo numero di fibonacci divisibile per $p$ non sia divisibile per $p^2$ (questo fa parte della congettura di Wall). Questo è stato verificato per i numeri primi $≤ 3 \times {10}^{15}$, ma non è stato dimostrato in generale.

Se succede che la congettura è falsa, allora la risposta accettata a questo problema non è garantita essere il $100\\,000\\,000$-mo numero di Fibonacci senza quadrati, ma piuttosto rappresenta solo un limite inferiore per quel numero.

# --hints--

`squarefreeFibonacciNumbers()` dovrebbe restituire una stringa.

```js
assert(typeof squarefreeFibonacciNumbers() === 'string');
```

`squarefreeFibonacciNumbers()`dovrebbe restituire la stringa `1508395636674243,6.5e27330467`.

```js
assert.strictEqual(squarefreeFibonacciNumbers(), '1508395636674243,6.5e27330467');
```

# --seed--

## --seed-contents--

```js
function squarefreeFibonacciNumbers() {

  return true;
}

squarefreeFibonacciNumbers();
```

# --solutions--

```js
// solution required
```
