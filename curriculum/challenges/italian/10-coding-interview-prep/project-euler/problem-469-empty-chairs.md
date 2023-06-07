---
id: 5900f5411000cf542c510053
title: 'Problema 469: Sedie vuote'
challengeType: 1
forumTopicId: 302144
dashedName: problem-469-empty-chairs
---

# --description--

In una stanza $N$ sedie sono posizionate attorno a un tavolo rotondo.

I cavalieri entrano nella stanza uno ad uno e scelgono a caso una sedia vuota disponibile.

Per avere abbastanza spazio di manovra i cavalieri lasciano sempre almeno una sedia vuota tra loro.

Quando non ci sono sedie adatte rimaste, viene determinata la frazione $C$ di sedie vuote. Definiamo anche $E(N)$ come il valore atteso di $C$.

Possiamo verificare che $E(4) = \frac{1}{2}$ e $E(6) = \frac{5}{9}$.

Trova $E({10}^{18})$. Dai la tua risposta arrotondata a otto decimali nel formato 0.abcdefghijklmn.

# --hints--

`emptyChairs()` dovrebbe restituire `0.56766764161831`.

```js
assert.strictEqual(emptyChairs(), 0.56766764161831);
```

# --seed--

## --seed-contents--

```js
function emptyChairs() {

  return true;
}

emptyChairs();
```

# --solutions--

```js
// solution required
```
