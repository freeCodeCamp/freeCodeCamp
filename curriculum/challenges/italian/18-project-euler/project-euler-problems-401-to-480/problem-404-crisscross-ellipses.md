---
id: 5900f5001000cf542c510012
title: 'Problema 404: ellissi incrociate'
challengeType: 1
forumTopicId: 302072
dashedName: problem-404-crisscross-ellipses
---

# --description--

$E_a$ è un'ellisse con un'equazione della forma $x^2 + 4y^2 = 4a^2$.

$E_a'$ è l'immagine di $E_a$ ruotata di $θ$ gradi in senso antiorario attorno all'origine $O(0, 0)$ per $0° &lt; θ &lt; 90°$.

<img class="img-responsive center-block" alt="ellisse E_a e ellisse ruotata di θ gradi E_a'" src="https://cdn.freecodecamp.org/curriculum/project-euler/crisscross-ellipses.gif" style="background-color: white; padding: 10px;" />

$b$ è la distanza dall'origine dei due punti di intersezione più vicini all'origine e $c$ è la distanza degli altri due punti di intersezione.

Chiamiamo una terna ordinata ($a$, $b$, $c$) terna ellissoidale canonica se $a$, $b$ e $c$ sono numeri interi positivi.

Per esempio, (209, 247, 286) è una terna ellissoidale canonica.

Sia $C(N)$ il numero di terne ellissoidali canoniche distinte ($a$, $b$, $c$) per $a ≤ N$.

Si può verificare che $C({10}^3) = 7$, $C({10}^4) = 106$ e $C({10}^6) = 11\\,845$.

Trova $C({10}^{17})$.

# --hints--

`crisscrossEllipses()` dovrebbe restituire `1199215615081353`.

```js
assert.strictEqual(crisscrossEllipses(), 1199215615081353);
```

# --seed--

## --seed-contents--

```js
function crisscrossEllipses() {

  return true;
}

crisscrossEllipses();
```

# --solutions--

```js
// solution required
```
