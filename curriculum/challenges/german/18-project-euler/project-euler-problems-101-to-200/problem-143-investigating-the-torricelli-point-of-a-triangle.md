---
id: 5900f3fc1000cf542c50ff0e
title: 'Problem 143: Den Fermat-Punkt eines Dreiecks ermitteln'
challengeType: 1
forumTopicId: 301772
dashedName: problem-143-investigating-the-torricelli-point-of-a-triangle
---

# --description--

Lasse ABC ein Dreieck sein, bei dem alle Innenwinkel kleiner als 120 Grad sind. Lasse X ein beliebiger Punkt innerhalb des Dreiecks sein und lasse $XA = p$, $XC = q$, und $XB = r$ sein.

Fermat forderte Torricelli auf, die Position von X so zu finden, dass p + q + r minimiert wird.

Torricelli konnte beweisen, dass, wenn auf jeder Seite des Dreiecks ABC gleichseitige Dreiecke AOB, BNC und AMC konstruiert werden, sich die umschriebenen Kreise von AOB, BNC und AMC in einem einzigen Punkt T innerhalb des Dreiecks schneiden. Außerdem bewies er, dass T, der sogenannte Torricelli/Fermat-Punkt, $p + q + r$ minimiert. Noch bemerkenswerter ist, dass sich bei Minimierung der Summe $AN = BM = CO = p + q + r$ ergibt und dass sich AN, BM und CO auch bei T schneiden.

<img class="img-responsive center-block" alt="gleichseitige Dreiecke AOB, BNC und AMC, die auf jeder Seite des Dreiecks ABC konstruiert werden, wobei sich die Umkreise von AOB, BNC und AMC in einem einzigen Punkt T innerhalb des Dreiecks schneiden werden" src="https://cdn.freecodecamp.org/curriculum/project-euler/investigating-the-torricelli-point-of-a-triangle.png" style="background-color: white; padding: 10px;" />

Wenn die Summe minimiert ist und a, b, c, p, q und r alles positive Integer sind, nennen wir das Dreieck ABC ein Torricelli-Dreieck. Zum Beispiel ist $a = 399$, $b = 455$, $c = 511$ ein Beispiel für ein Torricelli-Dreieck, mit $p + q + r = 784$. Finde die Summe aller unterschiedlichen Werte von $p + q + r ≤ 120000$ für Torricelli-Dreiecke.

# --hints--

`sumTorricelliTriangles()` sollte `30758397` zurückgeben.

```js
assert.strictEqual(sumTorricelliTriangles(), 30758397);
```

# --seed--

## --seed-contents--

```js
function sumTorricelliTriangles() {

  return true;
}

sumTorricelliTriangles();
```

# --solutions--

```js
// solution required
```
