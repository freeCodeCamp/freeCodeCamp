---
id: 5900f4cd1000cf542c50ffdf
title: 'Problem 352: Blood tests'
challengeType: 1
forumTopicId: 302012
dashedName: problem-352-blood-tests
---

# --description--

Each one of the 25 sheep in a flock must be tested for a rare virus, known to affect 2% of the sheep population.

Es gibt einen genauen und äußerst empfindlichen PCR-Test für Blutproben, der ein eindeutiges positives/negatives Ergebnis liefert, aber er ist sehr zeitaufwändig und teuer.

Wegen der hohen Kosten schlägt der verantwortliche Tierarzt vor, statt 25 separater Tests das folgende Verfahren zu verwenden:

Die Schafe werden in 5 Gruppen zu je 5 Schafen aufgeteilt. Für jede Gruppe werden die 5 Proben zusammengemischt und ein einziger Test wird durchgeführt. Then,

- If the result is negative, all the sheep in that group are deemed to be virus-free.
- If the result is positive, 5 additional tests will be performed (a separate test for each animal) to determine the affected individual(s).

Da die Wahrscheinlichkeit einer Infektion für ein bestimmtes Tier nur 0,02 beträgt, lautet der erste Test (an den Sammelproben) für jede Gruppe:

- Negative (and no more tests needed) with probability ${0.98}^5 = 0.9039207968$.
- Positiv (5 zusätzliche Tests erforderlich) mit einer Wahrscheinlichkeit von $1 - 0,9039207968 = 0,0960792032$.

Die erwartete Anzahl von Tests für jede Gruppe ist also 1 $ + 0,0960792032 × 5 = 1,480396016$.

Folglich können alle 5 Gruppen mit durchschnittlich nur $1,480396016 × 5 = \mathbf{7.40198008}$ Tests untersucht werden, was eine enorme Einsparung von mehr als 70% bedeutet!

Obwohl das soeben beschriebene Schema sehr effizient zu sein scheint, kann es noch erheblich verbessert werden (immer unter der Voraussetzung, dass der Test ausreichend empfindlich ist und keine nachteiligen Auswirkungen durch das Mischen verschiedener Proben verursacht werden). E.g.:

- We may start by running a test on a mixture of all the 25 samples. It can be verified that in about 60.35% of the cases this test will be negative, thus no more tests will be needed. Further testing will only be required for the remaining 39.65% of the cases.
- Wenn wir wissen, dass mindestens ein Tier in einer Gruppe von 5 Tieren infiziert ist und die ersten 4 Einzeltests negativ ausfallen, brauchen wir das fünfte Tier nicht zu testen (wir wissen, dass es infiziert sein muss).
- Wir können eine unterschiedliche Anzahl von Gruppen / eine unterschiedliche Anzahl von Tieren in jeder Gruppe ausprobieren und diese Zahlen auf jeder Ebene so anpassen, dass die erwartete Gesamtzahl von Tests minimiert wird.

Zur Vereinfachung des sehr breiten Spektrums an Möglichkeiten gibt es eine Einschränkung, die wir bei der Ausarbeitung des kosteneffizientesten Testschemas machen: Immer wenn wir mit einer gemischten Probe beginnen, müssen alle Schafe, die zu dieser Probe beitragen, vollständig gescreent werden (d. h. es muss ein Urteil über infiziert/virusfrei für alle von ihnen erreicht werden), bevor wir mit der Untersuchung anderer Tiere beginnen.

Für das aktuelle Beispiel zeigt sich, dass das kosteneffizienteste Testschema (wir nennen es die optimale Strategie) durchschnittlich nur <strong>4,155452</strong> Tests erfordert!

Unter Verwendung der optimalen Strategie sei $T(s, p)$ die durchschnittliche Anzahl von Tests, die erforderlich ist, um eine Herde von $s$ Schafen auf ein Virus zu untersuchen, das mit einer Wahrscheinlichkeit $p$ in jedem Individuum vorhanden ist. Thus, rounded to six decimal places, $T(25, 0.02) = 4.155452$ and $T(25, 0.10) = 12.702124$.

Find $\sum T(10\\,000, p)$ for $p = 0.01, 0.02, 0.03, \ldots 0.50$. Give your answer rounded to six decimal places.

# --hints--

`bloodTests()` should return `378563.260589`.

```js
assert.strictEqual(bloodTests(), 378563.260589);
```

# --seed--

## --seed-contents--

```js
function bloodTests() {

  return true;
}

bloodTests();
```

# --solutions--

```js
// solution required
```
