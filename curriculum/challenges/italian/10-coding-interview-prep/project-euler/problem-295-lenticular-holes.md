---
id: 5900f4931000cf542c50ffa6
title: 'Problema 295: Fori lenticolari'
challengeType: 1
forumTopicId: 301947
dashedName: problem-295-lenticular-holes
---

# --description--

Chiamiamo l'area convessa racchiusa da due cerchi un foro lenticolare se:

- I centri di entrambi i cerchi sono su punti del reticolo.
- I due cerchi si intersecano in due distinti punti di reticolo.
- L'interno dell'area convessa racchiusa da entrambi i cerchi non contiene punti di reticolo.

Considera i cerchi:

$$\begin{align}   & C_0: x^2 + y^2 = 25 \\\\
  & C_1: {(x + 4)}^2 + {(y - 4)}^2 = 1 \\\\ & C_2: {(x - 12)}^2 + {(y - 4)}^2 = 65 \end{align}$$

I cerchi $C_0$, $C_1$ e $C_2$ sono disegnati nell'immagine sottostante.

<img class="img-responsive center-block" alt="cerchi C_0, C_1 e C_2" src="https://cdn.freecodecamp.org/curriculum/project-euler/lenticular-holes.gif" style="background-color: white; padding: 10px;" />

$C_0$ e $C_1$ formano un foro lenticolare, così come $C_0$ e $C_2$.

Chiamiamo una coppia ordinata di numeri reali positivi ($r_1$, $r_2$) una coppia lenticolare se esistono due cerchi con raggi $r_1$ e $r_2$ che formano un foro lenticolare. Possiamo verificare che ($1$, $5$) e ($5$, $\sqrt{65}$) sono le coppie lenticolari dell'esempio sopra.

Sia $L(N)$ il numero di coppie lenticolari distinte ($r_1$, $r_2$) per le quali $0 &lt; r_1 ≤ r_2 ≤ N$. Possiamo verificare che $L(10) = 30$ e $L(100) = 3442$.

Trova $L(100\\,000)$.

# --hints--

`lenticularHoles()` dovrebbe restituire `4884650818`.

```js
assert.strictEqual(lenticularHoles(), 4884650818);
```

# --seed--

## --seed-contents--

```js
function lenticularHoles() {

  return true;
}

lenticularHoles();
```

# --solutions--

```js
// solution required
```
