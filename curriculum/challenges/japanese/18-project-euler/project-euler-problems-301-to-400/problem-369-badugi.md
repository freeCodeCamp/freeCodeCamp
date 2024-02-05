---
id: 5900f4de1000cf542c50fff0
title: '問題 369: バドゥーギ'
challengeType: 1
forumTopicId: 302030
dashedName: problem-369-badugi
---

# --description--

標準的な 52 枚組のトランプで、ペアがなく、同じスート (マーク) の 2 枚のカードもない 4 枚のカードの組は、バドゥーギと呼ばれます。

バドゥーギである 4 枚のカードからなる部分集合を持つ $n$ 枚のカードを選ぶ方法の数を、$f(n)$ とします。 例えば、標準的な 52 枚組のトランプから 5 枚のカードを選ぶ法は $2\\,598\\,960$ 通りあり、そのうち $514\\,800$ 通りが、バドゥーギとなる 4 枚のカードからなる部分集合を含んでいるので、$f(5) = 514800$ となります。

$4 ≤ n ≤ 13$ のとき、$\sum f(n)$ を求めなさい。

# --hints--

`badugi()` は `862400558448` を返す必要があります。

```js
assert.strictEqual(badugi(), 862400558448);
```

# --seed--

## --seed-contents--

```js
function badugi() {

  return true;
}

badugi();
```

# --solutions--

```js
// solution required
```
