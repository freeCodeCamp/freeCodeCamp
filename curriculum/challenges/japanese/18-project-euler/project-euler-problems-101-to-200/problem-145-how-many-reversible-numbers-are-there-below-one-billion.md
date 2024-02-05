---
id: 5900f3fd1000cf542c50ff10
title: '問題 145: 10 億未満に可逆数はいくつあるか'
challengeType: 1
forumTopicId: 301774
dashedName: problem-145-how-many-reversible-numbers-are-there-below-one-billion
---

# --description--

いくつかの正の整数 $n$ は、和 [ $n + reverse(n)$] の桁がすべて奇数 (10 進数) であるという性質を持ちます。 例えば、$36 + 63 = 99$, $409 + 904 = 1313$ です。 このような数字を「可逆数」と呼ぶことにします。36, 63, 409, 904 は可逆数です。 先行ゼロは、$n$ と $reverse(n)$ のいずれにも使用できません。

1000 未満の可逆数は 120 個あります。

10 億 (${10}^9$) 未満の可逆数はいくつありますか。

# --hints--

`reversibleNumbers()` は `608720` を返す必要があります。

```js
assert.strictEqual(reversibleNumbers(), 608720);
```

# --seed--

## --seed-contents--

```js
function reversibleNumbers() {

  return true;
}

reversibleNumbers();
```

# --solutions--

```js
// solution required
```
