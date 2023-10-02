---
id: 5900f4ca1000cf542c50ffdc
title: '問題 349: ラングトンのアリ'
challengeType: 1
forumTopicId: 302008
dashedName: problem-349-langtons-ant
---

# --description--

黒または白に塗られた規則的な格子の上を、アリが歩きます。

アリは常に基本方向 (上下左右) のいずれかを向き、次のルールに従って隣のマスへ移動します。

- 黒いマスにアリがいる場合、そのマスの色を白に変え、反時計回りに 90° 方向転換して 1 マス進みます。
- 白いマスにアリがいる場合、そのマスの色を黒に変え、時計回りに 90° 方向転換して 1 マス進みます。

格子全体が白い状態から始め、アリが ${10}^{18}$ 回移動した後、黒いマスはいくつありますか。

# --hints--

`langtonsAnt()` は `115384615384614940` を返す必要があります。

```js
assert.strictEqual(langtonsAnt(), 115384615384614940);
```

# --seed--

## --seed-contents--

```js
function langtonsAnt() {

  return true;
}

langtonsAnt();
```

# --solutions--

```js
// solution required
```
