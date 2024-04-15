---
id: 5900f4671000cf542c50ff7a
title: '問題 251: カルダノの三つ組数'
challengeType: 1
forumTopicId: 301899
dashedName: problem-251-cardano-triplets
---

# --description--

正整数の三つ組数 ($a$,$b$,$c$) は、次の条件を満たす場合にカルダノの三つ組数 (Cardano Triplet) と呼ばれます。

$$\sqrt[3]{a + b \sqrt{c}} + \sqrt[3]{a - b \sqrt{c}} = 1$$

例えば、(2,1,5) はカルダノの三つ組数です。

$a + b + c ≤ 1000$ となるカルダノの三つ組数は 149 個あります。

$a + b + c ≤ 110\\,000\\,000$ となるカルダノの三つ組数はいくつありますか。

# --hints--

`cardanoTriplets()` は `18946051` を返す必要があります。

```js
assert.strictEqual(cardanoTriplets(), 18946051);
```

# --seed--

## --seed-contents--

```js
function cardanoTriplets() {

  return true;
}

cardanoTriplets();
```

# --solutions--

```js
// solution required
```
