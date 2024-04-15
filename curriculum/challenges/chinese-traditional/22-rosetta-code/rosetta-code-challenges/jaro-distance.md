---
id: 5a23c84252665b21eecc7ec2
title: Jaro距離
challengeType: 1
forumTopicId: 302292
dashedName: jaro-distance
---

# --description--

The Jaro distance is a measure of similarity between two strings. The higher the Jaro distance for two strings is, the more similar the strings are. The score is normalized such that `0` equates to no similarity and `1` is an exact match.

**定義**

給定兩個字符串 \\(s_1\\) 和 \\(s_2\\) ，它們的Jaro距離是：

\\begin{align}d_j = \\begin{cases}0& & \\text{if }m=0 \\\\\\\\{\\frac {1}{3}}\\left({\\frac {m}{|s\_{1}|}}+{\\frac {m}{|s\_{2}|}}+{\\frac {m-t}{m}}\\right)& & \\text{otherwise}\\end{cases}\\end{align}

其中：

<ul>
  <li>\(m\) is the number of <i>matching characters</i>;</li>
  <li> \(t\) is half the number of <i>transpositions</i>.</li>
</ul>

如果兩個分別來自 \\(s_1\\) 和 \\(s_2\\) 中的字符是相同的，並且它們之間的距離不超過 \\(\\left\\lfloor\\frac{\\max(|s_1|,|s_2|)}{2}\\right\\rfloor-1\\) ，那麼它們就被認爲是 *匹配的*。

每一個 \\(s_1\\) 中的字符都被和它在 \\(s_2\\) 中對應的字符相比較。 *換位字符* 的數量就是 *匹配（但在字符串中順序不同）字符* 的數量除以 2。

**示例**

對於給定的字符串 \\(s_1\\) "*DWAYNE*" 和 \\(s_2\\) "*DUANE*" 可以發現：

<ul>
  <li>\(m = 4\)</li>
  <li>\(|s_1| = 6\)</li>
  <li>\(|s_2| = 5\)</li>
  <li>\(t = 0\)</li>
</ul>

計算得出兩字符串之間的 Jaro 距離爲 \\(d_j = \\frac{1}{3}\\left(\\frac{4}{6} + \\frac{4}{5} + \\frac{4-0}{4}\\right) = 0.822\\) 。

# --instructions--

編寫一個函數a，它接受兩個字符串作爲參數並返回相關的Jaro距離。

# --hints--

`jaro` 應該是一個函數。

```js
assert(typeof jaro == 'function');
```

`jaro("MARTHA", "MARHTA")` 應該返回一個數值。

```js
assert(typeof jaro('MARTHA', 'MARHTA') == 'number');
```

`jaro("MARTHA", "MARHTA")` 應該返回 `0.9444444444444445` 。

```js
assert.equal(jaro('MARTHA', 'MARHTA'), 0.9444444444444445);
```

`jaro("DIXON", "DICKSONX")` 應該返回 `0.7666666666666666` 。

```js
assert.equal(jaro('DIXON', 'DICKSONX'), 0.7666666666666666);
```

`jaro("JELLYFISH", "SMELLYFISH")` 應該返回 `0.8962962962962964` 。

```js
assert.equal(jaro('JELLYFISH', 'SMELLYFISH'), 0.8962962962962964);
```

`jaro("HELLOS", "CHELLO")` 應該返回 `0.888888888888889` 。

```js
assert.equal(jaro('HELLOS', 'CHELLO'), 0.888888888888889);
```

`jaro("ABCD", "BCDA")` 應該返回 `0.8333333333333334` 。

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
