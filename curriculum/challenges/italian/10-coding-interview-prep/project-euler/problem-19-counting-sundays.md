---
id: 5900f37f1000cf542c50fe92
title: 'Problema 19: Contando le domeniche'
challengeType: 1
forumTopicId: 301827
dashedName: problem-19-counting-sundays
---

# --description--

Ti sono fornite le seguenti informazioni, ma potresti voler fare un po' di ricerca per conto tuo.

<ul>
  <li>Il 1 Gennaio 1900 era un lunedì.</li>
  <li>Trenta giorni a novembre,<br>con april, giugno e settembre,<br>di ventotto ce n'è uno,<br>tutti gli altri ne han trentuno.</li>
  <li>Un anno bisestile si verifica su qualsiasi anno divisibile per 4, ma non in un anno divisibile per 100 a meno che non sia divisibile per 400.</li>
</ul>

Quante domeniche sono cadute il primo del mese durante il ventesimo secolo (dal 1 Gen 1901 al 31 Dic 2000)?

# --hints--

`countingSundays(1943, 1946)` dovrebbe restituire un numero.

```js
assert(typeof countingSundays(1943, 1946) === 'number');
```

`countingSundays(1943, 1946)` dovrebbe restituire 6.

```js
assert.strictEqual(countingSundays(1943, 1946), 6);
```

`countingSundays(1995, 2000)` dovrebbe restituire 10.

```js
assert.strictEqual(countingSundays(1995, 2000), 10);
```

`countingSundays(1901, 2000)` dovrebbe restituire 171.

```js
assert.strictEqual(countingSundays(1901, 2000), 171);
```

# --seed--

## --seed-contents--

```js
function countingSundays(firstYear, lastYear) {

  return true;
}

countingSundays(1943, 1946);
```

# --solutions--

```js
function countingSundays(firstYear, lastYear) {
  let sundays = 0;

  for (let year = firstYear; year <= lastYear; year++) {
    for (let month = 0; month <= 11; month++) {
      const thisDate = new Date(year, month, 1);
      if (thisDate.getDay() === 0) {
        sundays++;
      }
    }
  }
  return sundays;
}
```
