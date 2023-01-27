---
id: 5900f5131000cf542c510025
title: 'Problema 422: Sequenza di punti su un''iperbole'
challengeType: 1
forumTopicId: 302092
dashedName: problem-422-sequence-of-points-on-a-hyperbola
---

# --description--

Sia $H$ l'iperbole definita dall'equazione $12x^2 + 7xy - 12y^2 = 625$.

Definiamo $X$ come il punto (7, 1). Si può vedere che $X$ è in $H$.

Ora definiamo una sequenza di punti in $H, \\{P_i : i ≥ 1\\}$:

- $P_1 = (13, \frac{61}{4})$.
- $P_2 = (\frac{-43}{6}, -4)$.
- Per $i > 2$, $P_i$ è il punto unico in $H$ che è diverso da $P_{i - 1}$ e tale che la linea $P_iP_{i - 1}$ sia parallela alla linea $P_{i - 2}X$. Può essere dimostrato che $P_i$ è ben definito, e che le sue coordinate sono sempre razionali.

<img class="img-responsive center-block" alt="animazione che mostra i punti di definizione da P_1 a P_6" src="https://cdn.freecodecamp.org/curriculum/project-euler/sequence-of-points-on-a-hyperbola.gif" style="background-color: white; padding: 10px;" />

Sia $P_3 = (\frac{-19}{2}, \frac{-229}{24})$, $P_4 = (\frac{1267}{144}, \frac{-37}{12})$ e $P_7 = (\frac{17\\,194\\,218\\,091}{143\\,327\\,232}, \frac{274\\,748\\,766\\,781}{1\\,719\\,926\\,784})$.

Trova $P_n$ per $n = {11}^{14}$ nel seguente formato: Se $P_n = (\frac{a}{b}, \frac{c}{d})$ dove le frazioni sono in termini più bassi e i denominatori sono positivi, allora la risposta è $(a + b + c + d)\bmod 1\\,000\\,000\\,007$.

Per $n = 7$, la risposta sarebbe stata: $806\\,236\\,837$.

# --hints--

`sequenceOfPointsOnHyperbola()` dovrebbe restituire `92060460`.

```js
assert.strictEqual(sequenceOfPointsOnHyperbola(), 92060460);
```

# --seed--

## --seed-contents--

```js
function sequenceOfPointsOnHyperbola() {

  return true;
}

sequenceOfPointsOnHyperbola();
```

# --solutions--

```js
// solution required
```
