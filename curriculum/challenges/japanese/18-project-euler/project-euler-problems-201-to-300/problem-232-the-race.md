---
id: 5900f4551000cf542c50ff67
title: '問題 232: レース'
challengeType: 1
forumTopicId: 301876
dashedName: problem-232-the-race
---

# --description--

「レース」というゲームでは、2 人のプレイヤーが偏りのない 1 枚のコインを交代で使います。

プレイヤー 1 は自分のターンでコインを 1 回投げ、表が出たら 1 点を獲得し、裏が出たら 0 点です。

プレイヤー 2 は、自分のターンで正の整数 $T$ を選び、コインを $T$ 回投げます。すべて表が出たら $2^{T - 1}$ 点を獲得し、それ以外の場合は 0 点です。

最初に投げるのはプレイヤー 1 です。 勝者は、先に 100 点以上に達したプレイヤーです。

プレイヤー 2 は自分のターンになるたびに、自分が勝つ確率が最も高くなるようなコイン投げの回数 $T$ を選びます。

プレイヤー 2 が勝つ確率を求めなさい。

回答は、四捨五入して小数第 8 位まで求め、0.abcdefgh の形式にすること。

# --hints--

`theRace()` は `0.83648556` を返す必要があります。

```js
assert.strictEqual(theRace(), 0.83648556);
```

# --seed--

## --seed-contents--

```js
function theRace() {

  return true;
}

theRace();
```

# --solutions--

```js
// solution required
```
