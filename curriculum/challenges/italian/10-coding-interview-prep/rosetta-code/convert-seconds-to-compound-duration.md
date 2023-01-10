---
id: 596fd036dc1ab896c5db98b1
title: Convertire secondi in durata composta
challengeType: 1
forumTopicId: 302236
dashedName: convert-seconds-to-compound-duration
---

# --description--

Implementa una funzione che:

<ul>
  <li>accetta un numero intero positivo che rappresenta una durata in secondi come input (ad esempio, <code>100</code>), e</li>
  <li>restituisce una stringa che mostra la stessa durata decomposta in settimane, giorni, ore, minuti e secondi come dettagliato sotto (per esempio, <code>1 min, 40 sec</code>).</li>
</ul>

Dimostra che passi i seguenti tre casi:

<div style='font-size:115%; font-weight: bold;'>Test</div>

| Numero di input | Numero di output          |
| --------------- | ------------------------- |
| 7259            | <code>2 hr, 59 sec</code> |
| 86400           | <code>1 d</code> |
| 6000000         | <code>9 wk, 6 d, 10 hr, 40 min</code> |

<div style="font-size:115%; font-weight: bold;">Dettagli</div>
<ul>
  <li>
    Le seguenti cinque unita dovrebbero essere usate:

| Unità   | Suffisso usato in output | Conversione            |
| ------ | --------------------- | --------------------- |
| settimana   |!!crwdBlockTags_18_sgaTkcolBdwrc!!       | 1 settimana = 7 giorni       |
| giorno    |!!crwdBlockTags_19_sgaTkcolBdwrc!!        | 1 giorno = 24 ore      |
| ora   |!!crwdBlockTags_20_sgaTkcolBdwrc!!       | 1 ora = 60 minuti   |
| minuti |!!crwdBlockTags_21_sgaTkcolBdwrc!!      | 1 minuto = 60 secondi |
| second |!!crwdBlockTags_22_sgaTkcolBdwrc!!      | ---                   |

  </li>
  <li>
    Però, includi <strong>solo</strong> quantità con valori non-zero nell'output (per esempio restituisce<code>1 d</code> e non <code>0 wk, 1 d, 0 hr, 0 min, 0 sec</code>).
  </li>
  <li>
    Dai la precedenza alle unità più grandi il più possibile (per esempio, restituisci <code>2 min, 10 sec</code> e non <code>1 min, 70 sec</code> o <code>130 sec</code>).
  </li>
  <li>
    Mimica il formato mostrato nell'esempio (quantità in ordine dalla più grande alla più piccola e separate da virgola e spazio, valore e unità di ogni quantità separate da uno spazio).
  </li>
</ul>

# --hints--

`convertSeconds` dovrebbe essere una funzione.

```js
assert(typeof convertSeconds === 'function');
```

`convertSeconds(7259)` dovrebbe restituire `2 hr, 59 sec`.

```js
assert.equal(convertSeconds(testCases[0]), results[0]);
```

`convertSeconds(86400)` dovrebbe restituire `1 d`.

```js
assert.equal(convertSeconds(testCases[1]), results[1]);
```

`convertSeconds(6000000)` dovrebbe restituire `9 wk, 6 d, 10 hr, 40 min`.

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
