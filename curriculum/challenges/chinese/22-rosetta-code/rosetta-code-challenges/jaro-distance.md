---
id: 5a23c84252665b21eecc7ec2
title: Jaro距离
challengeType: 1
forumTopicId: 302292
dashedName: jaro-distance
---

# --description--

The Jaro distance is a measure of similarity between two strings. The higher the Jaro distance for two strings is, the more similar the strings are. The score is normalized such that `0` equates to no similarity and `1` is an exact match.

**定义**

给定两个字符串 \\(s_1\\) 和 \\(s_2\\) ，它们的Jaro距离是：

\\begin{align}d_j = \\begin{cases}0& & \\text{if }m=0 \\\\\\\\{\\frac {1}{3}}\\left({\\frac {m}{|s\_{1}|}}+{\\frac {m}{|s\_{2}|}}+{\\frac {m-t}{m}}\\right)& & \\text{otherwise}\\end{cases}\\end{align}

其中：

<ul>
  <li>\(m\) is the number of <i>matching characters</i>;</li>
  <li> \(t\) is half the number of <i>transpositions</i>.</li>
</ul>

如果两个分别来自 \\(s_1\\) 和 \\(s_2\\) 中的字符是相同的，并且它们之间的距离不超过 \\(\\left\\lfloor\\frac{\\max(|s_1|,|s_2|)}{2}\\right\\rfloor-1\\) ，那么它们就被认为是 *匹配的*。

每一个 \\(s_1\\) 中的字符都被和它在 \\(s_2\\) 中对应的字符相比较。 *换位字符* 的数量就是 *匹配（但在字符串中顺序不同）字符* 的数量除以 2。

**示例**

对于给定的字符串 \\(s_1\\) "*DWAYNE*" 和 \\(s_2\\) "*DUANE*" 可以发现：

<ul>
  <li>\(m = 4\)</li>
  <li>\(|s_1| = 6\)</li>
  <li>\(|s_2| = 5\)</li>
  <li>\(t = 0\)</li>
</ul>

计算得出两字符串之间的 Jaro 距离为 \\(d_j = \\frac{1}{3}\\left(\\frac{4}{6} + \\frac{4}{5} + \\frac{4-0}{4}\\right) = 0.822\\) 。

# --instructions--

编写一个函数a，它接受两个字符串作为参数并返回相关的Jaro距离。

# --hints--

`jaro` 应该是一个函数。

```js
assert(typeof jaro == 'function');
```

`jaro("MARTHA", "MARHTA")` 应该返回一个数值。

```js
assert(typeof jaro('MARTHA', 'MARHTA') == 'number');
```

`jaro("MARTHA", "MARHTA")` 应该返回 `0.9444444444444445` 。

```js
assert.equal(jaro('MARTHA', 'MARHTA'), 0.9444444444444445);
```

`jaro("DIXON", "DICKSONX")` 应该返回 `0.7666666666666666` 。

```js
assert.equal(jaro('DIXON', 'DICKSONX'), 0.7666666666666666);
```

`jaro("JELLYFISH", "SMELLYFISH")` 应该返回 `0.8962962962962964` 。

```js
assert.equal(jaro('JELLYFISH', 'SMELLYFISH'), 0.8962962962962964);
```

`jaro("HELLOS", "CHELLO")` 应该返回 `0.888888888888889` 。

```js
assert.equal(jaro('HELLOS', 'CHELLO'), 0.888888888888889);
```

`jaro("ABCD", "BCDA")` 应该返回 `0.8333333333333334` 。

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
