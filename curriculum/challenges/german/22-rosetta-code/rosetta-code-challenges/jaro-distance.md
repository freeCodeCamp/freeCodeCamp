---
id: 5a23c84252665b21eecc7ec2
title: Jaro-Distanz
challengeType: 1
forumTopicId: 302292
dashedName: jaro-distance
---

# --description--

The Jaro distance is a measure of similarity between two strings. The higher the Jaro distance for two strings is, the more similar the strings are. The score is normalized such that `0` equates to no similarity and `1` is an exact match.

**Definition**

Die Jaro-Distanz \\( d_j \\) von zwei angegebenen Strings \\(s_1\\) und \\(s_2\\) ist

\\begin{align}d_j = \\begin{cases}0& & \\text{if }m=0 \\\\\\\\{\\frac {1}{3}}\\left({\\frac {m}{|s\_{1}|}}+{\\frac {m}{|s\_{2}|}}+{\\frac {m-t}{m}}\\right)& & \\text{otherwise}\\end{cases}\\end{align}

Wobei:

<ul>
  <li>\(m\) is the number of <i>matching characters</i>;</li>
  <li> \(t\) is half the number of <i>transpositions</i>.</li>
</ul>

Zwei Zeichen aus \\(s_1\\) bzw. \\(s_2\\) gelten nur dann als *übereinstimmend*, wenn sie gleich sind und nicht weiter als \\\(\\\ links\\lfloor\\\frac{\\\max(|s_1|,|s_2|)}{2}\\\rechts\rfloor-1\\).

Jedes Zeichen von \\(s_1\\) wird mit all seinen passenden Zeichen in \\(s_2\\) verglichen. Die Anzahl der übereinstimmenden Zeichen (aber mit unterschiedlicher Reihenfolge der Sequenz) geteilt durch 2 definiert die Anzahl von *Transpositionen*.

**Beispiel**

Bei den Zeichenketten \\(s_1\\) *DWAYNE* und \\(s_2\\) *DUANE* finden wir:

<ul>
  <li>\(m = 4\)</li>
  <li>\(|s_1| = 6\)</li>
  <li>\(|s_2| = 5\)</li>
  <li>\(t = 0\)</li>
</ul>

Wir finden eine Jaro-Punktzahl in Höhe von: \\(d_j = \\frac{1}{3}\\left(\\frac{4}{6} + \\frac{4}{5} + \\frac{4-0}{4}\\right) = 0.822\\).

# --instructions--

Schreibe eine Funktion, die zwei Strings als Parameter empfängt und die zugehörige Jaro-Distanz zurückgibt.

# --hints--

`jaro` sollte eine Funktion sein.

```js
assert(typeof jaro == 'function');
```

`jaro("MARTHA", "MARHTA")` sollte eine Zahl zurückgeben.

```js
assert(typeof jaro('MARTHA', 'MARHTA') == 'number');
```

`jaro("MARTHA", "MARHTA")` sollte `0.9444444444444445` zurückgeben.

```js
assert.equal(jaro('MARTHA', 'MARHTA'), 0.9444444444444445);
```

`jaro("DIXON", "DICKSONX")` sollte `0.7666666666666666` zurückgeben.

```js
assert.equal(jaro('DIXON', 'DICKSONX'), 0.7666666666666666);
```

`jaro("JELLYFISH", "SMELLYFISH")` sollte `0.8962962962962964` zurückgeben.

```js
assert.equal(jaro('JELLYFISH', 'SMELLYFISH'), 0.8962962962962964);
```

`jaro("HELLOS", "CHELLO")` sollte `0.888888888888889` zurückgeben.

```js
assert.equal(jaro('HELLOS', 'CHELLO'), 0.888888888888889);
```

`jaro("ABCD", "BCDA")` sollte `0.8333333333333334` zurückgeben.

```js
assert.equal(jaro('ABCD', 'BCDA'), 0.8333333333333334);
```

# --seed--

## --seed-contents--

```js
function jaro(s, t) {

}
```

# --solutions--

```js
function jaro(s, t) {
  var s_len = s.length;
  var t_len = t.length;

  if (s_len == 0 && t_len == 0) return 1;

  var match_distance = Math.max(s_len, t_len) / 2 - 1;

  var s_matches = new Array(s_len);
  var t_matches = new Array(t_len);

  var matches = 0;
  var transpositions = 0;

  for (var i = 0; i < s_len; i++) {
    var start = Math.max(0, i - match_distance);
    var end = Math.min(i + match_distance + 1, t_len);

    for (var j = start; j < end; j++) {
      if (t_matches[j]) continue;
      if (s.charAt(i) != t.charAt(j)) continue;
      s_matches[i] = true;
      t_matches[j] = true;
      matches++;
      break;
    }
  }

  if (matches == 0) return 0;

  var k = 0;
  for (var i = 0; i < s_len; i++) {
    if (!s_matches[i]) continue;
    while (!t_matches[k]) k++;
    if (s.charAt(i) != t.charAt(k)) transpositions++;
    k++;
  }

  return ((matches / s_len) +
    (matches / t_len) +
    ((matches - transpositions / 2.0) / matches)) / 3.0;
}
```
