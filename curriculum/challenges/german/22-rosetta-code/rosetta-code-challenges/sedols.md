---
id: 59d9c6bc214c613ba73ff012
title: SEDOLs
challengeType: 1
forumTopicId: 302305
dashedName: sedols
---

# --description--

<abbr title="Stock Exchange Daily Official List">SEDOL</abbr> is a list of securities identification numbers issued by the London Stock Exchange.

Für jede Nummernliste der 6-stelligen <abbr title="Stock Exchange Daily Official List">SEDOL</abbr> wird die Prüfziffer berechnet und angehängt. Das heißt, dass deine Funktion bei der Eingabe der Zeichenfolge auf der linken Seite die entsprechende Zeichenfolge auf der rechten Seite zurückgeben sollte:

<pre>
710889 => 7108899
B0YBKJ => B0YBKJ7
406566 => 4065663
B0YBLH => B0YBLH2
228276 => 2282765
B0YBKL => B0YBKL9
557910 => 5579107
B0YBKR => B0YBKR5
585284 => 5852842
B0YBKT => B0YBKT7
B00030 => B000300
</pre>

Prüfe, ob jede Eingabe korrekt geformt ist, insbesondere im Hinblick auf die zulässigen Zeichen in einer SEDOL-Zeichenfolge. Ihre Funktion sollte bei einer ungültigen Eingabe `null` zurückgeben.

# --hints--

`sedol` sollte eine Funktion sein.

```js
assert(typeof sedol === 'function');
```

`sedol('a')` sollte null zurückgeben.

```js
assert(sedol('a') === null);
```

`sedol('710889')` sollte '7108899' zurückgeben.

```js
assert(sedol('710889') === '7108899');
```

`sedol('BOATER')` sollte null zurückgeben.

```js
assert(sedol('BOATER') === null);
```

`sedol('228276')` sollte '2282765' zurückgeben.

```js
assert(sedol('228276') === '2282765');
```

# --seed--

## --seed-contents--

```js
function sedol(input) {
  const checkSum = 0

  return checkSum;
}
```

# --solutions--

```js
function sedol(input) {
  const checkDigit = sedolCheckDigit(input);
  if (checkDigit !== null) {
    return input + checkDigit;
  }
  return null;
}

const weight = [1, 3, 1, 7, 3, 9, 1];
function sedolCheckDigit(char6) {
  if (char6.search(/^[0-9BCDFGHJKLMNPQRSTVWXYZ]{6}$/) === -1) {
    return null;
  }

  let sum = 0;
  for (let i = 0; i < char6.length; i++) {
    sum += weight[i] * parseInt(char6.charAt(i), 36);
  }
  const checkSum = (10 - (sum % 10)) % 10;
  return checkSum.toString();
}
```
