---
id: 5949b579404977fbaefcd736
title: 9 Milliarden Namen von "God the Integer"
challengeType: 1
forumTopicId: 302219
dashedName: 9-billion-names-of-god-the-integer
---

# --description--

This task is a variation of the short story by Arthur C. Clarke.

(Die Teilnehmer sollten sich über die Folgen der Lösung dieser Aufgabe im Klaren sein)

Was genau ist die Bedeutung von einem "Namen":

<ul>
  <li>The integer 1 has 1 name "1".</li>
  <li>Der Integer 2 hat 2 Namen "1+1" und "2".</li>
  <li>Der Integer 3 hat 3 Namen "1+1+1", "2+1" und "3".</li>
  <li>Der Integer 4 hat 5 Namen "1+1+1+1", "2+1+1", "2+2", "3+1", "4".</li>
  <li>Der Integer 5 hat 7 Namen "1+1+1+1+1+1", "2+1+1+1", "2+2+1", "3+1+1", "3+2", "4+1", "5".</li>
</ul>

Dies kann in folgender Form dargestellt werden:

<pre>          1
        1   1
      1   1   1
    1   2   1   1
  1   2   2   1   1
1   3   3   2   1   1
</pre>

Dabei entspricht die Zeile $n$ der ganzen Zahl $n$, und jede Spalte $C$ in der Zeile $m$ von links nach rechts entspricht der Anzahl der mit $C$ beginnenden Namen.

Optional ist zu beachten, dass die Summe der $n$-ten Zeile $P(n)$ die ganzzahlige Partitionsfunktion ist.

# --instructions--

Implementiere eine Funktion, die die Summe der $n$-ten Zeile zurückgibt.

# --hints--

`numberOfNames` sollte eine Funktion sein.

```js
assert(typeof numberOfNames === 'function');
```

`numberOfNames(5)` sollte gleich 7 sein.

```js
assert.equal(numberOfNames(5), 7);
```

`numberOfNames(12)` sollte gleich 77 sein.

```js
assert.equal(numberOfNames(12), 77);
```

`numberOfNames(18)` sollte gleich 385 sein.

```js
assert.equal(numberOfNames(18), 385);
```

`numberOfNames(23)` sollte gleich 1255 sein.

```js
assert.equal(numberOfNames(23), 1255);
```

`numberOfNames(42)` sollte gleich 53174 sein.

```js
assert.equal(numberOfNames(42), 53174);
```

`numberOfNames(123)` sollte gleich 2552338241 sein.

```js
assert.equal(numberOfNames(123), 2552338241);
```

# --seed--

## --seed-contents--

```js
function numberOfNames(num) {

  return true;
}
```

# --solutions--

```js
function numberOfNames(num) {
  const cache = [
    [1]
  ];
  for (let l = cache.length; l < num + 1; l++) {
    let Aa;
    let Mi;
    const r = [0];
    for (let x = 1; x < l + 1; x++) {
      r.push(r[r.length - 1] + (Aa = cache[l - x < 0 ? cache.length - (l - x) : l - x])[(Mi = Math.min(x, l - x)) < 0 ? Aa.length - Mi : Mi]);
    }
    cache.push(r);
  }
  return cache[num][cache[num].length - 1];
}
```
