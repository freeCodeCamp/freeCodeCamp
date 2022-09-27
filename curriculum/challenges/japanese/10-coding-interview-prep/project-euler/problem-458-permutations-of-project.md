---
id: 5900f5361000cf542c510049
title: '問題 458: "Project" の順列'
challengeType: 1
forumTopicId: 302132
dashedName: problem-458-permutations-of-project
---

# --description--

"`project`"という単語に含まれる文字からなるアルファベットの集合 $A$、すなわち $A = \\{c, e, j, o, p, r, t\\}$ について考えます。

$A$ の文字で構成される長さ $n$ の文字列のうち、"`project`" の 5040 通りの順列の一つである部分文字列を持たない文字列の数を、$T(n)$ とします。

$T(7) = 7^7 - 7! = 818\\,503$ です。

$T({10}^{12})$ を求めなさい。 回答は、下位 9 桁とすること。

# --hints--

`permutationsOfProject()` は `423341841` を返す必要があります。

```js
assert.strictEqual(permutationsOfProject(), 423341841);
```

# --seed--

## --seed-contents--

```js
function permutationsOfProject() {

  return true;
}

permutationsOfProject();
```

# --solutions--

```js
// solution required
```
