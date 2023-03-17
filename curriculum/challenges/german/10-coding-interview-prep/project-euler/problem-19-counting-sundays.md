---
id: 5900f37f1000cf542c50fe92
title: 'Problem 19: Sonntage zählen'
challengeType: 1
forumTopicId: 301827
dashedName: problem-19-counting-sundays
---

# --description--

Wir stellen dir folgende Informationen bereit, vielleicht möchtest du aber auch selbst recherchieren.

<ul>
  <li>Der 1. Januar 1900 war ein Montag.</li>
  <li>September, April, Juni<br>und November haben dreizig Tage.<br>Alle anderen einunddreißig,<br>nur der Februar hat, bei<br>jedem Wetter, achtundzwanzig.<br>Und in Schaltjahren neunundzwanzig.</li>
  <li>Jedes, glatt durch 4 teilbares Jahr ist ein Schaltjahr – es sei denn, es handelt sich bei dem Jahr um den Anfang eines Jahrhunderts, dann muss die Zahl durch 400 teilbar sein.</li>
</ul>

Wie viele Sonntage fielen im zwanzigsten Jahrhundert (1. Januar 1901 bis 31. Dezember 2000) auf den Ersten des Monats?

# --hints--

`countingSundays(1943, 1946)` sollte eine Zahl zurückgeben.

```js
assert(typeof countingSundays(1943, 1946) === 'number');
```

`countingSundays(1943, 1946)` sollte 6 zurückgeben.

```js
assert.strictEqual(countingSundays(1943, 1946), 6);
```

`countingSundays(1995, 2000)` sollte 10 zurückgeben.

```js
assert.strictEqual(countingSundays(1995, 2000), 10);
```

`countingSundays(1901, 2000)` sollte 171 zurückgeben.

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
