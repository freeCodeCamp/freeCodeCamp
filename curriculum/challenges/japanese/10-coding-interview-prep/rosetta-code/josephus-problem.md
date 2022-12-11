---
id: 5a23c84252665b21eecc7ec5
title: ヨセフスの問題
challengeType: 1
forumTopicId: 302294
dashedName: josephus-problem
---

# --description--

Josephus problem is a math puzzle with a grim description: $n$ prisoners are standing on a circle, sequentially numbered from $0$ to $n-1$.

死刑執行人が円の周囲を歩きながら、囚人 $0$ から始め、$k$ 番目ごとに囚人を処刑していきます。

死刑の執行が進むにつれ円はどんどん小さくなっていき、最後の1人は釈放されます。

例えば、 $n=5$ 人の囚人がおり、 $k=2$ の場合、囚人が処刑される順番 (「執行シーケンス」と呼ぶことにしましょう) は 1、3、0、4 となり、釈放されるのは 2 番の囚人になります。

任意の $n, k > 0$ が与えられた場合に、どの囚人が最後に生き残るかを求めてみましょう。

このような例の 1 つに、囚人が41 人で、3<sup>rd</sup> 番目の囚人ごとに処刑された ($k=3$) という出来事があります。

そのうちの 1 人がこの問題を解いたヨセフスという賢い人物で、最終的に生き残り、この物語を語り継ぎました。

ヨセフスは何番目だったでしょうか。

# --instructions--

Write a function that takes the initial number of prisoners and `k` as parameters and returns the number of the prisoner that survives.

# --hints--

`josephus` は関数とします。

```js
assert(typeof josephus == 'function');
```

`josephus(30,3)` は数値を返す必要があります。

```js
assert(typeof josephus(30, 3) == 'number');
```

`josephus(30,3)` は `28` を返す必要があります。

```js
assert.equal(josephus(30, 3), 28);
```

`josephus(30,5)` は `2` を返す必要があります。

```js
assert.equal(josephus(30, 5), 2);
```

`josephus(20,2)` は `8` を返す必要があります。

```js
assert.equal(josephus(20, 2), 8);
```

`josephus(17,6)` は `1` を返す必要があります。

```js
assert.equal(josephus(17, 6), 1);
```

`josephus(29,4)` は `1` を返す必要があります。

```js
assert.equal(josephus(29, 4), 1);
```

# --seed--

## --seed-contents--

```js
function josephus(init, kill) {

}
```

# --solutions--

```js
function josephus(init, kill) {
  const arr = Array.from(Array(init).keys());
  let curr = -1
  while (arr.length > 1) {
    curr = (curr + kill) % arr.length;
    arr.splice(curr, 1);
    curr--;
  }
  return arr[0];
}
```
