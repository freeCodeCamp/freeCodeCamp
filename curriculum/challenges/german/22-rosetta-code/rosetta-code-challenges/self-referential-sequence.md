---
id: 5eb3e4a21f462f409d656c73
title: Selbstreferentielle Sequenz
challengeType: 1
forumTopicId: 385317
dashedName: self-referential-sequence
---

# --description--

There are several ways to generate a self-referential sequence. One very common one (the <a href="https://rosettacode.org/wiki/Look-and-say_sequence" target="_blank" rel="noopener noreferrer nofollow">Look-and-say sequence</a>) is to start with a positive integer, then generate the next term by concatenating enumerated groups of adjacent alike digits:

<pre>0, 10, 1110, 3110, 132110, 1113122110, 311311222110 ...</pre>

Die erzeugten Begriffe wachsen geometrisch in die Länge und nähern sich nie einander.

Eine andere Möglichkeit, eine selbstreferentielle Sequenz zu erzeugen, besteht darin, den vorherigen Begriff zusammenzufassen.

Zähle, wie viele gleichartige Ziffern es gibt, und verkette dann die Summe und die Ziffer für jede der sortierten Ziffern. Beachte, dass die ersten fünf Begriffe dieselben sind wie bei der vorherigen Folge.

<pre>0, 10, 1110, 3110, 132110, 13123110, 23124110 ...</pre>

Sortiere die Ziffern von groß nach klein. Zähle keine Ziffern mit, die im vorherigen Begriff nicht vorkommen.

Je nach Startwert konvergieren die so erzeugten Reihen immer entweder zu einem stabilen Wert oder zu einem kurzen zyklischen Muster. (Für unsere Zwecke bedeutet "konvergieren", dass ein Element mit einem zuvor gesehenen Element übereinstimmt.) Die gezeigte Sequenz, mit einem Startwert von 0, konvergiert nach 11 Iterationen zu einem stabilen Wert von 1433223110. Der Startwert, der am schnellsten konvergiert, ist 22. Sie wird nach dem ersten Element stabil. (Das nächste Element, das schon einmal gesehen wurde, ist 22.)

# --instructions--

Schreibe eine Funktion, die den Startwert als Parameter nimmt, eine selbstreferenzielle Sequenz erzeugt, bis sie konvergiert, und diese als Array zurückgibt.

# --hints--

`selfReferential` sollte eine Funktion sein.

```js
assert(typeof selfReferential === 'function');
```

`selfReferential(40)` sollte ein Array zurückgeben.

```js
assert(Array.isArray(selfReferential(40)));
```

`selfReferential(40)` sollte `["40", "1410", "142110", "14123110", "1413124110", "2413125110", "151413224110", "152413225110", "251413324110", "152423224110", "152413423110"]` zurückgeben.

```js
assert.deepEqual(selfReferential(40), [
  '40',
  '1410',
  '142110',
  '14123110',
  '1413124110',
  '2413125110',
  '151413224110',
  '152413225110',
  '251413324110',
  '152423224110',
  '152413423110'
]);
```

`selfReferential(132110)` sollte `["132110", "13123110", "23124110", "1413223110", "1423224110", "2413323110", "1433223110"]` zurückgeben.

```js
assert.deepEqual(selfReferential(132110), [
  '132110',
  '13123110',
  '23124110',
  '1413223110',
  '1423224110',
  '2413323110',
  '1433223110'
]);
```

`selfReferential(132211)` sollte `["132211", "132231", "232221", "134211", "14131231", "14231241", "24132231", "14233221"]` zurückgeben.

```js
assert.deepEqual(selfReferential(132211), [
  '132211',
  '132231',
  '232221',
  '134211',
  '14131231',
  '14231241',
  '24132231',
  '14233221'
]);
```

`selfReferential(1413223110)` sollte `["1413223110", "1423224110", "2413323110", "1433223110"]` zurückgeben.

```js
assert.deepEqual(selfReferential(1413223110), [
  '1413223110',
  '1423224110',
  '2413323110',
  '1433223110'
]);
```

`selfReferential(251413126110)` sollte `["251413126110", "16151413225110", "16251413226110", "26151413325110", "16251423225110", "16251413424110", "16153413225110"]` zurückgeben.

```js
assert.deepEqual(selfReferential(251413126110), [
  '251413126110',
  '16151413225110',
  '16251413226110',
  '26151413325110',
  '16251423225110',
  '16251413424110',
  '16153413225110'
]);
```

# --seed--

## --seed-contents--

```js
function selfReferential(n) {

}
```

# --solutions--

```js
function selfReferential(n) {
  var descending,
    i,
    incr,
    j,
    max_i,
    max_len,
    max_seq,
    seq,
    sequence,
    indexOf =
      [].indexOf ||
      function(item) {
        for (var i = 0, l = this.length; i < l; i++) {
          if (i in this && this[i] === item) return i;
        }
        return -1;
      };

  sequence = function(n) {
    var c, cnt, cnts, d, digit, i, j, l, len, new_cnts, ref, s, seq;
    cnts = {};
    ref = n.toString();
    for (j = 0, len = ref.length; j < len; j++) {
      c = ref[j];
      d = parseInt(c);
      incr(cnts, d);
    }
    seq = [ref];
    while (true) {
      s = '';
      for (i = l = 9; l >= 0; i = --l) {
        if (cnts[i]) {
          s += '' + cnts[i] + i;
        }
      }
      if (indexOf.call(seq, s) >= 0) {
        break;
      }
      seq.push(s);
      new_cnts = {};
      for (digit in cnts) {
        cnt = cnts[digit];
        incr(new_cnts, cnt);
        incr(new_cnts, digit);
      }
      cnts = new_cnts;
    }
    return seq;
  };

  incr = function(h, k) {
    if (h[k] == null) {
      h[k] = 0;
    }
    return (h[k] += 1);
  };

  descending = function(n) {
    var tens;
    if (n < 10) {
      return true;
    }
    tens = n / 10;
    if (n % 10 > tens % 10) {
      return false;
    }
    return descending(tens);
  };

  return sequence(n);
}
```
