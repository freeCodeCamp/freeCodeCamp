---
id: 5a23c84252665b21eecc7ec2
title: Jaro distance
challengeType: 1
forumTopicId: 302292
dashedName: jaro-distance
---

# --description--

The Jaro distance is a measure of similarity between two strings. The higher the Jaro distance for two strings is, the more similar the strings are. The score is normalized such that `0` equates to no similarity and `1` is an exact match.

**Definition**

The Jaro distance \\( d_j \\) of two given strings \\(s_1\\) and \\(s_2\\) is

\\begin{align}d_j = \\begin{cases}0& & \\text{if }m=0 \\\\\\\\{\\frac {1}{3}}\\left({\\frac {m}{|s\_{1}|}}+{\\frac {m}{|s\_{2}|}}+{\\frac {m-t}{m}}\\right)& & \\text{otherwise}\\end{cases}\\end{align}

Where:

<ul>
  <li>\(m\) is the number of <i>matching characters</i>;</li>
  <li> \(t\) is half the number of <i>transpositions</i>.</li>
</ul>

Two characters from \\(s_1\\) and \\(s_2\\) respectively, are considered *matching* only if they are the same and not farther than \\(\\left\\lfloor\\frac{\\max(|s_1|,|s_2|)}{2}\\right\\rfloor-1\\).

Each character of \\(s_1\\) is compared with all its matching characters in \\(s_2\\) . The number of matching (but different sequence order) characters divided by 2 defines the number of *transpositions*.

**Example**

Given the strings \\(s_1\\) *DWAYNE* and \\(s_2\\) *DUANE* we find:

<ul>
  <li>\(m = 4\)</li>
  <li>\(|s_1| = 6\)</li>
  <li>\(|s_2| = 5\)</li>
  <li>\(t = 0\)</li>
</ul>

We find a Jaro score of: \\(d_j = \\frac{1}{3}\\left(\\frac{4}{6} + \\frac{4}{5} + \\frac{4-0}{4}\\right) = 0.822\\).

# --instructions--

Write a function a that takes two strings as parameters and returns the associated Jaro distance.

# --hints--

`jaro` should be a function.

```js
assert(typeof jaro == 'function');
```

`jaro("MARTHA", "MARHTA")` should return a number.

```js
assert(typeof jaro('MARTHA', 'MARHTA') == 'number');
```

`jaro("MARTHA", "MARHTA")` should return `0.9444444444444445`.

```js
assert.equal(jaro('MARTHA', 'MARHTA'), 0.9444444444444445);
```

`jaro("DIXON", "DICKSONX")` should return `0.7666666666666666`.

```js
assert.equal(jaro('DIXON', 'DICKSONX'), 0.7666666666666666);
```

`jaro("JELLYFISH", "SMELLYFISH")` should return `0.8962962962962964`.

```js
assert.equal(jaro('JELLYFISH', 'SMELLYFISH'), 0.8962962962962964);
```

`jaro("HELLOS", "CHELLO")` should return `0.888888888888889`.

```js
assert.equal(jaro('HELLOS', 'CHELLO'), 0.888888888888889);
```

`jaro("ABCD", "BCDA")` should return `0.8333333333333334`.

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
