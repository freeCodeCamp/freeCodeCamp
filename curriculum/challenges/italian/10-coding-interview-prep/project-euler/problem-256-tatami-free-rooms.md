---
id: 5900f46c1000cf542c50ff7e
title: 'Problema 256: Stanze senza tatami'
challengeType: 1
forumTopicId: 301904
dashedName: problem-256-tatami-free-rooms
---

# --description--

I Tatami sono stuoie rettangolari, utilizzate per coprire completamente il pavimento di una stanza, senza sovrapposizioni.

Supponendo che l'unico tipo di tatami disponibile abbia dimensioni 1×2, ci sono ovviamente alcune limitazioni per la forma e le dimensioni delle camere che possono essere coperte.

Per questo problema, consideriamo solo le stanze rettangolari con dimensioni intere $a$, $b$ e anche la dimensione $s = a \times b$. Usiamo il termine 'dimensione' per indicare la superficie del pavimento della stanza, e — senza perdita di generalità — aggiungiamo la condizione $a ≤ b$.

C'è una regola da seguire quando si posa il tatami: non ci devono essere punti in cui gli angoli di quattro tappeti diversi si incontrano. Per esempio, considerare le due disposizioni qui sotto per una stanza di dimensioni 4×4:

<img class="img-responsive center-block" alt="due disposizioni di tatami in una stanza 4x4" src="https://cdn.freecodecamp.org/curriculum/project-euler/tatami-free-rooms.gif" style="background-color: white; padding: 10px;" />

La disposizione a sinistra è accettabile, mentre quello a destra non lo è: una "<strong><span style="color: red;">X</span></strong>" rossa nel mezzo segna il punto in cui si incontrano quattro tatami.

A causa di questa regola, certe stanze di dimensioni pari non possono essere coperte con tatami: li chiamiamo stanze senza tatami. Inoltre, definiamo $T(s)$ come il numero di stanze senza tatami di dimensione $s$.

La più piccola camera senza tatami ha dimensioni $s = 70$ e dimensioni 7×10. Tutte le altre stanze della dimensione $s = 70$ possono essere coperte con tatami; sono: 1×70, 2×35 e 5×14. Quindi, $T(70) = 1$.

Allo stesso modo, possiamo verificare che $T(1320) = 5$ perché ci sono esattamente 5 stanze senza tatami di dimensioni $s = 1320$: 20×66, 22×60, 24×55, 30×44 e 33×40. Infatti, $s = 1320$ è la dimensione della stanza più piccola $s$ per cui $T(s) = 5$.

Trova la dimensione della stanza più piccola $s$ per cui $T(s) = 200$.

# --hints--

`tatamiFreeRooms()` dovrebbe restituire `85765680`.

```js
assert.strictEqual(tatamiFreeRooms(), 85765680);
```

# --seed--

## --seed-contents--

```js
function tatamiFreeRooms() {

  return true;
}

tatamiFreeRooms();
```

# --solutions--

```js
// solution required
```
