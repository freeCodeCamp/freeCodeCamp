---
id: 5900f46e1000cf542c50ff80
title: 'Problema 257: Bisettrici angolari'
challengeType: 1
forumTopicId: 301905
dashedName: problem-257-angular-bisectors
---

# --description--

Ti viene dato un triangolo con lati interi $ABC$ con lati $a ≤ b ≤ c$ ($AB = c$, $BC = a$ e $AC = b$).

Le bisettrici angolari del triangolo intersecano i lati ai punti $E$, $F$ e $G$ (vedi la figura sotto).

<img class="img-responsive center-block" alt="triangolo ABC, con bisettrici angolari intersecanti i lati ai punti E, F e G" src="https://cdn.freecodecamp.org/curriculum/project-euler/angular-bisectors.gif" style="background-color: white; padding: 10px;" />

I segmenti $EF$, $EG$, e $FG$, sezionano il triangolo $ABC$ in quattro triangoli più piccoli: $AEG$, $BFE$, $CGF$ e $EFG$. Si può provare che per ognuno di questi quattro triangoli il rapporto $\frac{\text{area}(ABC)}{\text{area}(\text{sottotriangolo})}$ è razionale. Eppure, ci sono alcuni triangoli per cui alcuni o tutti di questi rapporti sono numeri interi.

Quanti triangoli $ABC$ con perimetro $≤ 100\\,000\\,000$ esistono in modo tale che il rapporto $\frac{\text{area}(ABC)}{\text{area}(AEG)}$ sia un numero intero?

# --hints--

`angularBisectors()` dovrebbe restituire `139012411`.

```js
assert.strictEqual(angularBisectors(), 139012411);
```

# --seed--

## --seed-contents--

```js
function angularBisectors() {

  return true;
}

angularBisectors();
```

# --solutions--

```js
// solution required
```
