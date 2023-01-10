---
id: 5900f53b1000cf542c51004d
title: 'Problema 462: Permutazione di numeri 3-lisci'
challengeType: 1
forumTopicId: 302137
dashedName: problem-462-permutation-of-3-smooth-numbers
---

# --description--

Un numero 3-liscio è un numero intero che non ha un fattore primo maggiore di 3. Per un intero $N$ definiamo $S(N)$ come il set di 3 numeri lisci minore o uguale a $N$. Ad esempio, $S(20) = \\{1, 2, 3, 4, 6, 8, 9, 12, 16, 18\\}$.

Definiamo $F(N)$ come il numero di permutazioni di $S(N)$ in cui ogni elemento viene dopo tutti i propri divisori.

Questa è una delle possibili permutazioni per $N = 20$.

-   1, 2, 4, 3, 9, 8, 16, 6, 18, 12.

Questa non è una permutazione valida perché 12 viene prima del suo divisore 6.

-   1, 2, 4, 3, 9, 8, 12, 16, 6, 18.

Si può verificare che $F(6) = 5$, $F(8) = 9$, $F(20) = 450$ e $F(1000) ≈ 8.8521816557e\\,21$.

Trova $F({10}^{18})$. Dai come risposta una stringa nella sua notazione scientifica arrotondata a dieci cifre dopo il punto decimale. Quando fornisci la tua risposta, usa una `e` minuscola per separare mantissa ed esponente. Ad es. se la risposta è $112\\,233\\,445\\,566\\,778\\,899$ allora il formato della risposta sarebbe `1.1223344557e17`.

# --hints--

`permutationOf3SmoothNumbers()` dovrebbe restituire una stringa.

```js
assert.strictEqual(typeof permutationOf3SmoothNumbers() === 'string');
```

`permutationOf3SmoothNumbers()` dovrebbe restituire la stringa `5.5350769703e1512`.

```js
assert.strictEqual(permutationOf3SmoothNumbers(), '5.5350769703e1512');
```

# --seed--

## --seed-contents--

```js
function permutationOf3SmoothNumbers() {

  return true;
}

permutationOf3SmoothNumbers();
```

# --solutions--

```js
// solution required
```
