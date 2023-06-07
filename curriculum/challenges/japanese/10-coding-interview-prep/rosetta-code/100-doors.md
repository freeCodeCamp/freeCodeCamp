---
id: 594810f028c0303b75339acb
title: 100個のドア
challengeType: 1
forumTopicId: 302217
dashedName: 100-doors
---

# --description--

100個のドアが連続してあり、最初はすべてのドアは閉じています。 100個のドア全てを対象とします。 1回目はすべてのドアを訪問し、ドアを「切り替え」(ドアが閉じられている場合は、開き、開いている場合は、閉じる）ます。 2回目は、2の倍数のドア(#2のドア、#4のドア、#6のドア...)に訪問し、それぞれの開閉を「切り替え」ます。 3回目は、3の倍数のドア(#3のドア、#6のドア、#9のドア...)を訪問して「切替」を行い、100番目のドアまで続けます。

# --instructions--

3回の訪問が終了した時点でのドアの状態を示す関数を作成します。 配列形式で最終的な結果を返します。開いている状態のドアの番号を配列形式で返します。

# --hints--

`getFinalOpenedDoors` という関数です。

```js
assert(typeof getFinalOpenedDoors === 'function');
```

`getFinalOpenedDoors` は配列を返します。

```js
assert(Array.isArray(getFinalOpenedDoors(100)));
```

`getFinalOpenedDoors` は正確な結果を返します。

```js
assert.deepEqual(getFinalOpenedDoors(100), solution);
```

# --seed--

## --after-user-code--

```js
const solution = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
```

## --seed-contents--

```js
function getFinalOpenedDoors(numDoors) {

}
```

# --solutions--

```js
function getFinalOpenedDoors(numDoors) {
  // this is the final pattern (always squares).
  // thus, the most efficient solution simply returns an array of squares up to numDoors).
  const finalState = [];
  let i = 1;
  while (Math.pow(i, 2) <= numDoors) {
    finalState.push(Math.pow(i, 2));
    i++;
  }
  return finalState;
}
```
