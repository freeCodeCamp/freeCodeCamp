---
id: 5a23c84252665b21eecc7ec2
title: ジャロ距離
challengeType: 1
forumTopicId: 302292
dashedName: jaro-distance
---

# --description--

ジャロ距離は、2つの文字列の類似性を測る尺度です。 2つの文字列のジャロ距離が大きいほど、類似性が高くなります。 スコアは、`0` は類似性がなく、 `1` は完全一致であるように正規化されています。

**定義**

2つの指定された文字列 \\(s_1\\) と \\(s_2\\) のジャロ距離 \\( d_j \\) は以下となります。

\\begin{align}d_j = \\begin{cases}0& & \\text{if }m=0 \\\\\\\\{\\frac {1}{3}}\\left({\\frac {m}{|s\_{1}|}}+{\\frac {m}{|s\_{2}|}}+{\\frac {m-t}{m}}\\right)& & \\text{otherwise}\\end{cases}\\end{align}

ここでは、

<ul>
  <li>\(m\) は <i>一致する文字数 </i> です。</li>
  <li> \(t\) は <i>転置</i> の半数です。</li>
</ul>

\\(s_1\\) および \\(s_2\\) の2つの文字はそれぞれ、同じか、\\(\\left\\lfloor\\frac{\\max(|s_1|,|s_2|)}{2}\\right\\rfloor-1\\) よりも離れていない場合にのみ*一致している*とみなされます。

\\(s_1\\) の各文字は、\\(s_2\\) の一致しているすべての文字と対照されます。 一致する文字の数 (ただし、文字列における順序は異なる) を 2 で割ることで、 *転置*の数が定義されます。

**例**

文字列 \\(s_1\\) *DWAYNE* と \\(s_2\\) *DUANE*の場合、以下となります。

<ul>
  <li>\(m = 4\)</li>
  <li>\(|s_1| = 6\)</li>
  <li>\(|s_2| = 5\)</li>
  <li>\(t = 0\)</li>
</ul>

ジャロスコアは次のように求められます: \\(d_j = \\frac{1}{3}\\left(\\frac{4}{6} + \\frac{4}{5} + \\frac{4-0}{4}\\right) = 0. 22\\)

# --instructions--

2つの文字列をパラメータとして取り、関連するジャロ距離を返す関数を記述してください。

# --hints--

`jaro` は関数とします。

```js
assert(typeof jaro == 'function');
```

`jaro("MARTHA", "MARHTA")` は数値を返す必要があります。

```js
assert(typeof jaro('MARTHA', 'MARHTA') == 'number');
```

`jaro("MARTHA", "MARHTA")` は `0.9444444444444445` を返す必要があります。

```js
assert.equal(jaro('MARTHA', 'MARHTA'), 0.9444444444444445);
```

`jaro("DIXON", "DICKSONX")` は `0.7666666666666666` を返す必要があります。

```js
assert.equal(jaro('DIXON', 'DICKSONX'), 0.7666666666666666);
```

`jaro("JELLYFISH", "SMELLYFISH")` は `0.8962962962962964` を返す必要があります。

```js
assert.equal(jaro('JELLYFISH', 'SMELLYFISH'), 0.8962962962962964);
```

`jaro("HELLOS", "CHELLO")` は `0.888888888888889` を返す必要があります。

```js
assert.equal(jaro('HELLOS', 'CHELLO'), 0.888888888888889);
```

`jaro("ABCD", "BCDA")` は `0.8333333333333334` を返す必要があります。

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
