---
id: 596fd036dc1ab896c5db98b1
title: Convert seconds to compound duration
challengeType: 1
forumTopicId: 302236
dashedName: convert-seconds-to-compound-duration
---

# --description--

Implement a function which:

<ul>
  <li>takes a positive integer representing a duration in seconds as input (e.g., <code>100</code>), and</li>
  <li>gibt einen String zurück, der dieselbe Dauer in Wochen, Tage, Stunden, Minuten und Sekunden zerlegt, wie unten beschrieben (z.B. <code>1 min, 40 sec</code>).</li>
</ul>

Zeige, dass es die folgenden drei Testfälle besteht:

<div style='font-size:115%; font-weight: bold;'>Testfälle</div>

| Input number | Nummer der Ausgabe        |
| ------------ | ------------------------- |
| 7259         | <code>2 hr, 59 sec</code> |
| 86400        | <code>1 d</code> |
| 6000000      | <code>9 wk, 6 d, 10 hr, 40 min</code> |

<div style="font-size:115%; font-weight: bold;">Details</div>
<ul>
  <li>
    The following five units should be used:

| Unit   | Suffix used in Output | Conversion            |
| ------ | --------------------- | --------------------- |
| week   | <code>wk</code>       | 1 week = 7 days       |
| day    | <code>d</code>        | 1 day = 24 hours      |
| hour   | <code>hr</code>       | 1 hour = 60 minutes   |
| minute | <code>min</code>      | 1 minute = 60 seconds |
| second | <code>sec</code>      | ---                   |

  </li>
  <li>
    Es werden jedoch <strong>only</strong> Mengen mit Werten ungleich Null in die Ausgabe aufgenommen (z.B. <code>1 d</code> zurückgeben und nicht <code>0 wk, 1 d, 0 hr, 0 min, 0 sec</code>).
  </li>
  <li>
    Gib größeren Einheiten so weit wie möglich den Vorrang vor kleineren Einheiten (z.B., gib <code>2 min, 10 sec</code> zurück und nicht <code>1 min, 70 sec</code> or <code>130 sec</code>).
  </li>
  <li>
    Übernehme die in den Testfällen gezeigte Formatierung (Mengen sortiert von der größten zur kleinsten Einheit und getrennt durch Komma+Leerzeichen; Wert und Einheit jeder Menge getrennt durch Leerzeichen).
  </li>
</ul>

# --hints--

`convertSeconds` sollte eine Funktion sein.

```js
assert(typeof convertSeconds === 'function');
```

`convertSeconds(7259)` sollte `2 hr, 59 sec` zurückgeben.

```js
assert.equal(convertSeconds(testCases[0]), results[0]);
```

`convertSeconds(86400)` sollte `1 d` zurückgeben.

```js
assert.equal(convertSeconds(testCases[1]), results[1]);
```

`convertSeconds(6000000)` sollte `9 wk, 6 d, 10 hr, 40 min` zurückgeben.

```js
assert.equal(convertSeconds(testCases[2]), results[2]);
```

# --seed--

## --after-user-code--

```js
const testCases = [7259, 86400, 6000000];
const results = ['2 hr, 59 sec', '1 d', '9 wk, 6 d, 10 hr, 40 min'];
```

## --seed-contents--

```js
function convertSeconds(sec) {

  return true;
}
```

# --solutions--

```js
function convertSeconds(sec) {
  const localNames = ['wk', 'd', 'hr', 'min', 'sec'];
  // compoundDuration :: [String] -> Int -> String
  const compoundDuration = (labels, intSeconds) =>
    weekParts(intSeconds)
    .map((v, i) => [v, labels[i]])
    .reduce((a, x) =>
      a.concat(x[0] ? [`${x[0]} ${x[1] || '?'}`] : []), []
    )
    .join(', ');

    // weekParts :: Int -> [Int]
  const weekParts = intSeconds => [0, 7, 24, 60, 60]
    .reduceRight((a, x) => {
      const r = a.rem;
      const mod = x !== 0 ? r % x : r;

      return {
        rem: (r - mod) / (x || 1),
        parts: [mod].concat(a.parts)
      };
    }, {
      rem: intSeconds,
      parts: []
    })
    .parts;

  return compoundDuration(localNames, sec);
}
```
